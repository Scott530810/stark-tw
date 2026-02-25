"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

export default function ImageCarousel({
  images,
  alt,
  autoPlay = true,
  interval = 5000,
  className = "h-screen",
  overlay = true,
  children,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [autoPlay, interval, next, images.length]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((img, i) => (
        <div
          key={img}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={img}
            alt={`${alt} ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {overlay && <div className="absolute inset-0 hero-overlay" />}

      {/* Nav arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}

      {/* Children overlay */}
      {children && <div className="relative z-10 h-full">{children}</div>}
    </div>
  );
}
