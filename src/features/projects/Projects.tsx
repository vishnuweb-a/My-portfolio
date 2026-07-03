import { useState } from 'react';
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { StaggerChildren, staggerItemVariants } from '../../components/animations/StaggerChildren';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { projects } from '../../data/projects';
import { motion } from 'motion/react';
import type { Project, ProjectCategory } from '../../types';

const categoryLabels: Record<string, string> = {
  all: 'All',
  backend: 'Backend',
  ai: 'AI',
  fullstack: 'Full Stack',
  devtools: 'Dev Tools',
  'open-source': 'Open Source',
};

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <div
      className={`
        group bg-[var(--color-bg-surface)] border border-[var(--color-border)]
        rounded-[var(--radius-card)] overflow-hidden
        transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)]
        hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5
        ${featured ? 'lg:col-span-2' : ''}
      `}
    >
      {/* Banner */}
      <div className={`relative bg-[var(--color-bg-secondary)] ${featured ? 'h-48 md:h-56' : 'h-40'}`}>
        {project.images.banner ? (
          <img
            src={project.images.banner}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span
              className="text-3xl text-[var(--color-accent)] opacity-15"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {project.title.split(' ').map(w => w[0]).join('')}
            </span>
          </div>
        )}
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <Badge variant={project.status === 'completed' ? 'accent' : 'outline'}>
            {project.status === 'completed' ? 'Completed' : project.status === 'in-progress' ? 'In Progress' : 'Planned'}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3
          className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, featured ? 6 : 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {project.techStack.length > (featured ? 6 : 4) && (
            <Badge variant="outline">{`+${project.techStack.length - (featured ? 6 : 4)}`}</Badge>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label={`${project.title} source code on GitHub`}
            >
              <GitBranch size={15} strokeWidth={1.5} />
              Source
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={15} strokeWidth={1.5} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');

  const categories = ['all', ...new Set(projects.map((p) => p.category))];
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const featured = filtered.filter((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            title="Projects"
            subtitle="Real-world systems I have designed and built."
          />
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as ProjectCategory | 'all')}
                className={`
                  px-4 py-2 text-sm font-medium rounded-[var(--radius-button)]
                  transition-all duration-[var(--duration-fast)]
                  ${filter === cat
                    ? 'bg-[var(--color-accent)] text-white shadow-[var(--shadow-sm)]'
                    : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                  }
                `}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Featured projects */}
        {featured.length > 0 && (
          <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            {featured.map((project) => (
              <motion.div key={project.id} variants={staggerItemVariants}>
                <ProjectCard project={project} featured />
              </motion.div>
            ))}
          </StaggerChildren>
        )}

        {/* Other projects */}
        {others.length > 0 && (
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((project) => (
              <motion.div key={project.id} variants={staggerItemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </StaggerChildren>
        )}

        {/* View more CTA */}
        <ScrollReveal delay={0.2} className="mt-10 text-center">
          <Button variant="secondary" href="https://github.com/vishnubhardwaj" external className="gap-2">
            View All on GitHub
            <ArrowRight size={14} strokeWidth={2} />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
