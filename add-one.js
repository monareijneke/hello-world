const myArray = [31, 57, 12, 5];
function addOne(numbers) {
  const map = numbers.map(num => num + 1);
  console.log(map);
  return map;
}
addOne(myArray);

const words = ["sun", "potato", "roundabout", "pizza"];
function getWordLengths(someWords) {
  const newArray = someWords.map(words => words.length);
  console.log(newArray);
  return newArray;
}
getWordLengths(words);

const words2 = ["house", "train", "slide", "needle", "book"];
function findNeedle(words) {
  const needle = words.indexOf("needle");
  console.log(needle);
  return needle;
}
findNeedle(words2);

module.exports = addOne;
module.exports = getWordLengths;
module.exports = findNeedle;
