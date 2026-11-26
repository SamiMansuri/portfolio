import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { siteConfig } from '../config/site';

export const GetInTouchButton: React.FC = () => {
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
  );
};
