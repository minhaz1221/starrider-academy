"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** CES-style motion: key visual pins and grows to full width while its words fly apart;
 *  corner glows drift and follow the mouse; gradient washes shift hue with scroll. */
export default function CesMotion({ bold }: { bold: boolean }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 720px)").matches;
    (window as unknown as { __ST?: typeof ScrollTrigger }).__ST = ScrollTrigger;
    const cleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      const stage = document.querySelector<HTMLElement>(".k-kv-stage");
      const kv = document.querySelector<HTMLElement>(".k-kv");
      const words = gsap.utils.toArray<HTMLElement>(".k-kv-words span");
      if (stage && kv && !reduce && !mobile) {
        const tl = gsap.timeline({ scrollTrigger: { trigger: stage, start: "top top", end: "+=130%", scrub: 0.9, pin: true, anticipatePin: 1 } });
        tl.fromTo(kv, { width: "80vw", height: "78vh", borderRadius: 20 }, { width: "100vw", height: "100vh", borderRadius: 0, ease: "power2.inOut", duration: 1 }, 0);
        const targets = [
          { x: "-32vw", y: "26vh", scale: 1.25 },
          { x: "0vw", y: "-14vh", scale: 1.0 },
          { x: "30vw", y: "-30vh", scale: 1.15 },
        ];
        words.forEach((w, i) => tl.to(w, { ...targets[i % 3], ease: "power2.inOut", duration: 1 }, 0.15));
        tl.to(".k-hero-copy", { opacity: 0, y: -40, ease: "power2.in", duration: 0.4 }, 0);
      }

      // glows drift + breathe
      gsap.utils.toArray<HTMLElement>(".k-glow").forEach((g, i) => {
        gsap.to(g, { x: (i % 2 ? -1 : 1) * (bold ? 120 : 60), y: (i % 3 ? 1 : -1) * (bold ? 90 : 50), scale: bold ? 1.2 : 1.08, duration: 9 + i * 2.5, yoyo: true, repeat: -1, ease: "sine.inOut" });
      });

      // key-art hue shift with scroll (the "colour changes while scrolling")
      const site = document.querySelector<HTMLElement>(".k-site");
      ScrollTrigger.create({ start: 0, end: "max", scrub: true, onUpdate: (s) => site?.style.setProperty("--c-hue", `${Math.round(s.progress * (bold ? 45 : 16))}deg`) });

      // dark sections: glows slide with scroll
      gsap.utils.toArray<HTMLElement>(".k-dark .k-glow").forEach((g) => {
        gsap.fromTo(g, { yPercent: -20 }, { yPercent: 20, ease: "none", scrollTrigger: { trigger: g.parentElement, start: "top bottom", end: "bottom top", scrub: 1 } });
      });
    });

    // mouse parallax on hero glows
    const glows = Array.from(document.querySelectorAll<HTMLElement>(".k-hero .k-glow"));
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5, y = e.clientY / window.innerHeight - 0.5;
      glows.forEach((g, i) => gsap.to(g, { xPercent: x * (bold ? 10 : 5) * (i + 1), yPercent: y * (bold ? 10 : 5) * (i + 1), duration: 1.8, ease: "power3.out", overwrite: "auto" }));
    };
    if (!mobile) { window.addEventListener("mousemove", onMove); cleanups.push(() => window.removeEventListener("mousemove", onMove)); }

    // pause button
    const btn = document.querySelector<HTMLButtonElement>(".k-kv-pause");
    const vid = document.querySelector<HTMLVideoElement>(".k-kv video");
    if (btn && vid) {
      const onClick = () => { if (vid.paused) { vid.play(); btn.setAttribute("aria-label", "Pause"); } else { vid.pause(); btn.setAttribute("aria-label", "Play"); } btn.classList.toggle("is-paused", vid.paused); };
      btn.addEventListener("click", onClick); cleanups.push(() => btn.removeEventListener("click", onClick));
    }

    const t1 = setTimeout(() => ScrollTrigger.refresh(), 300);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); ctx.revert(); cleanups.forEach((f) => f()); };
  }, [bold]);
  return null;
}
