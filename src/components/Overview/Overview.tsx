import "./Overview.css";
import avatarPlaceholder from "../../assets/avatar-placeholder.jpg";

export default function Overview({ user, skills }: { user: any; skills: any }) {
  return (
    <div className="overview-container">
      <div className="overview-header">
        <div className="overview-header-left">
          <h1 className="overview-name">
            {user.fName} {user.lName}
          </h1>
          <h2 className="overview-title">{user.title}</h2>
          <p className="overview-description">{user.description}</p>
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
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overview-main">
        <div className="overview-main-left">
          <div>
            <h2>Work History</h2>
          </div>
        </div>
        <div className="overview-main-right">
          <div>
            <h2>Skills</h2>
            <ul>
              {skills.map((skill: any) => (
                <li key={skill.id}>
                  <span>{skill.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
