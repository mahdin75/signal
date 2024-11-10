import Papa from "papaparse";
import { CSVData } from "./types";

function createUniqueString() {
  return `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// A function to interact with localStorage, with generics for type safety
function localStorageManager<T>(key: string, initialValue: T) {
  // Retrieve item from localStorage or return initial value
  function get(): T {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return initialValue;
    }
  }

  // Save item to localStorage
  function set(value: T): void {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }

  // Remove item from localStorage
  function remove(): void {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from localStorage", error);
    }
  }

  return { get, set, remove };
}

function calculateAge(birthDate: string) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();
  const dayDifference = today.getDate() - birth.getDate();

  // Adjust age if the birth month and day have not yet occurred this year
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }
  return age;
}

// Function to fetch CSV from a URL and parse it
async function getCSVDataFromURL(url: string): Promise<CSVData[]> {
  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "text/plain; charset=UTF-8" },
    }); // Fetch the CSV file from the URL
    if (!response.ok) {
      throw new Error(`Failed to fetch the file: ${response.statusText}`);
    }
    const textData = await response.text(); // Get the raw text from the CSV file

    return new Promise((resolve, reject) => {
      Papa.parse(textData, {
        complete: (result: any) => {
          resolve(result.data); // Resolve the promise with parsed data
        },
        header: true, // Treat the first row as the header
        skipEmptyLines: true, // Skip empty lines
        dynamicTyping: true, // Automatically convert types (e.g., numbers)
        encoding: "UTF-8", // Make sure the encoding is set properly
        error: (error: any) => {
          console.error("Error parsing CSV file", error);
          reject(error); // Reject if an error occurs
        },
      });
    });
  } catch (error) {
    console.error("Error fetching the CSV file", error);
    throw error; // Re-throw the error for further handling
  }
}

const distinctItems = (items: Record<string, string>[]) => [
  ...new Map(
    items.map((item: Record<string, string>) => [JSON.stringify(item), item])
  ).values(),
];

function displayFoodsByCategory(groups: any, foods: any) {
  console.log(groups, "gp");
  console.log(foods, "foods");

  const result = groups
    .map((group: any) => {
      // Get all foods under the current category
      const foodsInCategory = foods
        .filter((food: any) => food.fgcat_id === group.fgcat_id)
        .map((food: any) => `<br/>  - ${food.food} (${food.srvg_sz})`)
        .join("");

      // Return the category name with its foods
      return `Category: ${group.fgcat}\n${foodsInCategory}`;
    })
    .join("<br/><br/>");

  return result;
}

export {
  createUniqueString,
  localStorageManager,
  calculateAge,
  getCSVDataFromURL,
  distinctItems,
  displayFoodsByCategory,
};
