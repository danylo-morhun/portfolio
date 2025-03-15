import React from "react";
import { RiUserSmileLine, RiWindowLine, RiMoonClearLine } from "react-icons/ri";

const Home: React.FC = () => {
  return (
    <div className="bg-(--background) p-2 w-140 m-auto">
      <header className="flex items-center justify-between rounded-2xl bg-(--cards) w-full h-16 px-6 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-(--primary) p-2 font-bold w-9 h-9 flex items-center justify-center">
            DM
          </div>
          <RiUserSmileLine size={36} color="(--foreground)" />
          <RiWindowLine size={36} color="(--foreground)" />
        </div>
        <div className="flex items-center gap-2">
          <RiMoonClearLine size={36} color="(--foreground)" />
          <button className="bg-(--primary) hover:bg-(--primary-50) text-(--foreground) font-bold py-2 px-4 rounded-xl">
            Hire me!
          </button>
        </div>
      </header>

      <section className="rounded-2xl bg-(--cards) w-full shadow-sm mt-2 ">
        <div className="flex items-center justify-between p-6 w-full">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-(--primary) rounded-full mr-2"></div>
            <span className="font-bold text-lg">Frontend Developer</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-(--positive-50) rounded-full mr-2 flex items-center">
              <div className="w-2 h-2 bg-(--positive) rounded-full m-auto"></div>
            </div>
            <span className="font-bold text-lg">Open to Work</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-6 w-2/4 font-bold text-2xl w-full">
          <div>
            <span className="flex items-center">
              Hello!
              <img src="hello.png" alt="Hello" width={24} className="ml-2" />
            </span>
            I am Danylo
            <br />
            — developer
            <br />
            with 2+ years of
            <br />
            experience.
          </div>

          <div className="w-40 h-40 bg-(--primary-50) rounded-full mr-2 flex items-center">
            <div className="w-36 h-36 bg-(--primary) rounded-full m-auto">
              <img src="face.webp" alt="Face" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
