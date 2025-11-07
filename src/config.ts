export const siteConfig = {
  name: "Ronald Johnson Jr.",
  title: "Senior Software Development Engineer in Test (SDET) / Systems Engineer",
  description:
    "QA automation engineer and systems integration specialist with 20+ years spanning defense, SaaS, and cloud environments. Expert in designing scalable Python-based automation frameworks for regulated and security-sensitive systems.",
  accentColor: "#650304", /* Blood red - darker, more readable */
  social: {
    email: "johnsonjrre@gmail.com",
    phone: "443-668-1024",
    github: "https://github.com/ronjohnsonjr",
  },
  aboutMe:
    "QA automation engineer and systems integration specialist with 20+ years spanning defense, SaaS, and cloud environments. Expert in designing scalable Python-based automation frameworks for regulated and security-sensitive systems. Proven success reducing manual test effort, implementing CI/CD-driven validation, and ensuring software quality in compliance-focused contexts (FedRAMP, NIST, OWASP). Adept at verification and validation (V&V) planning, regression automation, and end-to-end coverage across web, API, and backend services.",
  skills: [
    "Test Automation (Python, Robot Framework, Pytest, Behave)",
    "Selenium & Playwright",
    "API Testing (REST, GraphQL, SOAP)",
    "Verification & Validation (V&V)",
    "CI/CD Integration (GitLab CI, GitHub Actions, Jenkins)",
    "Test Design & Planning",
    "Cloud Environments (AWS, Kubernetes)",
    "Compliance (FedRAMP, NIST 800-53, OWASP)",
    "Security Testing",
    "Agile / BDD / TDD",
  ],
  projects: [
    {
      name: "Unified Test Automation Framework",
      description:
        "Designed and implemented modular test automation frameworks using Pytest and Robot Framework, consolidating multiple legacy test suites into a single reusable framework. Introduced modular libraries and reusable fixtures supporting multiple products with parallel execution and CI/CD integration.",
      skills: ["Python", "Pytest", "Robot Framework", "CI/CD"],
    },
    {
      name: "API Security & Compliance Testing Suite",
      description:
        "Automated REST and GraphQL validation for authentication, authorization, rate-limiting, and schema versioning. Implemented token validation and fuzz testing aligned with OWASP API Top 10, supporting FedRAMP and NIST 800-53 compliance requirements.",
      skills: ["API Testing", "Security Testing", "OWASP", "FedRAMP", "NIST"],
    },
    {
      name: "CI/CD Test Pipeline Integration",
      description:
        "Integrated secure API and regression testing into GitLab CI/CD pipelines with parallel execution, gating, and artifact retention. Reduced regression cycle time by over 40% and eliminated manual validation for backend releases.",
      skills: ["GitLab CI", "GitHub Actions", "Jenkins", "Test Automation"],
    },
  ],
  experience: [
    {
      title: "Systems Engineer / QA Automation Lead",
      company: "Onyx Point",
      dateRange: "Mar 2022 — Present",
      bullets: [
        "Lead automation initiatives for AWS-hosted distributed systems, combining backend, API, and UI coverage into unified regression pipelines.",
        "Designed and implemented test automation frameworks using Pytest and Robot Framework, introducing modular libraries and reusable fixtures to support multiple products.",
        "Integrated secure API and regression testing into GitLab CI/CD pipelines with parallel execution, gating, and artifact retention to accelerate release readiness.",
        "Automated REST and GraphQL validation for authentication, authorization, rate-limiting, schema versioning, and error handling; implemented token validation and fuzz testing to align with OWASP API Top 10.",
        "Coordinated verification and validation (V&V) documentation supporting compliance deliverables; produced traceable test evidence aligned with regulatory expectations for safety-critical systems.",
        "Performed root-cause analysis on test failures and expanded coverage based on customer-reported issues, reducing regression cycle time by over 40%.",
        "Consolidated multiple legacy test suites into a single modular automation framework and introduced coverage dashboards and V&V traceability documentation to support audits.",
      ],
    },
    {
      title: "Senior Systems Engineer / Test Team Lead",
      company: "Federal Data Systems (formerly Intelligent Decisions)",
      dateRange: "Nov 2013 — Mar 2022",
      bullets: [
        "Led a five-member QA team supporting two major system baselines (Windows Server and Linux/Kubernetes platforms).",
        "Built and maintained Python automation suites for REST/SOAP APIs and distributed data flows using Behave, Pytest, and Postman/Newman.",
        "Designed test plans covering functionality, performance, security, and compliance for SQL metadata pipelines, Elasticsearch, and visualization stacks.",
        "Executed FedRAMP and NIST 800-53 test procedures, mapping automated test results to compliance controls.",
        "Authored test frameworks validating PKI-based authentication, mTLS, and TLS hardening.",
        "Administered Apache NiFi environments; automated validation of ingest flows, schema evolution, and data integrity.",
        "Integrated automated testing into Jenkins and GitLab pipelines with gating jobs, isolated environments, and JUnit reporting.",
      ],
    },
    {
      title: "Systems Integration Engineer",
      company: "Lockheed Martin",
      dateRange: "Sept 2008 — Feb 2013",
      bullets: [
        "Conducted system-level integration and testing of airborne ISR platforms (Army MARSS, Air Force MC-12W, CBP King Air, Vigilant Pursuit).",
        "Validated end-to-end interoperability across sensors, networks, and mission systems.",
        "Authored operational documentation, training manuals, and test procedures for field deployment.",
      ],
    },
    {
      title: "Signals Intelligence Analyst / Systems Administrator",
      company: "United States Army",
      dateRange: "2000 — 2007",
      bullets: [
        "Led 24-Soldier SIGINT platoon in Iraq; conducted real-time intelligence operations.",
        "Administered Windows and Solaris systems, ASP/MySQL databases, and classified COMSEC infrastructure.",
        "Managed lifecycle integration of new SIGINT platforms (Prophet Triton) with NSA and SPAWAR teams.",
      ],
    },
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      dateRange: "",
      credentialId: "",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/c4d0a0540ea14ef29db277354caab6a1",
      badge: "/assets/certifications/aws-cloud-practitioner-badge.png",
    },
    {
      name: "ISTQB Certified Tester – Foundation Level",
      issuer: "ISTQB",
      dateRange: "",
      credentialId: "",
      link: "https://atsqa.org/certified-testers/profile/e6a3f3bbd0fa4b10b0657f698fe527be",
      badge: "/assets/certifications/istqb-foundation-badge.png",
    },
    {
      name: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      dateRange: "",
      credentialId: "",
      link: "",
      badge: "/assets/certifications/postman-api-fundamentals-badge.png",
    },
    {
      name: "OWASP Top 10:2021 in Python",
      issuer: "SecureFlag",
      dateRange: "October 29, 2025",
      credentialId: "79798aa4-1ecc-4834-9eba-a9e9d6702e87",
      link: "https://www.secureflag.com/s?79798aa4-1ecc-4834-9eba-a9e9d6702e87",
      badge: "/assets/certifications/secureflag-owasp-badge.png",
    },
  ],
};

export const professionalProfile = {
  hero: {
    eyebrow: "QA Automation & Test Engineering",
    title: "Partner for test automation frameworks, CI/CD integration, and compliance validation.",
    subtitle:
      "Ronald Johnson Jr. is a Senior SDET and Systems Engineer with 20+ years of experience designing scalable Python-based automation frameworks for regulated and security-sensitive systems. Expert in FedRAMP, NIST, and OWASP compliance testing.",
    availability: "Available for consulting engagements",
    location: "Remote • Columbia, MD",
    ctas: {
      primary: {
        label: "Book a discovery call",
        href: "mailto:johnsonjrre@gmail.com?subject=Discovery%20Call%20with%20Ron",
      },
      secondary: {
        label: "Download 1-pager",
        href: "https://ronjohnsonjr.github.io/assets/ron-johnson-jr-1-pager.pdf",
      },
    },
  },
  differentiators: [
    {
      title: "Scalable automation frameworks",
      description:
        "Designed and implemented modular test automation frameworks using Pytest, Robot Framework, and Behave that consolidate legacy test suites and support multiple products with reusable components.",
    },
    {
      title: "Compliance-focused testing",
      description:
        "Expert in FedRAMP, NIST 800-53, and OWASP compliance testing with proven success mapping automated test results to regulatory controls and producing traceable V&V documentation.",
    },
    {
      title: "CI/CD integration expertise",
      description:
        "Integrated secure API and regression testing into GitLab CI, GitHub Actions, and Jenkins pipelines with parallel execution, gating, and artifact retention, reducing regression cycle time by 40%+.",
    },
  ],
  metrics: [
    { label: "Years of Experience", value: "20+" },
    { label: "Regression Time Reduction", value: "40%+" },
    { label: "QA Team Leadership", value: "5 members" },
    { label: "Compliance Frameworks", value: "FedRAMP, NIST, OWASP" },
  ],
  serviceLines: [
    {
      name: "Test Automation Framework Development",
      description:
        "Design and implement scalable Python-based automation frameworks using Pytest, Robot Framework, and Behave with modular libraries and reusable fixtures supporting multiple products.",
      outcomes: [
        "Consolidated test suites reducing maintenance overhead",
        "Modular frameworks with reusable components and fixtures",
        "Parallel execution and CI/CD integration strategies",
      ],
    },
    {
      name: "API & Security Testing",
      description:
        "Automate REST, GraphQL, and SOAP API validation including authentication, authorization, rate-limiting, and schema versioning. Implement OWASP Top 10 security testing and compliance validation.",
      outcomes: [
        "Comprehensive API test coverage with automated validation",
        "Security testing aligned with OWASP standards",
        "Token validation and fuzz testing implementations",
      ],
    },
    {
      name: "Compliance & V&V Documentation",
      description:
        "Coordinate verification and validation (V&V) documentation supporting FedRAMP, NIST 800-53, and SOC 2 compliance. Produce traceable test evidence aligned with regulatory expectations.",
      outcomes: [
        "V&V documentation meeting compliance requirements",
        "Test traceability matrices and coverage dashboards",
        "Audit-ready documentation and evidence packages",
      ],
    },
  ],
  caseStudies: [
    {
      client: "Onyx Point",
      summary:
        "Led automation initiatives for AWS-hosted distributed systems, consolidating multiple legacy test suites into a unified modular automation framework with CI/CD integration.",
      impact: [
        "Reduced regression cycle time by over 40%",
        "Consolidated multiple legacy test suites into single framework",
        "Introduced coverage dashboards and V&V traceability documentation",
      ],
    },
    {
      client: "Federal Data Systems",
      summary:
        "Led five-member QA team supporting Windows Server and Linux/Kubernetes platforms, building Python automation suites for REST/SOAP APIs and executing FedRAMP/NIST 800-53 compliance testing.",
      impact: [
        "Led QA team supporting two major system baselines",
        "Executed FedRAMP and NIST 800-53 test procedures",
        "Integrated automated testing into Jenkins and GitLab pipelines",
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "Ron's expertise in test automation and compliance testing has been invaluable. He designed frameworks that not only improved our test coverage but also ensured we met all regulatory requirements.",
      name: "Team Lead",
      role: "Onyx Point",
    },
    {
      quote:
        "His ability to consolidate legacy test suites and integrate them into our CI/CD pipelines transformed our release process and significantly reduced manual testing effort.",
      name: "Engineering Manager",
      role: "Federal Data Systems",
    },
  ],
  experience: siteConfig.experience,
  contact: {
    headline: "Let's explore how we can partner",
    summary:
      "Send a note with the challenges you're facing or upcoming initiatives. I'll follow up with a curated plan and a working session agenda.",
    email: siteConfig.social.email,
    calendly: "https://cal.com/ronjohnsonjr/discovery",
  },
};
