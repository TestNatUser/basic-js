const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedArray = arr.filter((el)=>el!==-1).sort((a,b)=>a-b);
  let index=0;
  return arr.map((el)=>{
    if(el!==-1){
      el=sortedArray[index]
      index+=1;
    }
    return el;
  })
}

module.exports = {
  sortByHeight
};
