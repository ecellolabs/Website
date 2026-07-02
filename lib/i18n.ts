export const locales = ["en", "fr", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const messages = {
  en: {
    metadata: {
      title: "Ecello Labs - Shipping AI for your business",
      description:
        "Ecello Labs builds AI automation, assistants, and software that take real work off your team's plate. A remote AI & software studio based in Bremerhaven, Germany.",
    },
    header: {
      homeLabel: "Ecello Labs home",
      openMenu: "Open menu",
      cta: "Book a call",
      nav: [
        { href: "#about", label: "Who we are" },
        { href: "#process", label: "Process" },
        { href: "#trust", label: "Reviews" },
        { href: "#contact", label: "Contact" },
      ],
    },
    footer: {
      intro: "AI automation, assistants, and software that take real work off your team's plate.",
      studio: "Studio",
      reach: "Reach us",
      rights: "© 2026 Ecello Labs. All rights reserved.",
      note: "Made where the work flows out to sea.",
      studioLinks: [
        { href: "#about", label: "Who we are" },
        { href: "#process", label: "Our process" },
        { href: "#trust", label: "Reviews" },
        { href: "mailto:alex@ecello.net?subject=Let's%20talk", label: "Book a call" },
      ],
      reachLinks: [
        { href: "mailto:alex@ecello.net", label: "alex@ecello.net" },
        { href: "#top", label: "Bremerhaven, Germany" },
        { href: "#top", label: "Remote-first · Europe" },
      ],
    },
    home: {
      hero: {
        titleTop: "Shipping AI",
        titleBottom: "for your business.",
        body: "We build digital tools, assistants, and software that take real work off your team's plate. Quality you can trust and results you can see!",
        primaryCta: "Book a call",
        secondaryCta: "Who we are",
        scrollLabel: "Scroll down to who we are",
        backToTopLabel: "Back to top",
      },
      stats: [
        { value: 10, suffix: "+", label: "Years of combined team experience" },
        { value: 30, suffix: "+", label: "Products designed & delivered" },
        { value: 100, suffix: "%", label: "Code ownership handed to you" },
      ],
      about: {
        eyebrow: "Who we are",
        title: "A small studio that ships real things.",
        body: [
          "Ecello Labs is a remote AI & software studio based in Bremerhaven, Germany, working with teams across Europe and beyond. We're a tight group of engineers and designers who'd rather build something that works than sell you a slide deck.",
          "We take the repetitive, time-draining parts of your business and turn them into tools, assistants, and automations your team can actually rely on. Plain language, fair pricing, and full ownership handed back to you - always.",
        ],
        bullets: ["Plain language, always", "You own everything we build", "Fair, upfront pricing"],
        imageAlt: "The Ecello Labs team at work",
      },
      process: {
        eyebrow: "The process",
        title: "We Talk. We Build. We Deliver.",
        body: "A short process with honest updates, so you always know exactly where things stand.",
        steps: [
          {
            no: "01",
            title: "We Talk",
            desc: "A quick, no-cost call to understand what's slowing you down - and a straight answer on whether we can actually help.",
          },
          {
            no: "02",
            title: "We Build",
            desc: "We design and build the smallest thing that solves it, keeping you in the loop with plain-language updates the whole way.",
          },
          {
            no: "03",
            title: "We Deliver",
            desc: "We launch it, hand it over cleanly, and stay close to keep it running smoothly as your business grows.",
          },
        ],
      },
      trust: {
        eyebrow: "Why trust us",
        title: "Teams that stopped guessing.",
        previous: "Previous review",
        next: "Next review",
        goToPage: "Go to page",
        testimonials: [
          {
            quote:
              "They took a process that ate two days a week and automated it end to end. We got the time back and the reporting is finally something we trust.",
            name: "Sarah Lindqvist",
            role: "Operations Lead, Nordwind Logistics",
          },
          {
            quote:
              "Straight talk, no jargon, and a working product faster than any agency we've hired. They told us what not to build, which saved us real money.",
            name: "Marcus Feld",
            role: "Founder, Feld & Co.",
          },
          {
            quote:
              "The assistant they built answers 80% of our customer questions on its own. Our team finally focuses on the conversations that actually need a human.",
            name: "Priya Nair",
            role: "Head of Support, Bright Retail",
          },
          {
            quote:
              "We own everything they made, it's clean, documented, and still running without a hitch a year later. Rare to find people who work like that.",
            name: "Tomas Berg",
            role: "CTO, Havenmark Group",
          },
        ],
      },
      cta: {
        title: "Have something worth automating?",
        body: "Tell us what's eating your team's time. We'll tell you honestly whether AI can help, and if it can't, we'll say so.",
        button: "Email alex@ecello.net",
      },
    },
  },
  fr: {
    metadata: {
      title: "Ecello Labs - Des solutions IA pour votre entreprise",
      description:
        "Ecello Labs crée des automatisations IA, des assistants et des logiciels qui retirent du vrai travail des épaules de votre équipe. Un studio IA et logiciel à distance basé à Bremerhaven, en Allemagne.",
    },
    header: {
      homeLabel: "Accueil Ecello Labs",
      openMenu: "Ouvrir le menu",
      cta: "Réserver un appel",
      nav: [
        { href: "#about", label: "Qui nous sommes" },
        { href: "#process", label: "Processus" },
        { href: "#trust", label: "Avis" },
        { href: "#contact", label: "Contact" },
      ],
    },
    footer: {
      intro: "Automatisation IA, assistants et logiciels qui retirent du vrai travail des épaules de votre équipe.",
      studio: "Studio",
      reach: "Nous joindre",
      rights: "© 2026 Ecello Labs. Tous droits réservés.",
      note: "Créé là où le travail prend le large.",
      studioLinks: [
        { href: "#about", label: "Qui nous sommes" },
        { href: "#process", label: "Notre processus" },
        { href: "#trust", label: "Avis" },
        { href: "mailto:alex@ecello.net?subject=Parlons", label: "Réserver un appel" },
      ],
      reachLinks: [
        { href: "mailto:alex@ecello.net", label: "alex@ecello.net" },
        { href: "#top", label: "Bremerhaven, Allemagne" },
        { href: "#top", label: "À distance · Europe" },
      ],
    },
    home: {
      hero: {
        titleTop: "Nous livrons l'IA",
        titleBottom: "pour votre entreprise.",
        body: "Nous créons des outils numériques, des assistants et des logiciels qui retirent du vrai travail des épaules de votre équipe. Une qualité fiable et des résultats visibles.",
        primaryCta: "Réserver un appel",
        secondaryCta: "Qui nous sommes",
        scrollLabel: "Descendre vers qui nous sommes",
        backToTopLabel: "Retour en haut",
      },
      stats: [
        { value: 10, suffix: "+", label: "Années d'expérience cumulée dans l'équipe" },
        { value: 30, suffix: "+", label: "Produits conçus et livrés" },
        { value: 100, suffix: "%", label: "Propriété du code transférée chez vous" },
      ],
      about: {
        eyebrow: "Qui nous sommes",
        title: "Un petit studio qui livre du concret.",
        body: [
          "Ecello Labs est un studio IA et logiciel à distance basé à Bremerhaven, en Allemagne, qui travaille avec des équipes en Europe et au-delà. Nous sommes une petite équipe d'ingénieurs et de designers qui préfère construire quelque chose d'utile plutôt que vendre un diaporama.",
          "Nous transformons les tâches répétitives et chronophages de votre entreprise en outils, assistants et automatisations sur lesquels votre équipe peut vraiment compter. Langage clair, prix honnêtes et propriété complète remise entre vos mains - toujours.",
        ],
        bullets: ["Un langage clair, toujours", "Vous possédez tout ce que nous créons", "Des prix justes et transparents"],
        imageAlt: "L'équipe Ecello Labs au travail",
      },
      process: {
        eyebrow: "Le processus",
        title: "On échange. On construit. On livre.",
        body: "Un processus court avec des nouvelles honnêtes, pour que vous sachiez toujours exactement où en sont les choses.",
        steps: [
          {
            no: "01",
            title: "On échange",
            desc: "Un appel rapide et gratuit pour comprendre ce qui vous ralentit - puis une réponse franche sur notre capacité réelle à aider.",
          },
          {
            no: "02",
            title: "On construit",
            desc: "Nous concevons et construisons la plus petite solution qui résout le problème, avec des nouvelles claires tout au long du projet.",
          },
          {
            no: "03",
            title: "On livre",
            desc: "Nous lançons la solution, la transmettons proprement, puis restons proches pour qu'elle continue à tourner pendant votre croissance.",
          },
        ],
      },
      trust: {
        eyebrow: "Pourquoi nous faire confiance",
        title: "Des équipes qui ont arrêté de deviner.",
        previous: "Avis précédent",
        next: "Avis suivant",
        goToPage: "Aller à la page",
        testimonials: [
          {
            quote:
              "Ils ont automatisé de bout en bout un processus qui nous prenait deux jours par semaine. Nous avons récupéré ce temps, et les rapports sont enfin fiables.",
            name: "Sarah Lindqvist",
            role: "Responsable opérations, Nordwind Logistics",
          },
          {
            quote:
              "Des échanges francs, aucun jargon, et un produit fonctionnel plus vite qu'avec n'importe quelle agence déjà engagée. Ils nous ont aussi dit quoi ne pas construire, ce qui nous a fait économiser.",
            name: "Marcus Feld",
            role: "Fondateur, Feld & Co.",
          },
          {
            quote:
              "L'assistant qu'ils ont construit répond seul à 80% de nos questions clients. Notre équipe se concentre enfin sur les conversations qui ont vraiment besoin d'un humain.",
            name: "Priya Nair",
            role: "Responsable support, Bright Retail",
          },
          {
            quote:
              "Nous possédons tout ce qu'ils ont créé. C'est propre, documenté, et cela fonctionne encore parfaitement un an plus tard. C'est rare de trouver des gens qui travaillent comme ça.",
            name: "Tomas Berg",
            role: "CTO, Havenmark Group",
          },
        ],
      },
      cta: {
        title: "Vous avez quelque chose qui mérite d'être automatisé ?",
        body: "Dites-nous ce qui prend trop de temps à votre équipe. Nous vous dirons honnêtement si l'IA peut aider, et si ce n'est pas le cas, nous le dirons aussi.",
        button: "Écrire à alex@ecello.net",
      },
    },
  },
  de: {
    metadata: {
      title: "Ecello Labs - KI für Ihr Unternehmen",
      description:
        "Ecello Labs entwickelt KI-Automatisierung, Assistenten und Software, die Ihrem Team echte Arbeit abnehmen. Ein Remote-Studio für KI und Software mit Sitz in Bremerhaven.",
    },
    header: {
      homeLabel: "Ecello Labs Startseite",
      openMenu: "Menü öffnen",
      cta: "Gespräch buchen",
      nav: [
        { href: "#about", label: "Wer wir sind" },
        { href: "#process", label: "Prozess" },
        { href: "#trust", label: "Stimmen" },
        { href: "#contact", label: "Kontakt" },
      ],
    },
    footer: {
      intro: "KI-Automatisierung, Assistenten und Software, die Ihrem Team echte Arbeit abnehmen.",
      studio: "Studio",
      reach: "Kontakt",
      rights: "© 2026 Ecello Labs. Alle Rechte vorbehalten.",
      note: "Gemacht dort, wo Arbeit Richtung Meer fließt.",
      studioLinks: [
        { href: "#about", label: "Wer wir sind" },
        { href: "#process", label: "Unser Prozess" },
        { href: "#trust", label: "Stimmen" },
        { href: "mailto:alex@ecello.net?subject=Lass%20uns%20sprechen", label: "Gespräch buchen" },
      ],
      reachLinks: [
        { href: "mailto:alex@ecello.net", label: "alex@ecello.net" },
        { href: "#top", label: "Bremerhaven, Deutschland" },
        { href: "#top", label: "Remote-first · Europa" },
      ],
    },
    home: {
      hero: {
        titleTop: "KI liefern",
        titleBottom: "für Ihr Unternehmen.",
        body: "Wir bauen digitale Werkzeuge, Assistenten und Software, die Ihrem Team echte Arbeit abnehmen. Qualität, der Sie vertrauen können, und Ergebnisse, die sichtbar sind.",
        primaryCta: "Gespräch buchen",
        secondaryCta: "Wer wir sind",
        scrollLabel: "Weiter zu wer wir sind",
        backToTopLabel: "Zurück nach oben",
      },
      stats: [
        { value: 10, suffix: "+", label: "Jahre gemeinsame Teamerfahrung" },
        { value: 30, suffix: "+", label: "Produkte konzipiert und geliefert" },
        { value: 100, suffix: "%", label: "Code-Eigentum an Sie übergeben" },
      ],
      about: {
        eyebrow: "Wer wir sind",
        title: "Ein kleines Studio, das echte Dinge liefert.",
        body: [
          "Ecello Labs ist ein Remote-Studio für KI und Software mit Sitz in Bremerhaven. Wir arbeiten mit Teams in ganz Europa und darüber hinaus. Wir sind eine kleine Gruppe aus Ingenieuren und Designern, die lieber etwas Funktionierendes baut, als Ihnen ein Foliendeck zu verkaufen.",
          "Wir verwandeln die wiederkehrenden, zeitraubenden Teile Ihres Geschäfts in Werkzeuge, Assistenten und Automatisierungen, auf die sich Ihr Team wirklich verlassen kann. Klare Sprache, faire Preise und vollständiges Eigentum für Sie - immer.",
        ],
        bullets: ["Klare Sprache, immer", "Sie besitzen alles, was wir bauen", "Faire, transparente Preise"],
        imageAlt: "Das Ecello Labs Team bei der Arbeit",
      },
      process: {
        eyebrow: "Der Prozess",
        title: "Wir sprechen. Wir bauen. Wir liefern.",
        body: "Ein kurzer Prozess mit ehrlichen Updates, damit Sie immer genau wissen, wo die Dinge stehen.",
        steps: [
          {
            no: "01",
            title: "Wir sprechen",
            desc: "Ein kurzes, kostenloses Gespräch, um zu verstehen, was Sie ausbremst - und eine klare Antwort darauf, ob wir wirklich helfen können.",
          },
          {
            no: "02",
            title: "Wir bauen",
            desc: "Wir entwerfen und bauen die kleinste Lösung, die das Problem löst, und halten Sie die ganze Zeit mit klaren Updates auf dem Laufenden.",
          },
          {
            no: "03",
            title: "Wir liefern",
            desc: "Wir starten die Lösung, übergeben sie sauber und bleiben in der Nähe, damit sie mit Ihrem Unternehmen zuverlässig weiterläuft.",
          },
        ],
      },
      trust: {
        eyebrow: "Warum uns vertrauen",
        title: "Teams, die nicht mehr raten.",
        previous: "Vorherige Bewertung",
        next: "Nächste Bewertung",
        goToPage: "Zu Seite",
        testimonials: [
          {
            quote:
              "Sie haben einen Prozess, der uns zwei Tage pro Woche gekostet hat, vollständig automatisiert. Wir haben die Zeit zurück, und dem Reporting vertrauen wir endlich.",
            name: "Sarah Lindqvist",
            role: "Operations Lead, Nordwind Logistics",
          },
          {
            quote:
              "Klare Worte, kein Jargon und schneller ein funktionierendes Produkt als bei jeder Agentur, die wir bisher beauftragt haben. Sie sagten uns auch, was wir nicht bauen sollten, und das sparte echtes Geld.",
            name: "Marcus Feld",
            role: "Gründer, Feld & Co.",
          },
          {
            quote:
              "Der Assistent, den sie gebaut haben, beantwortet 80% unserer Kundenfragen selbst. Unser Team kümmert sich endlich um die Gespräche, die wirklich einen Menschen brauchen.",
            name: "Priya Nair",
            role: "Head of Support, Bright Retail",
          },
          {
            quote:
              "Wir besitzen alles, was sie gebaut haben. Es ist sauber, dokumentiert und läuft ein Jahr später immer noch problemlos. Selten findet man Menschen, die so arbeiten.",
            name: "Tomas Berg",
            role: "CTO, Havenmark Group",
          },
        ],
      },
      cta: {
        title: "Haben Sie etwas, das automatisiert werden sollte?",
        body: "Sagen Sie uns, was Ihrem Team Zeit raubt. Wir sagen ehrlich, ob KI helfen kann, und wenn nicht, sagen wir das auch.",
        button: "E-Mail an alex@ecello.net",
      },
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];
export type HomeContent = Messages["home"];

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
