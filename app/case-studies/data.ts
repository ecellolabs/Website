export const caseStudies = [
  {
    id: "payguard-shopify-plugin",
    eyebrow: "Shopify Plugin",
    title: "PayGuard",
    client: "PayGuard",
    summary:
      "A native Shopify plugin that helps store owners assess the risk of Cash on Delivery customers before dispatch, using a three-tier color-coded scoring system backed by cross-store behavioral data.",
    overview:
      "PayGuard is a native Shopify plugin built for e-commerce store owners who offer Cash on Delivery as a payment option. It gives merchants a clear, instant picture of whether a customer placing a COD order is trustworthy or not, before the order is ever dispatched. The plugin pulls available customer data through the Shopify API, cross-references it against a proprietary database, and presents the merchant with a simple risk score backed by real order history.",
    challenge:
      "Shopify merchants had no reliable way to identify COD customers likely to refuse payment or return orders, resulting in significant losses from undelivered shipments and wasted logistics costs.",
    challengeDetail:
      "Cash on Delivery is one of the most popular payment methods in price-sensitive and emerging markets. A customer can place a COD order with no intention of paying, refuse delivery at the door, or simply not be home. The merchant absorbs the full cost of shipping there and back, plus the time the product sat unavailable in transit. What made this worse was that there was no shared record across stores. A customer could do this repeatedly at different shops and no merchant would be any wiser. Existing tools did not solve this. Order history within a single store tells you nothing about what a customer did elsewhere, and nothing purpose-built existed inside the Shopify ecosystem to address this specific pain.",
    solution:
      "Ecello built a fully integrated Shopify plugin with its own GUI that pulls customer data through the Shopify API, cross-references a proprietary seed database, and surfaces a Red, Yellow, or Green risk tier instantly when a COD order comes in. Merchants can also flag customers, feeding a shared intelligence network that improves accuracy across the entire user base.",
    solutionDetail:
      "We built PayGuard as a fully integrated Shopify plugin with its own dedicated interface inside the Shopify admin panel. When a COD order comes in, the merchant opens PayGuard and immediately sees a risk profile for that customer showing how many COD orders they have successfully paid for, how many times they refused payment or failed to collect, how many orders they returned, and an overall risk score displayed as a color-coded tier. The system draws on two data sources: the Shopify API and our own proprietary database, which we built and populated before the plugin went live so merchants would have real signal from day one.",
    outcome:
      "Merchants gain instant visibility into COD risk before committing to a shipment, reducing return-to-origin losses, enabling smarter fulfillment decisions, and contributing to a network that gets more accurate with every transaction.",
    outcomeDetail:
      "Merchants who use PayGuard can identify high-risk COD orders before they ship. Blocking or converting even a fraction of those orders to prepayment directly reduces shipping costs and eliminates the dead weight of returned undelivered parcels. Instead of making fulfillment decisions on instinct, merchants make them on evidence. The process becomes consistent and auditable. Unlike a single-store tool, PayGuard benefits from scale. Every merchant who joins adds to the intelligence pool, and the risk scores become more accurate as adoption grows.",
    features: [
      {
        title: "Real-time Lookup",
        description:
          "Customer risk is surfaced instantly when a COD order is placed. No extra steps, no context switching, no delay between order and decision.",
      },
      {
        title: "Color-coded Risk Tiers",
        description:
          "Every customer is assigned a Red, Yellow, or Green tier based on their history. The decision is immediate without reading a report.",
      },
      {
        title: "Order and Return History",
        description:
          "Full breakdown of the customer's COD performance across all stores in the network, not just the merchant's own shop.",
      },
      {
        title: "Community Flagging",
        description:
          "After any COD order, merchants can flag the customer as a successful payer, a refusal, or a return. These flags feed the shared database and affect the customer's score across the entire network.",
      },
      {
        title: "Seed Database",
        description:
          "Pre-loaded with aggregated behavioral data so the system provides meaningful risk scores from the very first day of use, without waiting for the merchant's own history to build up.",
      },
      {
        title: "Native Shopify Interface",
        description:
          "Fully embedded in the Shopify admin. Risk data lives exactly where decisions are made, with no external tools or tab switching required.",
      },
    ],
    challenges: [
      {
        title: "Shopify API Constraints",
        description:
          "Shopify's data access policies are strict and intentionally limited. We engineered within those boundaries carefully, extracting maximum useful signal from permitted data points while staying fully compliant with Shopify's Partner Program policies.",
      },
      {
        title: "Cold Start Database Problem",
        description:
          "A risk scoring system is only useful if it has data to work with. We built and seeded a proprietary customer behavior database before the plugin was released, giving the system enough baseline data to return meaningful scores from day one.",
      },
      {
        title: "Customer Identity Matching",
        description:
          "Customers do not always use the same phone number, email, or address across different stores. We built a matching layer using fuzzy logic to link records across identifiers, so a customer cannot change one detail and appear as a clean new profile.",
      },
      {
        title: "Abuse-resistant Flagging",
        description:
          "Any system that lets users submit data about other users can be abused. We designed the flagging mechanic with safeguards to prevent merchants from maliciously targeting customers or inflating negative scores without legitimate evidence.",
      },
    ],
    services: ["Shopify Plugin Development", "Data Engineering", "UI/UX Design"],
    metrics: [
      { label: "Platform", value: "Shopify" },
      { label: "Risk Tiers", value: "3 Levels" },
      { label: "Data Sources", value: "2+" },
    ],
  },

  {
    id: "labour-bridge-platform",
    eyebrow: "Web Platform",
    title: "Labour Bridge",
    client: "Labour Bridge GmbH",
    summary:
      "A public-facing recruitment website and a private management portal built for a Stuttgart-based company connecting Vietnamese skilled workers and apprentices with German employers in the healthcare sector.",
    overview:
      "Labour Bridge GmbH is a Stuttgart-based recruitment company specialising in connecting skilled Vietnamese workers and apprentices with German employers, primarily in the healthcare and care home sectors. Ecello was brought in to develop two things: the public-facing website at labourbridge.de, and a private management portal built for the Labour Bridge team to coordinate the full recruitment pipeline between Vietnamese candidates and German companies.",
    challenge:
      "Labour Bridge was managing an international recruitment pipeline across two countries and multiple languages with no purpose-built tooling, making it impossible to scale as candidate volume grew toward 1,000 new applicants per month.",
    challengeDetail:
      "Labour Bridge was coordinating with Vietnamese training institutions, monitoring candidate language progress, responding to inbound requests from German employers, and tracking the legal and administrative steps for each individual placement, all without dedicated software. Information was fragmented across emails and spreadsheets. Visibility was low. The team could not easily see how many open employer requests existed, how many candidates were ready, or where any given individual was in the process. Beyond internal coordination, the public website also needed to hold up in the German market. Hospital administrators and care facility managers have high standards for how a business presents itself, and a poorly presented website would cost Labour Bridge credibility before any conversation even started.",
    solution:
      "Ecello delivered two parallel builds: a professional public website for the German B2B market and an internal management portal where the Labour Bridge team can log employer hiring requests, manage candidate profiles, match workers to open positions, and track every case through visa processing, language certification, and final placement.",
    solutionDetail:
      "For the public website, we built a clean professional site that clearly communicates the Labour Bridge service, process, and team, structured around the questions a German employer would actually ask. For the internal portal, we built a system organised around the two sides of the pipeline. On the demand side, companies can log a hiring request specifying the number of workers needed, the role, required qualifications, and desired start date. On the supply side, the portal holds a database of candidates with language level, training status, work background, and availability. Managers match candidates to open positions and the system tracks every case through interview coordination, visa application, travel, arrival, and final placement.",
    outcome:
      "Labour Bridge moved from fragmented coordination across emails and spreadsheets to a single platform with full pipeline visibility, faster employer response times, and a public presence credible enough for German hospital administrators and care facility managers.",
    outcomeDetail:
      "Labour Bridge went from scattered coordination to a single system where every open request, available candidate, and active placement is visible in one place. With employer requests logged and candidates already profiled, the team can respond to new hiring enquiries faster and with more precision. The public website gives Labour Bridge a professional digital front door that matches the seriousness of the service they offer. The platform is built to handle a pipeline that grows by roughly 1,000 candidates per month without the team needing to rebuild their process as volume increases.",
    features: [
      {
        title: "Employer Request Management",
        description:
          "German companies submit hiring requests detailing the number of workers needed, the job role, qualifications required, and preferred timeline. These are logged and tracked through the system until filled.",
      },
      {
        title: "Candidate Database",
        description:
          "A searchable database of Vietnamese candidates with profiles covering language certification, skills, training history, and placement readiness, updated as candidates progress through courses and qualification stages.",
      },
      {
        title: "Pipeline Tracking",
        description:
          "Each candidate-employer match moves through defined stages from initial selection through visa processing, arrival, and confirmed placement. Managers have a live view of every active case.",
      },
      {
        title: "Document and Status Management",
        description:
          "The portal tracks the status of key documents such as language certificates, visa applications, and employment contracts, giving the team a clear checklist view for each candidate in the pipeline.",
      },
      {
        title: "Multi-language Support",
        description:
          "The Labour Bridge team operates across Vietnamese, German, and English. The portal is built to accommodate this without forcing all communication into a single language.",
      },
      {
        title: "Reporting and Capacity Overview",
        description:
          "Managers can see at a glance how many open employer requests are outstanding, how many candidates are available at each language level, and how many placements are currently in progress or completed.",
      },
    ],
    challenges: [
      {
        title: "Cross-country Coordination",
        description:
          "The pipeline spans two countries, multiple government bodies, and three languages. Building a system that could hold all of this coherently without becoming too complex for day-to-day use required careful information architecture.",
      },
      {
        title: "Multi-stage Legal Process",
        description:
          "Each placement involves visa applications, qualification recognition, language certification, and employment contracts. The portal needed to track all of these simultaneously across many active cases without anything slipping through.",
      },
      {
        title: "Scaling for Volume",
        description:
          "With roughly 1,000 new candidates entering the pipeline every month, the data model and interface had to be built for volume from the start, not retrofitted later when the team was already under pressure.",
      },
      {
        title: "B2B Credibility in the German Market",
        description:
          "German employers in healthcare operate in a heavily regulated environment and hold their vendors to a high standard. The public website had to communicate legitimacy and professionalism without overstating what was still a growing operation.",
      },
    ],
    services: ["Web Development", "Platform Development", "Workflow Automation"],
    metrics: [
      { label: "Market", value: "Germany" },
      { label: "Candidate Network", value: "5,000+" },
      { label: "Pipeline Scale", value: "1,000/month" },
    ],
  },

  {
    id: "patio-masters-training-app",
    eyebrow: "Mobile Application",
    title: "Patio Masters",
    client: "Patio Masters",
    summary:
      "A Flutter-based mobile training app that takes new sales hires through a structured onboarding programme and automatically schedules their interview on completion, while giving existing staff AI-generated practice questions grounded in real company context.",
    overview:
      "Patio Masters is a mobile training and development application built for a patio installation and sales business. The app serves two distinct groups: new hires who need to complete a structured onboarding programme before their first interview, and existing sales staff who use it on their days off to sharpen their product knowledge through AI-generated practice questions. The entire application was built in Flutter, making it available across both iOS and Android from a single codebase.",
    challenge:
      "Onboarding was inconsistent, dependent on whoever was available to train, and gave managers no visibility into who was ready for their next interview. Existing staff had no structured way to keep their product knowledge sharp between jobs.",
    challengeDetail:
      "Sales training in field-based businesses tends to be inconsistent. New hires often shadow someone for a few days, watch some videos if they exist, and then get put into the field with incomplete preparation. The quality of their training depended entirely on who happened to be available, and whether that person was a good trainer or just a busy salesperson trying to meet their own targets. For existing staff, there was no structured way to continue developing between jobs. Product knowledge and sales technique erode without practice, and a salesperson who is not regularly challenged tends to fall back on the same small set of approaches. There was also no way for managers to track any of this.",
    solution:
      "Ecello built a dual-experience Flutter app with role-based access. New hires progress through locked training segments, pass post-video assessments, and trigger an automated interview booking upon completion. Existing staff access an AI-powered practice section where questions are dynamically generated from the company's own product catalogue, sales scenarios, and objection-handling context.",
    solutionDetail:
      "The app has two clearly separated experiences within the same codebase. New hires move through training segments in a fixed order, with each segment locked until the previous one is completed and assessed. Once all segments are done and all assessments passed, the app automatically triggers an interview booking, notifying the manager and scheduling the candidate without any manual follow-up. For existing staff, an AI model prompted with the company's own documentation generates fresh questions every session covering product knowledge, objection handling, pricing, and installation details. No two sessions are identical, and the material never goes stale.",
    outcome:
      "Every new hire now arrives at their interview with the same baseline preparation. Managers are notified when candidates are ready rather than chasing progress manually. Existing staff have an always-fresh practice tool that requires no additional overhead to maintain.",
    outcomeDetail:
      "Every person who joins goes through the same material in the same order and demonstrates comprehension before progressing. The quality of preparation no longer depends on who was available to train them. Managers are notified when someone is ready rather than asked to chase it, and the interview itself becomes more productive because the conversation can start at a higher level. For existing staff, the AI-generated questions remain relevant as long as the company context is kept updated, meaning the practice tool continues to deliver value months and years after the initial build.",
    features: [
      {
        title: "Role-based Access",
        description:
          "New hires and existing staff log into the same app but see entirely different experiences. The system serves the appropriate interface automatically based on who the user is.",
      },
      {
        title: "Sequential Video Training",
        description:
          "New hires move through training segments in a fixed order. Each segment is locked until the previous one is completed and assessed, enforcing consistency across every person who goes through the programme.",
      },
      {
        title: "Post-segment Assessments",
        description:
          "At the end of each training segment, the user answers a set of questions testing their comprehension. Passing is the condition for unlocking the next segment. Failing prompts a review before they can try again.",
      },
      {
        title: "Automated Interview Scheduling",
        description:
          "When a new hire completes all segments and passes all assessments, the app automatically triggers an interview booking. The manager is notified and a time is arranged without any manual follow-up from either side.",
      },
      {
        title: "AI-generated Practice Questions",
        description:
          "The existing staff section generates questions dynamically using an AI model prompted with the company's own context, covering product knowledge, sales technique, objection handling, and process understanding. No two sessions are identical.",
      },
      {
        title: "Progress Tracking",
        description:
          "Managers can see where each new hire is in the training programme, which segments they have completed, and which assessments they have passed, without needing to ask candidates to self-report.",
      },
    ],
    challenges: [
      {
        title: "Keeping AI Questions Relevant",
        description:
          "Generic AI question generation produces generic questions. We built the prompt layer around the company's actual product catalogue, pricing structure, common objections, and installation scenarios so every question feels like something a salesperson would genuinely encounter.",
      },
      {
        title: "Enforcing Progression Without Frustrating Users",
        description:
          "Locked segments can feel punishing if not designed carefully. We built the assessment and unlock logic to be firm enough to enforce the standard while giving users clear feedback on what they need to review before retrying.",
      },
      {
        title: "Dual Experience in a Single Codebase",
        description:
          "Building two meaningfully different experiences for two different user types within the same Flutter app required a clean role-based architecture that kept the codebase maintainable without the two experiences leaking into each other.",
      },
      {
        title: "Automating the Scheduling Handoff",
        description:
          "The trigger that fires when a new hire completes training needed to connect reliably to the company's existing scheduling workflow. Building this handoff cleanly so it worked every time without manual intervention was a key integration challenge.",
      },
    ],
    services: ["Mobile Development", "AI Integration", "Workflow Automation"],
    metrics: [
      { label: "Platform", value: "iOS & Android" },
      { label: "Built With", value: "Flutter" },
      { label: "AI Questions", value: "Company-Trained" },
    ],
  },
];

export type CaseStudy = (typeof caseStudies)[number];

export function getCaseStudy(id: string) {
  return caseStudies.find((caseStudy) => caseStudy.id === id);
}
