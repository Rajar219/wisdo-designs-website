import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Wisdo Tech | Web Development Company Consultation",
  description: "Get in touch with Wisdo Tech. Request a free consultation for Custom Software Development, Business Website Development, and Digital Marketing Services.",
  alternates: {
    canonical: "https://wisdodesigns.com/contact",
  },
  openGraph: {
    title: "Contact Wisdo Tech | Web Development Company Consultation",
    description: "Get in touch with Wisdo Tech. Request a free consultation for Custom Software Development, Business Website Development, and Digital Marketing Services.",
    url: "https://wisdodesigns.com/contact",
    type: "website",
    images: [
      {
        url: "/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Wisdo Tech - Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Wisdo Tech | Web Development Company Consultation",
    description: "Get in touch with Wisdo Tech. Request a free consultation for Custom Software Development, Business Website Development, and Digital Marketing Services.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}