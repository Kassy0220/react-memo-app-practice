import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MemoCreateButton from "./MemoCreateButton";
import MemoList from "./MemoList";
import MemoEditForm from "./MemoEditForm";
import Header from "./Header";
import { useMemos } from "./hooks/useMemos";
import "./MemoApp.css";

function MemoApp() {
  const { allMemos, createMemo, updateMemo, deleteMemo } = useMemos();
  const [memoInEdit, setMemoInEdit] = useState(null);

  function handleCreateClick() {
    if (memoInEdit) {
      return;
    }

    const newMemo = { id: uuidv4(), content: "" };
    createMemo(newMemo);
    setMemoInEdit(newMemo);
  }

  function handleMemoItemClick(memo) {
    if (memoInEdit) {
      return;
    }

    setMemoInEdit(memo);
  }

  function handleEditClick(updatedMemo) {
    updateMemo(updatedMemo);
    setMemoInEdit(null);
  }

  function handleDeleteClick(id) {
    deleteMemo(id);
    setMemoInEdit(null);
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
      <Header />
      <div className="flexbox">
        <div id="menu">
          <div id="memo-create-button">
            <MemoCreateButton handleCreateClick={handleCreateClick} />
          </div>
          <div id="memo-list">
            <MemoList
              memos={allMemos}
              handleMemoItemClick={handleMemoItemClick}
            />
          </div>
        </div>
        {memoEditForm}
      </div>
    </div>
  );
}

export default MemoApp;
