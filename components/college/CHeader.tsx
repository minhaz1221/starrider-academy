"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Brand } from "@/lib/brands";

const items = ["About", "Courses", "Study with us", "Events", "News"];

export default function CHeader({ brand }: { brand: Brand }) {
  const [stuck, setStuck] = useState(false);
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const wrap = useRef<HTMLElement>(null);
  const base = `/${brand.slug}`;

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = drawer ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [drawer]);
  useEffect(() => {
    const close = (e: MouseEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) setMega(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <>
      <header className={`c-header${stuck ? " is-stuck" : ""}`} ref={wrap}>
        <div className="c-header-in">
          <Link href={base} className="c-logo" aria-label={`${brand.name} home`}><img src={brand.logo} alt={brand.short} /></Link>
          <nav className="c-nav" aria-label="Primary">
            {items.map((it) => it === "Courses" ? (
              <button key={it} type="button" aria-expanded={mega} onClick={() => setMega((m) => !m)}>
                {it}<svg aria-hidden="true" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </button>
            ) : (
              <a key={it} href={`${base}#${it.toLowerCase().replace(/\s.*/, "")}`}>{it}</a>
            ))}
          </nav>
          <div className="c-header-actions">
            <button type="button" className="c-lang">EN<svg aria-hidden="true" width="10" height="7" viewBox="0 0 12 8" fill="none"><path d="M1 1.5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button>
            <a href={`${base}#enquire`} className="c-btn c-btn--ink c-btn--sm" style={{ display: drawer ? "none" : undefined }}>Apply now</a>
            <button type="button" className="c-burger" aria-label="Menu" onClick={() => setDrawer(true)}><span /><span /><span /></button>
          </div>
        </div>
        {mega && (
          <div className="c-mega">
            <div className="c-mega-in">
              <div>
                <span className="c-kicker">Study areas</span>
                <ul>{["Cyber Security & AI", "Telecommunications", "Networking & Data Centre", "Digital Media & Film", "Business", "English (ELICOS)"].map((s) => <li key={s}><a href={`${base}#courses`}>{s}</a></li>)}</ul>
              </div>
              <div>
                <span className="c-kicker">Ways to study</span>
                <ul>{["International students", "Domestic students", "Traineeships", "Government-funded", "How to enrol"].map((s) => <li key={s}><a href={`${base}#study`}>{s}</a></li>)}</ul>
              </div>
              <a href={`${base}#courses`} className="c-mega-card">
                <img src={brand.courses[0].img} alt="" />
                <div><span className="c-kicker" style={{ color: "rgba(255,255,255,.8)" }}>Featured</span><strong style={{ fontSize: 20 }}>{brand.courses[0].title}</strong></div>
              </a>
            </div>
          </div>
        )}
      </header>
      {drawer && (
        <div className="c-drawer" role="dialog" aria-modal="true">
          <div className="c-drawer-top">
            <img src={brand.logo} alt={brand.short} style={{ height: 36 }} />
            <button type="button" className="c-burger" aria-label="Close" onClick={() => setDrawer(false)} style={{ display: "inline-flex" }}>✕</button>
          </div>
          {items.map((it) => <a key={it} href={`${base}#${it.toLowerCase().replace(/\s.*/, "")}`} onClick={() => setDrawer(false)}>{it}</a>)}
          <a href={`${base}#enquire`} className="c-btn c-btn--grad" onClick={() => setDrawer(false)} style={{ marginTop: 20, justifyContent: "center", borderBottom: 0 }}>Apply now</a>
        </div>
      )}
    </>
  );
}
