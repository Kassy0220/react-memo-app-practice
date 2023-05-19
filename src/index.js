import React from "react";
import ReactDOM from "react-dom/client";
import MemoApp from "./MemoApp";

const storagedMemos = JSON.parse(localStorage.getItem("allMemos"));
const allMemos = storagedMemos ? storagedMemos : [];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MemoApp memos={allMemos} />
  </React.StrictMode>
);
