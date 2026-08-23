export type TeamMember = {
  name: string;
  role: string;
  photoUrl: string;
  linkedinUrl?: string;
};

export type Team = {
  id: string;
  name: string;
  members: TeamMember[];
};

export const teamsData: Team[] = [
  {
    id: "core",
    name: "Core Team",
    members: [
      { name: "Tejas Bhavthankar", role: "President", photoUrl: "" },
      { name: "Sahas Bochare", role: "Vice-President", photoUrl: "" },
      { name: "Yash Tripathi", role: "Secretary", photoUrl: "" },
      { name: "Bhagwan Mourya", role: "Advisor", photoUrl: "" },
    ],
  },
  {
    id: "technical",
    name: "Technical",
    members: [
      { name: "Sairaj Khade", role: "Director", photoUrl: "" },
      { name: "Kunal Bhandarkar", role: "Dy. Director", photoUrl: "" },
      { name: "Siddhi Patil", role: "Dy. Director", photoUrl: "" },
      { name: "Aftab Shaikh", role: "Member", photoUrl: "" },
      { name: "Suraj Sawant", role: "Member", photoUrl: "" },
    ],
  },
  {
    id: "media-design",
    name: "Media & Design",
    members: [
      { name: "Dhavni Sawani", role: "Director", photoUrl: "" },
      { name: "Vaibhav Somanna", role: "Dy. Director", photoUrl: "" },
      { name: "Shubhra Shinde", role: "Member", photoUrl: "" },
      { name: "Soham Gunjal", role: "Member", photoUrl: "" },
      { name: "Prachi Sharma", role: "Member", photoUrl: "" },
      { name: "Numaan Husain", role: "Member", photoUrl: "" },
    ],
  },
  {
    id: "corporate-relations",
    name: "Corporate Relations & Sponsorship",
    members: [
      { name: "Aditya Singh", role: "Director", photoUrl: "" },
      { name: "Vaishnavi Khandagale", role: "Dy. Director", photoUrl: "" },
      { name: "Bhavesh Mishra", role: "Member", photoUrl: "" },
      { name: "Nidhi Yadav", role: "Member", photoUrl: "" },
    ],
  },
  {
    id: "pr",
    name: "Public Relation (PR)",
    members: [
      { name: "Keyur Bidawat", role: "Director", photoUrl: "" },
      { name: "Shamitha Pillai", role: "Dy. Director", photoUrl: "" },
      { name: "Tanu Sharma", role: "Member", photoUrl: "" },
      { name: "Aditi Patil", role: "Member", photoUrl: "" },
      { name: "Bipin Maurya", role: "Member", photoUrl: "" },
    ],
  },
  {
    id: "planning-ops",
    name: "Planning & Operations",
    members: [
      { name: "Advait Chavan", role: "Director", photoUrl: "" },
      { name: "Riddhi Patil", role: "Dy. Director", photoUrl: "" },
      { name: "Surbhi Zope", role: "Member", photoUrl: "" },
      { name: "Shrawani Kudu", role: "Member", photoUrl: "" },
      { name: "Shubham Gole", role: "Member", photoUrl: "" },
      { name: "Nehru Yadav", role: "Member", photoUrl: "" },
    ],
  },
  {
    id: "documentation",
    name: "Documentation",
    members: [
      { name: "Anand Ambhore", role: "Director", photoUrl: "" },
      { name: "Rutuja Gharat", role: "Dy. Director", photoUrl: "" },
      { name: "Zeel Panchal", role: "Member", photoUrl: "" },
      { name: "Shalu Singh", role: "Member", photoUrl: "" },
      { name: "Tanvi Walam", role: "Member", photoUrl: "" },
    ],
  },
];
