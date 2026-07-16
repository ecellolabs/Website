import type { Messages } from "@/lib/i18n";
import NewsletterForm from "./newsletter-form";

type FooterProps = {
  content: Messages["footer"];
};

const linkClass =
  "group flex w-fit text-[#3a4761] text-[15px] mb-2.5 relative transition-colors duration-300 hover:text-[#0b1f3a] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#0b1f3a] after:rounded-full after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100";

const headingClass =
  "text-xs tracking-[0.14em] uppercase text-[#8b98af] font-bold mb-4";

// Same scalloped crest used by the buttons, tiled into a moving wavy divider.
const waveTile = `<svg xmlns='http://www.w3.org/2000/svg' width='28' height='16' viewBox='0 0 28 16'><path d='M0 10 A14 6 0 0 1 28 10 L28 16 L0 16 Z' fill='%23dcebfb'/></svg>`;
const waveBg = `url("data:image/svg+xml,${waveTile}")`;

function Boat() {
  return (
    <svg
      viewBox="0 0 48 32"
      width="64"
      height="42"
      fill="none"
      className="boat-svg"
      aria-hidden
    >
      {/* mast */}
      <line x1="24" y1="2" x2="24" y2="21" stroke="var(--blue)" strokeWidth="1.8" strokeLinecap="round" />
      {/* sail */}
      <path d="M24 3 L39 20 L24 20 Z" fill="var(--blue)" />
      {/* jib */}
      <path d="M23 5 L11 20 L23 20 Z" fill="var(--azure)" />
      {/* hull */}
      <path d="M7 21 H41 L35 29 H13 Z" fill="var(--navy)" />
    </svg>
  );
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="pt-[70px] pb-10 bg-white border-t border-[rgba(189,209,232,0.14)]">
      <div className="max-w-[1180px] mx-auto px-6.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.6fr] gap-10 items-start">
          <div>
            <span className="wordmark text-[30px]">ecello</span>
            <p className="text-[--color-muted] text-[15px] mt-4 max-w-[300px]">
              {content.intro}
            </p>
          </div>

          <div>
            <h4 className={headingClass}>{content.studio}</h4>
            {content.studioLinks.map((link) => (
              <a key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className={headingClass}>{content.reach}</h4>
            {content.reachLinks.map((link) => (
              <a key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className={headingClass}>{content.newsletter.title}</h4>
            <p className="text-[--color-muted] text-[14.5px] mb-4 max-w-[320px]">
              {content.newsletter.description}
            </p>
            <NewsletterForm content={content.newsletter} />
          </div>
        </div>

        <div className="relative mt-14 h-[42px]">
          {/* sailing boat — sits behind the wave crest */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 bottom-[4px] z-0 h-[42px] overflow-hidden"
          >
            <span className="boat absolute bottom-0 block">
              <Boat />
            </span>
          </div>
          {/* wavy crest line — on top of the boat */}
          <span
            aria-hidden
            style={{ backgroundImage: waveBg }}
            className="absolute inset-x-0 bottom-0 z-10 h-4 bg-repeat-x [background-size:28px_16px] animate-[wave-scroll_1.4s_linear_infinite]"
          />
        </div>

        <div className="flex justify-between items-center flex-wrap gap-3 pt-6.5 text-[#8b98af] text-[13.5px]">
          <span>{content.rights}</span>
          <span>{content.note}</span>
        </div>
      </div>
    </footer>
  );
}
