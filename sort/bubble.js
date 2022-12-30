const { swap } = require('./util');

const bubble = list => {
  let hasSwap = true;

  // 比较 N 趟
  for (let i = 0; i < list.length; i++) {
    if (!hasSwap) break;
    hasSwap = false;

    for (let j = i; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        hasSwap = true;
        swap(list, j, j + 1);
      }
    }
  }

  return list;
};

console.log(bubble([1]));
console.log(bubble([2, 1]));
console.log(bubble([1, 3, 2]));
console.log(bubble([1, 3, 2, 4]));
console.log(bubble([1, 2, 3, 4]));
console.log(bubble([1, 2, 100, 4]));
console.log(bubble([1000, -1, 2, 100, 4]));
