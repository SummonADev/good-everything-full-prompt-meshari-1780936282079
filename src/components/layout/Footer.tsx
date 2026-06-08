import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Facebook, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ backgroundColor: '#2A1005', color: '#FDF6EC' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b" style={{ borderColor: 'rgba(200,155,60,0.2)' }}>
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ backgroundColor: '#C89B3C' }}
              >
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>N</span>
              </div>
              <div>
                <span className="block text-sm font-semibold" style={{ fontFamily: 'Playfair Display, serif', color: '#FDF6EC' }}>NazBro</span>
                <span className="block text-xs tracking-widest uppercase" style={{ color: '#C89B3C' }}>Chocolates & Fudge</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(253,246,236,0.7)', fontFamily: 'Inter, sans-serif' }}>
              We are mostly chocolaty, sweet, salty and a bit nutty. Handcrafted in small batches in Historic Occoquan, Virginia.
            </p>
            <a
              href="https://www.facebook.com/nazbrochocolates"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: '#C89B3C' }}
            >
              <Facebook size={16} />
              Follow us on Facebook
            </a>
          </div>

          {/* Visit Column */}
          <div>
            <h3
              className="text-base font-semibold mb-5"
              style={{ fontFamily: 'Playfair Display, serif', color: '#C89B3C' }}
            >
              Visit Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#C89B3C' }} />
                <span className="text-sm" style={{ color: 'rgba(253,246,236,0.8)', fontFamily: 'Inter, sans-serif' }}>
                  309 Mill St, Suite 115<br />
                  Occoquan Historic District<br />
                  VA 22125
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="flex-shrink-0" style={{ color: '#C89B3C' }} />
                <a
                  href="tel:+17037893069"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'rgba(253,246,236,0.8)', fontFamily: 'Inter, sans-serif' }}
                >
                  (703) 789-3069
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={15} className="flex-shrink-0" style={{ color: '#C89B3C' }} />
                <span className="text-sm" style={{ color: 'rgba(253,246,236,0.8)', fontFamily: 'Inter, sans-serif' }}>
                  Every day, 11 AM – 5:30 PM
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3
              className="text-base font-semibold mb-5"
              style={{ fontFamily: 'Playfair Display, serif', color: '#C89B3C' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Our Story', path: '/about' },
                { label: 'Our Products', path: '/shop' },
                { label: 'Gifts & Custom Orders', path: '/gifts' },
                { label: 'Visit Us', path: '/visit' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-200 hover:text-gold"
                    style={{ color: 'rgba(253,246,236,0.7)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://nazbro.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center gap-1 transition-colors duration-200"
                  style={{ color: 'rgba(253,246,236,0.7)', fontFamily: 'Inter, sans-serif' }}
                >
                  Online Shop (Seasonal) <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'rgba(253,246,236,0.5)', fontFamily: 'Inter, sans-serif' }}>
            © 2025 NazBro Chocolates & Fudge (NazBro LLC). All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(253,246,236,0.5)', fontFamily: 'Inter, sans-serif' }}>
            Historic Occoquan, Virginia
          </p>
        </div>
      </div>
    </footer>
  );
}
