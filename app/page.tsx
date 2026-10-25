import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import Welcome from "@/components/Welcome";
import EnquiryForm from "@/components/EnquiryForm";
import { stats, pathways, courses, events, news, testimonials, brochures } from "@/lib/data";

const Arrow = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const Btn = ({ href, tone, children, sm }: { href: string; tone: "pink" | "white" | "navy" | "ghost" | "ink-ghost"; children: React.ReactNode; sm?: boolean }) => (
  <Link href={href} className={`btn btn--${tone}${sm ? " btn--sm" : ""}`}><span>{children}</span><Arrow /></Link>
);

export default function Home() {
  return (
    <>
      <Motion />
      <Header />
      <main>
        <Hero />

        {/* Stats */}
        <section className="stats" id="about">
          <div className="container">
            <div className="stats-row" data-stagger>
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <strong><span data-count={s.n}>0</span>{s.suffix}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Welcome />

        {/* Pathways */}
        <section className="section bg-light" id="pathways">
          <div className="container">
            <div className="ruled"><h2 data-split>Study with us</h2></div>
            <div className="lead-row">
              <p className="lead" data-reveal>Three ways in — whether you are joining us from overseas, already in Australia, or upskilling through your employer.</p>
              <div data-reveal><Btn href="#pathways" tone="navy">Compare pathways</Btn></div>
            </div>
            <div className="grid-3" data-stagger>
              {pathways.map((p) => (
                <Link key={p.title} href={p.href} className="card">
                  <div className="card-media"><img src={p.img} alt="" loading="lazy" data-parallax="0.12" /></div>
                  <div className="card-body">
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <div className="card-foot"><span className="mono">Learn more</span><span className="arrow-circle"><Arrow /></span></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured courses */}
        <section className="section" id="courses">
          <div className="container">
            <div className="ruled"><h2 data-split>Featured courses</h2></div>
            <div className="lead-row">
              <p className="lead" data-reveal>Nationally recognised qualifications paired with the industry certifications employers actually ask for.</p>
              <div data-reveal><Btn href="/courses/cyber-security-ai" tone="navy">View all courses</Btn></div>
            </div>
            <div className="grid-3" data-stagger>
              {courses.map((c) => (
                <Link key={c.title} href={c.href} className="card card--course">
                  <div className="card-media"><img src={c.img} alt="" loading="lazy" data-parallax="0.12" /></div>
                  <div className="card-body">
                    <span className="eyebrow">{c.area}</span>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                    <div className="card-foot"><span /><span className="arrow-circle"><Arrow /></span></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section" id="stories">
          <div className="container">
            <div className="ruled"><h2 data-split>What our students say</h2></div>
            <div className="lead-row">
              <p className="lead" data-reveal>Graduates from 40 countries, now working across Australian industry — in their own words.</p>
              <div data-reveal><Btn href="#stories" tone="navy">More stories</Btn></div>
            </div>
            <div className="grid-3" data-stagger>
              {testimonials.map((t) => (
                <figure key={t.name} className="quote-card">
                  <svg className="quote-mark" aria-hidden="true" width="28" height="22" viewBox="0 0 28 22"><path d="M0 22V12.6C0 5.6 3.5 1.4 10.5 0l1.6 3C7.7 4.3 5.9 6.6 5.6 10H11v12H0zm17 0V12.6C17 5.6 20.5 1.4 27.5 0l.5 3c-4.4 1.3-6.2 3.6-6.5 7H28v12H17z" fill="currentColor"/></svg>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <img src={t.img} alt="" loading="lazy" />
                    <span><strong>{t.name}</strong><em>{t.course}</em></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Statement */}
        <section className="statement bg-navy">
          <div className="container">
            <p data-split>A new era in vocational education — industry certification, real placements and <span className="accent">government-funded courses</span>, taught by people who still work in the industry.</p>
            <div className="statement-btns" data-stagger>
              <Btn href="#about" tone="white">About the Academy</Btn>
              <Btn href="#pathways" tone="ghost">Government-funded courses</Btn>
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="section bg-light" id="events">
          <div className="container">
            <div className="ruled"><h2 data-split>The road to launch</h2></div>
            <div className="lead-row">
              <p className="lead" data-reveal>Open days, industry nights and the VIP launch party — join us on campus.</p>
              <div data-reveal><Btn href="#events" tone="navy">All events</Btn></div>
            </div>
            <div className="grid-3" data-stagger>
              {events.map((e) => (
                <Link key={e.title} href="#events" className="event">
                  <img src={e.img} alt="" loading="lazy" data-parallax="0.15" />
                  <div className="event-body">
                    <span className="tag">{e.when}</span>
                    <h3>{e.title}</h3>
                    <span className="btn btn--ghost btn--sm"><span>{e.cta}</span><Arrow /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Brochures */}
        <section className="section" id="brochures">
          <div className="container">
            <div className="ruled"><h2 data-split>Download a brochure</h2></div>
            <div className="lead-row">
              <p className="lead" data-reveal>Everything about our courses, campus and how to enrol — in one PDF.</p>
            </div>
            <div className="grid-3" data-stagger>
              {brochures.map((b) => (
                <a key={b.title} href={b.href} target="_blank" rel="noopener" className="dl-card">
                  <span className="dl-top"><span className="eyebrow">{b.meta}</span><span className="dl-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v12M6 10l6 6 6-6M4 20h16" /></svg></span></span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                  <span className="mono dl-cta">Download PDF</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* News */}
        <section className="section" id="news">
          <div className="container">
            <div className="ruled"><h2 data-split>Latest news</h2></div>
            <div data-stagger style={{ marginTop: 8 }}>
              {news.map((n) => (
                <Link key={n.title} href="#news" className="news-row">
                  <strong>{n.title}</strong>
                  <span className="news-meta">{n.date}<span className="arrow-circle"><Arrow /></span></span>
                </Link>
              ))}
            </div>
            <div data-reveal style={{ marginTop: 28 }}><Btn href="#news" tone="ink-ghost">View all news</Btn></div>
          </div>
        </section>

        <EnquiryForm />

        {/* CTA */}
        <section className="cta" id="enrol">
          <div className="cta-glow" aria-hidden="true" />
          <div className="container">
            <span className="mono" data-reveal>The next intake starts soon</span>
            <h2 data-split>Ready to <span className="accent">start?</span></h2>
            <p data-reveal>Enrol in the program of your choice and we&apos;ll guide you from application to graduation.</p>
            <div className="cta-btns" data-stagger>
              <Btn href="/courses/cyber-security-ai" tone="pink">How to enrol</Btn>
              <Btn href="#enquire" tone="ghost">Talk to admissions</Btn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
