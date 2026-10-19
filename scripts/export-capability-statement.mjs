// Renders /capability-statement to public/tepnology-capability-statement.pdf
// using a locally installed Chrome. Start the app first (`yarn dev` or `yarn start`).
//
//   yarn capability-statement
//   BASE_URL=http://localhost:3123 CHROME_PATH=/path/to/chrome yarn capability-statement

import { execFileSync } from "node:child_process"
import { existsSync, mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000"
const output = resolve("public/tepnology-capability-statement.pdf")

const candidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean)
const chrome = candidates.find((p) => existsSync(p))
if (!chrome) {
  console.error("Chrome not found. Set CHROME_PATH to a Chrome/Chromium binary.")
  process.exit(1)
}

const res = await fetch(`${baseUrl}/capability-statement`).catch(() => null)
if (!res?.ok) {
  console.error(`Could not load ${baseUrl}/capability-statement. Is the app running?`)
  process.exit(1)
}

const profile = mkdtempSync(join(tmpdir(), "capstmt-"))
try {
  execFileSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      `--user-data-dir=${profile}`,
      "--no-pdf-header-footer",
      "--virtual-time-budget=5000",
      `--print-to-pdf=${output}`,
      `${baseUrl}/capability-statement`,
    ],
    { stdio: "ignore" }
  )
} finally {
  rmSync(profile, { recursive: true, force: true })
}

console.log(`Wrote ${output}`)
