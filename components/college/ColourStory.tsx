import Motion from "@/components/Motion";
import CHeader from "./CHeader";
import { siteStyle } from "./CollegeSite";
import type { Brand } from "@/lib/brands";

const Arrow = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

/** One-page colour story: palette, proportions, gradient, type, components — for client approval before the pages. */
export default function ColourStory({ brand: b }: { brand: Brand }) {
  const base = `/${b.slug}`;
  return (
    <div className={`c-site${b.motion === "bold" ? " is-bold" : ""}`} style={siteStyle(b)}>
      <Motion />
      <CHeader brand={b} />
      <main>
        <section className="c-story-hero">
          <div className="c-wrap">
            <span className="c-eyebrow" data-reveal>{b.short} · Colour story</span>
            <h1 data-split>{b.name}</h1>
            <p data-reveal>{b.culture}</p>
          </div>
        </section>

        <section className="c-section cloud" style={{ paddingTop: 72 }}>
          <div className="c-wrap">
            <div className="c-head"><div><span className="c-eyebrow">01 · Palette</span><h2 data-split style={{ marginTop: 16 }}>The colours, and where each one is allowed.</h2></div></div>
            <div className="c-swatches" data-stagger>
              {b.palette.map((s) => (
                <div key={s.hex + s.name} className="c-swatch"><i style={{ background: s.hex, borderBottom: "1px solid var(--c-line)" }} /><div><strong>{s.name}</strong><code>{s.hex}</code><small>{s.use}</small></div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="c-section">
          <div className="c-wrap c-story-grid">
            <div>
              <span className="c-eyebrow">02 · Proportion</span>
              <h2 data-split style={{ marginTop: 16, fontSize: 32 }}>Mostly white. Blue for words. Gradient as a rare accent.</h2>
              <div className="c-props" data-reveal><i /><i /><i /><i /></div>
              <div className="c-props-l"><span>White 70%</span><span>Cloud 20%</span><span>Ink 7%</span><span>Gradient 3%</span></div>
              <p data-reveal style={{ marginTop: 24, fontSize: 16, lineHeight: 1.6 }}>The gradient appears three times per screen at most: one word in a heading, the primary button, and a thin line on course cards. It is never a background.</p>
            </div>
            <div>
              <span className="c-eyebrow">03 · Gradient</span>
              <h2 data-split style={{ marginTop: 16, fontSize: 32 }}>Six stops, 100°, slow drift.</h2>
              <div className="c-grad-bar" data-reveal />
              <p data-reveal style={{ marginTop: 20, fontSize: 32, lineHeight: 1.2 }}>Create your career in <span className="c-grad-text">digital innovation.</span></p>
              <div className="c-dont" data-reveal style={{ marginTop: 24 }}><strong>Not allowed</strong><span>Gradient as a section background · pink headlines · dark navy sections above the footer · saturated colour blocks behind text · images bleeding past their box</span></div>
            </div>
          </div>
        </section>

        <section className="c-section cloud">
          <div className="c-wrap">
            <div className="c-head"><div><span className="c-eyebrow">04 · Type</span><h2 data-split style={{ marginTop: 16 }}>Hanken Grotesk, two weights.</h2></div><div className="c-head-side" data-reveal><p>Medium for headings, regular for body. Small labels in uppercase with letter-spacing. No display fonts, no mono except code.</p></div></div>
            <div data-stagger>
              <div className="c-type-row"><small>H1 · 72 / 1.02 · 500</small><h1 style={{ fontSize: 72, lineHeight: 1.02 }}>Create careers</h1></div>
              <div className="c-type-row"><small>H2 · 48 / 1.08 · 500</small><h2 style={{ fontSize: 48, lineHeight: 1.08 }}>Qualifications employers ask for</h2></div>
              <div className="c-type-row"><small>H3 · 22 / 1.2 · 500</small><h3 style={{ fontSize: 22 }}>Diploma of Cyber Security &amp; AI</h3></div>
              <div className="c-type-row"><small>Body · 17 / 1.6 · 400</small><p style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 640 }}>Nationally recognised diplomas in cyber security &amp; AI, telecommunications and networking — taught by people who still work in the industry.</p></div>
              <div className="c-type-row"><small>Label · 13 · 600 · caps</small><span className="c-eyebrow">Gold Coast, Australia</span></div>
            </div>
          </div>
        </section>

        <section className="c-section">
          <div className="c-wrap">
            <div className="c-head"><div><span className="c-eyebrow">05 · Components</span><h2 data-split style={{ marginTop: 16 }}>Buttons, cards and the image box.</h2></div></div>
            <div className="c-ui-row" data-stagger style={{ marginBottom: 40 }}>
              <a className="c-btn c-btn--grad" href={base}>Primary action <Arrow /></a>
              <a className="c-btn c-btn--ink" href={base}>Secondary <Arrow /></a>
              <a className="c-btn c-btn--line" href={base}>Tertiary <Arrow /></a>
              <span className="c-tag" style={{ color: "var(--c-ink)", borderColor: "var(--c-line)" }}>Tag · label</span>
              <span className="c-chip" style={{ position: "static", animation: "none" }}><span>Next intake</span><strong>February 2027</strong></span>
            </div>
            <div className="c-grid3" data-stagger>
              <a className="c-card c-card--course" href={base}>
                <div className="c-card-media"><img src={b.courses[0].img} alt="" /></div>
                <div className="c-card-body"><span className="c-kicker">{b.courses[0].area}</span><h3>{b.courses[0].title}</h3><p>{b.courses[0].text}</p><div className="c-card-foot"><span>Course details</span><span className="c-arrow"><Arrow /></span></div></div>
              </a>
              <figure className="c-quote">
                <svg aria-hidden="true" width="28" height="22" viewBox="0 0 28 22"><path d="M0 22V12.6C0 5.6 3.5 1.4 10.5 0l1.6 3C7.7 4.3 5.9 6.6 5.6 10H11v12H0zm17 0V12.6C17 5.6 20.5 1.4 27.5 0l.5 3c-4.4 1.3-6.2 3.6-6.5 7H28v12H17z" fill="currentColor" /></svg>
                <blockquote>The course provided strong practical knowledge, experienced trainers and excellent lab facilities.</blockquote>
                <figcaption><img src="/ext/t-nicko.png" alt="" /><span><strong>Nicko Jay Menecio</strong><em>Telecommunications</em></span></figcaption>
              </figure>
              <div>
                <div className="c-hero-img" style={{ aspectRatio: "4 / 3" }}><img src={b.hero.image} alt="" /></div>
                <p style={{ marginTop: 14, fontSize: 14, color: "var(--c-muted)" }}>Images always sit inside a rounded box with the page's white around them — never full-bleed.</p>
              </div>
            </div>
            <div className="c-cta-btns" style={{ justifyContent: "flex-start", marginTop: 56 }}>
              <a className="c-btn c-btn--ink" href={base}>See the homepage built on this <Arrow /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
