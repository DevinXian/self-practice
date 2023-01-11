const compose = (...fns) => {
  if (!fns.length) return x => x;
  if (fns.length === 1) return fns[0];

  return fns.reduce((prev, next) => {
    return (...args) => prev(next(...args));
    // return (...args) => next(prev(...args));
  });
};

const f1 = x => x + 1

const f2 = x => x * 2

const fn = compose(f1, f2)(1)
const fn2 = compose(f2, f1)(1)
console.log(fn, fn2)