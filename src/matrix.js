let Matrix = function (val) {
    this.__value = val
}

Matrix.of = function (val) {
    if (val instanceof Matrix) return val
    if (this instanceof Matrix) {
        this.__value = val
    } else {
        return new Matrix(val)
    }
}


Matrix.prototype.fmap = function (f) {
    return Matrix.of(f(this.__value))
}

Matrix.fmap = function (f, M) {
    return Matrix.of(M).fmap(f)
}

Matrix.prototype.ap = function (M) {
    return Matrix.of(M).fmap(this.__value)
}

Matrix.prototype.identity = function () {
    return Matrix.of(this).fmap(m => m.map((matrix, idx) => matrix.map((nr, jdx) => (idx === jdx) * 1)))
}

Matrix.identity = function (M) {
    return Matrix.of(M).identity()
}

Matrix.identity = function (m, n) {
    return Matrix.empty(m, n).identity()
}

Matrix.prototype.combine = function (M) {
    return Matrix.of(this).fmap(m => m.map((x, idx) => x.concat(M.__value[idx])))
}

Matrix.combine = function (A, B) {
    return Matrix.of(A).combine(Matrix.of(B))
}

Matrix.prototype.concat = function (M) {
    return Matrix.of(this).fmap(m => m.map((x, idx) => x.concat(M.__value[idx])))
}

Matrix.concat = function (A, B) {
    return Matrix.of(A).concat(Matrix.of(B))
}

Matrix.prototype.toArray = function () {
    return this.__value.map(row => row.map(col => col))
}

Matrix.fromArray = function (arr) {
    return Matrix.of(arr.map(row => row.map(col => col)))
}

Matrix.prototype.dot = function (M) {
    return Matrix.of((X, Y = M.__value) => {
        let result = []
        for (let i = 0; i < X.length; i++) {
            for (let j = 0; j < Y[0].length; j++) {
                let val = X[i][j]
                let sum = 0
                for (let k = 0; k < X[0].length; k++) {
                    sum += X[i][k] * Y[k][j]
                }
                result[i] = result[i] || []
                result[i][j] = sum
            }
        }
        return result
    }).ap(this)

}

Matrix.dot = function (A, B) {
    return Matrix.of(A).dot(Matrix.of(B))
}

Matrix.prototype.empty = function () {
    return Matrix.of(Array.apply(null, Array(this.__value.length)).map(x => Array.apply(null, Array(this.__value[0].length))))
}

Matrix.empty = function (rows, cols) {
    return Matrix.of(Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols))))
}

Matrix.prototype.fill = function (f) {
    return Matrix.of(this).fmap(m => m.map(x => x.map(y => f())))
}

Matrix.prototype.zeros = function () {
    return Matrix.of(this).fill(x => 0)
}

Matrix.prototype.ones = function () {
    return Matrix.of(this).fill(x => 1)
}

Matrix.prototype.random = function (f = e => Math.random() * 2 - 1) {
    return Matrix.of(this).fill(f)
}

module.exports = Matrix

// // F.of(x).map(f) === F.of(f).ap(F.of(x));
// const f = x => x
// const a = [[0, 1, 1], [2, 3, 4]]
// const b = [[2, 2, 2], [3, 3, 3]]
// const c = [[5, 5, 5], [4, 4, 4]]
// const A = Matrix.of(a)
// const B = Matrix.of(b)
// const C = Matrix.of(c)
// console.log(Matrix.of(a).fmap(f))
// console.log(Matrix.of(f).ap(Matrix.of(a)))
// console.log(Matrix.fmap(f, a))
// console.log(Matrix.of(a).combine(Matrix.of(a)))
// console.log(Matrix.combine(a, a))
//
// // S.concat(S.concat(a, b), c) ≡ S.concat(a, S.concat(b, c))
// console.log('concat', Matrix.concat(Matrix.concat(A, B), C))
// console.log('concat', Matrix.concat(A, Matrix.concat(B, C)))
// console.log(Matrix.dot(Matrix.of([[1, 2], [3, 4], [5, 6]]), Matrix.of([[1, 2, 3], [3, 4, 5]])))
// console.log(Matrix.dot([[1, 2], [3, 4], [5, 6]], [[1, 2, 3], [3, 4, 5]]))
// console.log(Matrix.of([[1, 2], [3, 4], [5, 6]]).dot(Matrix.of([[1, 2, 3], [3, 4, 5]])))
// console.table(Matrix.empty(2, 2).__value)
// console.log(Matrix.empty(4, 4).zeros())
// console.log(Matrix.empty(3, 4).ones())
// console.log(Matrix.empty(5, 6).random())
// console.log(Matrix.empty(5, 6).random(e => Math.floor(Math.random() * 10)))
// console.log(Matrix.identity(Matrix.of(a)))
// console.log(Matrix.of(a).identity())
// console.log(Matrix.identity(4, 4))
