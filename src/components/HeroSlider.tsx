import { useEffect, useState } from "react";

type Slide = { src: string; alt: string; caption?: string };

export function HeroSlider({
  slides,
  interval = 5500,
  className = "",
}: {
  slides: Slide[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [slides.length, interval]);

  return (
    <div className={"absolute inset-0 overflow-hidden " + className}>
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          width={1920}
          height={1200}
          loading={i === 0 ? "eager" : "lazy"}
          className="hero-slide-img absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1400ms] ease-out"
          style={{
            opacity: i === index ? 1 : 0,
            transform: i === index ? "scale(1.02)" : "scale(1)",
            transitionProperty: "opacity, transform",
            transitionDuration: "1400ms, 8000ms",
          }}
        />
      ))}

      {/* Unifying cool-daylight tint — normalises sky + glass highlights across all four frames */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-color"
        style={{
          background:
            "linear-gradient(180deg, hsl(205 55% 62% / 0.28) 0%, hsl(200 45% 70% / 0.18) 55%, hsl(210 40% 55% / 0.22) 100%)",
        }}
        aria-hidden
      />

      {/* Highlight lift on glass facets — keeps specular consistency slide-to-slide */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-soft-light"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.10) 100%)",
        }}
        aria-hidden
      />

      {/* High-contrast wash so foreground copy stays legible on any frame */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,17,18,0.55) 0%, rgba(11,17,18,0.25) 45%, rgba(11,17,18,0.85) 100%)",
        }}
      />

      {/* Restrained animated glass sheen */}
      <div className="hero-sheen absolute inset-0 pointer-events-none mix-blend-screen" aria-hidden />



      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className="group relative h-[2px] w-10 overflow-hidden bg-white/25"
          >
            <span
              className="absolute inset-y-0 left-0 bg-white transition-all duration-700"
              style={{ width: i === index ? "100%" : i < index ? "100%" : "0%" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
