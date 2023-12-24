const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // let array = []
  // let copied = arr;
  // for(let i=0;i<arr.length;i++){
  //   if(arr[i]==='--discard-next'){
  //     array.slice(i+1,1)
  //   } else if(arr[i]==='--discard-prev'){
  //      array.slice(i-1,1)
  //   } else if(arr[i]==='--double-next'){

  //   } else if(arr[i]==='--double-prev'){

  //   }
  //   else {
  //     array.push(el);
  //   }
  // }
  return arr;
}

module.exports = {
  transform
};
