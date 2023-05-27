import { useState, useRef } from "react";
import General from "../../components/General/General";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Overview from "../../components/Overview/Overview";
import { nanoid } from "nanoid";
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

  function handleGeneralChange(e: React.ChangeEvent<HTMLInputElement>) {
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

  interface WorkInfo {
    position: string;
    company: string;
    city: string;
    from: string;
    to: string;
  }

  const [workInfo, setWorkInfo] = useState<WorkInfo>({
    position: "",
    company: "",
    city: "",
    from: "",
    to: "",
  });

  function handleWorkChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setWorkInfo({ ...workInfo, [name]: value });
  }

  interface SkillInfo {
    id: string;
    value: string;
  }

  const [skillsInfo, setSkillsInfo] = useState<SkillInfo[]>([]);
  const [skill, setSkill] = useState("");

  function onSkillChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSkill(e.target.value);
  }

  function handleSkillClick() {
    const value = skill;
    const id = nanoid(4);

    setSkillsInfo([...skillsInfo, { id: id, value: value }]);
    setSkill("");
    // console.log("list: ", skillsInfo);
  }

  function handleSkillDelete(id: string) {
    setSkillsInfo(skillsInfo.filter((skill) => skill.id !== id));
  }

  return (
    <div className="main">
      <General onChange={handleGeneralChange} user={userInfo}></General>
      <WorkExperience
        onChange={handleWorkChange}
        work={workInfo}
      ></WorkExperience>
      <Education></Education>
      <Skills
        skillValue={skill}
        skills={skillsInfo}
        onChange={onSkillChange}
        onDelete={handleSkillDelete}
        onClick={handleSkillClick}
      ></Skills>
      <Overview user={userInfo} skills={skillsInfo}></Overview>
    </div>
  );
}
