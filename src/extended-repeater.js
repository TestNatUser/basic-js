const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeat = options.repeatTimes===undefined?1:options.repeatTimes;
  let separator = options.separator===undefined?"+":options.separator;
  let additions = options.addition===undefined?'':options.addition;
  let addRepeat = options.additionRepeatTimes===undefined?1:options.additionRepeatTimes;
  let addSeparator = options.additionSeparator===undefined?"|":options.additionSeparator;
  let addString = (additions+addSeparator).repeat(addRepeat-1)+additions;
  return (str+addString+separator).repeat(repeat-1)+str+addString;
}

module.exports = {
  repeater
};
