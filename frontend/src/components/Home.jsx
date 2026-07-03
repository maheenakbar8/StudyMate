import GreetingCard from "./GreetingCard";
import StatsGrid from "./StatsGrid";
import QuickActions from "./QuickActions";
import Subjects from "./Subjects";
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