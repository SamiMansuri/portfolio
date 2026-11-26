import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="min-h-[44px] py-2 sm:py-0 bg-background border-t border-border-subtle text-xs text-content-secondary px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 select-none">
      {/* Left side: Contact links */}
      <div className="flex items-center gap-3">
        <span className="text-[#a1a1aa] text-xs font-mono tracking-tight">Contact me:</span>
        <div className="flex items-center gap-2">
          {/* Email */}
          <a
            href={`mailto:${siteConfig.links.email}`}
            aria-label={`Send email to ${siteConfig.name}`}
            className="inline-flex items-center justify-center p-1.5 rounded-ui text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#1a1a1a] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            title={`Email: ${siteConfig.links.email}`}
          >
            <Mail size={16} />
          </a>

          {/* LinkedIn */}
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex items-center justify-center p-1.5 rounded-ui text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#1a1a1a] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            title="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>

          {/* GitHub */}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex items-center justify-center p-1.5 rounded-ui text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#1a1a1a] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            title="GitHub Profile"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      {/* Right side: Copyright */}
      <div className="text-xs font-mono text-[#a1a1aa]">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
};
