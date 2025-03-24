// Escreva um procedimento que recebe as 3 notas de um aluno por parâmetro e uma letra. 
// Se a letra for A o procedimento calcula a média aritmética das notas do aluno, 
// se for P, a sua média ponderada (pesos: 5, 3 e 2) e 
// se for H, a sua média harmônica. A média calculada também deve retornar por parâmetro.

const MEDIA_TYPE = {
  A: 'A',
  P: 'P',
  H: 'H'
}

function calculateArithmeticMean({ arr }) {
  if (!Array.isArray(arr)) return "Inpossível de calcular a média aritimética";

  const length = arr.length;

  const mean = arr.reduce((a, b) => {
    return a += b;
  }, 0) / length;

  return `A média aritimética é de: ${mean}`
}

function calculateWeightedAverage({ arr }) {
  if (!Array.isArray(arr)) return "Inpossível de calcular a média ponderada";

  const noteA = arr.at(0);
  const noteB = arr.at(1);
  const noteC = arr.at(-1);

  const some = ((noteA * 2) + (noteB * 3) + (noteC * 5)) / 10;
  console.log(some)
}

function calculateMedia({ notes, type }) {

  switch (type) {
    case MEDIA_TYPE.A:
      console.log(calculateArithmeticMean({ arr: notes }));
      break;
    case MEDIA_TYPE.P:
      console.log("type P", type)
      calculateWeightedAverage({arr: notes});
      break;
    case MEDIA_TYPE.H:
      console.log("type H", type)
      break;
    default:
      return console.log("Valor não encontrado");
  }
}

const notesArr = [10, 6, 5];

calculateMedia({ notes: notesArr, type: MEDIA_TYPE.P });