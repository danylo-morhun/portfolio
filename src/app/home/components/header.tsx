"use client";

import React from "react";
import { RiUserSmileLine, RiWindowLine, RiMoonClearLine } from "react-icons/ri";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between rounded-2xl bg-[var(--cards)] w-full h-16 px-6 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-[var(--primary)] p-2 font-bold w-9 h-9 flex items-center justify-center">
          DM
        </div>
        <RiUserSmileLine size={36} color="var(--foreground)" />
        <RiWindowLine size={36} color="var(--foreground)" />
      </div>
      <div className="flex items-center gap-2">
        <RiMoonClearLine size={36} color="var(--foreground)" />
        <button className="bg-[var(--primary)] hover:bg-[var(--primary-50)] text-[var(--foreground)] font-bold py-2 px-4 rounded-xl">
          Hire me!
        </button>
      </div>
    </header>
  );
};

export default Header;
