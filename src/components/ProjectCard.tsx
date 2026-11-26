import React from 'react';
import { Github, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const visibleTags = project.tags.slice(0, 5);

  return (
    <article className="h-full flex flex-col bg-card text-card-text border border-card-border hover:border-card-hover-border rounded-ui p-4 sm:p-5 transition-colors duration-150">
      {/* Header: Project Number & Category Tag */}
      <div className="flex items-center justify-between pb-3 border-b border-card-border mb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-card-text tracking-wider">
            PROJECT {project.number}
          </span>
          <span className="px-2 py-0.5 rounded-ui text-xs font-mono bg-card-pill text-card-text border border-card-pill-border font-medium">
            {project.category}
          </span>
        </div>
      </div>

      {/* Title & Role */}
      <h3 className="text-sm sm:text-base font-bold text-card-text tracking-tight mb-1">
        {project.title}
      </h3>
      <p className="text-xs font-mono text-card-muted mb-3">
        {project.role}
      </p>

      {/* Description */}
      <p className="text-xs sm:text-sm text-card-muted leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech Stack Badges (capped at 5) */}
      <div className="flex flex-wrap gap-2 mb-4">
        {visibleTags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-1 rounded-ui text-xs font-mono bg-card-pill text-card-text border border-card-pill-border font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Key Architecture & Results List */}
      <div className="space-y-1.5 pt-3 border-t border-card-border mb-4">
        <span className="text-xs font-mono font-semibold text-card-muted uppercase tracking-wider block mb-1.5">
          Key Architecture &amp; Results
        </span>
        <ul className="space-y-1.5 text-xs text-card-muted leading-normal font-sans">
          {project.results.map((result, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-card-text shrink-0 mt-0.5" />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Anchored Footer Row */}
      <div className="mt-auto pt-3 border-t border-card-border flex items-center justify-between">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            className="inline-flex items-center gap-2 rounded-ui text-xs font-mono text-card-muted hover:text-card-text hover:bg-card-pill transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <Github className="w-4 h-4" />
            <span>{project.linkLabel}</span>
          </a>
        ) : (
          <span className="text-xs font-mono text-card-muted">
            {project.linkLabel}
          </span>
        )}
      </div>
    </article>
  );
};
