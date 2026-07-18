import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

type ButtonVariant = "primary" | "ghost" | "white" | "icon";

type ButtonProps = (AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>) & {
  variant?: ButtonVariant;
  icon?: ReactNode;
  children?: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "relative bg-navy text-white border-2 border-navy hover:bg-transparent hover:text-azure hover:border-azure",
  ghost:
    "relative bg-transparent text-navy border-2 border-navy hover:bg-transparent hover:text-azure hover:border-azure",
  white:
    "relative bg-white text-navy border-0 py-[14px] hover:text-azure",
  icon:
    "w-[54px] h-[54px] !px-0 !py-0 justify-center bg-white/85 text-navy border-2 border-navy text-[2.25rem] leading-none hover:border-azure hover:text-azure",
};

const waveTile = `<svg xmlns='http://www.w3.org/2000/svg' width='28' height='16' viewBox='0 0 28 16'><path d='M0 10 A14 6 0 0 1 28 10 L28 16 L0 16 Z' fill='#2e9bee'/></svg>`;
const waveBg = `url("data:image/svg+xml,${encodeURIComponent(waveTile)}")`;

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", icon, children, className = "", ...props },
  ref
) {
  const classes = `group relative overflow-hidden font-sans font-semibold text-[15px] rounded-full px-[22px] py-3 inline-flex items-center justify-center whitespace-nowrap transition-[background,border-color,color] duration-200 ease-out cursor-pointer ${variantClasses[variant]} ${className}`;

  const wave = (
    <span
      aria-hidden
      style={{ backgroundImage: waveBg }}
      className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-repeat-x [background-size:28px_16px] translate-y-full animate-[wave-scroll_1s_linear_infinite] transition-transform duration-300 ease-out group-hover:translate-y-0"
    />
  );

  const content = (
    <span className="relative z-10 inline-flex items-center gap-2.5">
      {icon && <span className="inline-flex shrink-0 items-center justify-center">{icon}</span>}
      {children}
    </span>
  );

  if ("href" in props && props.href !== undefined) {
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {wave}
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {wave}
      {content}
    </button>
  );
});
