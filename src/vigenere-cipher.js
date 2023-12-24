const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt() {
    // let alpha = "abcdefghijklmnopqrstuvwxyz";
    // if(arguments.length===0){
    //   throw new Error("Incorrect arguments!")
    // } else {
    //   let message = arguments[0]
    //   let key = arguments[1]
    //   let tempLine
    //   if(message.length>key.length){
    //     for(let i=0;i<message.length;i++){
    //       tempLine = key[i]
    //     }
    //   }
    // }
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
