interface StarRatingProps {
  rating: number;
  className?: string;
}

export default function StarRating({ rating, className = "" }: StarRatingProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`flex h-4 w-4 items-center justify-center ${
            star <= rating ? "text-secondary-500" : "text-background-300 dark:text-background-700"
          }`}
        >
          <i className={`${star <= rating ? "ri-star-fill" : "ri-star-line"} text-sm`}></i>
        </span>
      ))}
    </div>
  );
}