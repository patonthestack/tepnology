import type { Metadata } from "next"

import {
  certifications,
  differentiators,
  founder,
  naicsCodes,
  services,
  setAsides,
  site,
  verificationLinks,
} from "@/lib/site"
import { LogoMark, Wordmark } from "@/components/logo"
import { SdvosbBadge } from "@/components/marketing/sdvosb-badge"
import { PrintToolbar } from "./print-toolbar"

export const metadata: Metadata = {
  title: "Capability Statement",
  description: `${site.name} capability statement.`,
  robots: { index: false },
}

/**
 * One-page US Letter capability statement, generated from src/lib/site.ts.
 * Uses fixed print colors so it looks the same in either site theme.
 * Export with `yarn capability-statement` (see scripts/).
 */
export default function CapabilityStatementPage() {
  const domain = site.url.replace(/^https?:\/\//, "")

  return (
    <div className="min-h-screen bg-neutral-200 py-8 print:bg-white print:p-0">
      <style>{`@page { size: letter; margin: 0; }`}</style>
      <PrintToolbar />

      <article className="mx-auto flex h-[11in] w-[8.5in] flex-col overflow-hidden bg-white text-[9pt] leading-snug text-[#24252b] shadow-xl print:shadow-none [print-color-adjust:exact]">
        <header className="flex items-center justify-between bg-[#14213d] px-[0.5in] py-[0.3in] text-white">
          <div className="flex items-center gap-3">
            <LogoMark className="size-11 text-white" />
            <div>
              <Wordmark className="h-[13pt]" />
              <span className="sr-only">{site.name}</span>
              <p className="mt-1.5 text-[8.5pt] tracking-wide text-[#a9c1ef]">
                {site.tagline}
              </p>
            </div>
          </div>
          <div className="text-right">
            <h1 className="text-[17pt] font-semibold tracking-tight">
              Capability Statement
            </h1>
            <p className="font-mono text-[7.5pt] tracking-widest text-[#a9c1ef] uppercase">
              SDVOSB · Minority-Owned Small Business
            </p>
          </div>
        </header>

        <div className="grid flex-1 grid-cols-[1fr_2.35in] gap-[0.3in] px-[0.5in] py-[0.3in]">
          <div className="space-y-[0.2in]">
            <Block title="Company Overview">
              <p>{site.description}</p>
              <p className="mt-1.5">
                Founded by {founder.name}, a service-disabled veteran and
                software engineer, {site.name} pairs a deep understanding of
                the mission with senior engineering talent, delivering in
                short, transparent increments with security and accessibility
                built in from day one.
              </p>
            </Block>

            <Block title="Core Competencies">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {services.map((s) => (
                  <div key={s.slug}>
                    <h3 className="flex items-center gap-1.5 font-semibold text-[#14213d]">
                      <s.icon className="size-3.5 text-[#2f6fde]" />
                      {s.title}
                    </h3>
                    <ul className="mt-0.5 space-y-px text-[8pt] text-[#4b4d57]">
                      {s.capabilities.slice(0, 4).map((c) => (
                        <li key={c} className="flex gap-1.5">
                          <span aria-hidden className="text-[#2f6fde]">›</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Differentiators">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {differentiators.map((d) => (
                  <div key={d.title}>
                    <h3 className="font-semibold text-[#14213d]">{d.title}</h3>
                    <p className="text-[8pt] text-[#4b4d57]">{d.description}</p>
                  </div>
                ))}
              </div>
            </Block>
          </div>

          <aside className="space-y-[0.18in] rounded-md bg-[#f1f3f8] p-[0.18in]">
            <Block title="Company Data">
              <dl className="space-y-1">
                <Row label="Legal name" value={site.legalName} />
                <Row label="UEI" value={site.uei} mono />
                <Row label="CAGE Code" value={site.cage} mono />
                <Row label="SDVOSB cert." value="SBA VetCert" />
                <Row label="Location" value={site.location} />
              </dl>
              <p className="mt-2 text-[7.5pt] text-[#4b4d57]">
                Verify:{" "}
                {verificationLinks.map((link, i) => (
                  <span key={link.href}>
                    {i > 0 && " · "}
                    <a href={link.href} className="font-semibold text-[#2f6fde] underline">
                      {link.shortLabel}
                    </a>
                  </span>
                ))}
              </p>
            </Block>

            <Block title="NAICS Codes">
              <ul className="space-y-1 text-[8pt]">
                {naicsCodes.map((n) => (
                  <li key={n.code} className="flex gap-2">
                    <span className="font-mono font-semibold text-[#14213d]">
                      {n.code}
                    </span>
                    <span className="text-[#4b4d57]">{n.title}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Socioeconomic Status">
              <div className="flex items-start gap-3">
                <ul className="flex-1 space-y-0.5 text-[8pt]">
                  {certifications.map((c) => (
                    <li key={c.short} className="flex gap-1.5">
                      <span aria-hidden className="text-[#2f6fde]">✓</span>
                      {c.name}
                    </li>
                  ))}
                </ul>
                <SdvosbBadge priority className="w-[0.62in]" />
              </div>
            </Block>

            <Block title="Eligible For">
              <ul className="space-y-0.5 text-[8pt]">
                {setAsides.map((s) => (
                  <li key={s} className="flex gap-1.5">
                    <span aria-hidden className="text-[#2f6fde]">›</span>
                    {s}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Point of Contact">
              <p className="font-semibold text-[#14213d]">{founder.name}</p>
              <p className="text-[8pt] text-[#4b4d57]">{founder.title}</p>
              <p className="mt-1 text-[8pt]">{site.email}</p>
              {site.phone && <p className="text-[8pt]">{site.phone}</p>}
              <p className="text-[8pt]">{domain}</p>
            </Block>
          </aside>
        </div>

        <footer className="flex items-center justify-between border-t-4 border-[#2f6fde] bg-[#14213d] px-[0.5in] py-[0.14in] text-[8pt] text-[#c9d3e6]">
          <span>{domain}</span>
          <span>{site.email}</span>
          <span className="font-mono">
            UEI {site.uei} · CAGE {site.cage}
          </span>
        </footer>
      </article>
    </div>
  )
}

function Block({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="mb-1.5 border-b border-[#d5dae5] pb-1 font-mono text-[7.5pt] font-semibold tracking-[0.18em] text-[#2f6fde] uppercase">
        {title}
      </h2>
      {children}
    </section>
  )
}

function Row({
  label,
  value,
  mono,
}: {
  label: string
  value: string
  mono?: boolean
}) {
  return (
    <div className="flex justify-between gap-2 text-[8pt]">
      <dt className="text-[#4b4d57]">{label}</dt>
      <dd className={mono ? "font-mono font-semibold" : "text-right font-medium"}>
        {value}
      </dd>
    </div>
  )
}
