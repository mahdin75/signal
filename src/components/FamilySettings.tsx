import React, { useEffect, useState } from "react";
import "./familysettings.css";
import Input from "./Input";
import AddCircleIcon from "../assets/icons/add_circle.png";
import MaleIcon from "../assets/icons/male.png";
import FemailIcon from "../assets/icons/female.png";
import DeleteIcon from "../assets/icons/delete.png";
import { createUniqueString } from "../utils";

interface familyMemberType {
  id?: string;
  email?: string;
  name?: string;
  age?: number;
  gender?: string;
}

function FamilySettings() {
  const [newMember, setNewMember] = useState<familyMemberType>({});
  const [familyMembers, setFamilyMembers] = useState<familyMemberType[]>([]);

  const updateCurrentMember = (key: string, value: string) => {
    setNewMember({ ...newMember, [key]: value });
    console.log(key, value, newMember);
  };

  useEffect(() => {
    console.log(newMember);
  }, [newMember]);

  return (
    <div className="family-settings">
      <h4>Family Settings</h4>
      <Input onChange={updateCurrentMember} name="email" label="Email" />
      <Input onChange={updateCurrentMember} name="name" label="Name" />
      <Input onChange={updateCurrentMember} name="age" label="Age" />
      <Input onChange={updateCurrentMember} name="gender" label="Gender" />
      {/* Todo !!!! combo box */}
      <button
        onClick={() => {
          if (familyMembers !== undefined) {
            const newMemberF = { ...newMember, id: createUniqueString() };
            setFamilyMembers([...familyMembers, newMemberF]);
          }
        }}
        className="family-add"
      >
        <img alt="add-circle" src={AddCircleIcon} />
        <span>Add New Member</span>
      </button>

      <h4>Family Members</h4>
      <div className="family-members">
        {familyMembers.map((familyMember: familyMemberType) => {
          return (
            <div className="family-member-item">
              <img
                alt={"gender"}
                src={familyMember.gender === "male" ? MaleIcon : FemailIcon}
              />
              <span>{familyMember.name}</span>
              <span>{familyMember.email}</span>
              <img
                onClick={() =>
                  setFamilyMembers(
                    familyMembers.filter(
                      (mem: familyMemberType) => mem?.id !== familyMember.id
                    )
                  )
                }
                className="delete-memebr"
                alt={"gender"}
                src={DeleteIcon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FamilySettings;
