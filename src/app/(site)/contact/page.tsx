import type { Metadata } from "next"
import { Suspense } from "react"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { companyData, site } from "@/lib/site"
import { PageHero, Section } from "@/components/marketing/section"
import { VerifyLinks } from "@/components/marketing/verify-links"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tepnology about federal software projects, SDVOSB teaming opportunities, or our capability statement.",
}

export default function ContactPage() {
  const identifiers = companyData.filter((d) =>
    ["UEI", "CAGE Code"].includes(d.label)
  )

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your mission"
        description="Tell us about your program, requirement, or teaming opportunity. We typically respond within one business day."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <aside className="space-y-8">
            <ContactItem icon={MailIcon} label="Email">
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </ContactItem>
            {site.phone && (
              <ContactItem icon={PhoneIcon} label="Phone">
                <a href={`tel:${site.phone}`} className="hover:underline">
                  {site.phone}
                </a>
              </ContactItem>
            )}
            <ContactItem icon={MapPinIcon} label="Location">
              {site.location}
            </ContactItem>
            <div className="rounded-xl border bg-muted/40 p-5">
              <h2 className="mb-3 font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                For contracting officers
              </h2>
              <dl className="space-y-2 text-sm">
                {identifiers.map((d) => (
                  <div key={d.label} className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{d.label}</dt>
                    <dd className="font-mono font-medium">{d.value}</dd>
                  </div>
                ))}
              </dl>
              <VerifyLinks className="mt-3 border-t pt-3" />
            </div>
          </aside>

          <Suspense fallback={<div className="h-[34rem] rounded-xl border bg-card" />}>
            <ContactForm />
          </Suspense>
        </div>
      </Section>
    </>
  )
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-brand">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{children}</p>
      </div>
    </div>
  )
}
