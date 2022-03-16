const data = require('../data/zoo_data');

// 1 - isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;
function isManager(id) {
  // seu código aqui
  return data.employees.some((funcionario) => funcionario.managers.includes(id));
}

// console.log(data.employees);

// 2 - getRelatedEmployees - que utiliza a primeira função para apresentar as seguintes saídas:
/* se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!". */

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    return data.employees.filter((funcionario) => funcionario.managers.includes(managerId))
      .map((nomeCompleto) => `${nomeCompleto.firstName} ${nomeCompleto.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = {
  isManager,
  getRelatedEmployees,
};
