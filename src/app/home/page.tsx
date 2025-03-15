import React from "react";
import Header from "./components/header";

const Home: React.FC = () => {
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

          <div className="w-full bg-(--cards) mt-4 rounded-lg p-4 flex items-center">
            <div className="w-16 h-16 bg-[#72E58580] rounded-full mr-2 flex items-center ">
              <div className="text-xl w-12 h-12 bg-[#72E585] rounded-full m-auto font-bold flex items-center justify-center">
                FE
              </div>
            </div>
            <div className="font-bold">
              <p className="m-0 text-xl">Frontend Development</p>
              <span className="text-(--foreground-50) font-medium">
                JS, TS, Vue, React, Next.js, Vuetify, Tailwind
              </span>
            </div>
          </div>
          <div className="w-full bg-(--cards) mt-2 rounded-lg p-4 flex items-center">
            <div className="w-16 h-16 bg-[#FFD81980] rounded-full mr-2 flex items-center ">
              <div className="text-xl w-12 h-12 bg-[#FFD819] rounded-full m-auto font-bold flex items-center justify-center">
                SM
              </div>
            </div>
            <div className="font-bold">
              <p className="m-0 text-xl">State Management</p>
              <span className="text-(--foreground-50) font-medium">
                Redux, Pinia, Vuex
              </span>
            </div>
          </div>
          <div className="w-full bg-(--cards) mt-2 rounded-lg p-4 flex items-center">
            <div className="w-16 h-16 bg-[#FF8C4280] rounded-full mr-2 flex items-center ">
              <div className="text-xl w-12 h-12 bg-[#FF8C42] rounded-full m-auto font-bold flex items-center justify-center">
                API
              </div>
            </div>
            <div className="font-bold">
              <p className="m-0 text-xl">APIs</p>
              <span className="text-(--foreground-50) font-medium">
                RESTful APIs, GraphQL APIs
              </span>
            </div>
          </div>
          <div className="w-full bg-(--cards) mt-2 rounded-lg p-4 flex items-center">
            <div className="w-16 h-16 bg-[#1687FF80] rounded-full mr-2 flex items-center ">
              <div className="text-xl text-(--cards) w-12 h-12 bg-[#1687FF] rounded-full m-auto font-bold flex items-center justify-center">
                BE
              </div>
            </div>
            <div className="font-bold">
              <p className="m-0 text-xl">Backend Basics</p>
              <span className="text-(--foreground-50) font-medium">
                Python, Django, Django REST
              </span>
            </div>
          </div>
          <div className="w-full bg-(--cards) mt-2 rounded-lg p-4 flex items-center">
            <div className="w-16 h-16 bg-[#D283FF80] rounded-full mr-2 flex items-center ">
              <div className="text-xl text-(--cards) w-12 h-12 bg-[#D283FF] rounded-full m-auto font-bold flex items-center justify-center">
                BT
              </div>
            </div>
            <div className="font-bold">
              <p className="m-0 text-xl">Build Tools</p>
              <span className="text-(--foreground-50) font-medium">
                Webpack, Vite, Turbopack
              </span>
            </div>
          </div>
          <div className="w-full bg-(--cards) mt-2 rounded-lg p-4 flex items-center">
            <div className="w-16 h-16 bg-[#42C5FF80] rounded-full mr-2 flex items-center ">
              <div className="text-xl text-(--cards) w-12 h-12 bg-[#42C5FF] rounded-full m-auto font-bold flex items-center justify-center">
                CI
              </div>
            </div>
            <div className="font-bold">
              <p className="m-0 text-xl">Version Control, CI/CD, DevOps</p>
              <span className="text-(--foreground-50) font-medium">
                Git, Gitlab CI/CD, GitHub Actions, Docker
              </span>
            </div>
          </div>
          <div className="w-full bg-(--cards) mt-2 rounded-lg p-4  flex items-center">
            <div className="w-16 h-16 bg-[#E91E6380] rounded-full mr-2 flex items-center ">
              <div className="text-xl text-(--cards) w-12 h-12 bg-[#E91E63] rounded-full m-auto font-bold flex items-center justify-center">
                UI
              </div>
            </div>
            <div className="font-bold">
              <p className="m-0 text-xl">UI/UX & Design Tools</p>
              <span className="text-(--foreground-50) font-medium">
                Figma, Photoshop, Premiere Pro
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
