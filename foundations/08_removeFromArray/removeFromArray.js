// const removeFromArray = function (array) {
//   for (let i = 1; i < arguments.length; i++) {
//     array.splice(array.indexOf(arguments[i]), 1);
//   }
//   return array;
// };

const removeFromArray = function (array, ...valuesToRemove) {
  return array.filter((item) => !valuesToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
