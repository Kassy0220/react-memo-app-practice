import { useContext } from "react";
import { LogInContext } from "./contexts/LogInContext";
import "./LoginButton.css";

function LoginButton() {
  const { loggedIn, setLoggedIn } = useContext(LogInContext);
  const text = loggedIn ? "ログアウト" : "ログイン";
  return (
    <button id="login-button" onClick={() => setLoggedIn(!loggedIn)}>
      {text}
    </button>
  );
}

export default LoginButton;
