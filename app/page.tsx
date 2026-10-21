import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import Words from "@/components/Words";
import { site, pathways, courses, events, news } from "@/lib/data";

const Sparkle = ({ size = 28 }: { size?: number }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24">
    <path d="M12 1.5c.8 5.6 4.9 9.7 10.5 10.5-5.6.8-9.7 4.9-10.5 10.5C11.2 16.9 7.1 12.8 1.5 12 7.1 11.2 11.2 7.1 12 1.5z" fill="#EC1E79" />
  </svg>
);
const Arrow = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Motion />
      <Header />
      <main>
        <Hero />

        {/* ===== Statement + contact (Figma section 2) ===== */}
        <section id="about" className="bg-deep">
          <div className="wide statement">
            <p data-words>
              <Words className="c-cyan" text="A new era in vocational education & training" />
              <video className="pill-img pill-media" src="/video/pill-1.mp4" poster="/images/pill-1.jpg" muted loop playsInline autoPlay aria-hidden="true" />
              <Words className="c-pink" text="combined with industry certification training," />
              <video className="pill-img pill-media p-pink" src="/video/pill-2.mp4" poster="/images/pill-2.jpg" muted loop playsInline autoPlay aria-hidden="true" />
              <Words className="c-cyan" text="industry placement," />
              <video className="pill-img pill-media" src="/video/pill-3.mp4" poster="/images/pill-3.jpg" muted loop playsInline autoPlay aria-hidden="true" />
              <Words className="c-blue" text="and" />
              <video className="pill-img pill-media" src="/video/pill-4.mp4" poster="/images/pill-4.jpg" muted loop playsInline autoPlay aria-hidden="true" />
              <Words className="c-blue" text="government-funded courses." />
            </p>

            <div className="contact-grid" data-stagger>
              <a href={`mailto:${site.email}`} className="contact-card">
                  <span className="contact-head">
                    <span className="icon-dot">
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                    </span>
                    EMAIL
                  </span>
                  <span className="contact-value">{site.email}</span>
                </a>
              <a href={site.phoneHref} className="contact-card">
                  <span className="contact-head">
                    <span className="icon-dot">
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
                    </span>
                    PHONE
                  </span>
                  <span className="contact-value">{site.phone}</span>
                </a>
              <a href="#contact" className="contact-card">
                  <span className="contact-head">
                    <span className="icon-dot">
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>
                    </span>
                    LOCATION
                  </span>
                  <span className="contact-value">{site.location}</span>
                </a>
            </div>
          </div>
        </section>

        {/* ===== Pathways (Figma section 3) ===== */}
        <section id="pathways" className="bg-void">
          <div className="wide pathways">
            <div className="section-head" data-reveal>
              <h2>Star Rider Academy</h2>
              <p>Technology, cyber security, telecommunications and film education on the Gold Coast — part of the Star Rider group, with 30 years of graduates placed into Australian industry.</p>
            </div>
            <div className="path-grid" data-stagger>
              {pathways.map((p) => (
                  <Link key={p.title} href={p.href} className="path-card">
                    <span className="path-title"><Sparkle /> {p.title}</span>
                    <img className="path-img" src={p.img} alt={p.title} />
                  </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Featured courses (CES card grid) ===== */}
        <section id="courses" className="section bg-sky" style={{ overflow: "hidden" }}>
          <div className="dots" aria-hidden="true" style={{ opacity: 0.55 }} />
          <div className="wide" style={{ position: "relative" }}>
            <div className="row-between" data-reveal>
              <div>
                <h2 className="section-title">Featured courses</h2>
                <p className="section-sub">Nationally recognised qualifications paired with the industry certifications employers ask for.</p>
              </div>
              <Link href="#courses" className="pill-white">View all courses</Link>
            </div>
            <div className="grid-3" data-stagger>
              {courses.map((c) => (
                  <Link key={c.title} href={c.href} className="card">
                    <div className="card-media"><img src={c.img} alt="" /></div>
                    <div className="card-body">
                      <span className="eyebrow">{c.area}</span>
                      <span className="card-title">{c.title}</span>
                      <span className="card-text">{c.text}</span>
                      <span className="arrow-btn"><Arrow /></span>
                    </div>
                  </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Events ("The road to…" like CES) ===== */}
        <section id="events" className="section bg-deep">
          <div className="wide">
            <div data-reveal>
              <h2 className="section-title">The road to launch</h2>
              <p className="section-sub">Open days, industry nights and the VIP launch party — join us on campus.</p>
            </div>
            <div className="grid-3" data-stagger>
              {events.map((e) => (
                  <Link key={e.title} href="#events" className="event-card">
                    <img src={e.img} alt="" data-parallax="0.15" />
                    <div className="event-body">
                      <span className="tag-pink">{e.when}</span>
                      <span className="card-title" style={{ fontSize: 30, marginTop: 8 }}>{e.title}</span>
                      <span className="card-text">{site.location}</span>
                      <span style={{ marginTop: 10, fontWeight: 600, color: "#12c6e8" }}>{e.cta} →</span>
                    </div>
                  </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Testimonial band ===== */}
        <section className="section quote-band">
          <div className="container" style={{ maxWidth: 1160 }}>
            <div data-reveal>
              <span className="eyebrow" style={{ color: "#ffe1ee" }}>Student stories</span>
              <blockquote style={{ marginTop: 20 }}>
                “The training and support helped me secure a job in the wireless telecommunications industry — and achieve permanent residency within a year of graduating.”
              </blockquote>
              <div className="row-between" style={{ marginTop: 26, alignItems: "center" }}>
                <span style={{ fontSize: 17 }}><strong>Nicko Jay Menecio</strong> — Advanced Diploma of Telecommunications Network Engineering</span>
                <Link href="#about" className="pill-outline">More stories</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Stats ===== */}
        <section className="section bg-deep">
          <div className="wide" data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 40 }}>
            <div className="stat"><strong data-count="30">0</strong><span>years of training technologists and artists</span></div>
            <div className="stat"><strong data-count="40">0</strong><span>countries our graduates come from</span></div>
            <div className="stat"><strong data-count="3">0</strong><span>new campuses opening — Japan, New Zealand, USA</span></div>
            <div className="stat"><strong style={{ fontSize: 17, letterSpacing: ".12em", textTransform: "uppercase" }}>Industry partners</strong><span>Star Rider · IFTV Studios · Empowering Women · Sonya McGuire Enterprises</span></div>
          </div>
        </section>

        {/* ===== News ===== */}
        <section id="news" className="section bg-void">
          <div className="wide">
            <div className="row-between" data-reveal>
              <h2 className="section-title">Latest news</h2>
              <Link href="#news" style={{ color: "#12c6e8", fontWeight: 600, fontSize: 17 }}>View all news →</Link>
            </div>
            <div style={{ marginTop: 32 }} data-stagger>
              {news.map((n) => (
                  <Link key={n.title} href="#news" className="news-row"><strong>{n.title}</strong><span>{n.date}</span></Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Enrol CTA ===== */}
        <section id="enrol" className="section bg-sky" style={{ overflow: "hidden", textAlign: "center" }}>
          <div className="dots" aria-hidden="true" style={{ opacity: 0.8 }} />
          <div className="container" data-reveal>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
              <h2 className="hero-title" style={{ marginTop: 0 }}>Ready to start?</h2>
              <p className="section-sub" style={{ textAlign: "center" }}>Enrol in the program of your choice and we&apos;ll guide you from application to graduation.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
                <Link href="/courses/cyber-security-ai" className="btn-cyan">How to enrol</Link>
                <Link href="#contact" className="pill-white">Contact us</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
