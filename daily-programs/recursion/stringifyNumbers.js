function stringifyNumbers(obj) {
  const newObj = {};
  for (let key in obj) {
    const value = obj[key];
    if (typeof value === "number") {
      newObj[key] = value.toString();
    } else if (typeof value === "object") {
      newObj[key] = stringifyNumbers(value);
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
}

const obj = {
  a: 2,
  b: { b1: 3, b2: 4 },
  c: { c1: { c2: 6 } },
  d: true,
};
console.log(stringifyNumbers(obj));
