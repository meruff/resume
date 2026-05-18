import { useState } from "react";
import { twMerge } from "tailwind-merge";
import BoxIcon from "./BoxIcon";
import { applyTheme, readIsDarkFromDom } from "../../lib/theme";

const buttonStyles =
  "inline-flex size-9 shrink-0 items-center justify-center rounded-lg p-0 leading-none text-gray-600 transition-colors hover:bg-gray-200/80 focus:outline-none focus:ring-2 focus:ring-custom-light/50 dark:text-gray-300 dark:hover:bg-gray-700/80 dark:focus:ring-custom-dark/50";

export default function ThemeToggle({ className = "" }) {
  const [isDark, setIsDark] = useState(readIsDarkFromDom);

  const toggle = () => {
    const next = !isDark;
    applyTheme(next);
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={twMerge(buttonStyles, className)}
    >
      <BoxIcon name={isDark ? "sun" : "moon"} />
    </button>
  );
}
