import { map, curry } from 'fun.js'

export default curry((M, m) => map((row, idx) => row.map((col, jdx) => col + M.__value[idx][jdx]))(m))
