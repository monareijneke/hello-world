const myArray = [31, 57, 12, 5];

const addOne = function (numbers) {
  numbers.forEach(item => {
    let expected;
    expected = item + 1;
    const output = addOne(myArray);
    console.log(output);
  });
};
addOne(myArray);

const words = ["sun", "potato", "roundabout", "pizza"];

const getWordLengths = someWords => {
  someWords.forEach(words => {
    let newArray;
    newArray = words.length;
    return newArray;
  });
};
getWordLengths(words);

const findNeedle = function (words) {
  // Schrijf hier de functie...
};

module.exports = addOne;
module.exports = getWordLengths;
module.exports = findNeedle;
