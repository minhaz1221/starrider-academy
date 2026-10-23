import CesSite from "@/components/college/CesSite";
import { sra } from "@/lib/brands";
import "@/app/college.css";
import "@/app/ces.css";
export const metadata = { title: "Star Rider Academy — Homepage concept", description: "Homepage design concept" };
export default function Page() { return <CesSite brand={sra} />; }
