import Link from "next/link";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wide">
        <div className="footer-grid">
          <div>
            <img src="/brand/logo-colour.png" alt="Star Rider Academy" style={{ height: 70, width: "auto", marginBottom: 18 }} />
            <p style={{ fontSize: 15, lineHeight: 1.6 }}>{site.address}</p>
            <a href={site.phoneHref} style={{ color: "#fff", fontWeight: 600, marginTop: 8 }}>{site.phone}</a>
            <a href={`mailto:${site.email}`} style={{ color: "#8ee8f5" }}>{site.email}</a>
          </div>
          <div>
            <h5>Courses</h5>
            <Link href="/courses/cyber-security-ai">Cyber Security &amp; AI</Link>
            <Link href="/#courses">Telecommunications</Link>
            <Link href="/#courses">Networking &amp; Data Centre</Link>
            <Link href="/#courses">Digital Media &amp; Film</Link>
            <Link href="/#courses">Business</Link>
            <Link href="/#courses">English (ELICOS)</Link>
          </div>
          <div>
            <h5>Study</h5>
            <Link href="/#pathways">International Students</Link>
            <Link href="/#pathways">Australians</Link>
            <Link href="/#pathways">Traineeships</Link>
            <Link href="/#pathways">Government-Funded</Link>
            <Link href="/#enrol">How to Enrol</Link>
          </div>
          <div>
            <h5>Academy</h5>
            <Link href="/#about">About Us</Link>
            <Link href="/#events">Events</Link>
            <Link href="/#news">News &amp; Media</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Star Rider Academy · RTO [NUMBER] · CRICOS [CODE]</span>
          <span>A Star Rider company — Media · Technology · Space</span>
        </div>
      </div>
    </footer>
  );
}
