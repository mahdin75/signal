import React, { useEffect, useState } from "react";
import "./familysettings.css";
import Input from "./Input";
import AddCircleIcon from "../assets/icons/add_circle.png";
import MaleIcon from "../assets/icons/male.png";
import FemailIcon from "../assets/icons/female.png";
import DeleteIcon from "../assets/icons/delete.png";
import SaveIcon from "../assets/icons/save.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { calculateAge, createUniqueString } from "../utils";
import { FamilyMemberType } from "../types";
import { getFamilySettings, SaveFamilySettings } from "../api/Settings";

import { useForm, SubmitHandler } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "./Select";

function FamilySettings() {
  const [familyMembers, setFamilyMembers] = useState<FamilyMemberType[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FamilyMemberType>();

  const onSubmit: SubmitHandler<FamilyMemberType> = (data) => {
    const newMemberF = { ...data, id: createUniqueString() };
    setFamilyMembers([...familyMembers, newMemberF]);
    reset();
  };

  useEffect(() => setFamilyMembers(getFamilySettings() ?? []), []);

  return (
    <div className="family-settings">
      <h4>
        <span>Family Settings</span>{" "}
        <img
          data-tooltip-id="save-family-settings-tooltip"
          data-tooltip-content="Save Family Settings"
          alt="save"
          src={SaveIcon}
          onClick={() => {
            try {
              SaveFamilySettings(familyMembers);
              toast.success("Family Settings Updated!");
            } catch (e) {
              toast.error("Error while saving Family Settings!");
            }
          }}
        />
      </h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          type="text"
          inputProps={{
            ...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            }),
          }}
          error={errors.email}
        />

        <Input
          label="Name"
          type="text"
          inputProps={{
            ...register("name", { required: "Name is required" }),
          }}
          error={errors.name}
        />

        <Input
          label="Birth Date"
          type="date"
          inputProps={{
            ...register("birthDate", { required: "Birth Date is required" }),
          }}
          error={errors.birthDate}
        />

        <Select
          label="Gender"
          options={["male", "female"]}
          inputProps={{
            ...register("gender", { required: "Gender is required" }),
          }}
          error={errors.gender}
        />

        {/* Todo !!!! combo box */}
        <button type="submit" className="family-add">
          <img alt="add-circle" src={AddCircleIcon} />
          <span>Add New Member</span>
        </button>
      </form>

      <h4>Family Members</h4>
      <div className="family-members">
        {familyMembers.map((familyMember: FamilyMemberType) => {
          return (
            <div className="family-member-item">
              <img
                alt={"gender"}
                src={familyMember.gender === "male" ? MaleIcon : FemailIcon}
              />
              <span>{familyMember.name}</span>
              <span>{familyMember.email}</span>
              <span>{calculateAge(familyMember.birthDate ?? "")}</span>
              <img
                onClick={() =>
                  setFamilyMembers(
                    familyMembers.filter(
                      (mem: FamilyMemberType) => mem?.id !== familyMember.id
                    )
                  )
                }
                className="delete-memebr"
                data-tooltip-id="delete-family-mem-tooltip"
                data-tooltip-content="Delete Family Member"
                data-tooltip-place="right"
                alt={"gender"}
                src={DeleteIcon}
              />
            </div>
          );
        })}
      </div>
      <ToastContainer position="bottom-right" />
      <Tooltip id="save-family-settings-tooltip" />
      <Tooltip id="delete-family-mem-tooltip" />
    </div>
  );
}

export default FamilySettings;
