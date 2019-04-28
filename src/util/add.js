import {curry} from 'fun.js';

const addMatrix = curry((M, m) => m.map((row, idx) => row.map((col, jdx) => col + M.__value[idx][jdx])))
