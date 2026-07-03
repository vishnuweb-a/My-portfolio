import { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { personalInfo } from '../../data/personal';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ type: 'loading' });

    // Open mail client
    setTimeout(() => {
      const subject = encodeURIComponent(`New message from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      setStatus({ type: 'success', message: 'Opening mail client...' });
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus({ type: 'idle' }), 4000);
    }, 800);
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Left — Info */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <SectionHeading
                title="Get in Touch"
                subtitle="Have a project in mind? Let's talk."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-4 mt-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <Mail size={16} strokeWidth={1.5} />
                  {personalInfo.email}
                </a>
                <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                  <MapPin size={16} strokeWidth={1.5} />
                  {personalInfo.location}
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3 mt-8">
                {personalInfo.socials.slice(0, 4).map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-[var(--radius-sm)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-[var(--duration-fast)]"
                    aria-label={social.label}
                  >
                    <span className="text-xs font-medium">{social.platform.slice(0, 2)}</span>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Form */}
          <ScrollReveal className="lg:col-span-3" delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`
                    w-full px-4 py-2.5 text-sm bg-[var(--color-bg-secondary)] border rounded-[var(--radius-button)]
                    text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)]
                    focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1
                    transition-all duration-[var(--duration-fast)]
                    ${errors.name ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'}
                  `}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-[var(--color-error)]" role="alert">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`
                    w-full px-4 py-2.5 text-sm bg-[var(--color-bg-secondary)] border rounded-[var(--radius-button)]
                    text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)]
                    focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1
                    transition-all duration-[var(--duration-fast)]
                    ${errors.email ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'}
                  `}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-[var(--color-error)]" role="alert">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`
                    w-full px-4 py-2.5 text-sm bg-[var(--color-bg-secondary)] border rounded-[var(--radius-button)]
                    text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)]
                    focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1
                    transition-all duration-[var(--duration-fast)] resize-y min-h-[120px]
                    ${errors.message ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'}
                  `}
                  placeholder="Tell me about your project or just say hello."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-[var(--color-error)]" role="alert">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <div className="flex items-center gap-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status.type === 'loading'}
                  className="gap-2"
                >
                  {status.type === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      <Send size={16} strokeWidth={2} />
                      Send Message
                    </>
                  )}
                </Button>

                {status.type === 'success' && (
                  <span className="flex items-center gap-1.5 text-sm text-[var(--color-success)]">
                    <CheckCircle size={14} />
                    {status.message}
                  </span>
                )}
                {status.type === 'error' && (
                  <span className="flex items-center gap-1.5 text-sm text-[var(--color-error)]">
                    <AlertCircle size={14} />
                    {status.message}
                  </span>
                )}
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
