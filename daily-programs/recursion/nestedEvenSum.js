function helper(obj) {
  let sum = 0;
  function nestedEvenSum(obj) {
    const values = Object.values(obj);
    for (let i = 0; i < values.length; i++) {
      if (typeof values[i] === "object") {
        nestedEvenSum(values[i]);
      } else if (values[i] % 2 === 0 && typeof values[i] === "number") {
        sum += values[i];
      }
    }
  }
  nestedEvenSum(obj);
  return sum;
}

const obj = {
  a: 2,
  b: { b1: 3, b2: 4, b3: { b4: 6 } },
  c: { c1: { c2: 5, c3: 8 } },
  d: 11,
};
console.log(helper(obj));
