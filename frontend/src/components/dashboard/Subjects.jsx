import "../../styles/Subjects.css";
import { subjects } from "../../data/subjects";
import { FiArrowRight } from "react-icons/fi";

export default function Subjects() {
  return (
    <section className="subjects-section">
      <div className="section-header">
        <h2>Your Subjects</h2>
        <button className="view-all">View All</button>
      </div>

      <div className="subjects-grid">
        {subjects.map((subject) => {
          const Icon = subject.icon;

          return (
            <div className="subject-card" key={subject.title}>
              <div
                className="subject-icon"
                style={{ backgroundColor: subject.color }}
              >
                <Icon />
              </div>

              <h3>{subject.title}</h3>

              <div className="progress-info">
                <span>{subject.progress}% Complete</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${subject.progress}%`,
                    backgroundColor: subject.color,
                  }}
                />
              </div>

              <div className="subject-meta">
                <span>📚 {subject.lessons} Lessons</span>
                <span>📝 {subject.assignments} Assignments</span>
              </div>

              <button className="continue-btn">
                Continue
                <FiArrowRight />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}