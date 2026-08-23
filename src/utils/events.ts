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
  speaker?: string;
  coordinators?: EventCoordinator[];
  highlights?: string[];
};

export const eventsData: Event[] = [
  {
    id: "eureka-pitch-2026",
    title: "Eureka! Pitch Competition",
    tagline: "Think It. Pitch It. Launch It.",
    date: "August 25, 2026",
    time: "10:00 AM",
    venue: "MMS Hall, SJCEM",
    description: "The E-Cell SJCEM proudly presents the Eureka Pitch Competition, in collaboration with IIT Bombay's National Entrepreneurship Challenge (NEC). Showcase your startup ideas to top mentors, ignite innovation, and get fast-tracked to the Eureka 2026 Zonal Rounds.",
    imageUrl: "/images/event_eureka.jpg",
    status: "upcoming",
    prizePool: "₹5,000",
    entryFee: "₹200",
    highlights: [
      "Showcase your startup idea to top mentors & industry experts",
      "Unlock networking opportunities with startup founders",
      "Gain valuable feedback to sharpen your investor pitch",
      "Get fast-tracked to Eureka 2026 Zonal Rounds",
    ],
    coordinators: [
      { name: "Tejas Bhavthankar", phone: "+91 7218757424" },
      { name: "Prachi Sharma", phone: "+91 7387111547" },
      { name: "Sahas Bochare", phone: "+91 7620676020" },
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
    imageUrl: "/images/campus_photo.png",
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
      { name: "Dhvani Sawani", phone: "8369963043" },
      { name: "Soham Gunjal", phone: "9421338676" },
    ],
  },
];
