const sumAll = function (int1, int2) {
  let arr = [];
  const min = Math.min(int1, int2);
  const max = Math.max(int1, int2);
  if (
    min <= 0 ||
    max <= 0 ||
    !Number.isInteger(min) ||
    !Number.isInteger(max) ||
    !Number.isNaN(min) ||
    !Number.isNaN(max)
  ) {
    return "ERROR";
  } else {
    for (let i = min; i <= max; i++) {
      arr.push(i);
    }
    return arr.reduce((sum, current) => sum + current);
  }
};
// Do not edit below this line
module.exports = sumAll;
