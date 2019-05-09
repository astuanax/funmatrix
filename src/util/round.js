/**
 * @function round
 * @param value {number}
 * @param decimals {number}
 * @returns {number}
 */
export default function round (value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}
