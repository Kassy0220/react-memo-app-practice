import { useState } from "react";
import { LogInContext } from "./LogInContext";

export function LogInProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LogInContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LogInContext.Provider>
  );
}
