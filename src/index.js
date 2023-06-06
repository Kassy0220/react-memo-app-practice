import React from "react";
import ReactDOM from "react-dom/client";
import MemoApp from "./MemoApp";
import { LogInProvider } from "./contexts/LogInProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LogInProvider>
      <MemoApp />
    </LogInProvider>
  </React.StrictMode>
);
