import curry from 'fun.js/src/curry'
import fold from 'fun.js/src/fold'
import map from 'fun.js/src/map'
import round from './round'

/**
 * @function dot
 * @desc Helper function to generate the dotproduct of 2 Matrices
 * @param {Matrix} B - Right side of hte dot product
 * @param {Array} a - Array representing theleft side of the dot product
 * @returns {Array}
 */
export default curry((decimals, B, a) => map((item, i) => {
  return fold((acc, x, j) => {
    acc += round(x * B.__value[j][i], decimals)
    return acc
  }, 0)(a)
})(B.__value[0]))
