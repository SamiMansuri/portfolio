export interface SiteConfig {
  name: string;
  role: string;
  eyebrow: string;
  headline: string;
  bio: string;
  availability: string;
  links: {
    email: string;
    github: string;
    linkedin: string;
  };
  metrics: Array<{
    value: string;
    label: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "Sami Mansuri",
  role: "Backend AI Engineer",
  eyebrow: "BACKEND ENGINEERING × APPLIED AI",
  headline: "Building reliable backends & intelligent AI systems.",
  bio: "I'm Sami Mansuri, a Backend AI Engineer building scalable backend systems and practical AI solutions. I help businesses turn complex technical requirements into reliable, production-ready software.",
  availability: "Available for freelance projects",
  links: {
    email: "samimansuri.dev@gmail.com",
    github: "https://github.com/samimansuri",
    linkedin: "https://linkedin.com/in/samimansuri",
  },
  metrics: [
    {
      value: "2.5+",
      label: "Years of Experience",
    },
    {
      value: "Millions",
      label: "Records Processed",
    },
    {
      value: "90%",
      label: "Processing Time Reduction",
    },
  ],
};
