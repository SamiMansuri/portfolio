import React from 'react';
import { Server, BrainCircuit, Database, Cpu } from 'lucide-react';
import { SkillGroupData } from '../data/skills';

interface SkillGroupProps {
  data: SkillGroupData;
}

const iconMap = {
  Server,
  BrainCircuit,
  Database,
  Cpu,
};

export const SkillGroup: React.FC<SkillGroupProps> = ({ data }) => {
  const Icon = iconMap[data.iconName] || Server;

  return (
    <div className="h-full flex flex-col justify-start bg-card text-card-text border border-card-border hover:border-card-hover-border rounded-ui p-4 sm:p-5 transition-colors duration-150">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="p-1.5 rounded-ui bg-card-pill text-card-text border border-card-pill-border">
          <Icon className="w-4 h-4" />
        </div>
        <h3 className="text-sm font-semibold text-card-text tracking-tight font-mono">
          {data.category}
        </h3>
      </div>
      <div className="flex flex-wrap content-start gap-2">
        {data.skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center px-2.5 py-1 rounded-ui text-xs font-mono bg-card-pill text-card-text border border-card-pill-border hover:border-card-hover-border transition-colors duration-150 font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
