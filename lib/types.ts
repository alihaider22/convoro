export interface Companion {
  id: string;
  title: string;
  topic: string;
  duration: string;
  subject: string;
  backgroundColor: string;
  bookmarkIcon?: string;
}

export interface CompletedLesson {
  id: string;
  title: string;
  topic: string;
  subject: string;
  duration: string;
  icon: string;
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

export const completedLessons: CompletedLesson[] = [
  {
    id: "neura-completed",
    title: "Neura the Brainy Explorer",
    topic: "Neural Networks of the Brain",
    subject: "Science",
    duration: "45 mins",
    icon: "/icons/science.svg",
  },
  {
    id: "algebrina-completed",
    title: "Algebrina, the Eq Queen",
    topic: "Solving Linear Equations",
    subject: "Maths",
    duration: "20 mins",
    icon: "/icons/maths.svg",
  },
  {
    id: "luna-completed",
    title: "Luna, Your Grammar Guide",
    topic: "Mastering Tenses in English",
    subject: "Language",
    duration: "32 mins",
    icon: "/icons/language.svg",
  },
  {
    id: "codey-completed",
    title: "Codey, the Logic Hacker",
    topic: "Intro to If-Else Statements",
    subject: "Coding",
    duration: "30 mins",
    icon: "/icons/coding.svg",
  },
  {
    id: "memo-completed",
    title: "Memo, the Memory Keeper",
    topic: "World Wars: Causes & Effects",
    subject: "History",
    duration: "15 mins",
    icon: "/icons/history.svg",
  },
];
