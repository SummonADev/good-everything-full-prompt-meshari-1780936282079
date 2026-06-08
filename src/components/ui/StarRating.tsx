import { Star } from 'lucide-react';

type StarRatingProps = {
  rating: number;
  max?: number;
};

export default function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < Math.floor(rating) ? '#C89B3C' : 'transparent'}
          style={{ color: '#C89B3C' }}
        />
      ))}
    </div>
  );
}
