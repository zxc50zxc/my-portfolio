import { skills } from "@/lib/portfolio-content";

type SkillsSectionProps = {
  sectionTitle: string;
  skillsTitle: string;
  isLight: boolean;
};

export function SkillsSection({ sectionTitle, skillsTitle, isLight }: SkillsSectionProps) {
  return (
    <section id="skills" className="space-y-8">
      <div className="space-y-2" data-reveal>
        <p className="text-sm tracking-[0.2em] text-blue-400">{sectionTitle}</p>
        <h2 className={`text-3xl font-semibold ${isLight ? "text-slate-800" : "text-zinc-100"}`}>{skillsTitle}</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
        {skills.map((skill) => (
          <div
            key={skill}
            className={`rounded-xl border px-4 py-3 text-sm ${
              isLight
                ? "border-slate-300 bg-slate-100/85 text-slate-700"
                : "border-zinc-800 bg-zinc-900/50 text-zinc-300"
            }`}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
