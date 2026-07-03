import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { personalInfo } from '../../data/personal';

export function Hero() {
  const reduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-[var(--nav-height)]"
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-text-primary) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--color-text-primary)] mb-4">
                {personalInfo.name}
              </h1>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-9 mb-5 overflow-hidden"
            >
              <div className="flex items-center gap-2">
                <span className="w-8 h-px bg-[var(--color-accent)]" />
                <span
                  key={roleIndex}
                  className="text-lg md:text-xl font-medium text-[var(--color-accent)] font-[var(--font-body)]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {personalInfo.roles[roleIndex]}
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed prose-width mb-8"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3"
            >
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                className="gap-2"
              >
                View Projects
                <ArrowRight size={16} strokeWidth={2} />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={personalInfo.resumeUrl}
                className="gap-2"
              >
                <Download size={16} strokeWidth={2} />
                Resume
              </Button>
            </motion.div>
          </div>

          {/* Right - Profile image slot */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Decorative frame */}
              <div className="absolute inset-0 rounded-[var(--radius-image)] border-2 border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                {personalInfo.profileImage ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} profile photo`}
                    className="w-full h-full object-cover rounded-[var(--radius-image)]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span
                      className="text-6xl text-[var(--color-accent)] opacity-60"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      VB
                    </span>
                  </div>
                )}
              </div>
              {/* Accent corner decoration */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-[var(--color-accent)] rounded-[var(--radius-card)] opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
