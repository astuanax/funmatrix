import chai from 'chai'
import Matrix from '../lib/@astuanax/funmatrix'

describe('divide a Matrix', function () {
  it('divide is a method', function () {
    const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const A = Matrix.of(a)

    chai.expect(typeof A.divide).to.deep.equal('function')

  })

  it('divides by a scalar', function () {
    const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const A = Matrix.of(a).divide(1)
    chai.expect(A).to.deep.equal(Matrix.of(a))

  })

  it('divides by a Matrix', function () {
    const a = [[1, 1], [2, 4]]
    const A = Matrix.of(a)
    const B = A.identity()
    chai.expect(A.divide(A).__value).to.deep.equal(B.__value)
  })
})
