import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../../styles/Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Navbar />

        <main>{children}</main>
      </div>
    </div>
  );
}