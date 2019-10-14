/**
 * @function round
 * @param value {Number}
 * @param decimals {Number}
 * @returns {Number}
 */
export default function round (value, decimals = 4) {
  return Number(Number.parseFloat(value).toPrecision(decimals))
}
