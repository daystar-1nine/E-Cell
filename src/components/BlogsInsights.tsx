"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Bookmark, BookmarkCheck, X, Share2, Sparkles, CheckCircle2 } from "lucide-react";

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
    id: 1,
    title: "From Idea to Impact: Building Startups That Matter",
    category: "Entrepreneurship",
    date: "August 5, 2026",
    readTime: "5 min read",
    excerpt: "Turning ideas into real-world solutions requires more than just passion. Here's how you can build with purpose.",
    image: "/images/blog_entrepreneurship.png",
    author: "E-Cell Editorial Desk",
    authorRole: "Startup Guidance & Research",
    content: {
      intro: "Every industry-defining company began as a simple observation of an unmet need. In the modern startup ecosystem, execution and purposeful direction separate successful ventures from short-lived experiments.",
      sections: [
        {
          heading: "1. Validate Before You Build",
          body: "One of the most common pitfalls for young founders is spending months developing a product nobody actually wants. Talk to potential users first. Conduct problem-discovery interviews rather than pitch sessions to uncover genuine friction points."
        },
        {
          heading: "2. The MVP Mindset",
          body: "A Minimum Viable Product isn't a half-baked product—it's the fastest vehicle to learn. Strip away non-essential features and focus relentlessly on solving the core problem exceptionally well for your first 100 passionate users."
        },
        {
          heading: "3. Cultivate Sustainable Unit Economics",
          body: "Venture capital might accelerate growth, but sound fundamentals keep a business alive. Understand customer acquisition costs (CAC), lifetime value (LTV), and build a business model that creates value sustainably from day one."
        }
      ],
      keyTakeaways: [
        "Focus on problem discovery before product development.",
        "Launch minimal versions to accelerate user feedback cycles.",
        "Prioritize sustainable economic metrics over vanity vanity signals."
      ]
    }
  },
  {
    id: 2,
    title: "Innovation is a Mindset, Not a Department",
    category: "Innovation",
    date: "July 28, 2026",
    readTime: "4 min read",
    excerpt: "Why fostering curiosity and challenging the status quo can unlock the next big breakthrough.",
    image: "/images/blog_innovation.png",
    author: "SJCEM R&D Cell",
    authorRole: "Innovation & Technology Guild",
    content: {
      intro: "True innovation rarely happens in isolated laboratory silos. It stems from a daily culture of questioning assumptions, encouraging cross-disciplinary experimentation, and embracing calculated risks.",
      sections: [
        {
          heading: "Cross-Pollination of Ideas",
          body: "The most novel solutions occur at the intersection of diverse disciplines—combining AI with agricultural tech, or clean energy with smart logistics. Encouraging engineers to collaborate with designers and business strategists produces breakthrough insights."
        },
        {
          heading: "Embracing Constructive Failure",
          body: "If team members fear failure, they will default to incremental improvements. High-impact innovation requires creating a safe testing ground where failed experiments are treated as valuable learning data points."
        }
      ],
      keyTakeaways: [
        "Foster cross-functional collaboration across engineering and business disciplines.",
        "Normalize intelligent experimentation and iterative prototyping.",
        "Question industry incumbents and status-quo workflows."
      ]
    }
  },
  {
    id: 3,
    title: "The Power of Community: Growing Together",
    category: "Community",
    date: "July 18, 2026",
    readTime: "6 min read",
    excerpt: "Great things happen when like-minded people come together to learn, create, and inspire.",
    image: "/images/blog_community.png",
    author: "Student Network Lead",
    authorRole: "Community & Engagement Team",
    content: {
      intro: "Entrepreneurship can be a lonely journey without a strong support network. Surrounding yourself with peers, mentors, and industry advisors creates a catalyst for growth and resilience.",
      sections: [
        {
          heading: "Peer Mentorship & Accountability",
          body: "Having founders at a similar stage allows for honest peer feedback, shared resources, and mutual motivation during high-stress product builds or funding rounds."
        },
        {
          heading: "Leveraging Alumni Networks",
          body: "SJCEM's vast network of industry professionals and alumni offers invaluable guidance, early pilot opportunities, and pitch validation for student-led startups."
        }
      ],
      keyTakeaways: [
        "Build genuine relationships with peer founders and mentors.",
        "Actively participate in hackathons, incubator cohorts, and pitch sessions.",
        "Give back to the community as your startup scales."
      ]
    }
  },
  {
    id: 4,
    title: "What We Learned from Startup Weekend 2026",
    category: "Events",
    date: "July 10, 2026",
    readTime: "3 min read",
    excerpt: "Key takeaways, memorable moments, and the winning ideas that stood out.",
    image: "/images/blog_events.png",
    author: "Events Core Team",
    authorRole: "E-Cell Event Organizers",
    content: {
      intro: "Over 54 intense hours, 200+ student participants turned rough concepts into viable pitch-ready prototypes during SJCEM's flagship Startup Weekend 2026.",
      sections: [
        {
          heading: "Rapid Prototyping Under Time Pressure",
          body: "Teams were forced to distill their pitch deck to core values, build working UI prototypes, and formulate business revenue models within two days—proving how much speed matters in startup culture."
        },
        {
          heading: "Mentor Feeback is Gold",
          body: "Direct feedback from seasoned venture capitalists and founders helped teams pivot quickly before final pitches to jury panels."
        }
      ],
      keyTakeaways: [
        "Speed of execution beats perfection in early stages.",
        "Crisp, storytelling-driven pitches resonate best with investors.",
        "Collaboration under constraints brings out peak creativity."
      ]
    }
  }
];

export default function BlogsInsights() {
  const [activeTab, setActiveTab] = useState<"all" | "myReads">("all");
  const [savedBlogIds, setSavedBlogIds] = useState<number[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
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
    <section id="blogs-insights" className="relative min-h-[100dvh] w-full py-20 lg:py-28 z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
        
        {/* Header Section */}
        <div className="mb-10 md:mb-14">
          <motion.h1 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-inter text-white tracking-tight mb-3"
          >
            Blogs & Insights
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 font-outfit mb-8 max-w-xl"
          >
            Stories, insights, and ideas from the E-Cell community.
          </motion.p>

          {/* Navigation Pill Switcher */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-1.5 rounded-full inline-flex gap-1.5 shadow-lg"
          >
            <button
              onClick={() => setActiveTab("all")}
              className={`relative px-6 sm:px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "all"
                  ? "text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeTab === "all" && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                All Blogs
              </span>
            </button>

            <button
              onClick={() => setActiveTab("myReads")}
              className={`relative px-6 sm:px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "myReads"
                  ? "text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeTab === "myReads" && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                My Reads
                {savedBlogIds.length > 0 && (
                  <span className="bg-white/20 text-white px-2 py-0.5 text-xs rounded-full font-bold">
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
            className="text-center py-16 bg-slate-900/40 rounded-3xl border border-white/10 p-8"
          >
            <Bookmark className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 font-inter">No saved reads yet</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-6 font-outfit">
              Click the bookmark icon on any blog card to save articles to your personal reading list.
            </p>
            <button
              onClick={() => setActiveTab("all")}
              className="px-6 py-2.5 bg-pink-600 hover:bg-pink-500 text-white rounded-full text-sm font-semibold transition-all"
            >
              Explore All Blogs
            </button>
          </motion.div>
        )}

        {/* Blogs Stack / Grid */}
        <div className="space-y-6 sm:space-y-8">
          <AnimatePresence mode="popLayout">
            {displayedBlogs.map((blog, index) => {
              const isSaved = savedBlogIds.includes(blog.id);
              return (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                  onClick={() => setSelectedBlog(blog)}
                  className="group relative bg-[#2a1d2e]/60 hover:bg-[#332238]/70 backdrop-blur-md rounded-3xl border border-white/10 hover:border-pink-500/40 p-4 sm:p-5 md:p-6 shadow-xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row gap-5 md:gap-8 items-stretch overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="w-full md:w-5/12 aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden relative shadow-md shrink-0 bg-slate-900">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Container */}
                  <div className="w-full md:w-7/12 flex flex-col justify-between py-1">
                    <div>
                      {/* Category Badge & Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="bg-[#be185d] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          {blog.category}
                        </span>

                        <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm font-outfit">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-pink-400" />
                            {blog.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-pink-400" />
                            {blog.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl font-bold font-inter text-white mb-2 sm:mb-3 leading-snug group-hover:text-pink-300 transition-colors">
                        {blog.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-slate-300 text-sm sm:text-base font-outfit leading-relaxed mb-4 line-clamp-2 md:line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedBlog(blog);
                        }}
                        className="text-pink-400 group-hover:text-pink-300 font-semibold text-sm sm:text-base flex items-center gap-1.5 transition-all group-hover:gap-2"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-2">
                        {/* Share Button */}
                        <button
                          onClick={(e) => handleShare(blog, e)}
                          title="Share article link"
                          className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors relative"
                        >
                          <Share2 className="w-4 h-4" />
                          {copiedId === blog.id && (
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-[10px] px-2 py-0.5 rounded shadow">
                              Copied!
                            </span>
                          )}
                        </button>

                        {/* Bookmark Button */}
                        <button
                          onClick={(e) => toggleSaveBlog(blog.id, e)}
                          title={isSaved ? "Remove from My Reads" : "Save to My Reads"}
                          className={`p-2 rounded-full transition-colors ${
                            isSaved 
                              ? "text-pink-400 bg-pink-500/20" 
                              : "text-slate-400 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {isSaved ? (
                            <BookmarkCheck className="w-4 h-4 fill-pink-400" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Reader Overlay Modal */}
        <AnimatePresence>
          {selectedBlog && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#1e1424] border border-white/15 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative text-white"
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-[#1e1424]/90 backdrop-blur-md z-20 px-6 py-4 border-b border-white/10 flex items-center justify-between">
                  <span className="bg-[#be185d] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {selectedBlog.category}
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleSaveBlog(selectedBlog.id)}
                      className={`p-2 rounded-full transition-colors ${
                        savedBlogIds.includes(selectedBlog.id)
                          ? "text-pink-400 bg-pink-500/20"
                          : "text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      {savedBlogIds.includes(selectedBlog.id) ? (
                        <BookmarkCheck className="w-5 h-5 fill-pink-400" />
                      ) : (
                        <Bookmark className="w-5 h-5" />
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedBlog(null)}
                      className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/15 rounded-full transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Hero Banner Image */}
                <div className="w-full h-56 sm:h-72 relative bg-slate-950">
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1424] via-transparent to-transparent" />
                </div>

                {/* Article Body Content */}
                <div className="px-6 sm:px-10 py-6 space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-4xl font-bold font-inter text-white mb-4 leading-snug">
                      {selectedBlog.title}
                    </h2>

                    <div className="flex items-center gap-4 text-slate-400 text-sm font-outfit pb-6 border-b border-white/10">
                      <span>By <strong className="text-pink-300">{selectedBlog.author}</strong></span>
                      <span>•</span>
                      <span>{selectedBlog.date}</span>
                      <span>•</span>
                      <span>{selectedBlog.readTime}</span>
                    </div>
                  </div>

                  {/* Intro */}
                  <p className="text-lg sm:text-xl text-slate-200 font-outfit leading-relaxed font-light italic">
                    "{selectedBlog.content.intro}"
                  </p>

                  {/* Sections */}
                  <div className="space-y-6 pt-2">
                    {selectedBlog.content.sections.map((sec, idx) => (
                      <div key={idx} className="space-y-2">
                        <h3 className="text-xl font-bold text-white font-inter flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-pink-400 shrink-0" />
                          {sec.heading}
                        </h3>
                        <p className="text-slate-300 font-outfit text-base leading-relaxed">
                          {sec.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Key Takeaways Box */}
                  <div className="bg-pink-950/40 border border-pink-500/30 rounded-2xl p-5 sm:p-6 mt-8">
                    <h4 className="text-lg font-bold text-pink-300 font-inter mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-pink-400" />
                      Key Takeaways
                    </h4>
                    <ul className="space-y-2 text-slate-200 text-sm sm:text-base font-outfit">
                      {selectedBlog.content.keyTakeaways.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-pink-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Author Box */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 flex items-center justify-center text-white font-bold font-inter text-lg">
                      {selectedBlog.author.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-inter text-base">{selectedBlog.author}</h4>
                      <p className="text-slate-400 text-xs font-outfit">{selectedBlog.authorRole}</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
