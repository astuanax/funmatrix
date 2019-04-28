import curry from 'fun.js/src/curry'
import fold from 'fun.js/src/fold'
import map from 'fun.js/src/map'

export default curry((B, a) => map((item, j) => {
  return fold((acc, x, k) => {
    return (acc += x * B.__value[k][j])
  }, 0)(a)
})(B.__value[0]))
