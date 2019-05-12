import map from 'fun.js/src/map'
import curry from 'fun.js/src/curry'

/**
 * @function transpose
 * @desc Transposes a array of arrays using the Matrix.map function
 * @param m {Array}
 * @param idx {number}
 * @return {Matrix}
 */
export default curry((prev, next) => map((item, i) => (prev[i] || []).concat(next[i]))(next))
