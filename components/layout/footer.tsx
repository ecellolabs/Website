import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const links = [
  { label: "Github", href: "https://github.com/ecellolabs/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ecello" },
  { label: "Website", href: "https://www.ecello.net" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Consent", href: "/cookie-consent" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2345] text-slate-100">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-lg font-semibold">Ecello Labs</p>
          <p className="max-w-md text-sm text-slate-300">
            Building cloud-native products, automation systems, and AI-powered software that
            move businesses forward.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-slate-100 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">Newsletter</p>
          <p className="text-sm text-slate-300">
            Get occasional product insights, engineering notes, and case-study updates.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="you@company.com"
              className="border-slate-500/50 bg-white text-slate-900 placeholder:text-slate-500"
            />
            <Button type="submit" className="bg-sky-500 text-white hover:bg-sky-600">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
}
