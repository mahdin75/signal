import { FamilyMemberType, UserSettingsData } from "../types";
import { localStorageManager } from "../utils";

// This file will be transformed after building the APIs

const SaveFamilySettings = (familyMemebrs: FamilyMemberType[]) => {
  return localStorageManager("familySettings", familyMemebrs).set(
    familyMemebrs
  );
};
const getFamilySettings = () => {
  return localStorageManager("familySettings", undefined).get();
};
const SaveUserSettings = (user: UserSettingsData) => {
  return localStorageManager("userSettings", user).set(user);
};
const getUserSettings = () => {
  return localStorageManager("userSettings", {}).get();
};

export {
  SaveFamilySettings,
  getFamilySettings,
  SaveUserSettings,
  getUserSettings,
};
