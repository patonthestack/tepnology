import {
  BrainCircuitIcon,
  CloudCogIcon,
  CodeXmlIcon,
  CompassIcon,
  LayoutTemplateIcon,
  MedalIcon,
  ShieldCheckIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react"

/**
 * Single source of truth for company facts and site copy.
 *
 * Federal buyers check these values against SAM.gov, so never publish a guess.
 */
export const site = {
  name: "Tepnology",
  legalName: "Tepnology LLC",
  tagline: "Purpose, Engineered",
  description:
    "Tepnology is a Service-Disabled Veteran-Owned, minority-owned small business delivering secure, modern software for the VA, DoD, and federal civilian agencies.",
  url: "https://tepnology.com",
  email: "patrick.tep@tepnology.com",
  careersEmail: "patrick.tep@tepnology.com",
  phone: "",
  location: "Manassas, VA, USA",
  uei: "SGWXSNU51EA5",
  cage: "8ZCP5",
  linkedin: "",
  // Regenerate with `yarn capability-statement` after changing anything below.
  capabilityStatementUrl: "/tepnology-capability-statement.pdf",
} as const

/** Public profiles where buyers can independently confirm registration and certifications. */
export const verificationLinks = [
  {
    label: "SAM.gov",
    shortLabel: "SAM.gov",
    description: "Active registration, UEI, CAGE & NAICS",
    href: `https://sam.gov/entities/view/${site.uei}`,
  },
  {
    label: "SBA Small Business Search",
    shortLabel: "SBA",
    description: "Small business status & VetCert SDVOSB certification",
    href: `https://search.certifications.sba.gov/profile/${site.uei}/${site.cage}`,
  },
]

export const founder = {
  name: "Patrick Tep",
  title: "Founder & Chief Executive Officer",
  bio: [
    "Tepnology's founder is a service-disabled veteran and career software engineer who has written production code, led delivery teams, and seen first-hand what happens when technology fails the people depending on it.",
    "That experience shapes how Tepnology works: engineers who understand the mission, honest estimates, and software that holds up in the field, not just in the demo.",
  ],
}

/** Company identifiers federal contracting officers look for. */
export const companyData: { label: string; value: string }[] = [
  { label: "UEI", value: site.uei },
  { label: "CAGE Code", value: site.cage },
  { label: "Business Size", value: "Small Business" },
  {
    label: "Socioeconomic Status",
    value: "SDVOSB · Minority-Owned",
  },
  { label: "SDVOSB Certification", value: "SBA VetCert" },
  { label: "Registration", value: "SAM.gov" },
]

export const naicsCodes = [
  { code: "541511", title: "Custom Computer Programming Services" },
  { code: "541512", title: "Computer Systems Design Services" },
  { code: "541519", title: "Other Computer Related Services" },
  { code: "518210", title: "Computing Infrastructure Providers, Data Processing & Hosting" },
  { code: "541611", title: "Administrative & General Management Consulting" },
]

export const certifications = [
  {
    short: "SDVOSB",
    name: "Service-Disabled Veteran-Owned Small Business",
    description:
      "Certified by the SBA's Veteran Small Business Certification (VetCert) program. Eligible for SDVOSB set-aside and sole-source awards across federal agencies, including the VA's Veterans First program.",
  },
  {
    short: "Minority-Owned",
    name: "Minority-Owned Business",
    description:
      "Minority-owned and operated, supporting agency and prime-contractor goals for a diverse supplier base.",
  },
  {
    short: "Small Business",
    name: "Small Business",
    description:
      "A small business under the SBA size standards for our primary NAICS codes, so agencies can count our work toward small business goals.",
  },
]

export type Service = {
  slug: string
  title: string
  icon: LucideIcon
  summary: string
  description: string
  capabilities: string[]
}

export const services: Service[] = [
  {
    slug: "software-engineering",
    title: "Custom Software Engineering",
    icon: CodeXmlIcon,
    summary:
      "Full-stack applications, APIs, and integrations built with modern, maintainable stacks.",
    description:
      "We design, build, and maintain mission applications end to end, from the first user interview to production support. Small, senior teams ship working software in short increments so stakeholders see progress every sprint.",
    capabilities: [
      "Web and mobile application development",
      "API design and system integration",
      "Agile / Scrum delivery and product management",
      "Automated testing and quality engineering",
      "Operations and maintenance (O&M) support",
    ],
  },
  {
    slug: "modernization",
    title: "Legacy Modernization",
    icon: LayoutTemplateIcon,
    summary:
      "Move aging systems to modern architectures without disrupting the mission.",
    description:
      "Many agency systems still run on decades-old code that is costly to maintain and hard to secure. We assess what you have, plan an incremental migration, and replace legacy components piece by piece so operations never stop.",
    capabilities: [
      "Application and portfolio assessment",
      "Incremental strangler-pattern migrations",
      "Mainframe and monolith decomposition",
      "Data migration and validation",
      "Section 508 / WCAG accessibility remediation",
    ],
  },
  {
    slug: "cloud-devsecops",
    title: "Cloud & DevSecOps",
    icon: CloudCogIcon,
    summary:
      "Secure CI/CD pipelines and cloud infrastructure on AWS GovCloud, Azure Government, and more.",
    description:
      "We build the pipelines and platforms that let teams deliver quickly and safely: infrastructure as code, automated security scanning, and repeatable deployments to FedRAMP-authorized cloud environments.",
    capabilities: [
      "Cloud migration and architecture (AWS, Azure, GCP)",
      "Infrastructure as code (Terraform, CloudFormation)",
      "CI/CD pipelines with integrated security scanning",
      "Containers and Kubernetes platform engineering",
      "Observability, monitoring, and SRE practices",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity & Compliance",
    icon: ShieldCheckIcon,
    summary:
      "Security built in from the start, with RMF and ATO support aligned to NIST frameworks.",
    description:
      "We treat security as an engineering requirement, not a checklist at the end. Our teams help produce the documentation and evidence agencies need for an Authority to Operate, then keep systems compliant afterward.",
    capabilities: [
      "Risk Management Framework (RMF) and ATO support",
      "NIST SP 800-53 control implementation",
      "Zero Trust architecture",
      "Vulnerability management and remediation",
      "Continuous monitoring (ConMon)",
    ],
  },
  {
    slug: "data-ai",
    title: "Data Engineering & AI",
    icon: BrainCircuitIcon,
    summary:
      "Pipelines, analytics, and responsible AI that turn agency data into decisions.",
    description:
      "We build reliable data platforms and apply machine learning where it measurably helps, with an emphasis on transparency, privacy, and human oversight consistent with federal AI guidance.",
    capabilities: [
      "Data pipelines and ETL / ELT",
      "Data warehousing and lakehouse architecture",
      "Dashboards and decision-support analytics",
      "Machine learning and generative AI solutions",
      "Data governance and privacy protection",
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Strategy & Consulting",
    icon: CompassIcon,
    summary:
      "Technical advisory, acquisition support, and digital transformation planning.",
    description:
      "Our engineers act as trusted advisors to program offices: evaluating technology options, shaping requirements, and building roadmaps grounded in what can actually be delivered.",
    capabilities: [
      "Digital transformation roadmaps",
      "Technical requirements and acquisition support",
      "Enterprise architecture",
      "Independent verification and validation (IV&V)",
      "Program and project management",
    ],
  },
]

export const differentiators = [
  {
    icon: MedalIcon,
    title: "Veteran-led",
    description:
      "Founded and led by a service-disabled veteran who understands the people and missions our software supports.",
  },
  {
    icon: CodeXmlIcon,
    title: "Engineering-first",
    description:
      "Our CEO is a software engineer. Technical decisions are made by people who have built and shipped production systems.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure by design",
    description:
      "Security, accessibility, and compliance are planned into the architecture from the first sprint, not bolted on at the end.",
  },
  {
    icon: UsersIcon,
    title: "Senior, accountable teams",
    description:
      "Small teams of experienced engineers with direct access to company leadership on every engagement.",
  },
]

export const setAsides = [
  "SDVOSB set-aside and sole-source awards",
  "VA Veterans First Contracting Program",
  "Small business set-asides",
  "Subcontracting and teaming with large primes",
]

export const agencies = [
  {
    name: "Department of Veterans Affairs",
    short: "VA",
    description:
      "Modern, accessible digital services for veterans and the people who care for them.",
  },
  {
    name: "Department of Defense",
    short: "DoD",
    description:
      "Secure, resilient software and DevSecOps for warfighters and defense enterprises.",
  },
  {
    name: "Federal Civilian Agencies",
    short: "Civilian",
    description:
      "Modernization, cloud, and data work for agencies across the civilian government.",
  },
  {
    name: "Prime Contractors",
    short: "Teaming",
    description:
      "A reliable SDVOSB subcontractor and teaming partner that helps primes meet small business goals.",
  },
]

export const values = [
  {
    title: "Mission First",
    description:
      "We measure success by outcomes for the people an agency serves, not by lines of code or hours billed.",
  },
  {
    title: "Integrity",
    description:
      "Honest estimates, transparent progress, and no surprises. We say what we will do, then do it.",
  },
  {
    title: "Engineering Excellence",
    description:
      "Founded by an engineer, run by engineers. We hold our work to production standards from day one.",
  },
  {
    title: "Service",
    description:
      "Military service taught us to take care of the team and the mission. We bring that to every engagement.",
  },
]

export const navItems = [
  { title: "Services", href: "/services" },
  { title: "Capabilities", href: "/capabilities" },
  { title: "About", href: "/about" },
  { title: "Careers", href: "/careers" },
]
