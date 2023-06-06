import { LogInContextValue } from "../contexts/LogInProvider";

export function useLoggedIn() {
  const { loggedIn, setLoggedIn } = LogInContextValue();

  return { loggedIn, setLoggedIn };
}
