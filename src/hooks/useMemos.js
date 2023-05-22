import { useState, useEffect } from "react";

export function useMemos() {
  const [allMemos, setAllMemos] = useState([]);
  const localStorageKey = "allMemos";

  useEffect(() => {
    const allMemos = JSON.parse(localStorage.getItem(localStorageKey));
    if (allMemos) {
      setAllMemos(allMemos);
    }
  }, []);

  function createMemo(newMemo) {
    saveMemos([...allMemos, newMemo]);
  }

  function updateMemo(updatedMemo) {
    const newMemos = allMemos.map((memo) =>
      memo.id === updatedMemo.id
        ? { ...memo, content: updatedMemo.content }
        : memo
    );
    saveMemos(newMemos);
  }

  function deleteMemo(id) {
    const newMemos = allMemos.filter((memo) => memo.id !== id);
    saveMemos(newMemos);
  }

  function saveMemos(memos) {
    setAllMemos(memos);
    localStorage.setItem("allMemos", JSON.stringify(memos));
  }

  return { allMemos, createMemo, updateMemo, deleteMemo };
}
