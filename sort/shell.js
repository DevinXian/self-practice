const { swap } = require('./util');
const getGap = gap => Math.floor(gap / 2);

const main = list => {
  const len = list.length;

  if (len <= 1) return list;

  let gap = Math.floor(len / 2);

  // gap = 2
  while (gap >= 1) {
    // 子序列 - 直接插入
    for (let i = gap; i < len; i++) {
      let current = list[i];
      let index = i - gap;

      while (index >= 0 && list[index] > current) {
        list[index + gap] = list[index]; // 大的后移
        index -= gap;
      }
      list[index + gap] = current;
    }

    gap = getGap(gap);
  }

  return list;
};

console.log(main([1]));
console.log(main([2, 1]));
console.log(main([1, 3, 2, 4]));
console.log(main([1, 2, 100, 4]));
console.log(main([1000, -1, 2, 100, 4]));
