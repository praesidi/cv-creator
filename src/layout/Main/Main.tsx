import { useState } from "react";
import General from "../../components/General/General";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Overview from "../../components/Overview/Overview";
import Certificates from "../../components/Certificates/Certificates";
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

    if (skill) {
      setSkillsInfo([...skillsInfo, { id: id, value: value }]);
      setSkill("");
    }
  }

  function handleSkillDelete(id: string) {
    setSkillsInfo(skillsInfo.filter((skill) => skill.id !== id));
  }

  interface CertificateInfo {
    id: string;
    value: string;
    year: string;
  }

  const [certificatesInfo, setCertificatesInfo] = useState<CertificateInfo[]>(
    []
  );
  const [certificate, setCertificate] = useState<CertificateInfo>({
    id: "",
    value: "",
    year: "",
  });

  function onCertificateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setCertificate({ ...certificate, [name]: value });
  }

  function handleCertificateClick(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const value = certificate.value;
    const year = certificate.year;
    const id = nanoid(4);

    setCertificatesInfo([
      ...certificatesInfo,
      { id: id, value: value, year: year },
    ]);
    setCertificate({ id: "", value: "", year: "" });
    // console.log("list: ", skillsInfo);
  }

  function handleCertificateDelete(id: string) {
    setCertificatesInfo(
      certificatesInfo.filter((certificate) => certificate.id !== id)
    );
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
        skill={skill}
        skills={skillsInfo}
        onChange={onSkillChange}
        onDelete={handleSkillDelete}
        onClick={handleSkillClick}
      ></Skills>
      <Certificates
        certificate={certificate}
        certificates={certificatesInfo}
        onChange={onCertificateChange}
        onDelete={handleCertificateDelete}
        onClick={handleCertificateClick}
      ></Certificates>
      <Overview
        user={userInfo}
        skills={skillsInfo}
        certificates={certificatesInfo}
      ></Overview>
    </div>
  );
}
