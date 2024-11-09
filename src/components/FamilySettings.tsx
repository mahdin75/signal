import React, { useState } from "react";
import "./familysettings.css";
import Input from "./Input";
import AddCircleIcon from "../assets/icons/add_circle.png";
import MaleIcon from "../assets/icons/male.png";
import FemailIcon from "../assets/icons/female.png";
import DeleteIcon from "../assets/icons/delete.png";

interface familyMemberType {
  email: string;
  name: string;
  age: number;
  gender: string;
}

function FamilySettings() {
  const [familyMembers] = useState<familyMemberType[]>([
    {
      email: "a@a.com",
      name: "Jack",
      age: 20,
      gender: "male",
    },
    {
      email: "a@a.com",
      name: "Jack",
      age: 28,
      gender: "femail",
    },
  ]);

  return (
    <div className="family-settings">
      <h4>Family Settings</h4>
      <Input label="Email" />
      <Input label="Name" />
      <Input label="Age" />
      <Input label="Gender" />
      {/* Todo !!!! combo box */}
      <button className="family-add">
        <img alt="add-circle" src={AddCircleIcon} />
        <span>Add New Member</span>
      </button>

      <h4>Family Members</h4>
      {familyMembers.map((familyMember: familyMemberType) => {
        return (
          <div className="family-member-item">
            <img
              alt={"gender"}
              src={familyMember.gender === "male" ? MaleIcon : FemailIcon}
            />
            <span>{familyMember.name}</span>
            <span>{familyMember.email}</span>
            <img className="delete-memebr" alt={"gender"} src={DeleteIcon} />
          </div>
        );
      })}
    </div>
  );
}

export default FamilySettings;
