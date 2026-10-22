"use client";
import { useRef, useState } from "react";
import { welcome } from "@/lib/data";

/** Welcome-to-the-Gold-Coast video band: autoplaying muted film, click to unmute. */
export default function Welcome() {
  const v = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const toggle = () => { const el = v.current; if (!el) return; el.muted = !el.muted; setMuted(el.muted); if (el.paused) el.play().catch(() => {}); };
  return (
    <section className="section welcome on-dark bg-navy" id="welcome">
      <div className="container">
        <div className="ruled"><h2 data-split>{welcome.eyebrow}</h2></div>
        <div className="lead-row">
          <p className="lead" data-reveal>{welcome.title}</p>
          <p className="welcome-text" data-reveal>{welcome.text}</p>
        </div>
        <div className="welcome-video" data-reveal>
          <video ref={v} src={welcome.video} poster="/ext/welcome-poster.jpg" muted loop playsInline autoPlay preload="metadata" data-parallax="0.08" />
          <div className="welcome-overlay" />
          <button type="button" className={`sound${muted ? "" : " on"}`} onClick={toggle} aria-pressed={!muted}>
            <span className="sound-bars" aria-hidden="true"><i /><i /><i /><i /></span>
            {muted ? "Sound on" : "Sound off"}
          </button>
          <div className="welcome-caption">
            <span className="mono">Gold Coast · Queensland · Australia</span>
            <strong>Welcome to Star Rider Academy</strong>
          </div>
        </div>
        <div className="welcome-facts" data-stagger>
          {welcome.facts.map(([k, val]) => (
            <div key={k} className="welcome-fact"><span className="mono">{k}</span><strong>{val}</strong></div>
          ))}
        </div>
      </div>
    </section>
  );
}
