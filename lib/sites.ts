/** Per-college content for the shared "version one" homepage template.
 *  ACDI (Australia) is the approved design; Star Rider Academy (USA) and NZCDI (New Zealand)
 *  reuse the same template with their own brand, copy and hero film. */
import * as acdiData from "@/lib/data";

type Link_ = { label: string; href: string; mega?: boolean };
type Card = { title: string; text: string; img: string; href: string };
type Course = { area: string; title: string; text: string; img: string; href: string };

export type Site = {
  slug: "acdi" | "sra" | "nzcdi";
  base: string;                    // "/" | "/sra" | "/nzcdi"
  theme: "acdi" | "sra" | "nzcdi";
  short: string;
  fullName: string;
  logoHeader: string;
  logoFooter: string;
  logoAlt: string;
  site: { name: string; phone: string; phoneHref: string; email: string; location: string; address: string; announcement: string };
  nav: Link_[];
  megaMenu: { streams: string[]; study: string[]; featured: string };
  hero: { eyebrow: string; title: string; accentFrom: number; sub: string; primary: { label: string; href: string }; secondary: { label: string; href: string } };
  heroVideo: { desktop: string; mobile: string; poster: string; posterMobile: string };
  heroMedia: { chips: string[]; captionEyebrow: string; caption: string };
  stats: { n: number; suffix: string; label: string }[];
  welcome: { eyebrow: string; title: string; text: string; video: string; poster: string; captionEyebrow: string; caption: string; facts: [string, string][] };
  pathwaysLead: string;
  pathways: Card[];
  coursesLead: string;
  courses: Course[];
  storiesTitle: string;
  storiesLead: string;
  testimonials: typeof acdiData.testimonials;
  statement: { before: string; accent: string; after: string; primary: string; secondary: string };
  eventsTitle: string;
  eventsLead: string;
  events: { title: string; when: string; cta: string; img: string }[];
  brochures: typeof acdiData.brochures;
  news: { title: string; date: string }[];
  enquiry: { phonePlaceholder: string; types: [string, string][]; courses: [string, string][] };
  cta: { eyebrow: string; text: string };
  footerCols: { h: string; items: string[] }[];
  legal: string;
};

const acdi: Site = {
  slug: "acdi",
  base: "/",
  theme: "acdi",
  short: "ACDI",
  fullName: "Australian College of Digital Innovation",
  logoHeader: "/brand/acdi-logo-dark-compact.png",
  logoFooter: "/brand/acdi-logo-dark.png",
  logoAlt: "ACDI — Australian College of Digital Innovation",
  site: acdiData.site,
  nav: acdiData.nav,
  megaMenu: { ...acdiData.megaMenu, featured: "Diploma of Cyber Security & AI — next intake open" },
  hero: acdiData.hero,
  heroVideo: { desktop: "/ext/hero.mp4", mobile: "/ext/hero.mp4", poster: "/ext/hero-poster.jpg", posterMobile: "/ext/hero-poster.jpg" },
  heroMedia: { chips: ["Cyber Security & AI", "Digital Media", "Telecommunications"], captionEyebrow: "IFTV Studios  ·  on set with Digital Media students", caption: "Learn production on real sets, alongside industry." },
  stats: acdiData.stats,
  welcome: { ...acdiData.welcome, facts: acdiData.welcome.facts as [string, string][], poster: "/ext/welcome-poster.jpg", captionEyebrow: "Gold Coast · Queensland · Australia", caption: "Welcome to ACDI" },
  pathwaysLead: "Three ways in — whether you are joining us from overseas, already in Australia, or upskilling through your employer.",
  pathways: acdiData.pathways,
  coursesLead: "Nationally recognised qualifications paired with the industry certifications employers actually ask for.",
  courses: acdiData.courses,
  storiesTitle: "What our students say",
  storiesLead: "Graduates from 40 countries, now working across Australian industry — in their own words.",
  testimonials: acdiData.testimonials,
  statement: { before: "A new era in vocational education — industry certification, real placements and ", accent: "government-funded courses", after: ", taught by people who still work in the industry.", primary: "About the Academy", secondary: "Government-funded courses" },
  eventsTitle: "The road to launch",
  eventsLead: "Open days, industry nights and the VIP launch party — join us on campus.",
  events: acdiData.events,
  brochures: acdiData.brochures,
  news: acdiData.news,
  enquiry: {
    phonePlaceholder: "+61",
    types: [["intl", "An international student"], ["au", "An Australian / permanent resident"], ["emp", "An employer (traineeships)"]],
    courses: [["cyber", "Cyber Security & AI"], ["telco", "Telecommunications"], ["net", "Networking & Data Centre"], ["media", "Digital Media & Film"], ["business", "Business"], ["english", "English (ELICOS)"]],
  },
  cta: { eyebrow: "The next intake starts soon", text: "Enrol in the program of your choice and we'll guide you from application to graduation." },
  footerCols: acdiData.footerCols,
  legal: "© 2026 Australian College of Digital Innovation (ACDI) · RTO 00000 · CRICOS 00000A",
};

const navFor = (base: string): Link_[] => [
  { label: "Home", href: base },
  { label: "About", href: `${base}#about` },
  { label: "Courses", href: `${base}#courses`, mega: true },
  { label: "Events", href: `${base}#events` },
  { label: "Study with us", href: `${base}#pathways` },
  { label: "News", href: `${base}#news` },
];

/* ---------------- Star Rider Academy · Los Angeles (USA) — the whiter, high-motion sister ---------------- */
const sra: Site = {
  ...acdi,
  slug: "sra",
  base: "/sra",
  theme: "sra",
  short: "Star Rider Academy",
  fullName: "Star Rider Academy",
  logoHeader: "/brand/logo-navy.png",
  logoFooter: "/brand/logo-white.png",
  logoAlt: "Star Rider Academy",
  site: {
    name: "Star Rider Academy",
    phone: "+1 (310) 000 0000",
    phoneHref: "tel:+13100000000",
    email: "connect@starrideracademy.com",
    location: "Los Angeles, California",
    address: "Los Angeles, California, USA",
    announcement: "Now enrolling — Fall 2027 intake in Los Angeles",
  },
  nav: navFor("/sra"),
  megaMenu: {
    streams: ["Cyber Security & AI", "Digital Media & Film", "Telecommunications", "Networking & Data Centre", "Business", "IFTV Studios"],
    study: ["International students", "US students", "Scholarships", "Employers & upskilling", "How to enrol"],
    featured: "Digital Media & Film — Fall 2027 intake open",
  },
  hero: {
    eyebrow: "Los Angeles, USA  ·  A Star Rider Group college",
    title: "Technology, film and the careers of the next decade.",
    accentFrom: 3,
    sub: "Diplomas in cyber security & AI, digital media and film production — paired with the industry certifications employers actually ask for.",
    primary: { label: "Explore courses", href: "/sra#courses" },
    secondary: { label: "Book a campus tour", href: "/sra#events" },
  },
  heroVideo: { desktop: "/ext/hero-usa.mp4", mobile: "/ext/hero-usa.mp4", poster: "/ext/hero-usa.jpg", posterMobile: "/ext/hero-usa.jpg" },
  heroMedia: { chips: ["Digital Media & Film", "Cyber Security & AI", "Networking"], captionEyebrow: "Los Angeles  ·  founding intake, Fall 2027", caption: "Small classes, real projects, a team around you." },
  stats: [
    { n: 30, suffix: "+", label: "years of Star Rider Group training" },
    { n: 40, suffix: "+", label: "countries our students come from" },
    { n: 3, suffix: "", label: "campuses — Australia, New Zealand, USA" },
    { n: 1200, suffix: "+", label: "industry placements across the group" },
  ],
  welcome: {
    eyebrow: "Welcome to Los Angeles",
    title: "Learn production on real sets, alongside industry.",
    text: "With IFTV Studios, students shoot on working sets with working crews — the fastest way from classroom to call sheet.",
    video: "/ext/hero.mp4",
    poster: "/ext/hero-poster.jpg",
    captionEyebrow: "Los Angeles · California · USA",
    caption: "Welcome to Star Rider Academy",
    facts: [["Campus", "Los Angeles, California"], ["Classes", "Day, evening and online"], ["Studios", "IFTV Studios — on-set training"]],
  },
  pathwaysLead: "Three ways in — whether you are joining us from overseas, already in the US, or upskilling with your employer.",
  pathways: [
    { title: "International students", text: "Career-focused diplomas with student-visa guidance and settling-in support in Los Angeles.", img: "/figma/path-international.jpg", href: "/sra#pathways" },
    { title: "US students", text: "Flexible day, evening and online study, with scholarships for the first intake.", img: "/figma/path-australians.jpg", href: "/sra#pathways" },
    { title: "Employers & upskilling", text: "Train your team while they work — short courses and industry certifications.", img: "/figma/path-traineeships.jpg", href: "/sra#pathways" },
  ],
  coursesLead: "Career-focused programs paired with the certifications employers actually ask for — Cisco, CompTIA, Microsoft, AWS and Adobe.",
  courses: [
    { area: "Digital Media & Film", title: "Diploma of Screen & Media Production", text: "Camera, lighting, editing and post on real sets with IFTV Studios.", img: "/ext/hero-poster.jpg", href: "/sra#courses" },
    { area: "Cyber Security & AI", title: "Diploma of Cyber Security & Artificial Intelligence", text: "Threat detection, risk, identity & access, data privacy and applied AI.", img: "/ext/course-cyber.jpg", href: "/sra#courses" },
    { area: "Networking", title: "Networking & Data Centre", text: "CCNA-aligned skills for the infrastructure every business runs on.", img: "/ext/course-net.jpg", href: "/sra#courses" },
  ],
  storiesTitle: "Stories from the Star Rider Group",
  storiesLead: "Graduates of our sister college in Australia, now working across industry — in their own words.",
  statement: { before: "Film, technology and the careers of the next decade — taught by people who still ", accent: "work in the industry", after: ".", primary: "About the Academy", secondary: "Scholarships" },
  eventsTitle: "Coming to Los Angeles",
  eventsLead: "The launch party, industry nights and open days — be first through the doors.",
  events: [
    { title: "LA Launch Party", when: "2027 · Los Angeles", cta: "Register interest", img: "/ext/event-launch.jpg" },
    { title: "Industry Night", when: "Monthly · with studios & employers", cta: "Reserve a seat", img: "/ext/event-industry.jpg" },
    { title: "Campus Open Day", when: "Every month · 10am", cta: "Book a tour", img: "/ext/event-openday.jpg" },
  ],
  brochures: [
    { title: "Academy prospectus", text: "Programs, campus, industry certifications and how to enrol.", meta: "PDF · Prospectus", href: "#" },
    { title: "Film & media guide", text: "What you'll shoot, edit and deliver with IFTV Studios.", meta: "PDF · Digital media", href: "#" },
    { title: "International guide", text: "Visas, housing and settling in to life in Los Angeles.", meta: "PDF · International", href: "#" },
  ],
  news: [
    { title: "Star Rider Academy to open in Los Angeles in 2027", date: "Oct 2026" },
    { title: "IFTV Studios partnership brings real sets to the classroom", date: "Oct 2026" },
    { title: "Founding scholarships announced for the first intake", date: "Sep 2026" },
    { title: "Star Rider Group expands to Japan, New Zealand and the USA", date: "Aug 2026" },
  ],
  enquiry: {
    phonePlaceholder: "+1",
    types: [["intl", "An international student"], ["us", "A US student"], ["emp", "An employer"]],
    courses: [["media", "Digital Media & Film"], ["cyber", "Cyber Security & AI"], ["telco", "Telecommunications"], ["net", "Networking & Data Centre"], ["business", "Business"]],
  },
  cta: { eyebrow: "Fall 2027 intake now open", text: "Apply for the founding intake and we'll guide you from application to graduation." },
  footerCols: [
    { h: "Study", items: ["Courses", "International students", "US students", "Scholarships", "How to enrol"] },
    { h: "Academy", items: ["About", "Campus", "IFTV Studios", "News", "Events"] },
    { h: "Group", items: ["ACDI · Australia", "NZCDI · New Zealand", "IFTV Studios", "Empowering Women"] },
  ],
  legal: "© 2026 Star Rider Academy · A Star Rider Group college",
};

/* ---------------- NZCDI · Christchurch (New Zealand) — calm, same family ---------------- */
const nzcdi: Site = {
  ...acdi,
  slug: "nzcdi",
  base: "/nzcdi",
  theme: "nzcdi",
  short: "NZCDI",
  fullName: "New Zealand College of Digital Innovation",
  logoHeader: "/brand/nzcdi-logo-white.svg",
  logoFooter: "/brand/nzcdi-logo-white.svg",
  logoAlt: "NZCDI — New Zealand College of Digital Innovation",
  site: {
    name: "NZCDI",
    phone: "+64 3 000 0000",
    phoneHref: "tel:+6430000000",
    email: "connect@nzcdi.ac.nz",
    location: "Christchurch, Canterbury",
    address: "Christchurch Central, Canterbury 8011, New Zealand",
    announcement: "Register interest for our first Christchurch intake — July 2027",
  },
  nav: navFor("/nzcdi"),
  megaMenu: {
    streams: ["Cyber Security & AI", "Telecommunications", "Networking & Data Centre", "Digital Media", "Business", "English"],
    study: ["International students", "New Zealand students", "Traineeships", "Fees & support", "How to enrol"],
    featured: "Diploma of Cyber Security & AI — July 2027 intake",
  },
  hero: {
    eyebrow: "Christchurch, New Zealand  ·  A Star Rider Group college",
    title: "Create your career in digital innovation.",
    accentFrom: 3,
    sub: "Diplomas in cyber security & AI, telecommunications and networking — Canterbury's new college for the digital industries.",
    primary: { label: "Explore courses", href: "/nzcdi#courses" },
    secondary: { label: "Register interest", href: "/nzcdi#enquire" },
  },
  heroVideo: { desktop: "/ext/hero-nz.mp4", mobile: "/ext/hero-nz.mp4", poster: "/ext/hero-nz.jpg", posterMobile: "/ext/hero-nz.jpg" },
  heroMedia: { chips: ["Cyber Security & AI", "Telecommunications", "Networking"], captionEyebrow: "Ōtautahi Christchurch  ·  first intake July 2027", caption: "A new campus in New Zealand's most liveable city." },
  stats: [
    { n: 30, suffix: "+", label: "years of Star Rider Group training" },
    { n: 40, suffix: "+", label: "countries our students come from" },
    { n: 3, suffix: "", label: "campuses — Australia, New Zealand, USA" },
    { n: 2027, suffix: "", label: "first Christchurch intake" },
  ],
  welcome: {
    eyebrow: "Welcome to Christchurch",
    title: "Study in New Zealand's most liveable city.",
    text: "A new campus in the heart of Ōtautahi Christchurch — small classes, real labs, and the Southern Alps an hour away.",
    video: "",
    poster: "/ext/nz-hero.jpg",
    captionEyebrow: "Ōtautahi · Canterbury · Aotearoa",
    caption: "Welcome to NZCDI",
    facts: [["Campus", "Christchurch Central, Canterbury"], ["Classes", "Day, evening and virtual"], ["Opens", "2027 — the ACDI family in Aotearoa"]],
  },
  pathwaysLead: "Three ways in — whether you are joining us from overseas, already in New Zealand, or upskilling through your employer.",
  pathways: [
    { title: "International students", text: "NZQA-approved diplomas with visa guidance and support settling into Christchurch.", img: "/figma/path-international.jpg", href: "/nzcdi#pathways" },
    { title: "New Zealand students", text: "Day, evening and virtual study, with fees support for school leavers.", img: "/figma/path-australians.jpg", href: "/nzcdi#pathways" },
    { title: "Traineeships for employers", text: "Train your team while they work — nationally recognised, employer-supported.", img: "/figma/path-traineeships.jpg", href: "/nzcdi#pathways" },
  ],
  coursesLead: "NZQA-approved qualifications paired with the industry certifications employers actually ask for.",
  courses: acdi.courses.map((c) => ({ ...c, href: "/nzcdi#courses", text: c.text.replace("Australia's", "New Zealand's") })),
  storiesTitle: "Stories from our family of colleges",
  storiesLead: "Graduates of our sister college in Australia, now working across industry — in their own words.",
  statement: { before: "The ACDI standard of vocational education, now in Aotearoa — industry certification, real placements and ", accent: "NZQA-approved qualifications", after: ".", primary: "About NZCDI", secondary: "Register interest" },
  eventsTitle: "Opening in Christchurch",
  eventsLead: "Open days, industry nights and the launch evening — come and see the campus.",
  events: [
    { title: "Campus Open Day", when: "Monthly · 10am", cta: "Book a visit", img: "/ext/nz-event-1.jpg" },
    { title: "Industry Night", when: "Monthly · with employers", cta: "Reserve a seat", img: "/ext/event-industry.jpg" },
    { title: "Launch evening", when: "2027 · Christchurch", cta: "Register interest", img: "/ext/nz-event-2.jpg" },
  ],
  brochures: [
    { title: "College prospectus", text: "Courses, campus, industry certifications and how to enrol.", meta: "PDF · Prospectus", href: "#" },
    { title: "International guide", text: "Visas, accommodation and life in Christchurch.", meta: "PDF · International", href: "#" },
    { title: "Fees & support", text: "Fees, scholarships and support for New Zealand students.", meta: "PDF · Domestic", href: "#" },
  ],
  news: [
    { title: "NZCDI to open in Christchurch in 2027", date: "Oct 2026" },
    { title: "Cyber Security & AI diploma approved for New Zealand", date: "Oct 2026" },
    { title: "Scholarships for Canterbury school leavers announced", date: "Sep 2026" },
    { title: "Star Rider Group expands to Japan, New Zealand and the USA", date: "Aug 2026" },
  ],
  enquiry: {
    phonePlaceholder: "+64",
    types: [["intl", "An international student"], ["nz", "A New Zealand student"], ["emp", "An employer (traineeships)"]],
    courses: [["cyber", "Cyber Security & AI"], ["telco", "Telecommunications"], ["net", "Networking & Data Centre"], ["media", "Digital Media"], ["business", "Business"], ["english", "English"]],
  },
  cta: { eyebrow: "First intake — July 2027", text: "Register your interest and we'll guide you from application to graduation." },
  footerCols: [
    { h: "Study", items: ["Courses", "International students", "New Zealand students", "Traineeships", "Fees & support"] },
    { h: "College", items: ["About", "Campus", "Industry partners", "News", "Events"] },
    { h: "Group", items: ["ACDI · Australia", "Star Rider Academy · USA", "IFTV Studios", "Empowering Women"] },
  ],
  legal: "© 2026 New Zealand College of Digital Innovation (NZCDI) · A Star Rider Group college",
};

export const sites = { acdi, sra, nzcdi };
