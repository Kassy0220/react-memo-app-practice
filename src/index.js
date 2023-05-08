import React from "react";
import ReactDOM from "react-dom/client";
import MemoApp from "./MemoApp";

const sampleMemos = [
  { id: 1, content: "バクダン" },
  { id: 2, content: "テッパン" },
  { id: 3, content: "ハシラ" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MemoApp memos={sampleMemos} />
  </React.StrictMode>
);
