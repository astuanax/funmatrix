import chai from 'chai'
import Matrix from '../lib/@astuanax/funmatrix'

describe('getRow of Matrix', function () {
  it('flatMap is a function', function () {
    const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const A = Matrix.of(a)

    chai.expect(typeof A.getRow).to.deep.equal('function')
    chai.expect(typeof A.getColumn).to.deep.equal('function')

  })

  it('get a column from a Matrix', function () {
    const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const A = Matrix.of(a)
    chai.expect(A.__value).to.deep.equal(a)
    chai.expect(A.getColumn(0)).to.deep.equal([1,4,7])
    chai.expect(A.getColumn(1)).to.deep.equal([2,5,8])
    chai.expect(A.getRow(0)).to.deep.equal([1,2,3])
    chai.expect(A.getRow(1)).to.deep.equal([4,5,6])

    chai.expect(Matrix.getColumn(0, A)).to.deep.equal([1,4,7])
    chai.expect(Matrix.getColumn(1, A)).to.deep.equal([2,5,8])
    chai.expect(Matrix.getRow(0, A)).to.deep.equal([1,2,3])
    chai.expect(Matrix.getRow(1, A)).to.deep.equal([4,5,6])

    chai.expect(Matrix.getColumn(0, a)).to.deep.equal([1,4,7])
    chai.expect(Matrix.getColumn(1, a)).to.deep.equal([2,5,8])
    chai.expect(Matrix.getRow(0, a)).to.deep.equal([1,2,3])
    chai.expect(Matrix.getRow(1, a)).to.deep.equal([4,5,6])
  })

})
