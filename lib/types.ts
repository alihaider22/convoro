export interface Companion {
  id: string;
  title: string;
  topic: string;
  duration: string;
  subject: string;
  backgroundColor: string;
  bookmarkIcon?: string;
}

export const featuredCompanions: Companion[] = [
  {
    id: "neura",
    title: "Neura the Brainy Explorer",
    topic: "Neural Network of the Brain",
    duration: "45 mins",
    subject: "Science",
    backgroundColor: "#E8D5F2", // Light purple
  },
  {
    id: "countsy",
    title: "Countsy the Number Wizard",
    topic: "Derivatives & Integrals",
    duration: "30 mins",
    subject: "Maths",
    backgroundColor: "#FEF3C7", // Light yellow
  },
  {
    id: "verba",
    title: "Verba the Vocabulary Builder",
    topic: "English Literature",
    duration: "30 mins",
    subject: "Language",
    backgroundColor: "#DBEAFE", // Light blue
  },
];
