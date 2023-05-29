import { useState } from "react";
import { useFormInput } from "./hooks/useFormInput";
import "./MemoEditForm.css";

function MemoEditForm({ memo, handleEditClick, handleDeleteClick }) {
  const memoInput = useFormInput(memo.content);
  const [clickedButton, setClickedButton] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    switch (clickedButton) {
      case "edit":
        handleEditClick({ ...memo, content: memoInput.value });
        break;
      case "delete":
        handleDeleteClick(memo.id);
        break;
      default:
        break;
    }

    setClickedButton(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea {...memoInput} />
      <div className="button-container">
        <button onClick={() => setClickedButton("edit")}>編集</button>
        <button onClick={() => setClickedButton("delete")}>削除</button>
      </div>
    </form>
  );
}

export default MemoEditForm;
