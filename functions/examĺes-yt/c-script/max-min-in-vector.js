/**
 * Criar uma função que receba um array de produtos,
 * um valor máximo e um valor mínimo. Você deve trazer todos
 * os produtos que fique nessa faixa.
 */

const products = [
  { id: 1, name: 'product A', price: 10 },
  { id: 2, name: 'product B', price: 20.5 },
  { id: 2, name: 'product C', price: 20 },
  { id: 4, name: 'product D', price: 4 },
  { id: 5, name: 'product V', price: 50 },
  { id: 6, name: 'product X', price: 80 },
  { id: 7, name: 'product W', price: 100 },
];

function sortData({ arr }) {
  return arr.sort((a, b) => a.price - b.price);
}

function filterByPriceRange({ data, minValue, maxValue }) {
  if (!Array.isArray(data)) {
    return "Data is not an array";
  }

  if (!Number.isFinite(minValue) || !Number.isFinite(maxValue)) {
    return "One of the values ​​passed is not numeric";
  }


  const arrSorted = sortData({ arr: [...data] }); // Evita modificar o array original
  const min = Math.min(minValue, maxValue);
  const max = Math.max(minValue, maxValue);

  // Encontrar índices aproximados para evitar problemas com ponto flutuante
  const epsilon = 0.0001;
  const minIndex = arrSorted.findIndex(a => Math.abs(a.price - min) < epsilon || a.price >= min);
  const maxIndex = arrSorted.findIndex(a => Math.abs(a.price - max) < epsilon || a.price >= max);

  if (minIndex === -1 || maxIndex === -1) {
    return [];
  }

  let head = Math.min(minIndex, maxIndex);
  let tail = Math.max(minIndex, maxIndex);

  // Se os valores forem iguais, retorna apenas os produtos com esse preço
  if (min === max) {
    return arrSorted.filter(product => Math.abs(product.price - min) < epsilon);
  }

  return arrSorted.slice(head, tail + 1);
}

const obj = {
  data: products,
  minValue: 20.5,
  maxValue: 4,
}

console.log(filterByPriceRange(obj));