import { Link } from "react-router-dom";
import { useGlobalContext } from "../context.jsx";

const Navbar = () => {
  const { setShowSidebar, showSidebar, setQuery } = useGlobalContext();

  return (
    <nav id="navbar__container">
      <div>
        <button
          type="button"
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        >
          ??
        </button>
      </div>
      <div id="logo">PAPAE</div>
      <div>
        <input
          type="search"
          placeholder="Ref, name or email"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        <Link to="/">Log in</Link>
        <Link to="/">Sign up</Link>
      </div>
    </nav>
  );
};
export default Navbar;
