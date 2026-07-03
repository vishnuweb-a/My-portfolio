import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { personalInfo } from '../../data/personal';

export function About() {
  return (
    <section id="about" className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left - Image */}
          <ScrollReveal className="lg:col-span-2" direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[var(--radius-image)] border border-[var(--color-border)] bg-white overflow-hidden">
                {personalInfo.profileImage ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} portrait`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[var(--color-bg-primary)]">
                    <span
                      className="text-7xl text-[var(--color-accent)] opacity-30"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      VB
                    </span>
                  </div>
                )}
              </div>
              {/* Subtle accent line */}
              <div className="absolute -bottom-3 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <SectionHeading
                title="About Me"
                subtitle="Building systems that work reliably at scale."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed">
                <p className="text-base md:text-lg">
                  {personalInfo.philosophy}
                </p>
                <p className="text-base">
                  My journey into tech started with curiosity about how things work under the hood.
                  From understanding how databases manage concurrent transactions to designing
                  message queue architectures for distributed systems, I find satisfaction in
                  solving problems at the infrastructure level.
                </p>
                <p className="text-base">
                  Currently focused on backend engineering with Node.js and AI engineering
                  with LangChain and vector databases. I believe in writing code that other
                  engineers enjoy reading, maintaining clear documentation, and building
                  systems designed for the next developer, not just the current sprint.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Focus', value: 'Backend + AI' },
                  { label: 'Education', value: 'B.Tech CSE' },
                  { label: 'Location', value: 'India' },
                ].map((item) => (
                  <div key={item.label} className="py-3">
                    <p className="text-xs font-medium text-[var(--color-text-tertiary)] mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
