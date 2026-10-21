"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroSlides } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);
const INTERVAL = 6000;

/**
 * CES-style hero: the video card sits in the Figma position (800px wide) and, as you scroll,
 * pins and expands to full-bleed while the headline slides across it. Slides auto-rotate.
 */
export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const section = useRef<HTMLElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const below = useRef<HTMLDivElement>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % heroSlides.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  useEffect(() => {
    videos.current.forEach((v, k) => {
      if (!v) return;
      if (k === i) { v.currentTime = 0; v.play().catch(() => {}); } else v.pause();
    });
  }, [i]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section.current, start: () => "top " + Math.round(document.querySelector(".header")?.getBoundingClientRect().height ?? 100) + "px", end: "+=110%", invalidateOnRefresh: true, scrub: 0.8, pin: true, anticipatePin: 1 },
      });
      tl.to(card.current, { width: "100%", height: () => "calc(100vh - " + Math.round(document.querySelector(".header")?.getBoundingClientRect().height ?? 100) + "px)", borderRadius: 0, ease: "power1.inOut" }, 0)
        .to(titleRef.current, { x: "-12vw", fontSize: "clamp(56px, 9.5vw, 150px)", bottom: "8vh", ease: "none" }, 0)
        .to(below.current, { autoAlpha: 0, y: -40, ease: "power1.in", duration: 0.35 }, 0);
    });
    return () => ctx.revert();
  }, []);

  const slide = heroSlides[i];

  return (
    <section className="hero bg-sky" ref={section}>
      <div className="dots" aria-hidden="true" />
      <div className="hero-inner">
        <div
          className="slider"
          ref={card}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Featured course areas"
        >
          {heroSlides.map((s, k) => (
            <div key={s.title} className={`slide${k === i ? " active" : ""}`} aria-hidden={k !== i}>
              <video ref={(el) => { videos.current[k] = el; }} src={s.video} poster={s.img} muted loop playsInline preload={k === 0 ? "auto" : "metadata"} autoPlay={k === 0} />
            </div>
          ))}
          <div className="slide-title" ref={titleRef} key={slide.title}>{slide.title}</div>
        </div>

        <div className="hero-below" ref={below}>
          <h1 className="hero-title" aria-live="polite">
            <span key={slide.title}>{slide.title}</span>
          </h1>
          <Link href={slide.href} className="btn-cyan">{slide.cta}</Link>
          <div className="dots-nav" role="tablist" aria-label="Choose slide">
            {heroSlides.map((s, k) => (
              <button key={s.title} type="button" role="tab" aria-selected={k === i} aria-label={s.title} className={k === i ? "active" : ""} onClick={() => setI(k)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
