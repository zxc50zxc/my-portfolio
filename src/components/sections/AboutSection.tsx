type AboutSectionProps = {
  sectionTitle: string;
  aboutTitle: string;
  aboutBio: string;
  aboutBioEn: string;
  education: string;
  certifications: readonly string[];
  isArabic: boolean;
  isLight: boolean;
};

export function AboutSection({
  sectionTitle,
  aboutTitle,
  aboutBio,
  aboutBioEn,
  education,
  certifications,
  isArabic,
  isLight,
}: AboutSectionProps) {
  return (
    <section
      id="about"
      className={`grid gap-8 rounded-2xl border p-6 md:grid-cols-[220px,1fr] md:p-8 ${
        isLight ? "border-slate-300 bg-slate-100/85" : "border-zinc-800 bg-zinc-900/40"
      }`}
    >
      <div
        className={`mx-auto flex h-52 w-52 items-center justify-center rounded-3xl border text-sm ${
          isLight
            ? "border-slate-300 bg-gradient-to-b from-slate-200 to-slate-300 text-slate-500"
            : "border-zinc-700 bg-gradient-to-b from-zinc-800 to-zinc-900 text-zinc-400"
        }`}
        data-reveal
      >
        PHOTO
      </div>
      <div className="space-y-4" data-reveal>
        <p className="text-sm tracking-[0.2em] text-blue-400">{sectionTitle}</p>
        <h2 className={`text-3xl font-semibold ${isLight ? "text-slate-800" : "text-zinc-100"}`}>{aboutTitle}</h2>
        <p className={`leading-7 ${isLight ? "text-slate-600" : "text-zinc-300"}`}>{aboutBio}</p>
        <p className={`text-sm ${isLight ? "text-slate-500" : "text-zinc-400"}`}>{aboutBioEn}</p>
        <div className={`rounded-xl border p-4 text-sm ${isLight ? "border-slate-300 bg-slate-200 text-slate-700" : "border-zinc-800 bg-zinc-950/70 text-zinc-300"}`}>
          <p className={`mb-2 ${isLight ? "text-slate-800" : "text-zinc-100"}`}>{isArabic ? "التعليم" : "Education"}</p>
          <p>{education}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <span
              key={cert}
              className={`rounded-md border px-3 py-1.5 text-xs ${
                isLight
                  ? "border-slate-300 bg-slate-200 text-slate-700"
                  : "border-zinc-700 bg-zinc-950 text-zinc-300"
              }`}
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
