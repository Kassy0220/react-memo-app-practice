import "./MemoCreateButton.css";

function MemoCreateButton({ handleCreateClick }) {
  return (
    <button id="create-button" onClick={handleCreateClick}>
      +
    </button>
  );
}

export default MemoCreateButton;
