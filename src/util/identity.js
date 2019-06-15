import map from 'fun.js/src/map'

/**
 * @function identity
 * @desc Creates an identiy matrix from an empty array
 * @param m {Array}
 * @param idx {Number}
 * @return {Matrix}
 */
export default (m, idx) => map((rows, jdx) => (idx === jdx) * 1)(m)
