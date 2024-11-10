import { FamilyMemberType } from "../types";
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

export { SaveFamilySettings, getFamilySettings };
