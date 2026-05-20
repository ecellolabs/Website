"use client";

/**
 * TEMPORARY PRODUCT / PACKAGES PAGE  ->  ecello.net/packages
 * ===========================================================================
 * A throwaway landing page based on the salesperson's concept, but rebuilt
 * with an elevated, refined dark + emerald design (not a re-skin of the flat
 * mockup). Self-contained: the dark theme is scoped to this page's wrapper and
 * a single scoped <style> block, so it does NOT touch globals.css or
 * next-themes. Deleting this file leaves zero residue.
 *
 * Intentional, temporary deviations from house style:
 *   - Copy is hardcoded German (no useLanguage()/t.* keys) — to be i18n'd later.
 *   - Colors/typography are local to this page, not theme tokens.
 *
 * PLACEHOLDER SLOTS — search "TODO" to find them:
 *   1. Footer Impressum/Datenschutz — currently anchor to #kontakt; point them
 *      at the real /impressum and /datenschutz routes before launch.
 *
 * The header, footer, and lead form are all built in-file (dark,
 * self-contained). The lead form's email logic is ported verbatim from the
 * contact-us page (same endpoint + payload {name,email,company,subject,
 * message}), so the backend needs no changes — see the LeadForm() component.
 *
 * FONTS: this page uses Fraunces (display) + Manrope (body). If those aren't
 * already loaded app-wide, add them via next/font in app/layout.tsx, or the
 * page falls back to serif/system-ui gracefully. The scoped CSS references
 * them by family name only — no <link> tags are injected here.
 * ===========================================================================
 */

import { useState, type FormEvent, type ReactNode } from "react";
import { API_BASE_URL } from "@/lib/utils";

/* ----------------------------- data ----------------------------- */

type Feature = { title: string; text: string };
type Package = {
  tag: string;
  title: string;
  description: string;
  note: string;
  featured: boolean;
  features: Feature[];
};

const ADVANTAGES: { num: string; icon: ReactNode; title: string; text: string }[] = [
  {
    num: "01",
    title: "Gründungsfreundliches Budget",
    text: "Wir arbeiten ohne Agentur-Overhead und mit hochautomatisierten Prozessen. Diesen Preisvorteil geben wir direkt an Sie weiter.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5c0-1 1-1.6 2.5-1.6s2.5.7 2.5 1.7c0 2.4-5 1.4-5 3.8 0 1 1 1.7 2.5 1.7s2.5-.6 2.5-1.6" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Senioren-Kompetenz",
    text: "Keine Junioren an Ihrem Core-System. Erfahrene Systemarchitektur, die mitwächst, wenn Ihr Business explodiert.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 4.5 13H11l-1 9 8.5-11H12z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Umfassende Lösungen",
    text: "Nicht nur hübsche Oberflächen — wir verknüpfen Website, CRM, E-Mail-Marketing und Ihre Sales-Pipelines nahtlos.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9zM2 9h2M2 15h2M20 9h2M20 15h2M9 2v2M15 2v2M9 20v2M15 20v2" />
      </svg>
    ),
  },
];

const PACKAGES: Package[] = [
  {
    tag: "Paket 1 · Technologie & Skalierung",
    title: "Core IT & Automation",
    description:
      "Für Gründer, die eine kompromisslose digitale Präsenz mit automatisierter Lead-Erfassung verbinden wollen — für direkt messbare Performance.",
    note: "Keine laufenden Kosten",
    featured: false,
    features: [
      { title: "Premium High-Speed Website", text: "— custom entwickelt für Geschwindigkeit, Mobile-Optimierung & moderne UX." },
      { title: "Marketing Automation Core", text: "— automatisierte Lead-Erfassung & intelligente Autoresponder." },
      { title: "Umfangreiche Programmieraufgaben", text: "— API-Anbindungen, Daten-Pipelines & Hosting." },
    ],
  },
  {
    tag: "Paket 2 · Voller Sales-Fokus",
    title: "Starter IT & Sales",
    description:
      "Für vertriebsorientierte Inhaber. Wir bauen Ihr digitales Gesicht und legen das stärkste technologische Sales-Fundament.",
    note: "Maximale Performance",
    featured: true,
    features: [
      { title: "Tiefes CRM Setup & Datenhygiene", text: "— HubSpot / Pipedrive mit sauberen Deal-Pipelines." },
      { title: "Synchronisierte Web-Präsenz", text: "— direkte Pipeline zwischen Website und CRM, perfekt segmentiert." },
      { title: "Social Media & CRM-Verknüpfung", text: "— automatische Lead-Übertragung von LinkedIn & Meta." },
    ],
  },
];

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Wieso sind die IT-Lösungen so erschwinglich?",
    answer:
      "Wir arbeiten schlank, ohne teure Vertriebler oder Büro-Overhead. Unsere Entwicklungs- und Deployment-Pipelines sind so automatisiert, dass wir die Arbeitszeit drastisch minimieren — diesen Vorteil geben wir direkt weiter.",
  },
  {
    question: "Was passiert, wenn mein System wächst?",
    answer:
      "Keine Billig-Baukästen, die bei Last abstürzen. Jedes System wird von erfahrenen Architekten geplant — modular, dokumentiert und extrem skalierbar. Es wächst problemlos mit.",
  },
  {
    question: "Wie läuft die Kommunikation ab?",
    answer:
      "Sie sprechen direkt mit dem verantwortlichen Senior-Entwickler — nicht mit Support oder Projektmanagern. Das spart Zeit und verhindert Missverständnisse.",
  },
];

const STATS = [
  { num: "15+", label: "Jahre Erfahrung" },
  { num: "100%", label: "Inhaber-Fokus" },
  { num: "0%", label: "Versteckte Kosten" },
  { num: "Agil", label: "Ohne Bürokratie" },
];

/* Same endpoint + payload shape as the contact-us page — no backend change. */
const CONTACT_API_URL = `${API_BASE_URL}/v1/website/contact`;

/* --------------------------- icons --------------------------- */

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.6 6.6L21 9.3l-5 4.6 1.4 6.9L12 17.3 6.6 20.8 8 13.9l-5-4.6 6.4-.7z" />
  </svg>
);

const PlusIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

/* --------------------- in-file components --------------------- */

function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="ec-section-head">
      <div className="ec-eyebrow">{eyebrow}</div>
      <h2 className="ec-display">{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function AdvantageCard({ num, icon, title, text }: { num: string; icon: ReactNode; title: string; text: string }) {
  return (
    <div className="ec-adv">
      <div className="ec-adv-num">{num}</div>
      <div className="ec-icon-box">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className={`ec-pkg${pkg.featured ? " featured" : ""}`}>
      {pkg.featured && (
        <div className="ec-ribbon">
          <StarIcon />
          Empfehlung
        </div>
      )}
      <div className="ec-pkg-tag">{pkg.tag}</div>
      <h3 className="ec-display">{pkg.title}</h3>
      <p className="ec-pkg-desc">{pkg.description}</p>
      <ul className="ec-feat">
        {pkg.features.map((f) => (
          <li key={f.title}>
            <span className="ec-check">
              <CheckIcon />
            </span>
            <span>
              <strong>{f.title}</strong> {f.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="ec-pkg-foot">
        <div className="ec-price-row">
          <div>
            <span className="k">Investition</span>
            <span className="v">Fixpreis auf Anfrage</span>
          </div>
          <span className="note">{pkg.note}</span>
        </div>
        {/* href can point to the real contact section / route later */}
        <a href="#kontakt" className={`ec-btn ${pkg.featured ? "ec-btn-primary" : "ec-btn-ghost"}`}>
          Dieses Paket anfragen
        </a>
      </div>
    </div>
  );
}

function FaqItem({ question, answer, open, onToggle }: { question: string; answer: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`ec-faq${open ? " open" : ""}`}>
      <button type="button" className="ec-faq-summary" onClick={onToggle} aria-expanded={open}>
        <span className="ec-q-icon">
          <PlusIcon />
        </span>
        {question}
      </button>
      {open && <div className="ec-faq-body">{answer}</div>}
    </div>
  );
}

/* ---------------------------- header ---------------------------- */
/* Self-contained dark header. Re-themes the real layout header's structure
   (logo / nav / CTA / mobile menu) but uses ONLY in-page anchors — no links
   out to the rest of the site, since this page stands apart from main ecello.
   Logo is a text wordmark (no /logo.svg dependency on the dark background). */

const HEADER_LINKS = [
  { label: "Warum ecello", href: "#vorteile" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <div className="ec-header">
      <div className="ec-header-inner">
        <a href="#top" className="ec-logo" onClick={close} aria-label="ecello">
          <span className="ec-logo-mark ec-display">e</span>
          <span className="ec-logo-word ec-display">
            ecello<span className="dot">.</span>
          </span>
        </a>

        <div className="ec-desktop">
          <nav className="ec-nav">
            {HEADER_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#kontakt" className="ec-header-cta">
            Gespräch buchen
          </a>
        </div>

        <button
          type="button"
          className="ec-burger"
          aria-label="Menü öffnen"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className="ec-mobile-nav">
          {HEADER_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#kontakt" className="ec-header-cta ec-mobile-cta" onClick={close}>
            Gespräch buchen
          </a>
        </div>
      )}
    </div>
  );
}

/* ---------------------------- footer ---------------------------- */
/* Self-contained dark footer, built as a <div> (not a semantic <footer>) per
   request. Re-themes the real layout footer's structure (brand blurb + link
   columns + copyright/legal row) to the emerald-dark palette. Links are
   in-page anchors only (dead-end), matching the header.
   NOTE: Impressum/Datenschutz currently point to #kontakt as placeholders —
   a German commercial page legally needs reachable Impressum & Datenschutz,
   so swap these to the real /impressum and /datenschutz routes before launch. */

const FOOTER_PAGE_LINKS = [
  { label: "Warum ecello", href: "#vorteile" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
];

const FOOTER_CONTACT_LINKS = [
  { label: "Gespräch buchen", href: "#kontakt" },
  { label: "Anfrage senden", href: "#kontakt" },
];

function Footer() {
  return (
    <div className="ec-footer">
      <div className="ec-footer-glow" />
      <div className="ec-wrap">
        <div className="ec-footer-top">
          <div className="ec-footer-brand">
            <div className="ec-footer-logo">
              <span className="mark ec-display">e</span>
              <span className="word ec-display">
                ecello<span className="dot">.</span>
              </span>
            </div>
            <p>
              Maßgeschneiderte IT-Lösungen und Sales-Infrastrukturen für Inhaber und Gründer —
              Enterprise-Qualität zu gründungsfreundlichen Fixpreisen.
            </p>
          </div>

          <div className="ec-footer-nav">
            <div className="ec-footer-col">
              <h4>Seite</h4>
              {FOOTER_PAGE_LINKS.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
            <div className="ec-footer-col">
              <h4>Kontakt</h4>
              {FOOTER_CONTACT_LINKS.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="ec-footer-bottom">
          <p>&copy; 2026 ecello. Alle Rechte vorbehalten.</p>
          <div className="ec-footer-legal">
            {/* TODO: point these at the real /impressum and /datenschutz routes before launch. */}
            <a href="#kontakt">Impressum</a>
            <a href="#kontakt">Datenschutz</a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- lead form ----------------------------- */
/* Email functionality ported verbatim from the contact-us page: identical
   endpoint (CONTACT_API_URL), identical payload {name,email,company,subject,
   message}, identical success/error handling. Only the markup differs —
   native inputs styled with the dark .ec-field classes instead of the
   light-themed shadcn Input/Textarea, so it matches this page's theme.
   A visible Betreff (subject) field is included so the payload is byte-for-
   byte what the backend already expects. */

function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setStatus({ type: null, message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, subject, message }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "Unable to send your message right now.");
      }

      setStatus({ type: "success", message: result?.message || "Nachricht erfolgreich gesendet." });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="ec-form" onSubmit={handleSubmit}>
      <div className="ec-field-row">
        <input className="ec-field" name="name" placeholder="Ihr Name" required />
        <input className="ec-field" name="email" type="email" placeholder="E-Mail-Adresse" required />
      </div>
      <input className="ec-field" name="company" placeholder="Name des Unternehmens" />
      <input className="ec-field" name="subject" placeholder="Betreff" />
      <textarea className="ec-field area" name="message" placeholder="Projekt-Details" required />

      {status.type && (
        <p className={`ec-form-status ${status.type === "success" ? "is-success" : "is-error"}`}>
          {status.message}
        </p>
      )}

      <button type="submit" className="ec-btn ec-btn-primary ec-form-submit" disabled={isSubmitting}>
        {isSubmitting ? "Senden..." : "Anfrage absenden"}
      </button>
    </form>
  );
}

/* ----------------------------- page ----------------------------- */

export default function PackagesPage() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="ec-root" id="top">
      <ScopedStyles />

      <Header />

      <main>
        {/* ---------------- HERO ---------------- */}
        <section className="ec-hero">
          <div className="ec-hero-grid" />
          <div className="ec-orb ec-orb-1" />
          <div className="ec-orb ec-orb-2" />
          <div className="ec-wrap">
            <div className="ec-badge ec-rise" style={{ animationDelay: ".05s" }}>
              <span className="ec-pulse">
                <span />
                <span />
              </span>
              Direktkontakt für Inhaber &amp; Gründer
            </div>
            <h1 className="ec-hero-title ec-display ec-rise" style={{ animationDelay: ".15s" }}>
              Komplexe Programmierung.
              <br />
              <span className="ec-accent">Erschwinglich &amp; sofort startklar.</span>
            </h1>
            <p className="ec-hero-sub ec-rise" style={{ animationDelay: ".25s" }}>
              Als Inhaber haben Sie keine Zeit für Agentur-Overhead. Wir liefern maßgeschneiderte
              IT-Lösungen und Sales-Infrastrukturen — mit jahrzehntelanger Entwickler-Erfahrung,
              kalkuliert für Ihr Gründungs-Budget.
            </p>
            <div className="ec-cta-row ec-rise" style={{ animationDelay: ".35s" }}>
              <a href="#packages" className="ec-btn ec-btn-primary">
                Zu den Packages
                <ArrowIcon />
              </a>
              <a href="#kontakt" className="ec-btn ec-btn-ghost">
                Gespräch buchen
              </a>
            </div>
            <div className="ec-stats ec-rise" style={{ animationDelay: ".5s" }}>
              {STATS.map((s) => (
                <div className="ec-stat" key={s.label}>
                  <div className="num ec-display">{s.num}</div>
                  <div className="lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ec-divider" />

        {/* ---------------- WHY ---------------- */}
        <section className="ec-block" id="vorteile">
          <div className="ec-wrap">
            <SectionHead eyebrow="Die Herausforderung von Inhabern" title="Die typische Falle junger Unternehmen">
              Entweder horrende Agentur-Summen oder unzuverlässige Freelancer, die Ihre
              Sales-Infrastruktur nicht verstehen. ecello löst das.
            </SectionHead>
            <div className="ec-adv-grid">
              {ADVANTAGES.map((a) => (
                <AdvantageCard key={a.num} {...a} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- PACKAGES ---------------- */}
        <section className="ec-block ec-block-tint" id="packages">
          <div className="ec-wrap">
            <SectionHead eyebrow="Zwei fokussierte Lösungen" title="All-in-One IT & Sales Packages">
              Keine Stundensatz-Feilscherei. Feste, durchdachte und ergebnisorientierte
              Leistungspakete für Ihr Setup.
            </SectionHead>
            <div className="ec-pkg-grid">
              {PACKAGES.map((p) => (
                <PackageCard key={p.title} pkg={p} />
              ))}
            </div>
          </div>
        </section>

        <div className="ec-divider" />

        {/* ---------------- CONTACT ---------------- */}
        <section className="ec-block" id="kontakt">
          <div className="ec-wrap">
            <SectionHead eyebrow="Der erste Schritt" title="Lassen Sie uns Ihr System bauen">
              Hinterlassen Sie Ihre Daten — einer unserer Senior-Entwickler meldet sich innerhalb
              von 24 Stunden.
            </SectionHead>

            {/* Email functionality ported verbatim from the contact-us page
                (same endpoint + payload). See the LeadForm component above. */}
            <div className="ec-contact-card">
              <div className="ec-contact-inner">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        <div className="ec-divider" />

        {/* ---------------- FAQ ---------------- */}
        <section className="ec-block" id="faq">
          <div className="ec-wrap">
            <SectionHead eyebrow="Antworten auf Ihre Fragen" title="Häufig gestellte Fragen" />
            <div className="ec-faq-list">
              {FAQS.map((f, i) => (
                <FaqItem
                  key={f.question}
                  question={f.question}
                  answer={f.answer}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ----------------------- scoped styles ----------------------- */
/* All selectors are namespaced under .ec-root so nothing leaks into the
   rest of the (light) site. */

function ScopedStyles() {
  return (
    <style>{`
.ec-root{
  --ink:#05070d; --panel:#0a0e16; --panel-2:#0e131d;
  --line:rgba(255,255,255,.07); --line-strong:rgba(255,255,255,.12);
  --txt:#e8edf3; --txt-soft:#9aa6b6; --txt-faint:#6b7686;
  --emerald:#34d39a; --emerald-glow:rgba(52,211,154,.18);
  position:relative; min-height:100vh; background:var(--ink); color:var(--txt);
  font-family:'Manrope',system-ui,-apple-system,sans-serif;
  -webkit-font-smoothing:antialiased; overflow-x:hidden; line-height:1.6;
}
.ec-root *{box-sizing:border-box}
.ec-root .ec-display{font-family:'Fraunces',Georgia,serif;font-weight:500;letter-spacing:-.01em}
.ec-root .ec-wrap{max-width:1180px;margin:0 auto;padding:0 24px}
.ec-root .ec-eyebrow{font-size:11px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--emerald)}
.ec-root::before{content:"";position:absolute;inset:0;pointer-events:none;z-index:0;background:radial-gradient(120% 80% at 50% -10%,rgba(52,211,154,.08),transparent 60%)}
.ec-root main{position:relative;z-index:2}

.ec-root .ec-header{position:sticky;top:0;z-index:50;border-bottom:1px solid var(--line);background:rgba(5,7,13,.72);backdrop-filter:blur(14px) saturate(140%);-webkit-backdrop-filter:blur(14px) saturate(140%)}
.ec-root .ec-header-inner{max-width:1180px;margin:0 auto;padding:0 24px;height:74px;display:flex;align-items:center;justify-content:space-between;gap:24px}
.ec-root .ec-logo{display:flex;align-items:center;gap:10px;text-decoration:none;cursor:pointer}
.ec-root .ec-logo-mark{width:32px;height:32px;border-radius:9px;background:linear-gradient(140deg,#3fe3a8,#1f9d77);display:flex;align-items:center;justify-content:center;color:#04130d;font-size:19px;box-shadow:0 4px 14px -4px var(--emerald-glow),inset 0 1px 0 rgba(255,255,255,.4)}
.ec-root .ec-logo-word{font-size:23px;font-weight:600;color:#fff;letter-spacing:-.02em}
.ec-root .ec-logo-word .dot{color:var(--emerald)}
.ec-root .ec-desktop{display:flex;align-items:center;gap:34px}
.ec-root .ec-nav{display:flex;align-items:center;gap:34px}
.ec-root .ec-nav a{font-size:14.5px;font-weight:500;color:var(--txt-soft);text-decoration:none;transition:.2s;position:relative}
.ec-root .ec-nav a::after{content:"";position:absolute;left:0;bottom:-6px;height:1.5px;width:0;background:var(--emerald);transition:.25s}
.ec-root .ec-nav a:hover{color:#fff}
.ec-root .ec-nav a:hover::after{width:100%}
.ec-root .ec-header-cta{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:11px;font-weight:700;font-size:14px;text-decoration:none;cursor:pointer;background:linear-gradient(180deg,#3fe3a8,#22b585);color:#04130d;box-shadow:0 8px 22px -8px var(--emerald-glow),inset 0 1px 0 rgba(255,255,255,.35);transition:.25s cubic-bezier(.16,1,.3,1)}
.ec-root .ec-header-cta:hover{transform:translateY(-2px)}
.ec-root .ec-burger{display:none;width:42px;height:42px;border-radius:10px;border:1px solid var(--line-strong);background:rgba(255,255,255,.04);color:var(--txt);align-items:center;justify-content:center;cursor:pointer;flex-direction:column;gap:4px}
.ec-root .ec-burger span{width:18px;height:2px;border-radius:2px;background:currentColor}
.ec-root .ec-mobile-nav{display:flex;flex-direction:column;gap:6px;padding:14px 24px 20px;border-top:1px solid var(--line);background:rgba(5,7,13,.96)}
.ec-root .ec-mobile-nav a{padding:12px 14px;border-radius:11px;font-size:15px;font-weight:600;color:var(--txt-soft);text-decoration:none;transition:.2s}
.ec-root .ec-mobile-nav a:hover{background:rgba(255,255,255,.05);color:#fff}
.ec-root .ec-mobile-cta{justify-content:center;color:#04130d;margin-top:4px}
.ec-root .ec-mobile-cta:hover{color:#04130d;transform:none}

@keyframes ec-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.ec-root .ec-rise{opacity:0;animation:ec-rise .8s cubic-bezier(.16,1,.3,1) forwards}
@media (prefers-reduced-motion:reduce){.ec-root .ec-rise{animation:none;opacity:1}}

.ec-root .ec-hero{position:relative;padding:150px 0 110px;text-align:center;overflow:hidden}
.ec-root .ec-orb{position:absolute;border-radius:50%;filter:blur(120px);pointer-events:none}
.ec-root .ec-orb-1{width:560px;height:560px;background:rgba(52,211,154,.12);top:-180px;left:50%;transform:translateX(-50%)}
.ec-root .ec-orb-2{width:340px;height:340px;background:rgba(56,90,180,.14);bottom:-60px;left:6%}
.ec-root .ec-hero-grid{position:absolute;inset:0;pointer-events:none;opacity:.4;background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:64px 64px;-webkit-mask-image:radial-gradient(60% 50% at 50% 30%,#000,transparent 75%);mask-image:radial-gradient(60% 50% at 50% 30%,#000,transparent 75%)}
.ec-root .ec-badge{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--line-strong);background:rgba(255,255,255,.03);padding:7px 16px;border-radius:100px;font-size:12px;font-weight:600;color:var(--emerald);letter-spacing:.04em;margin-bottom:30px;backdrop-filter:blur(8px)}
.ec-root .ec-pulse{position:relative;width:7px;height:7px}
.ec-root .ec-pulse span{position:absolute;inset:0;border-radius:50%;background:var(--emerald)}
.ec-root .ec-pulse span:first-child{animation:ec-ping 1.8s cubic-bezier(0,0,.2,1) infinite}
@keyframes ec-ping{75%,100%{transform:scale(2.4);opacity:0}}
.ec-root .ec-hero-title{font-size:clamp(40px,6.2vw,76px);line-height:1.04;letter-spacing:-.025em;color:#fff;margin-bottom:26px;font-weight:600}
.ec-root .ec-accent{font-style:italic;background:linear-gradient(105deg,var(--emerald),#7ee8c4 55%,#6fb6ff);-webkit-background-clip:text;background-clip:text;color:transparent}
.ec-root .ec-hero-sub{max-width:620px;margin:0 auto 40px;font-size:18px;color:var(--txt-soft);line-height:1.7}
.ec-root .ec-cta-row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.ec-root .ec-btn{display:inline-flex;align-items:center;gap:9px;padding:15px 28px;border-radius:14px;font-weight:700;font-size:15px;text-decoration:none;cursor:pointer;transition:.25s cubic-bezier(.16,1,.3,1);border:1px solid transparent}
.ec-root .ec-btn-primary{background:linear-gradient(180deg,#3fe3a8,#22b585);color:#04130d;box-shadow:0 10px 30px -8px var(--emerald-glow),inset 0 1px 0 rgba(255,255,255,.35)}
.ec-root .ec-btn-primary:hover{transform:translateY(-2px);box-shadow:0 18px 40px -10px var(--emerald-glow),inset 0 1px 0 rgba(255,255,255,.35)}
.ec-root .ec-btn-primary svg{transition:transform .25s}
.ec-root .ec-btn-primary:hover svg{transform:translateX(4px)}
.ec-root .ec-btn-ghost{background:rgba(255,255,255,.04);border-color:var(--line-strong);color:#fff}
.ec-root .ec-btn-ghost:hover{background:rgba(255,255,255,.08);transform:translateY(-2px)}
.ec-root .ec-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;max-width:840px;margin:80px auto 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--line)}
.ec-root .ec-stat{background:var(--panel);padding:26px 18px;text-align:center}
.ec-root .ec-stat .num{font-size:30px;color:#fff;font-weight:500;letter-spacing:-.02em}
.ec-root .ec-stat .lbl{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--txt-faint);margin-top:7px}

.ec-root .ec-block{padding:110px 0;position:relative}
.ec-root .ec-block-tint{background:linear-gradient(180deg,transparent,rgba(10,14,22,.6),transparent)}
.ec-root .ec-section-head{max-width:660px;margin:0 auto 64px;text-align:center}
.ec-root .ec-section-head h2{font-size:clamp(30px,4vw,46px);color:#fff;letter-spacing:-.02em;margin:14px 0 18px;line-height:1.1}
.ec-root .ec-section-head p{color:var(--txt-soft);font-size:17px}
.ec-root .ec-divider{height:1px;background:linear-gradient(90deg,transparent,var(--line-strong),transparent)}

.ec-root .ec-adv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.ec-root .ec-adv{position:relative;padding:34px 30px;border-radius:22px;background:linear-gradient(180deg,var(--panel-2),var(--panel));border:1px solid var(--line);overflow:hidden;transition:.35s}
.ec-root .ec-adv::before{content:"";position:absolute;inset:0;border-radius:22px;padding:1px;background:linear-gradient(180deg,rgba(52,211,154,.4),transparent 40%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;transition:.35s}
.ec-root .ec-adv:hover{transform:translateY(-4px);border-color:transparent}
.ec-root .ec-adv:hover::before{opacity:1}
.ec-root .ec-adv-num{position:absolute;top:24px;right:28px;font-family:'Fraunces',Georgia,serif;font-size:34px;color:rgba(255,255,255,.06);font-weight:500}
.ec-root .ec-icon-box{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 30% 25%,rgba(52,211,154,.28),rgba(52,211,154,.06));border:1px solid rgba(52,211,154,.25);color:var(--emerald);margin-bottom:24px}
.ec-root .ec-adv h3{font-size:20px;color:#fff;margin-bottom:12px;letter-spacing:-.01em}
.ec-root .ec-adv p{font-size:14.5px;color:var(--txt-soft);line-height:1.7}

.ec-root .ec-pkg-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:26px;max-width:980px;margin:0 auto}
.ec-root .ec-pkg{position:relative;display:flex;flex-direction:column;border-radius:26px;padding:38px;background:linear-gradient(180deg,var(--panel-2),var(--panel));border:1px solid var(--line);overflow:hidden}
.ec-root .ec-pkg.featured{border-color:rgba(52,211,154,.32);box-shadow:0 30px 80px -40px var(--emerald-glow)}
.ec-root .ec-pkg.featured::after{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--emerald),transparent)}
.ec-root .ec-ribbon{position:absolute;top:22px;right:22px;font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--emerald);display:flex;align-items:center;gap:6px}
.ec-root .ec-pkg-tag{display:inline-block;font-size:12px;font-weight:600;color:var(--emerald);background:rgba(52,211,154,.1);border:1px solid rgba(52,211,154,.2);padding:5px 12px;border-radius:8px;margin-bottom:20px;letter-spacing:.02em}
.ec-root .ec-pkg h3{font-size:27px;color:#fff;letter-spacing:-.02em;margin-bottom:14px}
.ec-root .ec-pkg-desc{font-size:14.5px;color:var(--txt-soft);line-height:1.7;margin-bottom:28px}
.ec-root .ec-feat{list-style:none;display:flex;flex-direction:column;gap:16px;margin:0 0 30px;padding:0}
.ec-root .ec-feat li{display:flex;gap:13px;align-items:flex-start}
.ec-root .ec-check{flex-shrink:0;width:22px;height:22px;border-radius:7px;margin-top:1px;background:rgba(52,211,154,.12);border:1px solid rgba(52,211,154,.3);display:flex;align-items:center;justify-content:center;color:var(--emerald)}
.ec-root .ec-feat strong{color:#fff;font-weight:600}
.ec-root .ec-feat span:last-child{color:var(--txt-soft);font-size:14px}
.ec-root .ec-pkg-foot{margin-top:auto;padding-top:26px;border-top:1px solid var(--line)}
.ec-root .ec-price-row{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:22px}
.ec-root .ec-price-row .k{font-size:11px;text-transform:uppercase;letter-spacing:.14em;color:var(--txt-faint);display:block;margin-bottom:6px}
.ec-root .ec-price-row .v{font-family:'Fraunces',Georgia,serif;font-size:19px;color:var(--emerald);font-weight:500}
.ec-root .ec-price-row .note{font-size:12px;color:var(--txt-faint);font-style:italic;text-align:right;max-width:120px}
.ec-root .ec-pkg .ec-btn{width:100%;justify-content:center}

.ec-root .ec-contact-card{max-width:620px;margin:0 auto;border-radius:26px;padding:8px;background:linear-gradient(180deg,rgba(52,211,154,.18),transparent 30%);border:1px solid var(--line)}
.ec-root .ec-contact-inner{background:linear-gradient(180deg,var(--panel-2),var(--panel));border-radius:20px;padding:38px}
.ec-root .ec-form{display:flex;flex-direction:column;gap:14px}
.ec-root .ec-field-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.ec-root .ec-field{width:100%;height:50px;border-radius:13px;border:1px solid var(--line);background:rgba(255,255,255,.025);padding:0 16px;color:var(--txt);font-size:14px;font-family:inherit;transition:border-color .2s,box-shadow .2s;outline:none}
.ec-root .ec-field::placeholder{color:var(--txt-faint)}
.ec-root .ec-field:focus{border-color:rgba(52,211,154,.55);box-shadow:0 0 0 3px rgba(52,211,154,.12)}
.ec-root .ec-field.area{height:auto;min-height:120px;padding:14px 16px;line-height:1.6;resize:vertical}
.ec-root .ec-form-status{border-radius:13px;border:1px solid;padding:12px 16px;font-size:14px;line-height:1.5;margin:0}
.ec-root .ec-form-status.is-success{border-color:rgba(52,211,154,.3);background:rgba(52,211,154,.1);color:#7ee8c4}
.ec-root .ec-form-status.is-error{border-color:rgba(244,114,114,.3);background:rgba(244,114,114,.1);color:#fca5a5}
.ec-root .ec-form-submit{width:100%;justify-content:center;margin-top:4px}
.ec-root .ec-form-submit:disabled{opacity:.6;cursor:not-allowed;transform:none}

.ec-root .ec-faq-list{max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:14px}
.ec-root .ec-faq{border:1px solid var(--line);border-radius:18px;background:var(--panel-2);overflow:hidden}
.ec-root .ec-faq-summary{width:100%;text-align:left;background:none;border:none;cursor:pointer;padding:24px 26px;display:flex;align-items:center;gap:16px;font-size:17px;font-weight:600;color:#fff;font-family:inherit}
.ec-root .ec-q-icon{flex-shrink:0;width:30px;height:30px;border-radius:9px;background:rgba(52,211,154,.1);border:1px solid rgba(52,211,154,.25);display:flex;align-items:center;justify-content:center;color:var(--emerald);transition:.3s}
.ec-root .ec-faq.open .ec-q-icon{transform:rotate(45deg)}
.ec-root .ec-faq-body{padding:0 26px 26px 72px;color:var(--txt-soft);font-size:14.5px;line-height:1.75}

.ec-root .ec-footer{position:relative;border-top:1px solid var(--line);background:linear-gradient(180deg,var(--panel),var(--ink));overflow:hidden}
.ec-root .ec-footer-glow{position:absolute;top:-140px;left:50%;transform:translateX(-50%);width:600px;height:300px;background:rgba(52,211,154,.08);filter:blur(120px);pointer-events:none}
.ec-root .ec-footer-top{position:relative;display:grid;grid-template-columns:1.4fr 1fr;gap:48px;padding:64px 0 44px;border-bottom:1px solid var(--line)}
.ec-root .ec-footer-brand{max-width:380px}
.ec-root .ec-footer-logo{display:flex;align-items:center;gap:10px;margin-bottom:18px}
.ec-root .ec-footer-logo .mark{width:34px;height:34px;border-radius:9px;background:linear-gradient(140deg,#3fe3a8,#1f9d77);display:flex;align-items:center;justify-content:center;color:#04130d;font-size:20px;box-shadow:inset 0 1px 0 rgba(255,255,255,.4)}
.ec-root .ec-footer-logo .word{font-size:24px;font-weight:600;color:#fff;letter-spacing:-.02em}
.ec-root .ec-footer-logo .word .dot{color:var(--emerald)}
.ec-root .ec-footer-brand p{color:var(--txt-soft);font-size:14.5px;line-height:1.75}
.ec-root .ec-footer-nav{display:flex;gap:64px;justify-content:flex-end}
.ec-root .ec-footer-col h4{font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--txt-faint);margin-bottom:18px}
.ec-root .ec-footer-col a{display:block;color:var(--txt-soft);font-size:14.5px;text-decoration:none;margin-bottom:12px;transition:.2s;width:fit-content}
.ec-root .ec-footer-col a:hover{color:var(--emerald)}
.ec-root .ec-footer-bottom{position:relative;display:flex;align-items:center;justify-content:space-between;padding:24px 0;gap:16px;flex-wrap:wrap}
.ec-root .ec-footer-bottom p{font-size:13px;color:var(--txt-faint)}
.ec-root .ec-footer-legal{display:flex;gap:24px}
.ec-root .ec-footer-legal a{font-size:13px;color:var(--txt-faint);text-decoration:none;transition:.2s}
.ec-root .ec-footer-legal a:hover{color:var(--txt-soft)}

@media(max-width:880px){
  .ec-root .ec-stats{grid-template-columns:repeat(2,1fr)}
  .ec-root .ec-adv-grid,.ec-root .ec-pkg-grid{grid-template-columns:1fr}
  .ec-root .ec-block{padding:80px 0}
  .ec-root .ec-hero{padding:120px 0 80px}
  .ec-root .ec-desktop{display:none}
  .ec-root .ec-burger{display:flex}
  .ec-root .ec-footer-top{grid-template-columns:1fr;gap:36px}
  .ec-root .ec-footer-nav{justify-content:flex-start;gap:48px;flex-wrap:wrap}
  .ec-root .ec-footer-bottom{flex-direction:column;align-items:flex-start}
}
`}</style>
  );
}
