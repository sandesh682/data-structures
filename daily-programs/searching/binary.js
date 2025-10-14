function binarySearch(arr, number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === number) {
      return mid;
    } else if (arr[mid] < number) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

const arr = [1, 3, 5, 7, 9];
console.log(binarySearch(arr, 9));
