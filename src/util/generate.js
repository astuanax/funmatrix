/**
 * @function generate
 * @desc Generator function for a matrix array, values are set to undefined
 * @param rows {number}
 * @param cols {number}
 * @returns {any[][]}
 */
export default (rows, cols) => Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)))
