import { createUniqueString } from "./utils";

describe("createUniqueString", () => {
  test("returns a unique string in the correct format", () => {
    // Call the function and get the result
    const uniqueString = createUniqueString();

    // Check that the result matches the expected format
    expect(uniqueString).toMatch(/^id-\d+-[a-z0-9]{9}$/);
  });

  test("returns different values on consecutive calls", () => {
    // Generate two different strings consecutively
    const uniqueString1 = createUniqueString();
    const uniqueString2 = createUniqueString();

    // Ensure that the two strings are not equal
    expect(uniqueString1).not.toBe(uniqueString2);
  });
});
