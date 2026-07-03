import {
  FiMessageSquare,
  FiFileText,
  FiLayers,
  FiBookOpen,
  FiCalendar,
  FiGitBranch,
} from "react-icons/fi";

export const quickActions = [
  {
    title: "AI Chat",
    description: "Chat with your notes and PDFs.",
    shortcut: "⌘ K",
    icon: FiMessageSquare,
  },
  {
    title: "Summarize",
    description: "Generate concise study notes.",
    shortcut: "⌘ S",
    icon: FiFileText,
  },
  {
    title: "Flashcards",
    description: "Create smart flashcards instantly.",
    shortcut: "⌘ F",
    icon: FiLayers,
  },
  {
    title: "Quiz Generator",
    description: "Test yourself with AI quizzes.",
    shortcut: "⌘ Q",
    icon: FiBookOpen,
  },
  {
    title: "Planner",
    description: "Organize your semester.",
    shortcut: "⌘ P",
    icon: FiCalendar,
  },
  {
    title: "Mind Maps",
    description: "Visualize difficult concepts.",
    shortcut: "⌘ M",
    icon: FiGitBranch,
  },
];