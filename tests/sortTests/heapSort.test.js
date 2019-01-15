const heap = require('../../Sort/heapSort');

xdescribe('heapSort()', () => {
  it('should sort an array by heap', () => {
    let arr1 = [8, 3, 4, 7, 2, 5, 1, 6];

    expect(heapSort(arr1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});