/**
 * Returns a new matrix that has swapped the points for the given coordinate of source and target point
 * @param matrix
 * @param source source point's coordinate [rowIndex, columnIndex]
 * @param target target point's coordinate [rowIndex, columnIndex]
 */
export const swap = <T> (matrix: T[][], source: [number, number], target: [number, number]): T[][] => {
  const clonedMatrix = matrix.map(row => [...row])

  try {
    clonedMatrix[source[0]][source[1]] = matrix[target[0]][target[1]]
    clonedMatrix[target[0]][target[1]] = matrix[source[0]][source[1]]
  } catch (e) {
    throw Error('The coordinate of the given source or target point is out of the given matrix')
  }

  return clonedMatrix
}