const data = require('../data/zoo_data');

function countEntrants(entrants) { // Refazendo com Filter para praticar
  const entradaCrianca = entrants.filter((element) => element.age < 18);
  const entradaAdulto = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const entradaSenior = entrants.filter((element) => element.age >= 50);
  /* entrants.forEach((element) => {
    if (element.age < 18) entradaCrianca += 1;
    if (element.age >= 18 && element.age < 50) entradaAdulto += 1;
    if (element.age >= 50) entradaSenior += 1;
  }); */

  const entrada = {
    adult: entradaAdulto.length,
    child: entradaCrianca.length,
    senior: entradaSenior.length,
  };
  return entrada;
}

function calculateEntry(entrants) {
  // seu código aqui
  if ((entrants === undefined) || (Object.values(entrants).length === 0)) {
    return 0;
  }
  const totalVisitantes = countEntrants(entrants);
  const precoAdult = data.prices.adult * totalVisitantes.adult;
  const precoChild = data.prices.child * totalVisitantes.child;
  const precoSenior = data.prices.senior * totalVisitantes.senior;
  return precoAdult + precoChild + precoSenior;
}

module.exports = {
  calculateEntry,
  countEntrants,
};

/* const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(countEntrants(entrants)); */

// countEntrants

// Pessoas com idade menor que 18 anos são classificadas como crianças (child);
// Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
// Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).

// O retorno da função deverá ser um objeto no seguinte formato: { child: 3, adult: 2, senior: 1 }.

// countEntrants(entrants);
// { "child": 3, "adult": 2, "senior": 1 }

/* calculateEntry. Esta deverá receber um array de visitantes e a partir da quantidade de visitantes e faixa etária de cada um, deverá retornar o valor total a ser cobrado. */

// Exemplo -> calculateEntry(entrants); -> 187.94

// O que será avaliado

// Ao receber um array de visitantes, retorna um objeto com a contagem;
// Retorna 0 se nenhum argumento for passado;
// Retorna 0 se um objeto vazio for passado;
// Retorna o preço total a ser cobrado dado o array de pessoas.
