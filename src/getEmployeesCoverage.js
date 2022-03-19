const data = require('../data/zoo_data');

const especies = data.species;
const funcionarios = data.employees;
const funcId = funcionarios.map((elemento) => elemento.id);

// função que retorna o id do funcioanrio de acordo com a opção
function getFuncId(id) {
  const pessoa = funcionarios.find((func) =>
    (func.firstName === id.name || func.id === id.id || func.lastName === id.name));
  return pessoa.id;
}

// função que retorna o nome completo do funcionario de acordo com a opção
function getFuncName(id) {
  const pessoa = funcionarios.find((func) =>
    (func.firstName === id.name || func.id === id.id || func.lastName === id.name));
  return `${pessoa.firstName} ${pessoa.lastName}`;
}

// retorna os aniais que são de responsabilidade da pessoa
function getAnimais(id) {
  const pessoa = funcionarios.find((func) =>
    (func.firstName === id.name || func.id === id.id || func.lastName === id.name));
  const responsavel = pessoa.responsibleFor;
  const result = [];
  for (let i = 0; i < especies.length; i += 1) {
    if (responsavel.includes(especies[i].id)) {
      result.push(especies[i]);
    }
  }
  return result;
}

// retorna o nome dos animais -> chamando a funca getAnimais
function animaisNomes(id) {
  const array = getAnimais(id);
  const result = array.map((element) => element.name);
  return result;
}

// retorna a localição
function localizacaoAnimais(id) {
  const array = getAnimais(id);
  const result = array.map((element) => element.location);
  return result;
}

// se a opção estuver sem parâmetros, retorna uma lista com a cobertura de todas as pessoas funcionárias
function noId() {
  const ids = funcionarios.map((e) => e.id);
  const result = [];
  for (let i = 0; i < ids.length; i += 1) {
    result.push({
      id: getFuncId({ id: ids[i] }),
      fullName: getFuncName({ id: ids[i] }),
      species: animaisNomes({ id: ids[i] }),
      locations: localizacaoAnimais({ id: ids[i] }),
    });
  }
  return result;
}

function getEmployeesCoverage(id) {
  if (!id) {
    return noId();
  }
  if (id.id && !funcId.includes(id.id)) {
    throw new Error('Informações inválidas');
  }
  return {
    id: getFuncId(id),
    fullName: getFuncName(id),
    species: animaisNomes(id),
    locations: localizacaoAnimais(id),
  };
}

module.exports = getEmployeesCoverage;

/* console.log(getFuncId({ name: 'Sharonda' }));
console.log(getFuncName({ name: 'Sharonda' }));
console.log(animaisNomes({ name: 'Sharonda' }));
console.log(localizacaoAnimais({ name: 'Sharonda' })); */
// console.log(getEmployeesCoverage());
// console.log(funcId);
