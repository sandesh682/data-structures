function selectionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[j], arr[minIdx]) < 0) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1]));
