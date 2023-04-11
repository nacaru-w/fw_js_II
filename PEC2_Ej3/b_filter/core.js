function onlyEven(array) {
  return array.filter(element => element % 2 == 0)
}

function onlyOneWord(array) {
  return array.filter(element => !element.includes(' '))
}

function positiveRowsOnly(array) {
  return array.filter(element => element.every(element => element >= 0))
}

function allSameVowels(array) {
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
  return array.filter(sameVowelsInString)
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
