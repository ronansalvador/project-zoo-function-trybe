const data = require('../data/zoo_data');

const especies = data.species;
const funcionarios = data.employees;

function getOldestFromFirstSpecies(id) {
  const pessoa = funcionarios.find((element) => element.id === id); // Busca Funcionario de acordo com o parametro id
  const animal = especies.find((element) => element.id === pessoa.responsibleFor[0]).residents; // retorna a primeira especie
  const result = animal.sort((a, b) => b.age - a.age); // ordena de forna decrescente
  return Object.values(result[0]); // retorna o indice [0] apos ordenar
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
