import { map } from 'fun.js'

/**
 * @function generate
 * @desc Generator function for a matrix array, values are set to undefined
 * @param rows {number}
 * @param cols {number}
 * @returns {any[][]}
 */
export default (rows, cols = undefined, value = 0) => {
  const _cols = cols || rows
  const y = map(z => value)(new Array(_cols))
  return map(z => y)(new Array(rows))
}
