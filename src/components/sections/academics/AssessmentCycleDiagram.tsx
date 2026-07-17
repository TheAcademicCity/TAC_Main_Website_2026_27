type CircleNode = {
  cx: number;
  cy: number;
  r: number;
  lines: [string, string, string];
};

const CENTER = { cx: 260, cy: 240, r: 62 };

const OUTER_NODE_R = 54;

const NODES: CircleNode[] = [
  { cx: 260, cy: 100, r: OUTER_NODE_R, lines: ["CONTINUOUS", "ASSESSMENT", "Tests & Projects"] },
  { cx: 420, cy: 195, r: OUTER_NODE_R, lines: ["TERM", "EXAMS", "2× per year"] },
  { cx: 380, cy: 358, r: OUTER_NODE_R, lines: ["INDIVIDUAL", "ANALYSIS", "Gap identification"] },
  { cx: 140, cy: 358, r: OUTER_NODE_R, lines: ["REMEDIATION", "& ENRICHMENT", "Targeted support"] },
  { cx: 100, cy: 195, r: OUTER_NODE_R, lines: ["PARENT", "FEEDBACK", "Transparent reports"] },
];

const CYCLE_ARC_RADIUS = 130;

function circleEdge(from: CircleNode, to: CircleNode) {
  const angle = Math.atan2(to.cy - from.cy, to.cx - from.cx);

  return {
    start: {
      x: from.cx + from.r * Math.cos(angle),
      y: from.cy + from.r * Math.sin(angle),
    },
    end: {
      x: to.cx + to.r * Math.cos(angle + Math.PI),
      y: to.cy + to.r * Math.sin(angle + Math.PI),
    },
  };
}

function spokeEdge(node: CircleNode) {
  const angle = Math.atan2(node.cy - CENTER.cy, node.cx - CENTER.cx);

  return {
    start: {
      x: CENTER.cx + CENTER.r * Math.cos(angle),
      y: CENTER.cy + CENTER.r * Math.sin(angle),
    },
    end: {
      x: node.cx + node.r * Math.cos(angle + Math.PI),
      y: node.cy + node.r * Math.sin(angle + Math.PI),
    },
  };
}

/** Circular arc with a shared radius for every cycle arrow. */
function circularArcPath(
  start: { x: number; y: number },
  end: { x: number; y: number },
  radius = CYCLE_ARC_RADIUS,
) {
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  const dx = end.x - start.x;
  const dy = end.y - start.y;

  // Pick the sweep that bulges outward (away from the SPP center).
  const perpX = dy;
  const perpY = -dx;
  const towardCenterX = CENTER.cx - midX;
  const towardCenterY = CENTER.cy - midY;
  const sweep = perpX * towardCenterX + perpY * towardCenterY < 0 ? 1 : 0;

  return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} A ${radius} ${radius} 0 0 ${sweep} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
}

function straightPath(start: { x: number; y: number }, end: { x: number; y: number }) {
  return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} L ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
}

function BubbleLabel({ cx, cy, lines }: CircleNode) {
  return (
    <text
      x={cx}
      y={cy - 10}
      textAnchor="middle"
      fontFamily="Montserrat, sans-serif"
      fill="#0f3d38"
    >
      <tspan x={cx} dy="0" fontSize="10" fontWeight="800">
        {lines[0]}
      </tspan>
      <tspan x={cx} dy="14" fontSize="10" fontWeight="800">
        {lines[1]}
      </tspan>
      <tspan x={cx} dy="13" fontSize="9" fill="#5a6a72">
        {lines[2]}
      </tspan>
    </text>
  );
}

export function AssessmentCycleDiagram() {
  const cyclePaths = NODES.map((node, index) => {
    const next = NODES[(index + 1) % NODES.length]!;
    const edge = circleEdge(node, next);
    return circularArcPath(edge.start, edge.end);
  });

  const spokePaths = NODES.map((node) => {
    const edge = spokeEdge(node);
    return straightPath(edge.start, edge.end);
  });

  return (
    <svg
      viewBox="0 0 520 450"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      role="img"
      aria-label="Assessment cycle diagram showing continuous assessment, term exams, individual analysis, remediation and parent feedback feeding into the Student Progression Plan"
    >
      <defs>
        <marker
          id="assess-arr"
          markerWidth="12"
          markerHeight="12"
          refX="9"
          refY="6"
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path
            d="M2.5 2.5 L9 6 L2.5 9.5"
            fill="none"
            stroke="#c5d5d0"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>

      <rect width="520" height="450" rx="8" fill="#f4f8f6" />

      <text
        x="260"
        y="36"
        textAnchor="middle"
        fontFamily="Montserrat, sans-serif"
        fontSize="13"
        fontWeight="800"
        letterSpacing="2"
        fill="#185850"
      >
        ASSESSMENT CYCLE
      </text>

      <circle cx={CENTER.cx} cy={CENTER.cy} r={CENTER.r} fill="#185850" />
      <text
        x={CENTER.cx}
        y={CENTER.cy - 14}
        textAnchor="middle"
        fontFamily="Montserrat, sans-serif"
        fill="#fff"
      >
        <tspan x={CENTER.cx} dy="0" fontSize="11" fontWeight="700">
          STUDENT
        </tspan>
        <tspan x={CENTER.cx} dy="16" fontSize="11" fontWeight="700">
          PROGRESSION
        </tspan>
        <tspan x={CENTER.cx} dy="16" fontSize="11" fontWeight="700" fill="#f6ab16">
          PLAN
        </tspan>
      </text>

      {cyclePaths.map((path, index) => (
        <path
          key={`cycle-${index}`}
          d={path}
          fill="none"
          stroke="#dce8e4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          markerEnd="url(#assess-arr)"
        />
      ))}

      {spokePaths.map((path, index) => (
        <path
          key={`spoke-${index}`}
          d={path}
          fill="none"
          stroke="#f6ab16"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      ))}

      {NODES.map((node) => (
        <g
          key={node.lines[0]}
          className="group cursor-default transition-transform duration-300 ease-out hover:scale-[1.06]"
          style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
        >
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#fff"
            stroke="#dce8e4"
            strokeWidth="1.5"
            className="transition-[filter,stroke] duration-300 ease-out group-hover:stroke-emerald/35 group-hover:drop-shadow-[0_10px_24px_rgba(15,61,56,0.14)]"
          />
          <BubbleLabel {...node} />
        </g>
      ))}
    </svg>
  );
}
