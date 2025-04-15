"use client";

import React from 'react';
import { RiInformationLine } from 'react-icons/ri';

const Experience: React.FC = () => {
  return (
    <div className="m-2 bg-[var(--background)] rounded-xl px-4 pt-4 pb-4">
      <div>
        <div className="flex items-center mb-4">
          <div className="w-4 h-4 bg-[var(--primary)] rounded-full mr-2"></div>
          <span className="font-bold text-lg">Commercial Experience</span>
        </div>
        <div
          className="w-full bg-[var(--cards)] mt-2 rounded-lg p-4 flex items-center justify-between"
        >
          <div className="font-bold">
            <p className="m-0 text-xl">Frontend Developer at EZCLOUD LLC</p>
            <span className="text-[var(--foreground-50)] font-medium">
              Dec 2021 - Mar 2025 (3 years 4 months)
            </span>
          </div>
          <RiInformationLine className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Experience; 