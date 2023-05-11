import "./MemoEditForm.css";

function MemoEditForm({ memo }) {
  return (
    <form>
      <textarea value={memo.content} />
      <div className="button-container">
        <button>編集</button>
        <button>削除</button>
      </div>
    </form>
  );
}

export default MemoEditForm;
