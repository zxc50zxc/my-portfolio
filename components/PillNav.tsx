"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import type { Lang } from "@/lib/portfolio-content";
import type { ThemeMode } from "@/hooks/useThemeMode";

type PillNavProps = {
  lang: Lang;
  isLight: boolean;
  nav: readonly string[];
  ids: readonly string[];
  langLabel: string;
  themeMode: ThemeMode;
  brand: string;
  onToggleLanguage: () => void;
  onToggleTheme: () => void;
};

function ThemeIcon({ mode }: { mode: ThemeMode }) {
  if (mode === "light") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (mode === "dark") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path
          d="M20 14.2A8 8 0 1 1 9.8 4 7 7 0 0 0 20 14.2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 20h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PillNav({
  lang,
  isLight,
  nav,
  ids,
  langLabel,
  themeMode,
  brand,
  onToggleLanguage,
  onToggleTheme,
}: PillNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLElement>("[data-liquid-link]"));
    const cleanups = links.map((link) => {
      const fill = link.querySelector<HTMLElement>("[data-liquid-fill]");
      if (!fill) return () => undefined;

      const enter = () => gsap.to(fill, { scaleX: 1, transformOrigin: "left", duration: 0.35 });
      const leave = () => gsap.to(fill, { scaleX: 0, transformOrigin: "right", duration: 0.35 });
      link.addEventListener("mouseenter", enter);
      link.addEventListener("mouseleave", leave);

      return () => {
        link.removeEventListener("mouseenter", enter);
        link.removeEventListener("mouseleave", leave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [lang]);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-4">
        <div
          className={`flex w-full items-center justify-between rounded-full px-3 py-2 backdrop-blur-xl md:w-auto md:gap-6 md:px-4 ${
            isLight
              ? "border border-slate-300 bg-slate-100/80"
              : "border border-zinc-700/70 bg-black/70"
          }`}
        >
          <a
            href="#home"
            className={`group flex h-10 w-10 items-center justify-center rounded-full ${
              isLight ? "border border-slate-300 bg-white" : "border border-zinc-700 bg-zinc-900/80"
            }`}
          >
            <svg
              viewBox="0 0 36 36"
              className="h-6 w-6 text-blue-400 transition-transform duration-500 group-hover:rotate-[360deg]"
              fill="none"
            >
              <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 23L18 11L25 23" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {nav.map((item, idx) => (
              <a
                key={item}
                href={`#${ids[idx]}`}
                data-liquid-link
                className={`relative overflow-hidden rounded-full px-4 py-2 text-sm ${
                  isLight ? "text-slate-700" : "text-zinc-200"
                }`}
              >
                <span
                  data-liquid-fill
                  className="absolute inset-0 -z-10 origin-left scale-x-0 rounded-full bg-blue-500/25"
                />
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className={`grid h-9 w-9 place-items-center rounded-full border transition hover:border-blue-500 hover:text-blue-300 ${
                isLight ? "border-slate-300 text-slate-700" : "border-zinc-700 text-zinc-200"
              }`}
              aria-label="Toggle theme mode"
              title="Toggle theme mode"
            >
              <ThemeIcon mode={themeMode} />
            </button>
            <button
              type="button"
              onClick={onToggleLanguage}
              className={`rounded-full border px-3 py-2 text-xs transition hover:border-blue-500 hover:text-blue-300 ${
                isLight ? "border-slate-300 text-slate-700" : "border-zinc-700 text-zinc-200"
              }`}
            >
              {langLabel}
            </button>
            <button
              type="button"
              className={`flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full border md:hidden ${
                isLight ? "border-slate-300 text-slate-700" : "border-zinc-700 text-zinc-200"
              }`}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className={`block h-0.5 w-5 transition ${isLight ? "bg-slate-700" : "bg-zinc-200"} ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 transition ${isLight ? "bg-slate-700" : "bg-zinc-200"} ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block h-0.5 w-5 transition ${isLight ? "bg-slate-700" : "bg-zinc-200"} ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div
          className={`mx-auto mt-2 w-[calc(100%-2rem)] max-w-6xl rounded-2xl border p-4 md:hidden ${
            isLight ? "border-slate-300 bg-slate-100/95" : "border-zinc-800 bg-zinc-950/95"
          }`}
        >
          <p className={`mb-3 text-xs ${isLight ? "text-slate-500" : "text-zinc-500"}`}>{brand}</p>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-start text-sm transition hover:text-blue-300 ${
                isLight
                  ? "text-slate-700 hover:bg-slate-200"
                  : "text-zinc-300 hover:bg-zinc-900"
              }`}
              aria-label="Toggle theme mode"
            >
              <ThemeIcon mode={themeMode} />
            </button>
            {nav.map((item, idx) => (
              <a
                key={item}
                href={`#${ids[idx]}`}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm transition hover:text-blue-300 ${
                  isLight ? "text-slate-700 hover:bg-slate-200" : "text-zinc-300 hover:bg-zinc-900"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
