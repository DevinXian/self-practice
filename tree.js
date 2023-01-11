const tree = {
  //     root
  //   l      r
  // la lb   ra rb
  // root l la lb r ra rb

  value: 'root',
  left: {
    value: 'l',
    left: {
      value: 'la',
      left: {
        value: 'laa',
      },
      right: {
        value: 'lab',
      },
    },
    right: {
      value: 'lb',
      left: {
        value: 'lba',
      },
      right: {
        value: 'lbb',
      },
    },
  },
  right: {
    value: 'r',
    left: {
      value: 'ra',
      left: {
        value: 'raa',
      },
      right: {
        value: 'rab',
      },
    },
    right: {
      value: 'rb',
      left: {
        value: 'rba',
      },
      right: {
        value: 'rbb',
      },
    },
  },
};

const stack = [tree];
const seq = [];

while (stack.length > 0) {
  const current = stack.pop();
  seq.push(current);

  if (current.right) {
    stack.push(current.right);
  }

  if (current.left) {
    stack.push(current.left)
  }

}

console.log(seq.map(i => i.value));
