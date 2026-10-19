import Link from "next/link"
import { ArrowRightIcon, BadgeCheckIcon } from "lucide-react"

import {
  agencies,
  certifications,
  differentiators,
  naicsCodes,
  services,
} from "@/lib/site"
import { LogoStacked } from "@/components/logo"
import { CtaBand } from "@/components/marketing/cta-band"
import { SdvosbBadge } from "@/components/marketing/sdvosb-badge"
import { VerifyLinks } from "@/components/marketing/verify-links"
import { Eyebrow, Section, SectionHeader } from "@/components/marketing/section"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const approach = [
  {
    step: "01",
    title: "Understand the mission",
    description:
      "We start with end users and stakeholders to define the outcomes that matter and the constraints we must respect.",
  },
  {
    step: "02",
    title: "Deliver in increments",
    description:
      "Short, agile iterations put working software in front of users early, reducing risk and building confidence.",
  },
  {
    step: "03",
    title: "Secure and accredit",
    description:
      "Automated testing, security scanning, and documentation support a smooth path to an Authority to Operate.",
  },
  {
    step: "04",
    title: "Sustain and improve",
    description:
      "We hand off cleanly or stay on for operations, with monitoring and continuous improvement built in.",
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredentialStrip />

      <Section id="services">
        <SectionHeader
          eyebrow="What we do"
          title="Software and technology services for the federal mission"
          description="From greenfield applications to modernizing systems that have run for decades, we bring commercial-grade engineering to government programs."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="group rounded-xl focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <Card className="h-full transition-shadow group-hover:shadow-md group-hover:ring-brand/40">
                <CardHeader className="gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-brand">
                    <service.icon className="size-5" />
                  </div>
                  <CardTitle className="text-base">{service.title}</CardTitle>
                  <CardDescription>{service.summary}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-y bg-muted/40">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionHeader
            className="mb-0"
            eyebrow="Why Tepnology"
            title="Built by people who have served, and who write code"
            description="We combine a veteran's sense of duty with an engineer's discipline. You get a small, accountable team that cares about the mission as much as you do."
          />
          <div className="grid gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border bg-background text-brand">
                  <item.icon className="size-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Who we serve"
          title="Focused on the agencies where we can make the most impact"
        />
        <div className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {agencies.map((agency) => (
            <div key={agency.name} className="space-y-3 bg-card p-6">
              <p className="font-mono text-2xl font-semibold text-primary">
                {agency.short}
              </p>
              <h3 className="font-medium">{agency.name}</h3>
              <p className="text-sm text-muted-foreground">
                {agency.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t bg-muted/40">
        <SectionHeader
          eyebrow="How we work"
          title="A delivery approach designed to reduce risk"
        />
        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {approach.map((item) => (
            <li key={item.step} className="space-y-3 border-t-2 border-primary pt-5">
              <p className="font-mono text-sm text-brand">{item.step}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand />
    </>
  )
}

function Hero() {
  return (
    <section className="dark relative overflow-hidden bg-background text-foreground">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 size-[36rem] rounded-full bg-brand/15 blur-3xl"
      />
      <div className="container-page relative grid items-center gap-12 py-24 md:py-32 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-7">
          <Eyebrow>SDVOSB · Minority-Owned Small Business</Eyebrow>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Mission-ready software for those who serve.
          </h1>
          <p className="max-w-xl text-lg text-pretty text-muted-foreground md:text-xl">
            Tepnology is a veteran-led technology consulting firm building
            secure, modern software for the VA, DoD, and federal civilian
            agencies.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-11 px-5">
              <Link href="/contact">
                Partner with us
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 px-5">
              <Link href="/services">Explore services</Link>
            </Button>
          </div>
        </div>
        <div className="hidden justify-center lg:flex">
          <LogoStacked className="w-80 text-foreground/85 drop-shadow-[0_0_60px_var(--color-brand)]" />
        </div>
      </div>
    </section>
  )
}

function CredentialStrip() {
  return (
    <section aria-label="Credentials" className="border-b bg-card">
      <div className="container-page grid gap-6 py-8 md:grid-cols-[auto_repeat(3,auto)_1fr] md:items-center md:gap-10">
        <SdvosbBadge className="w-14" />
        {certifications.map((c) => (
          <div key={c.short} className="flex items-center gap-3">
            <BadgeCheckIcon className="size-5 shrink-0 text-brand" />
            <span className="text-sm font-medium">{c.name}</span>
          </div>
        ))}
        <div className="space-y-1 md:text-right">
          <p className="font-mono text-xs text-muted-foreground">
            NAICS {naicsCodes.slice(0, 3).map((n) => n.code).join(" · ")}
          </p>
          <VerifyLinks className="md:justify-end" />
        </div>
      </div>
    </section>
  )
}
