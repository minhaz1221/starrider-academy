import Editorial from "@/components/college/Editorial";
import { nzcdi } from "@/lib/brands";
import "@/app/college.css";
import "@/app/editorial.css";
export const metadata = { title: "NZCDI — Homepage concept", description: "Homepage design concept" };
export default function Page() { return <Editorial brand={nzcdi} />; }
