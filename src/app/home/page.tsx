import React from "react";
import { RiUserSmileLine, RiWindowLine, RiMoonClearLine } from "react-icons/ri";

const Home: React.FC = () => {
  return (
    <div className="bg-(--background) p-2 w-140 m-auto">
      <header className="flex items-center justify-between rounded-xl bg-(--cards) w-full h-16 px-6 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-(--primary) p-2 font-bold w-9 h-9 flex items-center justify-center">
            DM
          </div>
          <RiUserSmileLine size={36} color="(--foreground)" />
          <RiWindowLine size={36} color="(--foreground)" />
        </div>
        <div className="flex items-center gap-2">
          <RiMoonClearLine size={36} color="(--foreground)" />
          <button className="bg-(--primary) hover:bg-(--primary-50) text-(--foreground) font-bold py-2 px-4 rounded-md">
            Hire me!
          </button>
        </div>
      </header>
    </div>
  );
};

export default Home;
