"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { PillNav } from "@/components/PillNav";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useThemeMode } from "@/hooks/useThemeMode";
import { portfolioContent, type Lang } from "@/lib/portfolio-content";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { mode, resolvedTheme, cycleThemeMode } = useThemeMode();
  const t = portfolioContent[lang];
  const isArabic = lang === "ar";
  const isLight = resolvedTheme === "light";
  useEffect(() => {
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  useGsapReveal("#portfolio-root");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("alghamdi.mhmd.d@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) throw new Error("Request failed");

      setSubmitStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      id="portfolio-root"
      dir={isArabic ? "rtl" : "ltr"}
      className={`min-h-screen ${
        isLight ? "bg-[#eef3f8] text-slate-800" : "bg-[#0f131a] text-zinc-100"
      }`}
    >
      <PillNav
        lang={lang}
        isLight={isLight}
        nav={t.nav}
        ids={t.ids}
        langLabel={t.langButton}
        themeMode={mode}
        brand={t.brand}
        onToggleLanguage={() => setLang((prev) => (prev === "ar" ? "en" : "ar"))}
        onToggleTheme={cycleThemeMode}
      />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-5 pb-20 pt-24 sm:px-8">
        <HeroSection
          title={t.title}
          subtitle={t.subtitle}
          tagline={t.tagline}
          ctaProjects={t.ctaProjects}
          ctaContact={t.ctaContact}
          ctaRowad={t.ctaRowad}
          cv={t.cv}
          scroll={t.scroll}
          isArabic={isArabic}
          isLight={isLight}
        />
        <ExperienceSection
          sectionTitle={t.sectionExperience}
          timelineTitle={t.timelineTitle}
          isArabic={isArabic}
          isLight={isLight}
        />
        <SkillsSection sectionTitle={t.sectionSkills} skillsTitle={t.skillsTitle} isLight={isLight} />
        <ProjectsSection
          sectionTitle={t.sectionProjects}
          projectsTitle={t.projectsTitle}
          isArabic={isArabic}
          isLight={isLight}
        />
        <AboutSection
          sectionTitle={t.sectionAbout}
          aboutTitle={t.aboutTitle}
          aboutBio={t.aboutBio}
          aboutBioEn={t.aboutBioEn}
          education={t.education}
          certifications={t.certifications}
          isArabic={isArabic}
          isLight={isLight}
          photoAlt={t.brand}
        />
        <ContactSection
          sectionTitle={t.sectionContact}
          contactTitle={t.contactTitle}
          formName={t.formName}
          formEmail={t.formEmail}
          formMessage={t.formMessage}
          emailLabel={t.emailLabel}
          socialLabel={t.socialLabel}
          copiedLabel={t.copied}
          copyLabel={t.copy}
          copied={copied}
          isLight={isLight}
          nameValue={name}
          emailValue={email}
          messageValue={message}
          submitLabel={submitting ? t.sending : t.send}
          submitStateLabel={
            submitStatus === "success"
              ? t.sentSuccess
              : submitStatus === "error"
                ? t.sentError
                : undefined
          }
          submitStatus={submitStatus}
          submitting={submitting}
          onChangeName={setName}
          onChangeEmail={setEmail}
          onChangeMessage={setMessage}
          onSubmitForm={handleSubmitContact}
          onCopyEmail={handleCopyEmail}
        />
      </main>
    </div>
  );
}
