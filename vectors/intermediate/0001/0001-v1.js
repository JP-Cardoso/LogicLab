/**
  Leia dois vetores de 20 posições e calcule um terceiro vetor contendo, 
  nas posições pares os valores do primeiro e nas posições impares os valores do segundo.
 */

const arrayA = Array.from({ length: 20 }, (_, i) => i + 1);
const arrayB = Array.from({ length: 20 }, (_, i) => i + 5);

function mergeArrays({ arrA, arrB }) {

  if (!Array.from(arrA) || !Array.from(arrB)) return "Um dos valores passados não são um array";

  const arrayC = []

  for (let index = 0; index < 20; index++) {
    if (arrA[index] % 2 === 0) {
      arrayC[index] = arrA[index];
    } else {
      arrayC[index] = arrB[index];
    }
  }

  console.log(`Array final: ${arrayC}`);

}


mergeArrays({ arrA: arrayA, arrB: arrayB });