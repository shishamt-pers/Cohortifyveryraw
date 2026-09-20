import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const STORAGE_KEY = "cohortify-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyThemeClass(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function readInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const initial = readInitialTheme();
    applyThemeClass(initial);
    return initial;
  });

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyThemeClass(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore storage errors */
      }
      return next;
    });
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, isDark: theme === "dark", toggleTheme }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}