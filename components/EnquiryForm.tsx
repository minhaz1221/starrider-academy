"use client";
import { useState } from "react";
import { useSite } from "@/components/SiteContext";

const Arrow = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

/** Student enquiry form (demo: client-side success state, no backend yet). */
export default function EnquiryForm() {
  const { site, enquiry } = useSite();
  const [sent, setSent] = useState(false);
  return (
    <section className="section enquiry on-dark bg-deep" id="enquire">
      <div className="container enquiry-grid">
        <div className="enquiry-copy">
          <div className="ruled"><h2 data-split>Enquire now</h2></div>
          <p className="lead" data-reveal>Tell us a little about yourself and an admissions adviser will come back to you within one business day.</p>
          <div className="enquiry-contact" data-stagger>
            <div><span className="mono">Email</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
            <div><span className="mono">Phone</span><a href={site.phoneHref}>{site.phone}</a></div>
            <div><span className="mono">Campus</span><span>{site.address}</span></div>
          </div>
        </div>
        <form className="form-card" data-reveal onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          {sent ? (
            <div className="form-done">
              <span className="mono">Thank you</span>
              <strong>Your enquiry has been received.</strong>
              <p>We&apos;ll be in touch within one business day with next steps and intake dates.</p>
              <button type="button" className="btn btn--ink-ghost" onClick={() => setSent(false)}>Send another <Arrow /></button>
            </div>
          ) : (
            <>
              <div className="form-row">
                <label>First name<input name="first" type="text" placeholder="Jane" required /></label>
                <label>Last name<input name="last" type="text" placeholder="Smith" required /></label>
              </div>
              <div className="form-row">
                <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
                <label>Phone<input name="phone" type="tel" placeholder={enquiry.phonePlaceholder} /></label>
              </div>
              <div className="form-row">
                <label>I am
                  <select name="type" defaultValue={enquiry.types[0][0]}>
                    {enquiry.types.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </label>
                <label>Course interest
                  <select name="course" defaultValue={enquiry.courses[0][0]}>
                    {enquiry.courses.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </label>
              </div>
              <label>Message<textarea name="message" rows={4} placeholder="Tell us about your goals, preferred intake or any questions." /></label>
              <div className="form-foot">
                <span className="form-note">By submitting you agree to be contacted about courses and intakes.</span>
                <button type="submit" className="btn btn--pink">Send enquiry <Arrow /></button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
