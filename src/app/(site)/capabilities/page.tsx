import type { Metadata } from "next"
import Link from "next/link"
import { BadgeCheckIcon, FileTextIcon } from "lucide-react"

import {
  certifications,
  companyData,
  naicsCodes,
  services,
  setAsides,
  site,
} from "@/lib/site"
import { CtaBand } from "@/components/marketing/cta-band"
import { SdvosbBadge } from "@/components/marketing/sdvosb-badge"
import { VerifyLinks } from "@/components/marketing/verify-links"
import { PageHero, Section, SectionHeader } from "@/components/marketing/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Tepnology capability statement: SDVOSB and minority-owned small business, NAICS codes, company identifiers, and core competencies.",
}

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capability Statement"
        title="Everything a contracting officer needs, in one place"
        description="Company identifiers, socioeconomic status, NAICS codes, and core competencies for market research and teaming."
      >
        <div className="flex flex-wrap gap-3 pt-4">
          {site.capabilityStatementUrl ? (
            <Button asChild size="lg" className="h-11 px-5">
              <a href={site.capabilityStatementUrl} download>
                <FileTextIcon data-icon="inline-start" />
                Download PDF
              </a>
            </Button>
          ) : (
            <Button asChild size="lg" className="h-11 px-5">
              <Link href="/contact?topic=capability-statement">
                <FileTextIcon data-icon="inline-start" />
                Request capability statement
              </Link>
            </Button>
          )}
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Company data</CardTitle>
              <CardDescription>{site.legalName}</CardDescription>
            </CardHeader>
            <CardContent>
              <dl className="divide-y">
                {companyData.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between gap-4 py-3 first:pt-0 last:pb-0"
                  >
                    <dt className="text-muted-foreground">{row.label}</dt>
                    <dd className="text-right font-mono font-medium">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <VerifyLinks variant="list" className="mt-5" />
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>NAICS codes</CardTitle>
              <CardDescription>
                North American Industry Classification System
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="divide-y">
                {naicsCodes.map((n, i) => (
                  <li
                    key={n.code}
                    className="flex items-center gap-4 py-3 first:pt-0 last:pb-0"
                  >
                    <span className="font-mono font-semibold text-primary">
                      {n.code}
                    </span>
                    <span className="flex-1">{n.title}</span>
                    {i === 0 && <Badge variant="secondary">Primary</Badge>}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="border-y bg-muted/40">
        <SectionHeader
          eyebrow="Socioeconomic status"
          title="Certifications and contracting advantages"
        />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-3">
            {certifications.map((c) => (
              <Card key={c.short}>
                <CardHeader className="gap-3">
                  {c.short === "SDVOSB" ? (
                    <SdvosbBadge className="w-14" />
                  ) : (
                    <BadgeCheckIcon className="size-6 text-brand" />
                  )}
                  <CardTitle>{c.short}</CardTitle>
                  <CardDescription>{c.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Eligible for</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                {setAsides.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Core competencies" title="What we deliver" />
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.slug} className="space-y-2">
              <h3 className="flex items-center gap-2 font-semibold">
                <s.icon className="size-5 text-brand" />
                {s.title}
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {s.capabilities.slice(0, 4).map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Teaming or market research?"
        description="We respond quickly to sources sought notices, RFIs, and teaming inquiries. Reach out and we'll send a tailored capability statement."
      />
    </>
  )
}
