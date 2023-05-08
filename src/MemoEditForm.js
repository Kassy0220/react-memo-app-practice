function MemoEditForm({ memo }) {
  return (
    <form>
      <textarea value={memo.content} />
      <button>編集</button>
      <button>削除</button>
    </form>
  );
}

export default MemoEditForm;
