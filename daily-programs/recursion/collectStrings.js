function helper(obj) {
  const result = [];
  function collectStrings(obj) {
    for (let key in obj) {
      const value = obj[key];
      if (typeof value === "string") {
        result.push(value);
      } else if (typeof value === "object" && value !== null) {
        collectStrings(value);
      }
    }
  }
  collectStrings(obj);
  return result;
}
const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};
console.log(helper(obj));
