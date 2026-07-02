import type { Messages } from "@/lib/i18n";

type FooterProps = {
  content: Messages["footer"];
};

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="pt-[70px] pb-10 bg-white border-t border-[rgba(189,209,232,0.14)]">
      <div className="max-w-[1180px] mx-auto px-6.5">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 items-start">
          <div>
            <span className="wordmark text-[30px]">ecello</span>
            <p className="text-[--color-muted] text-[15px] mt-4 max-w-[320px]">
              {content.intro}
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.14em] uppercase text-[#8b98af] font-bold mb-4">
              {content.studio}
            </h4>
            {content.studioLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-[#3a4761] text-[15px] mb-2.5 transition-[color,transform] duration-200 hover:text-[--color-blue] hover:translate-x-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <h4 className="text-xs tracking-[0.14em] uppercase text-[#8b98af] font-bold mb-4">
              {content.reach}
            </h4>
            {content.reachLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-[#3a4761] text-[15px] mb-2.5 transition-[color,transform] duration-200 hover:text-[--color-blue] hover:translate-x-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-3 mt-13 pt-6.5 border-t border-[rgba(189,209,232,0.24)] text-[#8b98af] text-[13.5px]">
          <span>{content.rights}</span>
          <span>{content.note}</span>
        </div>
      </div>
    </footer>
  );
}
