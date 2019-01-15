function quickSort (arr) {
  if (arr.length < 2) {
    return arr;
  }

  let left = [], right = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  let l = quickSort(left);
  let r = quickSort(right);

  return l.concat(pivot, r);
}

module.exports = quickSort;