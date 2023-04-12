const { animals, employees, hours, prices } = require('./data');

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  let totalPrice = Object.entries(entrants).reduce((accumulator, [ageScope, cost]) => {
    let ageScopePrice = prices[ageScope];
    if (ageScopePrice) {
      return accumulator + (ageScopePrice * cost);
    } else {
      return accumulator;
    }
  }, 0);

  return totalPrice.toFixed(2);
}

function schedule(dayName) {
  function hourConverter(time) {
    return time > 12 ? time - 12 : time;
  }

  let finalObject = {}
  for (day in hours) {
    if (day !== "Monday") {
      finalObject[day] = `Open from ${hours[day].open}am until ${hourConverter(hours[day].close)}pm`
    } else {
      finalObject[day] = 'CLOSED'
    }
  }

  if (!dayName) {
    return finalObject
  }

  return { [dayName]: finalObject[dayName] }

}

function animalCount(species) {
  // your code here
}

function animalMap(options) {
  // your code here
}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
