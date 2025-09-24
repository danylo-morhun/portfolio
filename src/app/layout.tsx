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
  title: "Danylo Morhun - Frontend Developer",
  description: "Frontend Developer with a passion for creating beautiful and functional web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
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
