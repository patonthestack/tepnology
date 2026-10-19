import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CtaBand({
  title = "Let's talk about your mission.",
  description = "Whether you're a program office planning an acquisition or a prime looking for an SDVOSB teaming partner, we'd like to hear from you.",
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="dark relative overflow-hidden bg-background text-foreground">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="container-page relative flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            {title}
          </h2>
          <p className="text-lg text-pretty text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="h-11 px-5">
            <Link href="/contact">
              Start a conversation
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11 px-5">
            <Link href="/capabilities">Capability statement</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
