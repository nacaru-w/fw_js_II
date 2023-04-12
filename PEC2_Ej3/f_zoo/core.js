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

  let fullScheduleObj = {}
  for (day in hours) {
    if (day !== "Monday") {
      fullScheduleObj[day] = `Open from ${hours[day].open}am until ${hourConverter(hours[day].close)}pm`
    } else {
      fullScheduleObj[day] = 'CLOSED'
    }
  }

  if (!dayName) {
    return fullScheduleObj
  }

  return { [dayName]: fullScheduleObj[dayName] }
}

function animalCount(species) {
  let animalCountObj = {};
  for (entry of animals) {
    animalCountObj[entry.name] = entry.residents.length
  }

  if (!species) {
    return animalCountObj
  }

  return animalCountObj[species]
}

function animalMap(options) {
  let addToArray = function (arr, entry) {
    arr.push(entry.name)
  }

  if (options && options.includeNames) {
    addToArray = function (arr, entry) {
      let nameList = [];
      for (resident of entry.residents) {
        if (!("sex" in options) || options.sex === resident.sex) {
          nameList.push(resident.name)
        }
      }

      for (species of arr) {
        if (entry.name in species) {
          species[entry.name].push(...nameList)
          return;
        }
      }

      let obj = {}
      obj[entry.name] = nameList
      arr.push(obj)
    }
  }

  let mapObj = {};
  for (entry of animals) {
    if (!(entry.location in mapObj)) {
      mapObj[entry.location] = []
    }

    addToArray(mapObj[entry.location], entry)
  }

  return mapObj
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
