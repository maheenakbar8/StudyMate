import "../../styles/Hero.css";
import { FiArrowRight, FiPlay } from "react-icons/fi";

export default function Hero() {
    const hour = new Date().getHours();

let greeting = "Good Evening";
let emoji = "🌙";

if (hour < 12) {
  greeting = "Good Morning";
  emoji = "☀️";
} else if (hour < 18) {
  greeting = "Good Afternoon";
  emoji = "🌤";
}
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-greeting">
  {emoji} {greeting}, Maheen
</p>

        <h1>
          Ready to continue your learning journey?
        </h1>

        <p className="hero-subtitle">
          Your AI study companion is here to help you learn faster,
          stay organized, and achieve your goals.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            <FiPlay />
            Resume Session
          </button>

          <button className="secondary-btn">
            Explore Workspace
            <FiArrowRight />
          </button>

        </div>

      </div>
      <div className="hero-stats">

  <div className="stat-chip">
    <h2>🔥 12</h2>
    <span>Day Streak</span>
  </div>

  <div className="stat-chip">
    <h2>📚 5</h2>
    <span>Subjects</span>
  </div>

  <div className="stat-chip">
    <h2>⏱ 42</h2>
    <span>Study Hours</span>
  </div>

  <div className="stat-chip">
    <h2>🎯 81%</h2>
    <span>Goal Complete</span>
  </div>

</div>


    </section>
  );
}