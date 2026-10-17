import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Wisdo Tech — Software & Web Solutions. Request a consultation for custom software development, business website development, and tailored digital solutions.",
  alternates: {
    canonical: "https://wisdodesigns.com/contact",
  },
  openGraph: {
    title: "Contact Us | Wisdo Tech",
    description: "Get in touch with Wisdo Tech — Software & Web Solutions.",
    url: "https://wisdodesigns.com/contact",
    type: "website",
    images: [
      {
        url: "/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Wisdo Tech | Software & Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Wisdo Tech",
    description: "Get in touch with Wisdo Tech — Software & Web Solutions.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}