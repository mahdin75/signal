interface FoodItemType {
  foodImg: React.ReactElement;
  foodAmount: string;
  foodDescription: string;
}

interface FamilyMemberType {
  id?: string;
  email?: string;
  name?: string;
  birthDate?: string;
  gender?: string;
}

export type { FoodItemType, FamilyMemberType };
