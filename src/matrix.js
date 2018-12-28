const curry = function (fun) {
    let argslen = fun.length
    if (argslen === 0) {
        return fun
    }
    return createRecurser([])

    function createRecurser(acc) {
        return function () {
            let args = Array.prototype.slice.call(arguments)
            return recurse(acc, args)
        }
    }

    function recurse(acc, args) {
        let _acc = acc.concat(args)
        if (_acc.length < argslen) {
            return createRecurser(_acc)
        } else {
            return fun.apply(this, _acc)
        }
    }
}

const concatMatrix = curry((M, m) => m.map((rows, idx) => Array.prototype.concat.call(rows, M.__value[idx])))

const addMatrix = curry((M, m) => m.map((row, idx) => row.map((col, jdx) => col + M.__value[idx][jdx])))

const addScalar = curry((M, m) => {
    return m.map(row => row.map(col => col + M.__value))
})

const dot = curry((X, y) => {
    let result = []
    for (let i = 0; i < X.__value.length; i++) {
        for (let j = 0; j < y[0].length; j++) {
            let val = X.__value[i][j]
            let sum = 0
            for (let k = 0; k < X.__value[0].length; k++) {
                sum += X.__value[i][k] * y[k][j]
            }
            result[i] = result[i] || []
            result[i][j] = sum
        }
    }
    return result
})

const emptyMatrix = curry(m => m.map(rows => []))

const identityMatrix = curry(m => m.map((rows, idx) => rows.map((cols, jdx) => (idx === jdx) * 1)))


let Matrix = function (...val) {
    if (arguments.length === 1) {
        [this.__value] = val
    } else {
        [rows, cols, this.__value = []] = val
        if (this.__value.length === 0) {
            this.__value = Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)))
        }
    }
}

Matrix.of = function (...args) {
    if (arguments.length === 1) {
        [val] = args
        if (val instanceof Matrix) return val
        if (this instanceof Matrix) {
            this.__value = val
        } else {
            return new Matrix(val)
        }
    } else {
        return new Matrix(...args)
    }

}


Matrix.prototype.fmap = function (f) {
    return Matrix.of(f(this.__value))
}

Matrix.fmap = curry(function (f, M) {
    return Matrix.of(M).fmap(f) //(f(M.__value))
})

Matrix.prototype.map = Matrix.prototype.fmap
Matrix.map = Matrix.fmap

Matrix.prototype.ap = function (M) {
    return Matrix.of(M).fmap(this.__value)
}

Matrix.ap = curry(function (f, M) {
    return Matrix.of(f).ap(M)
})

Matrix.prototype.concat = function (M, f = concatMatrix) {
    return Matrix.of(this).fmap(f(M))
}

Matrix.concat = curry(function (A, B, f = concatMatrix) {
    return Matrix.of(A).fmap(f(B))
})

Matrix.prototype.empty = function (f = emptyMatrix) {
    return Matrix.of(this.__value.length, this.__value[0].length).fmap(f)
}

Matrix.empty = curry(function (rows, cols, f = emptyMatrix) {
    return Matrix.of(rows, cols).fmap(f)
})


// #### #### #### //

Matrix.prototype.identity = function (f = identityMatrix) {
    return Matrix.of(this).empty(f)
}

Matrix.identity = function (m, n, f = identityMatrix) {
    return Matrix.empty(m, n, f)
}

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

Matrix.prototype.toArray = function () {
    return this.__value.map(row => row.map(col => col))
}

Matrix.fromArray = function (arr) {
    return Matrix.of(arr.map(row => row.map(col => col)))
}

Matrix.prototype.transpose = function () {
    return Matrix.of(this).fmap(m => m.reduce((prev, next) => next.map((item, i) =>
        (prev[i] || []).concat(next[i])
    ), []))
}

Matrix.transpose = function (M) {
    return Matrix.of(M).transpose()
}

Matrix.prototype.add = function (M, f = addMatrix) {
    return Matrix.of(this).concat(Matrix.of(M), f)
}

Matrix.prototype.addScalar = function (M, f = addScalar) {
    return Matrix.of(this).concat(Matrix.of(M), f)
}

module.exports = Matrix


