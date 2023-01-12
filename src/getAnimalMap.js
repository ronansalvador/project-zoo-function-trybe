const data = require('../data/zoo_data');

const especies = data.species;

const padrao = () => {
  const animals = {};
  especies.forEach((animal) => {
    if (!animals[animal.location]) animals[animal.location] = [];
    animals[animal.location].push(animal.name); // consegui finalmente utilizar esse push com ajuda do Marcos Roberto na mentoria
  });
  return animals;
};

const animalporSexo = (sorted, sex) => {
  const obj = {};
  especies.forEach((element) => {
    if (!obj[element.location]) obj[element.location] = [];

    let spreadResidents = [...element.residents];
    if (sex) spreadResidents = spreadResidents.filter((animal) => animal.sex === sex);

    spreadResidents = spreadResidents.map((animal) => animal.name); // Se existir a opção sex mapeia os animais por sexo.

    if (sorted) spreadResidents.sort();
    obj[element.location].push({ [element.name]: spreadResidents }); // Se sortes: true, retorna nome de animais ordenados
  });
  return obj;
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (includeNames) return animalporSexo(sorted, sex);
  return padrao();
}

getAnimalMap();
module.exports = getAnimalMap;
