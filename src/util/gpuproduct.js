export default function gpudot (gpu, f, output, a, b, constants = {}) {
  return gpu
    .createKernel(f, { constants: Object.assign({}, { n: a[0].length }, constants) })
    .setOutput(output)(a, b)
}
