import { useState } from "react";
import Header from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
