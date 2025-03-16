"use client";

import React, { useState, useEffect } from "react";
import Header from "./components/header";
import HardSkills, { Skill } from "./components/hard-skills";

const Home: React.FC = () => {
  const [hardSkills, setHardSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/hard-skills");
        const data = await res.json();
        console.log("Fetched data:", data); // Add this line to log the fetched data
        setHardSkills(data); // Adjust this line if the data structure is different
      } catch (error) {
        console.error("Error fetching hard skills:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-(--background) p-2 w-140 m-auto">
      <Header />

      <section className="rounded-2xl bg-(--cards) w-full shadow-sm mt-2 pb-2">
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

        {hardSkills.length > 0 ? (
          <HardSkills hardSkills={hardSkills} />
        ) : (
          <p>Loading hard skills...</p>
        )}
      </section>
    </div>
  );
};

export default Home;
