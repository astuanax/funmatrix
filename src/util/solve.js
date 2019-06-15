/**
 * @function solveL
 * @desc solve the xA = b equation for lower triangular
 * @param n
 * @param L
 * @param b
 * @returns {Array}
 */
function solveL (n, L, b) {
  let s = 0
  const c = []

  for (let k = 0; k < n; ++k) {
    for (let j = 0; j < k; ++j) {
      s = s + L.__value[k][j] * c[j]
    }
    c[k] = b[k] - s
    s = 0
  }
  return c
}

/**
 * @function solveU
 * @desc solve the xA = b equation for upper triangular
 * @param n
 * @param U
 * @param c
 * @param b
 */
function solveU (n, U, c, b) {
  const x = []
  for (let a = n - 1; a > -1; --a) {
    let t = 0
    for (let b = a + 1; b < n; ++b) {
      t = t + U.__value[a][b] * x[b]
    }
    x[a] = (c[a] - t) / U.__value[a][a]
  }
  return x
}

/**
 * @function solve
 * @desc Helper function for xA = b solver
 * @param n
 * @param L
 * @param U
 * @param b
 */
export default function solve (n, L, U, b) {
  const c = solveL(n, L, b)
  return solveU(n, U, c, b)
}
