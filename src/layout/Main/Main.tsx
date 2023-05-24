import { useState } from "react";
import General from "../../components/General/General";
import PreviousWork from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Overview from "../../components/Overview/Overview";
import "./Main.css";

//TODO: if edit mode is ON show inputs else show ready CV

export default function Main() {
  return (
    <div className="main">
      <General></General>
      <PreviousWork></PreviousWork>
      <Education></Education>
      <Skills></Skills>
      <Overview></Overview>
    </div>
  );
}
