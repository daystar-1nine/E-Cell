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

export type FacultyCoordinator = {
  name: string;
  title: string;
  department: string;
  photoUrl: string;
  linkedinUrl?: string;
  emailUrl?: string;
};

export type Team = {
  id: string;
  name: string;
  members: TeamMember[];
};

// Faculty Coordinators
export const facultyCoordinators: FacultyCoordinator[] = [
  {
    name: "Ms. Shilpa Katre",
    title: "Faculty Co-ordinator",
    department: "SJCEM Palghar",
    photoUrl: "/images/team/shilpa_katre.jpeg",
    linkedinUrl: "#",
    emailUrl: "#",
  },
  {
    name: "Mr. Uday Prajapati",
    title: "Faculty Co-ordinator",
    department: "SJCEM Palghar",
    photoUrl: "/images/team/uday.jpeg",
    linkedinUrl: "#",
    emailUrl: "#",
  },
];

// Wings for capsule filtering
export const wings = [
  "Core Team",
  "Technical",
  "Media & Design",
  "Corporate",
  "PR",
  "Planning & Ops",
  "Documentation",
] as const;

export type Wing = (typeof wings)[number];

// Core Team (President, VP, Secretary, Advisor)
export const coreTeam: TeamMember[] = [
  {
    name: "Tejas Bhavthankar",
    role: "President",
    photoUrl: "/images/team/Tejas.jpg",
    badges: ["President"],
    wing: "Core Team",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/tejas-bhavthankar-9560773b2",
    githubUrl: "#",
  },
  {
    name: "Sahas Bochare",
    role: "Vice-President",
    photoUrl: "/images/team/Sahas NEW.JPG",
    badges: ["Vice-President"],
    wing: "Core Team",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/sahasbochare",
    githubUrl: "#",
  },
  {
    name: "Yash Tripathi",
    role: "Secretary",
    photoUrl: "/images/team/Honourable Secretary.JPG",
    badges: ["Secretary"],
    wing: "Core Team",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/yash-tripathi-744509295",
    githubUrl: "#",
  },
  {
    name: "Bhagwan Mourya",
    role: "Advisor",
    photoUrl: "/images/team/bhagwan.png",
    badges: ["Advisor"],
    wing: "Core Team",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/bhagwan-mourya-0598a3293",
    githubUrl: "#",
  },
];

// Department Members
export const departmentMembers: TeamMember[] = [
  // Technical
  {
    name: "Sairaj Khade",
    role: "Director",
    photoUrl: "/images/team/sairaj.JPG",
    badges: ["Director", "Technical"],
    wing: "Technical",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/sairaj-khade-ai-assisted-dev",
    githubUrl: "#",
  },
  {
    name: "Kunal Bhandarkar",
    role: "Dy. Director",
    photoUrl: "/images/team/Kunal Bhandarkar.JPG",
    badges: ["Dy. Director", "Technical"],
    wing: "Technical",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/kunal-bhandarkar-24ba3a2b3",
    githubUrl: "#",
  },
  {
    name: "Siddhi Patil",
    role: "Dy. Director",
    photoUrl: "/images/team/Siddhi.JPG",
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
    photoUrl: "/images/team/Suraj_Sawant.jpg",
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
    photoUrl: "/images/team/Dhvani.jpg",
    badges: ["Director", "Media & Design"],
    wing: "Media & Design",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/dhvani-sawani-504517308",
    githubUrl: "#",
  },
  {
    name: "Vaibhav Somanna",
    role: "Dy. Director",
    photoUrl: "/images/team/vaibhav.jpeg",
    badges: ["Dy. Director", "Media & Design"],
    wing: "Media & Design",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Shubhra Shinde",
    role: "Member",
    photoUrl: "/images/team/shubhra shinde .jpg",
    badges: ["Member", "Media & Design"],
    wing: "Media & Design",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/shubhra-shinde-aab746403/",
    githubUrl: "#",
  },
  {
    name: "Soham Gunjal",
    role: "Member",
    photoUrl: "/images/team/Soham_Gunjal.JPG",
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
    photoUrl: "/images/team/Numaan Bin Husain_.jpg",
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
    photoUrl: "/images/team/Vaishnavi Khandagale.jpg",
    badges: ["Dy. Director", "Corporate"],
    wing: "Corporate",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-khandagale-519203371",
    githubUrl: "#",
  },
  {
    name: "Bhavesh Mishra",
    role: "Member",
    photoUrl: "/images/team/Bhavesh Mishra.JPG",
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
    name: "Shamitha Palai",
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
    photoUrl: "/images/team/Tanus.JPG",
    badges: ["Member", "PR"],
    wing: "PR",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Aditi Patil",
    role: "Member",
    photoUrl: "/images/team/aditi patil.jpg",
    badges: ["Member", "PR"],
    wing: "PR",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/aditi-patil-888560414",
    githubUrl: "#",
  },
  {
    name: "Bipin Maurya",
    role: "Member",
    photoUrl: "/images/team/Bipin_Maurya.JPG",
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
    photoUrl: "/images/team/Riddhi.JPG",
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
    photoUrl: "/images/team/Shrawani_Kudu.jpg",
    badges: ["Member", "Planning & Ops"],
    wing: "Planning & Ops",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Shubham Gole",
    role: "Member",
    photoUrl: "/images/team/Shubham Gole.JPG",
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
    photoUrl: "/images/team/anand .png",
    badges: ["Director", "Documentation"],
    wing: "Documentation",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/anand-ambhore-b5b9aa284",
    githubUrl: "#",
  },
  {
    name: "Rutuja Gharat",
    role: "Dy. Director",
    photoUrl: "/images/team/Rutuja_Gharat.JPG",
    badges: ["Dy. Director", "Documentation"],
    wing: "Documentation",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/rutuja-gharat-6b8375372",
    githubUrl: "#",
  },
  {
    name: "Zeel Panchal",
    role: "Member",
    photoUrl: "/images/team/Zeel Panchal .jpg",
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
    photoUrl: "/images/team/Tanvi Walam.JPG",
    badges: ["Member", "Documentation"],
    wing: "Documentation",
    instagramUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
];

// Helper: get members by wing
export function getMembersByWing(wing: Wing): TeamMember[] {
  if (wing === "Core Team") return coreTeam;
  return departmentMembers.filter((m) => m.wing === wing);
}
