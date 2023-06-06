import { useLoggedIn } from "./hooks/useLoggedIn";
import "./LoginButton.css";

function LoginButton() {
  const { loggedIn, login, logout } = useLoggedIn();
  const text = loggedIn ? "ログアウト" : "ログイン";

  function handleClick() {
    loggedIn ? logout() : login();
  }

  return (
    <button id="login-button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default LoginButton;
