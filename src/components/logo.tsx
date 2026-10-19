import { useId } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { site } from "@/lib/site"

/*
 * Official Tepnology vector geometry (from the brand SVG, 1920×1080 artboard).
 * Shapes are filled with currentColor so the logo follows the theme.
 */
export const MARK_POLYGONS = {
  left: "787.93 323.9 950.45 417.45 950.45 631.43 907.34 588.75 879.77 459.45 788.27 408.23 787.93 323.9",
  top: "798.17 308.88 958.64 402.43 1119.79 308.88 1046.73 266.54 958.98 318.1 870.9 267.57 798.17 308.88",
  right:
    "1132.07 320.75 1131.75 409.44 1040.02 460.79 1012.53 589.78 983.38 618.64 970.81 631.09 970.81 625.26 983.38 612.81 1008.74 587.72 1036.37 458.1 1037.18 457.64 1127.63 407.02 1127.93 323.14 1132.07 320.75",
}

export const WORDMARK_PATHS = [
  "M596.42,766.54V724.87H580.8a10.07,10.07,0,0,1-7.41-3,10.23,10.23,0,0,1-3-7.41h62.51a9.92,9.92,0,0,1-3.1,7.41,10.12,10.12,0,0,1-7.32,3H606.84v41.67Z",
  "M670.39,724.87a10.07,10.07,0,0,1-7.41-3,10.27,10.27,0,0,1-3-7.41h62.51a10,10,0,0,1-3.09,7.41,10.16,10.16,0,0,1-7.33,3Zm0,20.84a10.11,10.11,0,0,1-7.41-3,10.29,10.29,0,0,1-3-7.41h62.51a10,10,0,0,1-3.09,7.41,10.2,10.2,0,0,1-7.33,3Zm0,20.83a10.07,10.07,0,0,1-7.41-3,10.26,10.26,0,0,1-3-7.4h62.51a9.91,9.91,0,0,1-3.09,7.4,10.16,10.16,0,0,1-7.33,3Z",
  "M749.56,766.54V735.29h46.88a5.2,5.2,0,0,0,3.67-1.46,5.1,5.1,0,0,0,1.54-3.75v-5.21H749.56V714.45h62.51v20.84A10,10,0,0,1,809,742.7a10.2,10.2,0,0,1-7.33,3H760v20.83Z",
  "M849.57,766.54V724.87l-10.41-10.42h15.62l36.46,36.47V714.45h10.42v52.09H891.24L860,735.29v31.25Z",
  "M939.16,724.87a10,10,0,0,1-7.4-3,10.23,10.23,0,0,1-3-7.41h62.5a10,10,0,0,1-3.09,7.41,10.13,10.13,0,0,1-7.33,3Zm-10.41,41.67V735.29h10.41v20.84h41.67V735.29h10.42v31.25Z",
  "M1018.34,766.54V714.45h10.42v41.68h52.08a9.91,9.91,0,0,1-3.09,7.4,10.12,10.12,0,0,1-7.32,3Z",
  "M1118.35,724.87a10.07,10.07,0,0,1-7.41-3,10.23,10.23,0,0,1-3-7.41h62.51a10,10,0,0,1-3.1,7.41,10.12,10.12,0,0,1-7.32,3Zm-10.42,41.67V735.29h10.42v20.84H1160V735.29h10.42v31.25Z",
  "M1197.52,724.87V714.45H1260a10,10,0,0,1-3.09,7.41,10.16,10.16,0,0,1-7.33,3Zm10.42,41.67a10.07,10.07,0,0,1-7.41-3,10.26,10.26,0,0,1-3-7.4V735.29h10.42v15.63a5,5,0,0,0,5.21,5.21h36.46V745.71h-20.84a10.1,10.1,0,0,1-7.4-3,10.25,10.25,0,0,1-3-7.41H1260v31.25Z",
  "M1313.16,766.54V750.92l-26.05-26V714.45h10.42v5.21l20.84,20.84,20.83-20.84v-5.21h10.42v10.42l-26,26v15.62Z",
]

/** viewBoxes cropped to the artwork (the source artboard has lots of padding). */
const MARK_VIEWBOX = "786 265 348 368"
const WORDMARK_VIEWBOX = "569 713 777 55"
const STACKED_VIEWBOX = "569 265 777 503"

/** Brushed-metal sheen from the original artwork, rebuilt with currentColor opacity. */
function MarkShapes() {
  const id = `tep-sheen-${useId().replace(/[^\w-]/g, "")}`
  return (
    <>
      <defs>
        <linearGradient
          id={id}
          x1="787"
          y1="266"
          x2="1132"
          y2="631"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="currentColor" stopOpacity="0.72" />
          <stop offset="0.32" stopColor="currentColor" />
          <stop offset="0.52" stopColor="currentColor" stopOpacity="0.78" />
          <stop offset="0.66" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="1" stopColor="currentColor" />
        </linearGradient>
      </defs>
      <polygon points={MARK_POLYGONS.left} fill={`url(#${id})`} />
      <polygon points={MARK_POLYGONS.top} fill={`url(#${id})`} />
      {/* The right outline is very thin; a 1px non-scaling stroke keeps it visible at favicon/header sizes. */}
      <polygon
        points={MARK_POLYGONS.right}
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </>
  )
}

function WordmarkShapes() {
  return (
    <g fill="currentColor">
      {WORDMARK_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </g>
  )
}

/** The "T" icon on its own. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      aria-hidden="true"
      className={cn("size-7", className)}
    >
      <MarkShapes />
    </svg>
  )
}

/** The custom TEPNOLOGY lettering on its own. Size it by height. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={WORDMARK_VIEWBOX}
      aria-hidden="true"
      className={cn("h-3 w-auto", className)}
    >
      <WordmarkShapes />
    </svg>
  )
}

/** Icon above the name, as in the original brand artwork. Size it by width. */
export function LogoStacked({ className }: { className?: string }) {
  return (
    <svg
      viewBox={STACKED_VIEWBOX}
      role="img"
      aria-label={site.name}
      className={cn("h-auto w-48", className)}
    >
      <MarkShapes />
      <WordmarkShapes />
    </svg>
  )
}

/** Horizontal lockup used in the header and footer; links home. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn("flex items-center gap-2.5 text-foreground", className)}
    >
      <LogoMark />
      <Wordmark />
    </Link>
  )
}
