// Escreva um procedimento que recebe as 3 notas de um aluno por parâmetro e uma letra. 
// Se a letra for A o procedimento calcula a média aritmética das notas do aluno, 
// se for P, a sua média ponderada (pesos: 5, 3 e 2) e 
// se for H, a sua média harmônica. A média calculada também deve retornar por parâmetro.

const MEDIA_TYPE = {
  A: 'A',
  P: 'P',
  H: 'H'
}

function calculateMedia({ note, type }) {

  switch (type) {
    case MEDIA_TYPE.A:
      console.log("type A", type)
      break;
    case MEDIA_TYPE.P:
      console.log("type P", type)
      break;
    case MEDIA_TYPE.H:
      console.log("type H", type)
      break;
    default:
      return console.log("Valor não encontrado");      
  }
}

calculateMedia({ note: [], type: MEDIA_TYPE.A });