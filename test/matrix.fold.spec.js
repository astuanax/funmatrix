import chai from 'chai'
import Matrix from '../lib/@astuanax/funmatrix'

describe('fold a Matrix', function () {
  it('fold is a function', function () {
    const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const A = Matrix.of(a)

    chai.expect(typeof A.fold).to.deep.equal('function')
    chai.expect(typeof Matrix.fold).to.deep.equal('function')

  })

  it('folds a Matrix', function () {
    const a = [[1, 1], [1, 1]]
    const A = Matrix.of(a)
    chai.expect(A.fold((prev, next) => prev.concat(next)).__value).to.deep.equal([1, 1, 1, 1])
    chai.expect(Matrix.fold((prev, next) => prev.concat(next), a).__value).to.deep.equal([1, 1, 1, 1])
    chai.expect(Matrix.fold((prev, next) => prev.concat(next), A).__value).to.deep.equal([1, 1, 1, 1])
  })

})
