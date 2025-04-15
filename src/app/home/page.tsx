import React from "react";
import Image from "next/image";
import Header from "./components/header";
import HardSkills from "./components/hard-skills";
import Experience from "./components/experience";
import CallToAction from "./components/call-to-action";
import SocialLinks from "./components/social-links";
import { hardSkills } from "../api/hard-skills/route";

export default function Home() {
  return (
    <div className="bg-[var(--background)] p-2 w-140 m-auto">
      <Header />

      <section className="rounded-2xl bg-[var(--cards)] w-full shadow-sm mt-2 pb-2">
        <div className="flex items-center justify-between p-6 w-full">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[var(--primary)] rounded-full mr-2"></div>
            <span className="font-bold text-lg">Frontend Developer</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[var(--positive-50)] rounded-full mr-2 flex items-center">
              <div className="w-2 h-2 bg-[var(--positive)] rounded-full m-auto"></div>
            </div>
            <span className="font-bold text-lg">Open to Work</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-6 w-2/4 font-bold text-2xl w-full">
          <div>
            <span className="flex items-center">
              Hello!
              <Image 
                src="/hello.png" 
                alt="Hello" 
                width={24} 
                height={24} 
                className="ml-2"
                priority
              />
            </span>
            I am Danylo
            <br />
            — developer
            <br />
            with 2+ years of
            <br />
            experience.
          </div>

          <div className="w-40 h-40 bg-[var(--primary-50)] rounded-full mr-2 flex items-center">
            <div className="w-36 h-36 bg-[var(--primary)] rounded-full m-auto overflow-hidden">
              <Image 
                src="/face.webp" 
                alt="Face" 
                width={144} 
                height={144}
                priority
              />
            </div>
          </div>
        </div>

        <HardSkills hardSkills={hardSkills} />
        <Experience />
        <CallToAction />
        <SocialLinks />
      </section>
    </div>
  );
}
