"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/common/ThemeProvider";

interface ThemeToggleProps {
  // "transparent": sits over the homepage's fixed dark hero photo, so it
  // needs to stay light regardless of the site theme. "solid": sits on a
  // backdrop that already follows the theme, so it can be theme-aware.
  variant?: "transparent" | "solid";
}

export default function ThemeToggle({ variant = "solid" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const variantClass =
    variant === "transparent"
      ? "border-white/25 bg-white/10 text-white hover:bg-white/20"
      : "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-200 hover:bg-black/10 dark:hover:bg-white/10 hover:text-primary-500";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${variantClass}`}
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
}
