export default function dot (a, b) {
  let sum = 0
  for (var i = 0; i < this.constants.n; i++) {
    sum += a[this.thread.y][i] * b[i][this.thread.x]
  }
  return sum
}
