"use client";

/**
 * A stylised automation flowchart whose wiring has short-circuited at the
 * middle node. Two upstream nodes still pulse data along their traces; the
 * signal reaches the severed gap, sparks, and never makes it downstream — so
 * the "OUTPUT" node sits dark. Purely decorative (aria-hidden); all motion is
 * SMIL/CSS so it runs without JS and respects prefers-reduced-motion via the
 * global stylesheet.
 */
export default function BrokenCircuit() {
  return (
    <svg
      viewBox="0 0 520 300"
      className="w-full h-auto overflow-visible"
      role="img"
      aria-label="A broken automation flowchart"
    >
      {/* ---------- traces (drawn under the nodes) ---------- */}
      <g fill="none" strokeLinecap="round">
        {/* input A -> hub (into the left face) */}
        <path
          d="M116 92 H176 Q196 92 196 112 V138 Q196 150 208 150 H212"
          stroke="#1560d4"
          strokeWidth="3"
        />
        <path
          d="M116 92 H176 Q196 92 196 112 V138 Q196 150 208 150 H212"
          stroke="#fff"
          strokeWidth="3"
          strokeDasharray="1 15"
          strokeLinecap="round"
        >
          <animate attributeName="stroke-dashoffset" values="0;-16" dur="0.7s" repeatCount="indefinite" />
        </path>

        {/* input B -> hub (into the left face) */}
        <path
          d="M116 208 H176 Q196 208 196 188 V162 Q196 150 208 150 H212"
          stroke="#1560d4"
          strokeWidth="3"
        />
        <path
          d="M116 208 H176 Q196 208 196 188 V162 Q196 150 208 150 H212"
          stroke="#fff"
          strokeWidth="3"
          strokeDasharray="1 15"
          strokeLinecap="round"
        >
          <animate attributeName="stroke-dashoffset" values="0;-16" dur="0.7s" begin="0.35s" repeatCount="indefinite" />
        </path>

        {/* hub -> wall: live trace running into the wall's left face */}
        <path d="M308 150 H360" stroke="#1560d4" strokeWidth="3" strokeLinecap="butt" />
        <path
          d="M308 150 H360"
          stroke="#fff"
          strokeWidth="3"
          strokeDasharray="1 15"
          strokeLinecap="round"
        >
          <animate attributeName="stroke-dashoffset" values="0;-16" dur="0.7s" repeatCount="indefinite" />
        </path>
        {/* dead trace from the wall's right face toward the output node */}
        <path
          d="M392 150 H448"
          stroke="#1560d4"
          strokeWidth="3"
          strokeDasharray="6 6"
          strokeLinecap="butt"
        />
      </g>

      {/* ---------- brick wall blocking the trace (centred between the traces) ---------- */}
      <g transform="translate(376 150)">
        {/* wall backing — square outline, transparent inside, same height as the boxes */}
        <rect x="-16" y="-32" width="32" height="64" fill="none" stroke="#1560d4" strokeWidth="1.8" strokeLinejoin="miter" />
        {/* running-bond bricks — same weight as the outline, square joins */}
        <g stroke="#1560d4" strokeWidth="1.8" strokeLinecap="butt">
          {/* horizontal courses — four equal rows */}
          <path d="M-16 -16 H16 M-16 0 H16 M-16 16 H16" />
          {/* vertical joints: rows 1 & 3 break at centre; rows 2 & 4 break at the sides (half-brick offset) */}
          <path d="M0 -32 V-16" />
          <path d="M-8 -16 V0 M8 -16 V0" />
          <path d="M0 0 V16" />
          <path d="M-8 16 V32 M8 16 V32" />
        </g>
      </g>

      {/* ---------- nodes ---------- */}
      {/* input A */}
      <Node x={56} y={72} label="INPUT" />
      {/* input B */}
      <Node x={56} y={188} label="TRIGGER" />
      {/* central hub — still processing, faintly humming */}
      <g>
        <rect
          x="212"
          y="118"
          width="96"
          height="64"
          rx="14"
          fill="#fff"
          stroke="#1560d4"
          strokeWidth="2"
        />
        <text x="260" y="146" textAnchor="middle" fill="#0a1f5e" fontSize="12" fontWeight="700" fontFamily="var(--font-inter)">
          AUTOMATE
        </text>
        {/* little gear */}
        <g transform="translate(260 164)" stroke="#1560d4" strokeWidth="1.6" fill="none">
          <circle r="5" />
          <g strokeLinecap="round">
            <path d="M0 -8 V-6 M0 8 V6 M-8 0 H-6 M8 0 H6 M-5.6 -5.6 l1.4 1.4 M5.6 5.6 l-1.4 -1.4 M5.6 -5.6 l-1.4 1.4 M-5.6 5.6 l1.4 -1.4" />
          </g>
          <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite" additive="sum" />
        </g>
      </g>

      {/* output — no signal arriving, drawn dotted but fully visible */}
      <g>
        <rect
          x="452"
          y="118"
          width="72"
          height="64"
          rx="14"
          fill="#fff"
          stroke="#1560d4"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <text x="488" y="154" textAnchor="middle" fill="#0a1f5e" fontSize="11" fontWeight="700" fontFamily="var(--font-inter)">
          OUTPUT
        </text>
      </g>
    </svg>
  );
}

function Node({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="60"
        height="40"
        rx="12"
        fill="#fff"
        stroke="#1560d4"
        strokeWidth="2"
      />
      <text
        x={x + 30}
        y={y + 24}
        textAnchor="middle"
        fill="#0a1f5e"
        fontSize="10.5"
        fontWeight="700"
        fontFamily="var(--font-inter)"
      >
        {label}
      </text>
    </g>
  );
}
