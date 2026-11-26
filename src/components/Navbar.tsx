import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FileCode2, Layers, GitBranch } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isProjects = location.pathname === '/projects';

  return (
    <header className="h-[52px] sm:h-[58px] bg-background border-b border-border-subtle select-none flex items-stretch justify-between px-3 sm:px-6 w-full">
      {/* Left side: VS Code Tab Bar */}
      <div className="flex items-stretch overflow-x-auto no-scrollbar">
        {/* Workspace Brand / Breadcrumb prefix */}
        <div className="hidden md:flex items-center gap-2 pr-4 mr-2 border-r border-border-subtle/60 text-xs font-mono text-content-muted">
          <span className="w-2.5 h-2.5 rounded-full bg-accent/20 border border-accent/40 inline-block" />
          <span className="text-content-secondary font-medium tracking-wide">sami-mansuri</span>
          <span className="text-content-muted">/</span>
        </div>

        <nav className="flex items-stretch gap-[1px]" aria-label="Main Navigation">
          {/* Home Tab */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative flex items-center gap-2 px-3.5 sm:px-4 text-xs sm:text-sm font-mono border-r border-border-subtle transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white ${
                isActive
                  ? 'bg-background text-content-primary font-medium border-t-2 border-t-accent shadow-sm'
                  : 'bg-surface/80 text-content-secondary hover:bg-surface-elevated hover:text-content-primary border-t-2 border-t-transparent'
              }`
            }
          >
            <FileCode2 className={`w-3.5 h-3.5 ${isHome ? 'text-accent' : 'text-content-muted'}`} />
            <span>Home</span>
            <span
              className={`w-1.5 h-1.5 rounded-full ml-1 transition-opacity ${
                isHome ? 'bg-accent/70 opacity-100' : 'opacity-0'
              }`}
              title="Active buffer"
            />
          </NavLink>

          {/* Projects Tab */}
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `relative flex items-center gap-2 px-3.5 sm:px-4 text-xs sm:text-sm font-mono border-r border-border-subtle transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white ${
                isActive
                  ? 'bg-background text-content-primary font-medium border-t-2 border-t-accent shadow-sm'
                  : 'bg-surface/80 text-content-secondary hover:bg-surface-elevated hover:text-content-primary border-t-2 border-t-transparent'
              }`
            }
          >
            <Layers className={`w-3.5 h-3.5 ${isProjects ? 'text-accent' : 'text-content-muted'}`} />
            <span>Projects</span>
            <span
              className={`w-1.5 h-1.5 rounded-full ml-1 transition-opacity ${
                isProjects ? 'bg-accent/70 opacity-100' : 'opacity-0'
              }`}
              title="Active buffer"
            />
          </NavLink>
        </nav>
      </div>

      {/* Right side: Editor status / breadcrumb */}
      <div className="flex items-center gap-3 text-xs font-mono text-content-muted">
        <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-ui border border-border-subtle/70 bg-surface-elevated/40 text-xs">
          <GitBranch className="w-3 h-3 text-accent" />
          <span className="text-content-secondary">main</span>
        </div>
        <span className="text-[11px] text-content-muted hidden md:inline">
          UTF-8
        </span>
      </div>
    </header>
  );
};
