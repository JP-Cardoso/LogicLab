/**
 * Leia um vetor de 12 posições e em seguida ler também dois valores X e Y quaisquer correspondentes a duas posições no vetor. 
 * Ao final seu programa deverá escrever a soma dos valores encontrados nas respectivas posições X e Y.
 */

function readArray({ arr, pos_x, pos_y }) {
  if (!Array.isArray(arr)) return null;

  if (typeof pos_x !== 'number' && typeof pos_y !== 'number') return null;

  const lengthArr = arr.length;

  const index_x = pos_x - 1;
  const index_y = pos_y - 1;

  if (index_x < 0 || index_x >= lengthArr || index_y < 0 || index_y >= lengthArr) {
    return null;
  }

  const count = arr[index_x] + arr[index_y];

  console.log('count', count);
}


const dataArray = Array.from({ length: 12 }, (_, i) => i + 1);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
console.log("dataArray: \n", dataArray);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
const pos_x = 4;
const pos_y = 13;

const obj = {
  arr: dataArray,
  pos_x,
  pos_y,
};

readArray(obj);