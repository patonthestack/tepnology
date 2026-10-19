import { z } from "zod"

export const topics = [
  { value: "project", label: "A project or requirement" },
  { value: "teaming", label: "Teaming / subcontracting" },
  { value: "capability-statement", label: "Capability statement request" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Something else" },
] as const

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address."),
  organization: z.string().trim().max(150).optional(),
  topic: z.enum(topics.map((t) => t.value) as [string, ...string[]], {
    error: "Please choose a topic.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Please include a few more details.")
    .max(5000, "Please keep your message under 5,000 characters."),
})

export type ContactFields = keyof z.infer<typeof contactSchema>

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error"
      message: string
      fieldErrors?: Partial<Record<ContactFields, string[]>>
      values?: Partial<Record<ContactFields, string>>
    }
