import { useContext } from "react";
import { LogInContext } from "./contexts/LogInContext";
import "./MemoCreateButton.css";

function MemoCreateButton({ handleCreateClick }) {
  const { loggedIn } = useContext(LogInContext);
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
