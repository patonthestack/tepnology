import { cn } from "@/lib/utils"

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("py-20 md:py-28", className)} {...props}>
      <div className="container-page">{children}</div>
    </section>
  )
}

export function Eyebrow({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-brand uppercase",
        className
      )}
    >
      <span aria-hidden className="h-px w-6 bg-current" />
      {children}
    </p>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl space-y-4",
        align === "center" && "mx-auto text-center [&>p:first-child]:justify-center",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-pretty text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

/** Dark, gridded intro band at the top of interior pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  description: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section className="dark relative overflow-hidden border-b bg-background text-foreground">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
      <div className="container-page relative space-y-5 py-20 md:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg text-pretty text-muted-foreground">
          {description}
        </p>
        {children}
      </div>
    </section>
  )
}
