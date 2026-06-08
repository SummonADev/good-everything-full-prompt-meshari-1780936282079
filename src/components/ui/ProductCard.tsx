import clsx from 'clsx';
import { Link } from 'react-router-dom';

type ProductCardProps = {
  name: string;
  description: string;
  emoji?: string;
  badge?: string;
  linkTo?: string;
  compact?: boolean;
};

export default function ProductCard({ name, description, emoji, badge, linkTo, compact = false }: ProductCardProps) {
  return (
    <div
      className={clsx(
        'product-card-hover rounded-xl overflow-hidden flex flex-col',
        compact ? 'p-4' : 'p-6'
      )}
      style={{
        backgroundColor: '#FDF6EC',
        border: '1px solid rgba(200,155,60,0.25)',
        boxShadow: '0 2px 12px rgba(59,26,8,0.07)',
      }}
    >
      {badge && (
        <span
          className="inline-block text-xs font-semibold tracking-wide uppercase px-2 py-0.5 rounded mb-3 self-start"
          style={{ backgroundColor: '#C89B3C', color: '#3B1A08', fontFamily: 'Inter, sans-serif' }}
        >
          {badge}
        </span>
      )}
      {emoji && (
        <div className="text-3xl mb-3">{emoji}</div>
      )}
      <h3
        className="font-semibold text-base mb-2 leading-snug"
        style={{ fontFamily: 'Playfair Display, serif', color: '#3B1A08' }}
      >
        {name}
      </h3>
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: 'rgba(59,26,8,0.65)', fontFamily: 'Inter, sans-serif' }}
      >
        {description}
      </p>
      {linkTo && (
        <Link
          to={linkTo}
          className="mt-4 text-sm font-semibold inline-flex items-center gap-1 transition-colors duration-200"
          style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
        >
          Learn More →
        </Link>
      )}
    </div>
  );
}
