export type TeamMember = {
  name: string;
  role: string;
  photoUrl: string;
  badges: string[];
  wing: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
};

export type Team = {
  id: string;
  name: string;
  members: TeamMember[];
};

// Wings for filtering
export const wings = [
  "All Wings",
  "Technical",
  "Media & Design",
  "PR",
  "Corporate",
  "Planning & Ops",
  "Documentation",
] as const;

export type Wing = (typeof wings)[number];

// Executive Officers (Core Team leaders)
export const executiveOfficers: TeamMember[] = [
  {
    name: "Tejas Bhavthankar",
    role: "President",
    photoUrl: "", // Missing
    badges: ["President"],
    wing: "Core",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/tejas-bhavthankar-9560773b2",
    githubUrl: "#",
  },
  {
    name: "Sahas Bochare",
    role: "Vice-President",
    photoUrl: "/images/team/Sahas.jpg",
    badges: ["Vice-President"],
    wing: "Core",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/sahasbochare",
    githubUrl: "#",
  },
];

// Department Cohorts (all other members)
export const departmentCohorts: TeamMember[] = [
  // Core remaining
  {
    name: "Yash Tripathi",
    role: "Secretary",
    photoUrl: "", // Missing
    badges: ["Core", "Secretary"],
    wing: "Core",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/yash-tripathi-744509295",
    githubUrl: "#",
  },
  {
    name: "Bhagwan Mourya",
    role: "Advisor",
    photoUrl: "/images/team/bhagwan.png",
    badges: ["Core", "Advisor"],
    wing: "Core",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/bhagwan-mourya-0598a3293",
    githubUrl: "#",
  },

  // Technical
  {
    name: "Sairaj Khade",
    role: "Director",
    photoUrl: "", // Missing
    badges: ["Director", "Technical"],
    wing: "Technical",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/sairaj-khade-ai-assisted-dev",
    githubUrl: "#",
  },
  {
    name: "Kunal Bhandarkar",
    role: "Dy. Director",
    photoUrl: "", // Missing
    badges: ["Dy. Director", "Technical"],
    wing: "Technical",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/kunal-bhandarkar-24ba3a2b3",
    githubUrl: "#",
  },
  {
    name: "Siddhi Patil",
    role: "Dy. Director",
    photoUrl: "/images/team/Siddhi.png",
    badges: ["Dy. Director", "Technical"],
    wing: "Technical",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/siddhi-patil-922523326",
    githubUrl: "#",
  },
  {
    name: "Aftab Shaikh",
    role: "Member",
    photoUrl: "/images/team/Aftab_Shaikh.jpg",
    badges: ["Member", "Technical"],
    wing: "Technical",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/aftonymous",
    githubUrl: "#",
  },
  {
    name: "Suraj Sawant",
    role: "Member",
    photoUrl: "", // Missing
    badges: ["Member", "Technical"],
    wing: "Technical",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },

  // Media & Design
  {
    name: "Dhavni Sawani",
    role: "Director",
    photoUrl: "", // Missing
    badges: ["Director", "Media & Design"],
    wing: "Media & Design",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/dhvani-sawani-504517308",
    githubUrl: "#",
  },
  {
    name: "Vaibhav Somanna",
    role: "Dy. Director",
    photoUrl: "", // Missing
    badges: ["Dy. Director", "Media & Design"],
    wing: "Media & Design",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Shubhra Shinde",
    role: "Member",
    photoUrl: "", // Missing
    badges: ["Member", "Media & Design"],
    wing: "Media & Design",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/shubhra-shinde-aab746403/",
    githubUrl: "#",
  },
  {
    name: "Soham Gunjal",
    role: "Member",
    photoUrl: "/images/team/SohamG.png",
    badges: ["Member", "Media & Design"],
    wing: "Media & Design",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Prachi Sharma",
    role: "Member",
    photoUrl: "/images/team/Prachi.jpg",
    badges: ["Member", "Media & Design"],
    wing: "Media & Design",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/prachi-sharma-962a783b0",
    githubUrl: "#",
  },
  {
    name: "Numaan Husain",
    role: "Member",
    photoUrl: "", // Missing
    badges: ["Member", "Media & Design"],
    wing: "Media & Design",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/numaan-bin-husain",
    githubUrl: "#",
  },

  // Corporate Relations & Sponsorship
  {
    name: "Aditya Singh",
    role: "Director",
    photoUrl: "/images/team/Aditya.jpg",
    badges: ["Director", "Corporate"],
    wing: "Corporate",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/aditya-singh-242a4a354",
    githubUrl: "#",
  },
  {
    name: "Vaishnavi Khandagale",
    role: "Dy. Director",
    photoUrl: "", // Missing
    badges: ["Dy. Director", "Corporate"],
    wing: "Corporate",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-khandagale-519203371",
    githubUrl: "#",
  },
  {
    name: "Bhavesh Mishra",
    role: "Member",
    photoUrl: "/images/team/Bhavesh Mishra_.jpg",
    badges: ["Member", "Corporate"],
    wing: "Corporate",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/bhavesh-mishra-b1a832373",
    githubUrl: "#",
  },
  {
    name: "Nidhi Yadav",
    role: "Member",
    photoUrl: "/images/team/Nidhi.JPG",
    badges: ["Member", "Corporate"],
    wing: "Corporate",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },

  // Public Relations
  {
    name: "Keyur Bidawat",
    role: "Director",
    photoUrl: "/images/team/Keyur.jpg",
    badges: ["Director", "PR"],
    wing: "PR",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Shamitha Pillai",
    role: "Dy. Director",
    photoUrl: "/images/team/Shamitha.jpg",
    badges: ["Dy. Director", "PR"],
    wing: "PR",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/shamitha-palai-280606375",
    githubUrl: "#",
  },
  {
    name: "Tanu Sharma",
    role: "Member",
    photoUrl: "/images/team/tanu_real.jpg",
    badges: ["Member", "PR"],
    wing: "PR",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Aditi Patil",
    role: "Member",
    photoUrl: "/images/team/aditii.jpg",
    badges: ["Member", "PR"],
    wing: "PR",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/aditi-patil-888560414",
    githubUrl: "#",
  },
  {
    name: "Bipin Maurya",
    role: "Member",
    photoUrl: "/images/team/Bipin Maurya.jpg",
    badges: ["Member", "PR"],
    wing: "PR",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },

  // Planning & Operations
  {
    name: "Advait Chavan",
    role: "Director",
    photoUrl: "/images/team/advait .JPG",
    badges: ["Director", "Planning & Ops"],
    wing: "Planning & Ops",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/advait-chavan-599686342",
    githubUrl: "#",
  },
  {
    name: "Riddhi Patil",
    role: "Dy. Director",
    photoUrl: "/images/team/Riddhi.png",
    badges: ["Dy. Director", "Planning & Ops"],
    wing: "Planning & Ops",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/riddhipatil0",
    githubUrl: "#",
  },
  {
    name: "Surbhi Zope",
    role: "Member",
    photoUrl: "/images/team/Surbhi.jpg",
    badges: ["Member", "Planning & Ops"],
    wing: "Planning & Ops",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Shrawani Kudu",
    role: "Member",
    photoUrl: "", // Missing
    badges: ["Member", "Planning & Ops"],
    wing: "Planning & Ops",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Shubham Gole",
    role: "Member",
    photoUrl: "/images/team/Shubham.JPG",
    badges: ["Member", "Planning & Ops"],
    wing: "Planning & Ops",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Nehru Yadav",
    role: "Member",
    photoUrl: "/images/team/Nehru Yadav.JPG",
    badges: ["Member", "Planning & Ops"],
    wing: "Planning & Ops",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/nehru-yadav-5a03032b9",
    githubUrl: "#",
  },

  // Documentation
  {
    name: "Anand Ambhore",
    role: "Director",
    photoUrl: "", // Missing
    badges: ["Director", "Documentation"],
    wing: "Documentation",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/anand-ambhore-b5b9aa284",
    githubUrl: "#",
  },
  {
    name: "Rutuja Gharat",
    role: "Dy. Director",
    photoUrl: "", // Missing
    badges: ["Dy. Director", "Documentation"],
    wing: "Documentation",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/rutuja-gharat-6b8375372",
    githubUrl: "#",
  },
  {
    name: "Zeel Panchal",
    role: "Member",
    photoUrl: "", // Missing
    badges: ["Member", "Documentation"],
    wing: "Documentation",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Shalu Singh",
    role: "Member",
    photoUrl: "/images/team/Shalu.jpg",
    badges: ["Member", "Documentation"],
    wing: "Documentation",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Tanvi Walam",
    role: "Member",
    photoUrl: "/images/team/Tanvi.JPG",
    badges: ["Member", "Documentation"],
    wing: "Documentation",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
];

export const teamsData: Team[] = [
  {
    id: "core",
    name: "Core Team",
    members: [...executiveOfficers, ...departmentCohorts.filter((m) => m.wing === "Core")],
  },
  {
    id: "technical",
    name: "Technical",
    members: departmentCohorts.filter((m) => m.wing === "Technical"),
  },
  {
    id: "media-design",
    name: "Media & Design",
    members: departmentCohorts.filter((m) => m.wing === "Media & Design"),
  },
  {
    id: "corporate-relations",
    name: "Corporate Relations & Sponsorship",
    members: departmentCohorts.filter((m) => m.wing === "Corporate"),
  },
  {
    id: "pr",
    name: "Public Relation (PR)",
    members: departmentCohorts.filter((m) => m.wing === "PR"),
  },
  {
    id: "planning-ops",
    name: "Planning & Operations",
    members: departmentCohorts.filter((m) => m.wing === "Planning & Ops"),
  },
  {
    id: "documentation",
    name: "Documentation",
    members: departmentCohorts.filter((m) => m.wing === "Documentation"),
  },
];
