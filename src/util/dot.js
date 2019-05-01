import curry from 'fun.js/src/curry'
import fold from 'fun.js/src/fold'
import map from 'fun.js/src/map'

/**
 * @function dot
 * @param B {Matrix}
 * @param a {Array}
 * @returns {Array}
 */
export default curry((B, a) => map((item, i) => {
  return fold((acc, x, j) => {
    return (acc += x * B.__value[j][i])
  }, 0)(a)
})(B.__value[0]))
