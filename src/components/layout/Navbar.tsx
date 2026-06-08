import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChocolateBar } from 'lucide-react';
import clsx from 'clsx';

const links = [
  { label: 'Home', path: '/' },
  { label: 'Our Story', path: '/about' },
  { label: 'Shop', path: '/shop' },
  { label: 'Gifts', path: '/gifts' },
  { label: 'Visit Us', path: '/visit' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'shadow-lg'
          : 'shadow-none'
      )}
      style={{
        backgroundColor: scrolled ? 'rgba(59,26,8,0.98)' : 'rgba(59,26,8,0.95)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
            <div
              className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#C89B3C' }}
            >
              <span className="text-white font-bold text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>N</span>
            </div>
            <div className="leading-tight">
              <span
                className="block text-sm font-semibold tracking-wide"
                style={{ color: '#FDF6EC', fontFamily: 'Playfair Display, serif' }}
              >
                NazBro
              </span>
              <span
                className="block text-xs tracking-widest uppercase"
                style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}
              >
                Chocolates & Fudge
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  clsx(
                    'nav-link text-sm font-medium tracking-wide transition-colors duration-200',
                    isActive
                      ? 'active'
                      : ''
                  )
                }
                style={({ isActive }) => ({
                  color: isActive ? '#C89B3C' : '#FDF6EC',
                  fontFamily: 'Inter, sans-serif',
                })}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://nazbro.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold rounded transition-all duration-200"
              style={{
                backgroundColor: '#C89B3C',
                color: '#3B1A08',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Shop Online
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded"
            style={{ color: '#FDF6EC' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'md:hidden transition-all duration-300 overflow-hidden',
          open ? 'max-h-screen' : 'max-h-0'
        )}
        style={{ backgroundColor: 'rgba(42,16,5,0.98)' }}
      >
        <nav className="px-4 pb-6 pt-2 flex flex-col gap-1">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                clsx(
                  'py-3 px-2 text-base font-medium border-b transition-colors duration-200',
                  isActive ? 'border-gold' : ''
                )
              }
              style={({ isActive }) => ({
                color: isActive ? '#C89B3C' : '#FDF6EC',
                borderBottomColor: 'rgba(200,155,60,0.2)',
                fontFamily: 'Inter, sans-serif',
              })}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://nazbro.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 py-3 text-center text-base font-semibold rounded"
            style={{
              backgroundColor: '#C89B3C',
              color: '#3B1A08',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Shop Online
          </a>
        </nav>
      </div>
    </header>
  );
}
