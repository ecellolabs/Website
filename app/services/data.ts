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
