import { useLoggedIn } from "./hooks/useLoggedIn";
import "./LoginButton.css";

function LoginButton() {
  const { loggedIn, setLoggedIn } = useLoggedIn();
  const text = loggedIn ? "ログアウト" : "ログイン";
  return (
    <button id="login-button" onClick={() => setLoggedIn(!loggedIn)}>
      {text}
    </button>
  );
}

export default LoginButton;
