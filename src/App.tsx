import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("effect");
    window.addEventListener("beforeinstallprompt", (ev) => {
      console.log("beforeinstallprompt app", ev);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button>clike me 2</button>
      </header>
    </div>
  );
}

export default App;
