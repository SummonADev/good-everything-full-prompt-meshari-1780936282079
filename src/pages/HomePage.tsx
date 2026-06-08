import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ChevronLeft, ChevronRight, Star, ExternalLink, Award, ShoppingBag } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';

const featuredProducts = [
  {
    emoji: '🎁',
    name: 'Truffle Gift Boxes',
    description: 'Handcrafted truffles in curated gift boxes. Perfect for any occasion.',
    linkTo: '/shop',
    badge: 'Bestseller',
  },
  {
    emoji: '🍫',
    name: 'Dubai Chocolate',
    description: 'The viral sensation. Rich, layered, and genuinely unforgettable. Available in Occoquan.',
    linkTo: '/shop',
    badge: 'Trending',
  },
  {
    emoji: '🍮',
    name: 'Artisan Fudge',
    description: 'Five signature flavors plus rotating seasonals. Customers call the fudge exceptional.',
    linkTo: '/shop',
    badge: '',
  },
  {
    emoji: '🫘',
    name: 'Chocolate-Covered Fruits & Nuts',
    description: 'From our famous dried cherries to chocolate-covered blueberries — try them all.',
    linkTo: '/shop',
    badge: 'Fan Favorite',
  },
  {
    emoji: '🐢',
    name: 'Pecan Clusters & Turtles',
    description: '"The best I\'ve ever had." Reviewers keep coming back for these.',
    linkTo: '/shop',
    badge: '',
  },
  {
    emoji: '🎀',
    name: 'Custom & Corporate Gifts',
    description: 'Tell us your occasion. We\'ll handle everything else.',
    linkTo: '/gifts',
    badge: 'Custom Orders',
  },
];

const ratings = [
  { platform: 'Google', stars: 4.8, reviews: '135+' },
  { platform: 'Yelp', stars: 4.8, reviews: '94+' },
  { platform: 'Restaurant Guru', stars: 4.8, reviews: '112+' },
  { platform: 'Sluurpy', stars: null, score: '93/100', reviews: '214+ ratings' },
];

export default function HomePage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const visibleTestimonials = testimonials.slice(testimonialIndex, testimonialIndex + 3);

  const prev = () => setTestimonialIndex((i) => Math.max(0, i - 1));
  const next = () => setTestimonialIndex((i) => Math.min(testimonials.length - 3, i + 1));

  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        <div className="hero-pattern absolute inset-0" />
        {/* Decorative circles */}
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: '#C89B3C', filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full opacity-10"
          style={{ backgroundColor: '#7B1C2C', filter: 'blur(60px)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
          >
            Historic Occoquan, Virginia · Est. with Love
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FDF6EC' }}
          >
            Where Every Visit
            <br />
            <em style={{ color: '#C89B3C' }}>Feels Like a Gift.</em>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(253,246,236,0.8)', fontFamily: 'Inter, sans-serif' }}
          >
            Small-batch, handcrafted chocolates and fudge made with the finest ingredients.
            Family-owned. Found in the heart of Historic Occoquan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://nazbro.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 flex items-center gap-2"
              style={{
                backgroundColor: '#C89B3C',
                color: '#3B1A08',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <ShoppingBag size={18} />
              Shop Online
            </a>
            <a
              href="https://maps.google.com/?q=309+Mill+St+Suite+115+Occoquan+VA+22125"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 flex items-center gap-2"
              style={{
                backgroundColor: 'transparent',
                color: '#FDF6EC',
                border: '1px solid rgba(253,246,236,0.35)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <MapPin size={18} />
              Find Our Shop
            </a>
          </div>
          <p
            className="mt-6 text-xs"
            style={{ color: 'rgba(253,246,236,0.4)', fontFamily: 'Inter, sans-serif' }}
          >
            Online shop is seasonal · In-store open every day, 11 AM – 5:30 PM
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(200,155,60,0.6)', fontFamily: 'Inter, sans-serif' }}>Discover</span>
          <div
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, rgba(200,155,60,0.5), transparent)' }}
          />
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section style={{ backgroundColor: '#2A1005' }} className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {ratings.map((r) => (
              <div key={r.platform} className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1">
                  {r.stars ? (
                    <>
                      <Star size={14} fill="#C89B3C" style={{ color: '#C89B3C' }} />
                      <span
                        className="text-base font-bold"
                        style={{ color: '#C89B3C', fontFamily: 'Playfair Display, serif' }}
                      >
                        {r.stars}
                      </span>
                    </>
                  ) : (
                    <span
                      className="text-base font-bold"
                      style={{ color: '#C89B3C', fontFamily: 'Playfair Display, serif' }}
                    >
                      {r.score}
                    </span>
                  )}
                </div>
                <span
                  className="text-xs font-semibold"
                  style={{ color: '#FDF6EC', fontFamily: 'Inter, sans-serif' }}
                >
                  {r.platform}
                </span>
                <span
                  className="text-xs"
                  style={{ color: 'rgba(253,246,236,0.45)', fontFamily: 'Inter, sans-serif' }}
                >
                  {r.reviews}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#FDF6EC' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
              >
                Our Story
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#3B1A08' }}
              >
                Born from a genuine love for chocolate.
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: 'rgba(59,26,8,0.75)', fontFamily: 'Inter, sans-serif' }}
              >
                NazBro Chocolates & Fudge started as a family passion and grew into one of Northern Virginia's most beloved sweet shops. We craft everything in small batches using only the finest ingredients — no shortcuts, no compromises.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: 'rgba(59,26,8,0.75)', fontFamily: 'Inter, sans-serif' }}
              >
                Our owner, Omar, doesn't just sell chocolate — he teaches people about it. Come in for samples, stay for the history lesson, leave with a bag full of things you can't stop thinking about.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-200"
                style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
              >
                Read our full story →
              </Link>
            </div>
            {/* Decorative block */}
            <div
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden flex items-end p-8"
              style={{ backgroundColor: '#3B1A08' }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle at 30% 30%, #C89B3C 0%, transparent 50%), radial-gradient(circle at 70% 70%, #7B1C2C 0%, transparent 50%)',
                }}
              />
              <div className="relative z-10">
                <p
                  className="text-3xl font-bold leading-tight mb-2"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#FDF6EC' }}
                >
                  "We are mostly chocolaty, sweet, salty and a bit nutty."
                </p>
                <p
                  className="text-sm"
                  style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
                >
                  — NazBro Chocolates & Fudge
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#F5E8D0' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="What We Make"
            title="Handcrafted with care. Every single piece."
            subtitle="From our signature truffles to the viral Dubai chocolate — everything is made in small batches so every bite is as fresh as it is delicious."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.name}
                to={product.linkTo}
                className="product-card-hover rounded-xl p-6 flex flex-col group"
                style={{
                  backgroundColor: '#FDF6EC',
                  border: '1px solid rgba(200,155,60,0.25)',
                  boxShadow: '0 2px 12px rgba(59,26,8,0.07)',
                  textDecoration: 'none',
                }}
              >
                {product.badge && (
                  <span
                    className="inline-block text-xs font-semibold tracking-wide uppercase px-2 py-0.5 rounded mb-3 self-start"
                    style={{ backgroundColor: '#C89B3C', color: '#3B1A08', fontFamily: 'Inter, sans-serif' }}
                  >
                    {product.badge}
                  </span>
                )}
                <div className="text-4xl mb-4">{product.emoji}</div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#3B1A08' }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: 'rgba(59,26,8,0.65)', fontFamily: 'Inter, sans-serif' }}
                >
                  {product.description}
                </p>
                <span
                  className="mt-4 text-sm font-semibold inline-flex items-center gap-1"
                  style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
                >
                  Explore →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200"
              style={{
                backgroundColor: '#3B1A08',
                color: '#FDF6EC',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#3B1A08' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="What Customers Say"
            title="Real chocolate. Real stories."
            subtitle='Over 500 five-star reviews across platforms. Here\'s what people actually say after visiting NazBro.'
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                quote={t.quote}
                source={t.source}
                platform={t.platform}
                light
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              disabled={testimonialIndex === 0}
              className="p-2 rounded-full transition-all duration-200 disabled:opacity-30"
              style={{ border: '1px solid rgba(200,155,60,0.4)', color: '#C89B3C' }}
            >
              <ChevronLeft size={20} />
            </button>
            <span
              className="text-xs"
              style={{ color: 'rgba(253,246,236,0.4)', fontFamily: 'Inter, sans-serif' }}
            >
              {testimonialIndex + 1} – {Math.min(testimonialIndex + 3, testimonials.length)} of {testimonials.length}
            </span>
            <button
              onClick={next}
              disabled={testimonialIndex >= testimonials.length - 3}
              className="p-2 rounded-full transition-all duration-200 disabled:opacity-30"
              style={{ border: '1px solid rgba(200,155,60,0.4)', color: '#C89B3C' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#FDF6EC' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Recognition"
            title="Voted a Neighborhood Favorite. Four years in a row."
            subtitle="When Northern Virginia's most discerning sweet-tooths vote, NazBro wins. Consistently."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[2020, 2021, 2022, 2023].map((year) => (
              <div
                key={year}
                className="text-center p-6 rounded-xl"
                style={{
                  backgroundColor: '#3B1A08',
                  border: '1px solid rgba(200,155,60,0.3)',
                }}
              >
                <Award size={28} style={{ color: '#C89B3C' }} className="mx-auto mb-2" />
                <p
                  className="text-xs font-semibold tracking-wide uppercase mb-1"
                  style={{ color: 'rgba(253,246,236,0.6)', fontFamily: 'Inter, sans-serif' }}
                >
                  Nextdoor
                </p>
                <p
                  className="text-lg font-bold"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#C89B3C' }}
                >
                  {year}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: 'rgba(253,246,236,0.5)', fontFamily: 'Inter, sans-serif' }}
                >
                  Neighborhood Favorite
                </p>
              </div>
            ))}
          </div>
          <div
            className="rounded-xl p-6 text-center"
            style={{ backgroundColor: '#F5E8D0', border: '1px solid rgba(200,155,60,0.2)' }}
          >
            <p
              className="text-sm"
              style={{ color: 'rgba(59,26,8,0.7)', fontFamily: 'Inter, sans-serif' }}
            >
              Also featured on{' '}
              <span className="font-semibold" style={{ color: '#3B1A08' }}>visitpwc.com</span>
              {' '}(Official Prince William County Tourism Site) · Top-rated on{' '}
              <span className="font-semibold" style={{ color: '#3B1A08' }}>TripAdvisor, Yelp, Google & Restaurant Guru</span>
            </p>
          </div>
        </div>
      </section>

      {/* VISIT US */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#F5E8D0' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Find Us"
            title="Come see us in Historic Occoquan."
            subtitle="We're open every day. There's free parking nearby. And yes — we'll give you samples before you buy anything."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden" style={{ height: '400px' }}>
              <iframe
                title="NazBro Chocolates Location"
                width="100%"
                height="100%"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.4!2d-77.260717!3d38.684488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6d6bbbbbbbbbb%3A0x0!2s309+Mill+St+Suite+115%2C+Occoquan%2C+VA+22125!5e0!3m2!1sen!2sus!4v1"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Info */}
            <div className="space-y-6">
              <div
                className="p-6 rounded-xl"
                style={{ backgroundColor: '#FDF6EC', border: '1px solid rgba(200,155,60,0.25)' }}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin size={18} style={{ color: '#C89B3C' }} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: '#3B1A08', fontFamily: 'Inter, sans-serif' }}>Address</p>
                      <p className="text-sm" style={{ color: 'rgba(59,26,8,0.7)', fontFamily: 'Inter, sans-serif' }}>
                        309 Mill St, Suite 115<br />Occoquan Historic District, VA 22125
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={18} style={{ color: '#C89B3C' }} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: '#3B1A08', fontFamily: 'Inter, sans-serif' }}>Phone</p>
                      <a
                        href="tel:+17037893069"
                        className="text-sm font-semibold"
                        style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
                      >
                        (703) 789-3069
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={18} style={{ color: '#C89B3C' }} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: '#3B1A08', fontFamily: 'Inter, sans-serif' }}>Hours</p>
                      <p className="text-sm" style={{ color: 'rgba(59,26,8,0.7)', fontFamily: 'Inter, sans-serif' }}>
                        Every day · 11:00 AM – 5:30 PM<br />
                        <span className="text-xs" style={{ color: 'rgba(59,26,8,0.5)' }}>Including weekends & holidays</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="p-5 rounded-xl"
                style={{ backgroundColor: '#3B1A08' }}
              >
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(253,246,236,0.75)', fontFamily: 'Inter, sans-serif' }}
                >
                  💳 We accept credit cards, debit, Apple Pay & Google Pay<br />
                  ♿ Wheelchair-accessible entrance and parking<br />
                  🅿️ Free parking available nearby in the neighborhood
                </p>
              </div>
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
              >
                Full directions & visitor info →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section
        className="py-16 px-4 sm:px-6 text-center"
        style={{ backgroundColor: '#3B1A08' }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
          >
            Custom Orders Welcome
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FDF6EC' }}
          >
            Need a gift that actually means something?
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: 'rgba(253,246,236,0.7)', fontFamily: 'Inter, sans-serif' }}
          >
            Weddings, corporate events, holidays, birthdays — we handle custom chocolate orders for any occasion.
            Tell us what you need and we'll take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/gifts"
              className="px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200"
              style={{ backgroundColor: '#C89B3C', color: '#3B1A08', fontFamily: 'Inter, sans-serif' }}
            >
              Explore Custom Gifts
            </Link>
            <a
              href="tel:+17037893069"
              className="px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200"
              style={{
                backgroundColor: 'transparent',
                color: '#FDF6EC',
                border: '1px solid rgba(253,246,236,0.3)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Call (703) 789-3069
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
