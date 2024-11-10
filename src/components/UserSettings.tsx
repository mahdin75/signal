import React from "react";
import "./usersettings.css";
import Input from "./Input";
import SaveIcon from "../assets/icons/save.png";

function UserSettings() {
  return (
    <div className="user-settings">
      <h4>
        <span>User Settings</span> <img alt="save" src={SaveIcon} />
      </h4>{" "}
      <Input label="Email" />
      <Input label="Name" />
      <Input label="Age" />
      <Input label="Gender" />
      {/* Todo !!!! combo box */}
    </div>
  );
}

export default UserSettings;
