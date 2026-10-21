"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/data";

const INTERVAL = 4500;

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % heroSlides.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  const slide = heroSlides[i];

  return (
    <section className="hero bg-sky">
      <div className="dots" aria-hidden="true" />
      <div className="hero-inner">
        <div
          className="slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Featured course areas"
        >
          {heroSlides.map((s, k) => (
            <div key={s.title} className={`slide${k === i ? " active" : ""}`} aria-hidden={k !== i}>
              <img src={s.img} alt="" />
              <div className="slide-title">{s.title}</div>
            </div>
          ))}
        </div>

        <h1 className="hero-title" aria-live="polite">
          <span key={slide.title}>{slide.title}</span>
        </h1>
        <Link href={slide.href} className="btn-cyan">
          {slide.cta}
        </Link>

        <div className="dots-nav" role="tablist" aria-label="Choose slide">
          {heroSlides.map((s, k) => (
            <button
              key={s.title}
              type="button"
              role="tab"
              aria-selected={k === i}
              aria-label={s.title}
              className={k === i ? "active" : ""}
              onClick={() => setI(k)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
