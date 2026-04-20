(() => {
  const selectors = [
    ".skills__grid .skill__box",
    ".academic__content .academic__box",
    ".experience__container .experience__content",
    ".form__content",
    ".about",
  ];

  const elements = Array.from(document.querySelectorAll(selectors.join(",")));
  if (elements.length === 0) return;

  elements.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { root: null, threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  elements.forEach((el) => observer.observe(el));
})();

