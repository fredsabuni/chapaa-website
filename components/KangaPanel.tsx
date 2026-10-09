"use client";

import { useEffect, useRef, useState } from "react";

const TARGET = 600_000;
const WEEKLY = 60_000;

export default function KangaPanel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [week, setWeek] = useState(0);

  // Kanga pattern: drifting rows of diamond-and-dot motifs, drawn on canvas
  useEffect(() => {
    const cv = canvasRef.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let t = 0;
    let raf = 0;

    const size = () => {
      const r = cv.parentElement!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      cv.width = r.width * dpr;
      cv.height = r.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = cv.width / dpr;
      const h = cv.height / dpr;
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "#1C2A64");
      g.addColorStop(1, "#13203F");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      const s = 46;
      const off = t * 8;
      for (let row = 0, y = -s; y < h + s; y += s, row++) {
        const dir = row % 2 ? 1 : -1;
        const shift = (off * dir) % s;
        for (let x = -s + shift; x < w + s; x += s) {
          const cx = x + (row % 2 ? s / 2 : 0);
          const cy = y;
          ctx.beginPath();
          ctx.moveTo(cx, cy - s * 0.3);
          ctx.lineTo(cx + s * 0.3, cy);
          ctx.lineTo(cx, cy + s * 0.3);
          ctx.lineTo(cx - s * 0.3, cy);
          ctx.closePath();
          ctx.strokeStyle = `rgba(107,214,191,${row % 3 ? 0.22 : 0.45})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(cx, cy, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = row % 3 ? "rgba(255,255,255,.35)" : "#6BD6BF";
          ctx.fill();
        }
      }
      // soft vignette so the type stays legible
      const v = ctx.createRadialGradient(w * 0.25, h * 0.3, 40, w * 0.25, h * 0.3, w * 0.9);
      v.addColorStop(0, "rgba(24,32,72,.75)");
      v.addColorStop(1, "rgba(24,32,72,0)");
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
    };

    const onResize = () => {
      size();
      draw();
    };
    onResize();
    window.addEventListener("resize", onResize);

    if (!reduce) {
      const loop = () => {
        t += 1 / 60;
        draw();
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Ticket: weekly deposits filling the goal, then restarting
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = setTimeout(() => setWeek(1), 700);
    const id = setInterval(() => {
      if (!document.hidden) setWeek((w) => (w * WEEKLY >= TARGET ? 0 : w + 1));
    }, reduce ? 4000 : 1500);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, []);

  const value = Math.min(week * WEEKLY, TARGET);
  const pct = Math.round((value / TARGET) * 100);

  return (
    <div className="kanga" aria-label="Kanga-inspired panel with a Swahili proverb and an example goal">
      <canvas ref={canvasRef} />
      <div className="kanga-border" aria-hidden="true" />
      <div className="jina">
        <small>Jina la kanga</small>
        Haba na haba hujaza kibaba.
        <div className="trans">
          Little by little fills the measure. The oldest savings advice in Swahili, now with a progress bar.
        </div>
      </div>
      <div className="ticket" aria-live="off">
        <div className="t1">
          <span>Goal · Example</span>
          <span>Week {Math.max(week, 1)}</span>
        </div>
        <div className="t2">TSh {value.toLocaleString("en-US")}</div>
        <div className="pb">
          <i style={{ width: `${pct}%` }} />
        </div>
        <div className="t3">
          <span>Target TSh 600,000</span>
          <b>{pct}%</b>
        </div>
      </div>
    </div>
  );
}
