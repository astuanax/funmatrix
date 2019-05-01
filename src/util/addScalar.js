import curry from 'fun.js/src/curry'

export default curry((M, m) => {
  return m.map(col => col + M.__value)
})
