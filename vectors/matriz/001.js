/**
 * Fazer uma soma de matriz 2x2
 */

const mat1 = [
  [2, 2],
  [2, 2]
];

const mat2 = [
  [10, 8],
  [20, 2]
];

// [ [ 2, 2 ], [ 2, 2 ] ] 
// [ [ 2, 2 ], [ 2, 2 ] ]

function somarMatrizes({ mat1, mat2 }) {

  let resultado = [
    [0, 0], [0, 0]
  ];

  for (let indexA = 0; indexA < mat1.length; indexA++) {
    for (let indexB = 0; indexB < mat2.length; indexB++) {
      resultado[indexA][indexB] = mat1[indexA][indexB] + mat2[indexA][indexB]
    }
  }

  return resultado;
}


console.log(somarMatrizes({ mat1, mat2 }))