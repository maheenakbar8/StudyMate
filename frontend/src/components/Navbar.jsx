import {
  FiSearch,
  FiBell,
  FiUser,
  FiBookOpen,
} from "react-icons/fi";

import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">

        <div className="logo-icon">
          <FiBookOpen />
        </div>

        <div>
          <h2>StudyMate</h2>
          <p>Academic Operating System</p>
        </div>

      </div>

      <div className="navbar-right">

        <div className="search-box">
          <FiSearch />
          <input
            type="text"
            placeholder="Search anything..."
          />
        </div>

        <button className="icon-btn">
          <FiBell />
        </button>

        <button className="profile-btn">
          <FiUser />
        </button>

      </div>

    </header>
  );
}