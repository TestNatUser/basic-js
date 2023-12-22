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
  let newStr = '';
  while(str.length!==0){
    let length = str.match(`${str[0]}+`)[0].length;
    if(length===1){
      newStr+=str[0];
    } else {
      newStr += str.match(`${str[0]}+`)[0].length+str[0];
    }
    str = str.slice(str.match(`${str[0]}+`)[0].length);
  }
  return newStr;
}

module.exports = {
  encodeLine
};
