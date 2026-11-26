import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[11px] font-mono font-medium tracking-widest text-accent uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-content-primary">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xs sm:text-sm text-content-secondary leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
