export default function gpuproduct (gpu, f, output, a, b, constants = {}) {
  return gpu
    .createKernel(f, { constants: Object.assign({}, { m: b.length, n: a[0].length }, constants) })
    .setOutput(output)(a, b)
}
