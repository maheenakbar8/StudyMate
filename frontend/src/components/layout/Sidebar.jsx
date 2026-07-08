import {
  FiHome,
  FiMessageSquare,
  FiBookOpen,
  FiLayers,
  FiCalendar,
  FiSettings,
  FiMoon,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>🎓 StudyMate</h2>
      </div>

      <nav className="sidebar-nav">

  <NavLink to="/">
    <FiHome />
    <span>Dashboard</span>
  </NavLink>

  <NavLink to="/workspace">
    <FiMessageSquare />
    <span>AI Workspace</span>
  </NavLink>

  <NavLink to="/subjects">
    <FiBookOpen />
    <span>Subjects</span>
  </NavLink>

  <NavLink to="/flashcards">
    <FiLayers />
    <span>Flashcards</span>
  </NavLink>

  <NavLink to="/planner">
    <FiCalendar />
    <span>Planner</span>
  </NavLink>

  <NavLink to="/settings">
    <FiSettings />
    <span>Settings</span>
  </NavLink>

</nav>

      <div className="theme-toggle">
        <FiMoon />
        <span>Dark Mode</span>
      </div>
    </aside>
  );
}