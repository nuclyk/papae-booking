import { useGlobalContext } from "../context.jsx";

const Sidebar = () => {
  const { showSidebar } = useGlobalContext();

  return (
    <div className={`sidebar ${showSidebar ? "active" : ""}`}>Sidebar</div>
  );
};

export default Sidebar;
