// All site copy lives here. Edit this file to change what the site says.
// Every fact below comes from Mathew's résumé; nothing is invented.

export const profile = {
  name: "Mathew Colin",
  title: "Product & Brand Designer",
  email: "mathewcolinm@gmail.com",
  linkedin: "https://linkedin.com/in/mathew-colin/",
  intro:
    "3+ years across SaaS, healthcare, fintech and Web3. I work across UI/UX, design systems, brand identity and motion, and I build AI-assisted design workflows that help small teams ship more without lowering quality.",
};

export const stats = [
  { value: "3+", label: "Years designing products" },
  { value: "142K+", label: "Waitlist signups for a launch" },
  { value: "1M+", label: "Social impressions from motion work" },
  { value: "850+", label: "On-brand website assets shipped" },
];

export const expertise = [
  "SaaS & healthcare",
  "Fintech & trading",
  "Web3 / DeFi",
  "Design systems",
  "Brand identity",
  "Motion & video",
  "AI design workflows",
];

export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  company: string;
  year: string;
  category: string;
  tagline: string;
  role: string;
  focus: string[];
  overview: string;
  did: string[];
  metrics?: Metric[];
  /** Image placeholders shown on the case study until real screenshots are added. */
  shots: string[];
  /** Optional cover image path in /public, e.g. "/work/avitus.webp" */
  cover?: string;
  /** Hue used to tint the generated cover. */
  hue: number;
};

export const projects: Project[] = [
  {
    slug: "certinal-brand",
    title: "Certinal brand revamp",
    company: "Certinal",
    year: "2026",
    category: "Brand identity",
    tagline: "A new identity for an eSignature and compliance company, rolled out from logo kit to event booth.",
    role: "Brand & creative designer",
    focus: ["Brand identity", "Brand guidelines", "Web assets", "AI workflow"],
    overview:
      "I led Certinal's brand revamp from start to finish, working with marketing and leadership, then rolled the new identity out across the logo kit, brand deck, website and event booths.",
    did: [
      "Led the brand revamp end to end with marketing and leadership.",
      "Rolled the identity out across the logo kit, brand deck, website and event booths.",
      "Built an AI-assisted design workflow in Figma that produced 850+ on-brand website assets across 13 site sections.",
    ],
    metrics: [
      { value: "850+", label: "On-brand website assets" },
      { value: "13", label: "Website sections covered" },
    ],
    shots: ["Logo kit and brand marks", "Brand deck spreads", "Website sections", "Event booth"],
    hue: 18,
  },
  {
    slug: "tetra",
    title: "Tetra",
    company: "Asva Labs",
    year: "2025–26",
    category: "Trading platform",
    tagline: "One decentralized exchange for trading crypto, forex, stocks and commodities.",
    role: "Lead UI/UX designer",
    focus: ["Product design", "Prototyping", "Design system", "Usability reviews"],
    overview:
      "Tetra is a multi-asset decentralized exchange. I led the UI/UX design end to end, including cross-chain trading features on Hyperliquid, Solana and Arbitrum.",
    did: [
      "Led end-to-end UI/UX design for the exchange.",
      "Designed user flows, wireframes and high-fidelity prototypes for cross-chain trading on Hyperliquid, Solana and Arbitrum.",
      "Built and maintained a Figma design system and component library that kept the product consistent and sped up handoff.",
      "Ran usability reviews to find friction in complex trading flows, and shipped production-ready interfaces with engineering and product.",
    ],
    metrics: [
      { value: "4", label: "Asset classes in one exchange" },
      { value: "3", label: "Chains supported" },
    ],
    shots: ["Trading screen", "Order flow", "Cross-chain flow", "Component library"],
    hue: 205,
  },
  {
    slug: "avitus",
    title: "Avitus",
    company: "MATQCODE",
    year: "2024–25",
    category: "Web3 gaming",
    tagline: "A crypto gaming platform that drew 142K+ waitlist signups before launch.",
    role: "Product & motion designer",
    focus: ["Product design", "Game UI", "Motion", "Pitch deck"],
    overview:
      "Avitus is a Web3 casino platform with Crash, Coinflip and Dice games, token wagering, rewards and leaderboards. I designed the full experience, plus the motion and social work that built the waitlist.",
    did: [
      "Designed the full user experience: Crash, Coinflip and Dice games, token wagering, rewards and leaderboards.",
      "Created motion graphics and social media assets that generated 1M+ impressions.",
      "Designed the investor pitch deck.",
    ],
    metrics: [
      { value: "142K+", label: "Waitlist signups" },
      { value: "1,300+", label: "Concurrent users in beta" },
      { value: "1M+", label: "Social impressions" },
    ],
    shots: ["Game lobby", "Crash game", "Rewards and leaderboard", "Social motion pieces"],
    hue: 275,
  },
  {
    slug: "fxdx",
    title: "FXDX",
    company: "MATQCODE",
    year: "2024–25",
    category: "Design system",
    tagline: "Rebuilding a decentralized exchange around a design system made from scratch.",
    role: "UI/UX designer",
    focus: ["Information architecture", "Design system", "Landing page", "Handoff"],
    overview:
      "FXDX is a decentralized exchange. I redesigned its information architecture and visual design so core trading tasks are quicker and easier, and built its design system from the ground up.",
    did: [
      "Redesigned the platform's information architecture and visual design to make core trading tasks quicker.",
      "Built a design system from scratch: typography, colour tokens, component libraries and interaction patterns.",
      "Redesigned the marketing landing page with UI animations, and streamlined design-to-development handoff to cut iteration cycles.",
    ],
    shots: ["Trading interface", "Colour and type tokens", "Component library", "Landing page"],
    hue: 150,
  },
  {
    slug: "demo-films",
    title: "Certinal product films",
    company: "Certinal",
    year: "2026",
    category: "Motion & video",
    tagline: "Product demo films for hospital sales, made with an AI-assisted pipeline.",
    role: "Writer, designer & editor",
    focus: ["Scripting", "Storyboards", "Voiceover", "4K edit"],
    overview:
      "I owned Certinal's product demo films from script to final 4K edit, using an AI-assisted pipeline: storyboards, ElevenLabs voiceover and After Effects. The sales team now uses the films when reaching out to hospitals.",
    did: [
      "Wrote the scripts and built the storyboards.",
      "Produced voiceover with ElevenLabs and animated the films in After Effects.",
      "Delivered final 4K edits that are now part of the sales team's outreach to hospitals.",
    ],
    shots: ["Storyboard frames", "Film stills", "Product walkthrough"],
    hue: 340,
  },
  {
    slug: "alphax",
    title: "AlphaX",
    company: "MATQCODE",
    year: "2024",
    category: "Landing page",
    tagline: "A conversion-focused landing page and brand visuals for a DeFi product.",
    role: "Web & brand designer",
    focus: ["Landing page", "Brand visuals", "Responsive design"],
    overview: "I designed a responsive, conversion-focused landing page for AlphaX, a DeFi product, along with all of its brand visuals.",
    did: [
      "Designed a responsive, conversion-focused landing page.",
      "Created all of the product's brand visuals.",
    ],
    shots: ["Landing page, desktop", "Landing page, mobile", "Brand visuals"],
    hue: 45,
  },
];

export const experience = [
  {
    role: "Brand & Creative Designer",
    company: "Certinal",
    place: "",
    dates: "Jun 2026 – Nov 2026",
    summary: "Led the brand revamp, built an AI-assisted asset workflow and produced the product demo films.",
  },
  {
    role: "UI/UX Designer",
    company: "Asva Labs",
    place: "Remote",
    dates: "Aug 2025 – Jan 2026",
    summary: "Led UI/UX for Tetra, a multi-asset decentralized exchange, and its Figma design system.",
  },
  {
    role: "UI/UX Designer",
    company: "MATQCODE (FXDX)",
    place: "Bengaluru, India",
    dates: "Jul 2024 – Aug 2025",
    summary: "Designed FXDX, Avitus and AlphaX: a trading platform, a Web3 gaming beta and a DeFi landing page.",
  },
  {
    role: "Junior Product Designer",
    company: "Swftconnect",
    place: "United Kingdom (Remote)",
    dates: "Aug 2023 – Jan 2024",
    summary: "Ran user research and usability tests for a SaaS profile builder, and helped build its design system.",
  },
  {
    role: "Technical Support Associate",
    company: "Tech Mahindra",
    place: "Chennai, India",
    dates: "Feb 2021 – May 2023",
    summary: "Solved users' internet and in-app problems every day, which taught me where products frustrate people.",
  },
];

export const aiTools = [
  { name: "Claude Code", use: "Building sites, scripts and automations" },
  { name: "Figma MCP", use: "Generating on-brand assets at scale" },
  { name: "Higgsfield", use: "Image and video generation" },
  { name: "Magnific", use: "Upscaling and image refinement" },
  { name: "ElevenLabs", use: "Voiceover for product films" },
  { name: "Midjourney", use: "Visual exploration" },
];

export const skills = [
  {
    group: "UX & product",
    items: [
      "User research",
      "Journey mapping",
      "Information architecture",
      "Wireframing",
      "Prototyping",
      "Usability testing",
      "Interaction design",
      "Design systems",
      "Accessibility (WCAG)",
      "Design-to-dev handoff",
    ],
  },
  {
    group: "Brand & creative",
    items: [
      "Brand identity",
      "Brand guidelines",
      "Marketing design",
      "Motion graphics",
      "Video production",
      "Storyboarding",
      "Pitch decks",
      "Event & print",
    ],
  },
  {
    group: "Tools",
    items: ["Figma", "Framer", "After Effects", "Illustrator", "Photoshop", "Premiere Pro", "Lottie", "Maze", "Miro", "Notion"],
  },
];

export const education = [
  { name: "Bachelor of Electronic Media", place: "University of Madras, Chennai", dates: "2017 – 2020" },
  { name: "Advanced UI/UX Design", place: "Aspira Design, Chennai", dates: "2023" },
  { name: "Digital Skills: User Experience", place: "Accenture", dates: "2024" },
];
