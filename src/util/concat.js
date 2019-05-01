import curry from 'fun.js/src/curry'
import concat from 'fun.js/src/concat'

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
