/**
 * @function generate
 * @desc Generator function for a matrix array, values are set to undefined
 * @param {Number} rows
 * @param {Number} cols
 * @returns {any[][]}
 */
export default (rows, cols) => Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)))
