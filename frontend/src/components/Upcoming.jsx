import "../styles/Upcoming.css";
import { upcoming } from "../data/upcoming";

export default function Upcoming() {
  return (
    <section className="upcoming-section">
      <div className="section-header">
        <h2>Upcoming</h2>
      </div>

      <div className="timeline">
        {upcoming.map((item) => (
          <div className="timeline-item" key={item.title}>
            <div
              className="timeline-dot"
              style={{ backgroundColor: item.color }}
            />

            <div className="timeline-content">
              <span className="timeline-time">{item.time}</span>

              <h3>
                {item.icon} {item.title}
              </h3>

              <p>{item.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}