import { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import { useScrollPosition, useScrollTo } from '../../hooks/useScroll';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const scrollTo = useScrollTo();

  function handleNavClick(href: string) {
    const id = href.replace('#', '');
    scrollTo(id);
    setMobileOpen(false);
  }

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 h-[var(--nav-height)]
          transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)]
          ${isScrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-[var(--shadow-sm)]'
            : 'bg-transparent'
          }
        `}
      >
        <nav className="container-main h-full flex items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <a
            href="#"
            className="font-[var(--font-display)] text-lg tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-[var(--duration-fast)]"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            VB
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--duration-fast)] rounded-[var(--radius-sm)]"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="primary" size="sm" href="#" className="gap-1.5">
              <FileText size={14} strokeWidth={2} />
              Resume
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onNavClick={handleNavClick}
      />
    </>
  );
}
