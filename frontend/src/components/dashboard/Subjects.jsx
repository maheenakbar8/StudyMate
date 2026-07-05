import "../../styles/Subjects.css";

import { subjects } from "../../data/subjects";

import { FiArrowRight } from "react-icons/fi";

export default function Subjects() {
  return (
    <section className="subjects">

      <h2 className="section-title">
        Your Subjects
      </h2>

      <div className="subjects-grid">

        {subjects.map((subject) => {

          const Icon = subject.icon;

          return (

            <div
              className="subject-card"
              key={subject.title}
            >

              <div
                className="subject-icon"
                style={{ background: subject.color }}
              >

                <Icon />

              </div>

              <h3>{subject.title}</h3>

              <p>{subject.progress}% Complete</p>

              <div className="progress">

                <div
                  className="progress-fill"
                  style={{
                    width: `${subject.progress}%`,
                    background: subject.color,
                  }}
                />

              </div>

              <div className="subject-stats">

                <span>{subject.lessons} Lessons</span>

                <span>{subject.quizzes} Quizzes</span>

                <span>{subject.assignments} Assignments</span>

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