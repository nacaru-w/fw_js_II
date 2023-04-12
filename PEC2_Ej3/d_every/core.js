// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every(element => element % 2 == 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  let typeOfFirstEl = typeof (input[0])
  return input.every(element => typeof (element) == typeOfFirstEl);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  function checkArrayNumbers(array) {
    return array.every(element => element > 0)
  }
  return input.every(element => Array.isArray(element) && checkArrayNumbers(element))
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  function sameVowelsInString(string) {
    let stringOnlyVowels = string.replace(/[^aeiouàáâãäåæèéêëìíîïðñòóôõöøùúûüýÿ]/gi, "");
    let firstVowel = stringOnlyVowels[0]
    for (let vowel of stringOnlyVowels) {
      if (vowel !== firstVowel) {
        return false
      }
    }
    return true
  }
  return input.every(element => typeof (element) == "string" && sameVowelsInString(element));
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
