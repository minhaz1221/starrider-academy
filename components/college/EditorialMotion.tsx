"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Editorial-layout motion: pinned hero with fanning image stack, horizontal courses, hover-image list,
 *  expanding video, stacking cards, giant closing word, magnetic buttons, custom cursor. */
export default function EditorialMotion({ bold }: { bold: boolean }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 720px)").matches;
    const q = gsap.utils.selector(document.body);
    const cleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      /* ---- hero: pin, fan the stack into a row, shrink the title ---- */
      const hero = document.querySelector<HTMLElement>(".e-hero");
      const cards = q<HTMLElement>(".e-stack .e-card");
      if (hero && cards.length) {
        const rot = [-9, -3, 4, 10], ox = [-36, -12, 12, 36], oy = [0, -10, -20, -30];
        cards.forEach((c, i) => gsap.set(c, { rotate: rot[i], x: ox[i], y: oy[i], zIndex: i }));
        if (!reduce && !mobile) {
          const w = cards[0].getBoundingClientRect().width + 20;
          const tl = gsap.timeline({ scrollTrigger: { trigger: hero, start: "top top", end: "+=120%", scrub: 0.9, pin: true, anticipatePin: 1 } });
          cards.forEach((c, i) => tl.to(c, { x: -i * w * 0.86, y: 150, rotate: 0, ease: "power2.inOut" }, 0));
          tl.to(".e-hero-title", { scale: 0.46, y: -190, ease: "power2.inOut" }, 0)
            .to(".e-blob", { xPercent: -30, yPercent: 25, scale: 1.25, ease: "none" }, 0)
            .to(".e-hero-top .e-sub, .e-hero-top .c-eyebrow", { opacity: 0, y: -20, ease: "power2.in" }, 0)
            .to(".e-hero-ctas", { y: -40, ease: "none" }, 0);
        }
      }

      /* ---- statement words scrub ---- */
      q<HTMLElement>(".e-statement").forEach((el) => {
        const words = el.querySelectorAll<HTMLElement>(".w");
        gsap.set(words, { opacity: 0.14 });
        gsap.to(words, { opacity: 1, stagger: 0.06, ease: "none", scrollTrigger: { trigger: el, start: "top 75%", end: "bottom 35%", scrub: 0.5 } });
      });
      q<HTMLElement>(".e-col figure img").forEach((img, i) => {
        gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: 1 } });
      });

      /* ---- horizontal courses ---- */
      const hs = document.querySelector<HTMLElement>(".e-hscroll");
      const track = document.querySelector<HTMLElement>(".e-track");
      if (hs && track && !mobile) {
        const dist = () => track.scrollWidth - window.innerWidth;
        const tl = gsap.timeline({ scrollTrigger: { trigger: hs, start: "top top", end: () => `+=${dist()}`, scrub: 1, pin: true, anticipatePin: 1, invalidateOnRefresh: true } });
        tl.to(track, { x: () => -dist(), ease: "none" }, 0).to(".e-hprogress i", { xPercent: 400, ease: "none" }, 0);
      }

      /* ---- expanding video ---- */
      const ex = document.querySelector<HTMLElement>(".e-expand");
      const box = document.querySelector<HTMLElement>(".e-expand-box");
      if (ex && box && !reduce && !mobile) {
        const tl = gsap.timeline({ scrollTrigger: { trigger: ex, start: "top top", end: "+=100%", scrub: 0.8, pin: true, anticipatePin: 1 } });
        tl.fromTo(box, { width: "62vw", height: "70vh", borderRadius: 24 }, { width: "100vw", height: "100vh", borderRadius: 0, ease: "power2.inOut" }, 0)
          .to(".e-expand-cap", { opacity: 1, y: 0, ease: "power2.out" }, 0.5);
      }

      /* ---- stacking testimonials ---- */
      const tcards = q<HTMLElement>(".e-tcard");
      if (!mobile) tcards.forEach((card, i) => {
        if (i === tcards.length - 1) return;
        const next = tcards[i + 1];
        gsap.to(card, { scale: 0.94 - i * 0.02, opacity: 0.6, ease: "none", scrollTrigger: { trigger: next, start: "top 90%", end: "top 160px", scrub: 0.6 } });
      });

      /* ---- giant word ---- */
      q<HTMLElement>(".e-giant h2").forEach((el) => {
        gsap.fromTo(el, { scale: 0.82, backgroundPosition: "0% 50%" }, { scale: 1, backgroundPosition: "100% 50%", ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom 40%", scrub: 0.8 } });
      });

      /* ---- image reveals (clip) ---- */
      q<HTMLElement>("[data-clip]").forEach((el) => {
        gsap.fromTo(el, { clipPath: "inset(12% 8% 12% 8% round 20px)" }, { clipPath: "inset(0% 0% 0% 0% round 20px)", ease: "none", scrollTrigger: { trigger: el, start: "top 90%", end: "top 40%", scrub: 0.6 } });
      });
    });

    /* ---- hover-image list ---- */
    const float = document.querySelector<HTMLElement>(".e-float");
    const rows = Array.from(document.querySelectorAll<HTMLElement>(".e-row[data-img]"));
    if (float && rows.length && !mobile) {
      const imgs = Array.from(float.querySelectorAll<HTMLImageElement>("img"));
      let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
      const loop = () => { cx += (tx - cx) * 0.14; cy += (ty - cy) * 0.14; float.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)` + (float.classList.contains("is-on") ? " scale(1)" : " scale(.9) rotate(-4deg)"); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
      const move = (e: MouseEvent) => { tx = e.clientX + 40; ty = e.clientY; };
      rows.forEach((row) => {
        row.addEventListener("mouseenter", (e) => { float.classList.add("is-on"); imgs.forEach((im) => im.classList.toggle("is-on", im.dataset.key === row.dataset.img)); tx = cx = (e as MouseEvent).clientX + 40; ty = cy = (e as MouseEvent).clientY; });
        row.addEventListener("mouseleave", () => float.classList.remove("is-on"));
        row.addEventListener("mousemove", move);
      });
      cleanups.push(() => cancelAnimationFrame(raf));
    }

    /* ---- magnetic buttons ---- */
    if (!mobile) document.querySelectorAll<HTMLElement>(".e-magnet").forEach((m) => {
      const onMove = (e: MouseEvent) => { const r = m.getBoundingClientRect(); const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2); gsap.to(m, { x: dx * 0.3, y: dy * 0.3, duration: 0.6, ease: "power3.out" }); };
      const onLeave = () => gsap.to(m, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, .4)" });
      m.addEventListener("mousemove", onMove); m.addEventListener("mouseleave", onLeave);
      cleanups.push(() => { m.removeEventListener("mousemove", onMove); m.removeEventListener("mouseleave", onLeave); });
    });

    /* ---- cursor ---- */
    const cur = document.querySelector<HTMLElement>(".e-cursor");
    if (cur && !mobile && window.matchMedia("(hover: hover)").matches) {
      const label = cur.querySelector("span")!;
      let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
      const loop = () => { cx += (x - cx) * 0.22; cy += (y - cy) * 0.22; cur.style.left = `${cx}px`; cur.style.top = `${cy}px`; raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
      const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
      const over = (e: MouseEvent) => {
        const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor], a, button");
        if (t) { const txt = t.dataset.cursor; cur.classList.toggle("is-big", !!txt); cur.classList.toggle("is-grad", !!txt); label.textContent = txt || ""; if (!txt) cur.style.width = cur.style.height = "28px"; }
        else { cur.classList.remove("is-big", "is-grad"); cur.style.width = cur.style.height = ""; label.textContent = ""; }
      };
      window.addEventListener("mousemove", move); document.addEventListener("mouseover", over);
      cleanups.push(() => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); });
    }

    const t1 = setTimeout(() => ScrollTrigger.refresh(), 300);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); ctx.revert(); cleanups.forEach((f) => f()); };
  }, [bold]);
  return null;
}
