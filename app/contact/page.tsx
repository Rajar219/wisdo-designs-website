import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact WISDO Designs - Get a Free Consultation",
  description: "Get in touch with our tech experts in India. Discuss Web Design, Website Development, Web Hosting, Mobile App Development, and Digital Marketing projects.",
  alternates: {
    canonical: "https://wisdodesigns.com/contact",
  },
  openGraph: {
    title: "Contact WISDO Designs - Get a Free Consultation",
    description: "Get in touch with our tech experts in India. Discuss Web Design, Website Development, Web Hosting, Mobile App Development, and Digital Marketing projects.",
    url: "https://wisdodesigns.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact WISDO Designs - Get a Free Consultation",
    description: "Get in touch with our tech experts in India. Discuss Web Design, Website Development, Web Hosting, Mobile App Development, and Digital Marketing projects.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}