const data = require('../data/zoo_data');

function countEspecie(animal) {
  let nomeEspecie = {};
  if (animal.sex === undefined) {
    const especie = data.species.find((element) => element.name === animal.specie);
    nomeEspecie = especie.residents.length;
    return (nomeEspecie);
  }
  const filterResidents = data.species.find((element) => (element.name === animal.specie));
  const arrayResidentes = filterResidents.residents;
  let qte = 0;
  arrayResidentes.forEach((element, index) => {
    if (element.sex === animal.sex) {
      qte += 1;
    }
  });
  return qte;
}

function countAnimals(animal) {
  const nomeEspecie = {};
  if (animal === undefined) {
    data.species.forEach(({ name, residents }) => {
      nomeEspecie[name] = residents.length;
    });
    return (nomeEspecie);
  }
  return countEspecie(animal);
}
// console.log(countAnimals());
// console.log(countAnimals({ specie: 'penguins' })); // esperado retorno - 4
// console.log(countAnimals({ specie: 'giraffes' })); // 6
// console.log(countAnimals({ specie: 'bears', sex: 'female' }));
// console.log(countAnimals({ specie: 'elephants', sex: 'male' })); // 2
// console.log(countAnimals({ specie: 'elephants', sex: 'female' })); // 2

module.exports = countAnimals;
