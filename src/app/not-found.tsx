import Link from "next/link"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
    <section className="container-page flex flex-col items-center gap-5 py-32 text-center">
      <p className="font-mono text-sm tracking-widest text-brand">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </section>
      </main>
      <SiteFooter />
    </>
  )
}
