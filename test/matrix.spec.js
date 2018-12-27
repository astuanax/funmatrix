const Matrix = require('../src/matrix');

test('create matrix', () => {
    const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    const M = Matrix.of(m)

    expect(M).toEqual({
        __value: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    });
});


test('create new matrix', () => {
    const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    const M = new Matrix(m)

    expect(M).toEqual({
        __value: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    });
});


test('create new matrix from Matrix object', () => {
    const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    const _M = Matrix.of(m)
    const M = Matrix.of(_M)

    expect(M).toEqual({
        __value: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    });
});

test('fMap over a Matrix', () => {
    const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    const f = x => x
    const M = Matrix.of(m).fmap(f)
    expect(M).toEqual({
        __value: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    });
});

test('static fMap over a Matrix', () => {
    const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    const f = x => x
    const M = Matrix.fmap(f, m)
    expect(M).toEqual({
        __value: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    });
});

test('ap a Matrix', () => {
    const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    const f = x => x
    const M = Matrix.of(f).ap(Matrix.of(m))
    expect(M).toEqual({
        __value: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    });
});

test('derive functor map from ap a Matrix', () => {
    const m = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    const f = x => x

    // F.of(x).map(f) === F.of(f).ap(F.of(x));
    const M = Matrix.of(f).ap(Matrix.of(m))
    const N = Matrix.of(m).fmap(f)

    expect(M).toEqual(N);
});

test('Semigroup concat', ()  => {
    // S.concat(S.concat(a, b), c) ≡ S.concat(a, S.concat(b, c))

    const a = [[0, 1, 1], [2, 3, 4]]
    const b = [[2, 2, 2], [3, 3, 3]]
    const c = [[5, 5, 5], [4, 4, 4]]
    const A = Matrix.of(a)
    const B = Matrix.of(b)
    const C = Matrix.of(c)


    const M = Matrix.concat(Matrix.concat(A, B), C)
    const N = Matrix.concat(A, Matrix.concat(B, C))

    expect(M).toEqual(N);
})
