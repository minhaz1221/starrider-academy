import Motion from "@/components/Motion";
import CesMotion from "./CesMotion";
import DotField from "./DotField";
import { CForm } from "./CClient";
import KHeader from "./KHeader";
import type { Brand } from "@/lib/brands";
import { testimonials, brochures } from "@/lib/data";

const Arrow = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const Diag = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
);
const Btn = ({ href, tone, children }: { href: string; tone: "ink" | "pale" | "line" | "ghost" | "grad"; children: React.ReactNode }) => (
  <a href={href} className={`k-btn k-btn--${tone}`}>{children}<Arrow /></a>
);
/** Photo with the gradient key-art wash, dot grid and triangle motif. */
const Art = ({ src, art, soft, tri = true, children, video }: { src: string; art: string; soft?: boolean; tri?: boolean; children?: React.ReactNode; video?: string }) => (
  <div className={`k-art${soft ? " k-art--soft" : ""}`} style={{ ["--art" as string]: art } as React.CSSProperties}>
    {video ? <video src={video} poster={src} muted loop playsInline autoPlay preload="metadata" /> : <img src={src} alt="" loading="lazy" />}
    {tri && <i className="k-tri" />}
    {children}
  </div>
);

export function kStyle(b: Brand): React.CSSProperties {
  return { ...(b.vars as React.CSSProperties), ["--c-gradient" as string]: b.gradient } as React.CSSProperties;
}

export default function CesSite({ brand: b }: { brand: Brand }) {
  const base = `/${b.slug}`;
  const bold = b.motion === "bold";
  const A = b.arts;
  const courses = [...b.courses, ...b.moreCourses];
  const events = [...b.events, { title: "Orientation week", when: `${b.hero.chip[1]} · campus`, img: b.pathways[0].img }];
  const nz = b.slug === "nzcdi";
  const dotColor = nz ? "31,168,134" : "16,213,240", dotColor2 = nz ? "11,110,79" : "3,136,203";
  return (
    <div className={`k-site${bold ? " is-bold" : ""}`} style={kStyle(b)}>
      <Motion />
      <CesMotion bold={bold} />

      <div className="k-topbar"><div className="k-wrap"><span>A Star Rider Group college · {b.country}</span><nav><a href={base}>About the group</a><a href={base}>Student portal</a><a href={base}>Contact</a></nav></div></div>
      <KHeader brand={b} />

      <main>
        {/* ---------- Hero ---------- */}
        <section className="k-hero" id="top">
          <i className="k-glow k-glow--1" /><i className="k-glow k-glow--2" /><i className="k-glow k-glow--3" />
          <DotField color={dotColor} color2={dotColor2} bold={bold} className="k-dots--hero" />
          <div className="k-hero-copy">
            <h1><span className="k-line" data-split>{b.intakeLine[0]}</span><span className="k-line" data-split>{b.intakeLine[1]}</span></h1>
            <p data-reveal>{b.hero.sub}</p>
            <div className="k-btns" data-stagger><Btn href={`${base}#enquire`} tone="pale">Apply now</Btn><Btn href={`${base}#courses`} tone="ghost">Explore courses</Btn></div>
          </div>
          <div className="k-kv-stage">
            <div className="k-kv k-art" style={{ ["--art" as string]: A[1] } as React.CSSProperties}>
              {b.welcome.video ? <video src={b.welcome.video} poster={b.welcome.poster} muted loop playsInline autoPlay preload="metadata" /> : <img src={b.welcome.poster} alt="" />}
              <i className="k-tri" />
              <div className="k-kv-words" aria-hidden="true">{b.kvWords.map((w) => <span key={w}>{w}</span>)}</div>
              <button type="button" className="k-kv-pause" aria-label="Pause"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg></button>
            </div>
          </div>
        </section>

        {/* ---------- Why ---------- */}
        <section className="k-sec k-light" id="about">
          <div className="k-wrap">
            <div className="k-panel k-split" data-reveal>
              <div>
                <div className="k-sec-title">Why {b.short}</div>
                <h2 className="k-h2">{b.statement} {b.statementAccent}</h2>
                <p className="k-p">{b.welcome.text} Our trainers still work in the industry, our labs run the same equipment employers use, and every diploma is paired with the certifications that get you hired.</p>
                <p className="k-p"><strong style={{ color: "var(--k-ink)" }}>{b.tagline}.</strong> Apply for the {b.hero.chip[1]} intake today.</p>
                <div className="k-btns"><Btn href={`${base}#enquire`} tone="ink">Apply now</Btn></div>
              </div>
              <Art src={b.hero.image} art={A[2]} />
            </div>
          </div>
        </section>

        {/* ---------- Featured ---------- */}
        <section className="k-sec k-light" style={{ paddingTop: 0 }}>
          <div className="k-wrap">
            <div className="k-sec-title">Featured at {b.short}</div>
            <div className="k-grid k-grid--2" data-stagger>
              <a href={`${base}#courses`} className="k-card k-card--big">
                <Art src={courses[0].img} art={A[0]} />
                <div className="k-card-body"><span className="k-label">Featured course</span><h3 className="k-h3">{courses[0].title}</h3><p className="k-p">{courses[0].text}</p></div>
                <div className="k-card-foot"><span className="k-arrow"><Arrow /></span></div>
              </a>
              <a href={`${base}#events`} className="k-card k-card--big">
                <Art src={events[0].img} art={A[3]} />
                <div className="k-card-body"><span className="k-label">Prepare for your intake</span><h3 className="k-h3">{events[0].title}</h3><p className="k-p">See the campus, meet the trainers and sort your enrolment in one visit. {events[0].when}.</p></div>
                <div className="k-card-foot"><span className="k-arrow"><Arrow /></span></div>
              </a>
            </div>
          </div>
        </section>

        {/* ---------- Study (dark) ---------- */}
        <section className="k-sec k-dark" id="study">
          <i className="k-glow k-glow--2" style={{ right: "-10vw", top: "-10vh" }} /><i className="k-glow k-glow--3" style={{ left: "-10vw", bottom: "-20vh", top: "auto" }} />
          <div className="k-wrap" style={{ position: "relative" }}>
            <div className="k-sec-title">Study at {b.short}</div>
            <div className="k-split">
              <div>
                <h2 className="k-h2" data-reveal>{b.short} trains the technologists and creators the next decade will run on.</h2>
                <p className="k-p" data-reveal>{b.hero.sub}</p>
                <p className="k-lead" data-reveal style={{ marginTop: 22 }}>Three ways in — whichever one is yours.</p>
                <ul className="k-bullets" data-stagger>{b.pathways.map((p) => <li key={p.title}><strong style={{ color: "inherit" }}>{p.title}</strong> — {p.text}</li>)}</ul>
                <div className="k-btns" data-stagger style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}><Btn href={`${base}#enquire`} tone="pale">Talk to admissions</Btn><Btn href={`${base}#study`} tone="ghost">Why {b.short}?</Btn></div>
              </div>
              <div className="k-panel" data-reveal>
                <Art src={b.courses[1].img} art={A[0]} soft />
                <div className="k-card-body" style={{ paddingTop: 16 }}><span className="k-label">Student story</span><h3 className="k-h3">{testimonials[0].name}</h3><p className="k-p">{testimonials[0].quote}</p></div>
                <div className="k-card-foot"><span className="k-arrow"><Arrow /></span></div>
              </div>
            </div>
            <div className="k-stats" data-stagger style={{ marginTop: 40 }}>
              {b.stats.map((s) => <div className="k-stat" key={s.label}><strong><b data-count={s.n}>0</b>{s.suffix}</strong><span>{s.label}</span></div>)}
            </div>
          </div>
        </section>

        {/* ---------- Road to intake ---------- */}
        <section className="k-sec k-light" id="events">
          <div className="k-wrap">
            <div className="k-sec-title">The road to {b.hero.chip[1]}</div>
            <div className="k-grid k-grid--4" data-stagger>
              {events.map((e, i) => (
                <a key={e.title} href={`${base}#enquire`} className="k-card">
                  <Art src={e.img} art={A[i % 4]} soft tri={false} />
                  <div className="k-card-body"><h3 className="k-h3">{e.title}</h3><span className="k-when">{e.when}</span><span className="k-where">{b.city}</span><p className="k-p">Open to prospective students and families. Register to secure a place.</p></div>
                  <div className="k-card-foot"><span className="k-btn k-btn--ink">Register<Arrow /></span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Guides ---------- */}
        <section className="k-sec k-light" style={{ paddingTop: 0 }} id="guides">
          <div className="k-wrap">
            <div className="k-sec-title">Guides</div>
            <div className="k-grid k-grid--3" data-stagger>
              {b.pathways.map((p, i) => (
                <a key={p.title} href={`${base}#enquire`} className="k-card">
                  <Art src={p.img} art={A[(i + 2) % 4]} />
                  <div className="k-card-body"><h3 className="k-h3">For {p.title.toLowerCase()}</h3><p className="k-p">{p.text}</p></div>
                  <div className="k-card-foot"><span className="k-arrow"><Arrow /></span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Quote + enquiry (dark) ---------- */}
        <section className="k-sec k-dark" id="enquire">
          <i className="k-glow k-glow--1" style={{ left: "40vw", top: "-20vh" }} />
          <div className="k-wrap" style={{ position: "relative" }}>
            <div className="k-sec-title">{b.short} is creating careers</div>
            <div className="k-enq">
              <div className="k-panel" data-reveal>
                <p className="k-quote">“{testimonials[1].quote}”</p>
                <p className="k-quote-by">{testimonials[1].name}, {testimonials[1].course}</p>
                <div className="k-contact">
                  <div><span>Email</span><a href={`mailto:${b.email}`}>{b.email}</a></div>
                  <div><span>Phone</span><a href={`tel:${b.phone.replace(/\s/g, "")}`}>{b.phone}</a></div>
                  <div><span>Campus</span><b>{b.address}</b></div>
                </div>
              </div>
              <div>
                <div className="k-label" style={{ marginBottom: 12 }}>Enquire now</div>
                <CForm courses={courses.map((c) => c.area)} />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Courses ---------- */}
        <section className="k-sec k-light" id="courses">
          <div className="k-wrap">
            <div className="k-sec-title">Featured courses</div>
            <div className="k-grid k-grid--4" data-stagger>
              {courses.slice(0, 4).map((c, i) => (
                <a key={c.title} href={`${base}#enquire`} className="k-card">
                  <Art src={c.img} art={A[(i + 1) % 4]} soft tri={false}><span className="k-play">▶ 52 wks</span></Art>
                  <div className="k-card-body"><span className="k-label">Diploma</span><h3 className="k-h3" style={{ fontSize: 20 }}>{c.title}</h3><div className="k-tags"><span className="k-tag">{c.area}</span><span className="k-tag">{b.country}</span></div></div>
                </a>
              ))}
            </div>
            <div style={{ marginTop: 20 }} data-reveal><Btn href={`${base}#enquire`} tone="line">View all courses</Btn></div>
          </div>
        </section>

        {/* ---------- News ---------- */}
        <section className="k-sec k-light" style={{ paddingTop: 0 }} id="news">
          <div className="k-wrap">
            <div className="k-sec-title">Latest news</div>
            <div className="k-grid k-grid--4" data-stagger>
              {[...b.news, { title: `${b.short} brochures and course guides now available to download`, date: "Oct 2026" }].map((n, i) => (
                <a key={n.title} href={i === 3 ? brochures[0].href : `${base}#news`} target={i === 3 ? "_blank" : undefined} rel="noopener" className="k-card k-card--text">
                  <h3 className="k-h3">{n.title}</h3><span className="k-date">{n.date}</span>
                  <div className="k-card-foot" style={{ padding: "18px 0 0" }}><span className="k-arrow">{i === 3 ? <Diag /> : <Arrow />}</span></div>
                </a>
              ))}
            </div>
            <div style={{ marginTop: 20 }} data-reveal><Btn href={`${base}#news`} tone="line">View all news</Btn></div>
          </div>
        </section>
      </main>

      <footer className="k-footer">
        <div className="k-wrap">
          <div className="k-footer-grid">
            <div>
              <img src={b.logoWhite} alt={b.short} />
              <p>{b.name} is part of the Star Rider Group of colleges, training technologists and creators in {b.country} and across the group&apos;s campuses in Australia, New Zealand and the USA.</p>
              <div className="k-socials"><i /><i /><i /><i /></div>
            </div>
            {b.footer.map((col) => <div key={col.h} className="k-footer-col"><h4>{col.h}</h4><ul>{col.items.map((it) => <li key={it}><a href={base}>{it}</a></li>)}</ul></div>)}
          </div>
          <div className="k-footer-bottom"><span>© {b.short} 2026 · {b.address}</span><span>Privacy · Terms of use · Student handbook</span></div>
        </div>
      </footer>
      <div className="k-sticky"><span><strong>{b.hero.chip[0]}</strong> · {b.hero.chip[1]}</span><a href={`${base}#enquire`} className="k-btn k-btn--ink">Apply<Arrow /></a></div>
    </div>
  );
}
