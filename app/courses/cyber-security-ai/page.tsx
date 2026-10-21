import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Diploma of Cyber Security & Artificial Intelligence — Star Rider Academy",
  description: "Become certified in cyber security with vocational and industry certifications — threat detection, risk management, identity and access control, data privacy, hacking and AI.",
};

const facts = [
  ["Duration", "52 weeks"],
  ["Study mode", "Day · Evening · Virtual"],
  ["Campus", "Gold Coast, QLD"],
  ["Next intake", "[INTAKE DATE]"],
  ["Funding", "Government-funded options"],
];
const topics = ["Cybercrime & internet scams", "Computer virus attacks", "Threat detection", "Security analysis", "Risk management", "Identity & access control", "Data privacy", "Ethical hacking", "Artificial intelligence", "Firewalls & architecture"];
const careers = ["Security Analyst", "Cyber Security Architect", "SOC Analyst", "Risk & Compliance Officer", "AI Security Specialist", "Network Security Engineer"];

const Sparkle = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
    <path d="M12 1.5c.8 5.6 4.9 9.7 10.5 10.5-5.6.8-9.7 4.9-10.5 10.5C11.2 16.9 7.1 12.8 1.5 12 7.1 11.2 11.2 7.1 12 1.5z" fill="#EC1E79" />
  </svg>
);

export default function CoursePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero bg-sky">
          <div className="dots" aria-hidden="true" />
          <div className="wide course-hero" style={{ position: "relative" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <Link href="/#courses" style={{ color: "#dce3ff", fontSize: 15 }}>Courses / Cyber Security &amp; AI</Link>
              <span className="tag-pink">Diploma · ICT50220</span>
              <h1>Diploma of Cyber Security &amp; Artificial Intelligence</h1>
              <p style={{ fontSize: 19, lineHeight: 1.6, color: "#dce3ff", maxWidth: 580 }}>
                Become certified in cyber security with vocational and industry certifications — threat detection, risk management, identity and access control, data privacy, hacking and AI.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 8 }}>
                <a href="#enquire" className="btn-cyan">Enrol now</a>
                <a href="#" className="pill-outline">Download brochure</a>
              </div>
            </div>
            <img src="/images/hero-3.jpg" alt="" />
          </div>
        </section>

        <section className="bg-deep">
          <div className="wide facts">
            {facts.map(([k, v], i) => (
              <Reveal key={k} delay={(i % 3) as 0 | 1 | 2}>
                <div className="fact"><span className="eyebrow">{k}</span><strong>{v}</strong></div>
              </Reveal>
            ))}
          </div>

          <div className="wide course-body">
            <div className="course-main">
              <Reveal>
                <h2>About the course</h2>
                <p>This qualification prepares you for roles as a security analyst, cyber security architect or AI-assisted security specialist. Training combines hands-on lab work, industry certification preparation and real-world scenarios — delivered in small classes with day, evening and virtual options.</p>
              </Reveal>
              <Reveal>
                <h2>What you&apos;ll learn</h2>
                <div className="chips">
                  {topics.map((t) => (<div key={t} className="chip"><Sparkle /> {t}</div>))}
                </div>
              </Reveal>
              <Reveal>
                <h2>Career outcomes</h2>
                <div className="tags">{careers.map((c) => (<span key={c} className="tag">{c}</span>))}</div>
              </Reveal>
            </div>

            <Reveal className="contact-card enquire" delay={1}>
              <form id="enquire" onSubmit={undefined} style={{ display: "contents" }}>
                <span style={{ fontSize: 26, fontWeight: 600 }}>Enquire about this course</span>
                <span style={{ fontSize: 15, color: "#dce3ff" }}>We&apos;ll get back to you within one business day.</span>
                <label>Your name<input type="text" name="name" placeholder="Full name" required /></label>
                <label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>
                <label>I am
                  <select name="type" defaultValue="intl">
                    <option value="intl">An international student</option>
                    <option value="au">An Australian / permanent resident</option>
                    <option value="emp">An employer (traineeships)</option>
                  </select>
                </label>
                <button type="submit" className="btn-cyan" style={{ marginTop: 6 }}>Send enquiry</button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
