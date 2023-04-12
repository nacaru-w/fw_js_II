// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10(input) {
  return input.some(element => element > 10);
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord(input) {
  return input.some(element => element.length > 10);
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities(input) {
  function checkArrays(array) {
    return array.some(element => element)
  }
  return input.some(element => checkArrays(element));
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa(input) {
  function lostInString(string) {
    return string.toLowerCase().includes("lost")
  }
  return input.some(element => lostInString(element));
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
