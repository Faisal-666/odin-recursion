import mergeSort from './mergeSort';

describe('mergeSort test', () => {
  it('should return [] when given []', () => {
    expect(mergeSort([])).toEqual([]);
  });

  it('should return [n] when given array with 1 length', () => {
    expect(mergeSort([100])).toEqual([100]);
  });

  it('should correctly return sorted value', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should correctly return sorted value', () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  it('should correctly return sorted value', () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});