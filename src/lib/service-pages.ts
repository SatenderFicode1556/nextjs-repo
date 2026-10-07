import type { StaticImageData } from "next/image";
import image1 from "../../public/video/common/img1.jpg";
import image2 from "../../public/video/common/img2.jpg";
import image3 from "../../public/video/common/img3.jpg";
import image4 from "../../public/video/common/img4.jpg";
import image5 from "../../public/video/common/img5.jpg";
import image6 from "../../public/video/common/img6.jpg";
import image7 from "../../public/video/common/img7.jpg";

export type DetailPageData = {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  highlight: string;
  description: string;
  focus: string;
  audience: string;
  offerings: string[];
  image: StaticImageData;
  imageAlt: string;
};

export const servicePages: DetailPageData[] = [
  {
    slug: "digital-transformation", title: "Digital Transformation", eyebrow: "Digital innovation solutions", headline: "Make change", highlight: "work for your business.",
    description: "Modernise services and operations with a practical roadmap that connects people, processes and technology to measurable business outcomes.", focus: "modernising services and operations", audience: "organisations managing complex change",
    offerings: ["Digital maturity assessment", "Transformation roadmap", "Service and process redesign", "Platform modernisation", "Change and adoption planning", "Outcome measurement"], image: image4, imageAlt: "A modern urban environment representing connected digital services",
  },
  {
    slug: "api-integration", title: "API Integration", eyebrow: "Digital innovation solutions", headline: "Connect your systems", highlight: "with confidence.",
    description: "Integrate business applications through dependable APIs that keep data moving, reduce manual work and make customer and team journeys feel joined up.", focus: "connecting applications and data flows", audience: "teams working across multiple business platforms",
    offerings: ["Integration architecture", "API design and implementation", "Application connectivity", "Data mapping and transformation", "Authentication and access", "Integration monitoring"], image: image2, imageAlt: "Connected people and technology in a modern working environment",
  },
  {
    slug: "third-party-api-development", title: "Third Party API Development", eyebrow: "Digital innovation solutions", headline: "Make external platforms", highlight: "part of your product.",
    description: "Build secure integrations with payment, identity, commerce and data providers, with careful handling of vendor limits, failures and changing API versions.", focus: "integrating third-party platforms into products", audience: "product teams extending services with external providers",
    offerings: ["Provider and API assessment", "Integration design", "Authentication flows", "Webhook implementation", "Rate-limit and error handling", "Versioning and support"], image: image3, imageAlt: "Digital services and data connected across platforms",
  },
  {
    slug: "data-management", title: "Data Management", eyebrow: "Digital innovation solutions", headline: "Turn scattered data", highlight: "into a trusted asset.",
    description: "Improve how information is collected, governed and used so teams can make decisions from consistent data rather than disconnected records.", focus: "organising, governing and using business data", audience: "organisations bringing information together across systems",
    offerings: ["Data landscape assessment", "Data model and architecture", "Data quality improvement", "Governance and access rules", "Migration and consolidation", "Reporting and insight foundations"], image: image1, imageAlt: "A broad landscape illustrating a connected data foundation",
  },
  {
    slug: "software-consulting", title: "Software Consulting", eyebrow: "Digital innovation solutions", headline: "Make better technology", highlight: "decisions earlier.",
    description: "Get independent technical guidance to evaluate options, reduce uncertainty and shape a delivery plan that fits your goals, systems and constraints.", focus: "making technology choices and shaping delivery plans", audience: "leaders and teams planning software investment",
    offerings: ["Technical discovery", "Architecture review", "Technology selection", "Delivery planning", "Risk and dependency assessment", "Team and capability advice"], image: image7, imageAlt: "A team environment representing collaborative technology consulting",
  },
  {
    slug: "web-development", title: "Web Development", eyebrow: "Development services", headline: "Build a web product", highlight: "people want to use.",
    description: "Create responsive websites and web applications that make complex tasks easier, connect to the systems behind your business and stay ready to evolve.", focus: "building useful, responsive web products", audience: "businesses creating or improving digital services",
    offerings: ["Web product discovery", "Responsive interface development", "Web application engineering", "CMS and platform integration", "Performance and accessibility", "Testing and ongoing support"], image: image5, imageAlt: "A digital commerce environment viewed at night",
  },
  {
    slug: "mobile-app-development", title: "Mobile App Development", eyebrow: "Development services", headline: "Keep useful services", highlight: "close at hand.",
    description: "Design and develop mobile applications that help customers and colleagues complete important tasks with a clear, reliable experience.", focus: "delivering mobile services for customers and teams", audience: "organisations creating iOS and Android experiences",
    offerings: ["Mobile product discovery", "iOS and Android development", "Cross-platform applications", "Mobile API integration", "Device and offline capability", "App testing and release support"], image: image6, imageAlt: "A person using a mobile device while travelling",
  },
  {
    slug: "iot-development", title: "IoT Development", eyebrow: "Development services", headline: "Connect devices", highlight: "to better decisions.",
    description: "Build Internet of Things solutions that connect devices, process operational signals and give teams a useful view of what is happening in the real world.", focus: "connecting devices, telemetry and operational workflows", audience: "teams improving connected products and physical operations",
    offerings: ["IoT use-case discovery", "Device and gateway integration", "Telemetry and event pipelines", "Edge and cloud architecture", "Device security and lifecycle", "Operational dashboards and alerts"], image: image4, imageAlt: "Connected infrastructure representing IoT-enabled operations",
  },
  {
    slug: "bespoke-software-development", title: "Bespoke Software Development", eyebrow: "Development services", headline: "Software shaped", highlight: "around how you work.",
    description: "Replace workarounds with software designed for your processes, users and goals, built to fit your existing technology landscape.", focus: "creating software around distinctive business processes", audience: "organisations whose needs do not fit off-the-shelf tools",
    offerings: ["Product discovery and requirements", "Solution architecture", "Web and mobile applications", "Business system integration", "Quality and security engineering", "Support and iterative improvement"], image: image7, imageAlt: "A collaborative environment for bespoke software delivery",
  },
  {
    slug: "e-commerce-development", title: "E-Commerce Development", eyebrow: "Development services", headline: "Make buying easier", highlight: "from first click to fulfilment.",
    description: "Create and improve commerce experiences across product discovery, checkout and fulfilment, connected to the platforms and operations that support them.", focus: "improving digital shopping and fulfilment journeys", audience: "retailers and brands growing online commerce",
    offerings: ["Commerce platform assessment", "Storefront design and development", "Catalogue and search integration", "Payments and checkout", "Order and fulfilment connections", "Conversion and performance improvement"], image: image5, imageAlt: "A lively retail and commerce environment",
  },
  {
    slug: "front-end-development", title: "Front End Development", eyebrow: "Development services", headline: "Turn complex products", highlight: "into clear experiences.",
    description: "Build accessible, responsive user interfaces that help people understand your product, complete tasks and move confidently between devices.", focus: "creating accessible and responsive digital interfaces", audience: "product teams delivering customer and colleague-facing software",
    offerings: ["Interface architecture", "Design system implementation", "Responsive web development", "Accessibility improvements", "Front-end performance", "Component testing and maintenance"], image: image2, imageAlt: "A modern interface and digital work environment",
  },
  {
    slug: "quality-assurance", title: "Quality Assurance", eyebrow: "Development services", headline: "Build confidence", highlight: "into every release.",
    description: "Catch issues earlier and make software quality visible through a risk-based testing approach that fits your product and delivery cadence.", focus: "reducing release risk and improving software quality", audience: "teams shipping or maintaining business-critical software",
    offerings: ["Quality strategy and planning", "Functional and regression testing", "Automated test suites", "Performance and security testing", "Accessibility and device coverage", "Release readiness and reporting"], image: image3, imageAlt: "A detailed digital workspace representing careful software testing",
  },
  {
    slug: "software-development", title: "Software Development", eyebrow: "Development services", headline: "Deliver better software", highlight: "one useful step at a time.",
    description: "Plan, build and improve software with a close engineering team focused on your users, business priorities and long-term product health.", focus: "delivering and evolving business software", audience: "organisations building or modernising digital products",
    offerings: ["Product discovery", "Software architecture", "Web application development", "Mobile product engineering", "Integration and data services", "Testing, release and support"], image: image1, imageAlt: "Digital technology supporting modern business operations",
  },
  {
    slug: "cloud-computing", title: "Cloud Computing", eyebrow: "Cloud & AI", headline: "Build a cloud", highlight: "that works for you.",
    description: "Design and operate cloud platforms around your workload, security needs and growth plans, with clear ownership of cost and reliability.", focus: "building secure, reliable cloud environments", audience: "teams modernising infrastructure or launching digital products",
    offerings: ["Cloud readiness assessment", "Platform and landing-zone design", "Application migration", "Cloud-native development", "Security and resilience", "Cost and operations optimisation"], image: image4, imageAlt: "A wide connected landscape representing scalable cloud infrastructure",
  },
  {
    slug: "ai-development", title: "AI Development", eyebrow: "Cloud & AI", headline: "Put AI to work", highlight: "on problems that matter.",
    description: "Identify practical AI use cases, connect the data and systems they depend on, and deliver carefully governed tools that support real work.", focus: "applying responsible AI to useful business workflows", audience: "teams exploring AI applications and automation",
    offerings: ["AI opportunity discovery", "Data readiness and integration", "Generative AI applications", "Machine learning solutions", "Evaluation and human oversight", "Deployment and monitoring"], image: image2, imageAlt: "A connected data environment representing practical AI applications",
  },
  {
    slug: "aws", title: "AWS Services", eyebrow: "Cloud & AI", headline: "Make AWS", highlight: "work for your organisation.",
    description: "Design, migrate and improve AWS environments with architecture, security and operational practices matched to the demands of your services.", focus: "designing and improving AWS workloads", audience: "organisations building or running services on AWS",
    offerings: ["AWS readiness and discovery", "Landing zones and account structure", "Workload migration", "Cloud-native application delivery", "Security and observability", "Cost and reliability optimisation"], image: image6, imageAlt: "A city at dusk representing cloud platforms supporting modern services",
  },
  {
    slug: "azure", title: "Microsoft Azure", eyebrow: "Cloud & AI", headline: "Build on Azure", highlight: "with a clear plan.",
    description: "Use Microsoft Azure to modernise applications, connect data and create secure services that work with the Microsoft tools your teams already use.", focus: "modernising applications and services on Azure", audience: "organisations building on Microsoft cloud and data platforms",
    offerings: ["Azure architecture and assessment", "Identity and landing zones", "Application migration", "Data and integration services", "Security and governance", "Reliability and cost management"], image: image3, imageAlt: "A modern digital environment representing Azure cloud services",
  },
  {
    slug: "ai-data", title: "AI & Data", eyebrow: "Digital innovation solutions", headline: "Bring data and AI", highlight: "closer to better decisions.",
    description: "Create the connected data foundations and carefully selected AI capabilities that help teams understand their business and improve everyday work.", focus: "connecting business data to useful AI capabilities", audience: "organisations improving insight and decision-making",
    offerings: ["Data and AI opportunity discovery", "Data platform architecture", "Data quality and governance", "Machine learning and generative AI", "Workflow integration", "Model evaluation and monitoring"], image: image1, imageAlt: "A landscape representing connected data and intelligence",
  },
  {
    slug: "cloud-aws", title: "Cloud & AWS", eyebrow: "Cloud & AI", headline: "Create a secure cloud", highlight: "foundation for growth.",
    description: "Combine cloud strategy and AWS engineering to modernise workloads, improve resilience and give your organisation a platform it can confidently operate.", focus: "modernising infrastructure and workloads on AWS", audience: "businesses planning cloud adoption or improvement",
    offerings: ["Cloud strategy and readiness", "AWS architecture and landing zones", "Application migration", "Cloud-native engineering", "Security and operational controls", "Cost, performance and reliability"], image: image5, imageAlt: "Urban infrastructure representing cloud-enabled business services",
  },
];
