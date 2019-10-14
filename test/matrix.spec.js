import chai from 'chai'
import Matrix from '../lib/@astuanax/funmatrix'

describe('create a Matrix', function () {
  it('it returns type Matrix', function () {
    const a = [[0, 1, 1], [2, 3, 4]]
    const A = Matrix.of(a)
    chai.expect(A.type).to.equal('Matrix')
  })

  it('it returns an array of arrays', function () {
    const a = [[0, 1, 1], [2, 3, 4]]
    const A = Matrix.of(a)
    chai.expect(A.__value).to.deep.equal([[0, 1, 1], [2, 3, 4]])
  })

  it('create matrix', () => {
    const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    const M = Matrix.of(m)
    chai.expect(M.__value).to.deep.equal([[1, 2, 3], [2, 3, 4], [3, 4, 5]])
  })

  it('create init matrix', () => {
    const m = [[], [], []]
    const M = Matrix.empty(3, 3)
    chai.expect(M).to.deep.equal(Matrix.of(m))
  })
})

describe('maps over a Matrix', function () {
  it('it returns the same matrixs', function () {
    const a = [[0, 1, 1], [2, 3, 4]]
    const identity = x => x.map(y => y)
    const A = Matrix.of(a).map(identity)
    chai.expect(A.__value).to.deep.equal([[0, 1, 1], [2, 3, 4]])
  })

  it('it returns add 1', function () {
    const a = [[0, 1, 1], [2, 3, 4]]
    const addScalar1 = x => x.map(y => y + 1)
    const A = Matrix.of(a).map(addScalar1)
    chai.expect(A.__value).to.deep.equal([[1, 2, 2], [3, 4, 5]])
  })
})

describe('Matrix is immutable', function () {
  it('map is immutable', function () {
    const a = [[0, 1, 1], [2, 3, 4]]
    const identity = x => x.map(y => y)
    const A = Matrix.of(a)
    const B = A.map(identity)
    chai.expect(A).to.not.equal(B)
  })

  it('ap is immutable', function () {
    const a = [[0, 1, 1], [2, 3, 4]]
    const identity = x => x.map(y => y)
    const A = Matrix.of(identity)
    const B = A.ap(a)
    chai.expect(A.ap(a)).to.not.equal(B)
  })
})

describe('applies a Matrix to a function', function () {
  it('it returns identity', function () {
    const a = [[0, 1, 1], [2, 3, 4]]
    const identity = x => x.map(y => y)
    const A = Matrix.of(identity).ap(a)
    chai.expect(A.__value).to.deep.equal([[0, 1, 1], [2, 3, 4]])
  })

  it('it returns add 1', function () {
    const a = [[0, 1, 1], [2, 3, 4]]
    const addScalar1 = x => x.map(y => y + 1)
    const A = Matrix.of(addScalar1).ap(a)
    chai.expect(A.__value).to.deep.equal([[1, 2, 2], [3, 4, 5]])
  })

  it('should return N', function () {
    const a = [[0, 1, 1], [2, 3, 4]]
    const b = [[2, 2, 2], [3, 3, 3]]

    const A = Matrix.of(a)
    const B = Matrix.of(b)

    const M = Matrix.concat(A, B)

    chai.expect(M.__value).to.deep.equal([[0, 1, 1, 2, 2, 2], [2, 3, 4, 3, 3, 3]])
  })
})

describe('Empty matrices', function () {
  it('should return empty array(s)', function () {
    const a = [[0, 1, 1], [2, 3, 4]]
    const A = Matrix.of(a).empty()
    const O = Matrix.empty()
    const B = Matrix.empty(0, 3)

    chai.expect(A.__value).to.deep.equal([[], []])
    chai.expect(O.__value).to.deep.equal([])
    // chai.expect(B.__value).to.deep.equal([])
  })
})

describe('Semigroup concat', function () {
  it('should return N', function () {
    const a = [[0, 1, 1], [2, 3, 4]]
    const b = [[2, 2, 2], [3, 3, 3]]
    const c = [[5, 5, 5], [4, 4, 4]]
    const A = Matrix.of(a)
    const B = Matrix.of(b)
    const C = Matrix.of(c)

    const M = Matrix.concat(Matrix.concat(A, B), C)
    const N = Matrix.concat(A, Matrix.concat(B, C))

    chai.expect(M).to.deep.equal(N)
  })

  it('Monoid empty and concat', () => {
    const A = Matrix.of([[0, 1, 1], [2, 3, 4]])
    const B = Matrix.empty(2, 3)

    const M = A.concat(B)
    const N = B.concat(A)

    chai.expect(M).to.deep.equal(N)
  })
})

describe('DOT product', function () {
  it('should multiply by identity', function () {
    const a = [[0, 1, 0], [2, 4, 0], [3, 4, 0]]
    const b = [[2, 0, 0], [0, 2, 0], [0, 0, 2]]

    const A = Matrix.of(a)
    const B = Matrix.of(b)

    const dot = A.dot(B)
    chai.expect(dot.__value).to.deep.equal([[0, 2, 0], [4, 8, 0], [6, 8, 0]])
  })

  it('multiply vectors', function () {
    const a = [[2, 2]]
    const b = [[1], [1]]

    const A = Matrix.of(a)
    const B = Matrix.of(b)

    const dot = Matrix.dot(A, B)
    const dot2 = Matrix.dot(B, A)
    chai.expect(dot.__value).to.deep.equal([[4]])
    chai.expect(dot2.__value).to.deep.equal([[2, 2], [2, 2]])
  })

  it('multiply vectors', function () {
    const a = [[1, 2, 3], [4, 5, 6]]
    const b = [[7, 8], [9, 10], [11, 12]]

    const A = Matrix.of(a)
    const B = Matrix.of(b)

    const dot = Matrix.dot(A, B)
    chai.expect(dot.__value).to.deep.equal([[58, 64], [139, 154]])
  })
})

describe('Identity Matrix', function () {
  it('should return identity matrix', function () {
    const a = [[1, 2, 3], [4, 5, 6]]
    const b = [[7, 8], [9, 10], [11, 12]]

    const A = Matrix.of(a)
    const B = Matrix.of(b)

    const Aidentity = A.identity()
    const AStaticIdentity = Matrix.identity(2, 3)

    const Bidentity = B.identity()
    const BStaticIdentity = Matrix.identity(3, 2)

    chai.expect(Aidentity.__value).to.deep.equal([[1, 0, 0], [0, 1, 0]])
    chai.expect(AStaticIdentity.__value).to.deep.equal([[1, 0, 0], [0, 1, 0]])

    chai.expect(Bidentity.__value).to.deep.equal([[1, 0], [0, 1], [0, 0]])
    chai.expect(BStaticIdentity.__value).to.deep.equal([[1, 0], [0, 1], [0, 0]])
  })
})

describe('Transpose Matrix', function () {
  it('should transpose a matrix', function () {
    const A = Matrix.transpose([[-1, 2], [3, 4], [-8, 2]])
    const result = [[-1, 3, -8], [2, 4, 2]]

    chai.expect(A.__value).to.deep.equal(result)
  })

  it('should transpose an identity matrix', function () {
    const A = Matrix.identity(10, 10)
    const B = Matrix.identity(10, 10)

    chai.expect(A.transpose().__value).to.deep.equal(B.__value)
  })

  it('should transpose a matrix', function () {
    const A = Matrix.identity(10, 5).zeros()
    const B = Matrix.identity(5, 10).zeros().transpose()

    chai.expect(A.__value).to.deep.equal(B.__value)
  })

  it('should transpose a matrix', function () {
    const a = Matrix.identity(10, 5).zeros().toArray()
    const b = Matrix.identity(5, 10).zeros().toArray()

    chai.expect(Matrix.of(a)).to.deep.equal(Matrix.transpose(b))
  })
})

describe('from and toArray Matrix', function () {
  it('should make a Matrix from an array', function () {
    const arr = [[-1, 2], [3, 4], [-8, 2]]
    const A = Matrix.fromArray(arr)
    chai.expect(Matrix.of(arr)).to.deep.equal(A)
    chai.expect(arr).to.not.equal(A._value)
  })

  it('should return an array from a Matrix', function () {
    const arr = [[-1, 2], [3, 4], [-8, 2]]
    const a = Matrix.of(arr).toArray()
    chai.expect(arr).to.deep.equal(a)
    chai.expect(arr).to.not.equal(a)
  })
})

describe('Matrix properties', function () {
  it('getCols, getRows, getShape', function () {
    const arr = [[-1, 2], [3, 4], [-8, 2]]
    const A = Matrix.of(arr)
    chai.expect(A.getCols()).to.equal(2)
    chai.expect(A.getRows()).to.equal(3)
    chai.expect(A.getShape()).to.deep.equal([3, 2])
  })
})

describe('Matrix equality', function () {
  it('equals', function () {
    const arr = [[-1, 2], [3, 4], [-8, 2]]
    const brr = [[-1, 2], [3, 4], [-8, 2]]
    const A = Matrix.of(arr)
    const B = Matrix.of(brr)
    const C = B.transpose()
    chai.expect(A.equals(B)).to.be.true
    chai.expect(A.equals(C)).to.be.false
  })
})

describe('Matrix operations addition', function () {
  it('add a scalar', function () {
    const A = Matrix.fromArray([[0, 0], [0, 0]])
    chai.expect(A.add(1).__value).to.deep.equal([[1, 1], [1, 1]])
  })

  it('add a scalar', function () {
    const A = Matrix.fromArray([[1, 1], [1, 1]])
    chai.expect(A.add(-1).__value).to.deep.equal([[0, 0], [0, 0]])
  })

  it('add a matrix', function () {
    const A = Matrix.fromArray([[0, 0], [0, 0]])
    const B = Matrix.fromArray([[1, 1], [1, 1]])
    chai.expect(A.add(B).__value).to.deep.equal([[1, 1], [1, 1]])
  })

  it('subtract a scalar', function () {
    const A = Matrix.fromArray([[1, 1], [1, 1]])
    chai.expect(A.subtract(1).__value).to.deep.equal([[0, 0], [0, 0]])
  })

  it('subtract a matrix', function () {
    const B = Matrix.fromArray([[1, 1], [1, 1]])
    chai.expect(B.subtract(B).__value).to.deep.equal([[0, 0], [0, 0]])
  })
})

describe('Matrix operations multiplication', function () {
  it('multiplies with a scalar', function () {
    const result = [[2, 3], [3, 2]]
    const A = Matrix.fromArray(result)
    chai.expect(A.multiply(1).__value).to.deep.equal(result)
  })

  it('multiplies with a scalar', function () {
    const result = [[2, 3], [3, 2]]
    const A = Matrix.fromArray(result)
    chai.expect(A.multiply(10).__value).to.deep.equal([[20, 30], [30, 20]])
  })

  it('multiplies with a matrix', function () {
    const result = [[2, 3], [3, 2]]
    const A = Matrix.fromArray(result)
    const B = Matrix.fromArray(result).ones()
    chai.expect(A.multiply(B).__value).to.deep.equal(result)
  })
})

describe('Matrix operations additive inverse', function () {
  it('matrix addition with additiveinverse returns zero matrix', function () {
    const result = [[2, 3], [3, 2]]
    const A = Matrix.fromArray(result)
    const B = A.additiveinverse()
    const C = Matrix.of(result).zeros()
    chai.expect(A.add(B)).to.deep.equal(C)
  })
})

describe('Matrix properties: isSymmetric, isOrthogonal, isSquare', function () {
  it('isSymmetric', function () {
    const result = [[1, 7, 3], [7, 4, -5], [3, -5, 6]]
    const A = Matrix.fromArray(result)
    chai.expect(A.isSymmetric()).to.be.true
  })

  it('isOrthogonal', function () {
    const result = [[-0.3092, -0.9510], [-0.9510, 0.3092]]
    const A = Matrix.fromArray(result)
    chai.expect(A.isOrthogonal()).to.be.true
  })

  it('isOrthogonal', function () {
    const a = [[-0.3092, -0.9510], [-0.9510, 0.3092]]
    const A = Matrix.fromArray(a)
    chai.expect(A.isSquare()).to.be.true

    const b = [[-0.3092, -0.9510, 0], [-0.9510, 0.3092, 1]]
    const B = Matrix.of(b)
    chai.expect(B.isSquare()).to.be.false
  })
})

describe('Matrix decomposition', function () {
  it('LU', function () {
    const result = [[3, -7, -2, 2], [-3, 5, 1, 0], [6, -4, 0, -5], [-9, 5, -5, 12]]
    const A = Matrix.fromArray(result)
    const lu = A.lu()
    chai.expect(Matrix.dot(lu[0], lu[1])).to.deep.equal(A)
  })

  it('rref', function () {
    const A = Matrix.of([[-1, 1], [-1, 0], [0, -1], [-1, -2]])
    const rrefA = A.rref()
    chai.expect(rrefA.__value).to.deep.equal([ [ 1, 0 ], [ -0, 1 ], [ 0, 0 ], [ 0, 0 ] ])

    const B = Matrix.of([[-1, 1], [-1, 2], [-3, 2]])
    const rrefB = B.rref()
    chai.expect(rrefB.__value).to.deep.equal([ [ 1, 0 ], [ 0, 1 ], [ 0, 0 ] ])

    const C = Matrix.of([[-3, 3, -2], [2, 2, 3], [1, 1, 0]])
    const rrefC = C.rref()
    chai.expect(rrefC.__value).to.deep.equal([ [ 1, 0, 0 ], [ 0, 1, 0 ], [ -0, -0, 1 ] ])
  })

  it('solves xA = b', function () {
    const A = Matrix.of([[1, -1], [1, 1]])
    const solveA = A.solve([5, 1])
    chai.expect(solveA).to.deep.equal([3, -2])

    const B = Matrix.of([[5, 1], [3, -4]])
    const solveB = B.solve([7, 18])
    chai.expect(solveB).to.deep.equal([ 2, -3.0000000000000004 ])
  })

  it('calculates the inverse', function () {
    const A = Matrix.of([[1, 1], [2, 4]]).inverse()
    chai.expect(A.__value).to.deep.equal([ [ 2, -0.5 ], [ -1, 0.5 ] ])
  })
})

describe('Matrix values', function () {
  it('ones and zeros', function () {
    const one = Matrix.ones(2, 2)
    const zero = Matrix.zeros(2, 2)

    chai.expect(one.__value).to.deep.equal([[1, 1], [1, 1]])
    chai.expect(zero.__value).to.deep.equal([[0, 0], [0, 0]])

    chai.expect(one.zeros().__value).to.deep.equal([[0, 0], [0, 0]])
    chai.expect(zero.ones().__value).to.deep.equal([[1, 1], [1, 1]])
  })
})

describe('Matrix diagonal', function () {
  it('returns an array with diagonal values', function () {
    const diag = Matrix.ones(2, 2).diag()
    chai.expect(diag).to.deep.equal([1, 1])
  })
})

describe('Matrix diagonal product', function () {
  it('returns an array with diagonal values', function () {
    const diag = Matrix.diagproduct([[2, 1], [1, 5]])
    chai.expect(diag).to.equal(10)
  })
})

describe('Matrix sum of all elements', function () {
  it('returns the sum', function () {
    const diag = Matrix.sum([[2, 1], [1, 5]])
    chai.expect(diag).to.equal(9)

    const diag1 = Matrix.ones(3, 3).sum()
    chai.expect(diag1).to.equal(9)
  })
})

describe('Matrix kronecker product', function () {
  it('returns the kronecker product', function () {
    const A = Matrix.of([[1, 2], [3, 4]])
    const B = Matrix.of([[0, 5], [6, 7]])
    const kronecker = A.kronecker(B)
    chai.expect(kronecker.__value).to.deep.equal([[0, 5, 0, 10], [6, 7, 12, 14], [0, 15, 0, 20], [18, 21, 24, 28]])
  })
})

describe('Matrix determinant calculation', function () {
  it('returns the determinant of a 2x2 matrix', function () {
    const m = [[5, 3], [2, 4]]
    const A = Matrix.of(m)
    chai.expect(A.determinant()).to.equal(14)
    chai.expect(Matrix.determinant(m)).to.equal(14)
  })

  it('returns the determinant of a 3x3 matrix', function () {
    const m = [[1, 2, 3], [4, 2, 5], [9, 8, 7]]
    const A = Matrix.of(m)
    chai.expect(Math.round(A.determinant())).to.equal(50)
    chai.expect(Math.round(Matrix.determinant(m))).to.equal(50)
  })

  it('returns the determinant of a 10x10 matrix', function () {
    const m = [[4, 3, 9, 7], [5, 2, 0, 9], [1, 3, 5, 9], [1, 3, 1, 7]]
    const A = Matrix.of(m)
    chai.expect(Math.round(A.determinant())).to.equal(-376)
    chai.expect(Math.round(Matrix.determinant(m))).to.equal(-376)
  })
})

describe('Matrix gets values from Matrix', function () {
  it('returns largest number', function () {
    const m = [[5, 3], [2, 4]]
    const max = Matrix.of(m).max()
    chai.expect(max).to.equal(5)
  })

  it('returns smallest number', function () {
    const m = [[5, 3], [2, 4]]
    const min = Matrix.of(m).min()
    chai.expect(min).to.equal(2)
  })

})
