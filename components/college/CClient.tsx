"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Orb parallax on mouse move + (bold mode) gradient hue drift scrubbed to scroll. */
export function COrbMotion({ bold }: { bold: boolean }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const orbs = Array.from(document.querySelectorAll<HTMLElement>(".c-hero .c-orb"));
    const strength = bold ? 40 : 16;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5), y = (e.clientY / window.innerHeight - 0.5);
      orbs.forEach((o, i) => gsap.to(o, { x: x * strength * (i + 1), y: y * strength * (i + 1), duration: 1.6, ease: "power3.out", overwrite: "auto" }));
    };
    window.addEventListener("mousemove", onMove);
    let st: ScrollTrigger | undefined;
    if (bold) {
      // the whole page's gradient accents rotate hue as you scroll — the "colour changes" she asked for
      const site = document.querySelector<HTMLElement>(".c-site");
      st = ScrollTrigger.create({ start: 0, end: "max", onUpdate: (s) => site?.style.setProperty("--c-hue", `${Math.round(s.progress * 40)}deg`) });
    }
    return () => { window.removeEventListener("mousemove", onMove); st?.kill(); };
  }, [bold]);
  return null;
}

export function CVideo({ src, poster, caption, sub }: { src?: string; poster: string; caption: string; sub: string }) {
  const v = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const toggle = () => { const el = v.current; if (!el) return; el.muted = !el.muted; setMuted(el.muted); if (el.paused) el.play().catch(() => {}); };
  return (
    <div className="c-video" data-reveal>
      {src ? <video ref={v} src={src} poster={poster} muted loop playsInline autoPlay preload="metadata" /> : <img src={poster} alt="" />}
      {src && <button type="button" className="c-sound" onClick={toggle} aria-pressed={!muted}>{muted ? "Sound on" : "Sound off"}</button>}
      <div className="c-video-cap"><span>{sub}</span><strong>{caption}</strong></div>
    </div>
  );
}

const Arrow = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export function CForm({ courses }: { courses: string[] }) {
  const [sent, setSent] = useState(false);
  return (
    <form className="c-form" data-reveal onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      {sent ? (
        <div className="c-form-done">
          <span className="c-kicker">Thank you</span>
          <strong>Your enquiry has been received.</strong>
          <p>We&apos;ll be in touch within one business day with next steps and intake dates.</p>
          <button type="button" className="c-btn c-btn--line" onClick={() => setSent(false)} style={{ justifySelf: "start" }}>Send another <Arrow /></button>
        </div>
      ) : (
        <>
          <div className="c-form-row">
            <label>First name<input name="first" type="text" placeholder="Jane" required /></label>
            <label>Last name<input name="last" type="text" placeholder="Smith" required /></label>
          </div>
          <div className="c-form-row">
            <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
            <label>Phone<input name="phone" type="tel" placeholder="+61" /></label>
          </div>
          <div className="c-form-row">
            <label>I am
              <select name="type" defaultValue="intl">
                <option value="intl">An international student</option>
                <option value="dom">A domestic student</option>
                <option value="emp">An employer</option>
              </select>
            </label>
            <label>Course interest
              <select name="course" defaultValue={courses[0]}>{courses.map((c) => <option key={c}>{c}</option>)}</select>
            </label>
          </div>
          <label>Message<textarea name="message" rows={4} placeholder="Tell us about your goals, preferred intake or any questions." /></label>
          <div className="c-form-foot">
            <span className="c-form-note">By submitting you agree to be contacted about courses and intakes.</span>
            <button type="submit" className="c-btn c-btn--grad">Send enquiry <Arrow /></button>
          </div>
        </>
      )}
    </form>
  );
}
