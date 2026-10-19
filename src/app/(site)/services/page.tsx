import type { Metadata } from "next"
import { CheckIcon } from "lucide-react"

import { services } from "@/lib/site"
import { CtaBand } from "@/components/marketing/cta-band"
import { PageHero, Section } from "@/components/marketing/section"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software engineering, legacy modernization, cloud and DevSecOps, cybersecurity, data and AI, and IT consulting for federal agencies.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end technology delivery for government programs"
        description="Six core service areas, delivered by senior engineers who understand federal security, accessibility, and acquisition requirements."
      >
        <nav aria-label="Service areas" className="flex flex-wrap gap-2 pt-4">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <Section>
        <div className="space-y-16">
          {services.map((service, i) => (
            <div key={service.slug} className="space-y-16">
              {i > 0 && <Separator />}
              <article
                id={service.slug}
                className="grid scroll-mt-24 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16"
              >
                <div className="space-y-4">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent text-brand">
                    <service.icon className="size-6" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div className="rounded-xl border bg-muted/40 p-6">
                  <h3 className="mb-4 font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    Capabilities
                  </h3>
                  <ul className="space-y-3">
                    {service.capabilities.map((c) => (
                      <li key={c} className="flex gap-3">
                        <CheckIcon className="mt-0.5 size-5 shrink-0 text-brand" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Have a requirement in mind?" />
    </>
  )
}
