const { swap } = require('./util');

const main = list => {
  if (list.length <= 1) return list;
  // 共插入 N-1 次
  for (let i = 1; i < list.length; i++) {
    const current = list[i];
    let index = i - 1;

    // while 循环显得更简单
    // 也可以二分查找，然后移动
    while (index >= 0 && list[index] > current) {
      list[index + 1] = list[index];
      index--;
    }
    list[index + 1] = current;

    //   // 从后往前找合适位置插入
    //   for (let j = i - 1; j >= 0; j--) {
    //     if (list[j] > current) {
    //       // 大的往后移动
    //       list[j + 1] = list[j];
    //     } else {
    //       index = j + 1;
    //       // list[j + 1] = current; // 不能这里，要考虑边界
    //       break;
    //     }
    //   }
    //   list[index] = current;
  }

  return list;
};

console.log(main([1]));
console.log(main([2, 1]));
console.log(main([1, 3, 2, 4]));
console.log(main([1, 2, 100, 4]));
console.log(main([1000, -1, 2, 100, 4]));
