import curry from 'fun.js/src/curry'
import map from 'fun.js/src/map'
import fold from 'fun.js/src/fold'
import equals from 'fun.js/src/equals'
import concat from 'util/concat'
import empty from 'util/empty'
import dot from 'util/dot'
import identity from 'util/identity'
import transpose from 'util/transpose'

/**
 * @class Matrix
 * @classdesc Matrix applicative providing standard matrix operations
 * @summary The Matrix class should not be instantiated with the new keyword. Instead use the Matrix.of syntax to create a new Matrix. Unfortunatly jsdocs does not allow for the constructor to be hidden.
 * @hidecontructor
 * @see of
 * @example
 *
 * const m =  Matrix.of([[1,2],[2,3],[4,5]])
 *
 */
let Matrix = function (val) {
  this.__value = val
  this.precision = 4
}

/**
 * @memberOf Matrix
 * @property {string} type
 * @type {string}
 * @example
  *
  * const m =  Matrix.of([[1,2],[2,3],[4,5]])
  * m.type === 'Matrix'
 */
Matrix.prototype.type = 'Matrix'

/**
 * @memberOf Matrix
 * @member setPrecision
 * @param precision {number} Set the number of decimals for rounding
 */
Matrix.prototype.setPrecision = function (precision) {
  this.precision = precision
}

/**
 * @memberOf Matrix
 * @member isSymmetric
 * @returns {boolean}
 */
Matrix.prototype.isSymmetric = function () {
  const a = this.__value
  const b = Matrix.transpose(this).__value
  return equals(a, b)
}

/**
 * @memberOf Matrix
 * @member isOrthogonal
 * @param M {Matrix|array}
 * @returns {boolean}
 */
Matrix.prototype.isOrthogonal = function () {
  const AxAt = this.dot(this.transpose())
  const I = this.identity()
  return equals(AxAt, I)
}

/**
 * @memberOf Matrix
 * @member getCols
 * @returns {*}
 */
Matrix.prototype.getCols = function () {
  return this.__value[0].length
}

/**
 * @memberOf Matrix
 * @member equals
 * @parma M {Matrix|array}
 * @returns {Boolean}
 */
Matrix.prototype.equals = function (M) {
  return equals(this.__value, M.__value || M)
}

/**
 * @memberOf Matrix
 * @member getRows
 * @returns {*}
 */
Matrix.prototype.getRows = function () {
  return this.__value.length
}

/**
 * @memberOf Matrix
 * @member getShape
 * @returns {array}
 */
Matrix.prototype.getShape = function () {
  return [this.getRows(), this.getCols()]
}

/**
 * @memberOf Matrix
 * @static
 * @function of
 * @desc Creates a Matrix object and flattens the Matrix
 * @param val {array|function}
 * @returns {Matrix}
 * @example
  *
  * const m =  Matrix.of([[1,2],[2,3],[4,5]])
  *
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
 * @instance
 * @member map
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
 * @instance
 * @member fold
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
 * @instance
 * @member ap
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
 * @instance
 * @member concat
 * @description Concatenates 2 Matrices using a function as operator
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
 * @description Concatenates 2 Matrices using a function as operator
 * @param A {Matrix}
 * @param B {Matrix}
 * @returns {Matrix}
 */
Matrix.concat = curry(function (A, B, f = concat) {
  return Matrix.of(A).map(f(B))
})

/**
 * @memberOf Matrix
 * @instance
 * @member empty
 * @description Return an empty Matrix from an existing Matrix
 * @returns {Matrix}
 */
Matrix.prototype.empty = function () {
  return Matrix.of(this).map(empty)
}

/**
 * @memberOf Matrix
 * @static
 * @function empty
 * @description Return an empty Matrix from an existing Matrix
 * @param rows {number}
 * @param cols {number}
 * @returns {Matrix}
 */
Matrix.empty = curry(function (rows = 0, cols = 0) {
  const m = Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)))
  return Matrix.of(m).map(empty)
})

// #### #### #### //

/**
 * @memberOf Matrix
 * @instance
 * @member identity
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
Matrix.identity = function (rows, cols) {
  const m = Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)))
  return Matrix.of(identity).ap(m)
}

/**
 * @memberOf Matrix
 * @instance
 * @member combine
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
 * @instance
 * @member dot
 * @description Returns the dot product between 2 matrices
 * @param M
 * @param f
 * @returns {Matrix}
 */
Matrix.prototype.dot = function (M) {
  return Matrix.of(this).concat(Matrix.of(M), dot(this.precision))
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
  return Matrix.of(A).dot(Matrix.of(B))
}

/**
 * @memberOf Matrix
 * @instance
 * @member fill
 * @desc Fill up an empty matrix with the provided map function
 * @param f
 * @returns {Matrix}
 */
Matrix.prototype.fill = function (f) {
  return Matrix.of(this).map(map(x => f(x)))
}

/**
 * @memberOf Matrix
 * @instance
 * @member zeros
 * @desc Fill up an empty matrix with zeros
 * @returns {Matrix}
 */
Matrix.prototype.zeros = function () {
  return Matrix.of(this).fill(x => 0)
}

/**
 * @memberOf Matrix
 * @instance
 * @member ones
 * @desc Fill up an empty matrix with ones
 * @returns {Matrix}
 */
Matrix.prototype.ones = function () {
  return Matrix.of(this).fill(x => 1)
}

/**
 * @memberOf Matrix
 * @instance
 * @member random
 * @desc Fill up an empty matrix with random values
 * @param {function} [f = e => Math.random() * 2 - 1]
 * @returns {Matrix}
 */
Matrix.prototype.random = function (f = e => Math.random() * 2 - 1) {
  return Matrix.of(this).fill(f)
}

/**
 * @memberOf Matrix
 * @instance
 * @member toArray
 * @desc Returns the array from the matrix
 * @returns {array}
 */
Matrix.prototype.toArray = function () {
  return this.__value.map(row => row.map(col => col))
}

/**
 * @memberOf Matrix
 * @instance
 * @member clone
 * @desc Returns a clone of the matrix
 * @returns {Matrix}
 */
Matrix.prototype.clone = function () {
  return Matrix.fromArray(this.__value)
}

/**
 * @memberOf Matrix
 * @instance
 * @member clone
 * @desc Returns a clone Matrix from an array
 * @returns {array}
 */
Matrix.fromArray = function (arr) {
  return Matrix.of(map(row => map(col => col)(row))(arr))
}

/**
 * @memberOf Matrix
 * @instance
 * @member transpose
 * @desc Returns a transposed Matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([-1, 2], [3, 4], [-8, 2])
 * const b = A.transpose().toArray()
 * // returns [[-1, 3,-8], [2, 4, 2]]
 */
Matrix.prototype.transpose = function () {
  return Matrix.of(fold(transpose, [], this.__value))
}

/**
 * @memberOf Matrix
 * @function transpose
 * @desc Returns a transposed Matrix
 * @param M {Matrix|array} A Matrix or a matrix array
 * @returns {Matrix}
 * @example
 *
 * const a = [-1, 2], [3, 4], [-8, 2]
 * const b = Matrix.transpose(a).toArray()
 * // returns [[-1, 3,-8], [2, 4, 2]]
 */
Matrix.transpose = function (M) {
  return Matrix.of(M).transpose()
}

/**
 * @memberOf Matrix
 * @member add
 * @instance
 * @param M {Matrix|number} Add a Matrix or a number
 * @returns {Matrix}
 */
Matrix.prototype.add = function (M) {
  if (M instanceof Matrix) {
    if (this.getCols() !== M.getCols() || this.getRows() !== M.getRows()) {
      throw new Error('Matrices do not match, cannot add')
    }
    return this.map((row, idx) => map((val, jdx) => val + M.__value[idx][jdx])(row))
  } else {
    return this.map(map(x => x + M))
  }
}

/**
 * @memberOf Matrix
 * @member subtract
 * @instance
 * @param M {Matrix|number} Subtract a Matrix or a number
 * @returns {Matrix}
 */
Matrix.prototype.subtract = function (M) {
  if (M instanceof Matrix) {
    if (this.getCols() !== M.getCols() || this.getRows() !== M.getRows()) {
      throw new Error('Matrices do not match, cannot subtract')
    }
    return this.map((row, idx) => map((val, jdx) => val - M.__value[idx][jdx])(row))
  } else {
    return this.map(map(x => x - M))
  }
}

/**
 * @memberOf Matrix
 * @member multiply
 * @instance
 * @desc Mutliplw a scalar or a mtraix with a matrix. Throws an error if the multiplication is not possible.
 * @param M {Matrix|number}
 * @returns {Matrix}
 */
Matrix.prototype.multiply = function (M) {
  if (M instanceof Matrix) {
    if (this.getCols() !== M.getCols() || this.getRows() !== M.getRows()) {
      console.log('Use static method \'dot\' to do matrix multiplication')
      throw new Error('Matrices do not match, cannot create hadamard product')
    }
    return this.map((row, idx) => map((col, jdx) => col * M.__value[idx][jdx])(row))
  } else {
    return this.map(map(x => x * M))
  }
}

/**
 * @memberOf Matrix
 * @member additiveinverse
 * @instance
 * @desc Function that returns the matrix obtained by changing the sign of every matrix element. The additive inverse of matrix A is written –A.
 * @returns {Matrix}
 */
Matrix.prototype.additiveinverse = function () {
  return Matrix.of(this).multiply(-1)
}

/**
 * @memberOf Matrix
 * @member hadamard
 * @instance
 * @see mumtiply
 * @param M
 * @returns {Matrix}
 */
Matrix.prototype.hadamard = function (M) {
  return Matrix.of(this).multiply(M)
}

/**
 * @memberOf Matrix
 * @member lu
 * @desc Calculates LU decomposition of the current Matrix
 * @returns {Matrix[]}
 */
Matrix.prototype.lu = function () {
  const n = this.getRows()
  const tol = 1e-6
  const A = this.clone()
  const L = this.zeros()
  const U = this.zeros()

  for (let k = 0; k < n; ++k) {
    if (Math.abs(A.__value[k][k]) < tol) throw Error('Cannot proceed without a row exchange')
    L.__value[k][k] = 1
    for (let i = k + 1; i < n; ++i) {
      L.__value[i][k] = A.__value[i][k] / A.__value[k][k]
      for (let j = k + 1; j < n; ++j) {
        A.__value[i][j] = A.__value[i][j] - L.__value[i][k] * A.__value[k][j]
      }
    }
    for (let l = k; l < n; ++l) {
      U.__value[k][l] = A.__value[k][l]
    }
  }
  return [L, U]
}

Matrix.prototype.rref = function () {
  let lead = 0
  const resultMatrix = this.clone()

  for (let r = 0; r < this.getRows(); ++r) {
    if (this.getCols() <= lead) {
      return resultMatrix
    }
    let i = r
    while (resultMatrix.__value[i][lead] === 0) {
      ++i
      if (this.getRows() === i) {
        i = r
        ++lead
        if (this.getCols() === lead) {
          return resultMatrix
        }
      }
    }

    let tmp = resultMatrix.__value[i]
    resultMatrix.__value[i] = resultMatrix.__value[r]
    resultMatrix.__value[r] = tmp

    let val = resultMatrix.__value[r][lead]
    for (let j = 0; j < this.getCols(); ++j) {
      resultMatrix.__value[r][j] /= val
    }

    for (let i = 0; i < this.getRows(); ++i) {
      if (i === r) continue
      val = resultMatrix.__value[i][lead]
      for (let j = 0; j < this.getCols(); ++j) {
        resultMatrix.__value[i][j] -= val * resultMatrix.__value[r][j]
      }
    }
    lead++
  }
  return resultMatrix
}

Matrix.prototype.solve = function (b) {
  const A = this.clone()
  const LU = A.lu()
  const L = LU[0]
  const U = LU[1]
  const n = this.getRows()
  let s = 0
  const c = []
  const x = []

  for (let k = 0; k < n; ++k) {
    for (let j = 0; j < k; ++j) {
      s = s + L.__value[k][j] * c[j]
    }
    c[k] = b[k] - s
    s = 0
  }
  for (let a = n - 1; a > -1; --a) {
    let t = 0
    for (let b = a + 1; b < n; ++b) {
      t = t + U.__value[a][b] * x[b]
    }
    x[a] = (c[a] - t) / U.__value[a][a]
  }
  return x
}

Matrix.prototype.inverse = function () {
  const A = this.clone()
  const I = A.identity()
  const Inv = A.concat(I).rref()

  const result = Inv.__value.reduce((result, x, idx) => {
    const half = x.length / 2
    result.push(x.slice(half, x.length))
    return result
  }, [])
  return Matrix.of(result)
}

Matrix.prototype.lsq = function (b) {
  const A = this.clone()
  const At = Matrix.transpose(A)
  const x = Matrix.dot(At, A).solve(Matrix.dot(At, b).__value)

  const X = Matrix.of(x.map(x => [x]))
  const P = Matrix.dot(A, X)
  const E = Matrix.subtract(b, P)
  return [x, P, E]
}

Matrix.prototype.rank = function () {
  const rref = this.rref()
  let result = 0
  for (let i = 0; i < rref.getCols(); ++i) {
    result += rref.__value[i][i]
  }
  return result
}

Matrix.prototype.dimension = function () {
  return this.rank()
}

export default Matrix
