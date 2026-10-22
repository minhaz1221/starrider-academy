import Link from "next/link";
import { site, footerCols } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/brand/logo-white.png" alt="Star Rider Academy" />
            <p>
              {site.address}<br />
              <a href={site.phoneHref} style={{ display: "inline" }}>{site.phone}</a>  ·  <a href={`mailto:${site.email}`} style={{ display: "inline" }}>{site.email}</a>
            </p>
          </div>
          {footerCols.map((c) => (
            <div key={c.h}>
              <h5>{c.h}</h5>
              {c.items.map((it) => (<Link key={it} href="/#">{it}</Link>))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Star Rider Academy · RTO 00000 · CRICOS 00000A</span>
          <span>Privacy · Terms · Student handbook</span>
        </div>
      </div>
    </footer>
  );
}
