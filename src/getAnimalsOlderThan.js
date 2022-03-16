const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animais = data.species.find((element) => element.name === animal);
  const verifica = animais.residents.every((idade) => idade.age > age);
  return verifica;
}

// console.log(getAnimalsOlderThan('otters', 7));
// console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
