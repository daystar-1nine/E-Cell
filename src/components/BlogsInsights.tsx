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
  linkedinUrl?: string;
  content: {
    intro: string;
    sections: { heading: string; body: string }[];
    keyTakeaways: string[];
  };
}

const blogsData: BlogPost[] = [
  {
    "id": 9,
    "title": "10 Startup Ideas Every College Student Can Start With Low Investment",
    "category": "Student Entrepreneurship & Ideation",
    "date": "October 5, 2026",
    "readTime": "5 min read",
    "excerpt": "From campus digital services and AI-powered tools to niche merchandise and study resources: 10 low-investment, high-potential startup ideas students can launch right from college.",
    "image": "/images/blog_college_startup_ideas.jpg",
    "author": "E-Cell, SJCEM",
    "authorRole": "Campus Entrepreneurship Guide",
    "content": {
      "intro": "Entrepreneurship is often associated with large investments, offices, employees, and complicated business plans. But the reality is different. Many businesses can begin with nothing more than a laptop, an internet connection, a useful skill, and the willingness to solve a real problem.\n\nFor college students, this creates a unique opportunity. College itself can become a testing ground for business ideas. You already have access to a community of students, teachers, clubs, events, and everyday problems that can inspire potential businesses.\n\nHere are 10 low-investment startup ideas that college students can explore.",
      "sections": [
        {
          "heading": "1. Campus Digital Services",
          "body": "Every college has students and clubs who need help creating presentations, resumes, posters, certificates, event invitations, social media posts, and other digital content.\n\nA student with skills in Canva, Figma, Photoshop, video editing, or presentation design can turn these skills into a small campus service.\n\nWhat you can offer:\n• Presentation design & pitch deck formatting\n• Resume and portfolio design for placement season\n• Event posters & club announcements\n• Social media creatives & banners\n• Certificates and invitations\n• Basic video editing & promo snippets\n\nInvestment: Very low — primarily a laptop and design software.\n\nThe key is not simply offering 'design services,' but building a reputation for fast delivery and consistent quality."
        },
        {
          "heading": "2. AI-Powered Student Tools",
          "body": "Artificial intelligence has created opportunities for students to build small tools that solve specific problems.\n\nInstead of trying to build the next massive AI platform, students can focus on a small, clearly defined problem.\n\nPromising opportunities include:\n• Assignment organization & task trackers\n• Lecture-note summarization & transcription\n• Automated quiz & flashcard generation\n• Smart study planners & exam countdowns\n• Resume improvement & ATS audit tools\n• College FAQ & department bot assistants\n• Personalized syllabus revision tools\n\nA student with basic programming knowledge can combine an AI API with a simple web application to create an MVP.\n\nThe important lesson: Don't build AI just because it is popular. Build something useful where AI actually solves a genuine student problem."
        },
        {
          "heading": "3. Social Media Management for Small Businesses",
          "body": "Many local businesses want to maintain an online presence but don't have the time or skills to create content consistently.\n\nCollege students who understand Instagram, short-form video, Canva, and basic marketing can provide social media management services.\n\nYou can help local businesses with:\n• Instagram posts and carousels\n• Reels and short-form video production\n• Content calendars and planning\n• Basic on-site smartphone photography\n• Engaging captions and local hashtags\n• Promotional campaigns and festive sales\n• Google Business Profile updates and reviews\n\nInstead of charging for individual posts, create monthly service packages (e.g. ₹5,000–₹15,000/month). This turns freelance gigs into a predictable, recurring-revenue business."
        },
        {
          "heading": "4. Campus Merchandise Business",
          "body": "College students love products that represent their college, department, sports teams, clubs, or inside jokes.\n\nA student can start a small merchandise brand selling:\n• Custom hoodies and college jackets\n• Department & festival T-shirts\n• Tote bags & laptop sleeves\n• High-quality stickers & tech decals\n• Customized keychains & ID card lanyards\n\nThe smart approach is to avoid purchasing large amounts of upfront inventory. Use pre-orders or print-on-demand services to validate demand before investing. Collect orders and payments first, and produce according to actual numbers—eliminating financial risk."
        },
        {
          "heading": "5. Website Development for Local Businesses",
          "body": "Thousands of small local businesses still depend exclusively on social media or basic directory listings.\n\nStudents learning HTML, CSS, JavaScript, React, Next.js, or WordPress can offer affordable website development. Potential clients include cafes, gyms, coaching institutes, local retailers, clinics, and service providers.\n\nA winning starter package includes:\nLanding Page + Contact Form + WhatsApp Chat Integration + Google Maps Location + Mobile Responsive Design\n\nThe student gains real-world development experience and portfolio projects while local businesses get a credible digital storefront. This can easily evolve into a student-run digital agency."
        },
        {
          "heading": "6. Notes, Study Resources & Educational Products",
          "body": "Students constantly search for better ways to study, especially during exam week. If you excel at a subject, you can create high-yield educational resources such as:\n• Well-structured, handwritten or digital notes\n• One-page revision cheat-sheets and mind maps\n• Curated question banks and previous-year solutions\n• Digital flashcard decks\n• Practice test papers\n• Programming exercises & code walk-throughs\n\nThe key is focusing on quality, clarity, and organization rather than merely repackaging classroom slides. Distribute resources through a dedicated portal, student community, or digital marketplace to build long-term distribution."
        },
        {
          "heading": "7. College Event & Photography Services",
          "body": "Colleges host technical festivals, cultural fests, seminars, hackathons, sports tournaments, and conferences all year round. This creates non-stop demand for:\n• Event photography & candid shots\n• Videography & cinematic aftermovies\n• Fast-turnaround Instagram reels for live updates\n• Sponsor coverage & VIP speaker clips\n• Live social media story publishing\n\nA student media crew can start simply with modern smartphones, gimbals, and basic editing software like CapCut or Premiere. As your reputation and portfolio grow, you can expand to corporate events, local weddings, and alumni reunions."
        },
        {
          "heading": "8. Podcasting & Niche Campus Media",
          "body": "Every campus is filled with inspiring student builders, professors with groundbreaking research, and alumni doing extraordinary things. Launching a niche podcast or campus newsletter creates massive network leverage.\n\nFormats to explore:\n• Student Founder & Builder Interviews\n• Career & Internship Guidance Conversations\n• Weekly Campus Buzz & Opportunity Newsletters\n• Tech & Academic Deep Dives\n\nMonetization comes through sponsorships from local brands, student-focused apps, prep institutes, and affiliate partnerships. Even more valuable than revenue is the direct access to high-profile guests, alumni, and campus leadership."
        },
        {
          "heading": "9. Tech Setup, Gadget Care & Student Support",
          "body": "College students, professors, and labs constantly run into technology hurdles: broken laptop screens, slow operating systems, malware, dual-boot Linux setups, and software license installations.\n\nServices in high demand:\n• OS installation & formatting (Windows / Linux / macOS)\n• SSD upgrades & RAM expansions for older laptops\n• Thermal paste re-application and internal fan cleaning\n• Development environment setup (Docker, VS Code, Git, Python/C++ toolchains)\n• Screen protectors and ergonomic accessory reselling\n\nWith low initial tools and high technical know-how, you can become the go-to campus tech clinic with zero overhead."
        },
        {
          "heading": "10. Student Marketplace & Peer-to-Peer Exchange",
          "body": "At the end and start of every semester, seniors throw away or sell textbooks, drafters, calculators, lab coats, mattresses, and bicycle gear—while freshers scramble to buy them at retail prices.\n\nYou can bridge this gap by starting a curated campus marketplace:\n• A dedicated WhatsApp community or mini-web portal for verified peer-to-peer buying & selling\n• Pre-owned textbook and lab equipment buyback program\n• Rental service for seasonal equipment (scientific calculators, lab coats, project components)\n\nYou can monetize via small listing fees, commission on transactions, or buying items at discount during semester-end and selling them to incoming students during orientation."
        }
      ],
      "keyTakeaways": [
        "You don't need large venture capital to begin—a laptop, internet, and a sharp skill are enough to start.",
        "Test demand with pre-orders and minimum viable products (MVPs) before investing in heavy inventory.",
        "Solve real, recurring friction points in your immediate college community to build organic word-of-mouth.",
        "The experience of talking to customers, selling, and delivering on campus builds the ultimate foundation for future ventures."
      ]
    }
  },
  {
    "id": 8,
    "title": "In 2008 SpaceX was Collapsing: How Elon Musk Used the GENIUS Framework to Build a $350B Empire",
    "category": "First Principles & Frameworks",
    "date": "September 30, 2026",
    "readTime": "4 min read",
    "excerpt": "Down to his last $30M with 3 failed rockets, Musk ignored 99% of expert advice. How measuring 'Rate of Innovation' and the GENIUS framework saved SpaceX.",
    "image": "/images/blog_spacex_genius_framework.png",
    "author": "E-Cell, SJCEM",
    "authorRole": "Startup Strategy Series",
    "linkedinUrl": "https://www.linkedin.com/company/spacex/",
    "content": {
      "intro": "In 2008, SpaceX was collapsing. Elon Musk famously said he 'ignored 99% of advice.' Even after burning through his development budget and losing $100 million across 3 consecutive rocket failures, down to his last rocket, he refused to listen to legacy experts. Instead, he tracked the one metric no business school teaches: Rate of Innovation.",
      "sections": [
        {
          "heading": "The One Metric No MBA Teaches: Rate of Innovation",
          "body": "In summer 2008, SpaceX was days from bankruptcy. Elon put his last $30 million on the line. Everyone advised him to cut costs and play it safe.\n\nWhile other CEOs tracked revenue and burn rate, Musk was measuring something entirely different: Rate of Innovation. How fast could his engineering team iterate, learn, and improve compared to competitors?\n\nMusk treated engineering like a compounding asset. If SpaceX wasn't innovating faster than NASA, they were already dead in his eyes. He flattened the hierarchy, killed bureaucratic approval chains, and empowered on-the-ground engineers. Instead of post-mortems that dragged on for months, SpaceX analyzed failures in days or hours. Each crash wasn't a setback; it was vital engineering data feeding directly into the next iteration."
        },
        {
          "heading": "The GENIUS Framework",
          "body": "G – Grind Fast: Move fast. Launch fast. Learn fast. Instead of overplanning, get a working version out and improve rapidly.\n\nE – Eliminate Bureaucracy: Flatten hierarchies. Kill approval chains. Empower engineers to make decisions on the ground without waiting for corporate sign-offs.\n\nN – Normalize Failure: Mistakes aren’t shameful—they’re feedback. Celebrate what went wrong if you learn from it faster than your competition.\n\nI – Iterate Relentlessly: Don’t wait months to make changes. Use every test, crash, and micro-feedback loop to build version 2.0 immediately.\n\nU – Understand the Core Problem: Musk always asks: 'What is the fundamental problem we’re solving?' Go beyond surface symptoms. Break the challenge down to its physics and rebuild from first principles.\n\nS – Speed of Innovation > Size of Company: Big teams don’t win; fast-learning teams do. Musk’s real obsession wasn’t just rockets—it was the speed at which his organization could learn."
        },
        {
          "heading": "Why Companies Actually Die",
          "body": "What can every aspiring founder learn from Elon Musk's strategy?\n\n✅ Don’t chase perfection — chase speed of learning.\n✅ Flatten your process; good ideas can come from anywhere.\n✅ Build a culture where failure is treated as high-value data.\n✅ Make relentless iteration your unfair superpower.\n✅ Measure progress by rate of innovation, not just revenue.\n\nMost companies don't die because they run out of money—they die because they stop learning. Elon bet everything on learning faster than anyone else on Earth. And he won."
        }
      ],
      "keyTakeaways": [
        "Rate of Innovation is the ultimate survival metric: how fast your team learns and iterates determines longevity.",
        "The GENIUS Framework: Grind Fast, Eliminate Bureaucracy, Normalize Failure, Iterate Relentlessly, Understand Core Problem, Speed > Size.",
        "Failure is not a setback—it is high-value engineering data that accelerates your next breakthrough.",
        "Companies don't die just from running out of capital; they die when they stop learning and adapting."
      ]
    }
  },
  {
    "id": 7,
    "title": "From ₹8,500 Salary at 17 to India's Youngest Billionaire: How Nikhil Kamath Built Zerodha",
    "category": "Bootstrapping & FinTech",
    "date": "September 26, 2026",
    "readTime": "3 min read",
    "excerpt": "At 17, Nikhil Kamath was earning just ₹8,500/month at a call center. Today, his net worth is over $3B (₹25,000 Crore)—bootstrapped with zero external funding.",
    "image": "/images/blog_nikhil_kamath.jpg",
    "author": "E-Cell, SJCEM",
    "authorRole": "Bootstrapped Founders Series",
    "linkedinUrl": "https://www.linkedin.com/in/nikhilkamathcio/",
    "content": {
      "intro": "At 17, Nikhil Kamath was earning just ₹8,500/month at a call center selling insurance. Today, his net worth exceeds $3 billion (₹25,000 crore). Here is how the Zerodha co-founder went from a restless school dropout to India's youngest self-made billionaire—built with zero external capital.",
      "sections": [
        {
          "heading": "Dinner Table Conversations & Dropping Out With No Plan",
          "body": "• Started from the dinner table: Born in a middle-class family in Shimoga (Karnataka), Nikhil grew up hearing his father talk stocks over dinner. His dad worked at Canara Bank, and those conversations sparked a deep lifelong curiosity about markets and finance.\n\n• Dropped out with no safety net: He loved solving practical problems but hated conventional schooling. At 14, he was already flipping second-hand phones for profit. By 16, he walked out of school after 10th grade—no degree, no grand plan, just raw restlessness and hunger."
        },
        {
          "heading": "The Grind: Call Center Shifts & Kamath & Associates",
          "body": "• The ₹8,500 call-center hustle: At 17, he changed his birth certificate to land a call-center job in Bangalore earning ₹8,500/month selling accident insurance to pensioners in England. It wasn't glamorous, but it gave him financial independence and trading capital.\n\n• Partnering with brother Nithin: By 19, he quit the call center to team up with his elder brother Nithin. Together, they started Kamath & Associates—a small sub-brokerage managing money for friends and family. They built trust, delivered consistent returns, and word spread quickly."
        },
        {
          "heading": "The Zerodha Disruption: Bootstrapping a ₹25,000 Crore Giant",
          "body": "• Spotting the real problem: By 2010, the Kamath brothers knew the brokerage industry inside-out. They spotted the massive flaw: retail investors were getting crushed by exorbitant percentage-based commissions. Their solution? A radical flat ₹20 per trade, and zero fees on equity delivery.\n\n• Bootstrapped from day one: While scaling Zerodha, Nikhil kept trading actively, and every single rupee of profit was reinvested straight back into the product. No venture capital, no vanity offices, no cash burn—just an obsessive focus on product engineering and low-cost execution.\n\n• Crowned India's largest broker: By 2019, Zerodha overtook legacy banking behemoths to become India's largest retail broker. Completely bootstrapped, they democratized financial markets for millions who previously couldn't afford traditional fees.\n\nNikhil went from ₹8,500/month to building a multi-billion dollar empire. His journey proves that you don't need a fancy degree or a textbook plan—sometimes you just need to be restless enough to try something different."
        }
      ],
      "keyTakeaways": [
        "You don't need a fancy degree or a textbook plan—practical curiosity, hunger, and execution outshine pedigree.",
        "Solve an unfair industry problem: Zerodha disrupted legacy brokers by replacing percentage fees with a transparent flat ₹20 model.",
        "Bootstrapping forces extreme discipline: reinvesting real customer profits creates sustainable, anti-fragile businesses.",
        "Zero funding, generational scale: Zerodha proved that an industry-dominating tech giant can be built without a single rupee of VC funding."
      ]
    }
  },
  {
    "id": 6,
    "title": "From Office Boy at Infosys to CEO of a ₹10 Crore Startup: The Inspiring Journey of Dadasaheb Bhagat",
    "category": "Founder Grit & Resilience",
    "date": "September 24, 2026",
    "readTime": "3 min read",
    "excerpt": "Born to a laborer in Beed, he started as an office boy earning ₹9,000/month. Today, Dadasaheb Bhagat runs two companies worth over ₹10 crore through relentless grit.",
    "image": "/images/blog_dadasaheb_bhagat.jpg",
    "author": "E-Cell, SJCEM",
    "authorRole": "The Entrepreneur In You Series",
    "linkedinUrl": "https://www.linkedin.com/in/siddharthjain1979/",
    "content": {
      "intro": "Some chase success. Others create it—Dadasaheb Bhagat did both. Born to a laborer in Beed, Maharashtra, his journey started with just ₹9,000/month as an office boy at Infosys. Today, he runs two companies worth over ₹10 crore. How? Relentless ambition and a complete refusal to settle.",
      "sections": [
        {
          "heading": "The Hustle: From Room Service to Self-Taught Coder",
          "body": "▶️ Worked as a room service boy but kept his eyes locked on the software industry, absorbing whatever knowledge he could from the professionals around him.\n▶️ Juggled exhausting daily work shifts with evening animation classes, determined to break into the tech world.\n▶️ Landed opportunities in Mumbai and Hyderabad, where he taught himself Python and C++, leading to his breakthrough realization: selling reusable design templates online to save creators countless hours."
        },
        {
          "heading": "Turning Adversity Into An Enterprise: Ninthmotion & DooGraphics",
          "body": "▶️ Just as momentum was building, disaster struck. A severe car accident left him bedridden for months. But instead of quitting, he turned his recovery bed into a full-fledged workstation and built his first company, Ninthmotion, eventually serving 6,000+ global clients including BBC Studios and 9XM.\n▶️ Not stopping there, he launched DooGraphics (and DesignTemplate.io), India’s first intuitive Canva-like platform, making visual content design effortless for everyone."
        },
        {
          "heading": "Scaling a ₹10 Crore Global Startup From a Cattle Shed",
          "body": "▶️ When the COVID lockdown forced him back to his ancestral village in Beed, there was no tech park, no fancy office, and zero startup infrastructure. All he had was a converted cattle shed and a strong 4G cellular signal.\n▶️ With a small, dedicated local team, he kept shipping and expanding.\n▶️ Today, DooGraphics commands 10,000+ active customers across India, Japan, Australia, and the UK—a ₹10 crore empire built from pure rural grit.\n\nFrom serving tea at Infosys to serving global corporate clients—Dadasaheb Bhagat proves that no background is a barrier, and no dream is too big if you refuse to settle."
        }
      ],
      "keyTakeaways": [
        "Your starting point does not define your destination—curiosity and self-learning are the ultimate equalizers.",
        "Adversity can become your greatest inflection point: Dadasaheb built a global business while bedridden.",
        "Resource constraints are never an excuse; great ventures can be built from a village cattle shed with a 4G connection.",
        "From serving tea to serving global clients: sheer grit and relentless execution beat pedigree every time."
      ]
    }
  },
  {
    "id": 5,
    "title": "Nobody talks about what it actually costs to be a founder. Not the money. The weight of it.",
    "category": "First Principles & Founder Mindset",
    "date": "September 21, 2026",
    "readTime": "4 min read",
    "excerpt": "The anxiety, the payroll scramble, and what 23 years of refusing to quit actually built at SpaceX. Why first principles thinking defines true entrepreneurship.",
    "image": "/images/blog_spacex_rockets.png",
    "author": "E-Cell, SJCEM",
    "authorRole": "Entrepreneurship Cell",
    "linkedinUrl": "https://www.linkedin.com/company/9zero-climate/",
    "content": {
      "intro": "Nobody talks about what it actually costs to be a founder. Not the money. The weight of it. The Sunday nights where the anxiety shows up uninvited. The payroll you made, but only just. The moment you're smiling in a pitch while your inside voice is screaming. I've been that founder. And I'm still that founder, building 9Zero right now, in the grind, every single day.",
      "sections": [
        {
          "heading": "What 23 Years of Refusing to Quit Actually Built",
          "body": "This week, SpaceX is preparing to go public. Look at what 23 years of refusing to quit actually built:\n\n• 💰 $2 TRILLION valuation — bigger than Boeing, Lockheed, Northrop, RTX & GE Aerospace combined\n• 🚀 $75B capital raise, 2.5× the largest IPO ever (Saudi Aramco, 2019)\n• 👥 18,000+ employees, hundreds set to become millionaires, many in their 20s & 30s\n• 🛰️ 52% of ALL global orbital launches in 2025, one company\n• 🌍 10M+ Starlink subscribers across 150+ countries\n• 📈 $16B revenue in 2025, up from $2B in 2021\n\nIn 2008, Elon Musk had enough money for exactly one more rocket launch. He'd already lost two. The company was days from bankruptcy. He personally funded it with his last dollars. It worked. And everything above is what came next."
        },
        {
          "heading": "First Principles Thinking: Stripping Away the Noise",
          "body": "How? He's famously obsessed with one thing: first principles thinking.\n\nStrip away every assumption. Every convention. Every received wisdom. Go back to what is fundamentally, provably true, and build from there.\n\nAt 9Zero, we apply exactly that to climate. The physics of climate change doesn't move with news cycles. CO₂ traps heat. That's not a policy position. It's not a media narrative. It's not left or right. It's a first principle. The data has been consistent for decades. What changes is the politics, the headlines, the noise. First principles don't care who's in office."
        },
        {
          "heading": "What Entrepreneurship Actually Is",
          "body": "That’s why we're not a 'climate company' in the political sense. We're a company built on the science, and on the enormous economic opportunity that comes from solving it. The founders we support aren't activists. They're engineers, scientists, operators and builders who've stripped it back to the fundamentals and found an edge nobody else can see yet.\n\nThat's what entrepreneurship actually is. Not the highlight reel. The bit before it:\n→ The lows are longer than the highs\n→ You will doubt yourself on the days you most need to lead\n→ 'Overnight success' is always a decade in the making\n→ Resilience isn't a personality trait, it's a daily decision\n\n9Zero was built for founders who think in first principles. Who tune out the noise and stay locked on the science. Who are building real solutions to the hardest, most important problem of our generation. They need more than a desk and a wifi password. They need capital, community, and people in the room who've felt the same weight, and kept going anyway.\n\nBecause the world doesn't just need more startups. It needs the right founders, solving the right problems, armed with the truth. If that's you, we'd love to meet you."
        }
      ],
      "keyTakeaways": [
        "The real cost of being a founder is the emotional weight, the uncertainty, and the relentless daily resilience.",
        "First principles thinking: strip away conventions and received wisdom, and build from provable truth.",
        "'Overnight success' is always a decade in the making—resilience is a daily decision, not a personality trait.",
        "The world doesn't just need more startups—it needs the right founders solving the right problems, armed with the truth."
      ]
    }
  },
  {
    "id": 1,
    "title": "Your first 10 customers aren’t there to prove your startup is right. They’re there to show you where it’s wrong.",
    "category": "Customer Discovery",
    "date": "August 24, 2026",
    "readTime": "2 min read",
    "excerpt": "Why early-stage founders should focus on customer feedback and discovery rather than chasing rapid scale.",
    "image": "/images/E.jpg",
    "author": "E-Cell, SJCEM",
    "authorRole": "Entrepreneurship Cell",
    "linkedinUrl": "https://www.linkedin.com/posts/ecell-sjcem_entrepreneurship-startuplessons-customerdiscovery-activity-7497669557025824768-6h_z?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFyExNcBXZ5E73xO-LX-Yt29hK_aWlhC-4w",
    "content": {
      "intro": "In the early days of a startup, founders have assumptions everywhere: what customers need, what they will pay for, which features matter, and why they might say no. Your first few customers turn those assumptions into facts.",
      "sections": [
        {
          "heading": "Discovering the Real Product",
          "body": "One customer tells you a feature is unnecessary. Another tells you they would pay for the product, but only if you solve a different problem first. Someone else reveals a pain point you never even considered. And suddenly, those first 10 customers are doing more than buying your product. They are helping you discover what your product should actually become."
        },
        {
          "heading": "The Feedback Loop",
          "body": "That’s why early-stage founders shouldn’t chase scale too quickly. Talk to customers. Sell personally. Listen carefully. Improve constantly. The best founders don’t treat that feedback as criticism. They treat it as direction."
        }
      ],
      "keyTakeaways": [
        "Your first 10 customers are not just your first revenue; they are your first product feedback loop.",
        "Early-stage founders shouldn’t chase scale too quickly; prioritize personal selling and listening.",
        "Build less from assumptions and build more from what your customers keep telling you."
      ]
    }
  },
  {
    "id": 2,
    "title": "BlackBerry had the customers, the technology, the brand, and the market. So how did it lose all four?",
    "category": "Business Strategy",
    "date": "August 22, 2026",
    "readTime": "3 min read",
    "excerpt": "A product can be successful today and still become irrelevant tomorrow. Why evolving with the market is critical for survival.",
    "image": "/images/BlackBerrys.jpg",
    "author": "E-Cell, SJCEM",
    "authorRole": "Entrepreneurship Cell",
    "linkedinUrl": "https://lnkd.in/p/dUu6sQGT",
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
    "id": 3,
    "title": "What if Tesla had tried to compete on price from Day 1?",
    "category": "Startup Strategy",
    "date": "August 20, 2026",
    "readTime": "3 min read",
    "excerpt": "Comparing the early strategies of Tesla and SpaceX to show why the best approach is the one that fits your specific problem.",
    "image": "/images/Tesla.jpg",
    "author": "E-Cell, SJCEM",
    "authorRole": "Entrepreneurship Cell",
    "linkedinUrl": "https://lnkd.in/p/drb8w6dN",
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
    "id": 4,
    "title": "P.C. Mustafa’s first big business lesson came from customers returning his product.",
    "category": "Startup Lessons",
    "date": "August 18, 2026",
    "readTime": "3 min read",
    "excerpt": "How iD Fresh Foods turned initial product failures into a lesson on adaptation, trust, and long-term growth.",
    "image": "/images/ID_Fresh.jpg",
    "author": "E-Cell, SJCEM",
    "authorRole": "Entrepreneurship Cell",
    "linkedinUrl": "https://lnkd.in/p/dHFGDc75",
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
  }
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
                            href={blog.linkedinUrl || "https://www.linkedin.com/in/ecell-sjcem?utm_source=share_via&utm_content=profile&utm_medium=member_android"}
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
                              <p className="text-[var(--color-text-muted)] font-inter text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line">
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
