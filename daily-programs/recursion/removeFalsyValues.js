function removeFalsyValues(obj) {
  const newObj = {};
  for (let key in obj) {
    const value = obj[key];
    if (value && typeof value !== "object") {
      newObj[key] = value;
    } else if (typeof value === "object" && value !== null) {
      const nested = removeFalsyValues(value);
      if (Object.keys(nested).length) {
        newObj[key] = nested;
      }
    }
  }
  return newObj;
}

const obj = {
  a: 0,
  b: 1,
  c: { d: "", e: "hello", f: false },
};
console.log(removeFalsyValues(obj));
