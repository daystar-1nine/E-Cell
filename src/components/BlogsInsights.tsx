"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, ChevronUp, Bookmark, BookmarkCheck, Share2, Sparkles, CheckCircle2 } from "lucide-react";

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  author: string;
  authorRole: string;
  content: {
    intro: string;
    sections: { heading: string; body: string }[];
    keyTakeaways: string[];
  };
}

const blogsData: BlogPost[] = [
  {
    "id": 1,
    "title": "BlackBerry had the customers, the technology, the brand, and the market. So how did it lose all four?",
    "category": "Business Strategy",
    "date": "August 23, 2026",
    "readTime": "3 min read",
    "excerpt": "A product can be successful today and still become irrelevant tomorrow. Why evolving with the market is critical for survival.",
    "image": "/images/BlackBerrys.jpg",
    "author": "E-Cell, IIT Bombay",
    "authorRole": "Entrepreneurship Cell",
    "content": {
      "intro": "At its peak, BlackBerry was one of the strongest names in smartphones. Its edge was clear security, reliability, enterprise communication and productivity. It built a loyal customer base around exactly these strengths. But then, the market started changing.",
      "sections": [
        {
          "heading": "The Market Shift",
          "body": "A smartphone was becoming more than a device for emails and calls. Customers wanted better interfaces, richer applications, personalization and an ecosystem that could do much more."
        },
        {
          "heading": "Too Little, Too Late",
          "body": "BlackBerry did try to respond. It introduced touchscreen devices, BlackBerry 10 and new enterprise solutions. But while the company was adapting, the market was moving even faster. Its product portfolio started ageing, customer expectations shifted, and stronger ecosystems began pulling users away."
        }
      ],
      "keyTakeaways": [
        "A product can be successful today and still become irrelevant tomorrow.",
        "Staying successful isn’t about protecting what worked yesterday; it’s about knowing what needs to change before the market forces you to.",
        "Keep evolving your product as your customers, technology, and market evolve."
      ]
    }
  },
  {
    "id": 2,
    "title": "What if Tesla had tried to compete on price from Day 1?",
    "category": "Startup Strategy",
    "date": "August 23, 2026",
    "readTime": "3 min read",
    "excerpt": "Comparing the early strategies of Tesla and SpaceX to show why the best approach is the one that fits your specific problem.",
    "image": "/images/Tesla.jpg",
    "author": "E-Cell, IIT Bombay",
    "authorRole": "Entrepreneurship Cell",
    "content": {
      "intro": "What if Tesla had tried to compete on price from Day 1? It might have never become Tesla. That’s what makes its journey so interesting when you put it next to SpaceX.",
      "sections": [
        {
          "heading": "Premium Positioning vs. Cost Reduction",
          "body": "Tesla chose to go premium first - build an expensive product, prove the technology, create demand, and gradually move toward the mass market. SpaceX took a different bet. Instead of asking, 'How do we sell more rockets?', it asked: 'Why does a rocket have to cost this much in the first place?'"
        },
        {
          "heading": "Different Paths to Scale",
          "body": "One focused on creating a path to scale through a premium product. The other challenged the economics of an entire industry through cost reduction, rapid experimentation and first-principles thinking."
        }
      ],
      "keyTakeaways": [
        "You don’t need to copy a successful startup’s strategy; you need to understand the problem your startup is actually solving.",
        "Your market may reward premium positioning, or your industry may demand radical cost reduction.",
        "The best startup strategy isn’t the most popular one, it’s the one that fits the problem."
      ]
    }
  },
  {
    "id": 3,
    "title": "P.C. Mustafa’s first big business lesson came from customers returning his product.",
    "category": "Startup Lessons",
    "date": "August 23, 2026",
    "readTime": "3 min read",
    "excerpt": "How iD Fresh Foods turned initial product failures into a lesson on adaptation, trust, and long-term growth.",
    "image": "/images/ID_Fresh.jpg",
    "author": "E-Cell, IIT Bombay",
    "authorRole": "Entrepreneurship Cell",
    "content": {
      "intro": "When iD Fresh Foods was just starting out, a large majority of the batter packets were coming back. For most founders, that would be a reason to stop. For Mustafa, it became a reason to rethink. The business had started with just ₹50,000, a 50 sq. ft. kitchen and a simple idea make better-quality idli and dosa batter than what customers were already getting.",
      "sections": [
        {
          "heading": "Listening to the Market",
          "body": "Having a good idea wasn’t enough. They listened to the market, adapted their selling approach, reduced wastage and kept improving the product. They spent months perfecting the batter and years refining the packaging."
        },
        {
          "heading": "Building Trust Over Time",
          "body": "They understood something early: A business doesn’t grow just because people buy once. It grows when people trust the product enough to buy it again."
        }
      ],
      "keyTakeaways": [
        "Limited resources are a constraint, but refusing to adapt is a choice.",
        "Start with a real problem. Listen closely. Adapt quickly. Build trust patiently.",
        "Sometimes, a big business begins with nothing more than a small problem worth solving well."
      ]
    }
  },
  // {
  //   id: 4,
  //   title: "What We Learned from Startup Weekend 2026",
  //   category: "Events",
  //   date: "July 10, 2026",
  //   readTime: "3 min read",
  //   excerpt: "Key takeaways, memorable moments, and the winning ideas that stood out.",
  //   image: "/images/blog_events.png",
  //   author: "Events Core Team",
  //   authorRole: "E-Cell Event Organizers",
  //   content: {
  //     intro: "Over 54 intense hours, 200+ student participants turned rough concepts into viable pitch-ready prototypes during SJCEM's flagship Startup Weekend 2026.",
  //     sections: [
  //       {
  //         heading: "Rapid Prototyping Under Time Pressure",
  //         body: "Teams were forced to distill their pitch deck to core values, build working UI prototypes, and formulate business revenue models within two days—proving how much speed matters in startup culture."
  //       },
  //       {
  //         heading: "Mentor Feedback is Gold",
  //         body: "Direct feedback from seasoned venture capitalists and founders helped teams pivot quickly before final pitches to jury panels."
  //       }
  //     ],
  //     keyTakeaways: [
  //       "Speed of execution beats perfection in early stages.",
  //       "Crisp, storytelling-driven pitches resonate best with investors.",
  //       "Collaboration under constraints brings out peak creativity."
  //     ]
  //   }
  // }
];

export default function BlogsInsights() {
  const [activeTab, setActiveTab] = useState<"all" | "myReads">("all");
  const [savedBlogIds, setSavedBlogIds] = useState<number[]>([]);
  const [expandedBlogIds, setExpandedBlogIds] = useState<number[]>([]);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Load saved blogs from localStorage on client render
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ecell_my_reads");
      if (saved) {
        setSavedBlogIds(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Collapse all expanded cards when navigating away via nav links
  useEffect(() => {
    const handleCollapseAll = () => {
      setExpandedBlogIds([]);
    };
    window.addEventListener("close-blog-modal", handleCollapseAll);
    return () => window.removeEventListener("close-blog-modal", handleCollapseAll);
  }, []);

  const toggleSaveBlog = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedBlogIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("ecell_my_reads", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  const toggleExpandBlog = (id: number) => {
    setExpandedBlogIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const displayedBlogs = activeTab === "all"
    ? blogsData
    : blogsData.filter((blog) => savedBlogIds.includes(blog.id));

  const handleShare = (blog: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + "#blogs-insights");
      setCopiedId(blog.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section id="blogs-insights" className="relative min-h-[100dvh] w-full py-16 sm:py-20 lg:py-28 z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">

        {/* Header Section */}
        <div className="mb-8 sm:mb-12 md:mb-14">
          <div className="mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
            <div className="h-[2px] w-8 sm:w-12 bg-[var(--color-primary)]"></div>
            <span className="text-[var(--color-primary)] text-label-caps">Editorial & Insights</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-display-md lg:text-display-lg font-bold font-inter text-[var(--color-text-main)] mb-2 sm:mb-3"
          >
            Blogs & Insights
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-[var(--color-text-muted)] font-inter mb-6 sm:mb-8 max-w-xl"
          >
            Stories, insights, and ideas from the E-Cell community.
          </motion.p>

          {/* Navigation Pill Switcher */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[var(--color-surface)] border border-hairline p-1 sm:p-1.5 rounded-full inline-flex gap-1 sm:gap-1.5 shadow-sm max-w-full overflow-x-auto"
          >
            <button
              onClick={() => setActiveTab("all")}
              className={`relative px-5 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 min-h-[40px] flex items-center justify-center ${activeTab === "all"
                ? "text-[var(--color-text-inverse)] shadow-md"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
                }`}
            >
              {activeTab === "all" && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-[var(--color-primary)] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                All Blogs
              </span>
            </button>

            <button
              onClick={() => setActiveTab("myReads")}
              className={`relative px-5 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 min-h-[40px] flex items-center justify-center ${activeTab === "myReads"
                ? "text-[var(--color-text-inverse)] shadow-md"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
                }`}
            >
              {activeTab === "myReads" && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-[var(--color-primary)] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                My Reads
                {savedBlogIds.length > 0 && (
                  <span className="bg-black/20 dark:bg-white/20 text-[var(--color-text-inverse)] px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs rounded-full font-bold">
                    {savedBlogIds.length}
                  </span>
                )}
              </span>
            </button>
          </motion.div>
        </div>

        {/* Empty state for My Reads */}
        {activeTab === "myReads" && displayedBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 sm:py-16 bg-[var(--color-surface)] rounded-2xl border border-hairline p-6 sm:p-8"
          >
            <Bookmark className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-text-muted)] mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-main)] mb-2 font-inter">No saved reads yet</h3>
            <p className="text-[var(--color-text-muted)] text-xs sm:text-sm max-w-md mx-auto mb-5 sm:mb-6 font-inter">
              Click the bookmark icon on any blog card to save articles to your personal reading list.
            </p>
            <button
              onClick={() => setActiveTab("all")}
              className="px-5 sm:px-6 py-2.5 bg-[var(--color-primary)] hover:opacity-90 text-[var(--color-text-inverse)] rounded-full text-xs sm:text-sm font-semibold transition-all min-h-[44px]"
            >
              Explore All Blogs
            </button>
          </motion.div>
        )}

        {/* Blogs Stack / Cards */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          <AnimatePresence mode="popLayout">
            {displayedBlogs.map((blog, index) => {
              const isSaved = savedBlogIds.includes(blog.id);
              const isExpanded = expandedBlogIds.includes(blog.id);

              return (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  layout
                  className="group relative bg-[var(--color-surface)] hover:bg-[var(--color-surface-elevated)] rounded-2xl border border-hairline hover:border-[var(--color-primary)] p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 flex flex-col gap-5 sm:gap-6 overflow-hidden"
                >
                  {/* Summary Row (Image + Meta + Read More button) */}
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start">
                    {/* Cover Image */}
                    <div className="w-full md:w-5/12 aspect-[16/10] sm:aspect-[16/9] md:aspect-[4/3] rounded-xl overflow-hidden relative shadow-sm shrink-0 bg-[var(--color-surface-elevated)] border border-hairline">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Meta & Summary Details */}
                    <div className="w-full md:w-7/12 flex flex-col justify-between self-stretch py-1">
                      <div>
                        {/* Category Badge & Meta */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 sm:mb-3">
                          <span className="bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                            {blog.category}
                          </span>

                          <div className="flex items-center gap-2.5 sm:gap-3 text-[var(--color-text-muted)] text-[11px] sm:text-xs md:text-sm font-inter">
                            <span className="flex items-center gap-1 sm:gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                              {blog.date}
                            </span>
                            <span className="flex items-center gap-1 sm:gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                              {blog.readTime}
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-inter text-[var(--color-text-main)] mb-2 sm:mb-3 leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                          {blog.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-[var(--color-text-muted)] text-xs sm:text-sm md:text-base font-inter leading-relaxed mb-4">
                          {blog.excerpt}
                        </p>
                      </div>

                      {/* Card Action Controls */}
                      <div className="flex items-center justify-between pt-3 border-t border-hairline mt-auto">
                        <button
                          onClick={() => toggleExpandBlog(blog.id)}
                          className="text-[var(--color-primary)] hover:opacity-80 font-semibold text-xs sm:text-sm md:text-base flex items-center gap-1.5 transition-all group-hover:gap-2 min-h-[40px]"
                        >
                          {isExpanded ? (
                            <>
                              Read Less
                              <ChevronUp className="w-4 h-4 text-[var(--color-primary)]" />
                            </>
                          ) : (
                            <>
                              Read More
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>

                        <div className="flex items-center gap-1.5 sm:gap-2">
                          {/* LinkedIn Button */}
                          <a
                            href="https://www.linkedin.com/in/ecell-sjcem?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-[var(--color-background)] border border-hairline flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                          </a>

                          {/* Share Button */}
                          <button
                            onClick={(e) => handleShare(blog, e)}
                            title="Share article link"
                            className="p-2 sm:p-2.5 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:bg-[var(--color-surface-elevated)] rounded-full transition-colors relative min-w-[36px] min-h-[36px] flex items-center justify-center"
                            aria-label="Share blog"
                          >
                            <Share2 className="w-4 h-4" />
                            {copiedId === blog.id && (
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-[10px] px-2 py-0.5 rounded shadow font-semibold">
                                Copied!
                              </span>
                            )}
                          </button>

                          {/* Bookmark Button */}
                          <button
                            onClick={(e) => toggleSaveBlog(blog.id, e)}
                            title={isSaved ? "Remove from My Reads" : "Save to My Reads"}
                            className={`p-2 sm:p-2.5 rounded-full transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center ${isSaved
                              ? "text-[var(--color-primary)] bg-[var(--color-surface-elevated)] border border-[var(--color-primary)]/40"
                              : "text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:bg-[var(--color-surface-elevated)]"
                              }`}
                            aria-label={isSaved ? "Remove bookmark" : "Bookmark article"}
                          >
                            {isSaved ? (
                              <BookmarkCheck className="w-4 h-4 fill-[var(--color-primary)]" />
                            ) : (
                              <Bookmark className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Full Article Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden pt-5 sm:pt-6 border-t border-hairline space-y-5 sm:space-y-6 text-[var(--color-text-main)]"
                      >
                        {/* Introduction Quote */}
                        <div className="bg-[var(--color-surface-elevated)] border-l-4 border-[var(--color-primary)] p-3.5 sm:p-4 rounded-r-xl">
                          <p className="text-sm sm:text-base md:text-lg text-[var(--color-text-main)] font-inter leading-relaxed italic">
                            "{blog.content.intro}"
                          </p>
                        </div>

                        {/* Article Sections */}
                        <div className="space-y-4 sm:space-y-5">
                          {blog.content.sections.map((sec, idx) => (
                            <div key={idx} className="space-y-1.5 sm:space-y-2">
                              <h4 className="text-base sm:text-lg font-bold text-[var(--color-text-main)] font-inter flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                                {sec.heading}
                              </h4>
                              <p className="text-[var(--color-text-muted)] font-inter text-xs sm:text-sm md:text-base leading-relaxed">
                                {sec.body}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Key Takeaways Box */}
                        <div className="bg-[var(--color-surface-elevated)] border border-hairline rounded-xl p-3.5 sm:p-5">
                          <h4 className="text-sm sm:text-base font-bold text-[var(--color-primary)] font-inter mb-2.5 sm:mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[var(--color-primary)]" />
                            Key Takeaways
                          </h4>
                          <ul className="space-y-1.5 sm:space-y-2 text-[var(--color-text-muted)] text-xs sm:text-sm font-inter">
                            {blog.content.keyTakeaways.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[var(--color-primary)] font-bold">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Author Footer & Read Less Button */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-4 border-t border-hairline">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--color-surface-elevated)] border border-hairline text-[var(--color-primary)] flex items-center justify-center font-bold font-inter text-xs sm:text-sm">
                              {blog.author.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <h4 className="text-[var(--color-text-main)] font-bold font-inter text-xs sm:text-sm">{blog.author}</h4>
                              <p className="text-[var(--color-text-muted)] text-[11px] sm:text-xs font-inter">{blog.authorRole}</p>
                            </div>
                          </div>

                          <button
                            onClick={() => toggleExpandBlog(blog.id)}
                            className="px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[var(--color-surface-elevated)] hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)] border border-hairline text-[var(--color-text-main)] rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all min-h-[38px]"
                          >
                            Read Less
                            <ChevronUp className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
