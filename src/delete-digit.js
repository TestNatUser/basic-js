const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = [];
  for (let i = 0; i < n.toString().length; i++) {
    const arr = n.toString().split('');
    Number(arr.splice(i, 1).join(''))
      max.push(Number(arr.join('')));
  }
  return max.sort((a,b)=>a-b).reverse()[0];
}

module.exports = {
  deleteDigit
};
