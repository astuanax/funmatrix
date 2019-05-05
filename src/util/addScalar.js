import curry from 'fun.js/src/curry'
import map from 'fun.js/src/map'

export default curry((M, m) => map(col => col + M.__value)(m))
