import { contactEmail } from "@/lib/portfolio-content";
import type { FormEvent } from "react";

type ContactSectionProps = {
  sectionTitle: string;
  contactTitle: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  emailLabel: string;
  socialLabel: string;
  copiedLabel: string;
  copyLabel: string;
  copied: boolean;
  isLight: boolean;
  nameValue: string;
  emailValue: string;
  messageValue: string;
  submitLabel: string;
  submitStateLabel?: string;
  submitStatus?: "idle" | "success" | "error";
  submitting: boolean;
  onChangeName: (value: string) => void;
  onChangeEmail: (value: string) => void;
  onChangeMessage: (value: string) => void;
  onSubmitForm: (event: FormEvent<HTMLFormElement>) => void;
  onCopyEmail: () => void;
};

export function ContactSection({
  sectionTitle,
  contactTitle,
  formName,
  formEmail,
  formMessage,
  emailLabel,
  socialLabel,
  copiedLabel,
  copyLabel,
  copied,
  isLight,
  nameValue,
  emailValue,
  messageValue,
  submitLabel,
  submitStateLabel,
  submitStatus,
  submitting,
  onChangeName,
  onChangeEmail,
  onChangeMessage,
  onSubmitForm,
  onCopyEmail,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`space-y-8 rounded-2xl border p-6 md:p-8 ${
        isLight ? "border-slate-300 bg-slate-100/85" : "border-zinc-800 bg-zinc-900/40"
      }`}
    >
      <div className="space-y-2" data-reveal>
        <p className="text-sm tracking-[0.2em] text-blue-400">{sectionTitle}</p>
        <h2 className={`text-3xl font-semibold ${isLight ? "text-slate-800" : "text-zinc-100"}`}>{contactTitle}</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2" data-reveal>
        <form className="space-y-4" onSubmit={onSubmitForm}>
          <input
            type="text"
            placeholder={formName}
            value={nameValue}
            onChange={(event) => onChangeName(event.target.value)}
            required
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500 ${
              isLight
                ? "border-slate-300 bg-slate-50 text-slate-800"
                : "border-zinc-700 bg-zinc-950 text-zinc-100"
            }`}
          />
          <input
            type="email"
            placeholder={formEmail}
            value={emailValue}
            onChange={(event) => onChangeEmail(event.target.value)}
            required
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500 ${
              isLight
                ? "border-slate-300 bg-slate-50 text-slate-800"
                : "border-zinc-700 bg-zinc-950 text-zinc-100"
            }`}
          />
          <textarea
            placeholder={formMessage}
            rows={5}
            value={messageValue}
            onChange={(event) => onChangeMessage(event.target.value)}
            required
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500 ${
              isLight
                ? "border-slate-300 bg-slate-50 text-slate-800"
                : "border-zinc-700 bg-zinc-950 text-zinc-100"
            }`}
          />
          <button
            type="submit"
            disabled={submitting}
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            {submitLabel}
          </button>
          {submitStateLabel ? (
            <p
              className={`text-sm ${
                submitStatus === "success"
                  ? "text-emerald-500"
                  : submitStatus === "error"
                    ? "text-rose-500"
                    : isLight
                      ? "text-slate-500"
                      : "text-zinc-400"
              }`}
            >
              {submitStateLabel}
            </p>
          ) : null}
        </form>

        <div className="space-y-5">
          <div className={`rounded-xl border p-4 ${isLight ? "border-slate-300 bg-slate-50" : "border-zinc-700 bg-zinc-950"}`}>
            <p className={`mb-2 text-xs tracking-[0.16em] ${isLight ? "text-slate-500" : "text-zinc-400"}`}>{emailLabel}</p>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`text-sm ${isLight ? "text-slate-800" : "text-zinc-100"}`}>{contactEmail}</span>
              <button
                type="button"
                onClick={onCopyEmail}
                className={`rounded-md border px-3 py-1.5 text-xs transition hover:border-blue-500 hover:text-blue-300 ${
                  isLight ? "border-slate-300 text-slate-700" : "border-zinc-700 text-zinc-300"
                }`}
              >
                {copied ? copiedLabel : copyLabel}
              </button>
            </div>
          </div>
          <div className={`rounded-xl border p-4 ${isLight ? "border-slate-300 bg-slate-50" : "border-zinc-700 bg-zinc-950"}`}>
            <p className={`mb-3 text-xs tracking-[0.16em] ${isLight ? "text-slate-500" : "text-zinc-400"}`}>{socialLabel}</p>
            <div className={`flex flex-wrap gap-3 text-sm ${isLight ? "text-slate-700" : "text-zinc-300"}`}>
              <a href="#" className="transition hover:text-blue-300">
                LinkedIn
              </a>
              <a href="#" className="transition hover:text-blue-300">
                GitHub
              </a>
              <a href={`mailto:${contactEmail}`} className="transition hover:text-blue-300">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
