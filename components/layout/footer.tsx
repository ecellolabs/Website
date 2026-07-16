import type { Messages } from "@/lib/i18n";
import NewsletterForm from "./newsletter";

type FooterProps = {
  content: Messages["footer"];
};

const linkClass =
  "group flex w-fit text-[#3a4761] text-[15px] mb-2.5 relative transition-colors duration-300 hover:text-[#0b1f3a] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#0b1f3a] after:rounded-full after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100";

const headingClass =
  "text-xs tracking-[0.14em] uppercase text-black font-bold mb-4";

const SOCIALS: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/ecellolabs",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/ecello",
    icon: (
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" fill="currentColor" />
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/ecellolabs",
    icon: (
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58l-.01-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" fill="currentColor" />
    ),
  },
];

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
            <div className="flex items-center gap-3 mt-5">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid place-items-center w-10 h-10 rounded-full border-2 border-[var(--color-navy)] text-[var(--color-navy)] transition-colors duration-200 hover:border-[var(--color-azure)] hover:text-[var(--color-azure)]"
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" aria-hidden>
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
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
