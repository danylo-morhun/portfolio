"use client";

import React from 'react';
import { RiMailLine } from 'react-icons/ri';

const CallToAction: React.FC = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('danylo.morhun@gmail.com');
  };

  return (
    <div className="m-2 bg-[var(--cards)] rounded-xl px-4 pt-4 pb-4 text-center">
      <h2 className="text-2xl font-bold mb-2">Let's work together!</h2>
      <p className="text-[var(--foreground-50)] mb-4">
        Creating user-friendly and scalable web applications!
      </p>
      <div className="flex gap-4 justify-center">
        <button className="bg-[var(--primary)] hover:bg-[var(--primary-50)] text-[var(--foreground)] font-bold py-2 px-6 rounded-xl">
          Hire me!
        </button>
        <button 
          onClick={handleCopyEmail}
          className="border-2 border-solid border-[var(--border)] hover:bg-[var(--cards)] text-[var(--foreground)] font-bold py-2 px-6 rounded-xl flex items-center gap-2"
        >
          Copy Email
        </button>
      </div>
    </div>
  );
};

export default CallToAction; 