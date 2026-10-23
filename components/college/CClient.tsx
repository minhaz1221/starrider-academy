"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Orb parallax on mouse move + (bold mode) gradient hue drift scrubbed to scroll. */
export function COrbMotion({ bold }: { bold: boolean }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const orbs = Array.from(document.querySelectorAll<HTMLElement>(".c-bg .c-orb"));
    const strength = bold ? 10 : 4; // percent of own size
    // ambient breathing (scale only, so it composes with the scroll-driven x/y in CScroll)
    const breathe = orbs.map((o, i) => gsap.to(o, { scale: bold ? 1.25 : 1.12, duration: 7 + i * 2.5, yoyo: true, repeat: -1, ease: "sine.inOut" }));
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5), y = (e.clientY / window.innerHeight - 0.5);
      orbs.forEach((o, i) => gsap.to(o, { xPercent: x * strength * (i + 1), yPercent: y * strength * (i + 1), duration: 1.8, ease: "power3.out", overwrite: "auto" }));
    };
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); breathe.forEach((t) => t.kill()); };
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
