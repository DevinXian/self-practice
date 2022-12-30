const { swap } = require('./util');

const select = list => {
  for (let i = 0; i < list.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }

    swap(list, i, minIndex);
  }

  return list;
};

const main = select;

console.log(main([1]));
console.log(main([2, 1]));
console.log(main([1, 3, 2]));
console.log(main([1, 3, 2, 4]));
console.log(main([1, 2, 3, 4]));
console.log(main([1, 2, 100, 4]));
console.log(main([1000, -1, 2, 100, 4]));
