"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSite } from "@/components/SiteContext";
import DotField from "@/components/college/DotField";

gsap.registerPlugin(ScrollTrigger);

const Arrow = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

/**
 * CES-style hero: headline + right-hand copy, then a media card that sticks under the
 * header and opens from the 1240px container to full-bleed as you scroll. The next
 * section then slides up over the held video, so the hand-off is one continuous motion.
 */
export default function Hero() {
  const { hero, heroVideo, theme } = useSite();
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const shade = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const m = media.current, v = vid.current;
    if (!m || !v) return;
    const mob = window.innerWidth <= 720;
    const want = mob ? heroVideo.mobile : heroVideo.desktop;
    if (!v.currentSrc.endsWith(want)) { v.src = want; v.poster = mob ? heroVideo.posterMobile : heroVideo.poster; v.play().catch(() => {}); }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { m.style.clipPath = "none"; return; }
    let onRefresh: () => void = () => {};
    const ctx = gsap.context(() => {
      // Card geometry in px, recomputed on resize. The media layer is always full-bleed and
      // sticky; the "card" is just a clip-path, so the expand is GPU-cheap and never shifts layout.
      const geo = () => {
        const w = window.innerWidth, mob = w <= 720;
        const full = m.getBoundingClientRect().height;
        const c = section.current?.querySelector<HTMLElement>(".container");
        const side = c ? c.getBoundingClientRect().left + parseFloat(getComputedStyle(c).paddingLeft) : 24;
        return { full, card: mob ? Math.min(w * 0.72, 480) : 620, side: Math.max(side, 12), r: mob ? 18 : 24 };
      };
      const clipFrom = () => { const g = geo(); return `inset(0px ${g.side}px ${Math.max(g.full - g.card, 0)}px ${g.side}px round ${g.r}px)`; };
      // Fit the whole video frame inside the starting card (instead of cropping the middle of a
      // full-bleed frame), then let it grow with the card. Scale/translate only -> no layout work.
      // The video element is sized to the clip's true aspect (no internal cropping) and sits
      // centred in the full-bleed layer at "cover" size. At the start it is scaled down as one
      // piece so the whole frame just covers the card; it then grows back to full-bleed.
      const size = () => {
        const g = geo(), W = m.getBoundingClientRect().width;
        const ar = v.videoWidth && v.videoHeight ? v.videoWidth / v.videoHeight : (window.innerWidth <= 720 ? 0.8 : 16 / 9);
        const cw = Math.max(W, g.full * ar), ch = cw / ar;           // cover size at full-bleed
        gsap.set(v, { width: Math.ceil(cw), height: Math.ceil(ch) });
        const sc = Math.min(1, Math.max((W - 2 * g.side) / cw, g.card / ch));
        return { scale: sc, y: g.card / 2 - g.full / 2 };
      };
      const fit = size;
      gsap.set(v, { left: "50%", top: "50%", xPercent: -50, yPercent: -50, transformOrigin: "50% 50%", ...size() });
      v.addEventListener("loadedmetadata", () => ScrollTrigger.refresh(), { once: true });
      onRefresh = () => { size(); };
      ScrollTrigger.addEventListener("refreshInit", onRefresh);
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: track.current,
          start: 0, // begin with the very first scroll so the card opens as it rises
          end: "bottom bottom",
          scrub: 1.1,
          invalidateOnRefresh: true,
        },
      });
      // 0 -> .5 : card opens to full-bleed (eased in and out so it starts and lands softly)
      tl.fromTo(m, { clipPath: clipFrom }, { clipPath: "inset(0px 0px 0px 0px round 0px)", ease: "power3.inOut", duration: 0.5 }, 0)
        .fromTo(v, { scale: () => fit().scale, y: () => fit().y }, { scale: 1, y: 0, ease: "power3.inOut", duration: 0.5 }, 0)
        .to(copy.current, { autoAlpha: 0, y: -40, ease: "power2.in", duration: 0.22 }, 0)
        // .5 -> 1 : hold full-bleed, soft shade while the next section slides over it
        .fromTo(shade.current, { opacity: 0 }, { opacity: 0.55, ease: "power1.in", duration: 0.35 }, 0.65);
    });
    const ro = new ResizeObserver(() => ScrollTrigger.refresh());
    ro.observe(document.documentElement);
    return () => { ro.disconnect(); ScrollTrigger.removeEventListener("refreshInit", onRefresh); ctx.revert(); };
  }, []);

  const words = hero.title.split(" ");
  // one continuous logo gradient across the accent words (each word shows its slice of it)
  const gradPos = (j: number, n: number) => ({ backgroundSize: `${n * 100}% 100%`, backgroundPosition: `${n > 1 ? (j / (n - 1)) * 100 : 0}% 0` });
  return (
    <section className="hero" ref={section}>
      <div className="hero-glow" aria-hidden="true" />
      {theme === "sra" && (
        <div className="hero-bubbles" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
      )}
      <DotField color={theme === "nzcdi" ? "31,168,134" : theme === "sra" ? "3,136,203" : "16,213,240"} color2={theme === "sra" ? "241,30,121" : theme === "nzcdi" ? "16,213,240" : "3,136,203"} className="hero-dots" />
      <div className="container">
        <div className="hero-copy" ref={copy}>
          <div>
            <div className="hero-eyebrow">{hero.eyebrow}</div>
            <h1 aria-label={hero.title}>
              {words.map((w, i) => {
                const accent = i >= hero.accentFrom;
                return (
                  <span key={i}>
                    <span className="sw" aria-hidden="true"><span className={`wd${accent ? " accent" : ""}`} style={{ animationDelay: `${0.1 + i * 0.07}s`, ...(accent ? gradPos(i - hero.accentFrom, words.length - hero.accentFrom) : {}) }}>{w}</span></span>
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
      <div className="media-track" ref={track}>
        <div className="media-stage" ref={stage}>
          <div className="media" ref={media}>
            <video ref={vid} muted loop playsInline autoPlay preload="auto" poster={heroVideo.poster}>
              <source src={heroVideo.mobile} type="video/mp4" media="(max-width: 720px)" />
              <source src={heroVideo.desktop} type="video/mp4" />
            </video>
            <div className="media-shade" ref={shade} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
