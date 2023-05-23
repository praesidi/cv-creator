import { useState } from "react";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
