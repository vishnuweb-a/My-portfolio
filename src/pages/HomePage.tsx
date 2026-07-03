import { Hero } from '../features/hero/Hero';
import { About } from '../features/about/About';
import { Timeline } from '../features/timeline/Timeline';
import { Skills } from '../features/skills/Skills';
import { Projects } from '../features/projects/Projects';
import { Experience } from '../features/experience/Experience';
import { Contact } from '../features/contact/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
