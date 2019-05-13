// import curry from 'fun.js/src/curry'

export default function gpumap (gpu, f, matrix) {
  return gpu.createKernel(f).setOutput([matrix.length, matrix[0].length])(matrix)
}
