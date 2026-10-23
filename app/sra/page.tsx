import Editorial from "@/components/college/Editorial";
import { sra } from "@/lib/brands";
import "@/app/college.css";
import "@/app/editorial.css";
export const metadata = { title: "Star Rider Academy — Homepage concept", description: "Homepage design concept" };
export default function Page() { return <Editorial brand={sra} />; }
