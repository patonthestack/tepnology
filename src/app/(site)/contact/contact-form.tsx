"use client"

import { useActionState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { CircleCheckIcon, Loader2Icon } from "lucide-react"
import { toast } from "sonner"

import { submitContact } from "./actions"
import { topics, type ContactFields, type ContactState } from "./schema"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const initialState: ContactState = { status: "idle" }

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  )
  const searchParams = useSearchParams()
  const requestedTopic = searchParams.get("topic")
  const defaultTopic = topics.some((t) => t.value === requestedTopic)
    ? requestedTopic!
    : undefined

  useEffect(() => {
    if (state.status === "error") toast.error(state.message)
  }, [state])

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border bg-card p-10 text-center">
        <CircleCheckIcon className="size-10 text-brand" />
        <h2 className="text-xl font-semibold">Thanks, we&apos;ve got it.</h2>
        <p className="max-w-sm text-muted-foreground">
          A member of our team will get back to you within one business day.
        </p>
      </div>
    )
  }

  const errors = state.status === "error" ? state.fieldErrors : undefined
  const values = state.status === "error" ? state.values : undefined
  const fieldProps = (name: ContactFields) => ({
    id: name,
    name,
    defaultValue: values?.[name],
    "aria-invalid": errors?.[name] ? true : undefined,
  })
  const errorFor = (name: ContactFields) =>
    errors?.[name]?.map((message) => ({ message }))

  return (
    <form action={formAction} noValidate className="rounded-xl border bg-card p-6 md:p-8">
      <FieldGroup>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field data-invalid={!!errors?.name || undefined}>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input {...fieldProps("name")} autoComplete="name" required />
            <FieldError errors={errorFor("name")} />
          </Field>
          <Field data-invalid={!!errors?.email || undefined}>
            <FieldLabel htmlFor="email">Work email</FieldLabel>
            <Input
              {...fieldProps("email")}
              type="email"
              autoComplete="email"
              required
            />
            <FieldError errors={errorFor("email")} />
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="organization">Agency or organization</FieldLabel>
            <Input {...fieldProps("organization")} autoComplete="organization" />
          </Field>
          <Field data-invalid={!!errors?.topic || undefined}>
            <FieldLabel htmlFor="topic">Topic</FieldLabel>
            <Select
              name="topic"
              defaultValue={values?.topic || defaultTopic}
              required
            >
              <SelectTrigger
                id="topic"
                className="w-full"
                aria-invalid={errors?.topic ? true : undefined}
              >
                <SelectValue placeholder="Choose a topic" />
              </SelectTrigger>
              <SelectContent>
                {topics.map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError errors={errorFor("topic")} />
          </Field>
        </div>

        <Field data-invalid={!!errors?.message || undefined}>
          <FieldLabel htmlFor="message">How can we help?</FieldLabel>
          <Textarea {...fieldProps("message")} className="min-h-36" required />
          <FieldError errors={errorFor("message")} />
        </Field>

        <div aria-hidden className="absolute -left-[9999px]">
          <label htmlFor="company_website">Leave this field empty</label>
          <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            Please don&apos;t include classified, CUI, or sensitive personal
            information.
          </p>
          <Button type="submit" size="lg" disabled={pending} className="h-11 px-6">
            {pending && <Loader2Icon className="animate-spin" data-icon="inline-start" />}
            {pending ? "Sending…" : "Send message"}
          </Button>
        </div>
      </FieldGroup>
    </form>
  )
}
