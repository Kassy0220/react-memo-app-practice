import "./MemoList.css";

function MemoList({ memos, handleMemoItemClick }) {
  const memoStatus = memos.length
    ? `${memos.length}個のメモがあります`
    : "メモはありません";

  const memoList = memos.length ? (
    <ul>
      {memos.map((memo) => (
        <li className="memo-item" key={memo.id}>
          <button onClick={() => handleMemoItemClick(memo)}>
            {memo.content.split("\n")[0]}
          </button>
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <>
      <p id="memo-status">{memoStatus}</p>
      {memoList}
    </>
  );
}

export default MemoList;
