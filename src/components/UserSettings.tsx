import React, { useEffect, useState } from "react";
import "./usersettings.css";
import Input from "./Input";
import SaveIcon from "../assets/icons/save.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "./Select";
import { getUserSettings, SaveUserSettings } from "../api/Settings";
import { UserSettingsData } from "../types";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function UserSettings() {
  const [user, setUser] = useState<UserSettingsData>({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSettingsData>();

  const onSubmit: SubmitHandler<UserSettingsData> = (data) => {
    try {
      SaveUserSettings(data);
      toast.success("User Settings Updated!");
    } catch (e) {
      toast.error("Error while saving User Settings!");
    }
  };

  useEffect(() => {
    setUser(getUserSettings());
  }, []);

  useEffect(() => {
    reset(user);
  }, [reset, user]);

  return (
    <div className="user-settings">
      <h4>
        <span>User Settings</span>
        <img
          data-tooltip-id="save-user-settings-tooltip"
          data-tooltip-content="Save User Settings"
          alt="save"
          src={SaveIcon}
          onClick={handleSubmit(onSubmit)}
        />
      </h4>

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
          ...register("birthDate", {
            required: "Birth Date is required",
          }),
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
      <Tooltip id="save-user-settings-tooltip" />

      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default UserSettings;
