import React, { useContext, useState } from "react";

const AppContext = React.createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <AppContext.Provider
      value={{ showSidebar, setShowSidebar, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
