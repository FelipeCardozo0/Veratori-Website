"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  isDark: true,
  toggleTheme: () => { },
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("veratori-theme") as Theme | null;
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(theme);
      localStorage.setItem("veratori-theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => setTheme((p) => (p === "dark" ? "light" : "dark"));

  if (!mounted) return <div className="bg-[#151D3B] min-h-screen">{children}</div>;

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === "dark", toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-500 ${theme === "dark" ? "bg-[#151D3B] text-white" : "bg-[#F3F5F7] text-midnight"}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
