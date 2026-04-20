(() => {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");

  if (!toggle || !nav) return;

  const setOpen = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };

  const isOpen = () => document.body.classList.contains("nav-open");

  toggle.addEventListener("click", () => setOpen(!isOpen()));

  // Close when clicking outside (mobile menu)
  document.addEventListener(
    "pointerdown",
    (e) => {
      if (!isOpen()) return;
      const target = e.target;
      if (!(target instanceof Node)) return;
      const clickedInsideNav = nav.contains(target);
      const clickedToggle = toggle.contains(target);
      if (!clickedInsideNav && !clickedToggle) setOpen(false);
    },
    { capture: true }
  );

  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLElement && target.closest("a")) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
  });
})();

