const password = "z";
const conditions = [];

//2. null
const isNotNull = str => {
  if (str != null) {
    conditions.push(true);
    return true;
  }
  return false;
};
isNotNull(password);

//1. lengte
const hasRightLength = str => {
  if (str.length < 9) {
    conditions.push(true);
    return true;
  }
  return false;
};
hasRightLength(password);

//3. uppercase
const hasUpperCaseCharacter = str => {
  for (let i = 0; i < str.length; i++)
    if (str.charAt(i) >= "A" && str.charAt(i) <= "Z") {
      conditions.push(true);
      return true;
    }
  return false;
};
hasUpperCaseCharacter(password);

// 4. lowercase
const hasLowerCaseCharacter = str => {
  for (let i = 0; i < str.length; i++)
    if (str.charAt(i) >= "a" && str.charAt(i) <= "z") {
      conditions.push(true);
      return true;
    }
  return false;
};
hasLowerCaseCharacter(password);

//5. cijfers
const hasDigit = str => {
  for (let i = 0; i < str.length; i++)
    if (str.charAt(i) >= "0" && str.charAt(i) <= "9") {
      conditions.push(true);
      return true;
    }
  return false;
};
hasDigit(password);

const minimumConditionsReached = conditions => {
  trueConditions = conditions.length >= 3;
  if (trueConditions) {
    return trueConditions;
  }
  return false;
};
minimumConditionsReached(conditions);

const verifyPassword = () => {
  if (hasLowerCaseCharacter(password) == false) {
    console.log(
      "Password not correct. Make sure it has at least one lower case"
    );
    return false;
  } else if (
    hasLowerCaseCharacter(password) == true &&
    minimumConditionsReached(conditions) == true
  ) {
    console.log("Password has been verified to TRUE");
    return true;
  }
  console.log("Password not correct, please enter a valid password");
  return false;
};
verifyPassword();

module.exports = {
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
  verifyPassword,
};
