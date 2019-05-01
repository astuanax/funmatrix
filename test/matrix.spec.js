import chai from 'chai'
import Matrix from '../lib/fun-matrix'

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
    const a = [[0, 1, 1], [2, 3, 4]]
    const b = Matrix.empty(2, 3)

    const M = Matrix.of(a).concat(b)
    const N = b.concat(Matrix.of(a))

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
    // chai.expect(AStaticIdentity.__value).to.deep.equal([[1, 0, 0], [0, 1, 0]])

    chai.expect(Bidentity.__value).to.deep.equal([[1, 0], [0, 1], [0, 0]])
    // chai.expect(BStaticIdentity.__value).to.deep.equal([[1, 0], [0, 1], [0, 0]])
  })
})
