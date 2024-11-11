import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./login.css";
import FoodLogin from "../assets/images/food_login.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginUser } from "../api/Auth";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { CONFIGS } from "../config";

interface UserLoginTypes {
  username: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginTypes>();

  const onSubmit: SubmitHandler<UserLoginTypes> = (data) => {
    try {
      LoginUser();
      navigate(`/${CONFIGS.BASE_PATH}/home`);
    } catch (e) {
      toast.error("Login Error!");
    }
  };

  return (
    <div className="login">
      <div className="login-box">
        <div className="login-header">
          <img src={FoodLogin} alt="login-header" />
          <h3>Food Guide Service </h3>
        </div>
        <div className="login-form">
          <h4>
            <span>Login</span>
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Username"
              type="text"
              inputProps={{
                ...register("username", {
                  required: "Username is required",
                }),
              }}
              error={errors.username}
            />

            <Input
              label="Passwrod"
              type="password"
              inputProps={{
                ...register("password", { required: "Password is required" }),
              }}
              error={errors.password}
            />

            <div className="login-form-links">
              <span>Forget Password</span>
              <span>Create an Account</span>
            </div>

            <button type="submit" className="login-button">
              <span>Login</span>
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default Login;
