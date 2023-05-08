function MemoList({ memos }) {
  const listItems = memos.map((memo) => (
    <li className="memo-item" key={memo.id}>
      <button>{memo.content}</button>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default MemoList;
