import { map, curry } from 'fun.js'

export default curry((M, m) => map(col => col + M.__value)(m))
