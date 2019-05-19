import { concat, curry } from 'fun.js'

/**
 * @function concat
 * @param M {Matrix}
 * @param m {Array}
 * @param idx {number}
 * @returns {Array}
 */
export default curry(function (M, m, idx) {
  return concat(m, M.__value[idx])
})
