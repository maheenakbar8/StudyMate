import Hero from "../components/dashboard/Hero";
import QuickActions from "../components/dashboard/QuickActions";
import Subjects from "../components/dashboard/Subjects";
import Upcoming from "../components/Upcoming";

import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <Hero />

      <div className="dashboard-grid">
        <div className="left-column">
  <Subjects />
</div>

        <div className="right-column">
          <QuickActions />
          <Upcoming />
        </div>
      </div>
    </>
  );
}