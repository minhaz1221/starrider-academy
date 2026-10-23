import CollegeSite from "@/components/college/CollegeSite";
import { nzcdi } from "@/lib/brands";
import "@/app/college.css";
export const metadata = { title: "NZCDI — Homepage concept", description: "Homepage design concept" };
export default function Page() { return <CollegeSite brand={nzcdi} />; }
