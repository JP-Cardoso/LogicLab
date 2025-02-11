/**
 Declare um vetor de 10 posições e o preencha com os 10 primeiros números impares e o escreva.
 */

const vector = Array.from({length: 100}, (_, i) => i);

const newArr = []
for (let index = 0; newArr.length < 10; index++) {
  if (vector[index] % 2 === 1) {
    newArr.push(vector[index]);
  }  
}

console.log(newArr);