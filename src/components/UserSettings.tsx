import React from "react";
import "./usersettings.css";
import Input from "./Input";

function UserSettings() {
  return (
    <div className="user-settings">
      <h4>User Settings</h4>
      <Input label="Email" />
      <Input label="Name" />
      <Input label="Age" />
      <Input label="Gender" />
      {/* Todo !!!! combo box */}
    </div>
  );
}

export default UserSettings;
