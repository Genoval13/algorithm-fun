let linearSearch = (arr, el) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return arr[i];
    }
  }
  return -1;
}

module.exports = linearSearch;