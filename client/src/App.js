import React from "react";
import Header from "./Components/Header";
import TinderCards from "./Components/TinderCards";
import "./App.css";
import SwipeButtons from "./Components/SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
