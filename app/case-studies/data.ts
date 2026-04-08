export const caseStudies = [
  {
    id: "classfellow-learning-platform",
    eyebrow: "EdTech Platform",
    title: "Classfellow Learning Platform",
    client: "Classfellow",
    summary:
      "A cloud-ready learning experience designed to help academic teams manage digital classrooms, collaboration, and student workflows with less operational friction.",
    challenge:
      "Education teams needed a reliable platform that could bring classroom communication, content delivery, and student progress into one organized workspace.",
    solution:
      "Ecello shaped a product experience around clear learning flows, scalable cloud foundations, and a modular interface that can grow with new academic features.",
    outcome:
      "The platform gives teams a stronger base for digital learning operations, faster iteration cycles, and a cleaner experience for educators and students.",
    services: ["Product Strategy", "SaaS Development", "Cloud Architecture"],
    metrics: [
      { label: "Product Area", value: "Learning Ops" },
      { label: "Delivery Model", value: "Cloud SaaS" },
      { label: "Focus", value: "Student Experience" },
    ],
  },
  {
    id: "solidio-business-automation",
    eyebrow: "Operations Automation",
    title: "Solidio Business Automation",
    client: "Solidio",
    summary:
      "A workflow-first software product that reduces manual coordination and helps teams move recurring business processes into dependable digital systems.",
    challenge:
      "The business needed to replace scattered operational steps with a structured product that could support repeatable processes and clearer accountability.",
    solution:
      "Ecello designed the application structure, implementation path, and cloud deployment approach around configurable workflows and practical team adoption.",
    outcome:
      "Solidio gained a more maintainable product foundation for automation, internal visibility, and future expansion into adjacent business workflows.",
    services: ["Workflow Design", "Product Engineering", "DevOps"],
    metrics: [
      { label: "Product Area", value: "Automation" },
      { label: "Delivery Model", value: "Custom SaaS" },
      { label: "Focus", value: "Operational Clarity" },
    ],
  },
  {
    id: "intellema-ai-workflows",
    eyebrow: "AI Integration",
    title: "Intellema AI Workflows",
    client: "Intellema",
    summary:
      "An AI-enabled product experience that turns business knowledge into guided workflows, helping teams make better decisions with contextual assistance.",
    challenge:
      "Teams wanted to apply AI in a way that was useful, governed, and connected to real business tasks instead of isolated experimentation.",
    solution:
      "Ecello mapped high-value workflows, integrated AI assistance into the product layer, and created a foundation for responsible model-backed features.",
    outcome:
      "The result is a focused AI workflow system that supports faster knowledge access, repeatable decisions, and clearer product differentiation.",
    services: ["AI Integration", "Product UX", "Model-Backed Workflows"],
    metrics: [
      { label: "Product Area", value: "AI Workflows" },
      { label: "Delivery Model", value: "AI Product" },
      { label: "Focus", value: "Decision Support" },
    ],
  },
];

export type CaseStudy = (typeof caseStudies)[number];

export function getCaseStudy(id: string) {
  return caseStudies.find((caseStudy) => caseStudy.id === id);
}
