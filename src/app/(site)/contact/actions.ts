"use server"

import { z } from "zod"

import { sendInquiry } from "@/lib/email"
import { site } from "@/lib/site"
import { contactSchema, topics, type ContactState } from "./schema"

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: real users never see or fill this field.
  if (formData.get("company_website")) return { status: "success" }

  const raw = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    organization: formData.get("organization")?.toString() || undefined,
    topic: formData.get("topic")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
  }

  const parsed = contactSchema.safeParse(raw)
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
      values: raw,
    }
  }

  const topicLabel =
    topics.find((t) => t.value === parsed.data.topic)?.label ?? parsed.data.topic
  const { ok } = await sendInquiry({ ...parsed.data, topic: topicLabel })
  if (!ok) {
    return {
      status: "error",
      message: `Sorry, we couldn't send your message. Please email us at ${site.email}.`,
      values: raw,
    }
  }

  return { status: "success" }
}
