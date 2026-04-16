export const services = [
  {
    id: "automation",
    eyebrow: "Workflow Automation",
    title: "Automation",
    tagline: "Turn repetitive work into dependable, measurable systems.",
    image: "/ai-image.jpg",
    summary:
      "We design automation layers that connect your tools, reduce manual handoffs, and give teams clearer visibility into daily operations.",
    promise:
      "From internal approvals to customer-facing workflows, we build automation that feels practical on day one and scalable as the business grows.",
    outcomes: [
      "Fewer manual follow-ups and repeated data entry tasks",
      "Clearer ownership across multi-step operational workflows",
      "Reusable automation foundations for future product features",
    ],
    capabilities: [
      "Workflow mapping and process redesign",
      "Internal dashboards and approval flows",
      "API integrations across business tools",
      "Notification, reporting, and audit trails",
      "Automation reliability checks and monitoring",
    ],
    process: [
      {
        step: "Map",
        description: "We identify where work slows down, where context gets lost, and which steps are worth automating first.",
      },
      {
        step: "Build",
        description: "We implement the automation with clean product flows, integrations, and operational guardrails.",
      },
      { 
        step: "Measure",
        description: "We track adoption, failure points, and business impact so the system keeps improving after launch.",
      },
    ],
    bestFor: ["Operations teams", "SaaS platforms", "Back-office workflows", "Internal tooling"],
    accent: "blue",
  },
  {
    id: "web-development",
    eyebrow: "Product Engineering",
    title: "Web Development",
    tagline: "Launch polished, scalable web products that are easy to evolve.",
    image: "/web-image.jpg",
    summary:
      "We build modern web applications, marketing experiences, and SaaS interfaces with strong foundations across UX, frontend architecture, and backend integration.",
    promise:
      "Our web development work balances speed, maintainability, and product clarity so teams can ship without creating a codebase they later have to fight.",
    outcomes: [
      "Responsive interfaces that feel fast across desktop and mobile",
      "Maintainable application architecture for future feature work",
      "Production-ready integrations with APIs, auth, payments, and analytics",
    ],
    capabilities: [
      "Next.js and React application development",
      "Design system implementation and UI engineering",
      "Backend API integration and full-stack features",
      "Performance, accessibility, and SEO foundations",
      "CMS, analytics, and third-party service setup",
    ],
    process: [
      {
        step: "Shape",
        description: "We clarify product goals, core user journeys, and the technical surface area before implementation begins.",
      },
      {
        step: "Ship",
        description: "We build the interface and product logic in focused slices so each release has visible progress.",
      },
      {
        step: "Harden",
        description: "We refine performance, accessibility, QA, and deployment workflows before handoff or launch.",
      },
    ],
    bestFor: ["SaaS products", "Company websites", "Customer portals", "MVP launches"],
    accent: "sky",
  },
  {
    id: "computer-vision",
    eyebrow: "AI Systems",
    title: "Computer Vision",
    tagline: "Build visual intelligence into real-world products and workflows.",
    image: "/computer-vision-image.jpg",
    summary:
      "We help teams use image and video intelligence for detection, classification, monitoring, and decision support across operational environments.",
    promise:
      "Computer vision projects succeed when model behavior, user experience, and deployment constraints are designed together. That is where we focus.",
    outcomes: [
      "Visual detection workflows connected to product actions",
      "Cleaner model evaluation paths for accuracy and edge cases",
      "Deployment-ready pipelines for image, video, or camera-based inputs",
    ],
    capabilities: [
      "Object detection and visual classification workflows",
      "Image preprocessing and data pipeline design",
      "Model integration into web and cloud applications",
      "Human review interfaces for uncertain predictions",
      "Monitoring and iteration loops for model-backed features",
    ],
    process: [
      {
        step: "Scope",
        description: "We define the visual task, success criteria, available data, and edge cases before selecting an implementation path.",
      },
      {
        step: "Prototype",
        description: "We validate model behavior with realistic samples and connect outputs to a usable product workflow.",
      },
      {
        step: "Deploy",
        description: "We prepare the service layer, monitoring approach, and feedback loop needed for production use.",
      },
    ],
    bestFor: ["Inspection workflows", "Media products", "Safety monitoring", "AI-enabled SaaS"],
    accent: "cyan",
  },
  {
    id: "cloud-architecture",
    eyebrow: "Cloud & DevOps",
    title: "Cloud Architecture",
    tagline: "Design cloud foundations that stay reliable under real product pressure.",
    image: "/servers-image.jpg",
    summary:
      "We plan and implement cloud infrastructure, deployment systems, and observability foundations for products that need to scale with confidence.",
    promise:
      "Good cloud architecture is not just servers and diagrams. It is repeatable deployment, sensible cost control, security posture, and fast recovery when things break.",
    outcomes: [
      "Infrastructure that is easier to deploy, monitor, and reason about",
      "Improved reliability through CI/CD, observability, and recovery planning",
      "Cloud decisions aligned with product stage, traffic patterns, and team capacity",
    ],
    capabilities: [
      "AWS architecture and infrastructure planning",
      "CI/CD pipelines and release automation",
      "Containerization with Docker and Kubernetes-ready patterns",
      "Monitoring, logging, and incident visibility",
      "Security, environment, and cost-optimization foundations",
    ],
    process: [
      {
        step: "Assess",
        description: "We review the current architecture, delivery workflow, risks, and growth expectations.",
      },
      {
        step: "Architect",
        description: "We design the infrastructure, deployment path, and operational model around the product's real constraints.",
      },
      {
        step: "Operationalize",
        description: "We implement the pipelines, monitoring, documentation, and handoff patterns that keep the system usable.",
      },
    ],
    bestFor: ["SaaS infrastructure", "DevOps modernization", "Cloud migrations", "Scaling products"],
    accent: "indigo",
  },
] as const;

export type Service = (typeof services)[number];

export function getService(id: string) {
  return services.find((service) => service.id === id);
}

type ServiceTranslation = {
  eyebrow?: string;
  tagline?: string;
  summary?: string;
  outcomes?: string[];
  capabilities?: string[];
  process?: { step: string; description: string }[];
  bestFor?: string[];
};

export const serviceTranslations: Record<string, Record<string, ServiceTranslation>> = {
  de: {
    "automation": {
      eyebrow: "Workflow-Automatisierung",
      tagline: "Verwandeln Sie repetitive Arbeit in zuverlässige, messbare Systeme.",
      summary: "Wir entwickeln Automatisierungsschichten, die Ihre Tools verbinden, manuelle Übergaben reduzieren und Teams eine klarere Sicht auf den täglichen Betrieb geben.",
      outcomes: [
        "Weniger manuelle Nachfassaktionen und wiederholte Dateneingaben",
        "Klarere Verantwortlichkeiten in mehrstufigen Betriebsabläufen",
        "Wiederverwendbare Automatisierungsgrundlagen für zukünftige Produktfunktionen",
      ],
      capabilities: [
        "Workflow-Mapping und Prozessoptimierung",
        "Interne Dashboards und Genehmigungsabläufe",
        "API-Integrationen über Geschäftstools hinweg",
        "Benachrichtigung, Berichterstattung und Audit-Trails",
        "Zuverlässigkeitsprüfungen und Überwachung der Automatisierung",
      ],
      process: [
        { step: "Kartieren", description: "Wir identifizieren, wo Arbeit verlangsamt wird, wo Kontext verloren geht und welche Schritte sich zuerst zu automatisieren lohnen." },
        { step: "Bauen", description: "Wir implementieren die Automatisierung mit sauberen Produktabläufen, Integrationen und betrieblichen Leitplanken." },
        { step: "Messen", description: "Wir verfolgen Akzeptanz, Fehlerpunkte und Geschäftswirkung, damit das System nach dem Launch weiter verbessert wird." },
      ],
      bestFor: ["Betriebsteams", "SaaS-Plattformen", "Back-Office-Workflows", "Interne Tools"],
    },
    "web-development": {
      eyebrow: "Produktentwicklung",
      tagline: "Starten Sie ausgereifte, skalierbare Webprodukte, die sich leicht weiterentwickeln lassen.",
      summary: "Wir entwickeln moderne Webanwendungen, Marketing-Erfahrungen und SaaS-Oberflächen mit starken Grundlagen in UX, Frontend-Architektur und Backend-Integration.",
      outcomes: [
        "Responsive Oberflächen, die auf Desktop und Mobilgeräten schnell wirken",
        "Wartbare Anwendungsarchitektur für zukünftige Feature-Arbeit",
        "Produktionsreife Integrationen mit APIs, Authentifizierung, Zahlungen und Analytics",
      ],
      capabilities: [
        "Next.js und React Anwendungsentwicklung",
        "Design-System-Implementierung und UI-Engineering",
        "Backend-API-Integration und Full-Stack-Features",
        "Performance, Barrierefreiheit und SEO-Grundlagen",
        "CMS, Analytics und Drittanbieter-Service-Einrichtung",
      ],
      process: [
        { step: "Gestalten", description: "Wir klären Produktziele, Kernnutzer-Journeys und den technischen Umfang, bevor die Implementierung beginnt." },
        { step: "Liefern", description: "Wir bauen die Oberfläche und Produktlogik in fokussierten Schritten, damit jede Version sichtbaren Fortschritt zeigt." },
        { step: "Stärken", description: "Wir verfeinern Performance, Barrierefreiheit, QA und Deployment-Workflows vor der Übergabe oder dem Launch." },
      ],
      bestFor: ["SaaS-Produkte", "Unternehmenswebsites", "Kundenportale", "MVP-Launches"],
    },
    "computer-vision": {
      eyebrow: "KI-Systeme",
      tagline: "Visuelle Intelligenz in reale Produkte und Workflows einbauen.",
      summary: "Wir helfen Teams, Bild- und Videointelligenz für Erkennung, Klassifizierung, Überwachung und Entscheidungsunterstützung in Betriebsumgebungen einzusetzen.",
      outcomes: [
        "Visuelle Erkennungs-Workflows verbunden mit Produktaktionen",
        "Sauberere Modellbewertungspfade für Genauigkeit und Grenzfälle",
        "Deployment-bereite Pipelines für Bild-, Video- oder kamerabasierte Eingaben",
      ],
      capabilities: [
        "Objekterkennung und visuelle Klassifizierungs-Workflows",
        "Bildvorverarbeitung und Datenpipeline-Design",
        "Modellintegration in Web- und Cloud-Anwendungen",
        "Menschliche Überprüfungsschnittstellen für unsichere Vorhersagen",
        "Überwachungs- und Iterationsschleifen für modellgestützte Features",
      ],
      process: [
        { step: "Umfang definieren", description: "Wir definieren die visuelle Aufgabe, Erfolgskriterien, verfügbare Daten und Grenzfälle, bevor wir einen Implementierungspfad wählen." },
        { step: "Prototyp", description: "Wir validieren das Modellverhalten mit realistischen Proben und verbinden Ausgaben mit einem nutzbaren Produkt-Workflow." },
        { step: "Einsetzen", description: "Wir bereiten die Service-Schicht, den Überwachungsansatz und die Feedback-Schleife vor, die für den Produktionseinsatz benötigt werden." },
      ],
      bestFor: ["Inspektions-Workflows", "Medienprodukte", "Sicherheitsüberwachung", "KI-fähige SaaS"],
    },
    "cloud-architecture": {
      eyebrow: "Cloud & DevOps",
      tagline: "Cloud-Grundlagen entwerfen, die unter echtem Produktdruck zuverlässig bleiben.",
      summary: "Wir planen und implementieren Cloud-Infrastruktur, Deployment-Systeme und Observability-Grundlagen für Produkte, die mit Zuversicht skalieren müssen.",
      outcomes: [
        "Infrastruktur, die einfacher zu deployen, zu überwachen und zu verstehen ist",
        "Verbesserte Zuverlässigkeit durch CI/CD, Observability und Recovery-Planung",
        "Cloud-Entscheidungen ausgerichtet auf Produktphase, Traffic-Muster und Team-Kapazität",
      ],
      capabilities: [
        "AWS-Architektur und Infrastrukturplanung",
        "CI/CD-Pipelines und Release-Automatisierung",
        "Containerisierung mit Docker und Kubernetes-fähigen Mustern",
        "Überwachung, Logging und Vorfallsichtbarkeit",
        "Sicherheits-, Umgebungs- und Kostenoptimierungsgrundlagen",
      ],
      process: [
        { step: "Bewerten", description: "Wir überprüfen die aktuelle Architektur, den Lieferworkflow, Risiken und Wachstumserwartungen." },
        { step: "Architektur entwerfen", description: "Wir entwerfen die Infrastruktur, den Deployment-Pfad und das Betriebsmodell um die echten Einschränkungen des Produkts." },
        { step: "Operationalisieren", description: "Wir implementieren die Pipelines, Überwachung, Dokumentation und Übergabemuster, die das System nutzbar halten." },
      ],
      bestFor: ["SaaS-Infrastruktur", "DevOps-Modernisierung", "Cloud-Migrationen", "Skalierende Produkte"],
    },
  },
  fr: {
    "automation": {
      eyebrow: "Automatisation des Workflows",
      tagline: "Transformez le travail répétitif en systèmes fiables et mesurables.",
      summary: "Nous concevons des couches d'automatisation qui connectent vos outils, réduisent les transferts manuels et donnent aux équipes une meilleure visibilité sur les opérations quotidiennes.",
      outcomes: [
        "Moins de relances manuelles et de saisies de données répétées",
        "Propriété plus claire dans les workflows opérationnels multi-étapes",
        "Fondations d'automatisation réutilisables pour les futures fonctionnalités produit",
      ],
      capabilities: [
        "Cartographie des workflows et refonte des processus",
        "Tableaux de bord internes et flux d'approbation",
        "Intégrations API entre outils métiers",
        "Notifications, rapports et pistes d'audit",
        "Vérifications de fiabilité et surveillance de l'automatisation",
      ],
      process: [
        { step: "Cartographier", description: "Nous identifions où le travail ralentit, où le contexte se perd et quelles étapes valent la peine d'être automatisées en premier." },
        { step: "Construire", description: "Nous implémentons l'automatisation avec des flux produit propres, des intégrations et des garde-fous opérationnels." },
        { step: "Mesurer", description: "Nous suivons l'adoption, les points de défaillance et l'impact business pour que le système continue de s'améliorer après le lancement." },
      ],
      bestFor: ["Équipes opérationnelles", "Plateformes SaaS", "Workflows back-office", "Outils internes"],
    },
    "web-development": {
      eyebrow: "Ingénierie Produit",
      tagline: "Lancez des produits web soignés et évolutifs, faciles à faire évoluer.",
      summary: "Nous développons des applications web modernes, des expériences marketing et des interfaces SaaS avec de solides fondations en UX, architecture frontend et intégration backend.",
      outcomes: [
        "Interfaces responsives rapides sur desktop et mobile",
        "Architecture applicative maintenable pour les futures fonctionnalités",
        "Intégrations prêtes pour la production avec APIs, auth, paiements et analytics",
      ],
      capabilities: [
        "Développement d'applications Next.js et React",
        "Implémentation de systèmes de design et ingénierie UI",
        "Intégration d'API backend et fonctionnalités full-stack",
        "Fondations de performance, accessibilité et SEO",
        "Configuration CMS, analytics et services tiers",
      ],
      process: [
        { step: "Définir", description: "Nous clarifions les objectifs produit, les parcours utilisateurs clés et le périmètre technique avant le début de l'implémentation." },
        { step: "Livrer", description: "Nous construisons l'interface et la logique produit en tranches ciblées pour que chaque version montre des progrès visibles." },
        { step: "Consolider", description: "Nous affinons les performances, l'accessibilité, les tests et les workflows de déploiement avant la remise ou le lancement." },
      ],
      bestFor: ["Produits SaaS", "Sites d'entreprise", "Portails clients", "Lancements MVP"],
    },
    "computer-vision": {
      eyebrow: "Systèmes IA",
      tagline: "Intégrer l'intelligence visuelle dans des produits et workflows réels.",
      summary: "Nous aidons les équipes à utiliser l'intelligence image et vidéo pour la détection, la classification, la surveillance et l'aide à la décision dans des environnements opérationnels.",
      outcomes: [
        "Workflows de détection visuelle connectés aux actions produit",
        "Chemins d'évaluation de modèles plus clairs pour la précision et les cas limites",
        "Pipelines prêts au déploiement pour les entrées image, vidéo ou caméra",
      ],
      capabilities: [
        "Workflows de détection d'objets et de classification visuelle",
        "Prétraitement d'images et conception de pipelines de données",
        "Intégration de modèles dans des applications web et cloud",
        "Interfaces de révision humaine pour les prédictions incertaines",
        "Boucles de surveillance et d'itération pour les fonctionnalités basées sur les modèles",
      ],
      process: [
        { step: "Cadrer", description: "Nous définissons la tâche visuelle, les critères de succès, les données disponibles et les cas limites avant de choisir une approche d'implémentation." },
        { step: "Prototyper", description: "Nous validons le comportement du modèle avec des échantillons réalistes et connectons les sorties à un workflow produit utilisable." },
        { step: "Déployer", description: "Nous préparons la couche de service, l'approche de surveillance et la boucle de feedback nécessaires pour une utilisation en production." },
      ],
      bestFor: ["Workflows d'inspection", "Produits médias", "Surveillance de sécurité", "SaaS IA"],
    },
    "cloud-architecture": {
      eyebrow: "Cloud & DevOps",
      tagline: "Concevoir des fondations cloud qui restent fiables sous la pression réelle du produit.",
      summary: "Nous planifions et implémentons des infrastructures cloud, des systèmes de déploiement et des fondations d'observabilité pour les produits qui doivent monter en charge avec confiance.",
      outcomes: [
        "Infrastructure plus facile à déployer, surveiller et comprendre",
        "Fiabilité améliorée grâce au CI/CD, à l'observabilité et à la planification de récupération",
        "Décisions cloud alignées sur la phase produit, les patterns de trafic et la capacité de l'équipe",
      ],
      capabilities: [
        "Architecture AWS et planification d'infrastructure",
        "Pipelines CI/CD et automatisation des releases",
        "Conteneurisation avec Docker et patterns Kubernetes-ready",
        "Surveillance, logging et visibilité des incidents",
        "Fondations de sécurité, d'environnement et d'optimisation des coûts",
      ],
      process: [
        { step: "Évaluer", description: "Nous examinons l'architecture actuelle, le workflow de livraison, les risques et les attentes de croissance." },
        { step: "Architecturer", description: "Nous concevons l'infrastructure, le chemin de déploiement et le modèle opérationnel autour des vraies contraintes du produit." },
        { step: "Opérationnaliser", description: "Nous implémentons les pipelines, la surveillance, la documentation et les patterns de transfert qui maintiennent le système utilisable." },
      ],
      bestFor: ["Infrastructure SaaS", "Modernisation DevOps", "Migrations cloud", "Produits en croissance"],
    },
  },
};
