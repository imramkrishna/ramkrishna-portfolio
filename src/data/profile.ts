export const EMAIL = "itsramky234@gmail.com";
export const PHONE = "+977 9703577211";

export const socialLinks = [
  { label: "GitHub", value: "imramkrishna", href: "https://github.com/imramkrishna" },
  { label: "LinkedIn", value: "ramkrishnaprofile", href: "https://linkedin.com/in/ramkrishnaprofile" },
  { label: "Discord", value: "@ramkrishna", href: "#" },
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
];

export const skillsData = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C++"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["RAG", "Vector Embeddings", "Semantic Search", "pgvector", "LLM Integration", "MCP"],
  },
  {
    title: "Systems & Infra",
    skills: ["Event-Driven Architecture", "WebSockets", "Docker", "Linux", "Nginx", "VPS & AWS EC2"],
  },
  {
    title: "Databases & Storage",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Pub/Sub Messaging", "AWS S3"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["Node.js", "Express.js", "Next.js", "React", "Elysia.js", "Drizzle ORM", "Git", "Jest"],
  },
];

export interface ProjectItem {
  winTitle: string;
  title: string;
  subtitle: string;
  href: string;
  linkLabel: string;
  githubHref?: string;
  githubLabel?: string;
  stack: string[];
  points: string[];
}

export const projects: ProjectItem[] = [
  {
    winTitle: "01 / SALESIENT.APP",
    title: "Salesient",
    subtitle: "Retrieval-Augmented Generation System",
    href: "https://salesient.venyxtech.com/",
    linkLabel: "salesient.venyxtech.com",
    githubHref: "https://github.com/Saleient/Salesient",
    githubLabel: "github.com/Saleient/Salesient",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "Redis", "Docker"],
    points: [
      "Built a multi-format ingestion pipeline (PDF, DOCX, XLSX, CSV) with recursive text chunking and 768-dimensional vector embeddings stored in pgvector.",
      "Implemented vector similarity search with configurable top-K retrieval and tunable thresholds, producing source-cited, context-grounded responses.",
      "Designed multi-provider model routing with SSE streaming, token and cost telemetry, and Redis-backed session caching.",
      "Integrated tool orchestration across 120+ services via the Model Context Protocol (MCP) with dynamic tool loading.",
    ],
  },
  {
    winTitle: "02 / ZYOTRA.SYS",
    title: "Zyotra",
    subtitle: "Self-Hosted Deployment Platform (PaaS)",
    href: "https://github.com/Zyotra",
    linkLabel: "github.com/Zyotra",
    stack: ["TypeScript", "Bun", "Nginx", "PostgreSQL", "MySQL", "Redis", "WebSockets", "AWS S3", "Docker"],
    points: [
      "Built a self-hosted platform-as-a-service replicating managed deployment workflows on bare-metal servers, cutting infrastructure cost by up to 80%.",
      "Engineered agentless deployment automation over SSH, handling repository cloning, TLS certificate provisioning, and reverse proxy configuration.",
      "Architected real-time build log streaming and live CPU and memory telemetry over WebSockets for deployment observability.",
      "Implemented automated PostgreSQL and MySQL backups to object storage, single-command Redis provisioning, and an integrated SQL query runner.",
    ],
  },
  {
    winTitle: "03 / CHESSONLINE.EXE",
    title: "ChessOnline",
    subtitle: "Real-Time Multiplayer System",
    href: "https://github.com/imramkrishna/ChessOnline",
    linkLabel: "github.com/imramkrishna/ChessOnline",
    stack: ["React", "Node.js", "Express.js", "WebSockets", "MongoDB", "TypeScript"],
    points: [
      "Built a real-time multiplayer system with authoritative server-side state, low-latency WebSocket transport, and complete rule enforcement.",
      "Engineered an event-driven socket layer handling move broadcast, state synchronization, and graceful disconnect and reconnect recovery.",
      "Designed the backend to manage concurrent game sessions and real-time player matching.",
    ],
  },
];

export interface ExperienceItem {
  title: string;
  org: string;
  orgHref?: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "MERN Stack Intern",
    org: "Blue Fox Pvt. Ltd.",
    period: "Oct 2024 - Dec 2024",
    points: [
      "Built responsive, SEO-optimized SaaS applications for hotel, e-commerce, and restaurant systems",
      "Developed RESTful APIs, integrated third-party services, and implemented JWT/OAuth",
      "Optimized performance through code refactoring, caching, and database tuning",
    ],
  },
  {
    title: "Bachelor of Computer Engineering",
    org: "Tribhuvan University, Institute of Engineering, Purwanchal Campus, Dharan, Nepal",
    period: "2024 - 2028 (expected)",
    points: [
      "Focus on distributed infrastructure, machine learning systems and efficiency, inference optimization, and NLP for low-resource languages.",
    ],
  },
];
