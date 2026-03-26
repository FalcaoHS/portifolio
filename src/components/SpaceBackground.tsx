import { useEffect, useRef } from "react";

type Theme = "light" | "dark";

type Star = {
  x: number;
  y: number;
  r: number;
  layer: 0 | 1 | 2;
  phase: number;
  twinkle: number;
  hue: number;
};

type CloudCircle = { ox: number; oy: number; r: number };
type CloudGroup = {
  baseX: number;
  baseY: number;
  layer: number;
  circles: CloudCircle[];
};

function buildStars(w: number, h: number): Star[] {
  const area = w * h;
  const count = Math.min(420, Math.max(80, Math.floor(area / 2800)));
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    const roll = Math.random();
    const layer = (roll < 0.45 ? 0 : roll < 0.8 ? 1 : 2) as 0 | 1 | 2;
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: layer === 2 ? 0.9 + Math.random() * 1.4 : layer === 1 ? 0.45 + Math.random() * 0.9 : 0.25 + Math.random() * 0.55,
      layer,
      phase: Math.random() * Math.PI * 2,
      twinkle: 0.4 + Math.random() * 1.8,
      hue: 200 + Math.random() * 80,
    });
  }
  return stars;
}

function buildCloudGroups(w: number, h: number): CloudGroup[] {
  const n = 5 + Math.floor(Math.random() * 3);
  const groups: CloudGroup[] = [];
  for (let i = 0; i < n; i++) {
    const circles: CloudCircle[] = [];
    const nCircles = 4 + Math.floor(Math.random() * 4);
    for (let j = 0; j < nCircles; j++) {
      circles.push({
        ox: (Math.random() - 0.5) * 110,
        oy: (Math.random() - 0.5) * 35,
        r: 22 + Math.random() * 48,
      });
    }
    groups.push({
      baseX: Math.random() * w,
      baseY: h * (0.06 + Math.random() * 0.42),
      layer: 0.6 + Math.random() * 0.9,
      circles,
    });
  }
  return groups;
}

function drawStarsFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  stars: Star[],
  scroll: number,
  nowMs: number,
  staticTwinkle: boolean
) {
  const t = nowMs * 0.001;
  ctx.clearRect(0, 0, w, h);

  for (const s of stars) {
    const parallax = scroll * (0.03 + s.layer * 0.045);
    let y = s.y - parallax;
    y = ((y % h) + h) % h;
    const x = s.x;

    const tw = staticTwinkle
      ? 0.75
      : 0.35 +
        0.65 *
          (0.5 + 0.5 * Math.sin(t * s.twinkle + s.phase)) *
          (0.85 + 0.15 * Math.sin(t * 0.7 + s.phase * 2));

    const baseA = s.layer === 2 ? 0.95 : s.layer === 1 ? 0.65 : 0.4;
    const alpha = baseA * tw;

    ctx.fillStyle = `hsla(${s.hue}, 35%, 88%, ${alpha})`;

    ctx.beginPath();
    ctx.arc(x, y, s.r, 0, Math.PI * 2);
    ctx.fill();

    if (s.layer === 2 && s.r > 1.1) {
      ctx.strokeStyle = `hsla(${s.hue}, 40%, 92%, ${alpha * 0.35})`;
      ctx.lineWidth = 0.35;
      const g = s.r * 2.8;
      ctx.beginPath();
      ctx.moveTo(x - g, y);
      ctx.lineTo(x + g, y);
      ctx.moveTo(x, y - g);
      ctx.lineTo(x, y + g);
      ctx.stroke();
    }
  }
}

function drawDayClouds(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  groups: CloudGroup[],
  scroll: number,
  nowMs: number,
  staticMode: boolean
) {
  const t = nowMs * 0.001;
  const wind = staticMode ? 0 : t * 14;
  ctx.clearRect(0, 0, w, h);

  for (const g of groups) {
    const parallaxX = scroll * (0.012 + g.layer * 0.018);
    const parallaxY = scroll * 0.006;
    let baseX = g.baseX + wind * g.layer * 0.15 + parallaxX;
    baseX = ((baseX % (w + 300)) + w + 300) % (w + 300) - 150;
    const baseY = g.baseY + parallaxY;

    for (const c of g.circles) {
      const cx = baseX + c.ox;
      const cy = baseY + c.oy;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, c.r);
      grad.addColorStop(0, "rgba(255, 255, 255, 0.72)");
      grad.addColorStop(0.45, "rgba(255, 255, 255, 0.28)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, c.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

export function SpaceBackground({ theme }: { theme: Theme }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const cloudsRef = useRef<CloudGroup[]>([]);
  const scrollRef = useRef(0);
  const rafRef = useRef(0);
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (isDark) {
        starsRef.current = buildStars(w, h);
      } else {
        cloudsRef.current = buildCloudGroups(w, h);
      }
    };

    const paintReduced = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (isDark) {
        drawStarsFrame(ctx, w, h, starsRef.current, 0, performance.now(), true);
      } else {
        drawDayClouds(ctx, w, h, cloudsRef.current, 0, performance.now(), true);
      }
    };

    if (reduced) {
      const onResizeReduced = () => {
        resize();
        paintReduced();
      };
      onResizeReduced();
      window.addEventListener("resize", onResizeReduced);
      return () => window.removeEventListener("resize", onResizeReduced);
    }

    resize();
    window.addEventListener("resize", resize);

    const loop = (now: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const scroll = scrollRef.current;
      if (isDark) {
        drawStarsFrame(ctx, w, h, starsRef.current, scroll, now, false);
      } else {
        drawDayClouds(ctx, w, h, cloudsRef.current, scroll, now, false);
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [theme, isDark]);

  const nebulaDark = {
    background: `
      radial-gradient(ellipse 90% 55% at 15% 20%, rgba(88, 70, 180, 0.42), transparent 52%),
      radial-gradient(ellipse 70% 50% at 88% 75%, rgba(25, 65, 120, 0.38), transparent 48%),
      radial-gradient(ellipse 50% 40% at 50% 100%, rgba(16, 185, 129, 0.08), transparent 45%),
      radial-gradient(ellipse 60% 45% at 70% 15%, rgba(40, 100, 160, 0.22), transparent 50%),
      linear-gradient(165deg, #04040a 0%, #0a0a14 35%, #080810 70%, #0a0a0a 100%)
    `,
  };

  /** Céu diurno: azul no alto, clareando até o horizonte; halo solar suave */
  const daySky = {
    background: `
      radial-gradient(ellipse 85% 55% at 78% 4%, rgba(255, 252, 235, 0.95) 0%, rgba(255, 236, 180, 0.45) 18%, transparent 42%),
      radial-gradient(ellipse 120% 70% at 50% -15%, rgba(255, 255, 255, 0.55), transparent 48%),
      radial-gradient(ellipse 90% 60% at 12% 30%, rgba(200, 230, 255, 0.35), transparent 50%),
      linear-gradient(
        180deg,
        #6eb8e8 0%,
        #8cc8ed 18%,
        #a8d8f0 38%,
        #c8e5f5 58%,
        #dceef8 78%,
        #e8f0f6 92%,
        #f0f2f5 100%
      )
    `,
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 transition-[background] duration-700"
        style={isDark ? nebulaDark : daySky}
      />
      {!isDark && (
        <div
          className="absolute -top-[12%] -right-[8%] h-[min(52vmin,380px)] w-[min(52vmin,380px)] rounded-full opacity-[0.88]"
          style={{
            background:
              "radial-gradient(circle at 42% 42%, rgba(255,255,255,1) 0%, rgba(255,248,220,0.92) 12%, rgba(255,230,150,0.55) 28%, rgba(255,200,100,0.15) 48%, transparent 58%)",
            filter: "blur(0.8px)",
          }}
        />
      )}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
