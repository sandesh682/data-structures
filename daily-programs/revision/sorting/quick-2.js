function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function pivot(
  arr,
  comparator = (a, b) => a - b,
  start = 0,
  end = arr.length - 1
) {
  const pivotEle = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (comparator(pivotEle, arr[i]) > 0) {
      pivotIdx++;
      swap(arr, pivotIdx, i);
    }
  }

  swap(arr, pivotIdx, start);
  return pivotIdx;
}

function quickSort(
  arr,
  comparator = (a, b) => a - b,
  left = 0,
  right = arr.length - 1
) {
  if (left < right) {
    const pivotIdx = pivot(arr, comparator, left, right);
    //   left
    quickSort(arr, comparator, left, pivotIdx - 1);
    //   right
    quickSort(arr, comparator, pivotIdx + 1, right);
  }
  return arr;
}
