import CollegeSite from "@/components/college/CollegeSite";
import { acdi } from "@/lib/brands";
import "@/app/college.css";
export const metadata = { title: "ACDI — Homepage concept", description: "Homepage design concept" };
export default function Page() { return <CollegeSite brand={acdi} />; }
