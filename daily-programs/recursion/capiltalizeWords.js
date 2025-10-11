function helper(arr) {
  let result = [];
  function capitalizeFirst(arr) {
    if (arr.length === 0) return;
    const str = arr[0];
    result.push(str.toUpperCase());
    capitalizeFirst(arr.slice(1));
  }
  capitalizeFirst(arr);
  return result;
}

console.log(helper(["my", "name", "is", "sandesh"]));
