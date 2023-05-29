import { useState, useEffect } from "react";

export function useMemos() {
  const [memos, setMemos] = useState([]);
  const localStorageKey = "allMemos";

  useEffect(() => {
    const allMemos = JSON.parse(localStorage.getItem(localStorageKey));
    if (allMemos) {
      setMemos(allMemos);
    }
  }, []);

  function createMemo(newMemo) {
    saveMemos([...memos, newMemo]);
  }

  function updateMemo(updatedMemo) {
    const newMemos = memos.map((memo) =>
      memo.id === updatedMemo.id
        ? { ...memo, content: updatedMemo.content }
        : memo
    );
    saveMemos(newMemos);
  }

  function deleteMemo(id) {
    const newMemos = memos.filter((memo) => memo.id !== id);
    saveMemos(newMemos);
  }

  function saveMemos(memos) {
    setMemos(memos);
    localStorage.setItem("allMemos", JSON.stringify(memos));
  }

  return { allMemos: memos, createMemo, updateMemo, deleteMemo };
}
