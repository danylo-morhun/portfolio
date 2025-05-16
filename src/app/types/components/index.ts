export interface HardSkill {
    id: string;
    abbr: string;
    title: string;
    description: string;
    color: string;
  }
  
  export interface Experience {
    id: string;
    company: string;
    position: string;
    period: string;
    description: string;
  }
  
  export interface SocialLink {
    id: string;
    platform: string;
    url: string;
    icon: string;
  }
  
  export interface AnimationProps {
    initial?: object;
    animate?: object;
    exit?: object;
    transition?: object;
    children: React.ReactNode;
  }