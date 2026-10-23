"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-driven motion (the CES part):
 *  - page background tone changes section by section ([data-bg] on sections)
 *  - fixed orb layer behind the page: parallax with scroll, recolours per section ([data-orbs="c1,c2,c3"])
 *  - hero image + copy scrubbed to scroll
 *  - gradient hue rotates with scroll (calm: 18°, bold: 50°)
 *  - [data-marquee] strips slide horizontally with scroll
 *  - [data-scrub-words] words fill in one by one as the block passes
 *  - [data-drift] cards move at slightly different speeds (scrub)
 *  - gradient progress line under the header
 */
export default function CScroll({ bold }: { bold: boolean }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const site = document.querySelector<HTMLElement>(".c-site");
    if (!site) return;
    const orbs = Array.from(document.querySelectorAll<HTMLElement>(".c-bg .c-orb"));
    const speed = bold ? 1.6 : 1;

    const ctx = gsap.context(() => {
      // 1. background tone + orb colours per section
      gsap.utils.toArray<HTMLElement>("[data-bg]").forEach((sec) => {
        const bg = sec.dataset.bg || "#ffffff";
        const cols = (sec.dataset.orbs || "").split(",").map((s) => s.trim()).filter(Boolean);
        const apply = () => {
          gsap.to(site, { backgroundColor: bg, duration: 1.1, ease: "power2.out", overwrite: "auto" });
          cols.forEach((c, i) => orbs[i] && gsap.to(orbs[i], { backgroundColor: c, duration: 1.4, ease: "power2.out", overwrite: "auto" }));
        };
        ScrollTrigger.create({ trigger: sec, start: "top 55%", end: "bottom 55%", onEnter: apply, onEnterBack: apply });
      });

      // 2. orbs parallax with scroll (different speeds, gentle sideways sine)
      orbs.forEach((o, i) => {
        const dir = i % 2 ? -1 : 1;
        gsap.to(o, { y: () => -ScrollTrigger.maxScroll(window) * (0.08 + i * 0.05) * speed, x: () => dir * 160 * speed, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 1.2 } });
      });

      // 3. hero scrub
      const hero = document.querySelector<HTMLElement>(".c-hero");
      if (hero) {
        const img = hero.querySelector(".c-hero-img img");
        const copy = hero.querySelector(".c-hero-grid > div:first-child");
        const media = hero.querySelector(".c-hero-media");
        const tl = gsap.timeline({ scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.8 } });
        if (img) tl.fromTo(img, { scale: 1.06, yPercent: 0 }, { scale: 1.18, yPercent: 8, ease: "none" }, 0);
        if (media) tl.to(media, { y: -60 * speed, ease: "none" }, 0);
        if (copy) tl.to(copy, { y: -120 * speed, opacity: 0.25, ease: "none" }, 0);
      }

      // 4. gradient hue rotates with scroll
      ScrollTrigger.create({ start: 0, end: "max", scrub: true, onUpdate: (s) => site.style.setProperty("--c-hue", `${Math.round(s.progress * (bold ? 50 : 18))}deg`) });

      // 5. marquee strips
      gsap.utils.toArray<HTMLElement>("[data-marquee]").forEach((row, i) => {
        const dir = parseFloat(row.dataset.marquee || "1");
        gsap.fromTo(row, { xPercent: dir > 0 ? 0 : -20 }, { xPercent: dir > 0 ? -20 : 0, ease: "none", scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: 1 } });
      });

      // 6. scrub words
      gsap.utils.toArray<HTMLElement>("[data-scrub-words]").forEach((el) => {
        const words = el.querySelectorAll<HTMLElement>(".w");
        gsap.set(words, { opacity: 0.16 });
        gsap.to(words, { opacity: 1, stagger: 0.08, ease: "none", scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: 0.6 } });
      });

      // 7. card drift — alternate columns move at different speeds
      gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((grid) => {
        Array.from(grid.children).forEach((card, i) => {
          const amt = (i % 3 === 1 ? -40 : 24) * speed;
          gsap.fromTo(card, { y: -amt }, { y: amt, ease: "none", scrollTrigger: { trigger: grid, start: "top bottom", end: "bottom top", scrub: 1 } });
        });
      });

      // 8. progress line
      const bar = document.querySelector<HTMLElement>(".c-progress");
      if (bar) gsap.to(bar, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });
    });

    const t = setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => { clearTimeout(t); ctx.revert(); };
  }, [bold]);
  return null;
}
