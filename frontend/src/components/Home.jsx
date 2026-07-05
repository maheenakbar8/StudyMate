import GreetingCard from "./GreetingCard";
import StatsGrid from "./dashboard/StatsGrid";
import QuickActions from "./dashboard/QuickActions";
import Subjects from "./dashboard/Subjects";
import Upcoming from "./Upcoming";

export default function Home() {
  return (
    <main className="home">

      <GreetingCard />

      <StatsGrid />

      <QuickActions />

      <div className="bottom-section">
        <Subjects />
        <Upcoming />
      </div>

    </main>
  );
}