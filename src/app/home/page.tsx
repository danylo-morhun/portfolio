import React from "react";
import Image from "next/image";
import Header from "./components/header";
import HardSkills from "./components/hard-skills";
import Experience from "./components/experience";
import CallToAction from "./components/call-to-action";
import SocialLinks from "./components/social-links";
import { hardSkills } from "../api/hard-skills/route";

export default function HomePage() {
  return (
    <div className="bg-[var(--background)] p-2 sm:p-4 w-full max-w-[600px] mx-auto">
      <Header />

      <section className="rounded-2xl bg-[var(--cards)] w-full shadow-sm mt-2 pb-2">
        <div className="flex items-center justify-between p-4 sm:p-6 w-full">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[var(--primary)] rounded-full mr-2"></div>
            <span className="font-bold text-sm sm:text-lg">Frontend Developer</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[var(--positive-50)] rounded-full mr-2 flex items-center">
              <div className="w-2 h-2 bg-[var(--positive)] rounded-full m-auto"></div>
            </div>
            <span className="font-bold text-sm sm:text-lg">Open to Work</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 sm:p-6 w-full">
          <div className="text-2xl sm:text-2xl font-bold">
            <span className="flex items-center">
              Hello!
              <Image 
                src="/hello.png" 
                alt="Hello" 
                width={20}
                height={20}
                className="ml-2 sm:w-6 sm:h-6"
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

          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-[var(--primary-50)] rounded-full flex items-center justify-center">
            <div className="w-28 h-28 sm:w-36 sm:h-36 bg-[var(--primary)] rounded-full overflow-hidden">
              <Image 
                src="/face.webp" 
                alt="Face" 
                width={144} 
                height={144}
                priority
                className="w-full h-full object-cover"
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
