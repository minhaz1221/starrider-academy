"use client";
import { useEffect, useRef } from "react";

/** Animated dot grid (the "blue dot" effect): small brand-blue dots on a grid that breathe in a slow wave,
 *  brighten toward cyan near the wave crest, and part gently around the cursor. Canvas, 60fps, DPR-aware. */
export default function DotField({ color = "16,213,240", color2 = "3,136,203", gap = 26, bold = false, className = "" }: { color?: string; color2?: string; gap?: number; bold?: boolean; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1, raf = 0, t = 0;
    const mouse = { x: -9999, y: -9999 };
    const resize = () => { dpr = Math.min(2, window.devicePixelRatio || 1); const r = c.getBoundingClientRect(); w = r.width; h = r.height; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(c);
    const onMove = (e: MouseEvent) => { const r = c.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    window.addEventListener("mousemove", onMove); window.addEventListener("mouseleave", onLeave);
    const speed = bold ? 1.6 : 1;
    const draw = () => {
      t += 0.016 * speed;
      ctx.clearRect(0, 0, w, h);
      const cols = Math.ceil(w / gap) + 1, rows = Math.ceil(h / gap) + 1;
      for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
        const x = i * gap, y = j * gap;
        // two travelling waves
        const wave = Math.sin(x * 0.012 + t * 1.2) * 0.5 + Math.sin(y * 0.016 - t * 0.9 + x * 0.004) * 0.5; // -1..1
        const dx = x - mouse.x, dy = y - mouse.y, d = Math.hypot(dx, dy);
        const push = d < 160 ? (1 - d / 160) : 0;
        const r = 1.1 + (wave + 1) * 0.9 + push * 2.2;
        const a = 0.18 + (wave + 1) * 0.22 + push * 0.4;
        const mix = (wave + 1) / 2; // 0 → color2, 1 → color
        const col = mix > 0.5 ? color : color2;
        const ox = push ? (dx / (d || 1)) * push * 14 : 0, oy = push ? (dy / (d || 1)) * push * 14 : 0;
        ctx.beginPath(); ctx.arc(x + ox, y + oy, r, 0, Math.PI * 2); ctx.fillStyle = `rgba(${col},${Math.min(1, a)})`; ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseleave", onLeave); };
  }, [color, color2, gap, bold]);
  return <canvas ref={ref} className={`k-dots ${className}`} aria-hidden="true" />;
}
