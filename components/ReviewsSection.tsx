"use client";

import { useState } from "react";
import { reviews } from "@/lib/data";
import { ReviewCard } from "./ReviewCard";

export function ReviewsSection() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <h2 className="section-kicker" id="reviews-title">
        ЩО КАЖУТЬ НАШІ ГОСТІ
      </h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
      <div className="review-dots" aria-label="Навігація відгуками">
        {[0, 1, 2, 3].map((dot) => (
          <button
            type="button"
            aria-label={`Показати відгук ${dot + 1}`}
            aria-current={activeDot === dot ? "true" : undefined}
            className={activeDot === dot ? "is-active" : undefined}
            key={dot}
            onClick={() => setActiveDot(dot)}
          />
        ))}
      </div>
    </section>
  );
}
