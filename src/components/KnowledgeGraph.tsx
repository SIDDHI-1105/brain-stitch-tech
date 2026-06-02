export function KnowledgeGraph() {
  const nodes = [
    { id: "core", x: 200, y: 200, r: 28, label: "Idea", primary: true },
    { id: "n1", x: 60, y: 90, r: 18, label: "Notes" },
    { id: "n2", x: 340, y: 80, r: 16, label: "Tasks" },
    { id: "n3", x: 360, y: 320, r: 20, label: "Links" },
    { id: "n4", x: 50, y: 320, r: 17, label: "People" },
    { id: "n5", x: 200, y: 40, r: 12 },
    { id: "n6", x: 200, y: 360, r: 14, label: "Topics" },
    { id: "n7", x: 110, y: 200, r: 9 },
    { id: "n8", x: 290, y: 200, r: 9 },
  ];

  const edges = [
    ["core", "n1"], ["core", "n2"], ["core", "n3"], ["core", "n4"],
    ["core", "n5"], ["core", "n6"], ["core", "n7"], ["core", "n8"],
    ["n1", "n5"], ["n2", "n3"], ["n4", "n6"], ["n1", "n4"], ["n2", "n5"],
  ];

  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative aspect-square w-full max-w-[500px]">
      <div className="absolute inset-0 radial-purple animate-pulse-glow" />
      <svg viewBox="0 0 400 400" className="relative h-full w-full">
        <defs>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A78BFF" />
            <stop offset="100%" stopColor="#7C5CFF" />
          </radialGradient>
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="100%" stopColor="#7C5CFF" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {edges.map(([a, b], i) => {
          const A = byId[a], B = byId[b];
          return (
            <line
              key={i}
              x1={A.x} y1={A.y} x2={B.x} y2={B.y}
              stroke="#7C5CFF"
              strokeOpacity="0.3"
              strokeWidth="1"
            >
              <animate attributeName="stroke-opacity" values="0.15;0.5;0.15" dur={`${3 + i * 0.2}s`} repeatCount="indefinite" />
            </line>
          );
        })}

        {nodes.map((n, i) => (
          <g key={n.id} filter="url(#glow)">
            <circle
              cx={n.x} cy={n.y} r={n.r}
              fill={n.primary ? "url(#coreGrad)" : "url(#nodeGrad)"}
              opacity={n.primary ? 1 : 0.85}
            >
              <animate attributeName="r" values={`${n.r};${n.r + 2};${n.r}`} dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            {n.label && (
              <text
                x={n.x} y={n.y + n.r + 14}
                textAnchor="middle"
                fill="rgba(255,255,255,0.6)"
                fontSize="10"
                fontFamily="Inter, sans-serif"
              >
                {n.label}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
