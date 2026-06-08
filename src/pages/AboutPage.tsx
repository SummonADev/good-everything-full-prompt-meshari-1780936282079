import { Award, Star, Heart, Leaf, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialCard from '@/components/ui/TestimonialCard';

const philosophy = [
  {
    icon: <Leaf size={22} style={{ color: '#C89B3C' }} />,
    title: 'Finest Ingredients Only',
    desc: 'We source premium cacao and never compromise on quality. You can taste the difference in every bite.',
  },
  {
    icon: <Heart size={22} style={{ color: '#C89B3C' }} />,
    title: 'Small Batches, Always',
    desc: 'We make in small quantities on purpose. That\'s how you guarantee freshness. That\'s how you maintain quality.',
  },
  {
    icon: <Users size={22} style={{ color: '#C89B3C' }} />,
    title: 'Family-Owned & Operated',
    desc: 'This isn\'t a franchise. It\'s a family business with a real person behind the counter who genuinely cares.',
  },
];

const awards = [
  { label: 'Google', stars: '4.8 ★', reviews: '135+ reviews' },
  { label: 'Yelp', stars: '4.8 ★', reviews: '94+ reviews (86 five-star)' },
  { label: 'Restaurant Guru', stars: '4.8 ★', reviews: '112+ reviews' },
  { label: 'Sluurpy', stars: '93/100', reviews: '214+ ratings' },
];

const selectedTestimonials = [
  {
    quote: "Perfect chocolate candies. My neighbor gave us a box of truly exquisite chocolate truffles and candies. I make chocolate truffles and hers were so good and so much better than mine that it blew my mind. The flavors were so great and the chocolate was so well-tempered on each piece.",
    source: "Verified Customer",
    platform: "Nextdoor",
  },
  {
    quote: "REAL chocolate that you won't find in any grocery store!",
    source: "Verified Customer",
    platform: "Yelp",
  },
  {
    quote: "Omar's store was the busiest little shop in all of Occoquan and I'm not at all surprised after our visit.",
    source: "Verified Customer",
    platform: "Yelp",
  },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* PAGE HERO */}
      <section
        className="py-24 px-4 sm:px-6 text-center relative overflow-hidden"
        style={{ backgroundColor: '#3B1A08' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, #C89B3C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7B1C2C 0%, transparent 50%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
          >
            Our Story
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FDF6EC' }}
          >
            Born from a Love of Chocolate.
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(253,246,236,0.75)', fontFamily: 'Inter, sans-serif' }}
          >
            What started as a family passion became one of Northern Virginia's most beloved sweet shops. This is how it happened.
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#FDF6EC' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
              >
                How We Got Here
              </p>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#3B1A08' }}
              >
                NazBro Chocolates & Fudge
              </h2>
              <div className="space-y-4">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'rgba(59,26,8,0.75)', fontFamily: 'Inter, sans-serif' }}
                >
                  NazBro Chocolates & Fudge was born out of a genuine love for chocolate. What started as a family passion became a business rooted in the belief that great chocolate should be made with the finest ingredients, crafted in small batches, and shared generously.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'rgba(59,26,8,0.75)', fontFamily: 'Inter, sans-serif' }}
                >
                  The shop sits inside a historic building on Mill Street in Occoquan — a charming riverside town with 18th-century roots — which makes every visit feel a little bit like stepping into another era, where things were made by hand and with care.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'rgba(59,26,8,0.75)', fontFamily: 'Inter, sans-serif' }}
                >
                  We don't make everything. We make a few things and we make them exceptionally well. Every product on our shelves has earned its place there.
                </p>
              </div>
            </div>
            <div
              className="relative h-72 md:h-96 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: '#2A1005' }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'radial-gradient(circle at center, #C89B3C, transparent 70%)',
                }}
              />
              <div className="relative z-10 text-center px-8">
                <p
                  className="text-5xl font-bold mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#C89B3C' }}
                >
                  500+
                </p>
                <p
                  className="text-base"
                  style={{ color: 'rgba(253,246,236,0.7)', fontFamily: 'Inter, sans-serif' }}
                >
                  Five-star reviews across all platforms
                </p>
                <div
                  className="mt-6 w-16 h-px mx-auto"
                  style={{ backgroundColor: 'rgba(200,155,60,0.4)' }}
                />
                <p
                  className="mt-4 text-sm italic"
                  style={{ color: 'rgba(253,246,236,0.5)', fontFamily: 'Playfair Display, serif' }}
                >
                  "Chocoholics rejoice!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OMAR'S STORY */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#F5E8D0' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="rounded-2xl p-10 flex flex-col justify-center"
              style={{ backgroundColor: '#3B1A08', minHeight: '350px' }}
            >
              <p
                className="text-6xl mb-4"
              >
                🍫
              </p>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: 'Playfair Display, serif', color: '#FDF6EC' }}
              >
                Omar's world is chocolate.
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(253,246,236,0.7)', fontFamily: 'Inter, sans-serif' }}
              >
                And once you've met him, you'll understand why everyone keeps coming back.
              </p>
            </div>
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
              >
                Meet Omar
              </p>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#3B1A08' }}
              >
                The Soul of the Shop
              </h2>
              <div className="space-y-4">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'rgba(59,26,8,0.75)', fontFamily: 'Inter, sans-serif' }}
                >
                  Omar doesn't just sell chocolate — he teaches people about it. Customers regularly leave with more knowledge about the history of chocolate in America, how to identify quality tempering, the difference between types of cacao, and why small-batch production matters.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'rgba(59,26,8,0.75)', fontFamily: 'Inter, sans-serif' }}
                >
                  His generosity with samples is legendary. Come in and expect to taste nearly everything in the shop before you decide what to buy. He treats every customer like a VIP — because he believes every customer is one.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'rgba(59,26,8,0.75)', fontFamily: 'Inter, sans-serif' }}
                >
                  His wit, warmth, and encyclopedic knowledge of chocolate turn a simple shopping trip into an experience worth writing home about — and hundreds of customers have done exactly that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#FDF6EC' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Our Philosophy"
            title="No shortcuts. No compromises. Just real chocolate."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-xl text-center"
                style={{ backgroundColor: '#F5E8D0', border: '1px solid rgba(200,155,60,0.2)' }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full mx-auto mb-5" style={{ backgroundColor: 'rgba(200,155,60,0.15)' }}>
                  {item.icon}
                </div>
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#3B1A08' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(59,26,8,0.65)', fontFamily: 'Inter, sans-serif' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div
            className="mt-12 p-8 rounded-xl text-center"
            style={{ backgroundColor: '#3B1A08' }}
          >
            <p
              className="text-xl md:text-2xl font-bold leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif', color: '#FDF6EC' }}
            >
              "When you give someone a box of NazBro chocolates, you're not giving them candy —{' '}
              <em style={{ color: '#C89B3C' }}>you're giving them something genuinely crafted.</em>"
            </p>
          </div>
        </div>
      </section>

      {/* OCCOQUAN */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#F5E8D0' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
              >
                Our Home
              </p>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#3B1A08' }}
              >
                Historic Occoquan, Virginia
              </h2>
              <div className="space-y-4">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'rgba(59,26,8,0.75)', fontFamily: 'Inter, sans-serif' }}
                >
                  Occoquan is a picturesque riverside town founded in the 18th century, nestled along the Occoquan River in Prince William County. Its cobblestone streets, historic mill buildings, and independent shops make it one of the most charming destinations in Northern Virginia.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'rgba(59,26,8,0.75)', fontFamily: 'Inter, sans-serif' }}
                >
                  NazBro Chocolates & Fudge is proudly woven into the fabric of this community. We've called Occoquan home since the beginning — and the community has returned the love, voting us a Neighborhood Favorite four years running.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'rgba(59,26,8,0.75)', fontFamily: 'Inter, sans-serif' }}
                >
                  A visit to NazBro is part of the experience of visiting Occoquan. Come for the town, stay for the chocolate.
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl p-8 flex flex-col items-center justify-center text-center"
              style={{ backgroundColor: '#3B1A08', minHeight: '300px' }}
            >
              <p className="text-5xl mb-4">🏘️</p>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: 'Playfair Display, serif', color: '#FDF6EC' }}
              >
                309 Mill Street
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(253,246,236,0.65)', fontFamily: 'Inter, sans-serif' }}
              >
                Suite 115, Historic Occoquan District<br />
                Occoquan, Virginia 22125
              </p>
              <a
                href="https://maps.google.com/?q=309+Mill+St+Suite+115+Occoquan+VA+22125"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-3 rounded-lg text-sm font-semibold"
                style={{ backgroundColor: '#C89B3C', color: '#3B1A08', fontFamily: 'Inter, sans-serif' }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#3B1A08' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Recognition"
            title="Awards & Ratings"
            subtitle="Don't take our word for it. Here's what the platforms say."
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {awards.map((a) => (
              <div
                key={a.label}
                className="p-6 rounded-xl text-center"
                style={{ backgroundColor: 'rgba(253,246,236,0.05)', border: '1px solid rgba(200,155,60,0.2)' }}
              >
                <p
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#C89B3C' }}
                >
                  {a.stars}
                </p>
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: '#FDF6EC', fontFamily: 'Inter, sans-serif' }}
                >
                  {a.label}
                </p>
                <p
                  className="text-xs"
                  style={{ color: 'rgba(253,246,236,0.45)', fontFamily: 'Inter, sans-serif' }}
                >
                  {a.reviews}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedTestimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                quote={t.quote}
                source={t.source}
                platform={t.platform}
                light
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
