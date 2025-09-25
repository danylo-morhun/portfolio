import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Experience & Projects',
  description: 'Explore Danylo Morhun\'s professional experience, commercial projects, and technical expertise. View detailed project portfolios showcasing React, TypeScript, and Next.js development skills.',
  keywords: [
    'Professional Experience',
    'Commercial Projects',
    'Portfolio Projects',
    'React Projects',
    'TypeScript Projects',
    'Next.js Projects',
    'Web Development Experience',
    'Frontend Projects',
    'Danylo Morhun Experience'
  ],
  openGraph: {
    title: 'Professional Experience & Projects | Danylo Morhun',
    description: 'Explore Danylo Morhun\'s professional experience, commercial projects, and technical expertise in React, TypeScript, and Next.js development.',
    images: [
      {
        url: '/face.webp',
        width: 1200,
        height: 630,
        alt: 'Danylo Morhun - Professional Experience',
      },
    ],
  },
  twitter: {
    title: 'Professional Experience & Projects | Danylo Morhun',
    description: 'Explore Danylo Morhun\'s professional experience, commercial projects, and technical expertise in React, TypeScript, and Next.js development.',
    images: ['/face.webp'],
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
