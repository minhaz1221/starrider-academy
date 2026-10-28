"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSite } from "@/components/SiteContext";

const Chevron = () => (
  <svg aria-hidden="true" width="12" height="8" viewBox="0 0 12 8" fill="none">
    <path d="M1 1.5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function Header() {
  const { nav, megaMenu, site, base, logoHeader, logoAlt, short } = useSite();
  const [stuck, setStuck] = useState(false);
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = drawer ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [drawer]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setMega(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && (setMega(false), setDrawer(false));
    document.addEventListener("click", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  return (
    <>
      <div className="announce">{site.announcement}<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
      <header className={`header${stuck ? " is-stuck" : ""}`} ref={wrap}>
        <div className="header-inner">
          <Link href={base} className="logo" aria-label={`${short} home`}>
            <img src={logoHeader} alt={logoAlt} />
          </Link>

          <nav className="nav" aria-label="Primary">
            {nav.map((item) =>
              item.mega ? (
                <button
                  key={item.label}
                  type="button"
                  className="nav-link"
                  aria-expanded={mega}
                  aria-haspopup="true"
                  onClick={() => setMega((v) => !v)}
                  onMouseEnter={() => setMega(true)}
                >
                  {item.label} <Chevron />
                </button>
              ) : (
                <Link key={item.label} href={item.href} className="nav-link" onMouseEnter={() => setMega(false)}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="nav-actions">
            <button type="button" className="pill-outline" aria-label="Language: English">
              EN <Chevron />
            </button>
            <Link href={`${base}#contact`} className="pill-white">
              Contact us
            </Link>
            <button type="button" className="burger" aria-label="Open menu" onClick={() => setDrawer(true)}>
              <svg aria-hidden="true" width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1h18M1 7h18M1 13h18" />
              </svg>
            </button>
          </div>
        </div>

        {/* CES-style mega menu */}
        <div className={`mega${mega ? " open" : ""}`} onMouseLeave={() => setMega(false)}>
          <div className="mega-grid">
            <div>
              <h4>Course streams</h4>
              {megaMenu.streams.map((s) => (
                <Link key={s} href={base === "/" && s.startsWith("Cyber") ? "/courses/cyber-security-ai" : `${base}#courses`} onClick={() => setMega(false)}>
                  {s}
                </Link>
              ))}
            </div>
            <div>
              <h4>Study with us</h4>
              {megaMenu.study.map((s) => (
                <Link key={s} href={`${base}#pathways`} onClick={() => setMega(false)}>
                  {s}
                </Link>
              ))}
            </div>
            <div>
              <h4>Featured</h4>
              <Link href={base === "/" ? "/courses/cyber-security-ai" : `${base}#courses`} className="mega-feature" onClick={() => setMega(false)}>
                {megaMenu.featured}
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div className={`drawer${drawer ? " open" : ""}`} aria-hidden={!drawer}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <img src={logoHeader} alt={short} style={{ height: 44 }} />
          <button type="button" className="burger" aria-label="Close menu" onClick={() => setDrawer(false)}>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2 2l14 14M16 2L2 16" />
            </svg>
          </button>
        </div>
        {nav.map((item) => (
          <Link key={item.label} href={item.href} onClick={() => setDrawer(false)}>
            {item.label}
          </Link>
        ))}
        <Link href={`${base}#contact`} className="pill-white" style={{ alignSelf: "flex-start", marginTop: 16 }} onClick={() => setDrawer(false)}>
          Contact us
        </Link>
      </div>
    </>
  );
}
