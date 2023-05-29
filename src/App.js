import React from "react";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollToTop></ScrollToTop>
      <Header />
      <Main />
    </div>
  );
}

export default App;
