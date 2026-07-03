import { ArrowUp, ExternalLink, Mail } from 'lucide-react';
import { personalInfo } from '../../data/personal';

const quickLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span
              className="text-xl tracking-tight text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {personalInfo.firstName} {personalInfo.lastName}
            </span>
            <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
              Backend Developer and AI Engineer building scalable systems and intelligent applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-[var(--duration-fast)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">Connect</h4>
            <ul className="space-y-2.5">
              {personalInfo.socials.slice(0, 4).map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-[var(--duration-fast)]"
                    aria-label={social.label}
                  >
                    <ExternalLink size={12} strokeWidth={1.5} />
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">Contact</h4>
            <div className="space-y-2.5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Mail size={12} strokeWidth={1.5} />
                {personalInfo.email}
              </a>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-tertiary)]">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-xs text-[var(--color-text-tertiary)]">
              Always building. Always learning. Always shipping.
            </p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-[var(--radius-sm)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-[var(--duration-fast)]"
              aria-label="Back to top"
            >
              <ArrowUp size={14} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
