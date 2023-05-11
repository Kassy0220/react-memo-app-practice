import { useState } from "react";
import "./MemoEditForm.css";

function MemoEditForm({ memo, handleEditClick }) {
  const [value, setValue] = useState(memo.content);
  const [clickedButton, setClickedButton] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (clickedButton === "edit") {
      handleEditClick({ ...memo, content: value });
    }
    setClickedButton(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <div className="button-container">
        <button onClick={() => setClickedButton("edit")}>編集</button>
        <button>削除</button>
      </div>
    </form>
  );
}

export default MemoEditForm;
