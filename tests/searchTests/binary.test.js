const binarySearch = require('../../Search/binary');

xdescribe('binarySearch()', () => {
  it('should search an array to find the given value', () => {
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

    expect(binarySearch(arr1, 3)).toEqual(3);
    expect(binarySearch(arr1, 100)).toEqual(-1);
  });
});