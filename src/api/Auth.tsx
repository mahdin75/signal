import { createUniqueString, localStorageManager } from "../utils";

const LogoutUser = () => {
  return localStorageManager("user-token", false).remove();
};

const LoginUser = () => {
  return localStorageManager("user-token", {}).set(createUniqueString());
};

export { LogoutUser, LoginUser };
