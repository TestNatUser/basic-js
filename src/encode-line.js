const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newArray = new Set();
  let array = str.split('');
  for(let i=0;i<array.length;i++){
    let r = new RegExp(array[i]+'+');
    let m = str.match(r);
    newArray.add(m[0].length+array[i]);
  }
  return Array.from(newArray).join('');
}

module.exports = {
  encodeLine
};
