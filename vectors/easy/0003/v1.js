/**
 * Leia um vetor de 16 posições e troque os 8 primeiros valores 
 * pelos 8 últimos e vice-e-versa. Escreva ao final o vetor obtido.
 */

import { Utils } from "../../../_utils/index.js";

const LENGTH = 16;
const sixteenPositionVector = Array
  .from({ length: LENGTH }, (_, i) => i);

function swapVectorHalves({ arr }) {
  if (!Array.isArray(arr)) return null;

  const halfSize = (arr.length) / 2;

  const halfLeft = arr.slice(0, halfSize);
  const halfRight = arr.slice(halfSize);

  return halfRight.concat(halfLeft)
}

Utils.separator();
Utils.log({msg: "First version"});
const result = swapVectorHalves({ arr: sixteenPositionVector })
Utils.log({info: result});
Utils.separator();