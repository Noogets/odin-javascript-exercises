const sumAll = function (int1, int2) {
  let arr = [];
  if (
    int1 <= 0 ||
    int2 <= 0 ||
    !Number.isInteger(int1) ||
    !Number.isInteger(int2) ||
    isNaN(int1) ||
    isNaN(int2)
  ) {
    return "ERROR";
  } else {
    const min = Math.min(int1, int2);
    const max = Math.max(int1, int2);
    for (let i = min; i <= max; i++) {
      arr.push(i);
    }
    return arr.reduce((sum, current) => sum + current);
  }
};
// Do not edit below this line
module.exports = sumAll;
