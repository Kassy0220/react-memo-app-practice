import MemoCreateButton from "./MemoCreateButton";
import MemoList from "./MemoList";
import MemoEditForm from "./MemoEditForm";
import "./MemoApp.css";

function MemoApp({ memos }) {
  return (
    <div id="memo-app">
      <h1>React Memo App</h1>
      <div className="flexbox">
        <div id="menu">
          <div id="memo-create-button">
            <MemoCreateButton />
          </div>
          <div id="memo-list">
            <MemoList memos={memos} />
          </div>
        </div>
        <div id="memo-edit-form">
          <MemoEditForm memo={memos[0]} />
        </div>
      </div>
    </div>
  );
}

export default MemoApp;
