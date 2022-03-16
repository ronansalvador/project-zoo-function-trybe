const data = require('../data/zoo_data');

function getSpeciesByIds(...param) {
  const pesquisaPorId = data.species.filter((element) => param.includes(element.id)); // O método includes() determina se um array contém um determinado elemento
  return pesquisaPorId;
}

console.log(data.species);

module.exports = getSpeciesByIds;
