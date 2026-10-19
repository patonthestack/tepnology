import Link from "next/link"

import { certifications, navItems, services, site } from "@/lib/site"
import { Logo } from "@/components/logo"
import { CopyrightYear } from "@/components/layout/copyright-year"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            {site.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {certifications.map((c) => (
              <span
                key={c.short}
                className="rounded-md border bg-background px-2 py-1 font-mono text-[0.7rem] tracking-wider text-muted-foreground uppercase"
              >
                {c.short}
              </span>
            ))}
          </div>
        </div>

        <FooterColumn title="Services">
          {services.map((s) => (
            <FooterLink key={s.slug} href={`/services#${s.slug}`}>
              {s.title}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Company">
          {navItems.map((item) => (
            <FooterLink key={item.href} href={item.href}>
              {item.title}
            </FooterLink>
          ))}
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterColumn>

        <FooterColumn title="Get in touch">
          <FooterLink href={`mailto:${site.email}`}>{site.email}</FooterLink>
          {site.phone && (
            <FooterLink href={`tel:${site.phone}`}>{site.phone}</FooterLink>
          )}
          <li className="text-sm text-muted-foreground">{site.location}</li>
          {site.linkedin && (
            <FooterLink href={site.linkedin}>LinkedIn</FooterLink>
          )}
        </FooterColumn>
      </div>

      <Separator />
      <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <CopyrightYear /> {site.legalName}. All rights reserved.
        </p>
        <p>Service-Disabled Veteran-Owned · Minority-Owned Small Business</p>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className="mb-4 font-mono text-xs font-semibold tracking-widest text-foreground uppercase">
        {title}
      </h2>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
      </Link>
    </li>
  )
}
