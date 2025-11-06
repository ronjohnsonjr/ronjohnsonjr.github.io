export const siteConfig = {
  name: "Sena Najin",
  title: "Staff Software Engineer",
  description:
    "Portfolio website of Sena Najin, a staff software engineer focused on developer experience, design systems, and resilient teams.",
  accentColor: "#1d4ed8",
  social: {
    email: "hello@sennajin.dev",
    linkedin: "https://www.linkedin.com/in/sennajin/",
    twitter: "https://x.com/sennajin",
    github: "https://github.com/sennajin",
  },
  aboutMe:
    "I'm a staff software engineer who thrives on building thoughtful developer experiences. After a decade of leading cross-functional teams, I'm currently focused on design systems, platform modernization, and mentorship programs that elevate engineers at every level.",
  skills: [
    "Technical Leadership",
    "TypeScript",
    "React",
    "Node.js",
    "Design Systems",
    "Accessibility",
    "Architecture",
    "Mentorship",
  ],
  projects: [
    {
      name: "Northstar Design System",
      description:
        "Led the multi-quarter rebuild of Northstar, the company design system. Delivered a component library with accessibility guardrails, design tokens, and documentation that improved adoption to 87% across all product squads.",
      link: "https://github.com/sennajin/northstar",
      skills: ["TypeScript", "Storybook", "Accessibility", "Design Tokens"],
    },
    {
      name: "Developer Portal Refresh",
      description:
        "Reimagined the internal developer portal to surface deployment health, incident runbooks, and API contracts in one place. Reduced time-to-diagnosis for production issues by 35% while improving onboarding satisfaction scores.",
      link: "https://github.com/sennajin/dev-portal",
      skills: ["React", "Node.js", "GraphQL", "DX"],
    },
    {
      name: "Experimentation Platform",
      description:
        "Architected a feature flag and experimentation platform enabling product teams to run A/B tests safely. Introduced guardrails for progressive delivery and saved 20+ engineer hours per launch.",
      link: "https://github.com/sennajin/experimentation-platform",
      skills: ["Go", "Kubernetes", "Feature Flags", "Observability"],
    },
  ],
  experience: [
    {
      title: "Staff Software Engineer, Developer Experience",
      company: "Waypoint Labs",
      dateRange: "2021 — Present",
      bullets: [
        "Lead a platform engineering group supporting 40+ product teams with tooling, infrastructure, and mentoring.",
        "Rolled out a design system and accessibility program that decreased defect regressions by 28% year-over-year.",
        "Partner with product and design leadership on multi-quarter roadmaps, aligning staffing plans with strategic bets.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Atlas Collective",
      dateRange: "2017 — 2021",
      bullets: [
        "Directed a cross-functional initiative modernizing legacy React applications to TypeScript and shared component libraries.",
        "Formalized an engineering mentorship program that paired senior engineers with new hires and improved retention by 15%.",
        "Championed progressive delivery practices, reducing median incident time-to-resolution from 54 minutes to 18 minutes.",
      ],
    },
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      school: "Northridge University",
      dateRange: "2013 — 2017",
      achievements: [
        "Graduated magna cum laude.",
        "Led the ACM student chapter and organized regional hackathons.",
        "Research assistant for human-computer interaction lab focusing on accessible interfaces.",
      ],
    },
  ],
};

export const professionalProfile = {
  hero: {
    eyebrow: "Fractional Engineering Leadership",
    title: "Partner for design systems, developer platforms, and resilient teams.",
    subtitle:
      "Sena Najin is a staff-level engineer specializing in scalable design systems, API platforms, and the rituals that keep high-growth teams performing.",
    availability: "Currently accepting Q3 2025 engagements",
    location: "Remote • New York, NY",
    ctas: {
      primary: {
        label: "Book a discovery call",
        href: "mailto:hello@sennajin.dev?subject=Discovery%20Call%20with%20Sena",
      },
      secondary: {
        label: "Download 1-pager",
        href: "https://sennajin.github.io/assets/sena-najin-1-pager.pdf",
      },
    },
  },
  differentiators: [
    {
      title: "Design systems with longevity",
      description:
        "Shipped component libraries that supported product organizations from Seed to Series D, with governance models that scale without slowing delivery.",
    },
    {
      title: "Developer experience as a product",
      description:
        "Treat internal platforms like products: clear roadmaps, measurable impact, and feedback loops with the engineers who depend on them.",
    },
    {
      title: "Leadership that multiplies",
      description:
        "Experienced mentor and facilitator who builds rituals for knowledge sharing, strategic planning, and inclusive collaboration.",
    },
  ],
  metrics: [
    { label: "Teams Supported", value: "40+" },
    { label: "Design System Adoption", value: "87%" },
    { label: "Incident MTTR Improvement", value: "3x" },
    { label: "Years of DX Expertise", value: "10" },
  ],
  serviceLines: [
    {
      name: "Design System Leadership",
      description:
        "Define governance models, accessibility practices, and contribution workflows that keep design systems healthy over time.",
      outcomes: [
        "Multi-quarter roadmaps with measurable adoption goals",
        "Documentation and pairing sessions tailored for product teams",
        "Accessibility scorecards and release gates",
      ],
    },
    {
      name: "Developer Platform Strategy",
      description:
        "Audit and evolve internal platforms with empathy for the engineers using them, balancing velocity with guardrails.",
      outcomes: [
        "Experience reviews with actionable playbooks",
        "Migration plans for legacy services and pipelines",
        "Workshops that align stakeholders across product, platform, and security",
      ],
    },
    {
      name: "Fractional Engineering Management",
      description:
        "Partner with founders or VPs of Engineering to stand up rituals, hiring plans, and mentorship programs for growing teams.",
      outcomes: [
        "Hiring frameworks and leveling rubrics",
        "Team health assessments and quarterly strategy sessions",
        "Mentorship programs with measurable growth plans",
      ],
    },
  ],
  caseStudies: [
    {
      client: "Waypoint Labs",
      summary:
        "Scaled a design system from 6 to 42 teams, establishing contribution guidelines and accessibility testing built into CI workflows.",
      impact: [
        "Reduced duplicate component creation by 63%",
        "Improved accessibility scorecards from 78 to 96 in two quarters",
        "Launched an internal guild with 120+ active members",
      ],
    },
    {
      client: "Atlas Collective",
      summary:
        "Designed a developer portal that centralized release notes, incident retros, and API standards, unlocking a culture of continuous improvement.",
      impact: [
        "35% faster onboarding for product engineers",
        "Incident communication time reduced from hours to minutes",
        "Unified knowledge base adopted by 90% of engineering managers",
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "Sena has an incredible ability to translate ambiguous platform problems into actionable roadmaps. Our teams ship faster because she taught us how to invest in tooling the right way.",
      name: "Priya Desai",
      role: "VP of Engineering, Waypoint Labs",
    },
    {
      quote:
        "She built the rituals that make our design system sustainable—weekly office hours, paired migrations, and a governance model folks actually respect.",
      name: "Logan Pierce",
      role: "Director of Product Design, Atlas Collective",
    },
  ],
  experience: siteConfig.experience,
  contact: {
    headline: "Let's explore how we can partner",
    summary:
      "Send a note with the challenges you're facing or upcoming initiatives. I'll follow up with a curated plan and a working session agenda.",
    email: siteConfig.social.email,
    calendly: "https://cal.com/sena-najin/discovery",
  },
};
