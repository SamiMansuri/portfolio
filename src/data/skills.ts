export interface SkillGroupData {
  category: string;
  iconName: 'Server' | 'BrainCircuit' | 'Database' | 'Cpu';
  skills: string[];
}

export const skillGroups: SkillGroupData[] = [
  {
    category: "Backend Engineering",
    iconName: "Server",
    skills: ["Node.js", "Express.js", "TypeScript", "Python", "REST APIs", "Webhooks", "Payment gateway", "Auth"],
  },
  {
    category: "Applied AI",
    iconName: "BrainCircuit",
    skills: [
      "LLM Integration",
      "RAG",
      "Tool-calling Agents",
      "MCP",
      "Guardrails",
      "Evaluation Harnesses",
    ],
  },
  {
    category: "Databases",
    iconName: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Infrastructure",
    iconName: "Cpu",
    skills: ["AWS", "EC2", "Docker", "Background Workers"],
  },
];
