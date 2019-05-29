// import chai from 'chai'
// import Matrix from '../lib/@astuanax/funmatrix'
// import generate from '../src/util/generate'
// import gpudot from '../src/util/gpudot'
// import { GPU } from 'gpu.js'
// const gpu = new GPU()
//
// describe('Matrix map on gpu', function () {
//   it('generates square matrix array', function () {
//     const dim = 2
//     const m = generate(dim)
//     chai.expect(m).to.deep.equal([[0, 0], [0, 0]])
//   })
//
//   it('maps arrays on gpu', function () {
//     const A = Matrix.of([[0]], gpu)
//     function mapF (a) { return a[this.thread.y][this.thread.x] }
//     chai.expect(A.gpuMap(mapF).__value).to.deep.equal([new Float32Array([0])])
//   })
//
//   it('maps large arrays on gpu', function () {
//     const dim = 100
//     const m = generate(dim).map(row => row.map(x => 0))
//     const A = Matrix.of(m, gpu)
//     function mapF (a) { return a[this.thread.y][this.thread.x] }
//     const expected = m.map(row => new Float32Array(row.map(x => 0)))
//     chai.expect(A.gpuMap(mapF).__value).to.deep.equal(expected)
//   })
//
//   it('folds large arrays on gpu', function () {
//     const sum = function (a) {
//       let sum = 0
//       for (let i = 0; i < this.constants.m; i++) {
//         for (let j = 0; j < this.constants.n; j++) {
//           sum += a[i][j]
//         }
//       }
//       return sum
//     }
//     const A = Matrix.of([[2, 0], [0, 2], [1, 1]], gpu)
//     const test = A.gpuFold(sum, [1])
//     const expected = new Float32Array([6])
//     chai.expect(test.__value).to.deep.equal(expected)
//   })
//
//   it('dot product on gpu', function () {
//     const A = Matrix.of([[2, 0], [0, 2]], gpu)
//     const B = Matrix.of([[1, 0], [0, 1]], gpu)
//
//     const test = A.gpuProduct(gpudot, [2, 2], B)
//     const expected = [new Float32Array([2, 0]), new Float32Array([0, 2])]
//
//     chai.expect(test.__value).to.deep.equal(expected)
//   })
// })
