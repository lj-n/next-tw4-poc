"use client";

import { useState } from "react";

export function ThemeSwitch() {
  const [theme, setTheme] = useState<"corporate" | "fun">("corporate");

  function toggleTheme() {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "corporate" ? "fun" : "corporate"
    );
    setTheme(theme === "corporate" ? "fun" : "corporate");
  }

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer border border-gray-300 p-card rounded-card"
    >
      {theme}
    </button>
  );
}
