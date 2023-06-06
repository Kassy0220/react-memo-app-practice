import { useState, createContext, useContext } from "react";

const LogInContext = createContext();

export function LogInProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LogInContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LogInContext.Provider>
  );
}

export function LogInContextValue() {
  const { loggedIn, setLoggedIn } = useContext(LogInContext);
  return { loggedIn, setLoggedIn };
}
