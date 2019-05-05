import map from 'fun.js/src/map'
import curry from 'fun.js/src/curry'

export default curry((M, m) => map((row, idx) => row.map((col, jdx) => col + M.__value[idx][jdx]))(m))
