const data = require('../data/zoo_data');

const especies = data.species;
const funcionarios = data.employees;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const pessoa = funcionarios.find((element) => element.id === id);
  const animal = especies.find((element) => element.id === pessoa.responsibleFor[0]).residents;
  const result = animal.sort((a, b) => b.age - a.age);
  return Object.values(result[0]);
}

module.exports = getOldestFromFirstSpecies;
