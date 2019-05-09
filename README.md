# funmatrix
Matrix applicative providing standard matrix operations [Fork on Github](https://github.com/astuanax/funmatrix)

[![Build Status](https://travis-ci.org/astuanax/funmatrix.svg?branch=master)](https://travis-ci.org/astuanax/funmatrix)  [![Code Climate](https://codeclimate.com/github/astuanax/funmatrix/badges/gpa.svg)](https://codeclimate.com/github/astuanax/funmatrix) ![GitHub file size in bytes](https://img.badgesize.io/astuanax/funmatrix/master/lib/@astuanax/funmatrix.min.js.svg?compression=gzip) 

[Check bundle size on bundlephobia](https://bundlephobia.com/result?p=fun.js@1.0.3)

## Install funmatrix.js

```$ npm install @astuanax/funmatrix.js --save``` 

## Docs

The documentation is done using jsdocs and can be found in the /docs folder or at the url [https://astuanax.github.io/funmatrix/](https://astuanax.github.io/funmatrix/)

## Example

```
// Create matrix
const m = Matrix.of([[1, 2], [3, 4]])

// Generate identity matrix
const I  = m.identity() // [[1, 0], [0, 1]]

if(m.dot(I).equals(m)) {
    console.log('Dot product with identity matrix returns the same matrix')
}0
```

## Create a matrix

There are 2 ways to instantiate a Matrix, though you should not use the new keyword.

### Matrix.of()
`Maybe.of`accepts both an array of arrays or a Matrix

````
const a = Matrix.of([[1, 2], [2, 3]])  // returns a Matrix
const b = Matrix.of(a) // returns a flattened Matrix from Matrix a
```` 

### Matrix.fromArray()
`fromArray` returns an Matrix with a clone of the provided array 

```
Matrix.fromArray([[1, 2], [2, 3]])
```


## Higher order functions

* map
* fold
* ap
* concat

## Methods and properties

* add -  a scalar or a Matrix
* additiveinverse - multiply by  -1
* clone - clone a Matrix
* combine - combine 2 Matrices together
* dimension - get the rank
* dot - Calculate dotproduct of 2 Matrices
* empty - Return an empty Matrix
* equals - check if the Matrix deep equals another Matrix
* fromArray - Creates a Matrix from an Array
* getCols - Get the columns of the Matrix
* getRows - Get the rows of a Matrix
* getShape - Get the shape of a Matrix
* hadamard - Multiply a matrix witha  scalar or another matrix
* identity - Retuns an identity matrix
* inverse
* isOrthogonal
* isSymmetric
* lsq
* lu
* multiply
* ones
* precision
* random
* rank
* rref
* setPrecision
* solve (for b)
* toArray
* transpose
* zeros

