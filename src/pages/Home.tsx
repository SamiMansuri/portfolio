import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Check } from 'lucide-react';
import { siteConfig } from '../config/site';
import { skillGroups } from '../data/skills';
import { SkillGroup } from '../components/SkillGroup';

interface StatItem {
  value: string;
  label: string;
  context: string;
}

const STATS: StatItem[] = [
  {
    value: '2.5+',
    label: 'Years of Experience',
    context: 'Shipping backend & AI services',
  },
  {
    value: '90%',
    label: 'Faster Processing',
    context: 'On a production data pipeline',
  },
  {
    value: '3M+',
    label: 'Rows per Royalty Run',
    context: 'Million-row CSV sales files on TunePays',
  },
];

export const Home: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [hoverEmail, setHoverEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.links.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${siteConfig.links.email}`;
    }
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-center py-2 sm:py-4 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left Column: Hero, About Me & CTAs */}
        <section className="lg:col-span-5 flex flex-col justify-center space-y-3.5 animate-fade-in">
          {/* Eyebrow badge */}
          <div className="flex items-center gap-2">
            {/* <span className="w-2 h-2 rounded-full bg-accent animate-pulse motion-reduce:animate-none" /> */}
            <span className="text-xs font-mono font-medium tracking-wider text-[#9ca3af] uppercase">
              {siteConfig.eyebrow}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-content-primary leading-[1.2]">
            {siteConfig.headline}
          </h1>

          {/* About Me Intro */}
          <p className="text-sm text-content-secondary leading-relaxed font-normal">
            {siteConfig.bio}
          </p>

          {/* Availability Status Indicator + Social Proof + CTAs (12px consistent spacing) */}
          <div className="flex flex-col gap-3 pt-0.5">
            {/* Inline Availability Status */}
            <div className="inline-flex items-center gap-2.5 text-xs font-mono text-[#e4e4e7]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" />
              </span>
              <span>{siteConfig.availability}</span>
            </div>

            {/* Muted Proof Line */}
            <p className="text-sm text-gray-400">
              Built POS, billing, and AI systems for real clients.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-ui bg-white text-black font-mono text-xs sm:text-sm font-semibold hover:bg-[#e5e5e5] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={handleCopyEmail}
                onMouseEnter={() => setHoverEmail(true)}
                onMouseLeave={() => setHoverEmail(false)}
                title={`Copy email: ${siteConfig.links.email}`}
                aria-label={`Copy email address ${siteConfig.links.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-ui bg-card border border-card-border hover:border-card-hover-border text-card-text font-mono text-xs sm:text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-white" />
                    <span>{hoverEmail ? siteConfig.links.email : 'Get in Touch'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Right Column: Technical Expertise & Credibility Metrics */}
        <section className="lg:col-span-7 flex flex-col justify-center space-y-5 animate-fade-in">
          {/* Technical Expertise Grid */}
          <div>
            <div className="mb-3">
              <span className="text-xs font-mono font-medium text-[#9ca3af] uppercase tracking-wider">
                Technical Expertise
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
              {skillGroups.map((group) => (
                <SkillGroup key={group.category} data={group} />
              ))}
            </div>
          </div>

          {/* Experience Snapshot Metrics */}
          <div>
            <span className="text-xs font-mono font-medium text-[#9ca3af] uppercase tracking-wider block mb-3">
              Experience Snapshot
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="h-full flex flex-col bg-card border border-card-border hover:border-card-hover-border rounded-ui p-4 transition-colors duration-150"
                >
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-[#fafafa] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono font-normal text-[#b4b4bc] leading-snug mt-1">
                      {stat.label}
                    </div>
                  </div>
                  <div className="text-xs text-[#8a8a94] leading-snug">
                    {stat.context}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
