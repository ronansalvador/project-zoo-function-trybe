const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    return data.employees.find((nome) => (
      nome.firstName === employeeName || nome.lastName === employeeName));
  }
  return {};
}

// console.log(getEmployeeByName('Elser'));
// console.log(getEmployeeByName('Emery'));
// console.log(getEmployeeByName('')); // -> retorna unifined
// console.log(getEmployeeByName());

module.exports = getEmployeeByName;
