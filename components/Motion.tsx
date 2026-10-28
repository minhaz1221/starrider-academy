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
      document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => el.classList.add("is-split"));
      return;
    }

    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // One-shot entrances are driven by IntersectionObserver (true on-screen visibility),
    // not ScrollTrigger positions, which drift under the pinned hero + smooth scroll.
    // The hero pin/unpin produces a one-frame layout jump that makes elements far below
    // look "visible" for an instant, so confirm the position again two frames later.
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement & { _enter?: () => void };
        requestAnimationFrame(() => requestAnimationFrame(() => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight * 0.9 && r.bottom > 0) { io.unobserve(el); el._enter?.(); }
        }));
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.01 });
    const onEnter = (el: HTMLElement, fn: () => void) => { (el as HTMLElement & { _enter?: () => void })._enter = fn; io.observe(el); };

    const ctx = gsap.context(() => {
      // masked word rise for headings: each word sits in an overflow-hidden span and slides up
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        if (!el.classList.contains("is-split")) {
          const movers: HTMLElement[] = [];
          Array.from(el.childNodes).forEach((node) => {
            if (node.nodeType === 3) {
              const frag = document.createDocumentFragment();
              (node.textContent || "").split(/(\s+)/).forEach((part) => {
                if (!part) return;
                if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
                const mask = document.createElement("span"); mask.className = "sw";
                const inner = document.createElement("span"); inner.textContent = part;
                mask.appendChild(inner); frag.appendChild(mask); movers.push(inner);
              });
              el.replaceChild(frag, node);
            } else if (node.nodeType === 1) {
              const mask = document.createElement("span"); mask.className = "sw";
              el.replaceChild(mask, node); mask.appendChild(node); movers.push(node as HTMLElement);
            }
          });
          el.classList.add("is-split");
        }
        const inner = el.querySelectorAll<HTMLElement>(".sw > *");
        gsap.set(inner, { yPercent: 110, rotate: 2 });
        onEnter(el, () => gsap.to(inner, { yPercent: 0, rotate: 0, duration: 0.9, ease: "expo.out", stagger: 0.055, clearProps: "transform" }));
      });
      // reveal
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.set(el, { autoAlpha: 0, y: 40 });
        onEnter(el, () => gsap.to(el, { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }));
      });
      // stagger groups
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>(":scope > *");
        gsap.set(items, { autoAlpha: 0, y: 60, scale: 0.96 });
        onEnter(group, () => gsap.to(items, { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: "power3.out", stagger: 0.12 }));
      });
      // statement: words brighten one after another, pills pop in, when the block enters view
      gsap.utils.toArray<HTMLElement>("[data-words]").forEach((el) => {
        const words = el.querySelectorAll<HTMLElement>(".w");
        const media = el.querySelectorAll<HTMLElement>(".pill-media");
        gsap.set(words, { opacity: 0.18, y: 8 });
        gsap.set(media, { scale: 0.6, opacity: 0 });
        onEnter(el, () => {
          gsap.to(words, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.05 });
          gsap.to(media, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.6)", stagger: 0.18, delay: 0.2 });
        });
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
        onEnter(el, () => gsap.to(obj, { v: target, duration: 1.6, ease: "power2.out", onUpdate: () => (el.textContent = (target >= 1900 && target <= 2100 ? String(Math.round(obj.v)) : Math.round(obj.v).toLocaleString("en-AU"))) }));
      });
      // header shrink
      ScrollTrigger.create({
        start: 60,
        onUpdate: (self) => document.querySelector(".header")?.classList.toggle("is-stuck", self.scroll() > 60),
      });
    });

    // Re-measure once the hero pin spacer, fonts and images have settled — otherwise
    // trigger positions are computed on the shorter pre-pin layout and fire too early.
    const refresh = () => ScrollTrigger.refresh();
    const t1 = setTimeout(refresh, 50);
    const t2 = setTimeout(refresh, 600);
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => {
      io.disconnect();
      clearTimeout(t1); clearTimeout(t2);
      window.removeEventListener("load", refresh);
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
