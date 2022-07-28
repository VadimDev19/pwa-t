import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("app");
  window.addEventListener("beforeinstallprompt", (ev) => {
    console.log("beforeinstallprompt index", ev);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button>clike me</button>
      </header>
    </div>
  );
}

export default App;
