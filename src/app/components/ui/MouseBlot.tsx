'use client';

import { useEffect, useRef } from 'react';

export const MouseBlot = () => {
  const blotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      if (blotRef.current) {
        // Smooth interpolation for natural following effect
        currentX += (mouseX - currentX) * 0.05; // Very slow lag - 0.05 for smooth following
        currentY += (mouseY - currentY) * 0.05;
        
        blotRef.current.style.transform = `translate(${currentX - 800}px, ${currentY - 800}px)`;
        blotRef.current.style.opacity = '0.9';
      }
      requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
      if (blotRef.current) {
        blotRef.current.style.opacity = '0';
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Start animation loop
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={blotRef}
      className="mouse-blot"
      style={{
        opacity: 0,
        transition: 'opacity 0.5s ease-out',
      }}
    />
  );
};
