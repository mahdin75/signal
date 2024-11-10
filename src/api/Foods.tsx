import { CSVData } from "../types";
import { distinctItems, getCSVDataFromURL } from "../utils";

const getServingsForAges = async (ages: number[]) => {
  const csvUrl = "data/servings_per_day-en_ONPP.csv";
  try {
    const data = await getCSVDataFromURL(csvUrl);

    const newData: CSVData[] = [];

    ages.forEach((age: number) => {
      data.forEach((d: CSVData) => {
        const fromTo = d.ages
          .toString()
          .split("to")
          .map((a: any) => parseInt(a));
        const min = fromTo[0];
        const max = fromTo[1] ?? 100; // 100 years if there is not any max (72-100 for instance)
        if (age <= max && age >= min) {
          d.age = age;
          newData.push(d);
        }
      });
    });

    return distinctItems(newData as Record<string, string>[]);
  } catch (error) {
    console.error("Error handling CSV:", error);
  }
};

// Fetch and organize all data for a given fgid
async function getFoodGroupInfo(fgid: string): Promise<any> {
  // Load all CSVs
  const directionalStatements: CSVData[] = await getCSVDataFromURL(
    "data/fg_directional_satements-en_ONPP.csv"
  );
  const foodGroups: CSVData[] = await getCSVDataFromURL(
    "data/foodgroups-en_ONPP.csv"
  );
  const fs: CSVData[] = await getCSVDataFromURL("data/foods-en_ONPP_rev.csv");

  // Filter data for the requested fgid
  const statements = directionalStatements.filter((ds) => ds.fgid === fgid);

  const groups = foodGroups.filter((fg) => fg.fgid === fgid);

  const foods = fs.filter((f) => f.fgid === fgid);

  if (!groups) {
    return false;
  }

  return { statements, groups, foods };
}

export { getServingsForAges, getFoodGroupInfo };
