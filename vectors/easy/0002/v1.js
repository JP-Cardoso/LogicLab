/**
 Declare um vetor de 10 posições e o preencha com os 10 primeiros números impares e o escreva.
 */

import { Utils } from "../../../_utils/index.js";

const vector = Array.from({ length: 100 }, (_, i) => i);

const newArr = []
for (let index = 0; newArr.length < 10; index++) {
  if (vector[index] % 2 === 1) {
    newArr.push(vector[index]);
  }
}

Utils.log({ msg: "First version" });
Utils.log({ info: newArr })

Utils.separator();

Utils.log({ msg: "Second version" });
const vectorFilter = Array.from({ length: 100 }, (_, i) => i)
  .filter(n => n % 2 === 1)
  .slice(0, 10);
Utils.log({ info: vectorFilter })
Utils.separator();