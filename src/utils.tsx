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

export { createUniqueString, localStorageManager, calculateAge };
