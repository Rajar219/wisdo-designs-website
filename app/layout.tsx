import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Wisdo Tech | Digital Solutions for Growing Businesses",
    template: "%s | Wisdo Tech",
  },
  description: "Wisdo Tech is a professional Software Development and Website Design company. We provide Custom Software Development, Business Website Development, and Digital Marketing Services.",
  keywords: [
    "Wisdo Tech",
    "Software Company",
    "Web Development Company",
    "Custom Software Development",
    "Website Development",
    "Website Design",
    "Business Website Development",
    "POS Software",
    "Digital Marketing Services",
    "Software Development"
  ],
  authors: [{ name: "Wisdo Tech", url: "https://wisdodesigns.com" }],
  creator: "Wisdo Tech",
  publisher: "Wisdo Tech",
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
    title: "Wisdo Tech | Digital Solutions for Growing Businesses",
    description: "Wisdo Tech — Digital Solutions for Growing Businesses. We build software, websites and digital experiences that help businesses operate, connect with customers and grow.",
    url: "https://wisdodesigns.com",
    siteName: "Wisdo Tech",
    images: [
      {
        url: "/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Wisdo Tech - Digital Solutions for Growing Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdo Tech | Digital Solutions for Growing Businesses",
    description: "Wisdo Tech — Digital Solutions for Growing Businesses. We build software, websites and digital experiences that help businesses operate, connect with customers and grow.",
    images: ["/logo-transparent.png"],
  },
  verification: {
    google: "cYW51Yz324qyEHlgyr92fYI9WIaFToxBNnnwXSlI8rg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Wisdo Tech",
                "url": "https://wisdodesigns.com",
                "logo": "https://wisdodesigns.com/logo-transparent.png",
                "sameAs": [
                  "https://instagram.com/wisdo_designs"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9787362199",
                  "contactType": "customer service",
                  "email": "wisdodesigns@gmail.com",
                  "areaServed": "IN",
                  "availableLanguage": ["en"]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Wisdo Tech",
                "url": "https://wisdodesigns.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://wisdodesigns.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Wisdo Tech",
                "description": "Custom Software Development and Web Development Company providing Business Website Development, POS Software, and Digital Marketing Services.",
                "image": "https://wisdodesigns.com/logo-transparent.png",
                "@id": "https://wisdodesigns.com/#localbusiness",
                "url": "https://wisdodesigns.com",
                "telephone": "+919787362199",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Chennai",
                  "addressRegion": "Tamil Nadu",
                  "postalCode": "600001",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 13.0827,
                  "longitude": 80.2707
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              }
            ])
          }}
        />
      </head>
      <body className="antialiased text-slate-800 bg-slate-50 relative min-h-screen selection:bg-indigo-500/30 font-sans">
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