"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import {
  type FocusEvent,
  type KeyboardEvent,
  type TransitionEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { reviews } from "@/lib/data";
import { ReviewCard } from "./ReviewCard";

const LOOP_START_INDEX = reviews.length;
const TRANSITION_FALLBACK_MS = 720;

function normalizeReviewIndex(index: number) {
  return ((index % reviews.length) + reviews.length) % reviews.length;
}

function getVisibleCount() {
  if (window.innerWidth <= 767) return 1;
  if (window.innerWidth <= 1023) return 2;
  return 3;
}

export function ReviewsSection() {
  const [trackIndex, setTrackIndex] = useState(LOOP_START_INDEX);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const isPaused = isInteracting || isAutoPaused;
  const activeIndex = normalizeReviewIndex(trackIndex - LOOP_START_INDEX);
  const loopedReviews = useMemo(() => [...reviews, ...reviews, ...reviews], []);

  const normalizeTrack = useCallback(() => {
    setTrackIndex((index) => {
      if (index >= LOOP_START_INDEX && index < LOOP_START_INDEX * 2) return index;

      setIsTransitionEnabled(false);
      return LOOP_START_INDEX + normalizeReviewIndex(index - LOOP_START_INDEX);
    });
    setIsAnimating(false);
  }, []);

  const slideBy = useCallback(
    (distance: number) => {
      if (isAnimating || distance === 0) return;

      setIsTransitionEnabled(true);
      setIsAnimating(true);
      setTrackIndex((index) => index + distance);
    },
    [isAnimating],
  );

  const showPrevious = useCallback(() => slideBy(-1), [slideBy]);
  const showNext = useCallback(() => slideBy(1), [slideBy]);

  useEffect(() => {
    const updateVisibleCount = () => {
      const nextVisibleCount = getVisibleCount();
      setVisibleCount((currentVisibleCount) => {
        if (currentVisibleCount === nextVisibleCount) return currentVisibleCount;
        setIsTransitionEnabled(false);
        return nextVisibleCount;
      });
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    if (isTransitionEnabled) return;

    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setIsTransitionEnabled(true));
    });
    return () => window.cancelAnimationFrame(firstFrame);
  }, [isTransitionEnabled]);

  useEffect(() => {
    if (!isAnimating) return;

    const timeout = window.setTimeout(normalizeTrack, TRANSITION_FALLBACK_MS);
    return () => window.clearTimeout(timeout);
  }, [isAnimating, normalizeTrack]);

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

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) normalizeTrack();
  };

  const showReview = (index: number) => {
    if (index === activeIndex || isAnimating) return;

    const forwardDistance = (index - activeIndex + reviews.length) % reviews.length;
    const backwardDistance = (activeIndex - index + reviews.length) % reviews.length;
    slideBy(forwardDistance <= backwardDistance ? forwardDistance : -backwardDistance);
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
          <div
            className="reviews-track"
            style={{
              transform: `translate3d(-${(trackIndex * 100) / visibleCount}%, 0, 0)`,
              transition: isTransitionEnabled ? undefined : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedReviews.map((review, index) => {
              const reviewIndex = index % reviews.length;
              const isVisible = index >= trackIndex && index < trackIndex + visibleCount;

              return (
                <div
                  className="review-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${reviewIndex + 1} з ${reviews.length}`}
                  aria-hidden={!isVisible}
                  style={{ flexBasis: `${100 / visibleCount}%` }}
                  key={`${Math.floor(index / reviews.length)}-${review.id}`}
                >
                  <ReviewCard review={review} />
                </div>
              );
            })}
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
              onClick={() => showReview(index)}
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
