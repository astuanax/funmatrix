import {curry} from 'fun.js';

const identityMatrix = curry(m => m.map((rows, idx) => rows.map((cols, jdx) => (idx === jdx) * 1)))
