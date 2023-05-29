import "./Overview.css";
import avatarPlaceholder from "../../assets/avatar-placeholder.jpg";

export default function Overview({
  user,
  workList,
  skillList,
  certificateList,
  educationList,
}: {
  user: any;
  workList: any;
  skillList: any;
  certificateList: any;
  educationList: any;
}) {
  return (
    <div className="overview-container">
      <div className="overview-header">
        <div className="overview-header-left">
          <h1 className="overview-name">
            {user.fName} {user.lName}
          </h1>
          <h2 className="overview-title">{user.title}</h2>
          <p className="overview-user-description">{user.description}</p>
        </div>
        <div className="overview-header-right">
          {user.photo ? (
            <img src={user.photo} alt="user-photo" />
          ) : (
            <img src={avatarPlaceholder} alt="avatar-placeholder" />
          )}
        </div>
      </div>
      <div className="overview-contacts">
        <table>
          <tbody>
            <tr>
              <td>
                <i className="fa-solid fa-paper-plane"></i>
                {user.email}
              </td>
              <td>
                <i className="fa-solid fa-location-dot"></i>
                {user.address}
              </td>
            </tr>
            <tr>
              <td>
                <i className="fa-solid fa-phone"></i>
                {user.phone}
              </td>
              <td>
                <i className="fa-solid fa-earth-americas"></i>
                {user.portfolio}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overview-main">
        <div className="overview-main-left">
          <div>
            <h2>Work History</h2>
            <ul className="work-list">
              {workList.map((work: any) => (
                <li key={work.id}>
                  <span>
                    {work.to ? `${work.from} to ${work.to}` : work.from}
                  </span>
                  <span className="span-bald">{work.position}</span>
                  {work.city ? (
                    <span>
                      <b>{work.company}</b>
                      {", "}
                      {work.city}
                    </span>
                  ) : (
                    <span className="work-list">{work.company}</span>
                  )}
                  <span>{work.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="overview-main-right">
          <div>
            <h2>Skills</h2>
            <ul className="skill-list">
              {skillList.map((skill: any) => (
                <li key={skill.id}>
                  <span>{skill.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Education</h2>
            <ul className="education-list">
              {educationList.map((education: any) => (
                <li key={education.id}>
                  <span>
                    {education.to
                      ? `${education.from} to ${education.to}`
                      : education.from}
                  </span>
                  <span className="span-bald">
                    {education.subject
                      ? `${education.degree}, ${education.subject}`
                      : education.degree}
                  </span>
                  <span>
                    {education.city
                      ? `${education.university}, ${education.city}`
                      : education.university}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Certifications</h2>
            <ul className="certificates-list">
              {certificateList.map((certificate: any) => (
                <li key={certificate.id}>
                  <span>
                    {certificate.year
                      ? `${certificate.value}, ${certificate.year}`
                      : `${certificate.value}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
