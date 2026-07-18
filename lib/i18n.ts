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
      closeMenu: "Close menu",
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
      newsletter: {
        title: "Newsletter",
        description:
          "Follow our newsletter for updates on what we've shipped, learned, and built. No spam, just the good stuff.",
        placeholder: "you@company.com",
        cta: "Subscribe",
        unsubscribe: "Unsubscribe anytime.",
        success: "Thanks — you're on the list.",
      },
      studioLinks: [
        { href: "#about", label: "Who we are" },
        { href: "#process", label: "Our process" },
        { href: "#trust", label: "Reviews" },
        { href: "/booking", label: "Book a call" },
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
              "We have been in logistics for over 35 years but never had a proper online presence. Ecello designed and developed our entire website from the ground up and set up SEO so we actually show up when people search for transport services.",
            name: "MRE Logistics",
            role: "Logistics & Transport",
          },
          {
            quote:
              "Ecello developed our website and software exactly according to our wishes—on time and without any issues. Alex and Moeez were a pleasure to work with and really listened. I would recommend them to anyone.",
            name: "Sabrina Neumann",
            role: "Consultant & Speaker",
          },
          {
            quote:
              "They took a process that ate two days a week and automated it end to end. We got the time back and the reporting is finally something we trust.",
            name: "Sarah Lindqvist",
            role: "Nordwind Logistics",
          },
        ],
      },
      cta: {
        title: "Have something worth automating?",
        body: "Tell us what's eating your team's time. We'll tell you honestly whether AI can help, and if it can't, we'll say so.",
        button: "Email alex@ecello.net",
      },
    },
    booking: {
      metadata: {
        title: "Book a call - Ecello Labs",
        description:
          "Grab 30 minutes on our calendar to talk through what's slowing your team down and whether AI can help.",
      },
      eyebrow: "Book a call",
      title: "Let's find 30 minutes.",
      body: "Pick a time that works for you. No pitch deck, just a straight conversation about what's slowing your team down and whether we can help.",
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
      closeMenu: "Fermer le menu",
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
      newsletter: {
        title: "Quelques nouvelles",
        description:
          "Une newsletter discrète — un ou deux e-mails par an sur ce que nous avons livré, appris ou cassé. Pas de marketing.",
        placeholder: "vous@entreprise.com",
        cta: "S'abonner",
        unsubscribe: "Désabonnement à tout moment.",
        success: "Merci — vous êtes inscrit.",
      },
      studioLinks: [
        { href: "#about", label: "Qui nous sommes" },
        { href: "#process", label: "Notre processus" },
        { href: "#trust", label: "Avis" },
        { href: "/booking", label: "Réserver un appel" },
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
              "We have been in logistics for over 35 years but never had a proper online presence. Ecello Labs designed and developed our entire website from the ground up and set up SEO so we actually show up when people search for transport services.",
            name: "MRE Logistics",
            role: "Logistique & transport",
          },
          {
            quote:
              "Ecello developed our website and software exactly according to our wishes—on time and without any issues. Alex and Moeez were a pleasure to work with and really listened. I would recommend them to anyone.",
            name: "Sabrina Neumann",
            role: "Cliente",
          },
          {
            quote:
              "Ils ont automatisé de bout en bout un processus qui nous prenait deux jours par semaine. Nous avons récupéré ce temps, et les rapports sont enfin fiables.",
            name: "Sarah Lindqvist",
            role: "Responsable opérations, Nordwind Logistics",
          },
        ],
      },
      cta: {
        title: "Vous avez quelque chose qui mérite d'être automatisé ?",
        body: "Dites-nous ce qui prend trop de temps à votre équipe. Nous vous dirons honnêtement si l'IA peut aider, et si ce n'est pas le cas, nous le dirons aussi.",
        button: "Écrire à alex@ecello.net",
      },
    },
    booking: {
      metadata: {
        title: "Réserver un appel - Ecello Labs",
        description:
          "Réservez 30 minutes pour discuter de ce qui ralentit votre équipe et si l'IA peut vous aider.",
      },
      eyebrow: "Réserver un appel",
      title: "Trouvons 30 minutes.",
      body: "Choisissez un créneau qui vous convient. Pas de slide deck, juste une conversation franche sur ce qui ralentit votre équipe et sur ce que nous pouvons faire.",
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
      closeMenu: "Menü schließen",
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
      newsletter: {
        title: "Gelegentliche Notizen",
        description:
          "Ein ruhiger Newsletter — ein bis zwei E-Mails im Jahr darüber, was wir gebaut, gelernt oder kaputt gemacht haben. Kein Marketing.",
        placeholder: "sie@firma.de",
        cta: "Abonnieren",
        unsubscribe: "Jederzeit abbestellbar.",
        success: "Danke — Sie sind dabei.",
      },
      studioLinks: [
        { href: "#about", label: "Wer wir sind" },
        { href: "#process", label: "Unser Prozess" },
        { href: "#trust", label: "Stimmen" },
        { href: "/booking", label: "Gespräch buchen" },
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
              "We have been in logistics for over 35 years but never had a proper online presence. Ecello Labs designed and developed our entire website from the ground up and set up SEO so we actually show up when people search for transport services.",
            name: "MRE Logistics",
            role: "Logistik & Transport",
          },
          {
            quote:
              "Ecello developed our website and software exactly according to our wishes—on time and without any issues. Alex and Moeez were a pleasure to work with and really listened. I would recommend them to anyone.",
            name: "Sabrina Neumann",
            role: "Kundin",
          },
          {
            quote:
              "Sie haben einen Prozess, der uns zwei Tage pro Woche gekostet hat, vollständig automatisiert. Wir haben die Zeit zurück, und dem Reporting vertrauen wir endlich.",
            name: "Sarah Lindqvist",
            role: "Operations Lead, Nordwind Logistics",
          },
        ],
      },
      cta: {
        title: "Haben Sie etwas, das automatisiert werden sollte?",
        body: "Sagen Sie uns, was Ihrem Team Zeit raubt. Wir sagen ehrlich, ob KI helfen kann, und wenn nicht, sagen wir das auch.",
        button: "E-Mail an alex@ecello.net",
      },
    },
    booking: {
      metadata: {
        title: "Gespräch buchen - Ecello Labs",
        description:
          "Reservieren Sie sich 30 Minuten, um zu besprechen, was Ihr Team ausbremst und ob KI helfen kann.",
      },
      eyebrow: "Gespräch buchen",
      title: "Lassen Sie uns 30 Minuten finden.",
      body: "Wählen Sie einen passenden Termin. Kein Foliendeck, nur ein ehrliches Gespräch darüber, was Ihr Team ausbremst und ob wir helfen können.",
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];
export type HomeContent = Messages["home"];
export type BookingContent = Messages["booking"];

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

export function localizeHref(locale: Locale, href: string): string {
  return href.startsWith("/") || href.startsWith("#") ? `/${locale}${href}` : href;
}
