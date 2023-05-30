import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MemoCreateButton from "./MemoCreateButton";
import MemoList from "./MemoList";
import MemoEditForm from "./MemoEditForm";
import Header from "./Header";
import { useMemos } from "./hooks/useMemos";
import { useLoggedIn } from "./hooks/useLoggedIn";
import "./MemoApp.css";

function MemoApp() {
  const { allMemos, createMemo, updateMemo, deleteMemo } = useMemos();
  const [focusedMemo, setFocusedMemo] = useState(null);
  const { loggedIn } = useLoggedIn();

  function handleCreateClick() {
    if (focusedMemo) {
      return;
    }

    const newMemo = { id: uuidv4(), content: "" };
    createMemo(newMemo);
    setFocusedMemo(newMemo);
  }

  function handleMemoItemClick(memo) {
    if (focusedMemo && loggedIn) {
      return;
    }

    setFocusedMemo(memo);
  }

  function handleEditClick(updatedMemo) {
    updateMemo(updatedMemo);
    setFocusedMemo(null);
  }

  function handleDeleteClick(id) {
    deleteMemo(id);
    setFocusedMemo(null);
  }

  function removeFocusedMemo(e) {
    if (e.target.className.includes("clickable-element")) {
      return;
    }

    setFocusedMemo(null);
  }

  const memoEditForm = focusedMemo ? (
    <div id="memo-edit-form">
      <MemoEditForm
        memo={focusedMemo}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  ) : null;

  const memoDetail = focusedMemo ? (
    <div id="memo-detail" className="clickable-element">
      {focusedMemo.content}
    </div>
  ) : null;

  return (
    <div id="memo-app" onClick={removeFocusedMemo}>
      <h1>React Memo App</h1>
      <Header />
      <div className="flexbox">
        <div id="menu">
          <MemoCreateButton handleCreateClick={handleCreateClick} />
          <div id="memo-list">
            <MemoList
              memos={allMemos}
              handleMemoItemClick={handleMemoItemClick}
            />
          </div>
        </div>
        {loggedIn ? memoEditForm : memoDetail}
      </div>
    </div>
  );
}

export default MemoApp;
