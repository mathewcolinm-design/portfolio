// All site copy lives here. Edit this file to change what the site says.
// Every fact comes from Mathew's résumé; nothing is invented.
//
// Images: drop files into site/public/work/<slug>/ and set the paths below,
// e.g. cover: "/work/tetra/cover.webp". Anything without an image shows a
// clearly labelled placeholder.

export const profile = {
  name: "Mathew Colin",
  role: "Product designer",
  availability: "Open to full-time product design roles",
  /** Home statement: the ink part, then the soft grey continuation. */
  statement: ["Mathew Colin is a product designer for SaaS, fintech and Web3", " — bringing brand, motion and AI-assisted workflows that help teams ship more."],
  tagline:
    "Product designer for SaaS, fintech and Web3. I also do brand and motion, and build AI workflows that help teams ship more.",
  email: "mathewcolinm@gmail.com",
  linkedin: "https://linkedin.com/in/mathew-colin/",
};

/** Projects shown on the home page, in order. The Projects page shows all. */
export const featured = ["tetra", "fxdx", "avitus", "certinal-brand"];

export const homeAbout = {
  statement: ["I came to design from the support desk.", " Two years solving people's internet and in-app problems taught me where products frustrate them."],
  body: "Since 2023 I've designed across SaaS, fintech, Web3 and healthcare at Swftconnect, MATQCODE, Asva Labs and Certinal.",
};

export const services = [
  { name: "Product & UX design", line: "Flows, wireframes and production-ready interfaces for complex products." },
  { name: "Design systems", line: "Tokens, component libraries and patterns that keep a product consistent." },
  { name: "User research & testing", line: "Interviews, surveys and usability tests that find friction early." },
  { name: "Brand identity", line: "Identities rolled out from logo kit to website and event booth." },
  { name: "Motion & video", line: "Motion graphics, social assets and product films." },
  { name: "AI design workflows", line: "Figma and Claude Code workflows that produce on-brand work at scale." },
];


export type Metric = { value: string; label: string; detail?: string };
export type Shot = { label: string; src?: string };

export type Project = {
  slug: string;
  name: string;
  company: string;
  year: string;
  /** One-line caption under the card, also the case study's headline. */
  caption: string;
  intro: string;
  role: string;
  timeline: string;
  focus: string;
  overview: string;
  did: string[];
  metrics?: Metric[];
  shots: Shot[];
  cover?: string;
};

export const projects: Project[] = [
  {
    slug: "tetra",
    name: "Tetra",
    company: "Asva Labs",
    year: "2025",
    caption: "Designing one exchange for crypto, forex, stocks and commodities",
    intro:
      "I led the UI/UX design of Tetra, a multi-asset decentralized exchange, from user flows to the production interface and the design system behind it.",
    role: "UI/UX designer",
    timeline: "Aug 2025 – Jan 2026",
    focus: "Trading platform",
    overview:
      "Tetra lets traders work across crypto, forex, stocks and commodities in one decentralized exchange, with cross-chain trading on Hyperliquid, Solana and Arbitrum. I owned the experience end to end, working with engineering and product in an Agile team.",
    did: [
      "Designed user flows, wireframes and high-fidelity prototypes for cross-chain trading on Hyperliquid, Solana and Arbitrum.",
      "Built and maintained a Figma design system and component library that kept the product consistent and sped up developer handoff.",
      "Ran usability reviews to find friction in complex trading flows.",
      "Shipped production-ready interfaces on schedule with engineering and product.",
    ],
    shots: [{ label: "Trading screen" }, { label: "Order flow" }, { label: "Cross-chain flow" }, { label: "Component library" }],
  },
  {
    slug: "fxdx",
    name: "FXDX",
    company: "MATQCODE",
    year: "2024–25",
    caption: "Rebuilding a trading platform around a new design system",
    intro:
      "I redesigned the information architecture and visual design of FXDX, a decentralized exchange, and built its design system from scratch.",
    role: "UI/UX designer",
    timeline: "2024 – 2025",
    focus: "Design system",
    overview:
      "FXDX is a decentralized exchange. The redesign set out to make core trading tasks quicker and easier, and to give the team a design system they could build on.",
    did: [
      "Redesigned the platform's information architecture and visual design so core trading tasks take fewer steps.",
      "Built a design system from scratch: typography, colour tokens, component libraries and interaction patterns.",
      "Redesigned the marketing landing page with UI animations.",
      "Streamlined design-to-development handoff to cut iteration cycles.",
    ],
    shots: [{ label: "Trading interface" }, { label: "Colour and type tokens" }, { label: "Component library" }, { label: "Landing page" }],
  },
  {
    slug: "avitus",
    name: "Avitus",
    company: "MATQCODE",
    year: "2024–25",
    caption: "Designing a Web3 gaming platform whose beta drew 142K+ signups",
    intro:
      "I designed the full experience of Avitus, a crypto gaming platform, plus its motion graphics, social assets and investor pitch deck.",
    role: "Product & motion designer",
    timeline: "2024 – 2025",
    focus: "Web3 gaming",
    overview:
      "Avitus is a Web3 casino platform with Crash, Coinflip and Dice games, token wagering, rewards and leaderboards. Alongside the product, I created its motion graphics and social media assets and designed the investor pitch deck.",
    did: [
      "Designed the full user experience: Crash, Coinflip and Dice games, token wagering, rewards and leaderboards.",
      "Created motion graphics and social media assets that generated 1M+ impressions.",
      "Designed the investor pitch deck.",
    ],
    metrics: [
      { value: "142,000+", label: "Waitlist signups", detail: "For the beta" },
      { value: "1,300+", label: "Concurrent users", detail: "Active during the beta" },
      { value: "1M+", label: "Social impressions", detail: "From motion and social assets" },
    ],
    shots: [{ label: "Game lobby" }, { label: "Crash game" }, { label: "Rewards and leaderboard" }, { label: "Campaign motion" }],
  },
  {
    slug: "certinal-brand",
    name: "Certinal",
    company: "Certinal",
    year: "2026",
    caption: "Revamping Certinal's brand, from logo kit to event booth",
    intro:
      "I led Certinal's brand revamp end to end and built the AI-assisted workflow that rolled it out across the website.",
    role: "Brand & creative designer",
    timeline: "Jun 2026 – Nov 2026",
    focus: "Brand identity",
    overview:
      "Certinal is an eSignature and compliance company. Working with marketing and leadership, I took the new identity from the logo kit through the brand deck, website and event booths.",
    did: [
      "Led the brand revamp end to end with marketing and leadership.",
      "Rolled the identity out across the logo kit, brand deck, website and event booths.",
      "Built an AI-assisted design workflow in Figma that produced on-brand website assets at scale.",
    ],
    metrics: [
      { value: "850+", label: "On-brand website assets", detail: "Produced through the Figma workflow" },
      { value: "13", label: "Website sections", detail: "Covered by the new assets" },
    ],
    shots: [{ label: "Logo kit" }, { label: "Brand deck" }, { label: "Website sections" }, { label: "Event booth" }],
  },
  {
    slug: "demo-films",
    name: "Certinal films",
    company: "Certinal",
    year: "2026",
    caption: "Producing product films with an AI-assisted pipeline",
    intro:
      "I owned Certinal's product demo films from script to final 4K edit, using an AI-assisted pipeline.",
    role: "Writer, designer & editor",
    timeline: "2026",
    focus: "Motion & video",
    overview:
      "These are product demo films for Certinal's sales team. I wrote the scripts, built storyboards, produced voiceover with ElevenLabs and animated the films in After Effects. The sales team now uses them in its outreach to hospitals.",
    did: [
      "Wrote the scripts and built the storyboards.",
      "Produced the voiceover with ElevenLabs.",
      "Animated and edited the films in After Effects, delivering final 4K edits.",
    ],
    shots: [{ label: "Storyboard" }, { label: "Film stills" }, { label: "Product walkthrough" }],
  },
  {
    slug: "alphax",
    name: "AlphaX",
    company: "MATQCODE",
    year: "2024–25",
    caption: "A conversion-focused landing page for a DeFi product",
    intro: "I designed a responsive landing page for AlphaX, a DeFi product, along with all of its brand visuals.",
    role: "Web & brand designer",
    timeline: "2024 – 2025",
    focus: "Landing page",
    overview:
      "AlphaX is a DeFi product. I designed its responsive, conversion-focused landing page and created all of its brand visuals.",
    did: ["Designed a responsive, conversion-focused landing page.", "Created all of the product's brand visuals."],
    shots: [{ label: "Landing page, desktop" }, { label: "Landing page, mobile" }, { label: "Brand visuals" }],
  },
];

export type Experiment = { title: string; note: string; src?: string };

export const experiments: Experiment[] = [
  { title: "Avitus campaign motion", note: "Motion and social pieces for Avitus" },
  { title: "Certinal product film", note: "Frames from a product demo film" },
  { title: "Certinal event booth", note: "The new identity at full scale" },
  { title: "Asset workflow", note: "Website assets generated through Figma" },
  { title: "Avitus pitch deck", note: "Investor pitch deck for Avitus" },
  { title: "Broadcast graphics", note: "Graphics from my time at Jaya TV" },
];

export const about = {
  hello: "Hi, I’m Mathew.",
  lead: "A product designer who makes complex products feel clear.",
  bio: [
    "I have 3+ years of experience across SaaS, healthcare, fintech and Web3. Most of my work lives inside complex products: trading platforms, dashboards and the design systems behind them.",
    "I came to design from the support desk. Two years helping people with internet and in-app problems at Tech Mahindra showed me exactly where products frustrate people, and I still design with that in mind.",
    "Alongside product work I do brand identity and motion, most recently leading Certinal’s brand revamp and producing its product films.",
    "I also build AI-assisted design workflows so a small team can ship more without lowering the bar. One of them produced 850+ on-brand website assets.",
  ],
  facts: [
    { label: "Looking for", value: "Full-time product design roles" },
    { label: "Domains", value: "SaaS, healthcare, fintech, Web3" },
    { label: "Strengths", value: "Product design, design systems, brand, motion" },
  ],
};

export type Job = {
  role: string;
  company: string;
  initials: string;
  dates: string;
  place?: string;
  text: string;
};

export const jobs: Job[] = [
  {
    role: "Brand & Creative Designer",
    company: "Certinal",
    initials: "Ce",
    dates: "Jun 2026 – Nov 2026",
    text: "Led the brand revamp end to end with marketing and leadership, across the logo kit, brand deck, website and event booths. Built an AI-assisted Figma workflow that produced 850+ on-brand website assets, and produced the product demo films from script to 4K edit.",
  },
  {
    role: "UI/UX Designer",
    company: "Asva Labs",
    initials: "As",
    dates: "Aug 2025 – Jan 2026",
    place: "Remote",
    text: "Led UI/UX for Tetra, a multi-asset decentralized exchange, including cross-chain trading on Hyperliquid, Solana and Arbitrum. Built and maintained its Figma design system and ran usability reviews on complex trading flows.",
  },
  {
    role: "UI/UX Designer",
    company: "MATQCODE",
    initials: "Mq",
    dates: "Jul 2024 – Aug 2025",
    place: "Bengaluru",
    text: "Redesigned the FXDX trading platform and built its design system from scratch. Designed Avitus, a Web3 gaming beta that reached 142,000+ waitlist signups, and the AlphaX DeFi landing page.",
  },
  {
    role: "Junior Product Designer",
    company: "Swftconnect",
    initials: "Sw",
    dates: "Aug 2023 – Jan 2024",
    place: "UK, remote",
    text: "Ran user interviews, surveys and usability tests for a SaaS profile builder and team dashboard, and helped build its design system.",
  },
  {
    role: "Technical Support Associate",
    company: "Tech Mahindra",
    initials: "Tm",
    dates: "Feb 2021 – May 2023",
    place: "Chennai",
    text: "Resolved internet and in-app issues for end users, which taught me where products frustrate people.",
  },
  {
    role: "Graphic Design & Video Editing Intern",
    company: "Jaya Television",
    initials: "Jt",
    dates: "Jan 2020 – Feb 2020",
    place: "Chennai",
    text: "Edited video and created broadcast graphics for television.",
  },
];


export const skills = [
  "Product design",
  "User research",
  "Journey mapping",
  "Information architecture",
  "Prototyping",
  "Usability testing",
  "Interaction design",
  "Design systems",
  "Accessibility (WCAG)",
  "Brand identity",
  "Motion graphics",
  "Video production",
];

/** Tools, in the order I reach for them. */
export const toolkit = [
  { name: "Figma", use: "UI design and design systems" },
  { name: "Figma MCP", use: "Generating on-brand assets at scale" },
  { name: "Claude Code", use: "Building sites, scripts and design automations" },
  { name: "Framer", use: "Web design and prototypes" },
  { name: "After Effects", use: "Motion and product films" },
  { name: "ElevenLabs", use: "Voiceover for product films" },
  { name: "Illustrator", use: "Brand and vector work" },
  { name: "Lottie", use: "Product animation" },
  { name: "Higgsfield, Magnific, Midjourney", use: "Image generation, upscaling and exploration" },
  { name: "Maze", use: "Usability testing" },
  { name: "Notion", use: "Writing and planning" },
];

export const education = [
  { name: "Bachelor of Electronic Media", place: "University of Madras, Chennai", dates: "2017 – 2020" },
  { name: "Advanced UI/UX Design", place: "Aspira Design, Chennai", dates: "2023" },
  { name: "Digital Skills: User Experience", place: "Accenture", dates: "2024" },
];
