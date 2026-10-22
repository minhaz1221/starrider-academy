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
  video: "https://videos.pexels.com/video-files/39402053/16776791_1280_720_60fps.mp4",
  poster: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
  { area: "Cyber Security & AI", title: "Diploma of Cyber Security & Artificial Intelligence", text: "Threat detection, risk, identity & access, data privacy and applied AI.", img: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=1200", href: "/courses/cyber-security-ai" },
  { area: "Telecommunications", title: "Advanced Diploma of Telecommunications Network Engineering", text: "Hands-on lab training with the certifications behind Australia's networks.", img: "https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?auto=compress&cs=tinysrgb&w=1200", href: "/#courses" },
  { area: "Networking", title: "Networking & Data Centre", text: "CCNA-aligned skills for the infrastructure every business runs on.", img: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200", href: "/#courses" },
];

export const events = [
  { title: "VIP Launch Party", when: "Date TBC · Gold Coast", cta: "Register now", img: "https://images.pexels.com/photos/34598092/pexels-photo-34598092.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { title: "Industry Night", when: "Monthly · Varsity Lakes", cta: "Reserve a seat", img: "https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { title: "Campus Open Day", when: "Every month · 10am", cta: "Book a tour", img: "https://images.pexels.com/photos/6147143/pexels-photo-6147143.jpeg?auto=compress&cs=tinysrgb&w=1200" },
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
