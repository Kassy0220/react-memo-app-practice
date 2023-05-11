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
    setMemoInEdit({ id: uuidv4(), content: "新規メモ" });
  }

  function handleEditClick(memo) {
    const targetID = memo.id;
    const targetMemoIndex = allMemos.findIndex((memo) => memo.id === targetID);

    if (targetMemoIndex === -1) {
      saveMemos([...allMemos, memo]);
    } else {
      const newMemos = [...allMemos];
      const updatedMemo = {
        ...newMemos[targetMemoIndex],
        content: memo.content,
      };
      newMemos[targetMemoIndex] = updatedMemo;
      saveMemos(newMemos);
    }
    setMemoInEdit(null);
  }

  function saveMemos(memos) {
    setAllMemos(memos);
    localStorage.setItem("allMemos", JSON.stringify(memos));
  }

  const memoEditForm = memoInEdit ? (
    <div id="memo-edit-form">
      <MemoEditForm memo={memoInEdit} handleEditClick={handleEditClick} />
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
