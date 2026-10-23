import CollegeSite from "@/components/college/CollegeSite";
import { sra } from "@/lib/brands";
import "@/app/college.css";
export const metadata = { title: "Star Rider Academy — Homepage concept", description: "Homepage design concept" };
export default function Page() { return <CollegeSite brand={sra} />; }
