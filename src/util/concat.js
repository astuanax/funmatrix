import curry from 'fun.js/src/curry'
import concat from 'fun.js/src/concat'

/**
 * @function concat
 * @desc Helper function concatenating/combining 2 Matrices
 * @param {Matrix} M - Left side of the concat operatior
 * @param {Array} m - right side of the contac operator
 * @param {Number} idx - Index of the row
 * @returns {Array}
 */
export default curry(function (M, m, idx) {
  return concat(m, M.__value[idx])
})
