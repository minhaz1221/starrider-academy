"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide motion (CES-style):
 *  - Lenis smooth scrolling, synced to GSAP ScrollTrigger
 *  - [data-reveal]         fade/slide up when entering view (stagger via data-stagger on a parent)
 *  - [data-words]          word-by-word brightening scrubbed to scroll
 *  - [data-parallax=0.2]   subtle vertical parallax
 *  - [data-count=40]       number count-up
 *  - [data-scale-in]       cards scale from 0.92 → 1
 */
export default function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.querySelectorAll<HTMLElement>("[data-reveal],[data-scale-in]").forEach((el) => (el.style.opacity = "1"));
      return;
    }

    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // reveal
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } },
        );
      });
      // stagger groups
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>(":scope > *");
        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 60, scale: 0.96 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: "power3.out", stagger: 0.12, scrollTrigger: { trigger: group, start: "top 85%", once: true } },
        );
      });
      // word-by-word scrub
      gsap.utils.toArray<HTMLElement>("[data-words]").forEach((el) => {
        const words = el.querySelectorAll<HTMLElement>(".w");
        gsap.fromTo(
          words,
          { opacity: 0.18, y: 8 },
          { opacity: 1, y: 0, ease: "none", stagger: 0.08, scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: 0.6 } },
        );
        const media = el.querySelectorAll<HTMLElement>(".pill-media");
        gsap.fromTo(
          media,
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, ease: "back.out(1.6)", stagger: 0.2, scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: 0.6 } },
        );
      });
      // parallax
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amt = parseFloat(el.dataset.parallax || "0.2") * 100;
        gsap.fromTo(el, { yPercent: -amt / 2 }, { yPercent: amt / 2, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
      });
      // count-up
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count || "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => (el.textContent = Math.round(obj.v).toString()),
        });
      });
      // header shrink
      ScrollTrigger.create({
        start: 60,
        onUpdate: (self) => document.querySelector(".header")?.classList.toggle("is-stuck", self.scroll() > 60),
      });
    });

    ScrollTrigger.refresh();
    return () => {
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
