"use client";

import React from 'react';
import { RiLinkedinFill, RiFacebookFill, RiInstagramLine } from 'react-icons/ri';

const SocialLinks: React.FC = () => {
  return (
    <div className="m-2">
      <div className="bg-[var(--background)] rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[var(--primary)] rounded-full mr-2"></div>
          <span className="font-bold text-lg">My Socials</span>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/danylo-morhun/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--primary)] hover:bg-[var(--primary-50)] w-10 h-10 rounded-full flex items-center justify-center text-[var(--foreground)]"
          >
            <RiLinkedinFill size={20} />
          </a>
          <a
            href="https://www.facebook.com/danylo.morhun/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--primary)] hover:bg-[var(--primary-50)] w-10 h-10 rounded-full flex items-center justify-center text-[var(--foreground)]"
          >
            <RiFacebookFill size={20} />
          </a>
          <a
            href="https://www.instagram.com/danylo.morhun/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--primary)] hover:bg-[var(--primary-50)] w-10 h-10 rounded-full flex items-center justify-center text-[var(--foreground)]"
          >
            <RiInstagramLine size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks; 