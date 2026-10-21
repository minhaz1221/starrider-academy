"use client";
import { useEffect, useRef, type ReactNode } from "react";

/** Fades/slides children in when they scroll into view (CES-style section reveals). */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "" }: { children: ReactNode; delay?: 0 | 1 | 2 | 3; as?: "div" | "section" | "article"; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (el.classList.add("in"), io.unobserve(el))),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = Tag as any;
  return (
    <Comp ref={ref} className={`reveal ${className}`} data-delay={delay || undefined}>
      {children}
    </Comp>
  );
}
