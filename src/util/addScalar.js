import { curry, map } from 'fun.js'

export default curry((M, m) => map(col => col + M.__value)(m))
