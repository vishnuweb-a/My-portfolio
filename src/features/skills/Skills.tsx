import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  FileCode, Server, Database, Brain, Layers, Wrench,
  Route, Globe, Shield, Radio, Search, Link,
  Workflow, Bot, MessageSquare, Network, Boxes,
  Layout, GitBranch, Code, Send, Container,
} from 'lucide-react';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Card } from '../../components/ui/Card';
import { skills, skillCategories } from '../../data/skills';
import type { Skill } from '../../types';

const iconMap: Record<string, React.ElementType> = {
  'file-code': FileCode,
  server: Server,
  database: Database,
  brain: Brain,
  layers: Layers,
  wrench: Wrench,
  route: Route,
  globe: Globe,
  shield: Shield,
  radio: Radio,
  search: Search,
  link: Link,
  workflow: Workflow,
  bot: Bot,
  'message-square': MessageSquare,
  network: Network,
  boxes: Boxes,
  layout: Layout,
  'git-branch': GitBranch,
  code: Code,
  send: Send,
  container: Container,
  mail: Send,
};

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = iconMap[skill.icon] || Code;

  return (
    <Card hoverable padding="md">
      <div className="flex items-start gap-3.5">
        <div className="flex-shrink-0 w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--color-accent-muted)] flex items-center justify-center">
          <Icon size={18} strokeWidth={1.5} className="text-[var(--color-accent)]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">
              {skill.name}
            </h4>
            {skill.status === 'learning' && (
              <span className="px-1.5 py-0.5 text-[10px] font-medium bg-amber-50 text-amber-600 rounded">
                Learning
              </span>
            )}
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
            {skill.description}
          </p>
        </div>
      </div>
    </Card>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const reduce = useReducedMotion();

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            title="Skills"
            subtitle="Technologies and tools I work with."
          />
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-4 py-2 text-sm font-medium rounded-[var(--radius-button)]
                  transition-all duration-[var(--duration-fast)]
                  ${activeCategory === cat.id
                    ? 'bg-[var(--color-accent)] text-white shadow-[var(--shadow-sm)]'
                    : 'bg-white text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
