"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { type FocusEvent, type KeyboardEvent, useCallback, useEffect, useState } from "react";
import { reviews } from "@/lib/data";
import { ReviewCard } from "./ReviewCard";

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const isPaused = isInteracting || isAutoPaused;

  const showPrevious = useCallback(() => {
    setActiveIndex((index) => (index - 1 + reviews.length) % reviews.length);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % reviews.length);
  }, []);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(showNext, 6500);
    return () => window.clearInterval(interval);
  }, [isPaused, showNext]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false);
  };

  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <h2 className="section-kicker" id="reviews-title">
        ЩО КАЖУТЬ НАШІ ГОСТІ
      </h2>
      <div
        className="reviews-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Відгуки гостей"
        tabIndex={0}
        onBlur={handleBlur}
        onFocus={() => setIsInteracting(true)}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
      >
        <button className="carousel-arrow carousel-arrow--previous" type="button" aria-label="Попередній відгук" onClick={showPrevious}>
          <ChevronLeft aria-hidden="true" size={24} />
        </button>
        <div className="reviews-viewport" aria-live={isPaused ? "polite" : "off"}>
          <div className="reviews-track" style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}>
            {reviews.map((review, index) => (
              <div
                className="review-slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} з ${reviews.length}`}
                aria-hidden={activeIndex !== index}
                key={review.id}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-arrow carousel-arrow--next" type="button" aria-label="Наступний відгук" onClick={showNext}>
          <ChevronRight aria-hidden="true" size={24} />
        </button>
      </div>
      <div
        className="review-controls"
        onBlur={handleBlur}
        onFocus={() => setIsInteracting(true)}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
      >
        <div className="review-dots" aria-label="Навігація відгуками">
          {reviews.map((review, index) => (
            <button
              type="button"
              aria-label={`Показати відгук ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={activeIndex === index ? "is-active" : undefined}
              key={review.id}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button
          className="review-autoplay"
          type="button"
          aria-label={isAutoPaused ? "Продовжити автоматичне гортання" : "Призупинити автоматичне гортання"}
          aria-pressed={isAutoPaused}
          onClick={() => setIsAutoPaused((isPausedByUser) => !isPausedByUser)}
        >
          {isAutoPaused ? <Play aria-hidden="true" size={14} /> : <Pause aria-hidden="true" size={14} />}
          {isAutoPaused ? "Продовжити" : "Пауза"}
        </button>
      </div>
    </section>
  );
}
