"use client";

import { useRef } from "react";
import { projects } from "@/lib/portfolio-content";
import { useGsapHorizontalScroll } from "@/hooks/useGsapHorizontalScroll";

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
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGsapHorizontalScroll(pinRef, trackRef);

  return (
    <section id="projects" className="space-y-8">
      <div className="space-y-2" data-reveal>
        <p className="text-sm tracking-[0.2em] text-blue-400">{sectionTitle}</p>
        <h2 className={`text-3xl font-semibold ${isLight ? "text-slate-800" : "text-zinc-100"}`}>{projectsTitle}</h2>
      </div>
      <div
        ref={pinRef}
        className={`relative overflow-hidden rounded-2xl border px-2 py-8 md:px-4 ${
          isLight ? "border-slate-300 bg-slate-100/85" : "border-zinc-800 bg-zinc-950/30"
        }`}
      >
        <div ref={trackRef} className="flex w-max gap-6 pb-4">
          {projects.map((project) => (
            <article
              key={project}
              className={`group w-[82vw] max-w-[430px] rounded-2xl border p-5 transition duration-300 hover:border-blue-500/60 hover:shadow-[0_0_32px_rgba(59,130,246,0.18)] ${
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
                <div className="h-full w-full scale-100 bg-[radial-gradient(circle_at_20%_25%,rgba(59,130,246,0.22),transparent_45%)] transition duration-500 group-hover:scale-110" />
              </div>
              <h3 className={`mb-2 text-xl font-semibold ${isLight ? "text-slate-800" : "text-zinc-100"}`}>{project}</h3>
              <p className={`mb-4 text-sm leading-6 ${isLight ? "text-slate-600" : "text-zinc-300"}`}>
                {isArabic
                  ? "حل تقني يركز على تكامل البيانات الطبية، سهولة الاستخدام، والامتثال للمعايير الصحية."
                  : "A healthcare technology solution focused on interoperability, usability, and compliance."}
              </p>
              <div className="flex flex-wrap gap-2">
                {["FHIR", "SQL", "Analytics"].map((tag) => (
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
