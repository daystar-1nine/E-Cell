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
    id: "e1",
    title: "Startup Weekend 2026",
    date: "August 15-17, 2026",
    description: "A 54-hour event where developers, designers, and business developers come together to pitch ideas and launch startups.",
    imageUrl: "", // TODO: replace with real image url
    status: "upcoming",
  },
  {
    id: "e2",
    title: "Founder's Talk Series: AI Innovations",
    date: "September 5, 2026",
    description: "An exclusive fireside chat with industry leaders discussing the future of AI in the Indian startup ecosystem.",
    imageUrl: "", 
    status: "upcoming",
  },
  {
    id: "e3",
    title: "E-Summit 2026",
    date: "March 10, 2026",
    description: "Our flagship entrepreneurial summit featuring keynote speakers, panel discussions, and a pitch competition.",
    imageUrl: "", 
    status: "past",
  },
  {
    id: "e4",
    title: "Pitch Perfect Workshop",
    date: "February 20, 2026",
    description: "A hands-on workshop focused on crafting the perfect investor pitch deck and mastering delivery.",
    imageUrl: "", 
    status: "past",
  },
  {
    id: "e5",
    title: "Idea Validation Bootcamp",
    date: "January 15, 2026",
    description: "A one-day intensive bootcamp helping students test and validate their business ideas before building.",
    imageUrl: "", 
    status: "past",
  },
];
