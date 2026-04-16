"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Language = "en" | "de" | "fr";

export const languageNames: Record<Language, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
};

type Translations = {
  nav: {
    services: string;
    serviceLabels: string[];
    navLabels: string[];
    bookMeeting: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    bookMeeting: string;
    exploreServices: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    items: { title: string; description: string }[];
  };
  howWeWork: {
    eyebrow: string;
    heading: string;
    steps: { step: string; description: string }[];
  };
  bookMeeting: {
    eyebrow: string;
    heading: string;
    description: string;
    steps: { step: string; title: string; description: string }[];
    form: { name: string; email: string; company: string; message: string; submit: string };
  };
  aboutPage: {
    eyebrow: string;
    heading: string;
    subheading: string;
    stats: { value: string; label: string }[];
    howWeWork: { eyebrow: string; heading: string; description: string };
    principles: { title: string; description: string }[];
    whatWeBuild: string;
    serviceItems: string[];
  };
  contactPage: {
    heading: string;
    subheading: string;
    detailLabels: string[];
    form: {
      eyebrow: string;
      heading: string;
      description: string;
      name: string;
      email: string;
      company: string;
      subject: string;
      message: string;
      submit: string;
    };
  };
  caseStudiesPage: {
    eyebrow: string;
    heading: string;
    subheading: string;
    viewLabel: string;
  };
  caseStudyDetail: {
    backLink: string;
    projectSnapshot: string;
    challenge: string;
    solution: string;
    outcome: string;
    overviewEyebrow: string;
    overviewHeading: string;
    problemEyebrow: string;
    problemHeading: string;
    approachEyebrow: string;
    approachHeading: string;
    featuresEyebrow: string;
    featuresHeading: string;
    engineeringEyebrow: string;
    engineeringHeading: string;
    resultsEyebrow: string;
    resultsHeading: string;
    buildWithUs: string;
    buildHeading: string;
    bookMeeting: string;
  };
  servicePage: {
    whatYouGet: string;
    outcomeFocused: string;
    ourApproach: string;
    approachHeading: string;
    deliveryPath: string;
    deliveryHeading: string;
    bestFor: string;
    bestForHeading: string;
    bookCall: string;
    viewCaseStudies: string;
  };
  footer: {
    description: string;
    columnTitles: string[];
    pageLabels: string[];
    legalLabels: string[];
    newsletter: string;
    newsletterDesc: string;
    emailPlaceholder: string;
    subscribe: string;
    copyright: string;
    tagline: string;
  };
  servicePromises: Record<string, string>;
  caseStudySummaries: Record<string, string>;
  caseStudyContent: Record<string, {
    challenge?: string;
    challengeDetail?: string;
    solution?: string;
    solutionDetail?: string;
    outcome?: string;
    outcomeDetail?: string;
    overview?: string;
    features?: { title: string; description: string }[];
    challenges?: { title: string; description: string }[];
  }>;
};

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      serviceLabels: ["Automation", "Web Development", "Computer Vision", "Cloud Architecture"],
      navLabels: ["About Us", "Case Studies", "Contact Us"],
      bookMeeting: "Book Meeting",
    },
    hero: {
      eyebrow: "Ecello Labs",
      heading: "Building intelligent software experiences for ambitious teams.",
      subheading: "We design and deliver cloud-ready products, AI-powered workflows, and dependable engineering systems that scale with your business.",
      bookMeeting: "Book Meeting",
      exploreServices: "Explore Services",
    },
    about: {
      eyebrow: "About Us",
      heading: "A product-first technology partner",
      description: "Ecello Labs partners with startups and enterprise teams to build software that is practical, secure, and future-ready. Our approach blends product thinking, engineering discipline, and modern AI capabilities.",
    },
    services: {
      eyebrow: "Our Services",
      heading: "Built to deliver real business value",
      items: [
        { title: "Product Engineering", description: "End-to-end software development from idea validation to scalable architecture and launch." },
        { title: "Cloud & DevOps", description: "Reliable cloud infrastructure, automated CI/CD, and proactive observability for modern teams." },
        { title: "AI Integration", description: "Practical AI systems, assistants, and workflows that create measurable business outcomes." },
      ],
    },
    howWeWork: {
      eyebrow: "How We Work",
      heading: "A clear path from problem to working product.",
      steps: [
        { step: "Discover", description: "We learn your business, your users, and the problem worth solving before writing a single line of code." },
        { step: "Design", description: "We map out the architecture, user flows, and technical approach so everyone is aligned before building begins." },
        { step: "Build", description: "We develop in focused cycles with regular check-ins, keeping progress visible and feedback loops short." },
        { step: "Deliver", description: "We ship to production, hand over clean documentation, and stay available through the transition." },
      ],
    },
    bookMeeting: {
      eyebrow: "Book a Meeting",
      heading: "Let's plan your next product move",
      description: "Tell us what you are building and where you need support. We will follow up with a focused strategy call.",
      steps: [
        { step: "01", title: "Tell us about your project", description: "Fill in the form with a brief overview of what you are building and what kind of support you are looking for." },
        { step: "02", title: "We review and reach out", description: "We review your submission within 24 hours and follow up with a short message to confirm next steps." },
        { step: "03", title: "We get on a strategy call", description: "We schedule a focused 30 minute call to understand your goals and outline how we can help." },
      ],
      form: {
        name: "Your Name",
        email: "Work Email",
        company: "Company",
        message: "Tell us about your project. What are you building, what stage are you at, and where do you need help?",
        submit: "Book Meeting",
      },
    },
    aboutPage: {
      eyebrow: "About Ecello Labs",
      heading: "We build software systems with product taste and engineering discipline.",
      subheading: "Ecello Labs partners with ambitious teams to design, build, and scale cloud-ready products, automation systems, and AI-powered workflows that are useful in the real world.",
      stats: [
        { value: "4", label: "Core service areas" },
        { value: "AI", label: "Ready product workflows" },
        { value: "Cloud", label: "Native delivery mindset" },
      ],
      howWeWork: {
        eyebrow: "How We Work",
        heading: "Small enough to care deeply, sharp enough to own hard problems.",
        description: "We are most useful when a product needs more than implementation. We help clarify what to build, choose the right technical path, and keep momentum through launch and iteration.",
      },
      principles: [
        { title: "Product-first thinking", description: "We shape every build around the user, the business outcome, and the constraints that actually matter in production." },
        { title: "Reliable engineering", description: "Our work favors clean architecture, practical documentation, and deployment paths that teams can operate with confidence." },
        { title: "Useful AI and cloud", description: "We bring modern AI and cloud systems into products where they create real leverage, not just novelty." },
      ],
      whatWeBuild: "What We Build",
      serviceItems: ["Automation", "Web Development", "Computer Vision", "Cloud Architecture"],
    },
    contactPage: {
      heading: "Contact Us",
      subheading: "Send a quick note about your product, automation, AI, or cloud challenge. We will respond with a focused next step instead of a generic sales loop.",
      detailLabels: ["Email", "Phone", "Location"],
      form: {
        eyebrow: "Send a Message",
        heading: "Start the conversation",
        description: "A few details help us route your note to the right specialist.",
        name: "Your name",
        email: "Work email",
        company: "Company or project",
        subject: "Subject",
        message: "Tell us what you need help with...",
        submit: "Send Message",
      },
    },
    caseStudiesPage: {
      eyebrow: "Case Studies",
      heading: "Practical software outcomes for ambitious product teams.",
      subheading: "Explore how Ecello Labs shapes cloud products, automation systems, and AI-backed workflows from product direction through delivery.",
      viewLabel: "View",
    },
    caseStudyDetail: {
      backLink: "Back to case studies",
      projectSnapshot: "Project Snapshot",
      challenge: "Challenge",
      solution: "Solution",
      outcome: "Outcome",
      overviewEyebrow: "Overview",
      overviewHeading: "About this project",
      problemEyebrow: "The Problem",
      problemHeading: "What we were up against",
      approachEyebrow: "The Approach",
      approachHeading: "How we solved it",
      featuresEyebrow: "Features",
      featuresHeading: "What we built",
      engineeringEyebrow: "Engineering",
      engineeringHeading: "Technical challenges",
      resultsEyebrow: "Results",
      resultsHeading: "Business impact",
      buildWithUs: "Build With Us",
      buildHeading: "Have a product challenge like this?",
      bookMeeting: "Book Meeting",
    },
    servicePage: {
      whatYouGet: "What You Get",
      outcomeFocused: "Outcome-focused delivery",
      ourApproach: "Our Approach",
      approachHeading: "Built around clarity, delivery, and long-term maintainability.",
      deliveryPath: "Delivery Path",
      deliveryHeading: "A focused path from messy idea to working system.",
      bestFor: "Best For",
      bestForHeading: "Teams that need dependable execution.",
      bookCall: "Book a Strategy Call",
      viewCaseStudies: "View Case Studies",
    },
    footer: {
      description: "Building cloud-native products, automation systems, and AI-powered software that move businesses forward.",
      columnTitles: ["Pages", "Services", "Legal"],
      pageLabels: ["Home", "About Us", "Case Studies", "Contact Us", "Book Meeting", "Components"],
      legalLabels: ["Privacy Policy", "Cookie Consent", "Terms & Conditions"],
      newsletter: "Newsletter",
      newsletterDesc: "Get product insights, engineering notes, and company updates.",
      emailPlaceholder: "you@company.com",
      subscribe: "Subscribe",
      copyright: "© 2026 Ecello Labs. All rights reserved.",
      tagline: "Cloud, automation, and AI software for ambitious teams.",
    },
    servicePromises: {
      "automation": "From internal approvals to customer-facing workflows, we build automation that feels practical on day one and scalable as the business grows.",
      "web-development": "Our web development work balances speed, maintainability, and product clarity so teams can ship without creating a codebase they later have to fight.",
      "computer-vision": "Computer vision projects succeed when model behavior, user experience, and deployment constraints are designed together. That is where we focus.",
      "cloud-architecture": "Good cloud architecture is not just servers and diagrams. It is repeatable deployment, sensible cost control, security posture, and fast recovery when things break.",
    },
    caseStudySummaries: {
      "payguard-shopify-plugin": "A native Shopify plugin that helps store owners assess the risk of Cash on Delivery customers before dispatch, using a three-tier color-coded scoring system backed by cross-store behavioral data.",
      "labour-bridge-platform": "A public-facing recruitment website and a private management portal built for a Stuttgart-based company connecting Vietnamese skilled workers and apprentices with German employers in the healthcare sector.",
      "patio-masters-training-app": "A Flutter-based mobile training app that takes new sales hires through a structured onboarding programme and automatically schedules their interview on completion, while giving existing staff AI-generated practice questions grounded in real company context.",
    },
    caseStudyContent: {},
  },
  de: {
    nav: {
      services: "Leistungen",
      serviceLabels: ["Automatisierung", "Webentwicklung", "Computer Vision", "Cloud-Architektur"],
      navLabels: ["Über uns", "Fallstudien", "Kontakt"],
      bookMeeting: "Termin buchen",
    },
    hero: {
      eyebrow: "Ecello Labs",
      heading: "Intelligente Software-Erfahrungen für ambitionierte Teams.",
      subheading: "Wir entwickeln cloud-fähige Produkte, KI-gestützte Workflows und zuverlässige Engineering-Systeme, die mit Ihrem Unternehmen skalieren.",
      bookMeeting: "Termin buchen",
      exploreServices: "Leistungen entdecken",
    },
    about: {
      eyebrow: "Über uns",
      heading: "Ein produktzentrierter Technologiepartner",
      description: "Ecello Labs arbeitet mit Startups und Unternehmens-Teams zusammen, um Software zu entwickeln, die praktisch, sicher und zukunftsfähig ist. Unser Ansatz verbindet Produktdenken, Engineering-Disziplin und moderne KI-Fähigkeiten.",
    },
    services: {
      eyebrow: "Unsere Leistungen",
      heading: "Entwickelt für echten Geschäftswert",
      items: [
        { title: "Produktentwicklung", description: "End-to-End-Softwareentwicklung von der Ideenvalidierung bis zur skalierbaren Architektur und Markteinführung." },
        { title: "Cloud & DevOps", description: "Zuverlässige Cloud-Infrastruktur, automatisiertes CI/CD und proaktive Observability für moderne Teams." },
        { title: "KI-Integration", description: "Praktische KI-Systeme, Assistenten und Workflows, die messbare Geschäftsergebnisse erzielen." },
      ],
    },
    howWeWork: {
      eyebrow: "Unsere Arbeitsweise",
      heading: "Ein klarer Weg vom Problem zum fertigen Produkt.",
      steps: [
        { step: "Entdecken", description: "Wir lernen Ihr Unternehmen, Ihre Nutzer und das zu lösende Problem kennen, bevor wir eine einzige Zeile Code schreiben." },
        { step: "Gestalten", description: "Wir skizzieren die Architektur, User-Flows und den technischen Ansatz, damit alle vor Beginn der Entwicklung ausgerichtet sind." },
        { step: "Entwickeln", description: "Wir arbeiten in fokussierten Zyklen mit regelmäßigen Check-ins und halten Fortschritt und Feedback-Schleifen kurz." },
        { step: "Liefern", description: "Wir deployen in die Produktion, übergeben eine saubere Dokumentation und bleiben während der Übergabe erreichbar." },
      ],
    },
    bookMeeting: {
      eyebrow: "Termin buchen",
      heading: "Planen wir Ihren nächsten Produktschritt",
      description: "Erzählen Sie uns, was Sie entwickeln und wo Sie Unterstützung benötigen. Wir melden uns mit einem fokussierten Strategiegespräch.",
      steps: [
        { step: "01", title: "Erzählen Sie uns von Ihrem Projekt", description: "Füllen Sie das Formular mit einer kurzen Übersicht aus, was Sie entwickeln und welche Art von Unterstützung Sie suchen." },
        { step: "02", title: "Wir prüfen und melden uns", description: "Wir überprüfen Ihre Einsendung innerhalb von 24 Stunden und melden uns mit einer kurzen Nachricht zu den nächsten Schritten." },
        { step: "03", title: "Wir führen ein Strategiegespräch", description: "Wir planen einen fokussierten 30-minütigen Anruf, um Ihre Ziele zu verstehen und zu umreißen, wie wir helfen können." },
      ],
      form: {
        name: "Ihr Name",
        email: "Geschäftliche E-Mail",
        company: "Unternehmen",
        message: "Erzählen Sie uns von Ihrem Projekt. Was entwickeln Sie, in welcher Phase befinden Sie sich und wo benötigen Sie Hilfe?",
        submit: "Termin buchen",
      },
    },
    aboutPage: {
      eyebrow: "Über Ecello Labs",
      heading: "Wir entwickeln Softwaresysteme mit Produktgespür und Engineering-Disziplin.",
      subheading: "Ecello Labs arbeitet mit ambitionierten Teams zusammen, um cloud-fähige Produkte, Automatisierungssysteme und KI-gestützte Workflows zu gestalten, zu entwickeln und zu skalieren.",
      stats: [
        { value: "4", label: "Kernleistungsbereiche" },
        { value: "KI", label: "Fertige Produkt-Workflows" },
        { value: "Cloud", label: "Native Lieferdenkweise" },
      ],
      howWeWork: {
        eyebrow: "Unsere Arbeitsweise",
        heading: "Klein genug, um tief zu kümmern, scharf genug, um schwierige Probleme zu lösen.",
        description: "Wir sind am nützlichsten, wenn ein Produkt mehr als nur Umsetzung braucht. Wir helfen zu klären, was gebaut werden soll, den richtigen technischen Weg zu wählen und den Schwung durch Launch und Iteration zu halten.",
      },
      principles: [
        { title: "Produkt-zuerst-Denken", description: "Wir gestalten jeden Build rund um den Nutzer, das Geschäftsziel und die Einschränkungen, die in der Produktion wirklich zählen." },
        { title: "Zuverlässiges Engineering", description: "Unsere Arbeit bevorzugt saubere Architektur, praktische Dokumentation und Deployment-Pfade, die Teams mit Zuversicht betreiben können." },
        { title: "Nützliche KI und Cloud", description: "Wir bringen moderne KI- und Cloud-Systeme in Produkte, wo sie echten Hebel erzeugen, nicht nur Neuheit." },
      ],
      whatWeBuild: "Was Wir Bauen",
      serviceItems: ["Automatisierung", "Webentwicklung", "Computer Vision", "Cloud-Architektur"],
    },
    contactPage: {
      heading: "Kontakt",
      subheading: "Schreiben Sie uns kurz über Ihre Produkt-, Automatisierungs-, KI- oder Cloud-Herausforderung. Wir antworten mit einem konkreten nächsten Schritt statt einer generischen Vertriebsschleife.",
      detailLabels: ["E-Mail", "Telefon", "Standort"],
      form: {
        eyebrow: "Nachricht senden",
        heading: "Gespräch beginnen",
        description: "Einige Details helfen uns, Ihre Nachricht an den richtigen Spezialisten weiterzuleiten.",
        name: "Ihr Name",
        email: "Geschäftliche E-Mail",
        company: "Unternehmen oder Projekt",
        subject: "Betreff",
        message: "Erzählen Sie uns, womit Sie Hilfe benötigen...",
        submit: "Nachricht senden",
      },
    },
    caseStudiesPage: {
      eyebrow: "Fallstudien",
      heading: "Praktische Software-Ergebnisse für ambitionierte Produktteams.",
      subheading: "Entdecken Sie, wie Ecello Labs Cloud-Produkte, Automatisierungssysteme und KI-gestützte Workflows von der Produktrichtung bis zur Lieferung gestaltet.",
      viewLabel: "Ansehen",
    },
    caseStudyDetail: {
      backLink: "Zurück zu Fallstudien",
      projectSnapshot: "Projekt-Übersicht",
      challenge: "Herausforderung",
      solution: "Lösung",
      outcome: "Ergebnis",
      overviewEyebrow: "Überblick",
      overviewHeading: "Über dieses Projekt",
      problemEyebrow: "Das Problem",
      problemHeading: "Was uns gegenüberstand",
      approachEyebrow: "Der Ansatz",
      approachHeading: "Wie wir es gelöst haben",
      featuresEyebrow: "Funktionen",
      featuresHeading: "Was wir gebaut haben",
      engineeringEyebrow: "Engineering",
      engineeringHeading: "Technische Herausforderungen",
      resultsEyebrow: "Ergebnisse",
      resultsHeading: "Geschäftlicher Einfluss",
      buildWithUs: "Mit uns bauen",
      buildHeading: "Haben Sie eine ähnliche Produktherausforderung?",
      bookMeeting: "Termin buchen",
    },
    servicePage: {
      whatYouGet: "Was Sie erhalten",
      outcomeFocused: "Ergebnisorientierte Lieferung",
      ourApproach: "Unser Ansatz",
      approachHeading: "Auf Klarheit, Lieferung und langfristige Wartbarkeit ausgerichtet.",
      deliveryPath: "Lieferpfad",
      deliveryHeading: "Ein fokussierter Weg von der unklaren Idee zum funktionierenden System.",
      bestFor: "Am besten geeignet für",
      bestForHeading: "Teams, die zuverlässige Umsetzung brauchen.",
      bookCall: "Strategiegespräch buchen",
      viewCaseStudies: "Fallstudien ansehen",
    },
    footer: {
      description: "Wir entwickeln cloud-native Produkte, Automatisierungssysteme und KI-gestützte Software, die Unternehmen voranbringt.",
      columnTitles: ["Seiten", "Leistungen", "Rechtliches"],
      pageLabels: ["Startseite", "Über uns", "Fallstudien", "Kontakt", "Termin buchen", "Komponenten"],
      legalLabels: ["Datenschutz", "Cookie-Einwilligung", "AGB"],
      newsletter: "Newsletter",
      newsletterDesc: "Produkt-Einblicke, Engineering-Notizen und Unternehmensupdates.",
      emailPlaceholder: "sie@unternehmen.de",
      subscribe: "Abonnieren",
      copyright: "© 2026 Ecello Labs. Alle Rechte vorbehalten.",
      tagline: "Cloud-, Automatisierungs- und KI-Software für ambitionierte Teams.",
    },
    servicePromises: {
      "automation": "Von internen Genehmigungen bis zu kundenorientierten Workflows bauen wir Automatisierungen, die vom ersten Tag an praktisch und mit dem Wachstum des Unternehmens skalierbar sind.",
      "web-development": "Unsere Webentwicklungsarbeit balanciert Geschwindigkeit, Wartbarkeit und Produktklarheit, damit Teams liefern können, ohne eine Codebasis zu schaffen, mit der sie später kämpfen müssen.",
      "computer-vision": "Computer-Vision-Projekte gelingen, wenn Modellverhalten, Nutzererfahrung und Deployment-Anforderungen gemeinsam gestaltet werden. Genau darauf konzentrieren wir uns.",
      "cloud-architecture": "Gute Cloud-Architektur besteht nicht nur aus Servern und Diagrammen. Es geht um wiederholbares Deployment, vernünftige Kostenkontrolle, Sicherheitspostur und schnelle Wiederherstellung bei Ausfällen.",
    },
    caseStudySummaries: {
      "payguard-shopify-plugin": "Ein natives Shopify-Plugin, das Händlern hilft, das Risiko von Nachnahme-Kunden vor dem Versand zu bewerten, mit einem dreistufigen farbcodierten Bewertungssystem auf Basis verhaltensübergreifender Store-Daten.",
      "labour-bridge-platform": "Eine öffentliche Recruiting-Website und ein privates Verwaltungsportal für ein Stuttgarter Unternehmen, das vietnamesische Fachkräfte und Auszubildende mit deutschen Arbeitgebern im Gesundheitssektor verbindet.",
      "patio-masters-training-app": "Eine Flutter-basierte mobile Trainings-App, die neue Vertriebsmitarbeiter durch ein strukturiertes Onboarding-Programm führt und ihr Vorstellungsgespräch automatisch plant, während bestehendem Personal KI-generierte Übungsfragen auf Basis echten Unternehmenskontexts bereitstellt.",
    },
    caseStudyContent: {
      "payguard-shopify-plugin": {
        challenge: "Shopify-Händler hatten keine zuverlässige Möglichkeit, COD-Kunden zu identifizieren, die wahrscheinlich die Zahlung verweigern oder Bestellungen zurücksenden würden, was zu erheblichen Verlusten durch nicht ausgelieferte Sendungen führte.",
        challengeDetail: "Nachnahme ist eine der beliebtesten Zahlungsmethoden in preissensiblen und aufstrebenden Märkten. Ein Kunde kann eine COD-Bestellung aufgeben, ohne die Absicht zu zahlen, die Lieferung ablehnen oder einfach nicht zu Hause sein. Der Händler trägt die vollen Versandkosten hin und zurück. Was dies verschlimmerte: Es gab keine gemeinsamen Aufzeichnungen über Shops hinweg. Bestehende Tools lösten dies nicht. Der Bestellverlauf innerhalb eines einzelnen Shops sagt nichts darüber aus, was ein Kunde anderswo getan hat.",
        solution: "Ecello baute ein vollständig integriertes Shopify-Plugin mit eigener Benutzeroberfläche, das Kundendaten über die Shopify-API abruft, eine proprietäre Datenbank abgleicht und sofort ein Rot-, Gelb- oder Grün-Risikotier anzeigt, wenn eine COD-Bestellung eingeht.",
        solutionDetail: "Wir bauten PayGuard als vollständig integriertes Shopify-Plugin mit eigener Oberfläche im Shopify-Admin. Wenn eine COD-Bestellung eingeht, öffnet der Händler PayGuard und sieht sofort ein Risikoprofil: erfolgreiche Zahlungen, Ablehnungen, Rücksendungen und eine Gesamtbewertung als farbcodierter Tier. Das System nutzt zwei Datenquellen: die Shopify-API und unsere eigene proprietäre Datenbank.",
        outcome: "Händler erhalten sofortige Einblicke in COD-Risiken vor dem Versand, reduzieren Rücksendeverluste und tragen zu einem Netzwerk bei, das mit jeder Transaktion genauer wird.",
        outcomeDetail: "Händler, die PayGuard nutzen, können risikoreiche COD-Bestellungen vor dem Versand identifizieren. Selbst ein Bruchteil dieser Bestellungen zu blockieren oder auf Vorauszahlung umzustellen reduziert direkt die Versandkosten. Anstatt Fulfillment-Entscheidungen nach Gefühl zu treffen, treffen Händler sie auf Basis von Evidenz.",
        overview: "PayGuard ist ein natives Shopify-Plugin für E-Commerce-Händler, die Nachnahme als Zahlungsoption anbieten. Es gibt Händlern ein klares, sofortiges Bild davon, ob ein COD-Kunde vertrauenswürdig ist, bevor die Bestellung je versandt wird. Das Plugin ruft verfügbare Kundendaten über die Shopify-API ab, gleicht sie gegen eine proprietäre Datenbank ab und präsentiert dem Händler einen einfachen Risikoscore.",
        features: [
          { title: "Echtzeit-Abfrage", description: "Das Kundenrisiko wird sofort angezeigt, wenn eine COD-Bestellung aufgegeben wird. Keine zusätzlichen Schritte, kein Kontextwechsel, keine Verzögerung zwischen Bestellung und Entscheidung." },
          { title: "Farbcodierte Risikostufen", description: "Jeder Kunde wird basierend auf seiner Geschichte einem Rot-, Gelb- oder Grün-Tier zugewiesen. Die Entscheidung ist sofort, ohne einen Bericht lesen zu müssen." },
          { title: "Bestell- und Rückgabehistorie", description: "Vollständige Aufschlüsselung der COD-Performance des Kunden über alle Shops im Netzwerk, nicht nur den eigenen Shop des Händlers." },
          { title: "Community-Markierung", description: "Nach jeder COD-Bestellung können Händler den Kunden als erfolgreichen Zahler, Ablehner oder Rücksender markieren. Diese Markierungen fließen in die gemeinsame Datenbank ein." },
          { title: "Seed-Datenbank", description: "Mit aggregierten Verhaltensdaten vorbeladen, damit das System vom ersten Nutzungstag an aussagekräftige Risikoscores liefert." },
          { title: "Native Shopify-Oberfläche", description: "Vollständig in den Shopify-Admin eingebettet. Risikodaten befinden sich genau dort, wo Entscheidungen getroffen werden." },
        ],
        challenges: [
          { title: "Shopify-API-Einschränkungen", description: "Shopifys Datenzugriffsrichtlinien sind streng und bewusst begrenzt. Wir haben innerhalb dieser Grenzen sorgfältig entwickelt und maximale nützliche Signale aus erlaubten Datenpunkten extrahiert." },
          { title: "Cold-Start-Datenbankproblem", description: "Ein Risikobewertungssystem ist nur nützlich, wenn es Daten hat. Wir haben eine proprietäre Kundenverhaltens-Datenbank gebaut und befüllt, bevor das Plugin veröffentlicht wurde." },
          { title: "Kundenidentitätsabgleich", description: "Kunden verwenden nicht immer dieselbe Telefonnummer, E-Mail oder Adresse. Wir haben eine Abgleichsschicht mit Fuzzy-Logik gebaut, um Datensätze über Identifikatoren hinweg zu verknüpfen." },
          { title: "Missbrauchsresistente Markierung", description: "Jedes System, das Nutzern erlaubt, Daten über andere Nutzer einzureichen, kann missbraucht werden. Wir haben die Markierungsmechanik mit Schutzmaßnahmen entworfen." },
        ],
      },
      "labour-bridge-platform": {
        challenge: "Labour Bridge verwaltete eine internationale Recruiting-Pipeline über zwei Länder und mehrere Sprachen ohne zweckgebundene Tools, was eine Skalierung unmöglich machte.",
        challengeDetail: "Labour Bridge koordinierte mit vietnamesischen Ausbildungseinrichtungen, überwachte Sprachfortschritte der Kandidaten, reagierte auf eingehende Anfragen von deutschen Arbeitgebern und verfolgte die rechtlichen und administrativen Schritte für jede Vermittlung – alles ohne dedizierte Software. Informationen waren über E-Mails und Tabellenkalkulationen verteilt. Die Sichtbarkeit war gering.",
        solution: "Ecello lieferte zwei parallele Builds: eine professionelle öffentliche Website für den deutschen B2B-Markt und ein internes Verwaltungsportal, wo das Labour-Bridge-Team Arbeitgeberanfragen protokollieren, Kandidatenprofile verwalten, Arbeitnehmer offenen Stellen zuordnen und jeden Fall durch Visabearbeitung, Sprachzertifizierung und finale Vermittlung verfolgen kann.",
        solutionDetail: "Für die öffentliche Website bauten wir eine saubere, professionelle Seite, die den Service, den Prozess und das Team von Labour Bridge klar kommuniziert. Für das interne Portal bauten wir ein System rund um beide Seiten der Pipeline. Auf der Nachfrageseite können Unternehmen eine Einstellungsanfrage protokollieren. Auf der Angebotsseite hält das Portal eine Datenbank mit Kandidaten.",
        outcome: "Labour Bridge wechselte von fragmentierter Koordination über E-Mails und Tabellenkalkulationen zu einer einzigen Plattform mit vollständiger Pipeline-Sichtbarkeit und schnelleren Arbeitgeber-Reaktionszeiten.",
        outcomeDetail: "Labour Bridge ging von verstreuter Koordination zu einem einzigen System über, in dem jede offene Anfrage, verfügbare Kandidaten und aktive Vermittlungen an einem Ort sichtbar sind. Die öffentliche Website gibt Labour Bridge eine professionelle digitale Eingangstür.",
        overview: "Labour Bridge GmbH ist ein Stuttgarter Recruiting-Unternehmen, das vietnamesische Fachkräfte und Auszubildende mit deutschen Arbeitgebern, hauptsächlich im Gesundheits- und Pflegesektor, verbindet. Ecello wurde beauftragt, zwei Dinge zu entwickeln: die öffentliche Website unter labourbridge.de und ein privates Verwaltungsportal.",
        features: [
          { title: "Arbeitgeberanfragen-Management", description: "Deutsche Unternehmen reichen Einstellungsanfragen mit Details zur Anzahl der benötigten Arbeitskräfte, der Jobstelle, erforderlichen Qualifikationen und bevorzugtem Zeitplan ein." },
          { title: "Kandidatendatenbank", description: "Eine durchsuchbare Datenbank vietnamesischer Kandidaten mit Profilen zu Sprachzertifizierung, Fähigkeiten, Ausbildungsgeschichte und Vermittlungsbereitschaft." },
          { title: "Pipeline-Tracking", description: "Jedes Kandidaten-Arbeitgeber-Match durchläuft definierte Phasen von der Erstauswahl bis zur Visabearbeitung, Ankunft und bestätigten Vermittlung." },
          { title: "Dokument- und Statusverwaltung", description: "Das Portal verfolgt den Status wichtiger Dokumente wie Sprachzertifikate, Visumanträge und Arbeitsverträge." },
          { title: "Mehrsprachige Unterstützung", description: "Das Labour-Bridge-Team arbeitet auf Vietnamesisch, Deutsch und Englisch. Das Portal ist für diese Anforderung gebaut." },
          { title: "Berichterstattung und Kapazitätsübersicht", description: "Manager können auf einen Blick sehen, wie viele offene Arbeitgeberanfragen ausstehen und wie viele Kandidaten auf jedem Sprachniveau verfügbar sind." },
        ],
        challenges: [
          { title: "Länderübergreifende Koordination", description: "Die Pipeline erstreckt sich über zwei Länder, mehrere Regierungsbehörden und drei Sprachen. Ein kohärentes System zu bauen, das nicht zu komplex für den täglichen Gebrauch wird, erforderte sorgfältige Informationsarchitektur." },
          { title: "Mehrstufiger Rechtsprozess", description: "Jede Vermittlung umfasst Visumanträge, Qualifikationsanerkennung, Sprachzertifizierung und Arbeitsverträge. Das Portal musste all dies gleichzeitig über viele aktive Fälle hinweg verfolgen." },
          { title: "Skalierung für Volumen", description: "Mit etwa 1.000 neuen Kandidaten, die monatlich in die Pipeline eintreten, mussten Datenmodell und Oberfläche von Anfang an für Volumen gebaut werden." },
          { title: "B2B-Glaubwürdigkeit im deutschen Markt", description: "Deutsche Arbeitgeber im Gesundheitswesen halten ihre Anbieter zu hohen Standards. Die öffentliche Website musste Legitimität und Professionalität kommunizieren." },
        ],
      },
      "patio-masters-training-app": {
        challenge: "Das Onboarding war inkonsistent, abhängig von der verfügbaren Person für das Training, und gab Managern keine Sichtbarkeit darüber, wer für ihr nächstes Gespräch bereit war.",
        challengeDetail: "Vertriebstraining in feldbasierten Unternehmen ist oft inkonsistent. Neue Mitarbeiter begleiten jemanden für ein paar Tage, schauen sich Videos an und werden dann unvorbereitet ins Feld geschickt. Die Qualität ihres Trainings hing vollständig davon ab, wer gerade verfügbar war. Für bestehendes Personal gab es keine strukturierte Möglichkeit, sich zwischen Einsätzen weiterzuentwickeln.",
        solution: "Ecello baute eine Dual-Experience Flutter-App mit rollenbasiertem Zugang. Neue Mitarbeiter durchlaufen gesperrte Trainingssegmente, bestehen Nachbewertungen und lösen bei Abschluss eine automatisierte Gesprächsbuchung aus. Bestehendes Personal greift auf einen KI-gestützten Übungsbereich zu, wo Fragen dynamisch aus dem eigenen Produktkatalog des Unternehmens generiert werden.",
        solutionDetail: "Die App hat zwei klar getrennte Erfahrungen innerhalb derselben Codebasis. Neue Mitarbeiter durchlaufen Trainingssegmente in fester Reihenfolge. Sobald alle Segmente abgeschlossen und alle Bewertungen bestanden sind, löst die App automatisch eine Gesprächsbuchung aus. Für bestehendes Personal generiert ein KI-Modell, das mit der eigenen Dokumentation des Unternehmens eingeleitet wurde, frische Fragen pro Sitzung.",
        outcome: "Jeder neue Mitarbeiter kommt nun mit derselben Grundvorbereitung zum Gespräch. Manager werden benachrichtigt, wenn Kandidaten bereit sind, statt den Fortschritt manuell verfolgen zu müssen.",
        outcomeDetail: "Jede Person, die neu eintritt, durchläuft dasselbe Material in derselben Reihenfolge und demonstriert Verständnis vor dem Fortschreiten. Die Qualität der Vorbereitung hängt nicht mehr davon ab, wer verfügbar war, um zu trainieren. Manager werden benachrichtigt, wenn jemand bereit ist, statt danach fragen zu müssen.",
        overview: "Patio Masters ist eine mobile Trainings- und Entwicklungsanwendung für ein Patio-Installations- und Vertriebsunternehmen. Die App dient zwei verschiedenen Gruppen: neuen Mitarbeitern, die ein strukturiertes Onboarding-Programm absolvieren müssen, und bestehendem Verkaufspersonal, das KI-generierte Übungsfragen nutzt.",
        features: [
          { title: "Rollenbasierter Zugang", description: "Neue Mitarbeiter und bestehendes Personal melden sich in derselben App an, sehen aber völlig unterschiedliche Erfahrungen." },
          { title: "Sequenzielles Video-Training", description: "Neue Mitarbeiter durchlaufen Trainingssegmente in fester Reihenfolge. Jedes Segment ist gesperrt, bis das vorherige abgeschlossen und bewertet wurde." },
          { title: "Nachsegment-Bewertungen", description: "Am Ende jedes Trainingssegments beantwortet der Benutzer Fragen zum Verständnis. Das Bestehen ist die Bedingung zum Freischalten des nächsten Segments." },
          { title: "Automatisierte Gesprächsplanung", description: "Wenn ein neuer Mitarbeiter alle Segmente abschließt und alle Bewertungen besteht, löst die App automatisch eine Gesprächsbuchung aus." },
          { title: "KI-generierte Übungsfragen", description: "Der Bereich für bestehendes Personal generiert Fragen dynamisch mit einem KI-Modell, das mit dem eigenen Kontext des Unternehmens eingeleitet wurde." },
          { title: "Fortschrittsverfolgung", description: "Manager können sehen, wo sich jeder neue Mitarbeiter im Trainingsprogramm befindet, welche Segmente abgeschlossen wurden und welche Bewertungen bestanden wurden." },
        ],
        challenges: [
          { title: "KI-Fragen relevant halten", description: "Generische KI-Fragengenerierung produziert generische Fragen. Wir bauten die Prompt-Schicht um den eigenen Produktkatalog, die Preisstruktur und häufige Einwände des Unternehmens." },
          { title: "Progression ohne Frustration erzwingen", description: "Gesperrte Segmente können strafend wirken, wenn sie nicht sorgfältig gestaltet sind. Wir bauten die Bewertungs- und Entsperrlogik fest genug, um den Standard durchzusetzen." },
          { title: "Dual-Experience in einer einzigen Codebasis", description: "Zwei bedeutend unterschiedliche Erfahrungen für zwei verschiedene Benutzertypen in derselben Flutter-App erforderte eine saubere rollenbasierte Architektur." },
          { title: "Scheduling-Übergabe automatisieren", description: "Der Trigger, der ausgelöst wird, wenn ein neuer Mitarbeiter das Training abschließt, musste sich zuverlässig mit dem bestehenden Planungs-Workflow des Unternehmens verbinden." },
        ],
      },
    },
  },
  fr: {
    nav: {
      services: "Services",
      serviceLabels: ["Automatisation", "Développement Web", "Vision par Ordinateur", "Architecture Cloud"],
      navLabels: ["À propos", "Études de cas", "Contact"],
      bookMeeting: "Réserver",
    },
    hero: {
      eyebrow: "Ecello Labs",
      heading: "Créer des expériences logicielles intelligentes pour des équipes ambitieuses.",
      subheading: "Nous concevons et livrons des produits prêts pour le cloud, des workflows alimentés par l'IA et des systèmes d'ingénierie fiables qui évoluent avec votre entreprise.",
      bookMeeting: "Réserver",
      exploreServices: "Explorer les services",
    },
    about: {
      eyebrow: "À propos",
      heading: "Un partenaire technologique axé sur le produit",
      description: "Ecello Labs s'associe à des startups et des équipes d'entreprise pour créer des logiciels pratiques, sécurisés et prêts pour l'avenir. Notre approche allie pensée produit, rigueur d'ingénierie et capacités modernes d'IA.",
    },
    services: {
      eyebrow: "Nos Services",
      heading: "Conçus pour créer une vraie valeur commerciale",
      items: [
        { title: "Ingénierie Produit", description: "Développement logiciel de bout en bout, de la validation d'idée à l'architecture évolutive et au lancement." },
        { title: "Cloud & DevOps", description: "Infrastructure cloud fiable, CI/CD automatisé et observabilité proactive pour les équipes modernes." },
        { title: "Intégration IA", description: "Systèmes IA pratiques, assistants et workflows qui créent des résultats commerciaux mesurables." },
      ],
    },
    howWeWork: {
      eyebrow: "Notre Méthode",
      heading: "Un chemin clair du problème au produit fonctionnel.",
      steps: [
        { step: "Découvrir", description: "Nous apprenons à connaître votre entreprise, vos utilisateurs et le problème à résoudre avant d'écrire une seule ligne de code." },
        { step: "Concevoir", description: "Nous définissons l'architecture, les flux utilisateur et l'approche technique pour que tout le monde soit aligné avant de commencer." },
        { step: "Développer", description: "Nous travaillons en cycles ciblés avec des points réguliers, en maintenant la visibilité des progrès et des boucles de feedback courtes." },
        { step: "Livrer", description: "Nous déployons en production, remettons une documentation propre et restons disponibles pendant la transition." },
      ],
    },
    bookMeeting: {
      eyebrow: "Réserver une Réunion",
      heading: "Planifions votre prochaine étape produit",
      description: "Dites-nous ce que vous créez et où vous avez besoin d'aide. Nous ferons un suivi avec un appel stratégique ciblé.",
      steps: [
        { step: "01", title: "Parlez-nous de votre projet", description: "Remplissez le formulaire avec un aperçu de ce que vous créez et du type de soutien que vous recherchez." },
        { step: "02", title: "Nous examinons et revenons vers vous", description: "Nous examinons votre soumission dans les 24 heures et faisons un suivi avec un court message pour confirmer les prochaines étapes." },
        { step: "03", title: "Nous organisons un appel stratégique", description: "Nous planifions un appel ciblé de 30 minutes pour comprendre vos objectifs et définir comment nous pouvons vous aider." },
      ],
      form: {
        name: "Votre Nom",
        email: "Email Professionnel",
        company: "Entreprise",
        message: "Parlez-nous de votre projet. Que créez-vous, à quelle étape en êtes-vous et où avez-vous besoin d'aide ?",
        submit: "Réserver",
      },
    },
    aboutPage: {
      eyebrow: "À propos d'Ecello Labs",
      heading: "Nous développons des systèmes logiciels avec un sens du produit et une discipline d'ingénierie.",
      subheading: "Ecello Labs s'associe à des équipes ambitieuses pour concevoir, développer et mettre à l'échelle des produits cloud, des systèmes d'automatisation et des workflows alimentés par l'IA.",
      stats: [
        { value: "4", label: "Domaines de service principaux" },
        { value: "IA", label: "Workflows produit prêts" },
        { value: "Cloud", label: "Mentalité de livraison native" },
      ],
      howWeWork: {
        eyebrow: "Notre Méthode",
        heading: "Assez petit pour s'impliquer profondément, assez expert pour résoudre les problèmes difficiles.",
        description: "Nous sommes les plus utiles quand un produit nécessite plus qu'une simple mise en œuvre. Nous aidons à clarifier ce qu'il faut construire, choisir la bonne voie technique et maintenir l'élan au lancement et lors des itérations.",
      },
      principles: [
        { title: "Pensée produit en premier", description: "Nous façonnons chaque build autour de l'utilisateur, du résultat commercial et des contraintes qui comptent vraiment en production." },
        { title: "Ingénierie fiable", description: "Notre travail privilégie une architecture propre, une documentation pratique et des chemins de déploiement que les équipes peuvent exploiter avec confiance." },
        { title: "IA et cloud utiles", description: "Nous intégrons des systèmes IA et cloud modernes dans les produits où ils créent un vrai levier, pas seulement de la nouveauté." },
      ],
      whatWeBuild: "Ce Que Nous Construisons",
      serviceItems: ["Automatisation", "Développement Web", "Vision par Ordinateur", "Architecture Cloud"],
    },
    contactPage: {
      heading: "Contactez-nous",
      subheading: "Envoyez-nous un message sur votre défi produit, automatisation, IA ou cloud. Nous répondrons avec une prochaine étape concrète plutôt qu'une boucle de vente générique.",
      detailLabels: ["Email", "Téléphone", "Localisation"],
      form: {
        eyebrow: "Envoyer un Message",
        heading: "Commencer la conversation",
        description: "Quelques détails nous aident à acheminer votre message au bon spécialiste.",
        name: "Votre nom",
        email: "Email professionnel",
        company: "Entreprise ou projet",
        subject: "Sujet",
        message: "Dites-nous avec quoi vous avez besoin d'aide...",
        submit: "Envoyer le message",
      },
    },
    caseStudiesPage: {
      eyebrow: "Études de Cas",
      heading: "Des résultats logiciels concrets pour des équipes produit ambitieuses.",
      subheading: "Découvrez comment Ecello Labs façonne des produits cloud, des systèmes d'automatisation et des workflows IA de la direction produit à la livraison.",
      viewLabel: "Voir",
    },
    caseStudyDetail: {
      backLink: "Retour aux études de cas",
      projectSnapshot: "Aperçu du Projet",
      challenge: "Défi",
      solution: "Solution",
      outcome: "Résultat",
      overviewEyebrow: "Aperçu",
      overviewHeading: "À propos de ce projet",
      problemEyebrow: "Le Problème",
      problemHeading: "Ce à quoi nous faisions face",
      approachEyebrow: "L'Approche",
      approachHeading: "Comment nous l'avons résolu",
      featuresEyebrow: "Fonctionnalités",
      featuresHeading: "Ce que nous avons construit",
      engineeringEyebrow: "Ingénierie",
      engineeringHeading: "Défis techniques",
      resultsEyebrow: "Résultats",
      resultsHeading: "Impact commercial",
      buildWithUs: "Construire avec nous",
      buildHeading: "Vous avez un défi produit similaire ?",
      bookMeeting: "Réserver",
    },
    servicePage: {
      whatYouGet: "Ce Que Vous Obtenez",
      outcomeFocused: "Livraison axée sur les résultats",
      ourApproach: "Notre Approche",
      approachHeading: "Construit autour de la clarté, de la livraison et de la maintenabilité à long terme.",
      deliveryPath: "Chemin de Livraison",
      deliveryHeading: "Un chemin ciblé de l'idée floue au système fonctionnel.",
      bestFor: "Idéal Pour",
      bestForHeading: "Les équipes qui ont besoin d'une exécution fiable.",
      bookCall: "Réserver un appel stratégique",
      viewCaseStudies: "Voir les études de cas",
    },
    footer: {
      description: "Développer des produits cloud-natifs, des systèmes d'automatisation et des logiciels alimentés par l'IA qui font avancer les entreprises.",
      columnTitles: ["Pages", "Services", "Légal"],
      pageLabels: ["Accueil", "À propos", "Études de cas", "Contact", "Réserver", "Composants"],
      legalLabels: ["Politique de confidentialité", "Consentement aux cookies", "Conditions générales"],
      newsletter: "Newsletter",
      newsletterDesc: "Recevez des insights produit, des notes d'ingénierie et des actualités.",
      emailPlaceholder: "vous@entreprise.com",
      subscribe: "S'abonner",
      copyright: "© 2026 Ecello Labs. Tous droits réservés.",
      tagline: "Logiciels cloud, automatisation et IA pour des équipes ambitieuses.",
    },
    servicePromises: {
      "automation": "Des approbations internes aux workflows clients, nous créons des automatisations pratiques dès le premier jour et évolutives avec la croissance de l'entreprise.",
      "web-development": "Notre travail de développement web équilibre vitesse, maintenabilité et clarté produit pour que les équipes puissent livrer sans créer une base de code contre laquelle elles devront lutter.",
      "computer-vision": "Les projets de vision par ordinateur réussissent quand le comportement du modèle, l'expérience utilisateur et les contraintes de déploiement sont conçus ensemble. C'est là que nous nous concentrons.",
      "cloud-architecture": "Une bonne architecture cloud n'est pas que des serveurs et des diagrammes. C'est un déploiement reproductible, un contrôle des coûts sensé, une posture de sécurité et une récupération rapide en cas de panne.",
    },
    caseStudySummaries: {
      "payguard-shopify-plugin": "Un plugin Shopify natif qui aide les propriétaires de boutiques à évaluer le risque des clients en paiement à la livraison avant l'expédition, avec un système de notation à trois niveaux basé sur des données comportementales inter-boutiques.",
      "labour-bridge-platform": "Un site web de recrutement public et un portail de gestion privé pour une entreprise de Stuttgart connectant des travailleurs qualifiés et apprentis vietnamiens avec des employeurs allemands dans le secteur de la santé.",
      "patio-masters-training-app": "Une application mobile de formation Flutter qui guide les nouvelles recrues commerciales à travers un programme d'intégration structuré et planifie automatiquement leur entretien, tout en offrant au personnel existant des questions de pratique générées par IA basées sur le contexte réel de l'entreprise.",
    },
    caseStudyContent: {
      "payguard-shopify-plugin": {
        challenge: "Les marchands Shopify n'avaient aucun moyen fiable d'identifier les clients susceptibles de refuser le paiement ou de retourner des commandes, entraînant des pertes importantes dues aux expéditions non livrées.",
        challengeDetail: "Le paiement à la livraison est l'une des méthodes de paiement les plus populaires dans les marchés sensibles aux prix. Un client peut passer une commande sans intention de payer, refuser la livraison ou simplement ne pas être chez lui. Le marchand absorbe le coût total d'expédition aller-retour. Ce qui aggravait cela : il n'y avait pas d'historique partagé entre les boutiques. Les outils existants ne résolvaient pas ce problème.",
        solution: "Ecello a construit un plugin Shopify entièrement intégré avec sa propre interface qui récupère les données clients via l'API Shopify, croise une base de données propriétaire et affiche instantanément un niveau de risque Rouge, Jaune ou Vert quand une commande COD arrive.",
        solutionDetail: "Nous avons construit PayGuard comme un plugin Shopify entièrement intégré avec sa propre interface dans le panneau d'administration Shopify. Quand une commande COD arrive, le marchand ouvre PayGuard et voit immédiatement un profil de risque : paiements réussis, refus, retours et un score global en niveau de couleur.",
        outcome: "Les marchands obtiennent une visibilité instantanée sur le risque COD avant de s'engager dans une expédition, réduisant les pertes de retour et contribuant à un réseau qui devient plus précis avec chaque transaction.",
        outcomeDetail: "Les marchands qui utilisent PayGuard peuvent identifier les commandes COD à risque élevé avant l'expédition. Bloquer ou convertir même une fraction de ces commandes en prépaiement réduit directement les coûts d'expédition. Au lieu de prendre des décisions d'exécution à l'intuition, les marchands les prennent sur la base de preuves.",
        overview: "PayGuard est un plugin Shopify natif pour les propriétaires de boutiques e-commerce qui proposent le paiement à la livraison. Il donne aux marchands une image claire et instantanée de la fiabilité d'un client COD avant l'expédition. Le plugin récupère les données clients via l'API Shopify, les croise avec une base de données propriétaire et présente un score de risque simple.",
        features: [
          { title: "Recherche en temps réel", description: "Le risque client est affiché instantanément quand une commande COD est passée. Pas d'étapes supplémentaires, pas de changement de contexte, pas de délai entre commande et décision." },
          { title: "Niveaux de risque codés par couleur", description: "Chaque client se voit attribuer un niveau Rouge, Jaune ou Vert basé sur son historique. La décision est immédiate sans lire un rapport." },
          { title: "Historique des commandes et retours", description: "Décomposition complète de la performance COD du client dans toutes les boutiques du réseau, pas seulement la boutique du marchand." },
          { title: "Signalement communautaire", description: "Après chaque commande COD, les marchands peuvent signaler le client comme payeur réussi, refus ou retour. Ces signalements alimentent la base de données partagée." },
          { title: "Base de données initiale", description: "Pré-chargée avec des données comportementales agrégées pour que le système fournisse des scores de risque significatifs dès le premier jour d'utilisation." },
          { title: "Interface Shopify native", description: "Entièrement intégrée dans l'administration Shopify. Les données de risque se trouvent exactement là où les décisions sont prises." },
        ],
        challenges: [
          { title: "Contraintes de l'API Shopify", description: "Les politiques d'accès aux données de Shopify sont strictes et intentionnellement limitées. Nous avons développé dans ces limites avec soin." },
          { title: "Problème de démarrage à froid", description: "Un système de scoring n'est utile que s'il dispose de données. Nous avons construit et rempli une base de données de comportement client propriétaire avant la sortie du plugin." },
          { title: "Correspondance d'identité client", description: "Les clients n'utilisent pas toujours le même numéro de téléphone, email ou adresse. Nous avons construit une couche de correspondance avec une logique floue." },
          { title: "Signalement résistant aux abus", description: "Tout système permettant aux utilisateurs de soumettre des données sur d'autres peut être abusé. Nous avons conçu le mécanisme avec des protections." },
        ],
      },
      "labour-bridge-platform": {
        challenge: "Labour Bridge gérait un pipeline de recrutement international sur deux pays et plusieurs langues sans outils dédiés, rendant la mise à l'échelle impossible.",
        challengeDetail: "Labour Bridge coordonnait avec des établissements de formation vietnamiens, suivait les progrès linguistiques des candidats, répondait aux demandes entrantes d'employeurs allemands et suivait les étapes légales pour chaque placement — le tout sans logiciel dédié. Les informations étaient fragmentées entre emails et tableurs.",
        solution: "Ecello a livré deux développements parallèles : un site web public professionnel pour le marché B2B allemand et un portail de gestion interne où l'équipe Labour Bridge peut enregistrer les demandes d'embauche, gérer les profils candidats, associer les travailleurs aux postes ouverts et suivre chaque dossier.",
        solutionDetail: "Pour le site public, nous avons construit un site propre et professionnel communiquant clairement le service Labour Bridge. Pour le portail interne, nous avons construit un système organisé autour des deux côtés du pipeline. Côté demande, les entreprises enregistrent une demande d'embauche. Côté offre, le portail tient une base de données de candidats.",
        outcome: "Labour Bridge est passé d'une coordination fragmentée à une plateforme unique avec une visibilité complète du pipeline et des temps de réponse plus rapides.",
        outcomeDetail: "Labour Bridge est passé d'une coordination dispersée à un système unique où chaque demande ouverte, candidat disponible et placement actif est visible au même endroit. Le site public donne à Labour Bridge une porte d'entrée numérique professionnelle.",
        overview: "Labour Bridge GmbH est une entreprise de recrutement basée à Stuttgart spécialisée dans la connexion de travailleurs qualifiés et apprentis vietnamiens avec des employeurs allemands, principalement dans les secteurs de la santé et des maisons de soins.",
        features: [
          { title: "Gestion des demandes employeurs", description: "Les entreprises allemandes soumettent des demandes d'embauche détaillant le nombre de travailleurs, le poste, les qualifications requises et le calendrier préféré." },
          { title: "Base de données candidats", description: "Une base de données consultable de candidats vietnamiens avec des profils couvrant la certification linguistique, les compétences, l'historique de formation et la disponibilité." },
          { title: "Suivi du pipeline", description: "Chaque match candidat-employeur progresse à travers des étapes définies de la sélection initiale jusqu'au visa, à l'arrivée et au placement confirmé." },
          { title: "Gestion des documents et statuts", description: "Le portail suit le statut des documents clés comme les certificats de langue, les demandes de visa et les contrats de travail." },
          { title: "Support multilingue", description: "L'équipe Labour Bridge opère en vietnamien, allemand et anglais. Le portail est construit pour répondre à ce besoin." },
          { title: "Rapports et vue d'ensemble de la capacité", description: "Les managers peuvent voir d'un coup d'œil combien de demandes ouvertes existent et combien de candidats sont disponibles à chaque niveau de langue." },
        ],
        challenges: [
          { title: "Coordination transfrontalière", description: "Le pipeline s'étend sur deux pays, plusieurs organismes gouvernementaux et trois langues. Construire un système cohérent sans devenir trop complexe a nécessité une architecture d'information soignée." },
          { title: "Processus légal multi-étapes", description: "Chaque placement implique des demandes de visa, reconnaissance des qualifications, certification linguistique et contrats de travail." },
          { title: "Mise à l'échelle pour le volume", description: "Avec environ 1 000 nouveaux candidats entrant dans le pipeline chaque mois, le modèle de données et l'interface devaient être construits pour le volume dès le départ." },
          { title: "Crédibilité B2B sur le marché allemand", description: "Les employeurs allemands dans le secteur de la santé tiennent leurs fournisseurs à un niveau élevé. Le site devait communiquer légitimité et professionnalisme." },
        ],
      },
      "patio-masters-training-app": {
        challenge: "L'intégration était incohérente, dépendante de la disponibilité du formateur, et ne donnait aux managers aucune visibilité sur qui était prêt pour son prochain entretien.",
        challengeDetail: "La formation commerciale dans les entreprises de terrain tend à être incohérente. Les nouvelles recrues accompagnent quelqu'un pendant quelques jours et sont ensuite mises sur le terrain avec une préparation incomplète. La qualité dépendait entièrement de qui était disponible.",
        solution: "Ecello a construit une application Flutter double expérience avec accès basé sur les rôles. Les nouvelles recrues progressent à travers des segments de formation verrouillés et déclenchent une réservation d'entretien automatisée à la fin. Le personnel existant accède à une section de pratique alimentée par l'IA.",
        solutionDetail: "L'application a deux expériences clairement séparées dans la même base de code. Les nouvelles recrues progressent à travers des segments de formation dans un ordre fixe. Une fois tous les segments terminés et toutes les évaluations réussies, l'application déclenche automatiquement une réservation d'entretien.",
        outcome: "Chaque nouvelle recrue arrive maintenant à son entretien avec la même préparation de base. Les managers sont notifiés quand les candidats sont prêts plutôt que de devoir suivre manuellement les progrès.",
        outcomeDetail: "Chaque personne qui rejoint parcourt le même matériel dans le même ordre et démontre sa compréhension avant de progresser. La qualité de la préparation ne dépend plus de qui était disponible pour former.",
        overview: "Patio Masters est une application mobile de formation et de développement pour une entreprise de vente et d'installation de patios. L'application sert deux groupes distincts : les nouvelles recrues qui doivent compléter un programme d'intégration, et le personnel de vente existant qui l'utilise pour perfectionner ses connaissances.",
        features: [
          { title: "Accès basé sur les rôles", description: "Les nouvelles recrues et le personnel existant se connectent à la même application mais voient des expériences entièrement différentes." },
          { title: "Formation vidéo séquentielle", description: "Les nouvelles recrues progressent à travers des segments de formation dans un ordre fixe. Chaque segment est verrouillé jusqu'à ce que le précédent soit complété et évalué." },
          { title: "Évaluations post-segment", description: "À la fin de chaque segment, l'utilisateur répond à des questions testant sa compréhension. Réussir est la condition pour débloquer le segment suivant." },
          { title: "Planification automatisée des entretiens", description: "Quand une nouvelle recrue complète tous les segments et réussit toutes les évaluations, l'application déclenche automatiquement une réservation d'entretien." },
          { title: "Questions de pratique générées par IA", description: "La section pour le personnel existant génère des questions dynamiquement en utilisant un modèle IA alimenté par le contexte propre de l'entreprise." },
          { title: "Suivi de progression", description: "Les managers peuvent voir où en est chaque nouvelle recrue dans le programme, quels segments ont été complétés et quelles évaluations ont été réussies." },
        ],
        challenges: [
          { title: "Maintenir les questions IA pertinentes", description: "La génération générique de questions IA produit des questions génériques. Nous avons construit la couche de prompt autour du catalogue de produits réel de l'entreprise." },
          { title: "Imposer la progression sans frustrer", description: "Les segments verrouillés peuvent sembler punitifs s'ils ne sont pas conçus avec soin. Nous avons construit la logique d'évaluation et de déverrouillage pour être assez ferme." },
          { title: "Double expérience dans une seule base de code", description: "Construire deux expériences différentes pour deux types d'utilisateurs dans la même application Flutter nécessitait une architecture basée sur les rôles propre." },
          { title: "Automatiser le transfert de planification", description: "Le déclencheur qui s'active quand une nouvelle recrue termine la formation devait se connecter de manière fiable au workflow de planification existant de l'entreprise." },
        ],
      },
    },
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
