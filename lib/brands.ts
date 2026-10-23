/** Brand configurations for the three college homepages. Palette values come from the client's
 *  ACDI Colour Story document (Oct 2026); Star Rider and NZCDI derive from the same family. */

export type Swatch = { name: string; hex: string; use: string };
export type Brand = {
  slug: string;
  short: string;
  name: string;
  tagline: string;
  country: string;
  city: string;
  logo: string;        // on white
  logoWhite: string;   // on dark footer
  motion: "calm" | "bold";
  culture: string;
  tones: { hero: string; heroOrbs: string; a: string; aOrbs: string; b: string; bOrbs: string; c: string; cOrbs: string };
  partners: string[];
  streams: string[];
  heroLines: string[];   // last line is the gradient line
  stack: string[];       // 4 images for the fanned stack
  moreCourses: { area: string; title: string; text: string; img: string }[];     // one line for the colour story
  palette: Swatch[];
  gradient: string;    // CSS gradient used for accents
  vars: Record<string, string>;
  hero: { eyebrow: string; title: string; accent: string; sub: string; primary: string; secondary: string; image: string; chip: [string, string] };
  stats: { n: number; suffix: string; label: string }[];
  pathways: { title: string; text: string; img: string }[];
  courses: { area: string; title: string; text: string; img: string }[];
  welcome: { eyebrow: string; title: string; text: string; video?: string; poster: string; facts: [string, string][] };
  statement: string;
  statementAccent: string;
  events: { title: string; when: string; img: string }[];
  news: { title: string; date: string }[];
  address: string;
  phone: string;
  email: string;
  footer: { h: string; items: string[] }[];
};

const stats = [
  { n: 30, suffix: "+", label: "years training technologists" },
  { n: 40, suffix: "+", label: "countries our graduates come from" },
  { n: 3, suffix: "", label: "campuses across the group" },
  { n: 1200, suffix: "+", label: "industry placements since 2019" },
];

const courses = [
  { area: "Cyber Security & AI", title: "Diploma of Cyber Security & Artificial Intelligence", text: "Threat detection, risk, identity & access, data privacy and applied AI.", img: "/ext/course-cyber.jpg" },
  { area: "Telecommunications", title: "Advanced Diploma of Telecommunications Network Engineering", text: "Hands-on lab training with the certifications behind Australia's networks.", img: "/ext/course-telco.jpg" },
  { area: "Networking", title: "Networking & Data Centre", text: "CCNA-aligned skills for the infrastructure every business runs on.", img: "/ext/course-net.jpg" },
];

const events = [
  { title: "Campus Open Day", when: "Every month · 10am", img: "/ext/event-openday.jpg" },
  { title: "Industry Night", when: "Monthly · with employers", img: "/ext/event-industry.jpg" },
  { title: "Graduation & Awards", when: "December", img: "/ext/event-launch.jpg" },
];

const news = [
  { title: "Pioneering generative AI in digital media and film", date: "Oct 2026" },
  { title: "New intake open for the Diploma of Cyber Security & AI", date: "Oct 2026" },
  { title: "Empowering Women scholarships now accepting applications", date: "Sep 2026" },
];

export const acdi: Brand = {
  slug: "acdi",
  short: "ACDI",
  name: "Australian College of Digital Innovation",
  tagline: "Create careers",
  country: "Australia",
  city: "Gold Coast, Queensland",
  logo: "/brand/acdi-logo-compact.png",
  logoWhite: "/brand/acdi-logo-white-compact.png",
  motion: "calm",
  tones: {
    hero: "#FFFFFF", heroOrbs: "rgba(16,213,240,.34), rgba(241,30,121,.18), rgba(3,136,203,.26)",
    a: "#F3F6FB", aOrbs: "rgba(3,136,203,.30), rgba(16,213,240,.26), rgba(110,38,136,.14)",
    b: "#EEF6FD", bOrbs: "rgba(16,213,240,.40), rgba(26,77,162,.18), rgba(241,30,121,.14)",
    c: "#F6EEF7", cOrbs: "rgba(241,30,121,.22), rgba(110,38,136,.22), rgba(16,213,240,.24)",
  },
  partners: ["Cisco", "CompTIA", "Microsoft", "AWS Academy", "Fortinet", "Adobe", "Google Cloud", "VMware"],
  heroLines: ["Create", "your career in", "digital innovation."],
  stack: ["/ext/welcome-poster.jpg", "/figma/path-international.jpg", "/ext/course-cyber.jpg", "/figma/path-australians.jpg"],
  moreCourses: [
    { area: "Digital Media & Film", title: "Diploma of Screen & Media", text: "Shoot, edit and deliver on real sets with IFTV Studios.", img: "/ext/hero-poster.jpg" },
    { area: "Business", title: "Diploma of Business", text: "Operations, projects and leadership for the digital economy.", img: "/figma/path-traineeships.jpg" },
    { area: "English", title: "English for Technology (ELICOS)", text: "Specialised vocabulary to CEFR C1, built for computing careers.", img: "/figma/path-international.jpg" },
  ],
  streams: ["Cyber Security & AI", "Telecommunications", "Networking & Data Centre", "Digital Media & Film", "Business", "English (ELICOS)"],
  culture: "Calm, open and sunlit — white space, ocean light, and the Gold Coast campus as the hero image. Blue leads; the gradient is a rare accent.",
  palette: [
    { name: "White", hex: "#FFFFFF", use: "Background and negative space — about 70% of every page" },
    { name: "Cloud", hex: "#F3F6FB", use: "Alternate section background" },
    { name: "Deep Royal Blue", hex: "#1A4DA2", use: "Headings, navigation, footer" },
    { name: "Ocean Blue", hex: "#0388CB", use: "Links, icons, secondary buttons" },
    { name: "Aqua Cyan", hex: "#10D5F0", use: "Small accents only — eyebrow dot, hover, chart lines" },
    { name: "Purple", hex: "#6E2688", use: "Gradient transition" },
    { name: "Magenta", hex: "#C41478", use: "Gradient transition" },
    { name: "Vibrant Pink", hex: "#F11E79", use: "End of the gradient — never flat" },
  ],
  gradient: "linear-gradient(100deg, #10D5F0 0%, #0388CB 28%, #1A4DA2 50%, #6E2688 70%, #C41478 86%, #F11E79 100%)",
  vars: { "--c-ink": "#1A4DA2", "--c-body": "#3C4A66", "--c-muted": "#7B879E", "--c-line": "#E1E7F2", "--c-cloud": "#F3F6FB", "--c-tint": "#EEF3FB", "--c-blue": "#0388CB", "--c-cyan": "#10D5F0", "--c-pink": "#F11E79", "--c-footer": "#163F86", "--c-orb1": "rgba(16,213,240,.34)", "--c-orb2": "rgba(241,30,121,.2)", "--c-orb3": "rgba(3,136,203,.26)" },
  hero: {
    eyebrow: "Gold Coast, Australia · CRICOS registered",
    title: "Create your career in",
    accent: "digital innovation.",
    sub: "Nationally recognised diplomas in cyber security & AI, telecommunications, networking and digital media — taught by people who still work in the industry.",
    primary: "Explore courses",
    secondary: "Book a campus tour",
    image: "/ext/welcome-poster.jpg",
    chip: ["Next intake", "February 2027"],
  },
  stats,
  pathways: [
    { title: "International students", text: "CRICOS-registered diplomas with visa and accommodation support, on the Gold Coast.", img: "/figma/path-international.jpg" },
    { title: "Australians & residents", text: "Government-funded places and fee-help options for domestic students.", img: "/figma/path-australians.jpg" },
    { title: "Traineeships for employers", text: "Train your team while they work — nationally recognised, employer-supported.", img: "/figma/path-traineeships.jpg" },
  ],
  courses,
  welcome: {
    eyebrow: "Welcome to the Gold Coast",
    title: "Study where the industry works — Varsity Lakes, Queensland.",
    text: "Thirty years of training technologists on the Gold Coast, with small classes, real labs and a campus ten minutes from the beach.",
    video: "/ext/welcome.mp4",
    poster: "/ext/welcome-poster.jpg",
    facts: [["Campus", "Level 2, 246 Varsity Parade, Varsity Lakes"], ["Classes", "Day, evening and virtual"], ["Since", "1993 — 30 years on the Gold Coast"]],
  },
  statement: "A new era in vocational education — industry certification, real placements and",
  statementAccent: "government-funded courses.",
  events,
  news,
  address: "Level 2, 246 Varsity Parade, Varsity Lakes, Queensland 4227",
  phone: "+61 7 5578 8122",
  email: "connect@acdi.edu.au",
  footer: [
    { h: "Study", items: ["Courses", "International students", "Australians & residents", "Traineeships", "Government-funded"] },
    { h: "College", items: ["About", "Campus", "Industry partners", "News", "Events"] },
    { h: "Group", items: ["Star Rider Academy", "NZCDI", "IFTV Studios", "Empowering Women"] },
  ],
};

export const sra: Brand = {
  ...acdi,
  slug: "sra",
  short: "Star Rider Academy",
  name: "Star Rider Academy",
  tagline: "Technology, film and the careers of the next decade",
  country: "United States",
  city: "Los Angeles, California",
  logo: "/brand/logo-navy.png",
  logoWhite: "/brand/logo-white.png",
  motion: "bold",
  tones: {
    hero: "#FFFFFF", heroOrbs: "rgba(16,213,240,.50), rgba(241,30,121,.40), rgba(3,136,203,.40)",
    a: "#F4F6FF", aOrbs: "rgba(241,30,121,.42), rgba(16,213,240,.42), rgba(15,21,64,.18)",
    b: "#EAF8FF", bOrbs: "rgba(16,213,240,.55), rgba(3,136,203,.35), rgba(196,20,120,.30)",
    c: "#FDEFF6", cOrbs: "rgba(241,30,121,.45), rgba(110,38,136,.30), rgba(16,213,240,.35)",
  },
  partners: ["Cisco", "CompTIA", "Microsoft", "AWS Academy", "Adobe", "Blackmagic Design", "Avid", "Unreal Engine"],
  heroLines: ["Technology,", "film & the careers", "of the next decade."],
  stack: ["/ext/hero-poster.jpg", "/ext/course-cyber.jpg", "/ext/event-launch.jpg", "/figma/path-traineeships.jpg"],
  streams: ["Cyber Security & AI", "Digital Media & Film", "Telecommunications", "Networking & Data Centre", "Business", "IFTV Studios"],
  culture: "A whiter, brighter version of the ACDI family. More air, bigger type, and motion that catches the eye — colour-shifting gradients, floating orbs, counters — while the page itself stays white and clean.",
  palette: [
    { name: "White", hex: "#FFFFFF", use: "Background — about 75% of every page" },
    { name: "Mist", hex: "#F6F7FB", use: "Alternate section background" },
    { name: "Star Navy", hex: "#0F1540", use: "Headings, navigation, footer" },
    { name: "Slate", hex: "#4A5068", use: "Body text" },
    { name: "Ocean Blue", hex: "#0388CB", use: "Links, icons" },
    { name: "Aqua Cyan", hex: "#10D5F0", use: "Orbs and small accents" },
    { name: "Magenta", hex: "#C41478", use: "Gradient transition" },
    { name: "Star Pink", hex: "#F11E79", use: "Gradient end, primary button" },
  ],
  gradient: "linear-gradient(100deg, #10D5F0 0%, #0388CB 30%, #0F1540 55%, #C41478 80%, #F11E79 100%)",
  vars: { "--c-ink": "#0F1540", "--c-body": "#4A5068", "--c-muted": "#8E95A8", "--c-line": "#E3E6F0", "--c-cloud": "#F6F7FB", "--c-tint": "#F1F2F9", "--c-blue": "#0388CB", "--c-cyan": "#10D5F0", "--c-pink": "#F11E79", "--c-footer": "#0F1540", "--c-orb1": "rgba(16,213,240,.45)", "--c-orb2": "rgba(241,30,121,.35)", "--c-orb3": "rgba(3,136,203,.35)" },
  hero: {
    eyebrow: "Los Angeles · A Star Rider Group college",
    title: "Technology, film and the",
    accent: "careers of the next decade.",
    sub: "Diplomas in cyber security & AI, digital media and film production — paired with the industry certifications employers actually ask for.",
    primary: "Explore courses",
    secondary: "Watch the film",
    image: "/ext/hero-poster.jpg",
    chip: ["Now enrolling", "Fall 2027"],
  },
  stats: [
    { n: 30, suffix: "+", label: "years training technologists and artists" },
    { n: 40, suffix: "+", label: "countries our students come from" },
    { n: 3, suffix: "", label: "campuses — Australia, New Zealand, USA" },
    { n: 1200, suffix: "+", label: "industry placements since 2019" },
  ],
  welcome: {
    eyebrow: "Welcome to Star Rider Academy",
    title: "Learn production on real sets, alongside industry.",
    text: "IFTV Studios students shoot on working sets with working crews — the fastest way from classroom to call sheet.",
    video: "/ext/hero.mp4",
    poster: "/ext/hero-poster.jpg",
    facts: [["Campus", "Los Angeles, California"], ["Classes", "Day, evening and online"], ["Studios", "IFTV Studios — on-set training"]],
  },
  statement: "Film, technology and the careers of the next decade — taught by people who still",
  statementAccent: "work in the industry.",
  address: "Los Angeles, California",
  phone: "+1 (310) 000 0000",
  email: "connect@starrideracademy.com",
  footer: [
    { h: "Study", items: ["Courses", "International students", "US students", "Scholarships", "How to enrol"] },
    { h: "Academy", items: ["About", "Campus", "IFTV Studios", "News", "Events"] },
    { h: "Group", items: ["ACDI", "NZCDI", "IFTV Studios", "Empowering Women"] },
  ],
};

export const nzcdi: Brand = {
  ...acdi,
  slug: "nzcdi",
  short: "NZCDI",
  name: "New Zealand College of Digital Innovation",
  tagline: "Create careers",
  country: "New Zealand",
  city: "Christchurch, Canterbury",
  logo: "/brand/nzcdi-logo.svg",
  logoWhite: "/brand/nzcdi-logo-white.svg",
  motion: "calm",
  tones: {
    hero: "#FFFFFF", heroOrbs: "rgba(31,168,134,.28), rgba(16,213,240,.18), rgba(11,110,79,.20)",
    a: "#F2F6F4", aOrbs: "rgba(11,110,79,.26), rgba(31,168,134,.26), rgba(3,136,203,.14)",
    b: "#EAF6F2", bOrbs: "rgba(16,213,240,.30), rgba(31,168,134,.28), rgba(16,20,24,.08)",
    c: "#EEF4F6", cOrbs: "rgba(3,136,203,.22), rgba(31,168,134,.24), rgba(16,213,240,.22)",
  },
  partners: ["Cisco", "CompTIA", "Microsoft", "AWS Academy", "Fortinet", "Google Cloud", "NZQA", "VMware"],
  heroLines: ["Create", "your career in", "digital innovation."],
  stack: ["/ext/nz-hero.jpg", "/ext/nz-event-1.jpg", "/ext/course-net.jpg", "/ext/nz-event-2.jpg"],
  streams: ["Cyber Security & AI", "Telecommunications", "Networking & Data Centre", "Digital Media", "Business", "English"],
  culture: "The ACDI family in New Zealand colours — deep fern green and black with silver, the koru curve as a quiet motif, Canterbury light and landscape in the imagery. Calm, grounded, clean.",
  palette: [
    { name: "White", hex: "#FFFFFF", use: "Background and negative space — about 70% of every page" },
    { name: "Mist", hex: "#F2F6F4", use: "Alternate section background" },
    { name: "Ink Black", hex: "#101418", use: "Headings, navigation, footer" },
    { name: "Fern Green", hex: "#0B6E4F", use: "Primary brand colour — buttons, links" },
    { name: "Pounamu", hex: "#1FA886", use: "Gradient transition, icons" },
    { name: "Aqua Cyan", hex: "#10D5F0", use: "Small accents — the family link to ACDI" },
    { name: "Silver", hex: "#A9B2B9", use: "Dividers, secondary text" },
    { name: "Ocean Blue", hex: "#0388CB", use: "Gradient start — shared with ACDI" },
  ],
  gradient: "linear-gradient(100deg, #10D5F0 0%, #0388CB 25%, #1FA886 60%, #0B6E4F 100%)",
  vars: { "--c-ink": "#101418", "--c-body": "#3B454D", "--c-muted": "#7C878F", "--c-line": "#DFE6E3", "--c-cloud": "#F2F6F4", "--c-tint": "#EAF3EF", "--c-blue": "#0B6E4F", "--c-cyan": "#1FA886", "--c-pink": "#0B6E4F", "--c-footer": "#101418", "--c-orb1": "rgba(31,168,134,.24)", "--c-orb2": "rgba(16,213,240,.16)", "--c-orb3": "rgba(11,110,79,.18)" },
  hero: {
    eyebrow: "Christchurch, New Zealand · NZQA approved",
    title: "Create your career in",
    accent: "digital innovation.",
    sub: "Nationally recognised diplomas in cyber security & AI, telecommunications and networking — Canterbury's new college for the digital industries.",
    primary: "Explore courses",
    secondary: "Book a campus tour",
    image: "/ext/nz-hero.jpg",
    chip: ["First intake", "July 2027"],
  },
  welcome: {
    eyebrow: "Welcome to Christchurch",
    title: "Study in New Zealand's most liveable city.",
    text: "A new campus in the heart of Ōtautahi Christchurch — small classes, real labs, and the Southern Alps an hour away.",
    poster: "/ext/nz-event-2.jpg",
    facts: [["Campus", "Christchurch Central, Canterbury"], ["Classes", "Day, evening and virtual"], ["Opens", "2027 — the ACDI family in Aotearoa"]],
  },
  statement: "The ACDI standard of vocational education, now in Aotearoa — industry certification, real placements and",
  statementAccent: "NZQA-approved qualifications.",
  events: [
    { title: "Campus Open Day", when: "Monthly · 10am", img: "/ext/nz-event-1.jpg" },
    { title: "Industry Night", when: "Monthly · with employers", img: "/ext/event-industry.jpg" },
    { title: "Launch evening", when: "2027 · Christchurch", img: "/ext/nz-hero.jpg" },
  ],
  news: [
    { title: "NZCDI to open in Christchurch in 2027", date: "Oct 2026" },
    { title: "Cyber Security & AI diploma approved for New Zealand", date: "Oct 2026" },
    { title: "Scholarships for Canterbury school leavers announced", date: "Sep 2026" },
  ],
  address: "Christchurch Central, Canterbury 8011, New Zealand",
  phone: "+64 3 000 0000",
  email: "connect@nzcdi.ac.nz",
  footer: [
    { h: "Study", items: ["Courses", "International students", "New Zealand students", "Traineeships", "Fees & support"] },
    { h: "College", items: ["About", "Campus", "Industry partners", "News", "Events"] },
    { h: "Group", items: ["ACDI", "Star Rider Academy", "IFTV Studios", "Empowering Women"] },
  ],
};

export const brands = { acdi, sra, nzcdi };
