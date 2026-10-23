"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

/** Premium floating bubbles (GSAP). Glassy spheres in three depth layers drift upward at different
 *  speeds, sway on a sine, breathe, and parallax with the cursor. Low count, slow, soft. */
export default function Bubbles({ count = 10, bold = false, className = "" }: { count?: number; bold?: boolean; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = ref.current; if (!host) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 720px)").matches;
    const n = mobile ? Math.ceil(count / 2) : count;
    const rand = gsap.utils.random;
    const bubbles: HTMLElement[] = [];
    for (let i = 0; i < n; i++) {
      const b = document.createElement("i");
      const depth = i % 3; // 0 far, 1 mid, 2 near
      const size = depth === 0 ? rand(40, 90) : depth === 1 ? rand(90, 160) : rand(160, 280);
      b.className = `k-bubble k-bubble--d${depth}`;
      b.style.width = b.style.height = `${size}px`;
      b.style.left = `${rand(-5, 95)}%`;
      host.appendChild(b); bubbles.push(b);
    }
    const H = () => host.getBoundingClientRect().height || window.innerHeight;
    const tweens: gsap.core.Tween[] = [];
    bubbles.forEach((b, i) => {
      const depth = i % 3;
      const size = parseFloat(b.style.width);
      const speed = bold ? 0.7 : 1;
      const dur = (depth === 0 ? rand(34, 48) : depth === 1 ? rand(26, 38) : rand(20, 30)) * speed;
      // start scattered through the height so the scene is full from the first frame
      const startY = rand(0, H() + size);
      gsap.set(b, { y: startY, opacity: 0 });
      gsap.to(b, { opacity: 1, duration: 2, delay: rand(0, 1.5) });
      if (reduce) return;
      // rise, then loop from below
      const rise = gsap.to(b, { y: -size * 1.2, duration: dur * (startY / (H() + size * 1.2)), ease: "none", onComplete: () => {
        const loop = gsap.fromTo(b, { y: H() + size }, { y: -size * 1.2, duration: dur, ease: "none", repeat: -1, delay: rand(0, 4) });
        tweens.push(loop);
      } });
      tweens.push(rise);
      tweens.push(gsap.to(b, { x: `+=${rand(-70, 70)}`, duration: rand(5, 9), yoyo: true, repeat: -1, ease: "sine.inOut" }));
      tweens.push(gsap.to(b, { scale: rand(0.92, 1.08), duration: rand(4, 7), yoyo: true, repeat: -1, ease: "sine.inOut" }));
    });
    // mouse parallax by depth
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5, y = e.clientY / window.innerHeight - 0.5;
      bubbles.forEach((b, i) => { const d = (i % 3) + 1; gsap.to(b, { xPercent: x * d * (bold ? 14 : 8), yPercent: y * d * (bold ? 10 : 6), duration: 1.6, ease: "power3.out", overwrite: "auto" }); });
    };
    if (!mobile && !reduce) window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); tweens.forEach((t) => t.kill()); bubbles.forEach((b) => b.remove()); };
  }, [count, bold]);
  return <div ref={ref} className={`k-bubbles ${className}`} aria-hidden="true" />;
}
