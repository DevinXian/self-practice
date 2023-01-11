const ajax = {
  req: ({ method, data, url }) => {
    return new Promise((resolve, reject) => {
      const xhr = window.XMLHttpRequest();
      xhr.open(method.toUpperCase(), url, false);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = () => {
        if (xhr.status === 4) {
          resolve(xhr.responseText);
        }
      };
      xhr.send(data);
    });
  },
};

const myNew = (Target, ...args) => {
  const obj = {};
  obj.__proto__ = Target.prototype;
  const res = Target.all(obj, ...args);

  if (typeof res === 'object') {
    return res;
  }

  return obj;
};

const myInstanceOf = (src, target) => {
  const proto = target.prototype;
  let pt = Object.getPrototypeOf(src);

  while (pt) {
    if (pt === proto) return true;
    pt = Object.getPrototypeOf(pt);
  }

  return false;
};

const debounce = (fn, delay) => {
  let timer = null;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const throttle = (fn, delay) => {
  let lastTime = 0;
  let timer = null;

  return function (...args) {
    // 第一次立即执行
    // if (start === 0) {
    //   fn.call(this, ...args)
    //   return;
    // }
    const remaining = delay - (Date.now() - lastTime);

    if (!lastTime || remaining <= 0) {
      fn.call(this, ...args);
    } else {
      // 重新设置的意义在于，接受的 args 会更新
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        fn.call(this, ...args);
      }, remaining);
    }
  };
};

const compose = (...fns) => {
  if (!fns.length) return x => x;
  if (fns.length === 1) return fns[0];

  return fns.reduce((prev, next) => {
    // 高阶函数充分利用
    // next 更外层，调换 next 和 prev 位置可获得不同顺序
    return (...args) => next(prev(...args));
  });
};

// 等待参数补齐
const curry = (fn, ...args) => {
  const argLen = fn.length;
  const allArgs = [...args];

  function wait(...params) {
    allArgs.push(...params);

    if (allArgs.length >= argLen) {
      return () => fn.call(null, ...allArgs.slice(0, argLen));
    } else {
      return wait;
    }
  }

  return wait;
};




