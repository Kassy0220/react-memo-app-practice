import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MemoCreateButton from "./MemoCreateButton";
import MemoList from "./MemoList";
import MemoEditForm from "./MemoEditForm";
import "./MemoApp.css";

function MemoApp({ memos }) {
  const [allMemos, setAllMemos] = useState(memos);
  const [memoInEdit, setMemoInEdit] = useState(null);

  function handleCreateClick() {
    const newMemo = { id: uuidv4(), content: "" };
    saveMemos([...allMemos, newMemo]);
    setMemoInEdit(newMemo);
  }

  function handleEditClick(updatedMemo) {
    const newMemos = allMemos.map((memo) =>
      memo.id === updatedMemo.id
        ? { ...memo, content: updatedMemo.content }
        : memo
    );
    saveMemos(newMemos);
    setMemoInEdit(null);
  }

  function handleDeleteClick(id) {
    const updatedMemos = allMemos.filter((memo) => memo.id !== id);
    saveMemos(updatedMemos);
    setMemoInEdit(null);
  }

  function saveMemos(memos) {
    setAllMemos(memos);
    localStorage.setItem("allMemos", JSON.stringify(memos));
  }

  const memoEditForm = memoInEdit ? (
    <div id="memo-edit-form">
      <MemoEditForm
        memo={memoInEdit}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  ) : null;

  return (
    <div id="memo-app">
      <h1>React Memo App</h1>
      <div className="flexbox">
        <div id="menu">
          <div id="memo-create-button">
            <MemoCreateButton handleCreateClick={handleCreateClick} />
          </div>
          <div id="memo-list">
            <MemoList
              memos={allMemos}
              handleMemoItemClick={(memo) => setMemoInEdit(memo)}
            />
          </div>
        </div>
        {memoEditForm}
      </div>
    </div>
  );
}

export default MemoApp;
