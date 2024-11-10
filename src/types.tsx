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

export type { FoodItemType, FamilyMemberType, UserSettingsData, CSVData };
