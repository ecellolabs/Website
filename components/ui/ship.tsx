const SCALLOP_D =
  "M 0 0 q 20 -13 40 0 q 20 -13 40 0 q 20 -13 40 0 q 20 -13 40 0 q 20 -13 40 0 q 20 -13 40 0 q 20 -13 40 0 q 20 -13 40 0";

function Fish({ x, y, flip = false, dur, delay = "0s", reverse = false }: { x: number; y: number; flip?: boolean; dur: string; delay?: string; reverse?: boolean }) {
  return (
    <g>
      <animateTransform
        attributeName="transform"
        type="translate"
        from={reverse ? "640 0" : "-180 0"}
        to={reverse ? "-180 0" : "640 0"}
        dur={dur}
        begin={delay}
        repeatCount="indefinite"
      />
      <g transform={flip ? `translate(${x},${y}) scale(-1,1)` : undefined}>
        <use
          href="#fish"
          x={flip ? 0 : x}
          y={flip ? 0 : y}
        />
      </g>
    </g>
  );
}

export default function Ship() {
  return (
    <div
      className="relative w-full aspect-[1.18/1] min-h-[340px] min-w-0 opacity-0 translate-y-[22px] [animation:reveal-up_0.8s_cubic-bezier(0.2,0.7,0.2,1)_0.5s_forwards]"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 560 480"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <clipPath id="waterClip">
            <rect x="0" y="252" width="560" height="228" />
          </clipPath>
          <path id="scallop" d={SCALLOP_D} />
          <g
            id="fish"
            fill="none"
            stroke="#0A1F5E"
            strokeWidth={2.4}
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path d="M 0 0 C -22 -16, -52 -16, -66 0 C -52 16, -22 16, 0 0 Z" />
            <path d="M -66 0 L -84 -12 L -80 0 L -84 12 Z" />
            <circle cx="-14" cy="-3" r="1.8" fill="#0A1F5E" stroke="none" />
          </g>
        </defs>

        {/* Sun */}
        <g className="[animation:sun-glow_6s_ease-in-out_infinite]">
          <circle cx="452" cy="44" r="30" fill="none" stroke="#0A1F5E" strokeWidth={2.4} />
          <g transform="translate(452,44)">
            <g stroke="#0A1F5E" strokeWidth={2.4} strokeLinecap="round">
              <line x1="0" y1="-56" x2="0" y2="-42" />
              <line x1="0" y1="42" x2="0" y2="56" />
              <line x1="-56" y1="0" x2="-42" y2="0" />
              <line x1="42" y1="0" x2="56" y2="0" />
              <line x1="-40" y1="-40" x2="-30" y2="-30" />
              <line x1="30" y1="30" x2="40" y2="40" />
              <line x1="40" y1="-40" x2="30" y2="-30" />
              <line x1="-30" y1="30" x2="-40" y2="40" />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.18;1"
                keyTimes="0;0.5;1"
                dur="3.2s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
              />
            </g>
          </g>
        </g>

        {/* Ship */}
        <g
          className="[transform-box:fill-box] [transform:translate(280px,194px)_scale(1.22)] [animation:ship-bob_6s_ease-in-out_infinite]"
          stroke="#0A1F5E"
          strokeWidth={2.4}
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        >
          <g className="[transform-box:fill-box] [transform-origin:center_bottom] [animation:ship-rock_5s_ease-in-out_infinite]">
            <path
              d="M -84 16 C -74 56, 74 56, 84 16 L 74 16 L -74 16 Z"
              vectorEffect="non-scaling-stroke"
            />
            <line x1="-84" y1="16" x2="84" y2="16" vectorEffect="non-scaling-stroke" />
            <line x1="0" y1="16" x2="0" y2="-150" vectorEffect="non-scaling-stroke" />
            <path
              d="M 6 -108 C 56 -88, 64 -32, 56 6 L 6 6 Z"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M -6 -90 C -46 -70, -52 -28, -46 6 L -6 6 Z"
              vectorEffect="non-scaling-stroke"
            />
            <g className="[animation:ship-flag_3s_ease-in-out_infinite]">
              <path
                d="M 0 -150 L 60 -150 L 50 -136 L 60 -122 L 0 -122 Z"
                vectorEffect="non-scaling-stroke"
              />
              <text
                x="27"
                y="-135"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="var(--font-bricolage), sans-serif"
                fontWeight={800}
                fontSize={15}
                fill="#0A1F5E"
                stroke="none"
              >
                AI
              </text>
            </g>
          </g>
        </g>

        {/* Water */}
        <g clipPath="url(#waterClip)">
          <g>
            <use href="#scallop" x={-320} y={270} stroke="#0A1F5E" strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <use href="#scallop" x={0} y={270} stroke="#0A1F5E" strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <use href="#scallop" x={320} y={270} stroke="#0A1F5E" strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <use href="#scallop" x={640} y={270} stroke="#0A1F5E" strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <animateTransform attributeName="transform" type="translate" from="0 0" to="-320 0" dur="10s" repeatCount="indefinite" />
          </g>
          <g>
            <use href="#scallop" x={-320} y={342} stroke="#0A1F5E" strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <use href="#scallop" x={0} y={342} stroke="#0A1F5E" strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <use href="#scallop" x={320} y={342} stroke="#0A1F5E" strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <use href="#scallop" x={640} y={342} stroke="#0A1F5E" strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <animateTransform attributeName="transform" type="translate" from="-320 0" to="0 0" dur="13s" repeatCount="indefinite" />
          </g>
          <g>
            <use href="#scallop" x={-320} y={414} stroke="#0A1F5E" strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <use href="#scallop" x={0} y={414} stroke="#0A1F5E" strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <use href="#scallop" x={320} y={414} stroke="#0A1F5E" strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <use href="#scallop" x={640} y={414} stroke="#0A1F5E" strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <animateTransform attributeName="transform" type="translate" from="0 0" to="-320 0" dur="16s" repeatCount="indefinite" />
          </g>

          <Fish x={84} y={308} dur="18s" />
          <Fish x={84} y={380} dur="22s" delay="-7s" flip reverse />
          <Fish x={84} y={452} dur="26s" delay="-13s" />
        </g>
      </svg>

      <style>{`
        @keyframes sun-glow {
          0%, 100% { opacity: .9 }
          50% { opacity: 1 }
        }
        @keyframes ship-bob {
          0%, 100% { transform: translate(280px,194px) scale(1.22) }
          50% { transform: translate(280px,186px) scale(1.22) }
        }
        @keyframes ship-rock {
          0%, 100% { transform: rotate(-4deg) }
          50% { transform: rotate(4deg) }
        }
        @keyframes ship-flag {
          0%, 100% { transform: skewY(-3deg) }
          50% { transform: skewY(3deg) }
        }
        @keyframes reveal-up {
          from { opacity: 0; transform: translateY(22px) }
          to { opacity: 1; transform: none }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important }
        }
      `}</style>
    </div>
  );
}
