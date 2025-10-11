function flattenHelper(arr) {
  let result = [];
  function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatten(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  }

  flatten(arr);
  return result;
}

console.log(flattenHelper([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
