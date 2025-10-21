function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function pivot(arr, start = 0, end = arr.length - 1) {
  const pivotEle = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotEle) {
      pivotIdx++;
      swap(arr, pivotIdx, i);
    }
  }

  swap(arr, start, pivotIdx);
  return pivotIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}
