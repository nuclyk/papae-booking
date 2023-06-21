import { useGlobalContext } from "../context.jsx";
import { Link } from "react-router-dom";

import {
  DocumentIcon,
  HeartIcon,
  FaceSmileIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const categories = [
  {
    id: 1,
    name: "Lay people",
    links: [
      {
        id: 1,
        name: "All Applications",
        url: "/applications",
        icon: DocumentIcon,
        sort: "all",
      },
      {
        id: 2,
        name: "Fixed Retreat",
        url: "/applications",
        icon: HeartIcon,
        sort: "fixed",
      },
      {
        id: 3,
        name: "Flexible Retreat",
        url: "/applications",
        icon: FaceSmileIcon,
        sort: "flexible",
      },
    ],
  },
  {
    id: 2,
    name: "Monks",
    links: [
      {
        id: 1,
        name: "All Monk Applications",
        url: "/applications",
        icon: DocumentTextIcon,
      },
    ],
  },
];

const Sidebar = () => {
  const { showSidebar } = useGlobalContext();

  return (
    <div id="sidebar__container" className={`${showSidebar ? "active" : ""}`}>
      {categories.map((cat) => {
        return (
          <ul key={cat.id}>
            <li>{cat.name}</li>
            <ul>
              {cat.links.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.id}>
                    <Icon className="link-icon" />
                    <Link to={link.url}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </ul>
        );
      })}
    </div>
  );
};

export default Sidebar;
