import curry from 'fun.js/src/curry'
import concat from 'fun.js/src/concat'

export default curry(function (M, m, idx) {
  return concat(m, M.__value[idx])
})
