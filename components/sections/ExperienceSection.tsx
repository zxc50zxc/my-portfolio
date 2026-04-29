import { experiences } from "@/lib/portfolio-content";

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
  return (
    <section id="experience" className="space-y-8">
      <div className="space-y-2" data-reveal>
        <p className="text-sm tracking-[0.2em] text-blue-400">{sectionTitle}</p>
        <h2 className={`text-3xl font-semibold ${isLight ? "text-slate-800" : "text-zinc-100"}`}>{timelineTitle}</h2>
      </div>

      <div
        className={`relative space-y-10 before:absolute before:left-3 before:top-1 before:h-[calc(100%-0.5rem)] before:w-px md:before:left-1/2 ${
          isLight ? "before:bg-slate-300" : "before:bg-zinc-800"
        }`}
        data-reveal-stagger
      >
        {experiences.map((experience, index) => (
          <article
            key={experience.org}
            className={`relative ml-10 rounded-2xl border p-6 md:ml-0 md:w-[calc(50%-1.5rem)] ${
              isLight
                ? "border-slate-300 bg-slate-100/85"
                : "border-zinc-800 bg-zinc-900/40"
            } ${
              index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
            }`}
          >
            <span className={`absolute -left-7 top-7 flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/50 md:left-auto md:right-[-1.8rem] ${isLight ? "bg-slate-100" : "bg-zinc-950"}`}>
              <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
            </span>
            <div className="mb-4 flex items-center gap-3">
              <div className={`flex h-11 w-11 items-center justify-center rounded-lg border text-xs ${isLight ? "border-slate-300 bg-slate-200 text-slate-600" : "border-zinc-700 bg-zinc-950 text-zinc-400"}`}>
                LOGO
              </div>
              <div>
                <p className={`text-lg font-medium ${isLight ? "text-slate-800" : "text-zinc-100"}`}>{experience.org}</p>
                <p className={`text-sm ${isLight ? "text-slate-500" : "text-zinc-400"}`}>{experience.period}</p>
              </div>
            </div>
            <p className={`mb-2 ${isLight ? "text-slate-700" : "text-zinc-200"}`}>
              {isArabic ? experience.arTitle : experience.enTitle}
            </p>
            <p className={`text-sm ${isLight ? "text-slate-600" : "text-zinc-300"}`}>
              {isArabic ? experience.descAr : experience.descEn}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
