import type { ComponentProps } from "react";
import { Icon } from "@/components/ui/Icon";

type IconName = ComponentProps<typeof Icon>["name"];

type CircleNode = {
  cx: number;
  cy: number;
  r: number;
  icon: IconName;
  iconClassName: string;
  lines: [string, string, string];
};

const VIEW_WIDTH = 600;
const VIEW_HEIGHT = 528;
const TITLE_Y = 36;
const DIAGRAM_Y_OFFSET = 24;
const CENTER = { cx: 300, cy: 275 + DIAGRAM_Y_OFFSET, r: 70 };
const OUTER_NODE_R = 68;
const CYCLE_ARC_RADIUS = 152;

const NODES: CircleNode[] = [
  {
    cx: 300,
    cy: 108 + DIAGRAM_Y_OFFSET,
    r: OUTER_NODE_R,
    icon: "document",
    iconClassName: "h-4 w-4 text-emerald",
    lines: ["CONTINUOUS", "ASSESSMENT", "Tests & Projects"],
  },
  {
    cx: 488,
    cy: 220 + DIAGRAM_Y_OFFSET,
    r: OUTER_NODE_R,
    icon: "calendar",
    iconClassName: "h-4 w-4 text-forest-deep",
    lines: ["TERM", "EXAMS", "2× per year"],
  },
  {
    cx: 442,
    cy: 418 + DIAGRAM_Y_OFFSET,
    r: OUTER_NODE_R,
    icon: "chart",
    iconClassName: "h-4 w-4 text-emerald",
    lines: ["INDIVIDUAL", "ANALYSIS", "Gap identification"],
  },
  {
    cx: 158,
    cy: 418 + DIAGRAM_Y_OFFSET,
    r: OUTER_NODE_R,
    icon: "target",
    iconClassName: "h-4 w-4 text-gold-dark",
    lines: ["REMEDIATION", "& ENRICHMENT", "Targeted support"],
  },
  {
    cx: 112,
    cy: 220 + DIAGRAM_Y_OFFSET,
    r: OUTER_NODE_R,
    icon: "users",
    iconClassName: "h-4 w-4 text-violet",
    lines: ["PARENT", "FEEDBACK", "Transparent reports"],
  },
];

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

function circularArcPath(
  start: { x: number; y: number },
  end: { x: number; y: number },
  radius = CYCLE_ARC_RADIUS,
) {
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  const dx = end.x - start.x;
  const dy = end.y - start.y;

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

function NodeContent({ cx, cy, r, icon, iconClassName, lines }: CircleNode) {
  const diameter = r * 2;

  return (
    <foreignObject x={cx - r} y={cy - r} width={diameter} height={diameter}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-2.5 px-2 text-center">
        <div className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full bg-emerald/12">
          <Icon name={icon} className={iconClassName} />
        </div>
        <div className="font-montserrat leading-none">
          <p className="text-[10px] font-extrabold text-forest-deep">{lines[0]}</p>
          <p className="mt-1.5 text-[10px] font-extrabold text-forest-deep">{lines[1]}</p>
          <p className="mt-1.5 text-[9px] text-slate">{lines[2]}</p>
        </div>
      </div>
    </foreignObject>
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
      viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-auto w-full max-w-[640px] lg:max-w-none"
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

      <rect width={VIEW_WIDTH} height={VIEW_HEIGHT} rx="8" fill="#f4f8f6" />

      <text
        x={CENTER.cx}
        y={TITLE_Y}
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
      <foreignObject
        x={CENTER.cx - CENTER.r}
        y={CENTER.cy - CENTER.r}
        width={CENTER.r * 2}
        height={CENTER.r * 2}
      >
        <div className="flex h-full w-full flex-col items-center justify-center text-center font-montserrat text-[11px] font-bold leading-none text-white">
          <span>STUDENT</span>
          <span className="mt-1.5">PROGRESSION</span>
          <span className="mt-1.5 text-gold">PLAN</span>
        </div>
      </foreignObject>

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
          <NodeContent {...node} />
        </g>
      ))}
    </svg>
  );
}
