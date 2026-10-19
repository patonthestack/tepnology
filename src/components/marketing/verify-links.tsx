import { ArrowUpRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { verificationLinks } from "@/lib/site"

/** Outbound links to public SAM.gov / SBA profiles so buyers can verify our status. */
export function VerifyLinks({
  variant = "inline",
  className,
}: {
  variant?: "inline" | "list"
  className?: string
}) {
  if (variant === "list") {
    return (
      <ul className={cn("space-y-2", className)}>
        {verificationLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-3 rounded-lg border bg-background px-3 py-2.5 transition-colors hover:border-brand"
            >
              <span>
                <span className="block text-sm font-medium">
                  Verify on {link.label}
                </span>
                <span className="block text-xs text-muted-foreground">
                  {link.description}
                </span>
              </span>
              <ArrowUpRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <p className={cn("flex flex-wrap items-center gap-x-3 gap-y-1 text-xs", className)}>
      <span className="text-muted-foreground">Verify:</span>
      {verificationLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 font-medium text-primary hover:underline"
        >
          {link.label}
          <ArrowUpRightIcon className="size-3" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ))}
    </p>
  )
}
