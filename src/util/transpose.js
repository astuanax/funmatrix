import { map, curry } from 'fun.js'

/**
 * @function transpose
 * @desc Transposes a array of arrays using the Matrix.map function
 * @param m {Array}
 * @param idx {number}
 * @return {Matrix}
 */
export default curry((prev, next) => map((item, i) => (prev[i] || []).concat(next[i]))(next))
