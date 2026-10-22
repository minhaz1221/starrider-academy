export const site = {
  name: "Star Rider Academy",
  phone: "+61 7 5578 8122",
  phoneHref: "tel:+61755788122",
  email: "connect@starrideracademy.com",
  location: "Gold Coast, Queensland",
  address: "Level 2, 246 Varsity Parade, Varsity Lakes, Queensland 4227",
  announcement: "Register now for our VIP launch party",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Courses", href: "/#courses", mega: true },
  { label: "Events", href: "/#events" },
  { label: "Government-funded", href: "/#pathways" },
  { label: "News", href: "/#news" },
];

export const hero = {
  eyebrow: "Gold Coast, Australia  ·  A Star Rider Group college",
  title: "Technology, film and the careers of the next decade.",
  accentFrom: 3, // words from "the careers…" are magenta
  sub: "Nationally recognised diplomas in cyber security & AI, telecommunications and digital media — paired with the industry certifications employers ask for.",
  primary: { label: "Explore courses", href: "/#courses" },
  secondary: { label: "Book a campus tour", href: "/#events" },
  chips: ["Cyber Security & AI", "Digital Media", "Telecommunications"],
  captionEyebrow: "IFTV Studios  ·  on set with Digital Media students",
  caption: "Learn production on real sets, alongside industry.",
  video: "/ext/hero.mp4",
  poster: "/ext/hero-poster.jpg",
};

export const stats = [
  { n: 30, suffix: "+", label: "years training technologists and artists" },
  { n: 40, suffix: "+", label: "countries our graduates come from" },
  { n: 3, suffix: "", label: "new campuses — Japan, New Zealand, USA" },
  { n: 1200, suffix: "+", label: "industry placements since 2019" },
];

export const pathways = [
  { title: "International students", text: "CRICOS-registered diplomas with visa and accommodation support, on the Gold Coast.", img: "/figma/path-international.jpg", href: "/#pathways" },
  { title: "Australians & residents", text: "Government-funded places and fee-help options for domestic students.", img: "/figma/path-australians.jpg", href: "/#pathways" },
  { title: "Traineeships for employers", text: "Train your team while they work — nationally recognised, employer-supported.", img: "/figma/path-traineeships.jpg", href: "/#pathways" },
];

export const courses = [
  { area: "Cyber Security & AI", title: "Diploma of Cyber Security & Artificial Intelligence", text: "Threat detection, risk, identity & access, data privacy and applied AI.", img: "/ext/course-cyber.jpg", href: "/courses/cyber-security-ai" },
  { area: "Telecommunications", title: "Advanced Diploma of Telecommunications Network Engineering", text: "Hands-on lab training with the certifications behind Australia's networks.", img: "/ext/course-telco.jpg", href: "/#courses" },
  { area: "Networking", title: "Networking & Data Centre", text: "CCNA-aligned skills for the infrastructure every business runs on.", img: "/ext/course-net.jpg", href: "/#courses" },
];

export const events = [
  { title: "VIP Launch Party", when: "Date TBC · Gold Coast", cta: "Register now", img: "/ext/event-launch.jpg" },
  { title: "Industry Night", when: "Monthly · Varsity Lakes", cta: "Reserve a seat", img: "/ext/event-industry.jpg" },
  { title: "Campus Open Day", when: "Every month · 10am", cta: "Book a tour", img: "/ext/event-openday.jpg" },
];

export const news = [
  { title: "Pioneering generative AI in digital media and film", date: "Oct 2026" },
  { title: "New intake open for the Diploma of Cyber Security & AI", date: "Oct 2026" },
  { title: "Empowering Women scholarships now accepting applications", date: "Sep 2026" },
  { title: "Star Rider Academy to open campuses in Japan, New Zealand and the USA", date: "Aug 2026" },
];

export const megaMenu = {
  streams: ["Cyber Security & AI", "Telecommunications", "Networking & Data Centre", "Digital Media & Film", "Business", "English (ELICOS)"],
  study: ["International Students", "Australians & PR", "Traineeships", "Government-Funded", "How to Enrol"],
};

export const footerCols = [
  { h: "Study", items: ["Courses", "International students", "Australians & residents", "Traineeships", "Government-funded"] },
  { h: "Academy", items: ["About", "Campus", "Industry partners", "News", "Events"] },
  { h: "Group", items: ["Star Rider", "IFTV Studios", "ACDI", "NZCDI", "Empowering Women"] },
];

export const mediaCredit = "Pathway photos: client Figma. Hero footage, course/event photos: Pexels (free licence) placeholders.";

export const welcome = {
  eyebrow: "Welcome to the Gold Coast",
  title: "Study where the industry works — Varsity Lakes, Queensland.",
  text: "Thirty years of training technologists and artists on the Gold Coast, with small classes, real labs and a campus ten minutes from the beach.",
  video: "/ext/welcome.mp4",
  facts: [["Campus", "Level 2, 246 Varsity Parade, Varsity Lakes"], ["Classes", "Day, evening and virtual"], ["Since", "1993 — 30 years on the Gold Coast"]],
};

export const testimonials = [
  { name: "Nicko Jay Menecio", course: "Advanced Diploma of Telecommunications Network Engineering", img: "/ext/t-nicko.png", quote: "The course provided strong practical knowledge, experienced trainers and excellent lab facilities. Because of the training and support, I secured a job in the wireless telecommunications industry, which helped me achieve permanent residency within a year of graduation." },
  { name: "Nicolas Vanin", course: "Telecommunications & Networking", img: "/ext/t-nicolas.png", quote: "Strong foundations with engaging lectures, practical training and experienced trainers. After graduating I joined an organisation where I manage the entire IT infrastructure, using the skills I learned here." },
  { name: "Keem Jayve Tan", course: "Telecommunications Network Engineering", img: "/ext/t-keem.png", quote: "A strong mix of theoretical knowledge and practical training, supported by dedicated trainers and modern lab facilities. It played a key role in my professional growth." },
  { name: "Shivraj Mavani", course: "Networking & Data Centre", img: "/ext/t-shivraj.png", quote: "The courses were challenging and engaging — I particularly enjoyed CCNA and Data Centre. The professors were knowledgeable and passionate, and always encouraged us to think critically and creatively." },
  { name: "Eden Ivan Camacho", course: "Information Technology", img: "/ext/t-eden.png", quote: "It was useful to have such a great instructor who was extremely knowledgeable. I enjoyed every phase of the course and I am sure I will apply everything I've learned daily in my professional career." },
  { name: "Rajwinder Kaur", course: "International student", img: "/ext/t-rajwinder.png", quote: "The support and help offered by the staff is unbelievable. I recommend other students to choose this college for their future education — international students can also get 5 extra points studying in a regional college." },
];

export const brochures = [
  { title: "College brochure", text: "Courses, campus, industry certifications and how to enrol — the full prospectus.", meta: "PDF · Prospectus", href: "https://acit.edu.au/wp-content/uploads/2024/05/ACIT-College_Brochure_Web-FINAL-Sep_2023.pdf" },
  { title: "ELICOS brochure", text: "English for computing and technology — specialised vocabulary to CEFR C1 level.", meta: "PDF · English", href: "https://acit.edu.au/wp-content/uploads/2025/05/ELICOS-Brochure.pdf" },
  { title: "School of English brochure", text: "Support, resources and opportunities for students joining us from across the globe.", meta: "PDF · International", href: "https://acit.edu.au/wp-content/uploads/2025/06/ACIT-IFTV-Brochure-1.pdf" },
];
