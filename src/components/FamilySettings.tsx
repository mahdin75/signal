import React from "react";
import "./familysettings.css";
import Input from "./Input";

function FamilySettings() {
  return (
    <div className="family-settings">
      <h4>Family Settings</h4>
      <Input label="Email" />
      <Input label="Name" />
      <Input label="Age" />
      <Input label="Gender" />
      {/* Todo !!!! combo box */}
    </div>
  );
}

export default FamilySettings;
