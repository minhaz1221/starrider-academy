import Motion from "@/components/Motion";
import CHeader from "./CHeader";
import CScroll from "./CScroll";
import EditorialMotion from "./EditorialMotion";
import { COrbMotion, CForm } from "./CClient";
import { siteStyle } from "./CollegeSite";
import type { Brand } from "@/lib/brands";
import { testimonials, brochures } from "@/lib/data";

const Arrow = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const Btn = ({ href, tone, children, magnet, cursor }: { href: string; tone: "grad" | "ink" | "line" | "white" | "ghost"; children: React.ReactNode; magnet?: boolean; cursor?: string }) => (
  <a href={href} className={`c-btn c-btn--${tone}${magnet ? " e-magnet" : ""}`} data-cursor={cursor}>{children}<Arrow /></a>
);
const Words = ({ text, cls }: { text: string; cls?: string }) => <>{text.split(" ").map((w, i) => <span className={`w${cls ? " " + cls : ""}`} key={i}>{w} </span>)}</>;

export default function Editorial({ brand: b }: { brand: Brand }) {
  const base = `/${b.slug}`;
  const bold = b.motion === "bold";
  const courses = [...b.courses, ...b.moreCourses];
  const T = b.tones;
  const stackLabels = ["Campus", "Students", "Labs", "Industry"];
  const quoteMedia = [b.courses[1].img, b.pathways[0].img, b.courses[2].img];
  return (
    <div className={`c-site e-site${bold ? " is-bold" : ""}`} style={siteStyle(b)}>
      <Motion />
      <COrbMotion bold={bold} />
      <CScroll bold={bold} />
      <EditorialMotion bold={bold} />
      <div className="c-bg" aria-hidden="true"><i className="c-orb c-orb--1" /><i className="c-orb c-orb--2" /><i className="c-orb c-orb--3" /></div>
      <div className="e-cursor" aria-hidden="true"><span /></div>
      <CHeader brand={b} />
      <i className="c-progress" aria-hidden="true" />

      <main>
        {/* ---------- Hero ---------- */}
        <section className="e-hero" id="top" data-bg={T.hero} data-orbs={T.heroOrbs}>
          <div className="e-blob" aria-hidden="true" />
          <div className="e-hero-top">
            <span className="c-eyebrow" data-reveal>{b.hero.eyebrow}</span>
            <p className="e-sub" data-reveal>{b.hero.sub}</p>
          </div>
          <h1 className="e-hero-title" data-split>
            {b.heroLines.map((ln, i) => (
              <span className="line" key={i}>{i === b.heroLines.length - 1 ? <span className="grad">{ln}</span> : ln}</span>
            ))}
          </h1>
          <div className="e-stack" aria-hidden="true">
            {b.stack.map((src, i) => <div className="e-card" key={i}><img src={src} alt="" /><b>{stackLabels[i]}</b></div>)}
          </div>
          <div className="e-hero-bottom">
            <div className="e-hero-ctas" data-stagger>
              <Btn href={`${base}#courses`} tone="grad" magnet cursor="Go">{b.hero.primary}</Btn>
              <Btn href={`${base}#campus`} tone="line" magnet>{b.hero.secondary}</Btn>
            </div>
            <span className="e-scroll-hint" data-reveal><i />Scroll</span>
          </div>
          <div className="e-marquee" aria-hidden="true">
            <div className="e-marquee-track">{[...b.streams, ...b.partners, ...b.streams, ...b.partners].map((p, i) => <span key={i}>{p}</span>)}</div>
          </div>
        </section>

        {/* ---------- Sticky statement + image column ---------- */}
        <section className="e-split" id="about" data-bg={T.a} data-orbs={T.aOrbs}>
          <div className="e-sticky">
            <span className="e-label">{b.short} · {b.city}</span>
            <p className="e-statement"><Words text={b.statement} /> <span className="grad"><Words text={b.statementAccent} /></span></p>
            <div className="e-sticky-foot" data-stagger>
              {b.stats.slice(0, 3).map((s) => <div key={s.label}><strong><b data-count={s.n}>0</b>{s.suffix}</strong><span>{s.label}</span></div>)}
            </div>
            <div data-reveal style={{ marginTop: 36 }}><Btn href={`${base}#study`} tone="ink" magnet>About {b.short}</Btn></div>
          </div>
          <div className="e-col">
            <figure data-clip><img src={b.welcome.poster} alt="" /><figcaption>{b.city}</figcaption></figure>
            <figure data-clip><img src={b.pathways[1].img} alt="" /><figcaption>Small classes, real labs</figcaption></figure>
            <figure data-clip><img src={b.courses[0].img} alt="" /><figcaption>Industry certification</figcaption></figure>
          </div>
        </section>

        {/* ---------- Horizontal courses ---------- */}
        <section className="e-hscroll" id="courses" data-bg={T.b} data-orbs={T.bOrbs}>
          <div className="e-hscroll-head">
            <div><span className="e-label">Courses</span><h2 className="e-title" data-split style={{ marginTop: 18 }}>Qualifications employers ask for.</h2></div>
            <p className="e-sub" data-reveal>Nationally recognised diplomas, paired with the industry certifications behind every job ad. Scroll to explore.</p>
          </div>
          <div className="e-track">
            {courses.map((c, i) => (
              <a key={c.title} href={`${base}#enquire`} className="e-course" data-cursor="View">
                <div className="e-course-media"><img src={c.img} alt="" loading="lazy" /></div>
                <div className="e-course-body">
                  <span className="e-index"><span>{String(i + 1).padStart(2, "0")}</span><span>{c.area}</span></span>
                  <h3>{c.title}</h3><p>{c.text}</p>
                  <div className="e-chips"><span>Diploma</span><span>Full-time · 52 weeks</span><span>{b.country}</span></div>
                </div>
              </a>
            ))}
            <a href={`${base}#enquire`} className="e-course e-course--end" data-cursor="All"><span className="e-index" style={{ color: "rgba(255,255,255,.7)" }}>{courses.length}+ programs</span><h3>See every course and intake date.</h3><span className="c-btn c-btn--white" style={{ marginTop: 20 }}>All courses <Arrow /></span></a>
          </div>
          <div className="e-hprogress"><i /></div>
        </section>

        {/* ---------- Pathways list with hover image ---------- */}
        <section className="e-list" id="study" data-bg={T.hero} data-orbs={T.heroOrbs}>
          <div className="e-list-head">
            <div><span className="e-label">Study with us</span><h2 className="e-title" data-split style={{ marginTop: 18 }}>Three ways in.</h2></div>
            <p className="e-sub" data-reveal>Whichever one is yours — from overseas, already in {b.country}, or through your employer.</p>
          </div>
          <div className="e-float" aria-hidden="true">{b.pathways.map((p, i) => <img key={p.title} src={p.img} alt="" data-key={String(i)} />)}</div>
          {b.pathways.map((p, i) => (
            <a key={p.title} href={`${base}#enquire`} className="e-row" data-img={String(i)} data-cursor="Explore">
              <span className="e-index">0{i + 1}</span>
              <div><h3>{p.title}</h3><p>{p.text}</p></div>
              <span className="c-arrow"><Arrow /></span>
            </a>
          ))}
        </section>

        {/* ---------- Expanding campus video ---------- */}
        <section className="e-expand" id="campus" data-bg={T.a} data-orbs={T.aOrbs}>
          <div className="e-expand-box">
            {b.welcome.video ? <video src={b.welcome.video} poster={b.welcome.poster} muted loop playsInline autoPlay preload="metadata" /> : <img src={b.welcome.poster} alt="" />}
            <div className="e-expand-cap"><span>{b.welcome.eyebrow}</span><strong>{b.welcome.title}</strong><p>{b.welcome.text}</p></div>
          </div>
        </section>

        {/* ---------- Stacking testimonials ---------- */}
        <section className="e-stackwrap" id="stories" data-bg={T.c} data-orbs={T.cOrbs}>
          <div className="e-list-head">
            <div><span className="e-label">Student stories</span><h2 className="e-title" data-split style={{ marginTop: 18 }}>In their own words.</h2></div>
            <p className="e-sub" data-reveal>Graduates from 40 countries, now working across industry.</p>
          </div>
          <div className="e-stacks">
            {testimonials.slice(0, 3).map((t, i) => (
              <figure key={t.name} className="e-tcard">
                <div>
                  <svg aria-hidden="true" width="34" height="26" viewBox="0 0 28 22"><path d="M0 22V12.6C0 5.6 3.5 1.4 10.5 0l1.6 3C7.7 4.3 5.9 6.6 5.6 10H11v12H0zm17 0V12.6C17 5.6 20.5 1.4 27.5 0l.5 3c-4.4 1.3-6.2 3.6-6.5 7H28v12H17z" fill="currentColor" /></svg>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption><img src={t.img} alt="" /><span><strong>{t.name}</strong><em>{t.course}</em></span></figcaption>
                </div>
                <div className="e-quote-media"><img src={quoteMedia[i]} alt="" loading="lazy" /></div>
              </figure>
            ))}
          </div>
        </section>

        {/* ---------- Events ---------- */}
        <section className="e-events" id="events" data-bg={T.b} data-orbs={T.bOrbs}>
          <div className="e-list-head" style={{ padding: "0 0 40px" }}>
            <div><span className="e-label">On campus</span><h2 className="e-title" data-split style={{ marginTop: 18 }}>Come and see it.</h2></div>
            <div data-reveal><Btn href={`${base}#enquire`} tone="line" magnet>All events</Btn></div>
          </div>
          <div className="e-egrid" data-stagger>
            {b.events.map((e) => (
              <a key={e.title} href={`${base}#enquire`} className="c-event" data-cursor="Register">
                <img src={e.img} alt="" loading="lazy" />
                <div><span className="c-tag">{e.when}</span><h3>{e.title}</h3></div>
              </a>
            ))}
          </div>
        </section>

        {/* ---------- News + brochures ---------- */}
        <section className="e-two" id="news" data-bg={T.hero} data-orbs={T.heroOrbs}>
          <div>
            <span className="e-label">Latest</span>
            <h2 className="e-title" data-split style={{ marginTop: 18, marginBottom: 32, fontSize: "clamp(32px,4vw,64px)" }}>News from {b.short}.</h2>
            <div data-stagger>
              {b.news.map((n) => <a key={n.title} href={`${base}#news`} className="c-news"><strong>{n.title}</strong><span>{n.date}<span className="c-arrow"><Arrow /></span></span></a>)}
            </div>
          </div>
          <div>
            <span className="e-label">Brochures</span>
            <h2 className="e-title" data-split style={{ marginTop: 18, marginBottom: 32, fontSize: "clamp(32px,4vw,64px)" }}>Take it with you.</h2>
            <div className="c-grid3" data-stagger>
              {brochures.map((br) => (
                <a key={br.title} href={br.href} target="_blank" rel="noopener" className="c-dl" data-cursor="PDF">
                  <div className="c-dl-top"><span className="c-kicker">{br.meta}</span><span className="c-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v12M6 10l6 6 6-6M4 20h16" /></svg></span></div>
                  <h3>{br.title}</h3><p>{br.text}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Enquiry ---------- */}
        <section className="e-enq" id="enquire" data-bg={T.a} data-orbs={T.aOrbs}>
          <div>
            <span className="e-label">Enquire</span>
            <h2 className="e-title" data-split style={{ marginTop: 18 }}>Let&apos;s talk.</h2>
            <p className="e-sub" data-reveal style={{ marginTop: 20 }}>Tell us a little about yourself and an admissions adviser will come back to you within one business day.</p>
            <div className="c-enq-contact" data-stagger>
              <div><span>Email</span><a href={`mailto:${b.email}`}>{b.email}</a></div>
              <div><span>Phone</span><a href={`tel:${b.phone.replace(/\s/g, "")}`}>{b.phone}</a></div>
              <div><span>Campus</span><b>{b.address}</b></div>
            </div>
          </div>
          <CForm courses={courses.map((c) => c.area)} />
        </section>

        {/* ---------- Giant closing ---------- */}
        <section className="e-giant" data-bg={T.hero} data-orbs={T.heroOrbs}>
          <h2>{b.tagline.split(" ").slice(0, 2).join(" ")}.</h2>
          <p data-reveal>Enrol in the program of your choice and we&apos;ll guide you from application to graduation.</p>
          <div className="c-cta-btns" data-stagger><Btn href={`${base}#enquire`} tone="grad" magnet cursor="Apply">How to enrol</Btn><Btn href={`${base}#enquire`} tone="line" magnet>Talk to admissions</Btn></div>
        </section>
      </main>

      <footer className="e-footer">
        <div className="e-footer-grid">
          <div>
            <img src={b.logoWhite} alt={b.short} />
            <address>{b.address}<a href={`tel:${b.phone.replace(/\s/g, "")}`}>{b.phone}</a><a href={`mailto:${b.email}`}>{b.email}</a></address>
          </div>
          {b.footer.map((col) => <div key={col.h}><h4>{col.h}</h4><ul>{col.items.map((it) => <li key={it}><a href={base}>{it}</a></li>)}</ul></div>)}
        </div>
        <div className="e-footer-word" aria-hidden="true">{b.short}</div>
        <div className="e-footer-bottom"><span>© 2026 {b.name}. All rights reserved.</span><span>Privacy · Terms · Student handbook</span></div>
      </footer>
      <div className="c-sticky"><span><strong>{b.hero.chip[0]}</strong> · {b.hero.chip[1]}</span><a href={`${base}#enquire`} className="c-btn c-btn--grad c-btn--sm">Apply now<Arrow /></a></div>
    </div>
  );
}
