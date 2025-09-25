import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { MouseBlot } from "./components/ui/MouseBlot";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Danylo Morhun - Frontend Developer | React, TypeScript, Next.js Expert",
    template: "%s | Danylo Morhun - Frontend Developer"
  },
  description: "Experienced Frontend Developer with 3+ years of expertise in React, TypeScript, Next.js, and modern web technologies. Specializing in creating beautiful, performant, and user-friendly web applications. Available for freelance and full-time opportunities.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "TypeScript Developer", 
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer",
    "UI/UX Developer",
    "Portfolio",
    "Danylo Morhun",
    "Frontend Engineer",
    "React Expert",
    "Modern Web Development",
    "Responsive Design",
    "Web Applications"
  ],
  authors: [{ name: "Danylo Morhun" }],
  creator: "Danylo Morhun",
  publisher: "Danylo Morhun",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.danylomorhun.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Danylo Morhun - Frontend Developer | React, TypeScript, Next.js Expert",
    description: "Experienced Frontend Developer with 3+ years of expertise in React, TypeScript, Next.js, and modern web technologies. Available for freelance and full-time opportunities.",
    url: 'https://www.danylomorhun.com/',
    siteName: 'Danylo Morhun Portfolio',
    images: [
      {
        url: '/face.webp',
        width: 1200,
        height: 630,
        alt: 'Danylo Morhun - Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Danylo Morhun - Frontend Developer | React, TypeScript, Next.js Expert",
    description: "Experienced Frontend Developer with 3+ years of expertise in React, TypeScript, Next.js, and modern web technologies.",
    images: ['/face.webp'],
    creator: '@danylo_morhun',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ab7ff46106f78952', // Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Danylo Morhun",
    "jobTitle": "Frontend Developer",
    "description": "Experienced Frontend Developer with 3+ years of expertise in React, TypeScript, Next.js, and modern web technologies.",
    "url": "https://www.danylomorhun.com/",
    "image": "https://www.danylomorhun.com/face.webp",
    "sameAs": [
      "https://github.com/danylo-morhun",
      "https://linkedin.com/in/danylo-morhun",
      "https://twitter.com/danylo_morhun"
    ],
    "knowsAbout": [
      "React",
      "TypeScript", 
      "Next.js",
      "JavaScript",
      "Frontend Development",
      "Web Development",
      "UI/UX Design",
      "Responsive Design"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Frontend Developer",
      "description": "Specializing in creating beautiful, performant, and user-friendly web applications",
      "skills": ["React", "TypeScript", "Next.js", "JavaScript", "CSS", "HTML", "Web Development"]
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Self-taught Developer"
    }
  };

  return (
    <html lang="en" data-theme="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MouseBlot />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
