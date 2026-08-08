import { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote | Web Development Pricing | Wisdo Tech",
  description: "Request a custom quote for Website Development, Custom Software, or Digital Marketing. Fill out our form for an accurate estimate.",
  alternates: {
    canonical: "https://wisdodesigns.com/quote",
  },
  openGraph: {
    title: "Request a Quote | Wisdo Tech",
    description: "Request a custom quote for Website Development, Custom Software, or Digital Marketing.",
    url: "https://wisdodesigns.com/quote",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Request a Quote | Wisdo Tech",
    description: "Request a custom quote for Website Development, Custom Software, or Digital Marketing.",
  },
};

export default function QuotePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
