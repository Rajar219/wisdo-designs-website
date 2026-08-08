import { blogPosts } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, MessageSquare, Share2, Facebook, Twitter, Linkedin, Send, RefreshCw } from "lucide-react";
import { Metadata } from "next";
import ArticleFaq from "../../components/articleFaq";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | WISDO Designs",
      description: "The requested blog article could not be found.",
    };
  }

  return {
    title: `${post.title} | WISDO Designs Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://wisdodesigns.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://wisdodesigns.com/blog/${post.slug}`,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

// Generate static pathways for pre-building
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostReaderPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Safe ISO date formatting for Google Schema
  let isoDate = "";
  try {
    isoDate = new Date(post.date).toISOString().split("T")[0];
  } catch (e) {
    isoDate = "2026-07-09";
  }

  const schemas: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "datePublished": isoDate,
      "author": {
        "@type": "Person",
        "name": post.author,
      },
      "publisher": {
        "@type": "Organization",
        "name": "WISDO Designs",
        "logo": {
          "@type": "ImageObject",
          "url": "https://wisdodesigns.com/logo-transparent.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://wisdodesigns.com/blog/${post.slug}`,
      },
    }
  ];

  if (post.faq && post.faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": post.faq.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
  }

  return (
    <article className="w-full flex flex-col pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-48 lg:pb-36 bg-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-wider group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-lg mb-6">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6 sm:mb-8">
            {post.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm font-semibold text-slate-500 pb-8 border-b border-slate-200/60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-extrabold flex items-center justify-center text-xs">
                {post.author.charAt(0)}
              </div>
              <span>Written by {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4.5 h-4.5 text-slate-400" />
              <span>Published: {post.date}</span>
            </div>
            {post.updatedDate && (
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-slate-400" />
                <span>Updated: {post.updatedDate}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Clock className="w-4.5 h-4.5 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Real Cover Image Panel */}
        <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 mb-12 sm:mb-16 bg-slate-50">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-w-1024px) 100vw, 1024px"
          />
        </div>

        {/* Reading Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-12">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-slate-700 font-light text-base sm:text-lg leading-relaxed break-words"
                  >
                    {para}
                  </p>
                ))}
              </section>
            ))}

            {/* Tag Cloud */}
            <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-2.5">
              {post.keywords.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100/80 border border-slate-200/40 text-slate-500 text-xs font-bold tracking-wide whitespace-nowrap"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Article Specific FAQ */}
            <ArticleFaq faqs={post.faq} />
          </div>

          {/* Sidebar CTA Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 space-y-6 w-full">
            {/* Share Post Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-800 text-base tracking-tight flex items-center gap-2">
                <Share2 className="w-4 h-4 text-indigo-600" />
                Share this Article
              </h4>
              <div className="grid grid-cols-4 gap-2">
                <button
                  className="h-11 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 border border-slate-100 flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  className="h-11 rounded-xl bg-slate-50 hover:bg-sky-50 text-slate-500 hover:text-sky-500 border border-slate-100 flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  className="h-11 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 border border-slate-100 flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
                <button
                  className="h-11 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-500 hover:text-emerald-500 border border-slate-100 flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Share via Email"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Bespoke Project CTA Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-sm relative overflow-hidden group">
              <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-4">
                Need a Custom Solution?
              </h4>
              <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">
                Our engineering team at WISDO Designs builds high-performance website developments, bespoke business systems, and mobile applications customized exactly to your workspace operations.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-indigo-700 transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}
