// Compact animated data-pipeline DAG: source → ingest → transform → serve.
// Edges animate a "flowing data" dash to signal a live pipeline.
const nodes = [
  { x: 26, label: "source" },
  { x: 122, label: "ingest", active: true },
  { x: 218, label: "transform", active: true },
  { x: 316, label: "serve" },
];

export default function PipelineGraph() {
  return (
    <svg
      viewBox="0 0 360 70"
      width="100%"
      role="img"
      aria-label="Data pipeline: source to ingest to transform to serve"
      className="block"
    >
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#9aa3ae" />
          <stop offset="1" stopColor="#eff0f2" />
        </linearGradient>
      </defs>

      {/* edges */}
      {[0, 1, 2].map((i) => (
        <line
          key={i}
          x1={nodes[i].x + 30}
          y1="35"
          x2={nodes[i + 1].x - 14}
          y2="35"
          stroke="url(#edgeGrad)"
          strokeWidth="1.8"
          className="flow-edge"
        />
      ))}

      {/* nodes */}
      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy="18" r="2.5" fill="#9aa3ae" />
          <rect
            x={n.x - 14}
            y="24"
            width="58"
            height="22"
            rx="6"
            fill="#14181e"
            stroke={n.active ? "#eff0f2" : "#2f363f"}
            strokeWidth="1"
          />
          <text
            x={n.x + 15}
            y="39"
            textAnchor="middle"
            fontSize="9"
            fill="#ccd2d9"
            fontFamily="'JetBrains Mono', monospace"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
