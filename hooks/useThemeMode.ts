"use client";

import { useEffect, useMemo, useState } from "react";

export type ThemeMode = "system" | "dark" | "light";
type ResolvedTheme = "dark" | "light";

const THEME_KEY = "theme-mode";

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "system";
    const stored = localStorage.getItem(THEME_KEY) as ThemeMode | null;
    return stored === "system" || stored === "dark" || stored === "light"
      ? stored
      : "system";
  });
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() =>
    typeof window === "undefined" ? "dark" : getSystemTheme(),
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystemTheme(query.matches ? "dark" : "light");
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const resolvedTheme = useMemo<ResolvedTheme>(
    () => (mode === "system" ? systemTheme : mode),
    [mode, systemTheme],
  );

  useEffect(() => {
    localStorage.setItem(THEME_KEY, mode);
    document.documentElement.dataset.theme = resolvedTheme;
  }, [mode, resolvedTheme]);

  const cycleThemeMode = () => {
    setMode((prev) =>
      prev === "system" ? "dark" : prev === "dark" ? "light" : "system",
    );
  };

  return { mode, resolvedTheme, cycleThemeMode };
}
