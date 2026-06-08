import clsx from 'clsx';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionHeader({ eyebrow, title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={clsx('mb-12', centered && 'text-center')}>
      {eyebrow && (
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl font-bold leading-tight mb-4"
        style={{
          fontFamily: 'Playfair Display, serif',
          color: light ? '#FDF6EC' : '#3B1A08',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{
            color: light ? 'rgba(253,246,236,0.75)' : 'rgba(59,26,8,0.7)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {subtitle}
        </p>
      )}
      <div className="section-divider mt-6" />
    </div>
  );
}
