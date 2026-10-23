import ColourStory from "@/components/college/ColourStory";
import { nzcdi } from "@/lib/brands";
import "@/app/college.css";
export const metadata = { title: "NZCDI — Colour story", description: "Palette, type and components" };
export default function Page() { return <ColourStory brand={nzcdi} />; }
