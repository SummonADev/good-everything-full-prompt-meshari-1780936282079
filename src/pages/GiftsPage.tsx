import { Link } from 'react-router-dom';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/ui/ContactForm';

const giftOccasions = [
  { emoji: '💍', label: 'Weddings & Engagements' },
  { emoji: '🏢', label: 'Corporate Events' },
  { emoji: '🎄', label: 'Holiday Gifts' },
  { emoji: '🎂', label: 'Birthdays' },
  { emoji: '🎓', label: 'Graduations' },
  { emoji: '💝', label: "Valentine's Day" },
  { emoji: '🐣', label: 'Easter' },
  { emoji: '🤝', label: 'Thank You Gifts' },
];

const giftOptions = [
  {
    name: 'Signature Gift Boxes',
    description: 'Curated assortments of our best-selling truffles, fudge, and chocolate-covered treats. Available in multiple sizes.',
    badge: 'Most Popular',
  },
  {
    name: 'Custom Assortments',
    description: 'Tell us your preferences — dark, milk, or white chocolate; nuts or no nuts; specific flavors — and we\'ll build your perfect box.',
    badge: 'Custom',
  },
  {
    name: 'Corporate Bulk Orders',
    description: 'Ordering for 10, 50, or 500 people? We handle volume orders for corporate gifting, events, and client appreciation.',
    badge: 'Bulk Available',
  },
  {
    name: 'Seasonal Specialties',
    description: 'Chocolate-covered strawberries (seasonal), holiday-themed treats, and limited-edition flavors. Call to check availability.',
    badge: 'Seasonal',
  },
];

export default function GiftsPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* HERO */}
      <section
        className="py-24 px-4 sm:px-6 text-center relative overflow-hidden"
        style={{ backgroundColor: '#3B1A08' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 70%, #C89B3C 0%, transparent 50%), radial-gradient(circle at 70% 30%, #7B1C2C 0%, transparent 50%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
          >
            Gifts & Custom Orders
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FDF6EC' }}
          >
            Give Something Genuinely Crafted.
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(253,246,236,0.75)', fontFamily: 'Inter, sans-serif' }}
          >
            When you give someone a box of NazBro chocolates, you're not giving them candy — you're giving them an experience. Custom orders welcome for any occasion.
          </p>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#FDF6EC' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Perfect For"
            title="Every occasion deserves real chocolate."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {giftOccasions.map((o) => (
              <div
                key={o.label}
                className="p-5 rounded-xl text-center"
                style={{ backgroundColor: '#F5E8D0', border: '1px solid rgba(200,155,60,0.2)' }}
              >
                <div className="text-3xl mb-2">{o.emoji}</div>
                <p
                  className="text-sm font-medium"
                  style={{ color: '#3B1A08', fontFamily: 'Inter, sans-serif' }}
                >
                  {o.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIFT OPTIONS */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#F5E8D0' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="What We Offer"
            title="Gift options for every need."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {giftOptions.map((opt) => (
              <div
                key={opt.name}
                className="p-7 rounded-xl"
                style={{ backgroundColor: '#FDF6EC', border: '1px solid rgba(200,155,60,0.25)' }}
              >
                {opt.badge && (
                  <span
                    className="inline-block text-xs font-semibold tracking-wide uppercase px-2 py-0.5 rounded mb-3"
                    style={{ backgroundColor: '#C89B3C', color: '#3B1A08', fontFamily: 'Inter, sans-serif' }}
                  >
                    {opt.badge}
                  </span>
                )}
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#3B1A08' }}
                >
                  {opt.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(59,26,8,0.7)', fontFamily: 'Inter, sans-serif' }}
                >
                  {opt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#FDF6EC' }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Tell us about your order."
            subtitle="Fill out the form below and we'll get back to you. For the fastest response, call us at (703) 789-3069."
          />
          <ContactForm defaultSubject="Custom Order" />
        </div>
      </section>

      {/* CALL CTA */}
      <section className="py-12 px-4 sm:px-6 text-center" style={{ backgroundColor: '#3B1A08' }}>
        <div className="max-w-2xl mx-auto">
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: 'rgba(253,246,236,0.8)', fontFamily: 'Inter, sans-serif' }}
          >
            Prefer to talk it through? Omar loves to chat.
          </p>
          <a
            href="tel:+17037893069"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-base"
            style={{ backgroundColor: '#C89B3C', color: '#3B1A08', fontFamily: 'Inter, sans-serif' }}
          >
            Call (703) 789-3069
          </a>
        </div>
      </section>
    </div>
  );
}
