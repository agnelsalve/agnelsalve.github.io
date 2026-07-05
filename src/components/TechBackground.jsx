// Subtle, light "data / ML pipeline" backdrop rendered behind all content.
// Faint right-angle traces with flowing data, gently pulsing nodes, and two
// slowly drifting glow blobs. Pure SVG + CSS, pointer-events: none.

// Circuit-like traces spanning a 1440x900 canvas (scaled to cover the viewport).
const traces = [
  "M-40 170 H300 V330 H640",
  "M1480 250 H1120 V120 H770",
  "M-40 700 H240 V560 H560 V650 H920",
  "M1480 650 H1180 V790 H820",
  "M720 -40 V200 H480 V420",
];

// Node positions (junctions) that gently pulse.
const nodes = [
  [300, 170], [300, 330], [640, 330],
  [1120, 250], [1120, 120],
  [240, 700], [560, 560], [560, 650],
  [1180, 650], [1180, 790],
  [720, 200], [480, 200], [480, 420],
];

// Traveling "data packets" — each rides one of the traces.
const packets = ["t0", "t1", "t2", "t3"];

export default function TechBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* drifting glow blobs */}
      <div className="tb-blob tb-blob-1" />
      <div className="tb-blob tb-blob-2" />

      {/* pipeline network */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.3]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="tbEdge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>

        {/* base traces (static, very faint) */}
        <g stroke="#26263a" strokeWidth="1" fill="none">
          {traces.map((d, i) => (
            <path key={`b${i}`} id={`trace-${i}`} d={d} />
          ))}
        </g>

        {/* flowing data along the traces */}
        <g stroke="url(#tbEdge)" strokeWidth="1.4" fill="none">
          {traces.map((d, i) => (
            <path key={`f${i}`} d={d} className="tb-flow" style={{ animationDelay: `${i * 0.8}s` }} />
          ))}
        </g>

        {/* pulsing nodes */}
        <g fill="#22d3ee">
          {nodes.map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="3"
              className="tb-node"
              style={{ animationDelay: `${(i % 5) * 0.5}s` }}
            />
          ))}
        </g>

        {/* traveling packets */}
        <g>
          {packets.map((_, i) => (
            <circle key={i} r="2.6" fill="#a78bfa" className="tb-packet">
              <animateMotion dur={`${10 + i * 2}s`} repeatCount="indefinite" begin={`${i * 1.5}s`}>
                <mpath href={`#trace-${i}`} />
              </animateMotion>
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
}
