import React from "react";

export interface Skill {
  title: string;
  description: string;
  color: string;
}

interface HardSkillsProps {
  hardSkills: Skill[];
}

const getAbbreviation = (title: string): string => {
  const words = title.split(' ');
  if (words.length > 1 && words.length < 3) {
    return words.map(word => word[0]).join('').toUpperCase();
  }
  if (words.length > 2) {
    return title.slice(0, 2).toUpperCase();
  }
  return title.slice(0, 2).toUpperCase();
};

const HardSkills: React.FC<HardSkillsProps> = ({ hardSkills }) => {
  return (
    <div className="m-2 bg-[var(--background)] rounded-xl px-4 pt-4 pb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[var(--primary)] rounded-full mr-2"></div>
          <span className="font-bold text-lg">Hard Skills</span>
        </div>
        <button className="bg-none border-2 border-solid hover:bg-[var(--cards)] text-[var(--foreground)] font-bold px-4 rounded-lg">
          View all
        </button>
      </div>

      {hardSkills.map((skill, index) => (
        <div
          key={index}
          className="w-full bg-[var(--cards)] mt-2 rounded-lg p-4 flex items-center"
        >
          <div className="relative flex-shrink-0 w-16 h-16 mr-4">
            <div 
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: skill.color, opacity: 0.5 }}
            />
            <div 
              className="relative w-full h-full rounded-full flex items-center justify-center"
            >
              <div 
                className="text-xl w-12 h-12 rounded-full font-bold flex items-center justify-center text-white"
                style={{ backgroundColor: skill.color }}
              >
                {getAbbreviation(skill.title)}
              </div>
            </div>
          </div>
          <div className="font-bold min-w-0">
            <p className="m-0 text-xl break-words">{skill.title}</p>
            <span className="text-[var(--foreground-50)] font-medium break-words">
              {skill.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HardSkills;
