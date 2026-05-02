import { HeroScene } from "@/components/three/HeroScene";
import { cvFilePath } from "@/lib/portfolio-content";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  tagline: string;
  ctaProjects: string;
  ctaContact: string;
  cv: string;
  scroll: string;
  isArabic: boolean;
  isLight: boolean;
};

export function HeroSection({
  title,
  subtitle,
  tagline,
  ctaProjects,
  ctaContact,
  cv,
  scroll,
  isArabic,
  isLight,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className={`relative flex min-h-screen items-center overflow-hidden rounded-3xl border px-6 pb-14 pt-24 sm:px-10 ${
        isLight
          ? "border-slate-300 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100"
          : "border-zinc-800 bg-gradient-to-b from-black via-zinc-950 to-zinc-900"
      }`}
    >
      <div data-parallax className="absolute -right-12 -top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div data-parallax className="absolute -bottom-12 -left-8 h-56 w-56 rounded-full bg-blue-700/10 blur-3xl" />

      <div className="grid w-full items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6" data-reveal>
          <p className={`text-sm tracking-[0.24em] ${isLight ? "text-slate-500" : "text-zinc-400"}`}>
            {isArabic ? "ملف مهني" : "Portfolio"}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl font-black leading-tight sm:text-7xl">
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className={`text-xl sm:text-2xl ${isLight ? "text-slate-700" : "text-zinc-200"}`}>{subtitle}</p>
          <p className={`max-w-2xl ${isLight ? "text-slate-600" : "text-zinc-400"}`}>{tagline}</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500">
              {ctaProjects}
            </a>
            <a href="#contact" className={`rounded-xl border px-6 py-3 text-sm font-medium transition hover:border-blue-500 hover:text-blue-300 ${isLight ? "border-slate-300 text-slate-700" : "border-zinc-700 text-zinc-200"}`}>
              {ctaContact}
            </a>
            <a
              href={cvFilePath}
              download="Mohammed-AlGhamdi-CV.pdf"
              className={`rounded-xl border px-6 py-3 text-sm font-medium transition hover:border-blue-500 hover:text-blue-300 ${isLight ? "border-slate-300 text-slate-700" : "border-zinc-700 text-zinc-200"}`}
            >
              {cv}
            </a>
          </div>
        </div>
        <div data-reveal>
          <HeroScene isLight={isLight} />
        </div>
      </div>

      <div className={`absolute inset-x-0 bottom-6 flex justify-center ${isLight ? "text-slate-500" : "text-zinc-500"}`} data-reveal>
        <a href="#experience" className="text-xs tracking-[0.2em]">
          {scroll}
        </a>
      </div>
    </section>
  );
}
