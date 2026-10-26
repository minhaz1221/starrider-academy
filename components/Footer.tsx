"use client";
import Link from "next/link";
import { useSite } from "@/components/SiteContext";

export default function Footer() {
  const { site, footerCols, logoFooter, logoAlt, legal, base } = useSite();
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logoFooter} alt={logoAlt} />
            <p>
              {site.address}<br />
              <a href={site.phoneHref} style={{ display: "inline" }}>{site.phone}</a>  ·  <a href={`mailto:${site.email}`} style={{ display: "inline" }}>{site.email}</a>
            </p>
          </div>
          {footerCols.map((c) => (
            <div key={c.h}>
              <h5>{c.h}</h5>
              {c.items.map((it) => (<Link key={it} href={`${base}#`}>{it}</Link>))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>{legal}</span>
          <span>Privacy · Terms · Student handbook</span>
        </div>
      </div>
    </footer>
  );
}
