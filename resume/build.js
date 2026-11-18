const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, ExternalHyperlink, AlignmentType,
  LevelFormat, TabStopType, BorderStyle,
} = require("docx");

const FONT = "Arial";
const RIGHT_TAB = 10466; // A4 width 11906 - 2 x 720 margins

const p = (children, opts = {}) => new Paragraph({ children, ...opts });
const t = (text, o = {}) => new TextRun({ text, font: FONT, size: 20, ...o });

const section = (title) =>
  p([t(title.toUpperCase(), { bold: true, size: 22 })], {
    spacing: { before: 220, after: 100 },
    keepNext: true,
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "444444", space: 2 } },
  });

const role = (title, company, place, dates) =>
  p(
    [
      t(title, { bold: true }),
      t(` | ${company}`, { bold: true }),
      t(place ? ` | ${place}` : ""),
      t(`\t${dates}`),
    ],
    {
      tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
      spacing: { before: 140, after: 40 },
      keepNext: true,
    }
  );

const project = (name) =>
  p([t(name, { bold: true, italics: true })], { spacing: { before: 80, after: 20 }, keepNext: true });

const bullet = (text) =>
  p([t(text)], { numbering: { reference: "bullets", level: 0 }, spacing: { after: 30 } });

const skill = (label, text) =>
  p([t(`${label}: `, { bold: true }), t(text)], { spacing: { after: 60 } });

const edu = (name, inst, dates) =>
  p([t(name, { bold: true }), t(` | ${inst}`), t(`\t${dates}`)], {
    tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
    spacing: { after: 50 },
  });

const link = (text, url) =>
  new ExternalHyperlink({ link: url, children: [t(text, { color: "1F4E9E", underline: {} })] });

const children = [
  p([t("Mathew Colin", { bold: true, size: 36 })], { alignment: AlignmentType.CENTER, spacing: { after: 40 } }),
  p([t("Product Designer | Visual & Creative Designer")], {
    alignment: AlignmentType.CENTER, spacing: { after: 40 },
  }),
  p(
    [
      t("+91 63839 49965  |  "),
      link("mathewcolinm@gmail.com", "mailto:mathewcolinm@gmail.com"),
      t("  |  "),
      link("linkedin.com/in/mathew-colin", "https://linkedin.com/in/mathew-colin/"),
      t("  |  "),
      link("mathewcolin.framer.ai", "https://mathewcolin.framer.ai"),
    ],
    { alignment: AlignmentType.CENTER, spacing: { after: 60 } }
  ),

  section("Professional Summary"),
  p(
    [
      t(
        "Product and brand designer with 3+ years of experience across SaaS, healthcare, fintech and Web3. " +
          "I work across UI/UX, design systems, brand identity and motion, and I build AI-assisted design workflows " +
          "that help small teams ship more without lowering quality. Highlights include product launches that drew " +
          "142K+ waitlist signups and 1M+ social impressions, and 850+ website assets delivered."
      ),
    ],
    { spacing: { after: 40 } }
  ),

  section("Professional Experience"),

  role("Brand & Creative Designer", "Certinal", "", "Jun 2026 - Nov 2026"),
  bullet(
    "Led Certinal's brand revamp end to end, working with marketing and leadership to roll the new identity out across the logo kit, brand deck, website and event booths."
  ),
  bullet(
    "Built an AI-assisted design workflow in Figma that delivered 850+ on-brand website assets across 13 site sections."
  ),
  bullet(
    "Owned the company's product demo films from script to final 4K edit, using an AI-assisted pipeline (storyboards, ElevenLabs voiceover, After Effects). The films are now part of the sales team's outreach to hospitals."
  ),

  role("UI/UX Designer", "Asva Labs", "Remote", "Aug 2025 - Jan 2026"),
  bullet("Led end-to-end UI/UX design for Tetra, a multi-asset decentralized exchange (DEX) for trading crypto, forex, stocks and commodities."),
  bullet("Designed user flows, wireframes and high-fidelity prototypes for cross-chain trading features on Hyperliquid, Solana and Arbitrum."),
  bullet("Built and maintained a Figma design system and component library that kept the product consistent and sped up developer handoff."),
  bullet("Worked with engineering and product in an Agile team to ship production-ready interfaces on schedule, and ran usability reviews to find friction in complex trading flows."),

  role("UI/UX Designer", "MATQCODE (FXDX)", "Bengaluru, India", "Jul 2024 - Aug 2025"),
  project("FXDX (Decentralized Exchange)"),
  bullet("Redesigned the trading platform's information architecture and visual design to make core trading tasks quicker and easier."),
  bullet("Built a design system from scratch, covering typography, color tokens, component libraries and interaction patterns."),
  bullet("Redesigned the marketing landing page with UI animations and streamlined design-to-development handoff to cut iteration cycles."),
  project("Avitus (Web3 Casino Platform, Beta)"),
  bullet("Designed the full user experience for a crypto gaming platform with Crash, Coinflip and Dice games, token wagering, rewards and leaderboards."),
  bullet("The beta reached 142,000+ waitlist signups and 1,300+ concurrent active users."),
  bullet("Created motion graphics and social media assets that generated 1,000,000+ impressions, and designed the investor pitch deck."),
  project("AlphaX (Landing Page)"),
  bullet("Designed a responsive, conversion-focused landing page and all of its brand visuals for a DeFi product."),

  role("Junior Product Designer", "Swftconnect", "United Kingdom (Remote)", "Aug 2023 - Jan 2024"),
  bullet("Ran user interviews, surveys and usability tests for a SaaS profile builder and team management dashboard."),
  bullet("Helped build the product's design system, including component standards, style guides and interaction patterns."),
  bullet("Worked with developers to make sure designs were built accurately, and supported motion and graphic design work."),

  role("Technical Support Associate", "Tech Mahindra", "Chennai, India", "Feb 2021 - May 2023"),
  bullet("Resolved internet and in-app issues for end users, which built a strong understanding of user frustrations that now shapes my UX work."),

  role("Graphic Design & Video Editing Intern", "Jaya Television", "Chennai, India", "Jan 2020 - Feb 2020"),
  bullet("Edited video and created broadcast graphics for television content."),

  section("Skills"),
  skill("UX & Product Design", "User Research, User Journey Mapping, Information Architecture, Wireframing, Prototyping, Usability Testing, Interaction Design, Design Systems, Component Libraries, Responsive Design, Accessibility (WCAG), Design-to-Dev Handoff, Agile/Scrum"),
  skill("Brand & Creative", "Brand Identity, Brand Revamp, Brand Guidelines, Marketing Design, Motion Graphics, Video Production, Storyboarding, Pitch Decks, Event and Print Collateral"),
  skill("AI Design Workflows", "Claude Code, Figma MCP Automation, Higgsfield, Magnific, ElevenLabs, Midjourney"),
  skill("Tools", "Figma, Framer, Adobe After Effects, Adobe Illustrator, Adobe Photoshop, Adobe Premiere Pro, Lottie, Zeplin, Maze, Miro, Notion"),
  skill("Domains", "Healthcare SaaS, eSignature and Compliance, Fintech, Web3 / DeFi, Trading Platforms"),

  section("Education & Certification"),
  edu("Bachelor of Electronic Media", "University of Madras, Chennai", "Jun 2017 - Apr 2020"),
  edu("Advanced UI/UX Design", "Aspira Design, Chennai", "Feb 2023 - Jun 2023"),
  edu("Digital Skills: User Experience", "Accenture", "Jun 2024"),
];

const doc = new Document({
  creator: "Mathew Colin",
  title: "Mathew Colin - Resume",
  styles: { default: { document: { run: { font: FONT, size: 20 } } } },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 360, hanging: 240 } } },
        }],
      },
    ],
  },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 720, bottom: 720, left: 720, right: 720 } } },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  const out = path.join(__dirname, "Mathew Colin - Resume.docx");
  fs.writeFileSync(out, buf);
  console.log("wrote", out);
});
