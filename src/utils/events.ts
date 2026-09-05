export type EventCoordinator = {
  name: string;
  phone?: string;
};

export type Event = {
  id: string;
  title: string;
  tagline?: string;
  date: string;
  time?: string;
  venue?: string;
  description: string;
  imageUrl: string;
  status: "upcoming" | "past";
  prizePool?: string;
  entryFee?: string;
  format?: string;
  speaker?: string;
  coordinators?: EventCoordinator[];
  highlights?: string[];
};

export const eventsData: Event[] = [
  {
    id: "illuminate-2026",
    title: "illuminate 2026",
    tagline: "Empowering the Next Generation of Changemakers",
    date: "September 23, 2026",
    time: "09:30 AM",
    venue: "MMS Hall, SJCEM",
    description: "illuminate, a premier flagship workshop initiative by E-Cell IIT Bombay in collaboration with E-Cell SJCEM, aims to spark the entrepreneurial spirit and build practical business acumen among students across India. Through interactive masterclasses on business model validation, startup finance, and core entrepreneurial principles, students learn how to turn ideas into viable ventures.",
    imageUrl: "/images/event_illuminate.png",
    status: "upcoming",
    entryFee: "₹400 per person",
    format: "Individual Event (No Teams)",
    highlights: [
      "Exclusive workshop conducted by E-Cell IIT Bombay at SJCEM",
      "Official certificates certified directly by E-Cell IIT Bombay for all student participants",
      "Exclusive Startup Kits provided to all participants including Business Model Canvas (BMC)",
      "Learn directly from seasoned entrepreneurs, industry experts, and trainers",
      "Format: Individual event (no team required)",
    ],
    coordinators: [
      { name: "Tejas Bhavthankar", phone: "+91 7218757424" }
    ],
  },
  {
    id: "eureka-pitch-2026",
    title: "Eureka! Pitch Competition",
    tagline: "Think It. Pitch It. Launch It.",
    date: "August 25, 2026",
    time: "10:00 AM",
    venue: "MMS Hall, SJCEM",
    description: "The E-Cell SJCEM proudly presented the Eureka Pitch Competition, in collaboration with IIT Bombay's National Entrepreneurship Challenge (NEC). Students showcased their startup ideas to top mentors, ignited innovation, and competed for fast-track entry to the Eureka 2026 Zonal Rounds.",
    imageUrl: "/images/event_eureka.jpg",
    status: "past",
    prizePool: "₹5,000",
    entryFee: "₹200",
    highlights: [
      "Showcased startup ideas to top mentors & industry experts",
      "Unlocked networking opportunities with startup founders",
      "Gained valuable feedback to sharpen investor pitch decks",
      "Fast-tracked winners to Eureka 2026 Zonal Rounds",
    ],
    coordinators: [
      { name: "Tejas Bhavthankar", phone: "+91 7218757424" }
    ],
  },
  {
    id: "ecell-inauguration",
    title: "E-Cell SJCEM Grand Inauguration",
    tagline: "Inaugurating Innovation & Leadership",
    date: "August 17, 2026",
    time: "10:00 AM",
    venue: "MMS Hall, SJCEM",
    description: "The official grand inaugural ceremony of the Institution's Innovation Council (IIC) Entrepreneurship Cell at St. John College of Engineering and Management, establishing a dedicated ecosystem to foster student innovation and entrepreneurship.",
    imageUrl: "/images/image.png",
    status: "past",
    highlights: [
      "Official inauguration and council reveal",
      "Address by college management and faculty coordinators",
      "Unveiling of the year's innovation roadmap and initiatives",
    ],
  },
  {
    id: "expert-session-arjun-gupta",
    title: "Expert Session: From Campus to Entrepreneurship",
    tagline: "The Journey from Engineering Student to Successful Founder",
    date: "August 17, 2026",
    time: "11:00 AM",
    venue: "MMS Hall, SJCEM",
    speaker: "Mr. Arjun Gupta (Founder & CMD, AR Technologies)",
    description: "An exclusive, high-impact masterclass by alumnus Mr. Arjun Gupta on transitioning from college to career, building and scaling AR Technologies, and key lessons for aspiring founders.",
    imageUrl: "/images/event_expert_session.png",
    status: "past",
    highlights: [
      "College to Career: The Journey After Graduation",
      "Building & Growing AR Technologies",
      "Real-world challenges, lessons, and key takeaways",
      "Live interactive Q&A session with attendees",
    ],
    coordinators: [
      { name: "Tejas Bhavthankar", phone: "+91 7218757424" }
    ],
  },
  {
    id: "iit-bombay-esummit-2025",
    title: "IIT Bombay's E-Summit 2025",
    tagline: "National Level Entrepreneurship Summit & Competition",
    date: "December 10 - 12, 2025",
    time: "08:00 AM",
    venue: "IIT Bombay, Powai, Mumbai",
    description: "A 3-day national delegation of 15 E-Cell SJCEM members participating in IIT Bombay's flagship E-Summit 2025. Students competed in high-pressure entrepreneurial tasks including case study analysis, pitch presentations, and quizzes, successfully securing 3rd Place in the National Semi-Finals.",
    imageUrl: "/images/event_iitb_esummit.jpg",
    status: "past",
    highlights: [
      "Secured 3rd Place in the National Semi-Finals with commendable scores",
      "Hands-on participation in real-time startup case studies, quizzes, and pitch decks",
      "Direct networking and learning from industry leaders & successful startup founders",
      "15-member SJCEM student delegation with faculty mentorship",
    ],
    coordinators: [
      { name: "Mrs. Shilpa Katre (Activity In-charge)" },
      { name: "Mrs. Meenal Kate & Mrs. Rosy Pradhan (Coordinators)" }
    ],
  },
];
