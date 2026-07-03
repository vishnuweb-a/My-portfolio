import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { timelineEvents } from '../../data/timeline';
import type { TimelineEvent } from '../../types';

function TimelineCard({ event, index }: { event: TimelineEvent; index: number }) {
  const isEven = index % 2 === 0;
  const reduce = useReducedMotion();

  const typeColors: Record<TimelineEvent['type'], string> = {
    education: 'bg-blue-500',
    career: 'bg-[var(--color-accent)]',
    project: 'bg-emerald-500',
    achievement: 'bg-amber-500',
    future: 'bg-violet-500',
  };

  return (
    <div className={`relative flex items-start gap-6 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Content */}
      <motion.div
        className={`flex-1 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
        initial={reduce ? false : { opacity: 0, x: isEven ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="inline-block text-xs font-mono font-medium text-[var(--color-text-tertiary)] mb-1.5">
          {event.year}
        </span>
        <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-1.5" style={{ fontFamily: 'var(--font-body)' }}>
          {event.title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {event.description}
        </p>
        {event.highlight && (
          <span className="inline-block mt-2 px-2 py-0.5 text-xs font-medium bg-[var(--color-accent-muted)] text-[var(--color-accent)] rounded-[var(--radius-sm)]">
            {event.highlight}
          </span>
        )}
      </motion.div>

      {/* Center line dot — visible on md+ */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1 items-center justify-center">
        <div className={`w-3 h-3 rounded-full ${typeColors[event.type]} ring-4 ring-white`} />
      </div>

      {/* Mobile dot */}
      <div className="md:hidden flex-shrink-0 mt-1.5">
        <div className={`w-2.5 h-2.5 rounded-full ${typeColors[event.type]}`} />
      </div>

      {/* Empty spacer for the other side */}
      <div className="hidden md:block flex-1 md:w-1/2" />
    </div>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            title="My Journey"
            subtitle="From fundamentals to building production systems."
            align="center"
          />
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line — visible on md+ */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-[var(--color-border)]" />

          {/* Mobile line */}
          <div className="md:hidden absolute left-[5px] top-0 bottom-0 w-px bg-[var(--color-border)]" />

          <div className="space-y-10 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <TimelineCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
