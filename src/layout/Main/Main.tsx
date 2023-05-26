import { useState } from "react";
import General from "../../components/General/General";
import PreviousWork from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Overview from "../../components/Overview/Overview";
import "./Main.css";

export default function Main() {
  interface UserInfo {
    title: string;
    fName: string;
    lName: string;
    address: string;
    phone: string;
    email: string;
    description: string;
    photo: string;
  }

  const [userInfo, setUserInfo] = useState<UserInfo>({
    title: "",
    fName: "",
    lName: "",
    address: "",
    phone: "",
    email: "",
    description: "",
    photo: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === "photo" && e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setUserInfo({
        ...userInfo,
        photo: url,
      });
    } else {
      setUserInfo({ ...userInfo, [name]: value });
    }
  }

  return (
    <div className="main">
      <General onChange={handleChange} user={userInfo}></General>
      <PreviousWork></PreviousWork>
      <Education></Education>
      <Skills></Skills>
      <Overview user={userInfo}></Overview>
    </div>
  );
}
