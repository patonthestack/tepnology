import Image from "next/image"

import { cn } from "@/lib/utils"

/**
 * Official SBA "Service-Disabled Veteran-Owned Certified" icon, from SBA's
 * decals-and-icons package. SBA rules: use unaltered (resizing is fine), only
 * while VetCert-certified, and only on the website, business cards, social
 * profiles, capability statements and proposals. Never in ads or letterhead,
 * and never in a way that implies SBA endorsement.
 */
export function SdvosbBadge({
  className,
  priority,
}: {
  className?: string
  priority?: boolean
}) {
  return (
    <Image
      src="/brand/sba-sdvosb-certified.png"
      alt="SBA Service-Disabled Veteran-Owned Certified"
      width={1210}
      height={1513}
      priority={priority}
      className={cn("h-auto w-16 shrink-0", className)}
    />
  )
}
