import { Briefcase, Trophy, GitPullRequest, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { StaggerChildren, staggerItemVariants } from '../../components/animations/StaggerChildren';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Badge } from '../../components/ui/Badge';
import { experiences } from '../../data/experience';
import type { Experience as ExperienceType } from '../../types';

const typeConfig: Record<ExperienceType['type'], { icon: typeof Briefcase; color: string }> = {
  internship: { icon: Briefcase, color: 'bg-blue-50 text-blue-600' },
  freelance: { icon: Briefcase, color: 'bg-emerald-50 text-emerald-600' },
  hackathon: { icon: Trophy, color: 'bg-amber-50 text-amber-600' },
  'open-source': { icon: GitPullRequest, color: 'bg-violet-50 text-violet-600' },
  leadership: { icon: Users, color: 'bg-rose-50 text-rose-600' },
};

function ExperienceCard({ experience }: { experience: ExperienceType }) {
  const { icon: Icon, color } = typeConfig[experience.type];

  return (
    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-card-hover)]">
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center ${color}`}>
          <Icon size={18} strokeWidth={1.5} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3
              className="text-base font-semibold text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {experience.role}
            </h3>
            <Badge variant="outline">{experience.type.replace('-', ' ')}</Badge>
          </div>
          <p className="text-sm text-[var(--color-text-tertiary)] mb-3">
            {experience.organization} &middot; {experience.duration}
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
            {experience.description}
          </p>

          <ul className="space-y-1.5">
            {experience.highlights.map((hl, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                <span className="w-1 h-1 mt-2 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                {hl}
              </li>
            ))}
          </ul>

          {experience.techUsed && experience.techUsed.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {experience.techUsed.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            title="Experience"
            subtitle="Freelancing, hackathons, and open source."
          />
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={staggerItemVariants}>
              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
