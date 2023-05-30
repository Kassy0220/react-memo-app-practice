import { useLoggedIn } from "./hooks/useLoggedIn";
import "./MemoCreateButton.css";

function MemoCreateButton({ handleCreateClick }) {
  const { loggedIn } = useLoggedIn();
  return (
    loggedIn && (
      <div id="memo-create-button">
        <button id="create-button" onClick={handleCreateClick}>
          +
        </button>
      </div>
    )
  );
}

export default MemoCreateButton;
