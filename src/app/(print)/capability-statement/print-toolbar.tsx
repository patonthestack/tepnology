"use client"

import Link from "next/link"
import { ArrowLeftIcon, PrinterIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function PrintToolbar() {
  return (
    <div className="mx-auto flex w-[8.5in] max-w-full items-center justify-between gap-4 pb-4 print:hidden">
      <Button asChild variant="ghost">
        <Link href="/capabilities">
          <ArrowLeftIcon data-icon="inline-start" />
          Back to site
        </Link>
      </Button>
      <Button onClick={() => window.print()}>
        <PrinterIcon data-icon="inline-start" />
        Print / Save as PDF
      </Button>
    </div>
  )
}
