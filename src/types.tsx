interface FoodItemType {
  foodImg: React.ReactElement;
  foodAmount: string;
}

interface FamilyMemberType {
  id?: string;
  email?: string;
  name?: string;
  birthDate?: string;
  gender?: string;
}

interface UserSettingsData {
  email?: string;
  name?: string;
  birthDate?: string;
  gender?: string;
}

interface CSVData {
  [key: string]: string | number;
}

interface ConfigsType {
  BASE_URL?: string;
  BASE_PATH: string;
  BASE_PATH_DATA: string;
}

export type {
  FoodItemType,
  FamilyMemberType,
  UserSettingsData,
  CSVData,
  ConfigsType,
};
