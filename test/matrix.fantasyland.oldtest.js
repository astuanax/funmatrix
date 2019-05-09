// import Matrix from '../src/matrix'
// import chai from 'chai'
// import Matrix from '../lib/funmatrix'
//
// describe('Fantasyland specifications', function () {
//   describe('Semigroup concat', function () {
//     it('should return N', function () {
//       const a = [[0, 1, 1], [2, 3, 4]]
//       const b = [[2, 2, 2], [3, 3, 3]]
//       const c = [[5, 5, 5], [4, 4, 4]]
//       const A = Matrix.of(a)
//       const B = Matrix.of(b)
//       const C = Matrix.of(c)
//
//       const M = Matrix.concat(Matrix.concat(A, B), C)
//       const N = Matrix.concat(A, Matrix.concat(B, C))
//
//       chai.expect(M).to.deep.equal(N)
//     })
//   })

// it('Semigroup concat', () => {
//   // S.concat(S.concat(a, b), c) ≡ S.concat(a, S.concat(b, c))
//
//   const a = [[0, 1, 1], [2, 3, 4]];
//   const b = [[2, 2, 2], [3, 3, 3]];
//   const c = [[5, 5, 5], [4, 4, 4]];
//   const A = Matrix.of(a);
//   const B = Matrix.of(b);
//   const C = Matrix.of(c);
//
//   const M = Matrix.concat(Matrix.concat(A, B), C);
//   const N = Matrix.concat(A, Matrix.concat(B, C));
//
//   chai.expect(M).to.deep.equal(N);
// });
// })

//
// test('Monoid empty and concat', () => {
//   // Right identity: M.concat(a, M.empty()) ≡ a
//   // Left identity: M.concat(M.empty(), a) ≡ a
//   const a = [[0, 1, 1], [2, 3, 4]];
//   const b = Matrix.empty(2, 3);
//
//   const M = Matrix.of(a).concat(b);
//   const N = b.concat(Matrix.of(a));
//
//   expect(M).toEqual(N);
// });
//
// test('Monoid dot and identity for square matrices', () => {
//   const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//   const id = Matrix.identity(3, 3);
//
//   const M = Matrix.of(a).dot(Matrix.of(id));
//   const N = Matrix.of(id).dot(Matrix.of(a));
//
//   expect(M).toEqual(N);
// });
//
// test('Monoid add and identity for matrices', () => {
//   const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//   const id = Matrix.of(3, 3).zeros();
//
//   const M = Matrix.of(a).add(id);
//   const N = id.add(Matrix.of(a));
//
//   expect(M).toEqual(N);
// });

// test('Monoid addScalar and identity for matrices', () => {
//     const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//     const id = 0
//
//     const M = Matrix.of(a).addScalar(Matrix.of(id))
//     const N = Matrix.of(id).addScalar(Matrix.of(a))
//
//     expect(M).toEqual(N);
// })
