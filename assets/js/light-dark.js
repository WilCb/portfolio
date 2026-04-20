(() => {
  const STORAGE_KEY = "portfolio-theme";
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");

  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getInitialTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return prefersDark ? "dark" : "light";
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    if (button) {
      const isDark = theme === "dark";
      button.setAttribute("aria-pressed", String(isDark));
      button.textContent = isDark ? "Light" : "Dark";
      button.dataset.state = isDark ? "dark" : "light";
    }
  };

  const theme = getInitialTheme();
  applyTheme(theme);

  if (button) {
    button.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  }
})();
