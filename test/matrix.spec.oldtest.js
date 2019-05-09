import chai from 'chai'
import Matrix from '../lib/funMatrix'

// describe('create Matrix monad', function () {
//   it('should return a Matrix', function () {
//     // const a = [[0, 1, 1], [2, 3, 4]]
//     // const b = [[2, 2, 2], [3, 3, 3]]
//     // const c = [[5, 5, 5], [4, 4, 4]]
//     // const A = Matrix.of(a)
//     // const B = Matrix.of(b)
//     // const C = Matrix.of(c)
//     chai.expect('Matrix').to.be('Matrix')
//   })
// })

//
// test('create matrix', () => {
//   const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   const M = Matrix.of(m)
//
//   expect(M).toEqual({
//     __value: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   });
// });
//
//
// test('create new matrix', () => {
//   const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   const M = new Matrix(m)
//
//   expect(M).toEqual({
//     __value: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   });
// });
//
//
// test('create init matrix', () => {
//   const m = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]]
//   const M = Matrix.of(3, 3)
//
//   expect(M).toEqual({
//     __value: [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]]
//   });
// });
//
//
// test('create new matrix from Matrix object', () => {
//   const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   const _M = Matrix.of(m)
//   const M = Matrix.of(_M)
//
//   expect(M).toEqual({
//     __value: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   });
// });
//
// test('fMap over a Matrix, class method', () => {
//   const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   const f = x => x
//   const M = Matrix.of(m).fmap(f)
//   expect(M).toEqual({
//     __value: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   });
// });
//
// test('fMap over a Matrix, static', () => {
//   const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   const f = x => x
//   const M = Matrix.fmap(f, m)
//   expect(M).toEqual({
//     __value: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   });
// });
//
// test('Apply a Matrix, class method', () => {
//   const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   const f = x => x
//   const M = Matrix.of(f).ap(Matrix.of(m))
//   expect(M).toEqual({
//     __value: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   });
// });
//
// test('Apply a Matrix, static', () => {
//   const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   const f = x => x
//   const M = Matrix.ap(f, Matrix.of(m))
//   expect(M).toEqual({
//     __value: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   });
// });
//
// test('derive functor map from ap a Matrix', () => {
//   const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//   const f = x => x
//
//   // F.of(x).map(f) === F.of(f).ap(F.of(x));
//   const M = Matrix.of(f).ap(Matrix.of(m))
//   const N = Matrix.of(m).fmap(f)
//
//   expect(M).toEqual(N);
// });
//
// test('Transpose a matrix, class method', () => {
//   const A = Matrix.of([[1,1], [2,2]])
//   const At = Matrix.of([[1,2], [1,2]])
//   const M = Matrix.transpose(A)
//
//   expect(M).toEqual(At)
// })
//
// test('Transpose a matrix, static', () => {
//   const A = Matrix.of([[1,1], [2,2]])
//   const At = Matrix.of([[1,2], [1,2]])
//   const M = Matrix.of(A).transpose()
//
//   expect(M).toEqual(At)
// })
//
// test('Transpose of Transpose of matrix a === matrix a ', () => {
//   const A = Matrix.of(2,2).random()
//   const M = Matrix.transpose(A.transpose())
//
//   expect(M).toEqual(A)
// })
//
//
// test('Add 2 matrices', () => {
//   const A = Matrix.of(2,2).ones()
//   const B = Matrix.of(2,2).zeros()
//   const C = Matrix.of(A).add(B)
//   expect(A).toEqual(C)
// })
//
// test('Add  scalar to a matrix', () => {
//   const A = Matrix.of(2,2).ones()
//   const B = 0
//   const C = Matrix.of(A).addScalar(B)
//   expect(A).toEqual(C)
// })
