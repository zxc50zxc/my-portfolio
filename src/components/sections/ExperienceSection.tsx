import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Stethoscope,
  Target,
  Trophy,
} from "lucide-react";
import type { ComponentType } from "react";
import { experiences, type TimelineIconKey } from "@/lib/portfolio-content";

type ExperienceSectionProps = {
  sectionTitle: string;
  timelineTitle: string;
  isArabic: boolean;
  isLight: boolean;
};

export function ExperienceSection({
  sectionTitle,
  timelineTitle,
  isArabic,
  isLight,
}: ExperienceSectionProps) {
  const iconMap: Record<TimelineIconKey, ComponentType<{ className?: string }>> = {
    trophy: Trophy,
    graduationCap: GraduationCap,
    bookOpen: BookOpen,
    stethoscope: Stethoscope,
    briefcase: Briefcase,
    target: Target,
  };

  return (
    <section id="experience" className="space-y-8">
      <div className="space-y-2" data-reveal>
        <p className="text-sm tracking-[0.2em] text-blue-400">{sectionTitle}</p>
        <h2 className={`text-3xl font-semibold ${isLight ? "text-slate-800" : "text-zinc-100"}`}>
          {timelineTitle}
        </h2>
      </div>

      <div
        className={`relative space-y-10 before:absolute before:left-3 before:top-1 before:h-[calc(100%-0.5rem)] before:w-px md:before:left-1/2 ${
          isLight ? "before:bg-blue-300/70" : "before:bg-blue-500/40"
        }`}
        data-reveal-stagger
      >
        {experiences.map((experience, index) => {
          const Icon = iconMap[experience.icon];
          return (
            <article
              key={experience.id}
              className={`group relative ml-10 rounded-2xl border p-6 transition duration-300 hover:border-blue-500/60 hover:shadow-[0_0_28px_rgba(59,130,246,0.2)] md:ml-0 md:w-[calc(50%-1.5rem)] ${
                isLight
                  ? "border-slate-300 bg-slate-100/85"
                  : "border-zinc-700 bg-zinc-900/70"
              } ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
            >
              <span
                className={`absolute -left-7 top-8 flex h-7 w-7 items-center justify-center rounded-full border border-blue-400/60 md:left-auto md:right-[-1.95rem] ${
                  isLight ? "bg-slate-100" : "bg-zinc-950"
                }`}
              >
                <Icon className="h-3.5 w-3.5 text-blue-500" />
              </span>

              <div className="mb-4 flex items-start gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-lg border ${
                    isLight
                      ? "border-blue-200 bg-blue-50 text-blue-600"
                      : "border-zinc-600 bg-zinc-900 text-blue-400"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className={`text-lg font-semibold ${isLight ? "text-slate-800" : "text-zinc-50"}`}>
                    {isArabic ? experience.orgAr : experience.orgEn}
                  </p>
                  <p className={`text-xs ${isLight ? "text-slate-500" : "text-zinc-400"}`}>
                    {isArabic ? experience.periodAr : experience.periodEn}
                  </p>
                </div>
              </div>

              <p className="mb-3 text-base font-medium text-blue-400">
                {isArabic ? experience.titleAr : experience.titleEn}
              </p>
              <ul className={`space-y-2 text-sm ${isLight ? "text-slate-600" : "text-zinc-300"}`}>
                {(isArabic ? experience.pointsAr : experience.pointsEn).map((point) => (
                  <li key={point} className="flex gap-2 leading-6">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
