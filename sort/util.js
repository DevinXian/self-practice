exports.swap = (list, i, j) => {
  let tmp = list[i];
  list[i] = list[j];
  list[j] = tmp;
};
