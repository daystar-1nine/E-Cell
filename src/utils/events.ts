export type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  status: "upcoming" | "past";
};

export const eventsData: Event[] = [
  {
    id: "eureka-pitch-2026",
    title: "Eureka! Pitch Competition",
    date: "August 25, 2026",
    description: "Presented in collaboration with IIT Bombay's National Entrepreneurship Challenge (NEC). Prize pool of ₹5,000. 'Think It. Pitch It. Launch It.' at MMS Hall, SJCEM.",
    imageUrl: "/images/event_eureka.jpg",
    status: "upcoming",
  },
  {
    id: "ecell-inauguration",
    title: "E-Cell SJCEM Grand Inauguration",
    date: "August 17, 2026",
    description: "Official grand inaugural ceremony of the Entrepreneurship Cell under IIC at St. John College of Engineering and Management at MMS Hall.",
    imageUrl: "/images/campus_photo.png",
    status: "past",
  },
  {
    id: "expert-session-arjun-gupta",
    title: "Expert Session: From Campus to Entrepreneurship",
    date: "August 17, 2026",
    description: "Insightful masterclass with guest speaker Mr. Arjun Gupta (Founder & CMD, AR Technologies) on navigating the journey from engineering graduate to successful founder.",
    imageUrl: "/images/event_expert_session.png",
    status: "past",
  },
];
