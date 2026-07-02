import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";

type ButtonVariant = "primary" | "ghost" | "white" | "scrollDown" | "scrollUp";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  arrow?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "relative bg-navy text-white border-2 border-navy",
  ghost:
    "relative bg-transparent text-navy border-2 border-navy hover:border-blue hover:text-blue",
  white: "relative bg-white text-navy border-2 border-white",
  scrollDown:
    "w-[54px] h-[54px] !px-0 !py-0 justify-center bg-white/82 text-navy border-2 border-navy text-[2.25rem] leading-none hover:border-azure hover:text-azure",
  scrollUp:
    "w-[54px] h-[54px] !px-0 !py-0 justify-center bg-white/88 text-navy border-2 border-navy text-[2.25rem] leading-none hover:border-azure hover:text-azure",
};

// One scalloped crest, 28×16px. Tiled with background-repeat at a fixed size so
// the hump stays the same width on every button (no stretching), and scrolled
// horizontally one tile per loop for a seamless moving wave.
const waveTile = `<svg xmlns='http://www.w3.org/2000/svg' width='28' height='16' viewBox='0 0 28 16'><path d='M0 10 A14 6 0 0 1 28 10 L28 16 L0 16 Z' fill='#2e9bee'/></svg>`;
const waveBg = `url("data:image/svg+xml,${encodeURIComponent(waveTile)}")`;

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(function Button(
  { variant = "primary", arrow = false, children, className = "", ...props },
  ref
) {
  return (
    <a
      ref={ref}
      className={`group overflow-hidden font-sans font-semibold text-[15px] rounded-full px-[22px] py-3 inline-flex items-center justify-center whitespace-nowrap transition-[background,border-color,color] duration-200 ease-out cursor-pointer ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <span
        aria-hidden
        style={{ backgroundImage: waveBg }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-repeat-x [background-size:28px_16px] translate-y-full animate-[wave-scroll_1s_linear_infinite] transition-transform duration-300 ease-out group-hover:translate-y-0"
      />
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {children}
        {arrow && (
          <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
            →
          </span>
        )}
      </span>
    </a>
  );
});
