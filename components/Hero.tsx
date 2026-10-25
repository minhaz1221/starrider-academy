"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero } from "@/lib/data";
import DotField from "@/components/college/DotField";

gsap.registerPlugin(ScrollTrigger);

const Arrow = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

/**
 * CES-style hero: headline + right-hand copy, then a media card that pins and
 * expands from the 1240px container to full-bleed as you scroll.
 */
export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const headerH = () => Math.round(document.querySelector(".header")?.getBoundingClientRect().height ?? 88);
      gsap.timeline({
        scrollTrigger: { trigger: stage.current, start: () => "top " + headerH() + "px", end: "+=90%", scrub: 0.8, pin: true, anticipatePin: 1, invalidateOnRefresh: true },
      })
        .to(media.current, { "--inset": 0, ease: "power1.inOut" }, 0)
        .to(copy.current, { autoAlpha: 0, y: -30, ease: "power1.in", duration: 0.3 }, 0);
    });
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  const words = hero.title.split(" ");
  return (
    <section className="hero" ref={section}>
      <div className="hero-glow" aria-hidden="true" />
      <DotField color="16,213,240" color2="3,136,203" className="hero-dots" />
      <div className="container">
        <div className="hero-copy" ref={copy}>
          <div>
            <div className="hero-eyebrow">{hero.eyebrow}</div>
            <h1 aria-label={hero.title}>
              {words.map((w, i) => {
                const accent = i >= hero.accentFrom;
                return (
                  <span key={i}>
                    <span className="sw" aria-hidden="true"><span className={`wd${accent ? " accent" : ""}`} style={{ animationDelay: `${0.1 + i * 0.07}s` }}>{w}</span></span>
                    {i < words.length - 1 ? " " : ""}
                  </span>
                );
              })}
            </h1>
          </div>
          <div className="hero-right">
            <p>{hero.sub}</p>
            <div className="hero-btns">
              <Link href={hero.primary.href} className="btn btn--pink">{hero.primary.label} <Arrow /></Link>
              <Link href={hero.secondary.href} className="btn btn--ghost">{hero.secondary.label} <Arrow /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="media-stage" ref={stage}>
        <div className="media" ref={media}>
          <video src="/ext/hero-loop-sra.mp4" poster="/ext/hero-loop-sra.jpg" muted loop playsInline autoPlay preload="auto" />
        </div>
      </div>
    </section>
  );
}
