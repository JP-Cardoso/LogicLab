function readArray({ arr, pos_x, pos_y }) {
  if (!Array.isArray(arr)) return null;

  if (typeof pos_x !== 'number' || typeof pos_y !== 'number') return null;

  const index_x = pos_x - 1;
  const index_y = pos_y - 1;

  const value_x = arr.at(index_x);
  const value_y = arr.at(index_y);

  if (value_x === undefined || value_y === undefined) return null

  const sum = value_x + value_y;
  return sum;
}

const dataArray = Array.from({ length: 12 }, (_, i) => i);
const obj = {
  dataArray,
  pos_x: 4,
  pos_y: 3,
}

const result = readArray(obj);
console.log(`O resultao é ${result}`);