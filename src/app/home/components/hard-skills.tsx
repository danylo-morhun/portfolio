import React from "react";

export interface Skill {
  title: string;
  description: string;
}

interface HardSkillsProps {
  hardSkills: Skill[];
}

const HardSkills: React.FC<HardSkillsProps> = ({ hardSkills }) => {
  return (
    <div className="m-2 bg-(--background) rounded-xl px-4 pt-4 pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-(--primary) rounded-full mr-2"></div>
          <span className="font-bold text-lg">Hard Skills</span>
        </div>
        <button className="bg-none border-2 border-solid hover:bg-(--cards) text-(--foreground) font-bold px-4 rounded-lg">
          View all
        </button>
      </div>

      {hardSkills.map((skill, index) => (
        <div
          key={index}
          className="w-full bg-(--cards) mt-2 rounded-lg p-4 flex items-center"
        >
          <div className="w-16 h-16 bg-[#72E58580] rounded-full mr-2 flex items-center ">
            <div className="text-xl w-12 h-12 bg-[#72E585] rounded-full m-auto font-bold flex items-center justify-center">
              {skill.title.slice(0, 2).toUpperCase()}
            </div>
          </div>
          <div className="font-bold">
            <p className="m-0 text-xl">{skill.title}</p>
            <span className="text-(--foreground-50) font-medium">
              {skill.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HardSkills;
