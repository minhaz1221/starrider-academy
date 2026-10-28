"use client";
import { useEffect, useRef } from "react";

/**
 * Moving brand gradient: soft blurred colour fields that drift on their own and
 * lean towards the cursor (eased), plus a sparse star field. Colours come from the
 * ACDI colour story (cyan, ocean, royal, purple, magenta, pink).
 */
export default function Aurora({ className = "", strength = 1 }: { className?: string; strength?: number }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0, active = true;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;   // -1 .. 1
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const loop = () => {
      cx += (tx - cx) * 0.045; cy += (ty - cy) * 0.045;
      el.style.setProperty("--mx", cx.toFixed(4));
      el.style.setProperty("--my", cy.toFixed(4));
      if (active) raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver(([en]) => { active = en.isIntersecting; if (active) { cancelAnimationFrame(raf); raf = requestAnimationFrame(loop); } }, { threshold: 0 });
    io.observe(el);
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { active = false; cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener("pointermove", onMove); };
  }, []);

  return (
    <div className={`aurora ${className}`} ref={root} aria-hidden="true" style={{ "--s": strength } as React.CSSProperties}>
      <i className="au au-1" /><i className="au au-2" /><i className="au au-3" /><i className="au au-4" /><i className="au au-5" />
      <span className="stars" />
    </div>
  );
}
