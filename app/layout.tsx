import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { IBM_Plex_Serif, Mona_Sans} from "next/font/google";

import "./globals.css";
import Navbar from "../components/Navbar";
import { CLERK_AUTH_APPEARANCE_OVERRIDE } from "@/lib/constants";

const ibmPlexSerif= IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  display: 'swap'
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ['latin'],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Bookverse AI",
  description: "An AI-powered universe where you can explore, interact, and converse with books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSerif.variable} ${monaSans.variable} relative font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider appearance={{ elements: CLERK_AUTH_APPEARANCE_OVERRIDE }}>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
