import { useState } from "react";
import "./Overview.css";
import avatarPlaceholder from "../../assets/avatar-placeholder.jpg";

export default function Overview() {
  return (
    <div className="overview-container">
      <div className="overview-header">
        <div className="overview-header-left">
          <h1 className="overview-name">Edward Kheel</h1>
          <p className="overview-description">
            The most beautiful idiot in the solar system
          </p>
        </div>
        <div className="overview-header-right">
          <img src={avatarPlaceholder} alt="avatar-placeholder" />
        </div>
      </div>
      <div className="overview-socials">
        <table>
          <tbody>
            <tr>
              <td>
                <i className="fa-solid fa-paper-plane"></i>
              </td>
              <td>
                <i className="fa-solid fa-location-dot"></i>
              </td>
            </tr>
            <tr>
              <td>
                <i className="fa-solid fa-phone"></i>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overview-main"></div>
    </div>
  );
}
