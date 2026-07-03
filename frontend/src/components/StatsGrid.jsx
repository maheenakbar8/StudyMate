import "../styles/StatsGrid.css";
import { stats } from "../data/dummyData";

export default function StatsGrid() {
  return (
    <section className="stats-grid">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div className="stat-card" key={stat.title}>
            <div className="stat-icon">
              <Icon />
            </div>

            <h2>{stat.value}</h2>

            <span>{stat.subtitle}</span>

            <p>{stat.title}</p>

            <small>{stat.change}</small>
          </div>
        );
      })}
    </section>
  );
}