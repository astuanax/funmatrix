import chai from 'chai'
import Matrix from '../lib/@astuanax/funmatrix'

describe('flatMap a Matrix', function () {
  it('flatMap is a function', function () {
    const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const A = Matrix.of(a)

    chai.expect(typeof A.flatMap).to.deep.equal('function')

  })

  it('flattens a Matrix', function () {
    const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const A = Matrix.of(a)
    chai.expect(A.__value).to.deep.equal(a)
    chai.expect(A.flatMap(x => x)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])

  })

  it('flattens a Matrix', function () {
    const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const A = Matrix.of(a)
    chai.expect(A.__value).to.deep.equal(a)
    chai.expect(A.flatten()).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

})
