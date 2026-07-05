import {
  FiHome,
  FiMessageSquare,
  FiBookOpen,
  FiLayers,
  FiCalendar,
  FiSettings,
  FiMoon,
} from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>🎓 StudyMate</h2>
      </div>

      <nav className="sidebar-nav">
        <a href="#" className="active">
          <FiHome />
          <span>Dashboard</span>
        </a>

        <a href="#">
          <FiMessageSquare />
          <span>AI Workspace</span>
        </a>

        <a href="#">
          <FiBookOpen />
          <span>Subjects</span>
        </a>

        <a href="#">
          <FiLayers />
          <span>Flashcards</span>
        </a>

        <a href="#">
          <FiCalendar />
          <span>Planner</span>
        </a>

        <a href="#">
          <FiSettings />
          <span>Settings</span>
        </a>
      </nav>

      <div className="theme-toggle">
        <FiMoon />
        <span>Dark Mode</span>
      </div>
    </aside>
  );
}