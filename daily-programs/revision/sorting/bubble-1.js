function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    console.log(arr);
    if (noSwap) break;
  }
  return arr;
}

// console.log(bubbleSort([1, 5, 4, 3, 2]));
bubbleSort([1, 5, 4, 3, 2]);

// [1,4,3,2,5]
// [1,3,2,4,5]
// [1,2,3,4,5]
