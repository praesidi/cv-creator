import { useState } from "react";
import General from "../../components/General/General";
import Work from "../../components/Work/Work";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Overview from "../../components/Overview/Overview";
import Certificates from "../../components/Certificates/Certificates";
import { nanoid } from "nanoid";
import "./Main.css";

export default function Main() {
  interface User {
    title: string;
    fName: string;
    lName: string;
    address: string;
    phone: string;
    email: string;
    portfolio: string;
    description: string;
    photo: string;
  }

  const [user, setUser] = useState<User>({
    title: "",
    fName: "",
    lName: "",
    address: "",
    phone: "",
    email: "",
    portfolio: "",
    description: "",
    photo: "",
  });

  function handleGeneralChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === "photo" && e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setUser({
        ...user,
        photo: url,
      });
    } else {
      setUser({ ...user, [name]: value });
    }
  }

  interface Work {
    id: string;
    position: string;
    description: string;
    company: string;
    city: string;
    from: string;
    to: string;
  }

  const [workList, setWorkList] = useState<Work[]>([
    {
      id: nanoid(4),
      position: "",
      description: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ]);

  function onWorkChange(id: string, e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const index = workList.findIndex((obj) => obj.id === id);

    setWorkList([
      ...workList.slice(0, index),
      {
        ...workList[index],
        [name]: value,
      },
      ...workList.slice(index + 1),
    ]);
  }

  function onWorkAdd() {
    if (workList.length < 5) {
      setWorkList([
        ...workList,
        {
          id: nanoid(4),
          position: "",
          description: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ]);
    } else {
      alert("You can add only up to 5 work places");
    }
  }

  function onWorkDelete(id: string) {
    setWorkList(workList.filter((work) => work.id !== id));
  }

  interface Skill {
    id: string;
    value: string;
  }

  const [skillList, setSkillList] = useState<Skill[]>([]);
  const [skill, setSkill] = useState("");

  function onSkillChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSkill(e.target.value);
  }

  function handleSkillClick() {
    const value = skill;
    const id = nanoid(4);

    if (skill) {
      setSkillList([...skillList, { id: id, value: value }]);
      setSkill("");
    }
  }

  function handleSkillDelete(id: string) {
    setSkillList(skillList.filter((skill) => skill.id !== id));
  }

  interface Education {
    id: string;
    university: string;
    city: string;
    degree: string;
    subject: string;
    from: string;
    to: string;
  }

  const [educationList, setEducationList] = useState<Education[]>([
    {
      id: nanoid(4),
      university: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ]);

  function onEducationChange(
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;
    const index = educationList.findIndex((obj) => obj.id === id);

    setEducationList([
      ...educationList.slice(0, index),
      {
        ...educationList[index],
        [name]: value,
      },
      ...educationList.slice(index + 1),
    ]);
  }

  function onEducationAdd() {
    if (educationList.length < 5) {
      setEducationList([
        ...educationList,
        {
          id: nanoid(4),
          university: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ]);
    } else {
      alert("You can add only up to 5 degrees");
    }
  }

  function onEducationDelete(id: string) {
    setEducationList(educationList.filter((education) => education.id !== id));
  }

  interface Certificate {
    id: string;
    value: string;
    year: string;
  }

  const [certificateList, setCertificateList] = useState<Certificate[]>([]);
  const [certificate, setCertificate] = useState<Certificate>({
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

    setCertificateList([
      ...certificateList,
      { id: id, value: value, year: year },
    ]);
    setCertificate({ id: "", value: "", year: "" });
    // console.log("list: ", skillsInfo);
  }

  function handleCertificateDelete(id: string) {
    setCertificateList(
      certificateList.filter((certificate) => certificate.id !== id)
    );
  }

  return (
    <div className="main">
      <General onChange={handleGeneralChange} user={user}></General>
      <Work
        workList={workList}
        onChange={onWorkChange}
        onDelete={onWorkDelete}
        onAdd={onWorkAdd}
      ></Work>
      <Education
        educationList={educationList}
        onChange={onEducationChange}
        onDelete={onEducationDelete}
        onAdd={onEducationAdd}
      ></Education>
      <Skills
        skill={skill}
        skills={skillList}
        onChange={onSkillChange}
        onDelete={handleSkillDelete}
        onClick={handleSkillClick}
      ></Skills>
      <Certificates
        certificate={certificate}
        certificates={certificateList}
        onChange={onCertificateChange}
        onDelete={handleCertificateDelete}
        onClick={handleCertificateClick}
      ></Certificates>
      <Overview
        user={user}
        workList={workList}
        skillList={skillList}
        certificateList={certificateList}
        educationList={educationList}
      ></Overview>
    </div>
  );
}
