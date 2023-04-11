function sum(array) {
  return array.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);
}

function productAll(array) {
  return array.reduce((accumulator, currentvalue) => accumulator * currentvalue.reduce((accumulatorInMatrix, currentvalueInMatrix) => accumulatorInMatrix * currentvalueInMatrix, 1), 1)
}

function objectify(array) {
  function objectBuilder(arrayToTurn) {
    let obj = {};
    obj[arrayToTurn[0]] = arrayToTurn[1]
    return obj
  }

  return array.reduce((accumulator, currentvalue) => Object.assign(accumulator, objectBuilder(currentvalue)), {})

}

function luckyNumbers(array) {
  return array.reduce(function (accumulator, currentValue, index, array) {
    if (index === array.length - 1) {
      return accumulator + 'and ' + currentValue;
    } else {
      return accumulator + currentValue + ', ';
    }
  }, 'Your lucky numbers are: ');
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
