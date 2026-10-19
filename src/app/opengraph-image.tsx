import { ImageResponse } from "next/og"

import { site } from "@/lib/site"
import { MARK_POLYGONS, WORDMARK_PATHS } from "@/components/logo"

export const alt = `${site.name}: ${site.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const lockup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="569 265 777 503" fill="#ffffff">${Object.values(
  MARK_POLYGONS
)
  .map((points) => `<polygon points="${points}"/>`)
  .join("")}${WORDMARK_PATHS.map((d) => `<path d="${d}"/>`).join("")}</svg>`

/** Social preview card (LinkedIn, email, Slack, etc.) for every page. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 44,
          background:
            "radial-gradient(circle at 75% 0%, #23407a 0%, #14213d 55%, #0d1526 100%)",
          color: "#ffffff",
        }}
      >
        <img
          alt=""
          width={466}
          height={302}
          src={`data:image/svg+xml;utf8,${encodeURIComponent(lockup)}`}
        />
        <div style={{ display: "flex", fontSize: 34, color: "#a9c1ef" }}>
          {site.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: 6,
            color: "#c9d3e6",
            textTransform: "uppercase",
          }}
        >
          SDVOSB · Minority-Owned Small Business
        </div>
      </div>
    ),
    size
  )
}
