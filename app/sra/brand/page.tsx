import ColourStory from "@/components/college/ColourStory";
import { sra } from "@/lib/brands";
import "@/app/college.css";
export const metadata = { title: "Star Rider Academy — Colour story", description: "Palette, type and components" };
export default function Page() { return <ColourStory brand={sra} />; }
