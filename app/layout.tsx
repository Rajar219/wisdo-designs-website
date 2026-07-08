import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "WISDO Designs | Premium Software Agency & Digital Solutions",
    template: "%s | WISDO Designs",
  },
  description: "WISDO Designs engineers premium, scalable websites, mobile applications, billing POS systems, and custom AI chatbot solutions for startups and modern businesses.",
  keywords: [
    "Software Agency", 
    "Web Development", 
    "Mobile Applications", 
    "Business Automation", 
    "AI Chatbots", 
    "Retail POS Billing", 
    "WISDO Designs",
    "Chennai Tech Agency"
  ],
  authors: [{ name: "WISDO Designs", url: "https://wisdodesigns.com" }],
  creator: "WISDO Designs",
  metadataBase: new URL("https://wisdodesigns.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "WISDO Designs | Premium Software Agency & Digital Solutions",
    description: "Scale your business with high-performance web development, custom mobile apps, retail POS software, and intelligent AI chatbot integrations.",
    url: "https://wisdodesigns.com",
    siteName: "WISDO Designs",
    images: [
      {
        url: "/logo new.png",
        width: 1200,
        height: 630,
        alt: "WISDO Designs - Premium Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WISDO Designs | Premium Software & Digital Solutions",
    description: "Scale your business with high-performance web development, custom mobile apps, and intelligent AI chatbots.",
    images: ["/logo new.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-800 bg-slate-50 relative min-h-screen selection:bg-indigo-500/30">
        <div className="bg-mesh" />
        <div className="glow-orb bg-indigo-200/50 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] top-[-100px] left-[-100px] sm:left-[-200px]" />
        <div className="glow-orb bg-blue-100/40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] top-[40%] right-[-50px] sm:right-[-100px]" />
        
        <div className="relative z-10 flex flex-col min-h-[100dvh]">
          <Navbar />
          <main className="flex-1 w-full flex flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}