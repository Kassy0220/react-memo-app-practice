import "./MemoList.css";

function MemoList({ memos, handleMemoItemClick }) {
  const listItems = memos.map((memo) => (
    <li className="memo-item" key={memo.id}>
      <button onClick={() => handleMemoItemClick(memo)}>
        {memo.content.split("\n")[0]}
      </button>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default MemoList;
