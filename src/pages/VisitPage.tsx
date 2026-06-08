import SectionHeader from '@/components/ui/SectionHeader';

const faqs = [
  {
    q: 'Do I need a reservation?',
    a: 'No reservation needed. Walk in any day between 11 AM and 5:30 PM. We welcome everyone.',
  },
  {
    q: 'Can I get samples before buying?',
    a: "Absolutely — and we encourage it. Omar will happily walk you through nearly everything in the shop before you decide.",
  },
  {
    q: 'Is there parking nearby?',
    a: 'Yes. Free parking is available in the neighborhood around Mill Street. Occoquan is a walkable town so even slightly further spots are convenient.',
  },
  {
    q: 'Are you accessible for wheelchairs?',
    a: 'Yes. We have a wheelchair-accessible entrance and accessible parking nearby.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards, debit cards, Apple Pay, and Google Pay.',
  },
  {
    q: 'Do you ship?',
    a: 'Our online shop (nazbro.square.site) is seasonal. For the most current shipping availability, check the online store or call us.',
  },
];

export default function VisitPage() {
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
            backgroundImage: 'radial-gradient(circle at 50% 50%, #C89B3C 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
          >
            Find Us
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FDF6EC' }}
          >
            Come Visit Us in Historic Occoquan.
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(253,246,236,0.75)', fontFamily: 'Inter, sans-serif' }}
          >
            Open every day. Free samples always. Easy to find in the heart of one of Northern Virginia's most charming towns.
          </p>
        </div>
      </section>

      {/* MAP + INFO */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#FDF6EC' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-2xl overflow-hidden" style={{ height: '450px' }}>
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
            <div className="space-y-6">
              <div
                className="p-7 rounded-xl"
                style={{ backgroundColor: '#F5E8D0', border: '1px solid rgba(200,155,60,0.2)' }}
              >
                <h2
                  className="text-xl font-bold mb-5"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#3B1A08' }}
                >
                  Location & Hours
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}>Address</p>
                    <p className="text-sm" style={{ color: 'rgba(59,26,8,0.8)', fontFamily: 'Inter, sans-serif' }}>
                      309 Mill St, Suite 115<br />
                      Occoquan Historic District<br />
                      Occoquan, VA 22125
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}>Hours</p>
                    <p className="text-sm" style={{ color: 'rgba(59,26,8,0.8)', fontFamily: 'Inter, sans-serif' }}>
                      Every day · 11:00 AM – 5:30 PM<br />
                      <span className="text-xs" style={{ color: 'rgba(59,26,8,0.5)' }}>Including weekends & holidays</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}>Phone</p>
                    <a
                      href="tel:+17037893069"
                      className="text-sm font-semibold"
                      style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
                    >
                      (703) 789-3069
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="p-6 rounded-xl"
                style={{ backgroundColor: '#3B1A08' }}
              >
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(253,246,236,0.8)', fontFamily: 'Inter, sans-serif' }}
                >
                  💳 Credit cards, debit, Apple Pay & Google Pay accepted<br />
                  ♿ Wheelchair-accessible entrance & parking<br />
                  🅿️ Free parking available in the neighborhood<br />
                  🎁 Free samples before you buy — always
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=309+Mill+St+Suite+115+Occoquan+VA+22125"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg text-sm font-semibold"
                style={{ backgroundColor: '#C89B3C', color: '#3B1A08', fontFamily: 'Inter, sans-serif' }}
              >
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#F5E8D0' }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Visitor FAQ"
            title="Good to know before you visit."
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-xl"
                style={{ backgroundColor: '#FDF6EC', border: '1px solid rgba(200,155,60,0.2)' }}
              >
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#3B1A08' }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(59,26,8,0.7)', fontFamily: 'Inter, sans-serif' }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OCCOQUAN NOTE */}
      <section className="py-16 px-4 sm:px-6 text-center" style={{ backgroundColor: '#3B1A08' }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-3xl mb-4">🏘️</p>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FDF6EC' }}
          >
            Make a day of it.
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'rgba(253,246,236,0.7)', fontFamily: 'Inter, sans-serif' }}
          >
            Historic Occoquan is one of Northern Virginia's most charming riverside destinations — cobblestone streets, independent shops, and great food. NazBro is the perfect sweet finale to an afternoon in town.
          </p>
        </div>
      </section>
    </div>
  );
}
