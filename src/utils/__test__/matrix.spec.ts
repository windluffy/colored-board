import {swap} from "../matrix.util";

describe('Matrix utility test suite', () => {
  describe('swap', () => {
    let matrix: number[][];

    beforeEach(() => {
      matrix = [[1, 2], [3, 4]]
    })

    it('should properly returns a new matrix', function () {
      expect(swap(matrix, [0, 0], [0, 0]) !== matrix).toBeTruthy()
    });

    it('should properly swap 2 points of a matrix', () => {
      /**
       *  1 2
       *  3 4
       */

      expect(swap(matrix, [0, 0], [0, 1])).toEqual([[2, 1], [3, 4]])
      expect(swap(matrix, [0, 0], [1, 1])).toEqual([[4, 2], [3, 1]])
    })

    it('throws an error when coordinate of source or target is out of the given matrix', () => {
      expect(() => swap(matrix, [0, 0], [4, 4])).toThrow('The coordinate of the given source or target point is out of the given matrix')
    })

  })
})