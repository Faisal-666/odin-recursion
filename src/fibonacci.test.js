import { fibs, fibsRec } from './fibonacci';

describe('fibonnaci fn', () => {
  describe('fibonnaci interative', () => {
    it('should return [] when given 0', () => {
      expect(fibs(0)).toEqual([]);
    });

    it('should return [0] when given 1 input', () => {
      expect(fibs(1)).toEqual([0]);
    });

    it('should return n length array of list fibbonacci value when given n', () => {
      expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });
  });

  describe('fibonnaci recursive', () => {
    it('should return [] when given 0', () => {
      expect(fibsRec(0)).toEqual([]);
    });

    it('should return [0] when given 1 input', () => {
      expect(fibsRec(1)).toEqual([0]);
    });

    it('should return n length array of list fibbonacci value when given n', () => {
      expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });
  });
});
