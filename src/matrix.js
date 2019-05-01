import curry from 'fun.js/src/curry'
import map from 'fun.js/src/map'
import fold from 'fun.js/src/fold'
import concat from 'util/concat'
import empty from 'util/empty'
import dot from 'util/dot'
import identity from 'util/identity'

/**
 * @function Matrix
 * @desc Matrix applicative providing standard matrix operations
 * @param val {Array} - Array of arrays
 * @constructor
 */
let Matrix = function (val) {
  this.__value = val
}

/**
 * @memberOf Matrix
 * @property {string} type
 * @type {string}
 */
Matrix.prototype.type = 'Matrix'

/**
 * @memberOf Matrix
 * @static
 * @function of
 * @desc Creates a Matrix object and flattens the Matrix
 * @param val {array|function}
 * @returns {Matrix}
 */
Matrix.of = function (val) {
  if (val instanceof Matrix) return val
  if (this instanceof Matrix) {
    this.__value = val
    return this
  }
  return new Matrix(val)
}

/**
 * @memberOf Matrix
 * @function map
 * @description Maps over the rows of the matrix using a map function
 * @param f {function}
 * @returns {Matrix}
 */
Matrix.prototype.map = function (f) {
  return Matrix.of(map(f)(this.__value))
}

/**
 * @memberOf Matrix
 * @static
 * @function map
 * @description Static function that maps over the rows of the matrix using a map function
 * @param f {function}
 * @param M {Matrix}
 * @returns {Matrix}
 */
Matrix.map = curry(function (f, M) {
  return Matrix.of(M).map(f)
})

/**
 * @memberOf Matrix
 * @function fold
 * @description Reduce the matrix rows using a reduce function
 * @param f {function}
 * @returns {Matrix}
 */
Matrix.prototype.fold = function (f) {
  return Matrix.of(fold(f, [])(this.__value))
}

/**
 * @memberOf Matrix
 * @static
 * @function fold
 * @description Static function to reduce the matrix rows using a reduce function
 * @param f {function}
 * @param M {Matrix}
 * @returns {Matrix}
 */
Matrix.fold = curry(function (f, M) {
  return Matrix.of(M).fold(f)
})

/**
 * @memberOf Matrix
 * @function ap
 * @description Applies a Matrix to a function
 * @param M {Matrix}
 * @returns {Matrix}
 */
Matrix.prototype.ap = function (M) {
  return Matrix.of(M).map(this.__value)
}

/**
 * @memberOf Matrix
 * @static
 * @function ap
 * @description Applies a Matrix to a function
 * @param f {function}
 * @param M {Matrix}
 * @returns {Matrix}
 */
Matrix.ap = curry(function (f, M) {
  return Matrix.of(f).ap(M)
})

/**
 * @memberOf Matrix
 * @function concat
 * @description concatenates 2 Matrices using a function as operator
 * @param M {Matrix}
 * @returns {Matrix}
 */
Matrix.prototype.concat = function (M, f = concat) {
  return Matrix.of(this).map(f(M))
}

/**
 * @memberOf Matrix
 * @static
 * @function concat
 * @description concatenates 2 Matrices using a function as operator
 * @param A {Matrix}
 * @param B {Matrix}
 * @returns {Matrix}
 */
Matrix.concat = curry(function (A, B, f = concat) {
  return Matrix.of(A).map(f(B))
})

/**
 * @memberOf Matrix
 * @function empty
 * @description Return an empty Matrix from an existing Matrix
 * @returns {Matrix}
 */
Matrix.prototype.empty = function () {
  return Matrix.of(this).map(empty)
}

/**
 * @memberOf Matrix
 * @function empty
 * @description Return an empty Matrix from an existing Matrix
 * @param rows {number}
 * @param cols {number}
 * @returns {Matrix}
 */
Matrix.empty = curry(function (rows, cols) {
  const m = Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)))
  return Matrix.of(m).map(empty)
})

// #### #### #### //

/**
 * @memberOf Matrix
 * @function identity
 * @desc Returns an identity matrix
 * @returns {Matrix}
 */
Matrix.prototype.identity = function () {
  return Matrix.of(identity).ap(this)
}

/**
 * @memberOf Matrix
 * @static
 * @function identity
 * @desc Returns an identity matrix
 * @returns {Matrix}
 */
Matrix.identity = function (m, n) {
  return Matrix.of(identity).ap(Matrix.empty(m, n))
}

/**
 * @memberOf Matrix
 * @function combine
 * @see Matrix.concat
 * @param M
 * @returns {Matrix}
 */
Matrix.prototype.combine = function (M) {
  return Matrix.of(this).concat(Matrix.of(M), concat)
}

/**
 * @memberOf Matrix
 * @static
 * @function combine
 * @see Matrix.concat
 * @param M
 * @returns {Matrix}
 */
Matrix.combine = function (A, B) {
  return Matrix.of(A).concat(Matrix.of(B), concat)
}

/**
 * @memberOf Matrix
 * @function dot
 * @description Returns the dot product between 2 matrices
 * @param M
 * @param f
 * @returns {Matrix}
 */
Matrix.prototype.dot = function (M) {
  return Matrix.of(this).concat(Matrix.of(M), dot)
}

/**
 * @memberOf Matrix
 * @static
 * @function dot
 * @description Returns the dot product between 2 matrices
 * @param M
 * @returns {Matrix}
 */
Matrix.dot = function (A, B) {
  return Matrix.of(A).concat(Matrix.of(B), dot)
}

/**
 * @memberOf Matrix
 * @function fill
 * @desc Fill up an empty matrix with the provided map function
 * @param f
 * @returns {Matrix}
 */
Matrix.prototype.fill = function (f) {
  return Matrix.of(this).map(m => x => x.map(y => f()))
}

/**
 * @memberOf Matrix
 * @function zeros
 * @desc Fill up an empty matrix with zeros
 * @returns {Matrix}
 */
Matrix.prototype.zeros = function () {
  return Matrix.of(this).fill(x => 0)
}

/**
 * @memberOf Matrix
 * @function zeros
 * @desc Fill up an empty matrix with ones
 * @returns {Matrix}
 */
Matrix.prototype.ones = function () {
  return Matrix.of(this).fill(x => 1)
}

export default Matrix
