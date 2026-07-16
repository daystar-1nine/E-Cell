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
      // TODO: replace with real data
      { name: "John Doe", role: "President", photoUrl: "" },
      { name: "Jane Smith", role: "Vice President", photoUrl: "" },
    ],
  },
  {
    id: "tech",
    name: "Tech Team",
    members: [
      { name: "Alice Tech", role: "Head of Tech", photoUrl: "" },
    ],
  },
  {
    id: "design",
    name: "Design Team",
    members: [
      { name: "Bob Design", role: "Head of Design", photoUrl: "" },
    ],
  },
  {
    id: "marketing",
    name: "Marketing Team",
    members: [
      { name: "Charlie Market", role: "Head of Marketing", photoUrl: "" },
    ],
  },
  {
    id: "events",
    name: "Events Team",
    members: [
      { name: "Diana Event", role: "Head of Events", photoUrl: "" },
    ],
  },
  {
    id: "pr",
    name: "PR & Outreach Team",
    members: [
      { name: "Eve Outreach", role: "Head of PR", photoUrl: "" },
    ],
  },
  {
    id: "finance",
    name: "Finance Team",
    members: [
      { name: "Frank Finance", role: "Head of Finance", photoUrl: "" },
    ],
  },
];
