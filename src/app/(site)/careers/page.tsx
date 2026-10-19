import type { Metadata } from "next"
import {
  GraduationCapIcon,
  HeartHandshakeIcon,
  MailIcon,
  MedalIcon,
  RocketIcon,
} from "lucide-react"

import { site } from "@/lib/site"
import { PageHero, Section, SectionHeader } from "@/components/marketing/section"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join a veteran-owned team building mission-critical software for the VA, DoD, and federal agencies.",
}

const perks = [
  {
    icon: MedalIcon,
    title: "Veterans welcome",
    description:
      "We actively recruit veterans, transitioning service members, and military spouses.",
  },
  {
    icon: RocketIcon,
    title: "Meaningful work",
    description:
      "Your code supports veterans, warfighters, and public servants, not ad clicks.",
  },
  {
    icon: GraduationCapIcon,
    title: "Grow your craft",
    description:
      "Work alongside senior engineers with support for certifications and continued learning.",
  },
  {
    icon: HeartHandshakeIcon,
    title: "Small-team culture",
    description:
      "Direct access to leadership, real ownership, and a team that has your back.",
  },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build software that serves those who serve"
        description="We're growing a team of engineers, designers, and consultants who want their work to matter."
      />

      <Section>
        <SectionHeader eyebrow="Why join us" title="Work with purpose" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <Card key={p.title}>
              <CardHeader className="gap-3">
                <p.icon className="size-6 text-brand" />
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t bg-muted/40">
        <div className="mx-auto max-w-2xl space-y-5 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Open positions
          </h2>
          <p className="text-lg text-muted-foreground">
            We don&apos;t have any open roles posted right now, but we&apos;re
            always glad to meet talented people. Many federal roles require the
            ability to obtain a security clearance or Public Trust.
          </p>
          <Button asChild size="lg" className="h-11 px-5">
            <a href={`mailto:${site.careersEmail}`}>
              <MailIcon data-icon="inline-start" />
              Send us your résumé
            </a>
          </Button>
        </div>
      </Section>
    </>
  )
}
