import { merge } from "./merge";

function mergeSort(arr) {
  if (arr.length <= 1) return [arr[0]];
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, aright);
}

console.log(mergeSort([1, 3, 4, 2, 5]));
