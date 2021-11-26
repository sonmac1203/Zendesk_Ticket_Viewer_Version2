import { shortenString, capitalize } from "../utils/utils";

describe("utils", () => {
  const testString = "velit eiusmod reprehenderit officia cupidatat";
  test("Should capitalize the first letter of the string", () => {
    expect(capitalize(testString)).toBe(
      "Velit eiusmod reprehenderit officia cupidatat"
    );
  });

  test("Should truncate the string", () => {
    expect(shortenString(testString, 30)).toBe(
      "velit eiusmod reprehenderit of..."
    );
  });
});
