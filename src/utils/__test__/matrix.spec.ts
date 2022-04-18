import {generate, swap} from "../matrix.util";

describe('Matrix utility test suite', () => {
  describe('swap(matrix, source, target)', () => {
    let matrix: number[][];

    beforeEach(() => {
      /**
       *  1 2
       *  3 4
       */
      matrix = [[1, 2], [3, 4]]
    })

    it('should properly returns a new matrix', function () {
      expect(swap(matrix, [0, 0], [0, 0]) !== matrix).toBeTruthy()
    });

    it('should properly swap 2 points of a matrix', () => {
      expect(swap(matrix, [0, 0], [0, 1])).toEqual([[2, 1], [3, 4]])
      expect(swap(matrix, [0, 0], [1, 1])).toEqual([[4, 2], [3, 1]])
    })

    it('throws an error when coordinate of source or target is out of the given matrix', () => {
      expect(() => swap(matrix, [0, 0], [4, 4])).toThrow('The coordinate of the given source or target point is out of the given matrix')
    })
  })

  describe('generate(size, elementFactoryCallback)', () => {
    it('should properly returns a new matrix that has the same given size', function () {
      const generatedMatrix = generate([2, 3], () => null)
      expect(generatedMatrix.length).toEqual(2)
      expect(generatedMatrix[0].length).toEqual(3)
    });

    it('should properly returns a new matrix whose each element is produced by the factory', function () {
      expect(generate([2, 2], () => 1)).toEqual([[1, 1], [1, 1]])
      expect(generate([2, 3], (rowIndex, columnIndex) => rowIndex * 3 + columnIndex + 1))
        .toEqual([[1, 2, 3], [4, 5, 6]])
    });
  })
})