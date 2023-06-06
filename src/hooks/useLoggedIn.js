import { LogInContextValue } from "../contexts/LogInProvider";

export function useLoggedIn() {
  const { loggedIn, setLoggedIn } = LogInContextValue();

  function login() {
    setLoggedIn(true);
  }

  function logout() {
    setLoggedIn(false);
  }

  return { loggedIn, login, logout };
}
