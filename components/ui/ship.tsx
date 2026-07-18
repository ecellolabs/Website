const SCALLOP_D =
  "M 0 0 q 20 -13 40 0 q 20 -13 40 0 q 20 -13 40 0 q 20 -13 40 0 q 20 -13 40 0 q 20 -13 40 0 q 20 -13 40 0 q 20 -13 40 0";

const SCALLOP_FILL_D = `${SCALLOP_D} L 320 300 L 0 300 Z`;

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
          <path id="scallopFill" d={SCALLOP_FILL_D} />
        </defs>

        {/* Ship */}
        <g
          className="[transform-box:fill-box] [transform:translate(280px,194px)_scale(1.22)] [animation:ship-bob_6s_ease-in-out_infinite]"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <g className="[transform-box:fill-box] [transform-origin:center_bottom] [animation:ship-rock_5s_ease-in-out_infinite]">
            <g className="[animation:ship-flag_3s_ease-in-out_infinite]" transform="translate(16,0)">
              <path
                d="M 0 -150 L 60 -150 L 50 -136 L 60 -122 L 0 -122 Z"
                fill="var(--sky)"
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
                fill="var(--navy)"
                stroke="none"
              >
                AI
              </text>
            </g>
            <line
              x1="0"
              y1="16"
              x2="0"
              y2="-150"
              stroke="var(--blue)"
              strokeWidth={2.4}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M -84 16 C -74 56, 74 56, 84 16 L 74 16 L -74 16 Z"
              fill="var(--navy)"
              stroke="var(--navy)"
              strokeWidth={2.4}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 6 -108 C 56 -88, 64 -32, 56 6 L 6 6 Z"
              fill="var(--blue)"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M -6 -90 C -46 -70, -52 -28, -46 6 L -6 6 Z"
              fill="var(--azure)"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </g>

        {/* Water */}
        <g clipPath="url(#waterClip)">
          <g>
            <use href="#scallopFill" x={-320} y={270} fill="var(--sky)" opacity={0.55} />
            <use href="#scallopFill" x={0} y={270} fill="var(--sky)" opacity={0.55} />
            <use href="#scallopFill" x={320} y={270} fill="var(--sky)" opacity={0.55} />
            <use href="#scallopFill" x={640} y={270} fill="var(--sky)" opacity={0.55} />
            <animateTransform attributeName="transform" type="translate" from="0 0" to="-320 0" dur="10s" repeatCount="indefinite" />
          </g>
          <g>
            <use href="#scallopFill" x={-320} y={342} fill="var(--azure)" opacity={0.75} />
            <use href="#scallopFill" x={0} y={342} fill="var(--azure)" opacity={0.75} />
            <use href="#scallopFill" x={320} y={342} fill="var(--azure)" opacity={0.75} />
            <use href="#scallopFill" x={640} y={342} fill="var(--azure)" opacity={0.75} />
            <animateTransform attributeName="transform" type="translate" from="-320 0" to="0 0" dur="13s" repeatCount="indefinite" />
          </g>
          <g>
            <use href="#scallopFill" x={-320} y={414} fill="var(--blue)" />
            <use href="#scallopFill" x={0} y={414} fill="var(--blue)" />
            <use href="#scallopFill" x={320} y={414} fill="var(--blue)" />
            <use href="#scallopFill" x={640} y={414} fill="var(--blue)" />
            <animateTransform attributeName="transform" type="translate" from="0 0" to="-320 0" dur="16s" repeatCount="indefinite" />
          </g>
        </g>
      </svg>

      <style>{`
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
