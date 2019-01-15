const linearSearch = require('../../Search/linear');

describe('linearSearch()', () => {
  it('should search an array to find the given value', () => {
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
    let arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];

    expect(linearSearch(arr1, 3)).toEqual(3);
    expect(linearSearch(arr1, 100)).toEqual(-1);

    expect(linearSearch(arr2, 'c')).toEqual('c');
    expect(linearSearch(arr2, 'z')).toEqual(-1);
  });
});