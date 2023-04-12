function multiplyBy10(array) {
  return array.map(element => element * 10);
}

function shiftRight(array) {
  let finalArray = []
  array.map(element => {
    if (element == array[array.length - 1]) {
      finalArray.unshift(element);
    } else {
      finalArray.push(element)
    }
  })
  return finalArray
}

function onlyVowels(array) {
  return array.map(element => element.replace(/[^aeiouàáâãäåæèéêëìíîïðñòóôõöøùúûüýÿ]/gi, ""))
}

function doubleMatrix(array) {
  return array.map(element => element.map(element => element * 2))
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
