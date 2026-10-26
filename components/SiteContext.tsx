"use client";
import { createContext, useContext } from "react";
import { sites, type Site } from "@/lib/sites";

const Ctx = createContext<Site>(sites.acdi);
export const SiteProvider = Ctx.Provider;
export const useSite = () => useContext(Ctx);
