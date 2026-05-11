"use client";

import { projects } from "@/lib/portfolio-content";

type ProjectsSectionProps = {
  sectionTitle: string;
  projectsTitle: string;
  isArabic: boolean;
  isLight: boolean;
};

export function ProjectsSection({
  sectionTitle,
  projectsTitle,
  isArabic,
  isLight,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="space-y-8">
      <div className="space-y-2" data-reveal>
        <p className="text-sm tracking-[0.2em] text-blue-400">{sectionTitle}</p>
        <h2 className={`text-3xl font-semibold ${isLight ? "text-slate-800" : "text-zinc-100"}`}>{projectsTitle}</h2>
      </div>
      <div
        className={`relative overflow-hidden rounded-2xl border px-2 py-8 md:px-4 ${
          isLight ? "border-slate-300 bg-slate-100/85" : "border-zinc-800 bg-zinc-950/30"
        }`}
      >
        <div
          dir="ltr"
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth touch-pan-x pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              dir={isArabic ? "rtl" : "ltr"}
              className={`group w-[82vw] max-w-[430px] shrink-0 snap-start rounded-2xl border p-5 transition duration-300 hover:border-blue-500/60 hover:shadow-[0_0_32px_rgba(59,130,246,0.18)] ${
                isLight
                  ? "border-slate-300 bg-slate-100"
                  : "border-zinc-800 bg-zinc-900/50"
              }`}
            >
              <div
                className={`mb-4 h-48 overflow-hidden rounded-xl border ${
                  isLight
                    ? "border-slate-300 bg-gradient-to-br from-slate-200 to-slate-300"
                    : "border-zinc-800 bg-gradient-to-br from-zinc-800 to-zinc-900"
                }`}
              >
                {project.image ? (
                  <div
                    className="h-full w-full scale-100 bg-contain bg-center bg-no-repeat transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                ) : (
                  <div className="h-full w-full scale-100 bg-[radial-gradient(circle_at_20%_25%,rgba(59,130,246,0.22),transparent_45%)] transition duration-500 group-hover:scale-110" />
                )}
              </div>
              <h3 className={`mb-2 text-xl font-semibold ${isLight ? "text-slate-800" : "text-zinc-100"}`}>
                {isArabic ? project.titleAr : project.title}
              </h3>
              <p className={`mb-4 text-sm leading-6 ${isLight ? "text-slate-600" : "text-zinc-300"}`}>
                {isArabic ? project.descriptionAr : project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-md border px-2.5 py-1 text-xs ${
                      isLight
                        ? "border-slate-300 bg-slate-200 text-slate-700"
                        : "border-zinc-700 bg-zinc-950 text-zinc-300"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  {isArabic ? "فتح المشروع" : "Open Project"}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
