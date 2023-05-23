import { useState } from "react";
import "./General.css";

export default function General() {
  return (
    <div className="general-info">
      <input
        type="text"
        id="title"
        placeholder="Title"
        maxLength={30}
        minLength={3}
      />

      <input
        type="text"
        id="name"
        placeholder="First Name"
        maxLength={20}
        minLength={1}
      />

      <input
        type="text"
        id="surname"
        placeholder="Last Name"
        maxLength={20}
        minLength={1}
      />

      <input type="text" id="address" placeholder="Address" />

      <input type="tel" id="phone" placeholder="Phone Number" />

      <input type="email" id="email" placeholder="Email" />

      <textarea
        id="description"
        cols={30}
        rows={5}
        placeholder="Write more about yourself!"
      ></textarea>

      <label htmlFor="photo">
        Add Photo
        <input type="file" name="" id="photo" />
      </label>
    </div>
  );
}
