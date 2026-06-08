import { Quote } from 'lucide-react';

type TestimonialCardProps = {
  quote: string;
  source: string;
  platform: string;
  light?: boolean;
};

export default function TestimonialCard({ quote, source, platform, light = false }: TestimonialCardProps) {
  return (
    <div
      className="rounded-xl p-6 flex flex-col h-full"
      style={{
        backgroundColor: light ? 'rgba(253,246,236,0.07)' : '#FFF9F0',
        border: light ? '1px solid rgba(200,155,60,0.2)' : '1px solid rgba(200,155,60,0.3)',
      }}
    >
      <Quote size={24} style={{ color: '#C89B3C', opacity: 0.6 }} className="mb-4 flex-shrink-0" />
      <p
        className="text-sm leading-relaxed flex-1 italic"
        style={{
          color: light ? 'rgba(253,246,236,0.85)' : 'rgba(59,26,8,0.8)',
          fontFamily: 'Playfair Display, serif',
        }}
      >
        "{quote}"
      </p>
      <div className="mt-5 pt-4" style={{ borderTop: `1px solid ${light ? 'rgba(200,155,60,0.2)' : 'rgba(59,26,8,0.1)'}` }}>
        <span
          className="text-xs font-semibold tracking-wide uppercase"
          style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
        >
          — {source}
        </span>
        <span
          className="text-xs ml-2"
          style={{ color: light ? 'rgba(253,246,236,0.4)' : 'rgba(59,26,8,0.4)', fontFamily: 'Inter, sans-serif' }}
        >
          via {platform}
        </span>
      </div>
    </div>
  );
}
