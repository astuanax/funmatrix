import {curry} from 'fun.js';

const addScalar = curry((M, m) => {
  return m.map(row => row.map(col => col + M.__value))
})
