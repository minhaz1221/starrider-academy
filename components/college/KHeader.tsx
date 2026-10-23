"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Brand } from "@/lib/brands";

const items = ["Study", "Courses", "Campus", "International", "News"];
const Chev = () => <svg aria-hidden="true" width="10" height="7" viewBox="0 0 12 8" fill="none"><path d="M1 1.5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;

export default function KHeader({ brand }: { brand: Brand }) {
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const wrap = useRef<HTMLElement>(null);
  const base = `/${brand.slug}`;
  useEffect(() => { document.documentElement.style.overflow = drawer ? "hidden" : ""; return () => { document.documentElement.style.overflow = ""; }; }, [drawer]);
  useEffect(() => {
    const close = (e: MouseEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) setMega(false); };
    document.addEventListener("click", close); return () => document.removeEventListener("click", close);
  }, []);
  const to = (it: string) => `${base}#${{ Study: "study", Courses: "courses", Campus: "about", International: "guides", News: "news" }[it]}`;
  return (
    <>
      <header className="k-header" ref={wrap}>
        <div className="k-wrap">
          <Link href={base} className="k-logo" aria-label={`${brand.name} home`}><img src={brand.logoWhite} alt={brand.short} /></Link>
          <nav className="k-nav" aria-label="Primary">
            {items.map((it) => it === "Courses" ? (
              <button key={it} type="button" aria-expanded={mega} onClick={() => setMega((m) => !m)}>{it}<Chev /></button>
            ) : <a key={it} href={to(it)}>{it}<Chev /></a>)}
          </nav>
          <div className="k-header-actions">
            <a href={`${base}#enquire`} className="k-btn k-btn--pale">Apply now</a>
            <a href={`${base}#events`} className="k-btn k-btn--pale">Book a tour</a>
            <button type="button" className="k-icon-btn" aria-label="Search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg></button>
            <button type="button" className="k-icon-btn k-burger" aria-label="Menu" onClick={() => setDrawer(true)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg></button>
          </div>
        </div>
        {mega && (
          <div className="k-mega">
            <div className="k-wrap">
              <div><span className="k-label">Study areas</span><ul>{["Cyber Security & AI", "Telecommunications", "Networking & Data Centre", "Digital Media & Film", "Business", "English (ELICOS)"].map((s) => <li key={s}><a href={`${base}#courses`}>{s}</a></li>)}</ul></div>
              <div><span className="k-label">Ways to study</span><ul>{["International students", "Domestic students", "Traineeships", "Government-funded", "How to enrol"].map((s) => <li key={s}><a href={`${base}#study`}>{s}</a></li>)}</ul></div>
              <div><span className="k-label">Featured guide</span><a href={`${base}#guides`} className="k-card" style={{ marginTop: 14 }}><div className="k-art" style={{ aspectRatio: "16/9", ["--art" as string]: brand.arts[0] } as React.CSSProperties}><img src={brand.pathways[0].img} alt="" /></div><div className="k-card-body"><h3 className="k-h3" style={{ fontSize: 18 }}>Guide for international students</h3></div></a></div>
            </div>
          </div>
        )}
      </header>
      {drawer && (
        <div className="k-drawer" role="dialog" aria-modal="true">
          <div className="k-drawer-top"><img src={brand.logoWhite} alt={brand.short} style={{ height: 32 }} /><button type="button" className="k-icon-btn" aria-label="Close" onClick={() => setDrawer(false)}>✕</button></div>
          {items.map((it) => <a key={it} href={to(it)} onClick={() => setDrawer(false)}>{it}</a>)}
          <a href={`${base}#enquire`} className="k-btn k-btn--pale" onClick={() => setDrawer(false)} style={{ marginTop: 20, justifyContent: "center", borderBottom: 0 }}>Apply now</a>
        </div>
      )}
    </>
  );
}
