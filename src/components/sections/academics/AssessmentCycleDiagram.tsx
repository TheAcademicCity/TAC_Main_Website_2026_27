export function AssessmentCycleDiagram() {
  return (
    <svg
      viewBox="0 0 520 480"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      role="img"
      aria-label="Assessment cycle diagram showing continuous assessment, term exams, individual analysis, remediation and parent feedback feeding into the Student Progression Plan"
    >
      <defs>
        <marker id="assess-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#dce8e4" />
        </marker>
      </defs>

      <rect width="520" height="480" rx="8" fill="#f4f8f6" />

      <text
        x="260"
        y="36"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        letterSpacing="2"
        fill="#185850"
      >
        ASSESSMENT CYCLE
      </text>

      <circle cx="260" cy="240" r="62" fill="#185850" />
      <text x="260" y="233" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">
        STUDENT
      </text>
      <text x="260" y="249" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">
        PROGRESSION
      </text>
      <text x="260" y="265" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f6ab16">
        PLAN
      </text>

      <circle cx="260" cy="100" r="48" fill="#fff" stroke="#dce8e4" strokeWidth="1.5" />
      <text x="260" y="110" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f3d38">
        CONTINUOUS
      </text>
      <text x="260" y="124" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f3d38">
        ASSESSMENT
      </text>
      <text x="260" y="138" textAnchor="middle" fontSize="9" fill="#5a6a72">
        Tests · Projects · CA
      </text>

      <circle cx="420" cy="195" r="48" fill="#fff" stroke="#dce8e4" strokeWidth="1.5" />
      <text x="420" y="200" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f3d38">
        TERM
      </text>
      <text x="420" y="214" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f3d38">
        EXAMS
      </text>
      <text x="420" y="228" textAnchor="middle" fontSize="9" fill="#5a6a72">
        2× per year
      </text>

      <circle cx="380" cy="358" r="48" fill="#fff" stroke="#dce8e4" strokeWidth="1.5" />
      <text x="380" y="363" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f3d38">
        INDIVIDUAL
      </text>
      <text x="380" y="377" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f3d38">
        ANALYSIS
      </text>
      <text x="380" y="391" textAnchor="middle" fontSize="9" fill="#5a6a72">
        Gap identification
      </text>

      <circle cx="140" cy="358" r="48" fill="#fff" stroke="#dce8e4" strokeWidth="1.5" />
      <text x="140" y="363" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f3d38">
        REMEDIATION
      </text>
      <text x="140" y="377" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f3d38">
        &amp; ENRICHMENT
      </text>
      <text x="140" y="391" textAnchor="middle" fontSize="9" fill="#5a6a72">
        Targeted support
      </text>

      <circle cx="100" cy="195" r="48" fill="#fff" stroke="#dce8e4" strokeWidth="1.5" />
      <text x="100" y="200" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f3d38">
        PARENT
      </text>
      <text x="100" y="214" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f3d38">
        FEEDBACK
      </text>
      <text x="100" y="228" textAnchor="middle" fontSize="9" fill="#5a6a72">
        Transparent reports
      </text>

      <path
        d="M300 118 Q375 130 380 152"
        fill="none"
        stroke="#dce8e4"
        strokeWidth="2"
        markerEnd="url(#assess-arr)"
      />
      <path
        d="M418 242 Q430 300 410 318"
        fill="none"
        stroke="#dce8e4"
        strokeWidth="2"
        markerEnd="url(#assess-arr)"
      />
      <path
        d="M335 375 Q260 400 185 375"
        fill="none"
        stroke="#dce8e4"
        strokeWidth="2"
        markerEnd="url(#assess-arr)"
      />
      <path
        d="M112 317 Q95 280 105 242"
        fill="none"
        stroke="#dce8e4"
        strokeWidth="2"
        markerEnd="url(#assess-arr)"
      />
      <path
        d="M140 150 Q175 120 218 115"
        fill="none"
        stroke="#dce8e4"
        strokeWidth="2"
        markerEnd="url(#assess-arr)"
      />

      <line x1="260" y1="178" x2="260" y2="148" stroke="#f6ab16" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="322" y1="210" x2="368" y2="192" stroke="#f6ab16" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="304" y1="280" x2="336" y2="316" stroke="#f6ab16" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="216" y1="280" x2="184" y2="316" stroke="#f6ab16" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="198" y1="210" x2="148" y2="190" stroke="#f6ab16" strokeWidth="1.5" strokeDasharray="4 3" />

      <line x1="60" y1="458" x2="90" y2="458" stroke="#dce8e4" strokeWidth="2" markerEnd="url(#assess-arr)" />
      <text x="96" y="462" fontSize="9" fill="#5a6a72" fontWeight="600">
        Assessment flow
      </text>
      <line x1="200" y1="458" x2="230" y2="458" stroke="#f6ab16" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="236" y="462" fontSize="9" fill="#5a6a72" fontWeight="600">
        Feeds into SPP
      </text>
    </svg>
  );
}
