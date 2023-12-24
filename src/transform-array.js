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
  return arr.reduce((el)=>{
    if(el==='--discard-next'){

    } else if(el==='--discard-prev'){
       
    } else if(el==='--double-next'){

    } else if(el==='--double-prev'){

    }
    
  },[])
}

module.exports = {
  transform
};
