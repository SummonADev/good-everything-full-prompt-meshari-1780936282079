import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/ui/ContactForm';

export default function ContactPage() {
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
            Get In Touch
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FDF6EC' }}
          >
            We'd Love to Hear From You.
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(253,246,236,0.75)', fontFamily: 'Inter, sans-serif' }}
          >
            Questions, custom orders, wholesale inquiries — or just want to say hi. We're here.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#FDF6EC' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <SectionHeader
                eyebrow="Contact Info"
                title="Reach us directly."
                centered={false}
              />
              <div className="space-y-6">
                <div
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: '#F5E8D0', border: '1px solid rgba(200,155,60,0.2)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}>Phone (Fastest Response)</p>
                  <a
                    href="tel:+17037893069"
                    className="text-xl font-bold"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#3B1A08' }}
                  >
                    (703) 789-3069
                  </a>
                  <p className="text-xs mt-1" style={{ color: 'rgba(59,26,8,0.55)', fontFamily: 'Inter, sans-serif' }}>
                    Omar loves to chat — don't hesitate to call.
                  </p>
                </div>
                <div
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: '#F5E8D0', border: '1px solid rgba(200,155,60,0.2)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}>Address</p>
                  <p className="text-sm" style={{ color: 'rgba(59,26,8,0.8)', fontFamily: 'Inter, sans-serif' }}>
                    309 Mill St, Suite 115<br />
                    Occoquan Historic District<br />
                    Occoquan, VA 22125
                  </p>
                </div>
                <div
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: '#F5E8D0', border: '1px solid rgba(200,155,60,0.2)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}>Hours</p>
                  <p className="text-sm" style={{ color: 'rgba(59,26,8,0.8)', fontFamily: 'Inter, sans-serif' }}>
                    Every day · 11:00 AM – 5:30 PM<br />
                    <span className="text-xs" style={{ color: 'rgba(59,26,8,0.5)' }}>Including weekends & holidays</span>
                  </p>
                </div>
                <div
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: '#F5E8D0', border: '1px solid rgba(200,155,60,0.2)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}>Social</p>
                  <a
                    href="https://www.facebook.com/nazbrochocolates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold"
                    style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
                  >
                    Facebook: @nazbrochocolates
                  </a>
                </div>
              </div>
            </div>
            {/* Form */}
            <div>
              <SectionHeader
                eyebrow="Send a Message"
                title="Drop us a note."
                centered={false}
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
