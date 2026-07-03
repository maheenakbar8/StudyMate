import { FiArrowRight, FiPlay } from "react-icons/fi";
import "../styles/GreetingCard.css";

export default function GreetingCard() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-badge">
          ✨ AI Powered Learning
        </span>

        <h1>
          Good Evening,
          <br />
          <span>Maheen 👋</span>
        </h1>

        <p>
          Your personal AI study companion that helps you
          learn faster, revise smarter, and stay consistent.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            <FiPlay />
            Resume Session
          </button>

          <button className="secondary-btn">
            <FiArrowRight />
            Explore Workspace
          </button>

        </div>

      </div>

    </section>
  );
}