import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";

function Root() {
  return (
    <main id="main__container">
      <Navbar />
      <Sidebar />
      <Outlet />
    </main>
  );
}

export default Root;
