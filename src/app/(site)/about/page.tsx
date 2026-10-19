import type { Metadata } from "next"

import { certifications, founder, site, values } from "@/lib/site"
import { LogoMark } from "@/components/logo"
import { CtaBand } from "@/components/marketing/cta-band"
import { PageHero, Section, SectionHeader } from "@/components/marketing/section"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About",
  description:
    "Tepnology is a Service-Disabled Veteran-Owned, minority-owned technology firm founded by a software engineer and veteran.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Tepnology"
        title="A veteran-owned firm with an engineer's mindset"
        description={`${site.name} was founded to bring the rigor of modern software engineering to the agencies that serve our country, and the people who served it.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5 text-lg text-muted-foreground">
            <SectionHeader className="mb-2" eyebrow="Our story" title="Why we exist" />
            <p>
              Government technology programs too often stall on outdated
              systems, oversized teams, and solutions that look good on paper
              but fail in the hands of real users. We started {site.name} to do
              it differently.
            </p>
            <p>
              We&apos;re a small business by design: senior engineers, short
              feedback loops, and direct access to leadership on every
              engagement. Our motto sums it up:{" "}
              <span className="text-foreground italic">
                &ldquo;{site.tagline}.&rdquo;
              </span>{" "}
              A veteran&apos;s sense of purpose, applied with an
              engineer&apos;s discipline.
            </p>
          </div>

          <Card className="self-start">
            <CardHeader className="gap-5">
              <div className="flex items-center gap-4">
                <div className="flex size-16 items-center justify-center rounded-full bg-accent text-primary">
                  <LogoMark className="size-8" />
                </div>
                <div>
                  <CardTitle className="text-lg">{founder.name}</CardTitle>
                  <CardDescription>{founder.title}</CardDescription>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Service-Disabled Veteran</Badge>
                <Badge variant="secondary">Software Engineer</Badge>
              </div>
              <div className="space-y-3 text-muted-foreground">
                {founder.bio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </CardHeader>
          </Card>
        </div>
      </Section>

      <Section className="border-y bg-muted/40">
        <SectionHeader
          eyebrow="Our values"
          title="The principles we bring from the service to the codebase"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <Card key={v.title}>
              <CardHeader className="gap-2">
                <CardTitle>{v.title}</CardTitle>
                <CardDescription>{v.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Ownership"
          title="Certified small business, diverse by ownership"
          description="Our status lets agencies and prime contractors meet their socioeconomic goals while getting a technically strong partner."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {certifications.map((c) => (
            <div key={c.short} className="space-y-2 border-l-2 border-brand pl-5">
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-muted-foreground">{c.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
