import { useContext } from "react";
import { LogInContext } from "../contexts/LogInContext";

export function useLoggedIn() {
  const { loggedIn, setLoggedIn } = useContext(LogInContext);

  return { loggedIn, setLoggedIn };
}
