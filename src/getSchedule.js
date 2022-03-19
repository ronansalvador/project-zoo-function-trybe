const data = require('../data/zoo_data');

const especies = data.species;
const horas = data.hours;

const agenda = () => {
  const objeto = {};
  Object.entries(horas).forEach((diasDaSemena) => {
    const { open, close } = diasDaSemena[1]; // descontruindo o Objeto dias da semana para acessar open e close
    Object.assign(objeto, {
      [diasDaSemena[0]]: { // o indice [0] acessa o nome do dia para criar a chave
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: (especies.filter((animais) =>
          animais.availability.includes(diasDaSemena[0]))
          .map((elemento) => elemento.name)),
      },
    });
  });
  objeto.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return objeto;
};

const retornaDias = (pesquisa) =>
  ({ [pesquisa]: agenda()[pesquisa] }); // retorna a pesquisa com o dia solicitado

const disponibilidade = (pesquisa) => especies.find((element) =>
  pesquisa === element.name).availability;

function getSchedule(pesquisa) {
  if (Object.keys(horas).includes(pesquisa)) return retornaDias(pesquisa);
  if (especies.map((element) =>
    element.name).includes(pesquisa)) return disponibilidade(pesquisa);

  return agenda();
}

module.exports = getSchedule;
