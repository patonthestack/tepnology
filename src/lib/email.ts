import "server-only"

import { Resend } from "resend"

import { site } from "@/lib/site"

export type Inquiry = {
  name: string
  email: string
  organization?: string
  topic: string
  message: string
}

/**
 * Emails a contact-form inquiry to the team via Resend.
 *
 * Env:
 *   RESEND_API_KEY      required in production
 *   CONTACT_TO_EMAIL    inbox that receives inquiries (defaults to site.email)
 *   CONTACT_FROM_EMAIL  sender on your verified domain, e.g. "Tepnology Website <website@tepnology.com>".
 *                       Defaults to Resend's test sender, which only delivers to your Resend account email.
 */
export async function sendInquiry(inquiry: Inquiry): Promise<{ ok: boolean }> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      console.error("[contact] RESEND_API_KEY is not set; inquiry not delivered")
      return { ok: false }
    }
    console.info("[contact] RESEND_API_KEY not set; logging instead of sending", inquiry)
    return { ok: true }
  }

  const resend = new Resend(apiKey)
  const from = process.env.CONTACT_FROM_EMAIL ?? `${site.name} Website <onboarding@resend.dev>`
  const to = process.env.CONTACT_TO_EMAIL ?? site.email

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: inquiry.email,
      subject: `Website inquiry: ${inquiry.topic} from ${inquiry.name}`,
      text: toText(inquiry),
      html: toHtml(inquiry),
    })
    if (error) {
      console.error("[contact] Resend rejected the email", error)
      return { ok: false }
    }
    return { ok: true }
  } catch (err) {
    console.error("[contact] Failed to reach Resend", err)
    return { ok: false }
  }
}

function fields(inquiry: Inquiry): [string, string][] {
  return [
    ["Name", inquiry.name],
    ["Email", inquiry.email],
    ["Organization", inquiry.organization || "Not provided"],
    ["Topic", inquiry.topic],
  ]
}

function toText(inquiry: Inquiry) {
  return [
    ...fields(inquiry).map(([k, v]) => `${k}: ${v}`),
    "",
    inquiry.message,
    "",
    "Reply to this email to respond directly to the sender.",
  ].join("\n")
}

function toHtml(inquiry: Inquiry) {
  const rows = fields(inquiry)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 16px 4px 0;color:#6b7080">${k}</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`
    )
    .join("")
  return `<div style="font-family:system-ui,sans-serif;font-size:14px;color:#24252b">
<h2 style="margin:0 0 12px;font-size:18px;color:#14213d">New website inquiry</h2>
<table style="border-collapse:collapse">${rows}</table>
<div style="margin-top:16px;padding:12px 16px;background:#f1f3f8;border-radius:6px;white-space:pre-wrap">${escapeHtml(inquiry.message)}</div>
<p style="margin-top:16px;color:#6b7080;font-size:12px">Reply to this email to respond directly to the sender.</p>
</div>`
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
