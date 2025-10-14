function binarySearch(arr, number, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === number) return mid;
  else if (arr[mid] < number) {
    return binarySearch(arr, number, mid + 1, right);
  } else {
    return binarySearch(arr, number, left, mid - 1);
  }
}

const arr = [1, 3, 5, 7, 9];
console.log(binarySearch(arr, 3));
