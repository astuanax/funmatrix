/**
 * @function round
 * @param value {Number}
 * @param decimals {Number}
 * @returns {Number}
 */
export default function round (value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}
