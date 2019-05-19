export default function gpufold (gpu, f, output, matrix, constants = {}) {
  return gpu
    .createKernel(f, { constants: Object.assign({}, { m: matrix.length, n: matrix[0].length }, constants) })
    .setOutput(output)(matrix)
}
