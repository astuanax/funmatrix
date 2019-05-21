import Matrix from './Matrix'
import curry from 'fun.js/src/curry'
import gpumap from 'util/gpumap'
import gpufold from 'util/gpufold'
import gpuproduct from 'util/gpuproduct'

/**
 * @class GpuMatrix
 * @classdesc GpuMatrix applicative providing standard matrix operations
 * @summary The GpuMatrix class should not be instantiated with the new keyword. Instead use the Matrix.of syntax to create a new Matrix. Unfortunatly jsdocs does not allow for the constructor to be hidden.
 * @hidecontructor
 * @see of
 * @example
 *
 * const gpu = new GPU()
 * const m =  GpuMatrix.of([[1,2],[2,3],[4,5]], gpu)
 *
 */
class GpuMatrix extends Matrix {
  constructor (val, GPUJS) {
    super()
    if (GPUJS) {
      this.gpujs = GPUJS || null
    }
  }
}

/**
 * @memberOf GpuMatrix
 * @static
 * @function GpuMatrix.of
 * @desc Creates a GpuMatrix object and flattens the GpuMatrix
 * @param val {array|function} An array of arrays
 * @param GPUJS {Object}
 * @returns {GpuMatrix}
 * @example
 *
 * const m =  GpuMatrix.of([[1,2],[2,3],[4,5]], gpu)
 *
 */
GpuMatrix.of = function (val, GPUJS = null) {
  if (val instanceof GpuMatrix) return val
  if (this instanceof GpuMatrix) {
    this.__value = val
    this.gpujs = GPUJS
    return this
  }
  return new GpuMatrix(val, GPUJS)
}

//* ***********************/
// GPU Functions
//* ***********************/

/**
 * @memberOf GpuMatrix
 * @instance
 * @member gpuMap
 * @description Maps over the rows of the GpuMatrix using a map function using the GPU
 * @param f {function} An GPU.js enabled iterator function
 * @returns {GpuMatrix}
 * @example
 *
 * function gpuMapper (a) { return a[this.thread.y][this.thread.x] }
 * const m = GpuMatrix.of([[2, 2], [2, 2]], GPUJS)
 * m.gpuMap(gpuMapper)
 * // [Float32Array(2,2), Float32Array(2,2)]
 *
 *
 */
GpuMatrix.prototype.gpuMap = function (f) {
  return GpuMatrix.of(gpumap(this.gpujs, f, this.__value))
}

/**
 * @memberOf GpuMatrix
 * @static
 * @function gpuMap
 * @description Static function that maps over the rows of the GpuMatrix using a map function using the GPU
 * @param f {function} An GPU.js enabled iterator function
 * @param M {GpuMatrix|array} GpuMatrix or array to map
 * @returns {GpuMatrix}
 * @example
 *
 * function gpuMapper (a) { return a[this.thread.y][this.thread.x] }
 * const m = GpuMatrix.gpuMap(GPUJS, gpuMapper, [[2, 2], [2, 2]])
 * // [Float32Array(2,2), Float32Array(2,2)]
 *
 */
GpuMatrix.gpuMap = curry(function (gpu, f, M) {
  return GpuMatrix.of(M, gpu).gpuMap(f)
})

/**
 * @memberOf GpuMatrix
 * @instance
 * @member gpuFold
 * @description Folds the rows of the GpuMatrix using a GPUS.js enqbled reduce function, using the GPU
 * @param f {function} An iterator function
 * @returns {GpuMatrix}
 * @example
 *
 * const m = GpuMatrix.of([[1, 1], [1, 1]])
 * m.map(x => x.map(y => y+ 1))
 * // [[2, 2], [2, 2]]
 *
 */
GpuMatrix.prototype.gpuFold = function (f, output) {
  return GpuMatrix.of(gpufold(this.gpujs, f, output, this.__value))
}

/**
 * @memberOf GpuMatrix
 * @function GpuMatrix#gpuProduct
 * @param f
 * @param output
 * @param M
 * @returns {GpuMatrix}
 */
GpuMatrix.prototype.gpuProduct = function (f, output, M) {
  // (gpu, f, output, a, b, constants = {}
  return GpuMatrix.of(gpuproduct(this.gpujs, f, output, this.__value, M.__value))
}

export default GpuMatrix
