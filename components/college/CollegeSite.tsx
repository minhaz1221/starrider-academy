import Motion from "@/components/Motion";
import CHeader from "./CHeader";
import { COrbMotion, CVideo, CForm } from "./CClient";
import CScroll from "./CScroll";
import type { Brand } from "@/lib/brands";
import { testimonials, brochures } from "@/lib/data";

const Arrow = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const Btn = ({ href, tone, children }: { href: string; tone: "grad" | "ink" | "line" | "white" | "ghost"; children: React.ReactNode }) => (
  <a href={href} className={`c-btn c-btn--${tone}`}>{children}<Arrow /></a>
);

export function siteStyle(b: Brand): React.CSSProperties {
  return { ...(b.vars as React.CSSProperties), ["--c-gradient" as string]: b.gradient } as React.CSSProperties;
}

export default function CollegeSite({ brand: b }: { brand: Brand }) {
  const base = `/${b.slug}`;
  const bold = b.motion === "bold";
  return (
    <div className={`c-site${bold ? " is-bold" : ""}`} style={siteStyle(b)}>
      <Motion />
      <COrbMotion bold={bold} />
      <CScroll bold={bold} />
      <div className="c-bg" aria-hidden="true"><i className="c-orb c-orb--1" /><i className="c-orb c-orb--2" /><i className="c-orb c-orb--3" /></div>
      <CHeader brand={b} />
      <i className="c-progress" aria-hidden="true" />
      <main>
        {/* Hero */}
        <section className="c-hero" id="top" data-bg={b.tones.hero} data-orbs={b.tones.heroOrbs}>
          <div className="c-wrap c-hero-grid">
            <div>
              <span className="c-eyebrow" data-reveal>{b.hero.eyebrow}</span>
              <h1 data-split>{b.hero.title} <span className="c-grad-text">{b.hero.accent}</span></h1>
              <p className="c-sub" data-reveal>{b.hero.sub}</p>
              <div className="c-hero-btns" data-stagger>
                <Btn href={`${base}#courses`} tone="grad">{b.hero.primary}</Btn>
                <Btn href={`${base}#events`} tone="line">{b.hero.secondary}</Btn>
              </div>
              <form className="c-finder" data-reveal action={`${base}#courses`} role="search" aria-label="Find a course">
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
                <input type="search" name="q" placeholder="Find a course — cyber security, networking, film…" />
                <select name="type" aria-label="I am" defaultValue="intl"><option value="intl">International</option><option value="dom">Domestic</option><option value="emp">Employer</option></select>
                <button type="submit" className="c-btn c-btn--ink c-btn--sm">Search</button>
              </form>
              <div className="c-hero-meta" data-stagger>
                <div><strong>Nationally recognised</strong><span>Diplomas & advanced diplomas</span></div>
                <div><strong>Industry certified</strong><span>Cisco, CompTIA, Microsoft</span></div>
                <div><strong>Small classes</strong><span>Real labs, real trainers</span></div>
              </div>
            </div>
            <div className="c-hero-media" data-reveal>
              <div className="c-hero-img"><img src={b.hero.image} alt="" /></div>
              <div className="c-chip"><span>{b.hero.chip[0]}</span><strong>{b.hero.chip[1]}</strong></div>
              <div className="c-chip c-chip--2"><span>Campus</span><strong>{b.city}</strong></div>
            </div>
          </div>
          <div className="c-hero-rule" />
        </section>

        {/* Stats */}
        <section className="c-stats" id="about" data-bg={b.tones.hero} data-orbs={b.tones.heroOrbs}>
          <div className="c-wrap">
            <div className="c-stats-row" data-stagger>
              {b.stats.map((s) => (
                <div className="c-stat" key={s.label}><strong><b data-count={s.n}>0</b>{s.suffix}</strong><span>{s.label}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification strip — slides with scroll */}
        <section className="c-strip" aria-label="Industry certifications" data-bg={b.tones.hero} data-orbs={b.tones.heroOrbs}>
          <div className="c-strip-row" data-marquee="1">{[...b.partners, ...b.partners].map((p, i) => <span key={i}>{p}</span>)}</div>
          <div className="c-strip-row c-strip-row--2" data-marquee="-1">{[...b.streams, ...b.streams].map((p, i) => <span key={i}>{p}</span>)}</div>
        </section>

        {/* Pathways */}
        <section className="c-section" id="study" data-bg={b.tones.a} data-orbs={b.tones.aOrbs}>
          <div className="c-wrap">
            <div className="c-head">
              <div><span className="c-eyebrow">Study with us</span><h2 data-split style={{ marginTop: 16 }}>Three ways in — whichever one is yours.</h2></div>
              <div className="c-head-side" data-reveal><p>Whether you are joining us from overseas, already in {b.country}, or upskilling through your employer.</p><Btn href={`${base}#enquire`} tone="line">Compare pathways</Btn></div>
            </div>
            <div className="c-grid3" data-stagger data-drift>
              {b.pathways.map((p) => (
                <a key={p.title} href={`${base}#enquire`} className="c-card">
                  <div className="c-card-media"><img src={p.img} alt="" loading="lazy" /></div>
                  <div className="c-card-body"><h3>{p.title}</h3><p>{p.text}</p><div className="c-card-foot"><span>Learn more</span><span className="c-arrow"><Arrow /></span></div></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="c-section" id="courses" data-bg={b.tones.b} data-orbs={b.tones.bOrbs}>
          <div className="c-wrap">
            <div className="c-head">
              <div><span className="c-eyebrow">Featured courses</span><h2 data-split style={{ marginTop: 16 }}>Qualifications employers actually ask for.</h2></div>
              <div className="c-head-side" data-reveal><p>Nationally recognised diplomas paired with the industry certifications behind every job ad.</p><Btn href={`${base}#courses`} tone="ink">View all courses</Btn></div>
            </div>
            <div className="c-grid3" data-stagger data-drift>
              {b.courses.map((c) => (
                <a key={c.title} href={`${base}#enquire`} className="c-card c-card--course">
                  <div className="c-card-media"><img src={c.img} alt="" loading="lazy" /></div>
                  <div className="c-card-body"><span className="c-kicker">{c.area}</span><h3>{c.title}</h3><p>{c.text}</p><div className="c-card-foot"><span>Course details</span><span className="c-arrow"><Arrow /></span></div></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Welcome */}
        <section className="c-section" id="campus" data-bg={b.tones.a} data-orbs={b.tones.aOrbs}>
          <div className="c-wrap">
            <div className="c-head">
              <div><span className="c-eyebrow">{b.welcome.eyebrow}</span><h2 data-split style={{ marginTop: 16 }}>{b.welcome.title}</h2></div>
              <div className="c-head-side" data-reveal><p>{b.welcome.text}</p></div>
            </div>
            <CVideo src={b.welcome.video} poster={b.welcome.poster} caption={`Welcome to ${b.short}`} sub={`${b.city} · ${b.country}`} />
            <div className="c-facts" data-stagger>
              {b.welcome.facts.map(([k, v]) => <div key={k} className="c-fact"><span>{k}</span><strong>{v}</strong></div>)}
            </div>
          </div>
        </section>

        {/* Statement */}
        <section className="c-section c-statement" data-bg={b.tones.c} data-orbs={b.tones.cOrbs}>
          <div className="c-wrap">
            <p data-scrub-words>{b.statement.split(" ").map((w, i) => <span className="w" key={i}>{w} </span>)}<span className="c-grad-text">{b.statementAccent.split(" ").map((w, i) => <span className="w" key={i}>{w} </span>)}</span></p>
            <div className="c-statement-btns" data-stagger>
              <Btn href={`${base}#about`} tone="ink">About {b.short}</Btn>
              <Btn href={`${base}#study`} tone="line">Ways to study</Btn>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="c-section" id="stories" data-bg={b.tones.hero} data-orbs={b.tones.heroOrbs}>
          <div className="c-wrap">
            <div className="c-head">
              <div><span className="c-eyebrow">Student stories</span><h2 data-split style={{ marginTop: 16 }}>Graduates from 40 countries, in their own words.</h2></div>
              <div className="c-head-side" data-reveal><Btn href={`${base}#stories`} tone="line">More stories</Btn></div>
            </div>
            <div className="c-grid3" data-stagger data-drift>
              {testimonials.slice(0, 3).map((t) => (
                <figure key={t.name} className="c-quote">
                  <svg aria-hidden="true" width="28" height="22" viewBox="0 0 28 22"><path d="M0 22V12.6C0 5.6 3.5 1.4 10.5 0l1.6 3C7.7 4.3 5.9 6.6 5.6 10H11v12H0zm17 0V12.6C17 5.6 20.5 1.4 27.5 0l.5 3c-4.4 1.3-6.2 3.6-6.5 7H28v12H17z" fill="currentColor" /></svg>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption><img src={t.img} alt="" loading="lazy" /><span><strong>{t.name}</strong><em>{t.course}</em></span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="c-section" id="events" data-bg={b.tones.b} data-orbs={b.tones.bOrbs}>
          <div className="c-wrap">
            <div className="c-head">
              <div><span className="c-eyebrow">On campus</span><h2 data-split style={{ marginTop: 16 }}>Open days, industry nights and more.</h2></div>
              <div className="c-head-side" data-reveal><Btn href={`${base}#events`} tone="line">All events</Btn></div>
            </div>
            <div className="c-grid3" data-stagger data-drift>
              {b.events.map((e) => (
                <a key={e.title} href={`${base}#enquire`} className="c-event">
                  <img src={e.img} alt="" loading="lazy" />
                  <div><span className="c-tag">{e.when}</span><h3>{e.title}</h3></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Brochures + News */}
        <section className="c-section" id="news" data-bg={b.tones.hero} data-orbs={b.tones.heroOrbs}>
          <div className="c-wrap">
            <div className="c-head">
              <div><span className="c-eyebrow">Brochures</span><h2 data-split style={{ marginTop: 16 }}>Everything in one PDF.</h2></div>
            </div>
            <div className="c-grid3" data-stagger data-drift>
              {brochures.map((br) => (
                <a key={br.title} href={br.href} target="_blank" rel="noopener" className="c-dl">
                  <div className="c-dl-top"><span className="c-kicker">{br.meta}</span><span className="c-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v12M6 10l6 6 6-6M4 20h16" /></svg></span></div>
                  <h3>{br.title}</h3><p>{br.text}</p><span className="c-dl-cta">Download PDF</span>
                </a>
              ))}
            </div>
            <div className="c-head" style={{ marginTop: 96 }}>
              <div><span className="c-eyebrow">Latest news</span><h2 data-split style={{ marginTop: 16 }}>What&apos;s happening at {b.short}.</h2></div>
            </div>
            <div data-stagger>
              {b.news.map((n) => (
                <a key={n.title} href={`${base}#news`} className="c-news"><strong>{n.title}</strong><span>{n.date}<span className="c-arrow"><Arrow /></span></span></a>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry */}
        <section className="c-section" id="enquire" data-bg={b.tones.a} data-orbs={b.tones.aOrbs}>
          <div className="c-wrap c-enq">
            <div>
              <span className="c-eyebrow">Enquire now</span>
              <h2 data-split style={{ marginTop: 16, fontSize: "clamp(32px,3.6vw,48px)" }}>Talk to an admissions adviser.</h2>
              <p data-reveal style={{ marginTop: 18, fontSize: 17, lineHeight: 1.6 }}>Tell us a little about yourself and we&apos;ll come back to you within one business day.</p>
              <div className="c-enq-contact" data-stagger>
                <div><span>Email</span><a href={`mailto:${b.email}`}>{b.email}</a></div>
                <div><span>Phone</span><a href={`tel:${b.phone.replace(/\s/g, "")}`}>{b.phone}</a></div>
                <div><span>Campus</span><b>{b.address}</b></div>
              </div>
            </div>
            <CForm courses={["Cyber Security & AI", "Telecommunications", "Networking & Data Centre", "Digital Media & Film", "Business", "English (ELICOS)"]} />
          </div>
        </section>

        {/* CTA */}
        <section className="c-section c-cta" data-bg={b.tones.c} data-orbs={b.tones.cOrbs}>
          <div className="c-wrap">
            <div className="c-cta-box">
              <span className="c-eyebrow" data-reveal>The next intake starts soon</span>
              <h2 data-split>Ready to start?</h2>
              <p data-reveal>Enrol in the program of your choice and we&apos;ll guide you from application to graduation.</p>
              <div className="c-cta-btns" data-stagger><Btn href={`${base}#enquire`} tone="grad">How to enrol</Btn><Btn href={`${base}#enquire`} tone="line">Talk to admissions</Btn></div>
            </div>
          </div>
        </section>
      </main>

      <div className="c-sticky" aria-hidden="false"><span><strong>{b.hero.chip[0]}</strong> · {b.hero.chip[1]}</span><a href={`${base}#enquire`} className="c-btn c-btn--grad c-btn--sm">Apply now<Arrow /></a></div>
      <footer className="c-footer">
        <div className="c-wrap">
          <div className="c-footer-grid">
            <div>
              <img src={b.logoWhite} alt={b.short} />
              <address>{b.address}<a href={`tel:${b.phone.replace(/\s/g, "")}`}>{b.phone}</a><a href={`mailto:${b.email}`}>{b.email}</a></address>
            </div>
            {b.footer.map((col) => (
              <div key={col.h}><h4>{col.h}</h4><ul>{col.items.map((it) => <li key={it}><a href={base}>{it}</a></li>)}</ul></div>
            ))}
          </div>
          <div className="c-footer-bottom"><span>© 2026 {b.name}. All rights reserved.</span><span>Privacy · Terms · Student handbook</span></div>
        </div>
      </footer>
    </div>
  );
}
