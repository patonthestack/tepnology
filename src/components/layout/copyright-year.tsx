import { cacheLife } from "next/cache"

// Cached so the prerendered shell can include the year (Cache Components disallows raw clock reads).
export async function CopyrightYear() {
  "use cache"
  cacheLife("days")
  return <>{new Date().getFullYear()}</>
}
