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
  }
  )
}

function onlyVowels(array) {
  // your code here
}

function doubleMatrix(array) {
  // your code here
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
