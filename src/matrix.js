import curry from 'fun.js/src/curry'
import map from 'fun.js/src/map'
import fold from 'fun.js/src/fold'
import concat from 'util/concat'
import empty from 'util/empty'
import dot from 'util/dot'

let Matrix = function (val) {
  this.__value = val
}

Matrix.prototype.type = 'Matrix'

Matrix.of = function (val) {
  if (val instanceof Matrix) return val
  if (this instanceof Matrix) {
    this.__value = val
    return this
  }
  return new Matrix(val)
}

Matrix.prototype.map = function (f) {
  return Matrix.of(map(f)(this.__value))
}

Matrix.map = curry(function (f, M) {
  return Matrix.of(M).map(f)
})

Matrix.prototype.fold = function (f) {
  return Matrix.of(fold(f, [])(this.__value))
}

Matrix.fold = curry(function (f, M) {
  return Matrix.of(M).fold(f)
})

Matrix.prototype.ap = function (M) {
  return Matrix.of(M).map(this.__value)
}

Matrix.ap = curry(function (f, M) {
  return Matrix.of(f).ap(M)
})

Matrix.prototype.concat = function (M, f = concat) {
  return Matrix.of(this).map(f(M))
}

Matrix.concat = curry(function (A, B, f = concat) {
  return Matrix.of(A).map(f(B))
})

Matrix.prototype.empty = function () {
  return Matrix.of(this).map(empty)
}

Matrix.empty = curry(function (rows, cols, f = empty) {
  const m = Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)))
  return Matrix.of(m).map(f)
})

// #### #### #### //

// Matrix.prototype.identity = function (f = identityMatrix) {
//   return Matrix.of(this).empty(f)
// }
//
// Matrix.identity = function (m, n, f = identityMatrix) {
//   return Matrix.empty(m, n, f)
// }

Matrix.prototype.combine = function (M) {
  return Matrix.of(this).concat(Matrix.of(M))
}

Matrix.combine = function (A, B) {
  return Matrix.of(A).concat(Matrix.of(B))
}

Matrix.prototype.dot = function (M, f = dot) {
  return Matrix.of(this).concat(Matrix.of(M), f)
}

Matrix.dot = function (A, B, f = dot) {
  return Matrix.of(A).concat(Matrix.of(B), f)
}

Matrix.prototype.fill = function (f) {
  return Matrix.of(this).map(m => x => x.map(y => f()))
}

Matrix.prototype.zeros = function () {
  return Matrix.of(this).fill(x => 0)
}

Matrix.prototype.ones = function () {
  return Matrix.of(this).fill(x => 1)
}

export default Matrix
