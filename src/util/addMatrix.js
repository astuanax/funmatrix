import curry from 'fun.js/src/curry'

export default curry((M, m) => m.map((row, idx) => row.map((col, jdx) => col + M.__value[idx][jdx])))
