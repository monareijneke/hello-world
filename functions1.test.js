// const { TestWatcher } = require("@jest/core");
const functions = require("./functions1");

test("should be null", () => {
  expect(functions.isNull()).toBe(null);
});

test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

// Tests zijn eigenlijk gewoon functies. Om dat te laten zien laten we je
// nu tests maken die werken zonder input van buitenaf:

// Less than or greater than
test("Should be under or equal to 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});
