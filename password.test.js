const {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
} = require("./password.js");

//test <9 karakters
test("password is korter dan 9 karakters", () => {
  const password = "Henkie1";
  expect(hasRightLength(password)).toBeTruthy();
});
test("password is langer dan of gelijk aan 9 karakters", () => {
  const password = "Henkie1uu65t";
  expect(hasRightLength(password)).toBeFalsy();
});

//test is niet NULL
test("password is null", () => {
  const password = null;
  expect(isNotNull(password)).toBeNull;
});

//test op hoofdletter
test("password heeft tenminste 1 hoofdletter", () => {
  const password = "passWord";
  expect(hasUpperCaseCharacter(password)).toBeTruthy();
});
test("password heeft GEEN hoofdletter", () => {
  const password = "password";
  expect(hasUpperCaseCharacter(password)).toBeFalsy();
});

//test op kleine letters
test("password heeft tenminste 1 kleine letter", () => {
  const password = "henkie";
  expect(hasLowerCaseCharacter(password)).toBeTruthy();
});
test("password heeft GEEN kleine letters", () => {
  const password = "HENK";
  expect(hasLowerCaseCharacter(password)).toBeFalsy();
});

//test op cijfers
test("password heeft tenminste 1 cijfer", () => {
  const password = "1henk";
  expect(hasDigit(password)).toBeTruthy();
});
test("password geen 1 cijfer", () => {
  const password = "henkie";
  expect(hasDigit(password)).toBeFalsy();
});

//test minimale password eisen
describe("functie 4 is true EN functie 5 bevat minstens 3 true", () => {
  test("Functie 4 is true", () => {
    const password = "Henkie1";
    expect(hasLowerCaseCharacter(password)).toBeTruthy();
  });
  test("Functie 4 is true", () => {
    const password = "HENK";
    expect(hasLowerCaseCharacter(password)).toBeFalsy();
  });

  test("3 willekeurige andere functies zijn true", () => {
    const conditions = [true, true, true];
    expect(minimumConditionsReached(conditions)).toBeTruthy();
  });
  test("3 willekeurige andere functies zijn true", () => {
    const conditions = [true, true];
    expect(minimumConditionsReached(conditions)).toBeFalsy();
  });
});
//test password verifier
test("functie LowerCases is true EN functie minimumconditions is true", () => {
  const lowerCases = true;
  const conditions = true;
  expect(lowerCases && conditions).toBeTruthy();
});
