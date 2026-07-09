"use client";

import { useState } from "react";
import { blogPosts, BlogPost } from "./data";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, Clock, User, RefreshCw } from "lucide-react";

export default function BlogLandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Website Development",
    "Cyber Security",
    "Information Security",
    "Artificial Intelligence",
    "Quantum Computing",
    "Digital Marketing",
    "Business Technology"
  ];

  // Filter posts based on query and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Extract the 3 featured articles
  const featuredArticles = blogPosts.filter((post) => post.featured).slice(0, 3);

  return (
    <div className="w-full flex flex-col pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-48 lg:pb-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Minimalist Hero Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left border-l-4 border-indigo-600 pl-6 sm:pl-8">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase block mb-3">
            WISDO Designs Journal
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none mb-6">
            The Engineering Journal
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed font-light max-w-2xl">
            Developer-driven tutorials, structured web checklists, and systems engineering guides written by our core development team.
          </p>
        </div>

        {/* ================= FEATURED ARTICLES SECTION ================= */}
        {featuredArticles.length > 0 && (
          <section className="mb-20 sm:mb-28">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 sm:mb-10 tracking-tight flex items-center gap-3">
              <span>Featured Articles</span>
              <div className="h-[2px] bg-slate-100 flex-grow rounded-full" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {featuredArticles.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group"
                >
                  {/* Aspect-Ratio Cover Image wrapper */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-50">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-w-768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Metadata */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    {/* Authors and Dates */}
                    <div className="flex flex-wrap gap-y-2 gap-x-4 items-center text-xs font-semibold text-slate-400 mb-4 border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.author}</span>
                      </div>
                      <span className="text-slate-200">•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.date}</span>
                      </div>
                      <span className="text-slate-200">•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-indigo-600 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="mt-auto pt-4 flex items-center justify-between">
                      {post.updatedDate && (
                        <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          <RefreshCw className="w-3 h-3 text-slate-300" />
                          <span>Updated: {post.updatedDate}</span>
                        </div>
                      )}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wider"
                      >
                        Read Post →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ================= ALL ARTICLES SECTION ================= */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 sm:mb-10 tracking-tight flex items-center gap-3">
            <span>All Articles</span>
            <div className="h-[2px] bg-slate-100 flex-grow rounded-full" />
          </h2>

          {/* Filters and Search Bar Container */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-10 pb-6 border-b border-slate-100">
            {/* Category selection chips */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto pb-3 lg:pb-0 scroll-smooth">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-all duration-300 border ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                      : "bg-white text-slate-600 hover:bg-slate-50 border-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Clean Input search */}
            <div className="relative w-full lg:w-80 shrink-0">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white rounded-full pl-12 pr-6 py-3 border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all font-medium text-slate-700 text-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            </div>
          </div>

          {/* Grid listing */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group"
                >
                  {/* Card Cover */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-50">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-w-768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-slate-900/85 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-y-1.5 gap-x-3 items-center text-xs font-semibold text-slate-400 mb-3 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.author}</span>
                      </div>
                      <span className="text-slate-200">•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.date}</span>
                      </div>
                      <span className="text-slate-200">•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-indigo-600 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="mt-auto pt-4 flex items-center justify-between">
                      {post.updatedDate && (
                        <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                          <RefreshCw className="w-3 h-3 text-slate-300" />
                          <span>Updated: {post.updatedDate}</span>
                        </div>
                      )}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wider"
                      >
                        Read Post →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200/60 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-2">No Articles Found</h3>
              <p className="text-slate-500 font-light max-w-sm mx-auto">
                We couldn't find any articles matching your search criteria. Try selecting another category or typing different terms.
              </p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
