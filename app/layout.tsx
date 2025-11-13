import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LightRays from "./LightRays";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AUTOCIAL DIGITAL",
  description: "Transforming Businesses Through Smart Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" fixed top-0 left-0 w-screen z-[-1]">
          <LightRays
            raysOrigin="top-center"
            raysColor="#c402ef"
            raysSpeed={0.5}
            lightSpread={20}
            rayLength={0.8}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays fixed top-0 left-0 w-full h-full opacity-50"
          />

        </div>
        {children}
      </body>
    </html>
  );
}
