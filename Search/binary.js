let binarySearch = (arr, el) => {
  let lo = 1, hi = arr.length - 1;

  while (lo <= hi) {
    mid = Math.floor(lo + (hi - lo) / 2);
    if (arr[mid] === el) {
      return arr[mid];
    } else if (arr[mid < el]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;