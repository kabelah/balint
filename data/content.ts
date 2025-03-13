export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Summer Intern at RapidRecruit",
        subTitle: "Groningen, Netherlands",
        date: "Summer 2024",
        description: "RapidRecruit is an innovative startup leveraging new technologies to streamline and accelerate the hiring process, reducing time-to hire while improving candidate-employer matches. Designed and implemented a responsive UI using TailwindCSS and RadixUI components. Developed an efficient database schema and API infrastructure using Prisma ORM with MySQL. Independently managed the full development lifecycle from conception to implementation (currently v0.7).",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Bachelor of Science in Computer Science",
        subTitle: "Maastricht University, Limburg",
        date: "June 2026",
        description: "Relevant Coursework: Data Structures and Algorithms, Procedural Programming, Objects in Programming, Software Engineering and Architectures, Principles of Programming Languages and Introduction to Artificial Intelligence.",
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        title: "SongTracker",
        subTitle: "",
        date: "Spring 2025 ",
        description: "SongTracker is a personal-use iOS application I built in Swift, utilizing advanced iOS system-level frameworks to privately track and display songs I listen to on my personal website. (Not published on the App store). Designed the API and connected the closed iOS system.",
      },
      {
        title: "Chromatic Adventurer: Intelligent Graph Coloring",
        subTitle: "",
        date: "Fall 2024",
        description: "Led a team in developing an adaptive Java-based system that intelligently selects optimal algorithms for graph coloring by analyzing structural properties. Led UI/UX design and implementation for enhanced user interaction. Directed algorithm development, significantly improving computational efficiency. Designed and implemented the classification system responsible for algorithm selection.",
      },
      {
        title: "Transistor: Analysis of Maastricht's Public Transport System",
        subTitle: "",
        date: "Spring 2024",
        description: "Co-developed a Java-based routing engine optimizing Maastricht's public transportation routes to analyze urban accessibility and socio-economic impact. Led development on advanced automated UI testing suites utilizing JavaFX robots for simulation-based testing.",
      }
    ],
  },
  {
    title: "Research",
    items: [
      {
        title: "Research Papers",
        subTitle: "",
        date: "March 2025",
        description: "As of March 2025, I have completed eight research papers spanning topics from adaptive graph coloring and neural network optimization to fairness in AI and socio-economic transport analysis. Although these papers are not yet formally published, each has undergone rigorous review by professors and examination boards. I am interested in publication opportunities to share my findings with the broader academic community.",
      },
    ],
  },
  {
    title: "Languages & Interests",
    items: [
      {
        title: "Languages",
        subTitle: "English; Hungarian",
        date: "",
        description: "",
      },
      {
        title: "Interests",
        subTitle: "Counter-Strike 2; Weight Lifting; Hypixel Skyblock",
        date: "",
        description: "",
      },
    ],
  },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
