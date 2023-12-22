const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date instanceof Date) {
      let count = date.getMonth();
      if (count == 0 || count == 1 || count == 11) {
        return 'winter';
      } else if (count == 2 || count == 4 || count == 3) {
        return 'spring';
      } else if (count == 6 || count == 7 || count == 5) {
        return 'summer';
      } else if (count == 9 || count == 10 || count == 8) {
        return 'autumn';
      }
  } else if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  } 
  throw Error("Invalid date!");
}

module.exports = {
  getSeason
};
