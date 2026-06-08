import { useState } from 'react';
import { ExternalLink, ShoppingCart } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { productCategories } from '@/data/products';
import { Link } from 'react-router-dom';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const displayedCategories =
    activeCategory === 'all'
      ? productCategories
      : productCategories.filter((c) => c.id === activeCategory);

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* PAGE HERO */}
      <section
        className="py-20 px-4 sm:px-6 text-center relative overflow-hidden"
        style={{ backgroundColor: '#3B1A08' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 70% 30%, #C89B3C 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
          >
            What We Make
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FDF6EC' }}
          >
            Our Products
          </h1>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: 'rgba(253,246,236,0.75)', fontFamily: 'Inter, sans-serif' }}
          >
            Everything handcrafted in small batches. Nothing made until it's ready to be perfect.
          </p>
          {/* Seasonal Banner */}
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm"
            style={{
              backgroundColor: 'rgba(200,155,60,0.15)',
              border: '1px solid rgba(200,155,60,0.4)',
              color: '#C89B3C',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            <ShoppingCart size={16} />
            <span>
              Online shop is seasonal ·{' '}
              <a
                href="https://nazbro.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline inline-flex items-center gap-1"
              >
                Check availability <ExternalLink size={11} />
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section
        className="py-6 px-4 sm:px-6 sticky top-16 md:top-20 z-30"
        style={{ backgroundColor: '#FDF6EC', borderBottom: '1px solid rgba(200,155,60,0.2)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: activeCategory === 'all' ? '#3B1A08' : 'transparent',
                color: activeCategory === 'all' ? '#FDF6EC' : '#3B1A08',
                border: '1px solid rgba(59,26,8,0.3)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              All Products
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: activeCategory === cat.id ? '#3B1A08' : 'transparent',
                  color: activeCategory === cat.id ? '#FDF6EC' : '#3B1A08',
                  border: '1px solid rgba(59,26,8,0.3)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {cat.emoji} {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: '#FDF6EC' }}>
        <div className="max-w-7xl mx-auto space-y-20">
          {displayedCategories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{category.emoji}</span>
                <h2
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#3B1A08' }}
                >
                  {category.title}
                </h2>
                <div
                  className="flex-1 h-px ml-4"
                  style={{ backgroundColor: 'rgba(200,155,60,0.25)' }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {category.products.map((product) => (
                  <div
                    key={product.name}
                    className="product-card-hover rounded-xl p-5 flex flex-col"
                    style={{
                      backgroundColor: '#FFF9F0',
                      border: '1px solid rgba(200,155,60,0.25)',
                      boxShadow: '0 2px 8px rgba(59,26,8,0.06)',
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
                    <h3
                      className="font-semibold text-base mb-2 leading-snug"
                      style={{ fontFamily: 'Playfair Display, serif', color: '#3B1A08' }}
                    >
                      {product.name}
                    </h3>
                    {product.description && (
                      <p
                        className="text-sm leading-relaxed flex-1"
                        style={{ color: 'rgba(59,26,8,0.6)', fontFamily: 'Inter, sans-serif' }}
                      >
                        {product.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GIFT BOXES CTA */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ backgroundColor: '#3B1A08' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
              >
                Gift Boxes & Custom Orders
              </p>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: 'Playfair Display, serif', color: '#FDF6EC' }}
              >
                Make it a gift.
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: 'rgba(253,246,236,0.7)', fontFamily: 'Inter, sans-serif' }}
              >
                We welcome custom orders for weddings, corporate events, holidays, birthdays, and special occasions. Tell us your occasion, how many people you're gifting, and your budget — we'll take care of the rest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/gifts"
                  className="px-6 py-3 rounded-lg text-sm font-semibold text-center"
                  style={{ backgroundColor: '#C89B3C', color: '#3B1A08', fontFamily: 'Inter, sans-serif' }}
                >
                  Explore Gift Options
                </Link>
                <a
                  href="tel:+17037893069"
                  className="px-6 py-3 rounded-lg text-sm font-semibold text-center"
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
            <div
              className="p-8 rounded-xl text-center"
              style={{ backgroundColor: 'rgba(253,246,236,0.05)', border: '1px solid rgba(200,155,60,0.2)' }}
            >
              <p
                className="text-4xl mb-4"
              >
                🎁
              </p>
              <p
                className="text-base italic leading-relaxed"
                style={{ fontFamily: 'Playfair Display, serif', color: 'rgba(253,246,236,0.85)' }}
              >
                "I give boxes from NazBro as gifts and thank you packages."
              </p>
              <p
                className="mt-3 text-xs font-semibold"
                style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
              >
                — Verified Customer, Nextdoor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPLY NOTE */}
      <section className="py-10 px-4 sm:px-6" style={{ backgroundColor: '#F5E8D0' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'rgba(59,26,8,0.65)', fontFamily: 'Inter, sans-serif' }}
          >
            <span className="font-semibold" style={{ color: '#3B1A08' }}>Made in small batches.</span>{' '}
            Product availability changes frequently. For the most current selection, visit us in-store, call ahead at{' '}
            <a href="tel:+17037893069" style={{ color: '#C89B3C', fontWeight: 600 }}>(703) 789-3069</a>,
            {' '}or check our{' '}
            <a href="https://www.facebook.com/nazbrochocolates" target="_blank" rel="noopener noreferrer" style={{ color: '#C89B3C', fontWeight: 600 }}>Facebook page</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
