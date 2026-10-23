import ColourStory from "@/components/college/ColourStory";
import { acdi } from "@/lib/brands";
import "@/app/college.css";
export const metadata = { title: "ACDI — Colour story", description: "Palette, type and components" };
export default function Page() { return <ColourStory brand={acdi} />; }
