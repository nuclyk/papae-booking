import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="container">
      <Navbar />
      <Sidebar />
      <Outlet />
    </main>
  );
}

export default App;
