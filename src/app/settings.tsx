import React from "react";
import UserSettings from "../components/UserSettings";
import FamilySettings from "../components/FamilySettings";
import "./settings.css";

function Settings() {
  return (
    <div className="settings">
      <FamilySettings />
      <UserSettings />
    </div>
  );
}

export default Settings;
