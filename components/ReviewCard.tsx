import Image from "next/image";
import { Quote } from "lucide-react";
import type { ReviewItem } from "@/lib/data";

interface ReviewCardProps {
  review: ReviewItem;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="review-card">
      <div>
        <Quote aria-hidden="true" className="review-card__quote" fill="currentColor" size={31} />
        <p>{review.text}</p>
      </div>
      <footer>
        <Image src={review.avatar} alt={`Фото гостя ${review.name}`} width={40} height={40} />
        <span aria-hidden="true" />
        <strong>{review.name}</strong>
      </footer>
    </article>
  );
}
