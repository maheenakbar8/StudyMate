import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Dashboard from "./pages/Dashboard";
import AIWorkspace from "./pages/AIWorkspace";
import Subjects from "./pages/Subjects";
import Flashcards from "./pages/Flashcards";
import Planner from "./pages/Planner";
import Settings from "./pages/Settings";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/workspace" element={<AIWorkspace />} />

        <Route path="/subjects" element={<Subjects />} />

        <Route path="/flashcards" element={<Flashcards />} />

        <Route path="/planner" element={<Planner />} />

        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;