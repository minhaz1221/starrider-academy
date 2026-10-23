import CesSite from "@/components/college/CesSite";
import { acdi } from "@/lib/brands";
import "@/app/college.css";
import "@/app/ces.css";
export const metadata = { title: "ACDI — Homepage concept", description: "Homepage design concept" };
export default function Page() { return <CesSite brand={acdi} />; }
