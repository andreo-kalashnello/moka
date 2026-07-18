"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = Math.min(window.scrollY * 0.12, 90);
      image.style.transform = `translate3d(0, ${distance}px, 0) scale(1.08)`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div ref={imageRef} className="hero__image" aria-hidden="true">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero__image-element"
        />
      </div>
      <div className="hero__scrim" />
      <div className="site-container hero__inner">
        <div className="hero__content">
          <p className="eyebrow hero-animate">БІЛЬШЕ, НІЖ КАВА</p>
          <h1 id="hero-title" className="hero-animate hero-delay-1">
            Більше, ніж
            <br className="desktop-break" /> місце для
            <br className="desktop-break" /> ранкової кави.
          </h1>
          <p className="hero__description hero-animate hero-delay-1">
            MOKA — це простір для неспішних ранків, теплих зустрічей та щирих розмов. Кава, яку
            хочеться смакувати. Їжа, що надихає.
          </p>
          <div className="hero__actions hero-animate hero-delay-2">
            <a className="button" href="#menu">
              Переглянути меню
            </a>
            <a className="button button--outline" href="#booking">
              Забронювати столик
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
