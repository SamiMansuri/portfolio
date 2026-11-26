import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { GetInTouchButton } from '../components/GetInTouchButton';
import { PROJECTS } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col pt-12 sm:pt-10 pb-8 px-4 sm:px-6 lg:px-8 animate-fade-in">
      {/* Header */}
      <div className="mb-6">
        <SectionHeading
          eyebrow="ENGINEERING SHOWCASE"
          title="Selected Projects"
          subtitle="A collection of systems I've engineered, optimized and experimented with."
        />
      </div>

      {/* Projects Grid: 3 equal-height cards on desktop, 1 column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>

      {/* Earlier Work Strip */}
      <p className="mt-5 text-xs font-mono text-[#9ca3af] leading-relaxed border-t border-border-subtle pt-4">
        Earlier work · Sole developer on TunePays, a music royalty and distribution platform. Built the Royalty Run system with Node.js worker threads to process million-row CSVs, 90% faster end-to-end.
      </p>

      {/* Bottom Call-to-Action Block */}
      <section className="mt-4 pt-6 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-content-primary">
            Have a project like this?
          </h2>
          <p className="text-sm text-[#9ca3af] mt-0.5">
            Available for freelance work.
          </p>
        </div>
        <div>
          <GetInTouchButton />
        </div>
      </section>
    </div>
  );
};
