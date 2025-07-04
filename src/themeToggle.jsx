import React, { useEffect, useState } from 'react';
import { Moon, Sun } from "lucide-react";

function ThemeToggle({ glow }) {
  // Use system theme as default
  const getInitialMode = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") return true;
      if (stored === "light") return false;
      // Use system preference if no stored value
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  // Set theme class immediately on first render (before paint)
  useEffect(() => {
    const html = document.documentElement;
    // Remove both classes first to avoid conflicts
    html.classList.remove("theme-dark", "theme-light");
    if (isDarkMode) {
      html.classList.add("theme-dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.add("theme-light");
      localStorage.setItem("theme", "light");
    }
  }, []); // run once on mount

  // Update theme class when toggled
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("theme-dark", "theme-light");
    if (isDarkMode) {
      html.classList.add("theme-dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.add("theme-light");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Listen for system theme changes and update if user hasn't chosen manually
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const stored = localStorage.getItem("theme");
      if (!stored) setIsDarkMode(media.matches);
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <button
      aria-label="Toggle dark mode"
      className={`rounded-full p-2 bg-gray-200 hover:bg-gray-300 transition-colors ${glow ? "glow-blue" : ""}`}
      onClick={() => setIsDarkMode(d => !d)}
    >
      {isDarkMode ? (
        <Sun className={`w-5 h-5 ${glow ? "glow-blue" : ""}`} />
      ) : (
        <Moon className={`w-5 h-5 ${glow ? "glow-blue" : ""}`} />
      )}
    </button>
  );
}

export default ThemeToggle;