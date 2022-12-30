// 二路归并 - 稳定排序
const merge = (left, right) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[i++]);
    }
  }

  while (i < left.length) {
    result.push(left[i++]);
  }

  while (j < right.length) {
    result.push(right[j++]);
  }

  return result;
};

const main = list => {
  if (list.length <= 1) return list;

  const len = list.length;
  const middle = Math.floor(len / 2);
  const left = list.slice(0, middle);
  const right = list.slice(middle);

  return merge(main(left), main(right));
};

console.log(main([1]));
console.log(main([2, 1]));
console.log(main([1, 3, 2, 4]));
console.log(main([1, 2, 100, 4]));
console.log(main([1000, -1, 2, 100, 4]));
