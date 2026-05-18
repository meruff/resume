/** Theme helpers. Site defaults to dark; light styles stay for a future toggle. */
const STORAGE_KEY = "theme";

export function resolveIsDark(stored) {
  if (stored === "light") return false;
  return true;
}

export function applyTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
  const themeColor = document.querySelector(
    'meta[name="theme-color"]:not([media])',
  );
  if (themeColor) {
    themeColor.content = isDark ? "#030712" : "#F3F4F6";
  }
}

export function readIsDarkFromDom() {
  return document.documentElement.classList.contains("dark");
}

/** Default: always dark. */
export function initDefaultDark() {
  document.documentElement.classList.add("dark");
  localStorage.setItem(STORAGE_KEY, "dark");
}

/** For a future toggle — respects saved preference, defaults to dark. */
export function initThemeFromStorage() {
  const isDark = resolveIsDark(localStorage.getItem(STORAGE_KEY));
  document.documentElement.classList.toggle("dark", isDark);
}
