(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@astuanax/funmatrix", [], factory);
	else if(typeof exports === 'object')
		exports["@astuanax/funmatrix"] = factory();
	else
		root["@astuanax/funmatrix"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/matrix.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fun.js/src/_private/curry1.js":
/*!****************************************************!*\
  !*** ./node_modules/fun.js/src/_private/curry1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curry1; });
/**
 * Returns a curried function with arity 1
 * @function curry1
 * @private
 * @since v1.0.2
 **/

function curry1 (fn) {
  return function curried (a) {
    return arguments.length === 0
      ? this
      : fn(a)
  }
}


/***/ }),

/***/ "./node_modules/fun.js/src/and.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/and.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Checks if both predicates are true
 *
 * @function and
 * @description Checks if both predicates are true
 * @since v1.0.2
 * @sig (x, y) -> boolean
 * @param {*} x - A predicate
 * @param {*} y - A predicate
 * @return {boolean}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function and (x, y) {
  return x && y
}));


/***/ }),

/***/ "./node_modules/fun.js/src/array/concat.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/array/concat.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @private
 * @function arrayConcat
 * @param a1
 * @param a2
 * @returns {T[]}
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function concat (a, b) {
  return Array.prototype.concat(a, b)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/array/equals.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/array/equals.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../not */ "./node_modules/fun.js/src/not.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../equals */ "./node_modules/fun.js/src/equals.js");
/**
 * @private
 * @function equalsArray
 * @description Autocurried function for deep comparison of arrays
 * @param {a} x - Object to compare of type a
 * @param {a} y - Object x to compare with object x
 * @return {boolean}
 */




/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function equalsArray (x, y) {
  if (x.length !== y.length) {
    return false
  }
  for (let i = 0; i < x.length; i++) {
    if (Object(_not__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_equals__WEBPACK_IMPORTED_MODULE_2__["default"])(x[i], y[i]))) return false
  }
  return true
}));


/***/ }),

/***/ "./node_modules/fun.js/src/array/fold.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/array/fold.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @private
 * @function fold
 * @description Returns a single item by mapping over the provided array and calling an iterator function
 * @param {cbFunction} cb - Callback function to modify the item
 * @param {*} init - Initial value
 * @param {Array} a - Array with items to modify by the cb function
 * @return {Array}
 * @alias reduce
 * @since 1.0.2
 * @example
 *
 * const result = fold(add, 0, [1,1,1])
 * // result = 3
 */

/**
 * @callback cbFunction
 * @param {*} r - Accumulator which accumulates the callback's return values
 * @param {*} item - the current element being processed
 * @param {number} index - the indey of the item being processed
 * @param {Array} a - The initial array
 * @return {*}
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function fold (cb, init, a) {
  let i = -1
  const l = a.length
  let r = init
  while (++i < l) {
    r = cb(r, a[i], i, a)
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/array/is.js":
/*!*********************************************!*\
  !*** ./node_modules/fun.js/src/array/is.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Checks if the provided object is an array, autocurried function
 *
 * @private
 * @function isArray
 * @description Checks if the provided object is an array, autocurried function
 * @param {*} Object to verifiy
 * @return {boolean}
 * @since 1.0.2
 * @example
 *
 * const result = isArray([1,1,1])
 * // result = true
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Array'));


/***/ }),

/***/ "./node_modules/fun.js/src/array/map.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/array/map.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function map
 * @description Maps over an array and applies a function
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Iterable}
 * @since v1.0.2
 * @example
 *
 *  const result = map(identity, [0,2,3])
 *  // result = [0,2,3]
 *  const add2 = add(2)
 *  const result = map(add2, [0,2,3])
 *  // result = [2,4,5]
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map (cb, a) {
  let i = -1
  const l = a.length
  const r = new Array(l)
  while (++i < l) {
    r[i] = cb(a[i], i, a)
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/boolean/is.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/boolean/is.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Curried function that verifies of the provided argument is a boolean
 *
 * @private
 * @function is
 * @description Curried function that verifies of the provided argument is a boolean
 * @since v1.0.2
 * @param {*} Item to verify
 * @return {boolean}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Boolean'));


/***/ }),

/***/ "./node_modules/fun.js/src/concat.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/concat.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/concat */ "./node_modules/fun.js/src/array/concat.js");
/* harmony import */ var _string_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string/concat */ "./node_modules/fun.js/src/string/concat.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/**
 * Concatenates 2 items together
 *
 * @function concat
 * @description Concatenates 2 items together
 * @since v1.0.4
 * @param {a} a - Left side of the concatenation
 * @param {a} b - right side of the concatenation
 * @return {a} Concatenated item
 **/






/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function concat (a, b) {
  const typeMap = {
    'String': _string_concat__WEBPACK_IMPORTED_MODULE_2__["default"],
    'Array': _array_concat__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
  return typeMap[Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(a)](a, b)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/curry.js":
/*!******************************************!*\
  !*** ./node_modules/fun.js/src/curry.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curry; });
/* eslint-disable no-use-before-define */
/**
 * @function curry
 * @description Autocurries the provided function
 */
function curry (fun) {
  const argslen = fun.length

  if (argslen === 0) {
    return fun
  }
  return createRecurser([])

  function recurse (acc, args) {
    const _acc = acc.concat(args)
    return _acc.length < argslen
      ? createRecurser(_acc)
      : fun.apply(this, _acc)
  }

  function createRecurser (acc) {
    return function () {
      return recurse(acc, Array.prototype.slice.call(arguments))
    }
  }
}


/***/ }),

/***/ "./node_modules/fun.js/src/date/is.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/date/is.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Created by dierickx.len on 01/04/2017.
 */
/**
 * Created by dierickx.len on 01/04/2017.
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Date'));


/***/ }),

/***/ "./node_modules/fun.js/src/empty.js":
/*!******************************************!*\
  !*** ./node_modules/fun.js/src/empty.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return empty; });
/**

 * @function empty
 * @description Returns the empty equivalent of the first argument
 */

function empty (x) {
  return new x.constructor()
};


/***/ }),

/***/ "./node_modules/fun.js/src/equals.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/equals.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exists */ "./node_modules/fun.js/src/exists.js");
/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identical */ "./node_modules/fun.js/src/identical.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not */ "./node_modules/fun.js/src/not.js");
/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./or */ "./node_modules/fun.js/src/or.js");
/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object/is */ "./node_modules/fun.js/src/object/is.js");
/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/is */ "./node_modules/fun.js/src/array/is.js");
/* harmony import */ var _boolean_is__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./boolean/is */ "./node_modules/fun.js/src/boolean/is.js");
/* harmony import */ var _number_is__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./number/is */ "./node_modules/fun.js/src/number/is.js");
/* harmony import */ var _string_is__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./string/is */ "./node_modules/fun.js/src/string/is.js");
/* harmony import */ var _date_is__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./date/is */ "./node_modules/fun.js/src/date/is.js");
/* harmony import */ var _array_equals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/equals */ "./node_modules/fun.js/src/array/equals.js");
/* harmony import */ var _object_equals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./object/equals */ "./node_modules/fun.js/src/object/equals.js");
/**

 * @function equals
 * @description Autocurried function that checks for equality of 2 items
 * @param {*} x - Left side of the equality check
 * @param {*} y - Right side of the equality check
 * @return {boolean}
 * @example
 *
 * const nan = Number.NaN
 * equal(nan, nan) // returns true
 *
 * const arr1 = [0, 1, 2, 3]
 * const arr2 = [null, 1, 2, 3]
 * equals(arr1, arr2) // returns false
 *
 * equals(new Object({'a': 0, 'b': 1}), {'a': 0, 'b': 1}) // true
 *
 */















/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function equals (x, y) {
  if (Object(_identical__WEBPACK_IMPORTED_MODULE_2__["default"])(x, y)) return true

  if (Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(x) !== Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(y)) return false

  if (Object(_or__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_not__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(x)), Object(_not__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(y)))) return false

  if (x.constructor !== y.constructor) return false

  if (Object(_string_is__WEBPACK_IMPORTED_MODULE_10__["default"])(x) || Object(_boolean_is__WEBPACK_IMPORTED_MODULE_8__["default"])(x) || Object(_number_is__WEBPACK_IMPORTED_MODULE_9__["default"])(x) || Object(_date_is__WEBPACK_IMPORTED_MODULE_11__["default"])(x)) {
    return Object(_identical__WEBPACK_IMPORTED_MODULE_2__["default"])(x.valueOf(), y.valueOf())
  }
  if (Object(_array_is__WEBPACK_IMPORTED_MODULE_7__["default"])(x)) {
    return Object(_array_equals__WEBPACK_IMPORTED_MODULE_12__["default"])(x, y)
  } else if (Object(_object_is__WEBPACK_IMPORTED_MODULE_6__["default"])(x)) {
    return Object(_object_equals__WEBPACK_IMPORTED_MODULE_13__["default"])(x, y)
  }
  return false
}));


/***/ }),

/***/ "./node_modules/fun.js/src/exists.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/exists.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return exists; });
/**
 * @function exists
 */
function exists (x) {
  return !(x == null)
};


/***/ }),

/***/ "./node_modules/fun.js/src/fold.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/fold.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/fold */ "./node_modules/fun.js/src/array/fold.js");
/* harmony import */ var _object_fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/fold */ "./node_modules/fun.js/src/object/fold.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/**
 * Returns a single item by iterating over an array like object and call a function on each item
 *
 * @function fold
 * @description Returns a single item by iterating over an array like object and call a function on each item
 * @since v1.0.2
 * @sig ((a, b, c, a) → a) → a → [b] → a
 * @param {Function} cb receives 4 values: the accumulator, the item, the index, and the initial value.
 * @param {*} a is the initial value
 * @param {*} [b] the array like item to iterate over
 * @return {*} a is the accumulated value
 **/






/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function fold (cb, init, a) {
  const typeMap = {
    'Object': _object_fold__WEBPACK_IMPORTED_MODULE_2__["default"],
    'Array': _array_fold__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
  // if (a.next) {
  //   return iterableFold(cb, init, a)
  // }
  // if (type(Symbol) !== 'undefined' && a[Symbol.iterator]) {
  //   return iterableFold(cb, init, a[Symbol.iterator]())
  // }
  return typeMap[Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(a)](cb, init, a)
}));

// function iterableFold (cb, acc, gen) {
//   let step = gen.next()
//   while (!step.done) {
//     acc = cb(acc, step.value)
//     step = gen.next()
//   }
//   return acc
// }


/***/ }),

/***/ "./node_modules/fun.js/src/identical.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/identical.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _number_isNan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number/isNan */ "./node_modules/fun.js/src/number/isNan.js");
/**

 * @function identical
 * @description checks for identintical items
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function identical (x, y) {
  if (x === 0 && y === 0) {
    return 1 / x === 1 / y
  }
  if (x === y) {
    return true
  }
  return !!(Object(_number_isNan__WEBPACK_IMPORTED_MODULE_1__["default"])(x) && Object(_number_isNan__WEBPACK_IMPORTED_MODULE_1__["default"])(y))
}));


/***/ }),

/***/ "./node_modules/fun.js/src/is.js":
/*!***************************************!*\
  !*** ./node_modules/fun.js/src/is.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/**
 * @function is
 * @description Verifies the type of the provided argument
 *
 */




/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function is (Ctor, val) {
  return Object(_type__WEBPACK_IMPORTED_MODULE_1__["default"])(val) === Ctor
}));


/***/ }),

/***/ "./node_modules/fun.js/src/iterator/is.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/iterator/is.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isIter; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Created by dierickx.len on 01/04/2017.
 */

const isFunction = Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Function')

function isIter (iter) {
  return isFunction(iter[Symbol.iterator])
}


/***/ }),

/***/ "./node_modules/fun.js/src/iterator/map.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/iterator/map.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Maps over an Iterator and applies a function
 *
 * @function
 * @since v1.0.3
 * @sig (currentValue, idx, [a]) -> {b} -> [b]
 * @param {Function} cb
 * @param {Iterator} a
 * @return {Iterator}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map (callback, iterator) {
  let r = []
  for (let nextValue = iterator.next(); nextValue.done !== true; nextValue = iterator.next()) {
    r.push(callback(iterator.value()))
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/map.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/map.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/map */ "./node_modules/fun.js/src/array/map.js");
/* harmony import */ var _object_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/map */ "./node_modules/fun.js/src/object/map.js");
/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map */ "./node_modules/fun.js/src/map/map.js");
/* harmony import */ var _string_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string/map */ "./node_modules/fun.js/src/string/map.js");
/* harmony import */ var _iterator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iterator/map */ "./node_modules/fun.js/src/iterator/map.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/* harmony import */ var _iterator_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iterator/is */ "./node_modules/fun.js/src/iterator/is.js");
/**
 * Maps over an iterable and applies a function
 *
 * @function map
 * @description Autocurried function which maps over an iterable.
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> b -> b
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Iterable}
 **/









/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map (cb, a) {
  switch (Object(_type__WEBPACK_IMPORTED_MODULE_6__["default"])(a)) {
    case 'Function':
      return Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        return cb.call(this, a.apply(this, arguments))
      })
    case 'Object':
      return Object(_object_map__WEBPACK_IMPORTED_MODULE_2__["default"])(cb, a)
    case 'String':
      return Object(_string_map__WEBPACK_IMPORTED_MODULE_4__["default"])(cb, a)
    case 'Map':
      return Object(_map_map__WEBPACK_IMPORTED_MODULE_3__["default"])(cb, a)
    case 'Array':
      return Object(_array_map__WEBPACK_IMPORTED_MODULE_1__["default"])(cb, a)
    default:
      return Object(_iterator_is__WEBPACK_IMPORTED_MODULE_7__["default"])(a)
        ? Object(_iterator_map__WEBPACK_IMPORTED_MODULE_5__["default"])(cb, a)
        : Object(_array_map__WEBPACK_IMPORTED_MODULE_1__["default"])(cb, a)
  }
}));


/***/ }),

/***/ "./node_modules/fun.js/src/map/map.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/map/map.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../empty */ "./node_modules/fun.js/src/empty.js");
/**
 * Maps over a Map and applies a function
 *
 * @function
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> {b} -> [b]
 * @param {Function} cb
 * @param {Map} a
 * @return {Map}
 **/



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map (cb, a) {
  const r = Object(_empty__WEBPACK_IMPORTED_MODULE_1__["default"])(a)
  a.forEach((v, k, map) => {
    r.set(k, cb(v, k, map))
  })
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/not.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/not.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function not
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function not (x) {
  return !x
}));


/***/ }),

/***/ "./node_modules/fun.js/src/number/is.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/number/is.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * @private
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Number'));


/***/ }),

/***/ "./node_modules/fun.js/src/number/isNan.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/number/isNan.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNan; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/fun.js/src/number/is.js");
/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../and */ "./node_modules/fun.js/src/and.js");
/**
 * @function isNaN
 * @description Checks if number is NAN

 */



function isNan (x) {
  return Object(_and__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])(x), isNaN(x))
};


/***/ }),

/***/ "./node_modules/fun.js/src/object/equals.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/object/equals.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exists */ "./node_modules/fun.js/src/exists.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../not */ "./node_modules/fun.js/src/not.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../equals */ "./node_modules/fun.js/src/equals.js");
/**

 * equals
 * checks for equality
 */





/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])((x, y) => {
  for (let keyX in x) {
    // noinspection JSUnfilteredForInLoop
    if (Object(_not__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_equals__WEBPACK_IMPORTED_MODULE_3__["default"])(x[keyX], y[keyX]))) return false
  }

  for (let keyY in y) {
    if (Object(_not__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(x[keyY])) && Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(y[keyY])) return false
  }

  return true
}));


/***/ }),

/***/ "./node_modules/fun.js/src/object/fold.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/object/fold.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./node_modules/fun.js/src/object/keys.js");
/**
 * @function fold
 * @private
 *
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function fold (cb, init, o) {
  const k = Object(_keys__WEBPACK_IMPORTED_MODULE_1__["default"])(o)
  let i = -1
  const l = k.length
  let r = Object(init)
  while (++i < l) {
    r = cb(r, o[k[i]], k[i], o)
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/object/is.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/object/is.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**

 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Object'));


/***/ }),

/***/ "./node_modules/fun.js/src/object/keys.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/object/keys.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns the own keys of an object as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys (a) {
  return Object.keys(Object(a))
}));


/***/ }),

/***/ "./node_modules/fun.js/src/object/map.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/object/map.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../empty */ "./node_modules/fun.js/src/empty.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys */ "./node_modules/fun.js/src/object/keys.js");
/**
 * Maps over an object and applies a function
 *
 * @function
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> {b} -> [b]
 * @param {Function} cb
 * @param {Object} a
 * @return {Object}
 **/




/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map (cb, a) {
  const k = Object(_keys__WEBPACK_IMPORTED_MODULE_2__["default"])(a)
  let i = -1
  const l = k.length
  const r = Object(_empty__WEBPACK_IMPORTED_MODULE_1__["default"])(a)
  while (++i < l) {
    r[k[i]] = cb(a[k[i]], k[i], a)
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/or.js":
/*!***************************************!*\
  !*** ./node_modules/fun.js/src/or.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function or
 * @description Returns true if one or the other is true
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function or (x, y) {
  return x || y
}));


/***/ }),

/***/ "./node_modules/fun.js/src/string/concat.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/string/concat.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return concat; });
/**
 * @private
 * @function stringConcat
 */

function concat (a, b) { // use function(), arrow function doesn't bind arguments
  return String(a) + String(b)
}


/***/ }),

/***/ "./node_modules/fun.js/src/string/is.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/string/is.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**

 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('String'));


/***/ }),

/***/ "./node_modules/fun.js/src/string/map.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/string/map.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Maps over a string and applies a function
 *
 * @function
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> [a] -> [a]
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Iterable}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map (cb, a) {
  let i = -1
  const l = a.length
  let r = ''
  while (++i < l) {
    r += cb(a.charAt(i), i, a)
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/type.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/type.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ "./node_modules/fun.js/src/_private/curry1.js");
/**
 * @function type
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function type (x) {
  return Object.prototype.toString.call(x).slice(8, -1)
}));


/***/ }),

/***/ "./src/matrix.js":
/*!***********************!*\
  !*** ./src/matrix.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! fun.js/src/curry */ "./node_modules/fun.js/src/curry.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! fun.js/src/map */ "./node_modules/fun.js/src/map.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! fun.js/src/fold */ "./node_modules/fun.js/src/fold.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! fun.js/src/equals */ "./node_modules/fun.js/src/equals.js"));

var _concat = _interopRequireDefault(__webpack_require__(/*! util/concat */ "./src/util/concat.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! util/empty */ "./src/util/empty.js"));

var _dot = _interopRequireDefault(__webpack_require__(/*! util/dot */ "./src/util/dot.js"));

var _identity = _interopRequireDefault(__webpack_require__(/*! util/identity */ "./src/util/identity.js"));

var _transpose = _interopRequireDefault(__webpack_require__(/*! util/transpose */ "./src/util/transpose.js"));

var _generate = _interopRequireDefault(__webpack_require__(/*! util/generate */ "./src/util/generate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class Matrix
 * @classdesc Matrix applicative providing standard matrix operations
 * @summary The Matrix class should not be instantiated with the new keyword. Instead use the Matrix.of syntax to create a new Matrix. Unfortunatly jsdocs does not allow for the constructor to be hidden.
 * @hidecontructor
 * @see of
 * @example
 *
 * const m =  Matrix.of([[1,2],[2,3],[4,5]])
 *
 */
var Matrix = function Matrix(val) {
  this.__value = val;
};
/**
 * @memberOf Matrix
 * @property {string} type
 * @type {string}
 * @example
 *
 * const m =  Matrix.of([[1,2],[2,3],[4,5]])
 * m.type === 'Matrix'
 */


Matrix.prototype.type = 'Matrix';
/**
 * @memberOf Matrix
 * @property {number} precision
 * @type {number}
 * @example
 *
 * const m =  Matrix.of([[1,2],[2,3],[4,5]])
 * m.precision === 4
 */

Matrix.prototype.precision = 4;
/**
 * @memberOf Matrix
 * @instance
 * @member setPrecision
 * @param precision {number} Set the number of decimals for rounding
 * @example
 *
 * const m =  Matrix.of([[1,2],[2,3],[4,5]])
 * m.setPrecision(10)
 * m.precision === 10
 */

Matrix.prototype.setPrecision = function (precision) {
  this.precision = precision;
};
/**
 * @memberOf Matrix
 * @instance
 * @member isSymmetric
 * @returns {boolean}
 * @example
 *
 * const A = Matrix.of([[1, 1], [1, 1]])
 * true === A.isSymmetric()
 *
 */


Matrix.prototype.isSymmetric = function () {
  var a = this.__value;

  var b = Matrix.transpose(this).__value;

  return (0, _equals.default)(a, b);
};
/**
 * @memberOf Matrix
 * @instance
 * @member isSquare
 * @desc Boolean indicating whether this contains a square Matrix
 * @returns {boolean}
 * @example
 *
 * const A = Matrix.of([[1, 1], [1, 1]])
 * true === A.isSquare()
 *
 */


Matrix.prototype.isSquare = function () {
  return (0, _equals.default)(this.getCols(), this.getRows());
};
/**
 * @memberOf Matrix
 * @instance
 * @member isOrthogonal
 * @param M {Matrix|array}
 * @returns {boolean}
 * @example
 *
 * const result = [[-0.3092, -0.9510], [-0.9510, 0.3092]]
 * const A = Matrix.fromArray(result)
 * true  === A.isOrthogonal()
 */


Matrix.prototype.isOrthogonal = function () {
  var AxAt = this.dot(this.transpose());
  var I = this.identity();
  return (0, _equals.default)(AxAt, I);
};
/**
 * @memberOf Matrix
 * @instance
 * @member getCols
 * @returns {Number}
 * @example
 *
 * const A = Matrix.of([[1, 1], [1, 1]])
 * A.getCols()  === 2
 *
 */


Matrix.prototype.getCols = function () {
  return this.__value[0].length;
};
/**
 * @memberOf Matrix
 * @instance
 * @member equals
 * @param M {Matrix|array}
 * @returns {Boolean}
 * @example
 *
 * var a = [[1, 1], [1, 1]]
 * var A = Matrix.of(a)
 * var B = Matrix.of(a)
 * true  === A.equals(B)
 */


Matrix.prototype.equals = function (M) {
  return (0, _equals.default)(this.__value, M.__value || M);
};
/**
 * @memberOf Matrix
 * @instance
 * @member getRows
 * @returns {Number}
 * @example
 *
 * const A = Matrix.of([[1, 1], [1, 1]])
 * A.getRows()  // 2
 */


Matrix.prototype.getRows = function () {
  return this.__value.length;
};
/**
 * @memberOf Matrix
 * @instance
 * @member getShape
 * @returns {Array}
 * @example
 *
 * const A = Matrix.of([[1, 1], [1, 1]])
 * A.getShape()  // [2, 2]
 */


Matrix.prototype.getShape = function () {
  return [this.getRows(), this.getCols()];
};
/**
 * @memberOf Matrix
 * @static
 * @function of
 * @desc Creates a Matrix object and flattens the Matrix
 * @param val {array|function} An array of arrays
 * @returns {Matrix}
 * @example
 *
 * const m =  Matrix.of([[1,2],[2,3],[4,5]])
 *
 */


Matrix.of = function (val) {
  if (val instanceof Matrix) return val;

  if (this instanceof Matrix) {
    this.__value = val;
    return this;
  }

  return new Matrix(val);
};
/**
 * @memberOf Matrix
 * @instance
 * @member map
 * @description Maps over the rows of the matrix using a map function
 * @param f {function} An iterator function
 * @returns {Matrix}
 * @example
 *
 * const m = Matrix.of([[1, 1], [1, 1]])
 * m.map(x => x.map(y => y+ 1))
 * // [[2, 2], [2, 2]]
 *
 */


Matrix.prototype.map = function (f) {
  return Matrix.of((0, _map.default)(f)(this.__value));
};
/**
 * @memberOf Matrix
 * @static
 * @function map
 * @description Static function that maps over the rows of the matrix using a map function
 * @param f {function} An iterator function
 * @param M {Matrix|array} Matrix or array to map
 * @returns {Matrix}
 * @example
 *
 * const m = Matrix.map(x= > x.map(y => y+ 1), [[1, 1], [1, 1]])
 * // [[2, 2], [2, 2]]
 *
 */


Matrix.map = (0, _curry.default)(function (f, M) {
  return Matrix.of(M).map(f);
});
/**
 * @memberOf Matrix
 * @instance
 * @member fold
 * @description Reduce the matrix rows using a reduce function
 * @param f {function} A reduce/fold function
 * @returns {Matrix}
 * @example
 *
 * // Flatten Matrix
 * Matrix.of([[1, 1], [1, 1]]).fold((prev, next) => prev.concat(next))
 * // [1, 1, 1, 1]
 */

Matrix.prototype.fold = function (f) {
  return Matrix.of((0, _fold.default)(f, [])(this.__value));
};
/**
 * @memberOf Matrix
 * @static
 * @function fold
 * @description Static function to reduce the matrix rows using a reduce function
 * @param f {function} A reduce/fold function
 * @param M {Matrix} The Matrix to reduce
 * @returns {Matrix}
 * @example

 * // Sum of all matrix values
 * const reducer = (prev, next) => Number(prev) + next.reduce((acc, x) => acc + x, 0)
 * const A = Matrix.of([[1, 1], [1, 1]]
 * Matrix.fold(reducer, A)
 * // 4
 */


Matrix.fold = (0, _curry.default)(function (f, M) {
  return Matrix.of(M).fold(f);
});
/**
 * @memberOf Matrix
 * @instance
 * @member ap
 * @description Applies a Matrix to a function
 * @param M {Matrix}
 * @returns {Matrix}
 * @example
 *
 * const f = x => x.reduce((prev, next) => prev + next)
 * const A = Matrix.of([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
 * Matrix.of(f).ap(M)
 * // [[6], [15], [24]
 */

Matrix.prototype.ap = function (M) {
  return Matrix.of(M).map(this.__value);
};
/**
 * @memberOf Matrix
 * @static
 * @function ap
 * @description Applies a Matrix to a function
 * @param f {function}
 * @param M {Matrix|array}
 * @returns {Matrix}
 * @example
 *
 * const f = x => x.reduce((prev, next) => prev + next)
 * Matrix.ap(f, [[1, 2, 3], [4, 5, 6], [7, 8, 9]])
 * // [[6], [15], [24]
 */


Matrix.ap = (0, _curry.default)(function (f, M) {
  return Matrix.of(f).ap(M);
});
/**
 * @memberOf Matrix
 * @instance
 * @member concat
 * @description Concatenates 2 Matrices using a function as operator
 * @param M {Matrix}
 * @returns {Matrix}
 * @example
 *
 * const a = [[0, 1, 1], [2, 3, 4]]
 * const b = [[2, 2, 2], [3, 3, 3]]
 * const A = Matrix.of(a)
 * const B = Matrix.of(b)
 * const M = A.concat(B)
 * // [[0, 1, 1, 2, 2, 2], [2, 3, 4, 3, 3, 3]]
 *
 */

Matrix.prototype.concat = function (M) {
  var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _concat.default;
  return Matrix.of(this).map(f(M));
};
/**
 * @memberOf Matrix
 * @static
 * @function concat
 * @description Concatenates 2 Matrices using a function as operator
 * @param A {Matrix}
 * @param B {Matrix}
 * @returns {Matrix}
 * @example
 *
 * const a = [[0, 1, 1], [2, 3, 4]]
 * const b = [[2, 2, 2], [3, 3, 3]]
 * const A = Matrix.of(a)
 * const B = Matrix.of(b)
 * const M = Matrix.concat(A, B)
 * // [[0, 1, 1, 2, 2, 2], [2, 3, 4, 3, 3, 3]]
 *
 */


Matrix.concat = (0, _curry.default)(function (A, B) {
  var f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _concat.default;
  return Matrix.of(A).map(f(B));
});
/**
 * @memberOf Matrix
 * @instance
 * @member empty
 * @description Return an empty Matrix from an existing Matrix
 * @returns {Matrix}
 */

Matrix.prototype.empty = function () {
  return Matrix.of(this).map(_empty.default);
};
/**
 * @memberOf Matrix
 * @static
 * @function empty
 * @description Return an empty Matrix from an existing Matrix
 * @param rows {number}
 * @param cols {number}
 * @returns {Matrix}
 */


Matrix.empty = (0, _curry.default)(function () {
  var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var m = (0, _generate.default)(rows, cols); // Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)))

  return Matrix.of(m).map(_empty.default);
}); // #### #### #### //

/**
 * @memberOf Matrix
 * @instance
 * @member identity
 * @desc Returns an identity matrix
 * @returns {Matrix}
 * @example
 *
 * const a = [[1, 2, 3], [4, 5, 6]]
 * const A = Matrix.of(a)
 * const Aidentity = A.identity()
 * // [[1, 0, 0], [0, 1, 0]]
 *
*/

Matrix.prototype.identity = function () {
  return Matrix.of(_identity.default).ap(this);
};
/**
 * @memberOf Matrix
 * @static
 * @function identity
 * @desc Returns an identity matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.identity(3, 2)
 * // [[1, 0, 0], [0, 1, 0]]
 *
 */


Matrix.identity = function (rows, cols) {
  var m = (0, _generate.default)(rows, cols); // Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)))

  return Matrix.of(_identity.default).ap(m);
};
/**
 * @memberOf Matrix
 * @instance
 * @member combine
 * @see Matrix.concat
 * @param M
 * @returns {Matrix}
 */


Matrix.prototype.combine = function (M) {
  return Matrix.of(this).concat(Matrix.of(M), _concat.default);
};
/**
 * @memberOf Matrix
 * @static
 * @function combine
 * @see Matrix.concat
 * @param M
 * @returns {Matrix}
 */


Matrix.combine = function (A, B) {
  return Matrix.of(A).concat(Matrix.of(B), _concat.default);
};
/**
 * @memberOf Matrix
 * @instance
 * @member dot
 * @description Returns the dot product between 2 matrices
 * @param M
 * @param f
 * @returns {Matrix}
 * @example
 *
 * // Create matrix
 * const m = Matrix.of([[1, 2], [3, 4]])
 *
 * // Generate identity matrix
 * const I  = m.identity() // [[1, 0], [0, 1]]
 *
 * if(m.dot(I).equals(m)) {
 *    console.log('Dot product with identity matrix returns the same matrix')
 * }
 *
 */


Matrix.prototype.dot = function (M) {
  return Matrix.of(this).concat(Matrix.of(M), (0, _dot.default)(this.precision));
};
/**
 * @memberOf Matrix
 * @static
 * @function dot
 * @description Returns the dot product between 2 matrices
 * @param M
 * @returns {Matrix}
 * @example
 * const a = [[1, 2, 3], [4, 5, 6]]
 * const b = [[7, 8], [9, 10], [11, 12]]
 *
 * const A = Matrix.of(a)
 * const B = Matrix.of(b)
 *
 * Matrix.dot(A, B) // [[58, 64], [139, 154]]
 *
 */


Matrix.dot = function (A, B) {
  return Matrix.of(A).dot(Matrix.of(B));
};
/**
 * @memberOf Matrix
 * @instance
 * @member fill
 * @desc Fill up an empty matrix with the provided map function
 * @param f
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[1,2,3], [3,2,1], [4,5,6]]).fill(x => 42)
 * // [[42,42,42], [42,42,42], [42,42,42]]
 *
 */


Matrix.prototype.fill = function (f) {
  return Matrix.of(this).map((0, _map.default)(function (x) {
    return f(x);
  }));
};
/**
 * @memberOf Matrix
 * @instance
 * @member zeros
 * @desc Fill up an empty matrix with zeros
 * @returns {Matrix}
 *
 * @example
 *
 * const A = Matrix.of([[1,2,3], [3,2,1], [4,5,6]]).zeros()
 * // [[0,0,0], [0,0,0], [0,0,0]]
 *
 */


Matrix.prototype.zeros = function () {
  return Matrix.of(this).fill(function (x) {
    return 0;
  });
};
/**
 * @memberOf Matrix
 * @function zeros
 * @desc Fill up an empty matrix with zeros
 * @param rows {number} Defines the rows of the matrix
 * @param cols {number} Defines the columns of the matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.zeros(3, 3)
 * // [[0,0,0], [0,0,0], [0,0,0]]
 *
 */


Matrix.zeros = function (rows, cols) {
  var m = (0, _generate.default)(rows, cols);
  return Matrix.of(m).fill(function (x) {
    return 0;
  });
};
/**
 * @memberOf Matrix
 * @instance
 * @member ones
 * @desc Fill up an empty matrix with ones
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[1,2,3], [3,2,1], [4,5,6]]).ones()
 * // [[1,1,1], [1,1,1], [1,1,1]]
 *
 */


Matrix.prototype.ones = function () {
  return Matrix.of(this).fill(function (x) {
    return 1;
  });
};
/**
 * @memberOf Matrix
 * @function ones
 * @desc Fill up an empty matrix with ones
 * @param rows {number} Defines the rows of the matrix
 * @param cols {number} Defines the columns of the matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.ones(1, 1)
 * // [[1,1,1], [1,1,1], [1,1,1]]
 *
 */


Matrix.ones = function (rows, cols) {
  var m = (0, _generate.default)(rows, cols);
  return Matrix.of(m).fill(function (x) {
    return 1;
  });
};
/**
 * @memberOf Matrix
 * @instance
 * @member random
 * @desc Fill up an empty matrix with random values
 * @param {function} [f = e => Math.random() * 2 - 1]
 * @returns {Matrix}
 */


Matrix.prototype.random = function () {
  var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {
    return Math.random() * 2 - 1;
  };
  return Matrix.of(this).fill(f);
};
/**
 * @memberOf Matrix
 * @function random
 * @desc Fill up an empty matrix with random numbers
 * @param f {function} Function which returns random values. Default random values are between -1 and 1
 * @param rows {number} Defines the rows of the matrix
 * @param cols {number} Defines the columns of the matrix
 * @returns {Matrix}
 */


Matrix.random = function () {
  var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {
    return Math.random() * 2 - 1;
  };
  var rows = arguments[1];
  var cols = arguments[2];
  var m = (0, _generate.default)(rows, cols);
  return Matrix.of(m).fill(f);
};
/**
 * @memberOf Matrix
 * @instance
 * @member toArray
 * @desc Returns the array from the matrix
 * @returns {Array}
 */


Matrix.prototype.toArray = function () {
  return this.__value.map(function (row) {
    return row.map(function (col) {
      return col;
    });
  });
};
/**
 * @memberOf Matrix
 * @instance
 * @member clone
 * @desc Returns a clone of the matrix
 * @returns {Matrix}
 */


Matrix.prototype.clone = function () {
  return Matrix.fromArray(this.__value);
};
/**
 * @memberOf Matrix
 * @instance
 * @member fromArray
 * @desc Returns a Matrix from an array
 * @returns {Array}
 */


Matrix.fromArray = function (arr) {
  return Matrix.of((0, _map.default)(function (row) {
    return (0, _map.default)(function (col) {
      return col;
    })(row);
  })(arr));
};
/**
 * @memberOf Matrix
 * @instance
 * @member transpose
 * @desc Returns a transposed Matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([-1, 2], [3, 4], [-8, 2])
 * const b = A.transpose().toArray()
 * // returns [[-1, 3,-8], [2, 4, 2]]
 */


Matrix.prototype.transpose = function () {
  return Matrix.of((0, _fold.default)(_transpose.default, [], this.__value));
};
/**
 * @memberOf Matrix
 * @function transpose
 * @desc Returns a transposed Matrix
 * @param M {Matrix|array} A Matrix or a matrix array
 * @returns {Matrix}
 * @example
 *
 * const a = [-1, 2], [3, 4], [-8, 2]
 * const b = Matrix.transpose(a).toArray()
 * // returns [[-1, 3,-8], [2, 4, 2]]
 */


Matrix.transpose = function (M) {
  return Matrix.of(M).transpose();
};
/**
 * @memberOf Matrix
 * @member add
 * @instance
 * @param M {Matrix|number} Add a Matrix or a number
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[5, 4]])
 * A.add(1) // [[6, 5]]
 * const B = Matrix.of([[5, 5]])
 * B.add(B) // [[10, 10]]
 *
 */


Matrix.prototype.add = function (M) {
  if (M instanceof Matrix) {
    if (this.getCols() !== M.getCols() || this.getRows() !== M.getRows()) {
      throw new Error('Matrices do not match, cannot add');
    }

    return this.map(function (row, idx) {
      return (0, _map.default)(function (val, jdx) {
        return val + M.__value[idx][jdx];
      })(row);
    });
  } else {
    return this.map((0, _map.default)(function (x) {
      return x + M;
    }));
  }
};
/**
 * @memberOf Matrix
 * @member subtract
 * @instance
 * @param M {Matrix|number} Subtract a Matrix or a number
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[5, 4]])
 * A.subtract(1) // [[4, 2]]
 * const B = Matrix.of([[5, 5]])
 * B.subtract(B) // [[0, 0]]
 *
 */


Matrix.prototype.subtract = function (M) {
  if (M instanceof Matrix) {
    if (this.getCols() !== M.getCols() || this.getRows() !== M.getRows()) {
      throw new Error('Matrices do not match, cannot subtract');
    }

    return this.map(function (row, idx) {
      return (0, _map.default)(function (val, jdx) {
        return val - M.__value[idx][jdx];
      })(row);
    });
  } else {
    return this.map((0, _map.default)(function (x) {
      return x - M;
    }));
  }
};
/**
 * @memberOf Matrix
 * @member multiply
 * @instance
 * @desc Mutliply a scalar or a mtraix with a matrix. Throws an error if the multiplication is not possible.
 * @param M {Matrix|number}
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[5, 4]])
 * A.multiply(2) // [[10, 8]]
 * const B = Matrix.of([[5, 5]])
 * B.multiply(B) // [[25, 25]]
 *
 */


Matrix.prototype.multiply = function (M) {
  if (M instanceof Matrix) {
    if (this.getCols() !== M.getCols() || this.getRows() !== M.getRows()) {
      console.log('Use static method \'dot\' to do matrix multiplication');
      throw new Error('Matrices do not match, cannot create hadamard product');
    }

    return this.map(function (row, idx) {
      return (0, _map.default)(function (col, jdx) {
        return col * M.__value[idx][jdx];
      })(row);
    });
  } else {
    return this.map((0, _map.default)(function (x) {
      return x * M;
    }));
  }
};
/**
 * @memberOf Matrix
 * @member additiveinverse
 * @instance
 * @desc Function that returns the matrix obtained by changing the sign of every matrix element. The additive inverse of matrix A is written –A.
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[5,-5], [-4, 4]])
 * const minusA = A.additiveinverse()
 * // [[-5, 5], [4, -4]]
 */


Matrix.prototype.additiveinverse = function () {
  return Matrix.of(this).multiply(-1);
};
/**
 * @memberOf Matrix
 * @member hadamard
 * @instance
 * @see multiply
 * @param M
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[5, 4]])
 * A.hadamard(2) // [[10, 8]]
 * const B = Matrix.of([[5, 5]])
 * B.hadamard(B) // [[25, 25]]

 */


Matrix.prototype.hadamard = function (M) {
  return Matrix.of(this).multiply(M);
};
/**
 * @memberOf Matrix
 * @instance
 * @member lu
 * @desc Calculates LU decomposition of the current Matrix
 * @returns {Matrix[]}
 * @example
 *
 * const result = [[3, -7, -2, 2], [-3, 5, 1, 0], [6, -4, 0, -5], [-9, 5, -5, 12]]
 * const A = Matrix.fromArray(result)
 * const lu = A.lu()
 * // L.__value = [ [ 1, 0, 0, 0 ], [ -1, 1, 0, 0 ], [ 2, -5, 1, 0 ], [ -3, 8, 3, 1 ] ]
 * // U.__value =  [ [ 3, -7, -2, 2 ], [ 0, -2, -1, 2 ], [ 0, 0, -1, 1 ], [ 0, 0, 0, -1 ] ]
 * Matrix.dot(lu[0], lu[1]) // returns clone of A
 *
 */


Matrix.prototype.lu = function () {
  var n = this.getRows();
  var tol = 1e-6;
  var A = this.clone();
  var L = this.zeros();
  var U = this.zeros();

  for (var k = 0; k < n; ++k) {
    if (Math.abs(A.__value[k][k]) < tol) throw Error('Cannot proceed without a row exchange');
    L.__value[k][k] = 1;

    for (var i = k + 1; i < n; ++i) {
      L.__value[i][k] = A.__value[i][k] / A.__value[k][k];

      for (var j = k + 1; j < n; ++j) {
        A.__value[i][j] = A.__value[i][j] - L.__value[i][k] * A.__value[k][j];
      }
    }

    for (var l = k; l < n; ++l) {
      U.__value[k][l] = A.__value[k][l];
    }
  }

  return [L, U];
};
/**
 * @memberOf Matrix
 * @instance
 * @member rref
 * @returns {Matrix|array}
 * @example
 *
 * var A = Matrix.of([[-1, 1], [-1, 0], [0, -1], [-1, -2]])
 * A.rref() //  [ [ 1, 0 ], [ -0, 1 ], [ 0, 0 ], [ 0, 0 ] ]
 */


Matrix.prototype.rref = function () {
  var lead = 0;
  var resultMatrix = this.clone();

  for (var r = 0; r < this.getRows(); ++r) {
    if (this.getCols() <= lead) {
      return resultMatrix;
    }

    var i = r;

    while (resultMatrix.__value[i][lead] === 0) {
      ++i;

      if (this.getRows() === i) {
        i = r;
        ++lead;

        if (this.getCols() === lead) {
          return resultMatrix;
        }
      }
    }

    var tmp = resultMatrix.__value[i];
    resultMatrix.__value[i] = resultMatrix.__value[r];
    resultMatrix.__value[r] = tmp;
    var val = resultMatrix.__value[r][lead];

    for (var j = 0; j < this.getCols(); ++j) {
      resultMatrix.__value[r][j] /= val;
    }

    for (var _i = 0; _i < this.getRows(); ++_i) {
      if (_i === r) continue;
      val = resultMatrix.__value[_i][lead];

      for (var _j = 0; _j < this.getCols(); ++_j) {
        resultMatrix.__value[_i][_j] -= val * resultMatrix.__value[r][_j];
      }
    }

    lead++;
  }

  return resultMatrix;
};
/**
 * @memberOf Matrix
 * @instance
 * @member solve
 * @param b
 * @returns {Array}
 * @example
 *
 * // Solve xA = b
 * // 5x + y  = 7
 * // 3x - 4y = 18
 * // Solution for x and y:
 * // x = 2
 * // y = -3
 *
 * const A = Matrix.of([[5, 1], [3, -4]])
 * const solveA = A.solve([7, 18]) // [2, -3]
 *
 */


Matrix.prototype.solve = function (b) {
  var A = this.clone();
  var LU = A.lu();
  var L = LU[0];
  var U = LU[1];
  var n = this.getRows();
  var s = 0;
  var c = [];
  var x = [];

  for (var k = 0; k < n; ++k) {
    for (var j = 0; j < k; ++j) {
      s = s + L.__value[k][j] * c[j];
    }

    c[k] = b[k] - s;
    s = 0;
  }

  for (var a = n - 1; a > -1; --a) {
    var t = 0;

    for (var _b = a + 1; _b < n; ++_b) {
      t = t + U.__value[a][_b] * x[_b];
    }

    x[a] = (c[a] - t) / U.__value[a][a];
  }

  return x;
};
/**
 * @memberOf Matrix
 * @member inverse
 * @instance
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[1, 1], [2, 4]]).inverse()
 * // [ [ 2, -0.5 ], [ -1, 0.5 ] ]
 *
 */


Matrix.prototype.inverse = function () {
  var A = this.clone();
  var I = A.identity();
  var Inv = A.concat(I).rref();

  var result = Inv.__value.reduce(function (result, x, idx) {
    var half = x.length / 2;
    result.push(x.slice(half, x.length));
    return result;
  }, []);

  return Matrix.of(result);
};
/**
 * @memberOf Matrix
 * @member rank
 * @instance
 * @returns {Number}
 */


Matrix.prototype.rank = function () {
  var rref = this.rref();
  var result = 0;

  for (var i = 0; i < rref.getCols(); ++i) {
    result += rref.__value[i][i];
  }

  return result;
};
/**
 * @memberOf Matrix
 * @member dimension
 * @instance
 * @see rank
 * @returns {Number}
 */


Matrix.prototype.dimension = function () {
  return this.rank();
};
/**
 * @memberOf Matrix
 * @member diag
 * @instance
 * @desc Returns an array containing the values on the diagonal
 * @returns {Array}
 * @example
 *
 * const diag1 = Matrix.ones(3, 3).diag()
 * // [1, 1, 1]
 *
 * const diag0 = Matrix.zeros(5, 5).diag()
 * // [0, 0, 0, 0, 0]
 *
 */


Matrix.prototype.diag = function () {
  return (0, _fold.default)(function (acc, x, idx) {
    return acc.concat(x[idx]);
  })([])(this.__value);
};
/**
 * @memberOf Matrix
 * @function diag
 * @desc Returns an array containing the values on the diagonal
 * @param M {Matrix|Array} Matrix from which to return the diagonal
 * @returns {Array}
 * @example
 *
 * const diag1 = Matrix.diag([[2, 1], [1, 5]])
 * // [2, 5]
 *
 */


Matrix.diag = function (M) {
  return Matrix.of(M).diag();
};
/**
 * @memberOf Matrix
 * @member diagproduct
 * @instance
 * @desc Returns the product of the values on the diagonal
 * @returns {Number}
 * @example
 *
 * const diag1 = Matrix.ones(3, 3).diagproduct()
 * // 1
 *
 * const diag0 = Matrix.zeros(5, 5).diagproduct()
 * // 0
 *
 */


Matrix.prototype.diagproduct = function () {
  return (0, _fold.default)(function (acc, x, idx) {
    acc *= x[idx];
    return acc;
  })(1)(this.__value);
};
/**
 * @memberOf Matrix
 * @function diagproduct
 * @desc Returns the product of the values on the diagonal
 * @param M {Matrix|Array} Matrix from which to return the diagonal
 * @returns {Number}
 * @example
 *
 * const diag1 = Matrix.diagproduct([[2, 1], [1, 5]])
 * // 10
 *
 */


Matrix.diagproduct = function (M) {
  return Matrix.of(M).diagproduct();
};
/**
 * @memberOf Matrix
 * @member sum
 * @instance
 * @desc Returns the sum of the values in the Matrix
 * @returns {Number}
 * @example
 *
 * const diag1 = Matrix.ones(3, 3).sum()
 * // 9
 *
 * const diag0 = Matrix.zeros(5, 5).sum()
 * // 0
 *
 */


Matrix.prototype.sum = function () {
  return (0, _fold.default)(function (acc, x) {
    acc += (0, _fold.default)(function (prev, next) {
      return prev + next;
    })(0)(x);
    return acc;
  })(0)(this.__value);
};
/**
 * @memberOf Matrix
 * @function sum
 * @desc Returns the sum of the values in the Matrix
 * @param M {Matrix|Array} Matrix from which to return the diagonal
 * @returns {Number}
 * @example
 *
 * const diag1 = Matrix.sum([[2, 1], [1, 5]])
 * // 9
 *
 */


Matrix.sum = function (M) {
  return Matrix.of(M).sum();
};
/**
 * @memberOf Matrix
 * @member kronecker
 * @instance
 * @desc The Kronecker product is an operation on two matrices of arbitrary size resulting in a block matrix.
 * @param M {Matrix} The right side Matrix of the product (this ⊗ M)
 * @returns {Matrix}
 */


Matrix.prototype.kronecker = function (M) {
  var m = this.getRows();
  var n = this.getCols();
  var p = M.getRows();
  var q = M.getCols();
  var left = this.__value;
  var right = M.__value;
  var frame = (0, _generate.default)(m * p, n * q);

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      for (var k = 0; k < p; k++) {
        for (var l = 0; l < q; l++) {
          frame[p * i + k][q * j + l] = left[i][j] * right[k][l];
        }
      }
    }
  }

  return Matrix.of(frame);
};
/**
 * @memberOf Matrix
 * @function kronecker
 * @desc The Kronecker product is an operation on two matrices of arbitrary size resulting in a block matrix.
 * @param A {Matrix} The left side Matrix of the product (A ⊗ B)
 * @param B {Matrix} The right side Matrix of the product (A ⊗ B)
 * @returns {Matrix}
 */


Matrix.kronecker = function (A, B) {
  return Matrix.of(A).kronecker(B);
};

var _default = Matrix;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/concat.js":
/*!****************************!*\
  !*** ./src/util/concat.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! fun.js/src/curry */ "./node_modules/fun.js/src/curry.js"));

var _concat = _interopRequireDefault(__webpack_require__(/*! fun.js/src/concat */ "./node_modules/fun.js/src/concat.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function concat
 * @param M {Matrix}
 * @param m {Array}
 * @param idx {number}
 * @returns {Array}
 */
var _default = (0, _curry.default)(function (M, m, idx) {
  return (0, _concat.default)(m, M.__value[idx]);
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/dot.js":
/*!*************************!*\
  !*** ./src/util/dot.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! fun.js/src/curry */ "./node_modules/fun.js/src/curry.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! fun.js/src/fold */ "./node_modules/fun.js/src/fold.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! fun.js/src/map */ "./node_modules/fun.js/src/map.js"));

var _round = _interopRequireDefault(__webpack_require__(/*! ./round */ "./src/util/round.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function dot
 * @param B {Matrix}
 * @param a {Array}
 * @returns {Array}
 */
var _default = (0, _curry.default)(function (decimals, B, a) {
  return (0, _map.default)(function (item, i) {
    return (0, _fold.default)(function (acc, x, j) {
      acc += (0, _round.default)(x * B.__value[j][i], decimals);
      return acc;
    }, 0)(a);
  })(B.__value[0]);
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/empty.js":
/*!***************************!*\
  !*** ./src/util/empty.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! fun.js/src/curry */ "./node_modules/fun.js/src/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _curry.default)(function (m) {
  return [];
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/generate.js":
/*!******************************!*\
  !*** ./src/util/generate.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @function generate
 * @desc Generator function for a matrix array, values are set to undefined
 * @param rows {number}
 * @param cols {number}
 * @returns {any[][]}
 */
var _default = function _default(rows, cols) {
  return Array.apply(null, Array(rows)).map(function (x) {
    return Array.apply(null, Array(cols));
  });
};

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/identity.js":
/*!******************************!*\
  !*** ./src/util/identity.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! fun.js/src/map */ "./node_modules/fun.js/src/map.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function identity
 * @desc Creates an identiy matrix from an empty array
 * @param m {Array}
 * @param idx {number}
 * @return {Matrix}
 */
var _default = function _default(m, idx) {
  return (0, _map.default)(function (rows, jdx) {
    return (idx === jdx) * 1;
  })(m);
};

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/round.js":
/*!***************************!*\
  !*** ./src/util/round.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = round;

/**
 * @function round
 * @param value {number}
 * @param decimals {number}
 * @returns {Number}
 */
function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/util/transpose.js":
/*!*******************************!*\
  !*** ./src/util/transpose.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! fun.js/src/map */ "./node_modules/fun.js/src/map.js"));

var _curry = _interopRequireDefault(__webpack_require__(/*! fun.js/src/curry */ "./node_modules/fun.js/src/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function transpose
 * @desc Transposes a array of arrays using the Matrix.map function
 * @param m {Array}
 * @param idx {number}
 * @return {Matrix}
 */
var _default = (0, _curry.default)(function (prev, next) {
  return (0, _map.default)(function (item, i) {
    return (prev[i] || []).concat(next[i]);
  })(next);
});

exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9fcHJpdmF0ZS9jdXJyeTEuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FuZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2Jvb2xlYW4vaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY3VycnkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2RhdGUvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2V4aXN0cy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaWRlbnRpY2FsLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2l0ZXJhdG9yL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXAvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9ub3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL251bWJlci9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2lzTmFuLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3QvZXF1YWxzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3QvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb3IuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3N0cmluZy9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3N0cmluZy9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvdHlwZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL21hdHJpeC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9kb3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9nZW5lcmF0ZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL3JvdW5kLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC90cmFuc3Bvc2UuanMiXSwibmFtZXMiOlsiTWF0cml4IiwidmFsIiwiX192YWx1ZSIsInByb3RvdHlwZSIsInR5cGUiLCJwcmVjaXNpb24iLCJzZXRQcmVjaXNpb24iLCJpc1N5bW1ldHJpYyIsImEiLCJiIiwidHJhbnNwb3NlIiwiaXNTcXVhcmUiLCJnZXRDb2xzIiwiZ2V0Um93cyIsImlzT3J0aG9nb25hbCIsIkF4QXQiLCJkb3QiLCJJIiwiaWRlbnRpdHkiLCJsZW5ndGgiLCJlcXVhbHMiLCJNIiwiZ2V0U2hhcGUiLCJvZiIsIm1hcCIsImYiLCJmb2xkIiwiYXAiLCJjb25jYXQiLCJBIiwiQiIsImVtcHR5Iiwicm93cyIsImNvbHMiLCJtIiwiY29tYmluZSIsImZpbGwiLCJ4IiwiemVyb3MiLCJvbmVzIiwicmFuZG9tIiwiZSIsIk1hdGgiLCJ0b0FycmF5Iiwicm93IiwiY29sIiwiY2xvbmUiLCJmcm9tQXJyYXkiLCJhcnIiLCJhZGQiLCJFcnJvciIsImlkeCIsImpkeCIsInN1YnRyYWN0IiwibXVsdGlwbHkiLCJjb25zb2xlIiwibG9nIiwiYWRkaXRpdmVpbnZlcnNlIiwiaGFkYW1hcmQiLCJsdSIsIm4iLCJ0b2wiLCJMIiwiVSIsImsiLCJhYnMiLCJpIiwiaiIsImwiLCJycmVmIiwibGVhZCIsInJlc3VsdE1hdHJpeCIsInIiLCJ0bXAiLCJzb2x2ZSIsIkxVIiwicyIsImMiLCJ0IiwiaW52ZXJzZSIsIkludiIsInJlc3VsdCIsInJlZHVjZSIsImhhbGYiLCJwdXNoIiwic2xpY2UiLCJyYW5rIiwiZGltZW5zaW9uIiwiZGlhZyIsImFjYyIsImRpYWdwcm9kdWN0Iiwic3VtIiwicHJldiIsIm5leHQiLCJrcm9uZWNrZXIiLCJwIiwicSIsImxlZnQiLCJyaWdodCIsImZyYW1lIiwiZGVjaW1hbHMiLCJpdGVtIiwiQXJyYXkiLCJhcHBseSIsInJvdW5kIiwidmFsdWUiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFD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QUFDQyxLQUFOLENBQVksSUFBWixFQUFrQkQsS0FBSyxDQUFDckUsSUFBRCxDQUF2QixDQUFKO0FBQUEsR0FBcEMsQ0FBaEI7QUFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGY7Ozs7QUFFQTs7Ozs7OztlQU9lLGtCQUFDQyxDQUFELEVBQUlpQixHQUFKO0FBQUEsU0FBWSxrQkFBSSxVQUFDbkIsSUFBRCxFQUFPb0IsR0FBUDtBQUFBLFdBQWUsQ0FBQ0QsR0FBRyxLQUFLQyxHQUFULElBQWdCLENBQS9CO0FBQUEsR0FBSixFQUFzQ2xCLENBQXRDLENBQVo7QUFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVGY7Ozs7OztBQU1lLFNBQVNzRSxLQUFULENBQWdCQyxLQUFoQixFQUF1QkwsUUFBdkIsRUFBaUM7QUFDOUMsU0FBT00sTUFBTSxDQUFDaEUsSUFBSSxDQUFDOEQsS0FBTCxDQUFXQyxLQUFLLEdBQUcsR0FBUixHQUFjTCxRQUF6QixJQUFxQyxJQUFyQyxHQUE0Q0EsUUFBN0MsQ0FBYjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRDs7QUFDQTs7OztBQUVBOzs7Ozs7O2VBT2Usb0JBQU0sVUFBQ1IsSUFBRCxFQUFPQyxJQUFQO0FBQUEsU0FBZ0Isa0JBQUksVUFBQ1EsSUFBRCxFQUFPbkMsQ0FBUDtBQUFBLFdBQWEsQ0FBQzBCLElBQUksQ0FBQzFCLENBQUQsQ0FBSixJQUFXLEVBQVosRUFBZ0J0QyxNQUFoQixDQUF1QmlFLElBQUksQ0FBQzNCLENBQUQsQ0FBM0IsQ0FBYjtBQUFBLEdBQUosRUFBa0QyQixJQUFsRCxDQUFoQjtBQUFBLENBQU4sQyIsImZpbGUiOiJAYXN0dWFuYXgvZnVubWF0cml4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAYXN0dWFuYXgvZnVubWF0cml4XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBhc3R1YW5heC9mdW5tYXRyaXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGFzdHVhbmF4L2Z1bm1hdHJpeFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYXRyaXguanNcIik7XG4iLCIvKipcbiAqIFJldHVybnMgYSBjdXJyaWVkIGZ1bmN0aW9uIHdpdGggYXJpdHkgMVxuICogQGZ1bmN0aW9uIGN1cnJ5MVxuICogQHByaXZhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkxIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY3VycmllZCAoYSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAwXG4gICAgICA/IHRoaXNcbiAgICAgIDogZm4oYSlcbiAgfVxufVxuIiwiLyoqXG4gKiBDaGVja3MgaWYgYm90aCBwcmVkaWNhdGVzIGFyZSB0cnVlXG4gKlxuICogQGZ1bmN0aW9uIGFuZFxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiBib3RoIHByZWRpY2F0ZXMgYXJlIHRydWVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKHgsIHkpIC0+IGJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0geCAtIEEgcHJlZGljYXRlXG4gKiBAcGFyYW0geyp9IHkgLSBBIHByZWRpY2F0ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbmQgKHgsIHkpIHtcbiAgcmV0dXJuIHggJiYgeVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBhcnJheUNvbmNhdFxuICogQHBhcmFtIGExXG4gKiBAcGFyYW0gYTJcbiAqIEByZXR1cm5zIHtUW119XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0KGEsIGIpXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGVxdWFsc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gZm9yIGRlZXAgY29tcGFyaXNvbiBvZiBhcnJheXNcbiAqIEBwYXJhbSB7YX0geCAtIE9iamVjdCB0byBjb21wYXJlIG9mIHR5cGUgYVxuICogQHBhcmFtIHthfSB5IC0gT2JqZWN0IHggdG8gY29tcGFyZSB3aXRoIG9iamVjdCB4XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgbm90IGZyb20gJy4uL25vdCdcbmltcG9ydCBlcXVhbHMgZnJvbSAnLi4vZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHNBcnJheSAoeCwgeSkge1xuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vdChlcXVhbHMoeFtpXSwgeVtpXSkpKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IG1hcHBpbmcgb3ZlciB0aGUgcHJvdmlkZWQgYXJyYXkgYW5kIGNhbGxpbmcgYW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSB7Y2JGdW5jdGlvbn0gY2IgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBtb2RpZnkgdGhlIGl0ZW1cbiAqIEBwYXJhbSB7Kn0gaW5pdCAtIEluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBBcnJheSB3aXRoIGl0ZW1zIHRvIG1vZGlmeSBieSB0aGUgY2IgZnVuY3Rpb25cbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFsaWFzIHJlZHVjZVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvbGQoYWRkLCAwLCBbMSwxLDFdKVxuICogLy8gcmVzdWx0ID0gM1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIGNiRnVuY3Rpb25cbiAqIEBwYXJhbSB7Kn0gciAtIEFjY3VtdWxhdG9yIHdoaWNoIGFjY3VtdWxhdGVzIHRoZSBjYWxsYmFjaydzIHJldHVybiB2YWx1ZXNcbiAqIEBwYXJhbSB7Kn0gaXRlbSAtIHRoZSBjdXJyZW50IGVsZW1lbnQgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSB0aGUgaW5kZXkgb2YgdGhlIGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge0FycmF5fSBhIC0gVGhlIGluaXRpYWwgYXJyYXlcbiAqIEByZXR1cm4geyp9XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgbGV0IHIgPSBpbml0XG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciA9IGNiKHIsIGFbaV0sIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIENoZWNrcyBpZiB0aGUgcHJvdmlkZWQgb2JqZWN0IGlzIGFuIGFycmF5LCBhdXRvY3VycmllZCBmdW5jdGlvblxuICpcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gaXNBcnJheVxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiB0aGUgcHJvdmlkZWQgb2JqZWN0IGlzIGFuIGFycmF5LCBhdXRvY3VycmllZCBmdW5jdGlvblxuICogQHBhcmFtIHsqfSBPYmplY3QgdG8gdmVyaWZpeVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBpc0FycmF5KFsxLDEsMV0pXG4gKiAvLyByZXN1bHQgPSB0cnVlXG4gKi9cblxuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnQXJyYXknKVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gbWFwXG4gKiBAZGVzY3JpcHRpb24gTWFwcyBvdmVyIGFuIGFycmF5IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogIGNvbnN0IHJlc3VsdCA9IG1hcChpZGVudGl0eSwgWzAsMiwzXSlcbiAqICAvLyByZXN1bHQgPSBbMCwyLDNdXG4gKiAgY29uc3QgYWRkMiA9IGFkZCgyKVxuICogIGNvbnN0IHJlc3VsdCA9IG1hcChhZGQyLCBbMCwyLDNdKVxuICogIC8vIHJlc3VsdCA9IFsyLDQsNV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBjb25zdCByID0gbmV3IEFycmF5KGwpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltpXSA9IGNiKGFbaV0sIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEN1cnJpZWQgZnVuY3Rpb24gdGhhdCB2ZXJpZmllcyBvZiB0aGUgcHJvdmlkZWQgYXJndW1lbnQgaXMgYSBib29sZWFuXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBpc1xuICogQGRlc2NyaXB0aW9uIEN1cnJpZWQgZnVuY3Rpb24gdGhhdCB2ZXJpZmllcyBvZiB0aGUgcHJvdmlkZWQgYXJndW1lbnQgaXMgYSBib29sZWFuXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAcGFyYW0geyp9IEl0ZW0gdG8gdmVyaWZ5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICoqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnQm9vbGVhbicpXG4iLCIvKipcbiAqIENvbmNhdGVuYXRlcyAyIGl0ZW1zIHRvZ2V0aGVyXG4gKlxuICogQGZ1bmN0aW9uIGNvbmNhdFxuICogQGRlc2NyaXB0aW9uIENvbmNhdGVuYXRlcyAyIGl0ZW1zIHRvZ2V0aGVyXG4gKiBAc2luY2UgdjEuMC40XG4gKiBAcGFyYW0ge2F9IGEgLSBMZWZ0IHNpZGUgb2YgdGhlIGNvbmNhdGVuYXRpb25cbiAqIEBwYXJhbSB7YX0gYiAtIHJpZ2h0IHNpZGUgb2YgdGhlIGNvbmNhdGVuYXRpb25cbiAqIEByZXR1cm4ge2F9IENvbmNhdGVuYXRlZCBpdGVtXG4gKiovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGFycmF5Q29uY2F0IGZyb20gJy4vYXJyYXkvY29uY2F0J1xuaW1wb3J0IHN0cmluZ0NvbmNhdCBmcm9tICcuL3N0cmluZy9jb25jYXQnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGNvbmNhdCAoYSwgYikge1xuICBjb25zdCB0eXBlTWFwID0ge1xuICAgICdTdHJpbmcnOiBzdHJpbmdDb25jYXQsXG4gICAgJ0FycmF5JzogYXJyYXlDb25jYXRcbiAgfVxuICByZXR1cm4gdHlwZU1hcFt0eXBlKGEpXShhLCBiKVxufSlcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKipcbiAqIEBmdW5jdGlvbiBjdXJyeVxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVzIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeSAoZnVuKSB7XG4gIGNvbnN0IGFyZ3NsZW4gPSBmdW4ubGVuZ3RoXG5cbiAgaWYgKGFyZ3NsZW4gPT09IDApIHtcbiAgICByZXR1cm4gZnVuXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlY3Vyc2VyKFtdKVxuXG4gIGZ1bmN0aW9uIHJlY3Vyc2UgKGFjYywgYXJncykge1xuICAgIGNvbnN0IF9hY2MgPSBhY2MuY29uY2F0KGFyZ3MpXG4gICAgcmV0dXJuIF9hY2MubGVuZ3RoIDwgYXJnc2xlblxuICAgICAgPyBjcmVhdGVSZWN1cnNlcihfYWNjKVxuICAgICAgOiBmdW4uYXBwbHkodGhpcywgX2FjYylcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlY3Vyc2VyIChhY2MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlY3Vyc2UoYWNjLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG4vKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0RhdGUnKVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBlbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGVtcHR5IGVxdWl2YWxlbnQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW1wdHkgKHgpIHtcbiAgcmV0dXJuIG5ldyB4LmNvbnN0cnVjdG9yKClcbn07XG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGVxdWFsc1xuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGZvciBlcXVhbGl0eSBvZiAyIGl0ZW1zXG4gKiBAcGFyYW0geyp9IHggLSBMZWZ0IHNpZGUgb2YgdGhlIGVxdWFsaXR5IGNoZWNrXG4gKiBAcGFyYW0geyp9IHkgLSBSaWdodCBzaWRlIG9mIHRoZSBlcXVhbGl0eSBjaGVja1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbmFuID0gTnVtYmVyLk5hTlxuICogZXF1YWwobmFuLCBuYW4pIC8vIHJldHVybnMgdHJ1ZVxuICpcbiAqIGNvbnN0IGFycjEgPSBbMCwgMSwgMiwgM11cbiAqIGNvbnN0IGFycjIgPSBbbnVsbCwgMSwgMiwgM11cbiAqIGVxdWFscyhhcnIxLCBhcnIyKSAvLyByZXR1cm5zIGZhbHNlXG4gKlxuICogZXF1YWxzKG5ldyBPYmplY3QoeydhJzogMCwgJ2InOiAxfSksIHsnYSc6IDAsICdiJzogMX0pIC8vIHRydWVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuL2V4aXN0cydcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi9pZGVudGljYWwnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5pbXBvcnQgbm90IGZyb20gJy4vbm90J1xuaW1wb3J0IG9yIGZyb20gJy4vb3InXG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9vYmplY3QvaXMnXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2FycmF5L2lzJ1xuaW1wb3J0IGlzQm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4vaXMnXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9udW1iZXIvaXMnXG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnLi9zdHJpbmcvaXMnXG5pbXBvcnQgaXNEYXRlIGZyb20gJy4vZGF0ZS9pcydcbmltcG9ydCBlcXVhbHNBcnJheSBmcm9tICcuL2FycmF5L2VxdWFscydcbmltcG9ydCBlcXVhbHNPYmplY3QgZnJvbSAnLi9vYmplY3QvZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHMgKHgsIHkpIHtcbiAgaWYgKGlkZW50aWNhbCh4LCB5KSkgcmV0dXJuIHRydWVcblxuICBpZiAodHlwZSh4KSAhPT0gdHlwZSh5KSkgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKG9yKG5vdChleGlzdHMoeCkpLCBub3QoZXhpc3RzKHkpKSkpIHJldHVybiBmYWxzZVxuXG4gIGlmICh4LmNvbnN0cnVjdG9yICE9PSB5LmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2VcblxuICBpZiAoaXNTdHJpbmcoeCkgfHwgaXNCb29sZWFuKHgpIHx8IGlzTnVtYmVyKHgpIHx8IGlzRGF0ZSh4KSkge1xuICAgIHJldHVybiBpZGVudGljYWwoeC52YWx1ZU9mKCksIHkudmFsdWVPZigpKVxuICB9XG4gIGlmIChpc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuIGVxdWFsc0FycmF5KHgsIHkpXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzT2JqZWN0KHgsIHkpXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZXhpc3RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4aXN0cyAoeCkge1xuICByZXR1cm4gISh4ID09IG51bGwpXG59O1xuIiwiLyoqXG4gKiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgbGlrZSBvYmplY3QgYW5kIGNhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZW1cbiAqXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlbVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoKGEsIGIsIGMsIGEpIOKGkiBhKSDihpIgYSDihpIgW2JdIOKGkiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiByZWNlaXZlcyA0IHZhbHVlczogdGhlIGFjY3VtdWxhdG9yLCB0aGUgaXRlbSwgdGhlIGluZGV4LCBhbmQgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0geyp9IGEgaXMgdGhlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gW2JdIHRoZSBhcnJheSBsaWtlIGl0ZW0gdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcmV0dXJuIHsqfSBhIGlzIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZVxuICoqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBhcnJheUZvbGQgZnJvbSAnLi9hcnJheS9mb2xkJ1xuaW1wb3J0IG9iamVjdEZvbGQgZnJvbSAnLi9vYmplY3QvZm9sZCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIGEpIHtcbiAgY29uc3QgdHlwZU1hcCA9IHtcbiAgICAnT2JqZWN0Jzogb2JqZWN0Rm9sZCxcbiAgICAnQXJyYXknOiBhcnJheUZvbGRcbiAgfVxuICAvLyBpZiAoYS5uZXh0KSB7XG4gIC8vICAgcmV0dXJuIGl0ZXJhYmxlRm9sZChjYiwgaW5pdCwgYSlcbiAgLy8gfVxuICAvLyBpZiAodHlwZShTeW1ib2wpICE9PSAndW5kZWZpbmVkJyAmJiBhW1N5bWJvbC5pdGVyYXRvcl0pIHtcbiAgLy8gICByZXR1cm4gaXRlcmFibGVGb2xkKGNiLCBpbml0LCBhW1N5bWJvbC5pdGVyYXRvcl0oKSlcbiAgLy8gfVxuICByZXR1cm4gdHlwZU1hcFt0eXBlKGEpXShjYiwgaW5pdCwgYSlcbn0pXG5cbi8vIGZ1bmN0aW9uIGl0ZXJhYmxlRm9sZCAoY2IsIGFjYywgZ2VuKSB7XG4vLyAgIGxldCBzdGVwID0gZ2VuLm5leHQoKVxuLy8gICB3aGlsZSAoIXN0ZXAuZG9uZSkge1xuLy8gICAgIGFjYyA9IGNiKGFjYywgc3RlcC52YWx1ZSlcbi8vICAgICBzdGVwID0gZ2VuLm5leHQoKVxuLy8gICB9XG4vLyAgIHJldHVybiBhY2Ncbi8vIH1cbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gaWRlbnRpY2FsXG4gKiBAZGVzY3JpcHRpb24gY2hlY2tzIGZvciBpZGVudGludGljYWwgaXRlbXNcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgaXNOYW4gZnJvbSAnLi9udW1iZXIvaXNOYW4nXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlkZW50aWNhbCAoeCwgeSkge1xuICBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSB7XG4gICAgcmV0dXJuIDEgLyB4ID09PSAxIC8geVxuICB9XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gISEoaXNOYW4oeCkgJiYgaXNOYW4oeSkpXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gaXNcbiAqIEBkZXNjcmlwdGlvbiBWZXJpZmllcyB0aGUgdHlwZSBvZiB0aGUgcHJvdmlkZWQgYXJndW1lbnRcbiAqXG4gKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlzIChDdG9yLCB2YWwpIHtcbiAgcmV0dXJuIHR5cGUodmFsKSA9PT0gQ3RvclxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuY29uc3QgaXNGdW5jdGlvbiA9IGlzKCdGdW5jdGlvbicpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzSXRlciAoaXRlcikge1xuICByZXR1cm4gaXNGdW5jdGlvbihpdGVyW1N5bWJvbC5pdGVyYXRvcl0pXG59XG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBJdGVyYXRvciBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4zXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYXRvcn0gYVxuICogQHJldHVybiB7SXRlcmF0b3J9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2FsbGJhY2ssIGl0ZXJhdG9yKSB7XG4gIGxldCByID0gW11cbiAgZm9yIChsZXQgbmV4dFZhbHVlID0gaXRlcmF0b3IubmV4dCgpOyBuZXh0VmFsdWUuZG9uZSAhPT0gdHJ1ZTsgbmV4dFZhbHVlID0gaXRlcmF0b3IubmV4dCgpKSB7XG4gICAgci5wdXNoKGNhbGxiYWNrKGl0ZXJhdG9yLnZhbHVlKCkpKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYW4gaXRlcmFibGUgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvbiBtYXBcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiB3aGljaCBtYXBzIG92ZXIgYW4gaXRlcmFibGUuXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBiIC0+IGJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGFycmF5TWFwIGZyb20gJy4vYXJyYXkvbWFwJ1xuaW1wb3J0IG9iamVjdE1hcCBmcm9tICcuL29iamVjdC9tYXAnXG5pbXBvcnQgbWFwTWFwIGZyb20gJy4vbWFwL21hcCdcbmltcG9ydCBzdHJpbmdNYXAgZnJvbSAnLi9zdHJpbmcvbWFwJ1xuaW1wb3J0IGl0ZXJhdG9yTWFwIGZyb20gJy4vaXRlcmF0b3IvbWFwJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuaW1wb3J0IGlzSXRlcmF0b3IgZnJvbSAnLi9pdGVyYXRvci9pcydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBzd2l0Y2ggKHR5cGUoYSkpIHtcbiAgICBjYXNlICdGdW5jdGlvbic6XG4gICAgICByZXR1cm4gY3VycnkoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2IuY2FsbCh0aGlzLCBhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpXG4gICAgICB9KVxuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICByZXR1cm4gb2JqZWN0TWFwKGNiLCBhKVxuICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICByZXR1cm4gc3RyaW5nTWFwKGNiLCBhKVxuICAgIGNhc2UgJ01hcCc6XG4gICAgICByZXR1cm4gbWFwTWFwKGNiLCBhKVxuICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgIHJldHVybiBhcnJheU1hcChjYiwgYSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlzSXRlcmF0b3IoYSlcbiAgICAgICAgPyBpdGVyYXRvck1hcChjYiwgYSlcbiAgICAgICAgOiBhcnJheU1hcChjYiwgYSlcbiAgfVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgTWFwIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge01hcH0gYVxuICogQHJldHVybiB7TWFwfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4uL2VtcHR5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGNvbnN0IHIgPSBlbXB0eShhKVxuICBhLmZvckVhY2goKHYsIGssIG1hcCkgPT4ge1xuICAgIHIuc2V0KGssIGNiKHYsIGssIG1hcCkpXG4gIH0pXG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gbm90XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBub3QgKHgpIHtcbiAgcmV0dXJuICF4XG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdOdW1iZXInKVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gaXNOYU5cbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgbnVtYmVyIGlzIE5BTlxuXG4gKi9cbmltcG9ydCBpc051bWJlciBmcm9tICcuL2lzJ1xuaW1wb3J0IGFuZCBmcm9tICcuLi9hbmQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTmFuICh4KSB7XG4gIHJldHVybiBhbmQoaXNOdW1iZXIoeCksIGlzTmFOKHgpKVxufTtcbiIsIi8qKlxuXG4gKiBlcXVhbHNcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuLi9leGlzdHMnXG5pbXBvcnQgbm90IGZyb20gJy4uL25vdCdcbmltcG9ydCBlcXVhbHMgZnJvbSAnLi4vZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoeCwgeSkgPT4ge1xuICBmb3IgKGxldCBrZXlYIGluIHgpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXG4gICAgaWYgKG5vdChlcXVhbHMoeFtrZXlYXSwgeVtrZXlYXSkpKSByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZvciAobGV0IGtleVkgaW4geSkge1xuICAgIGlmIChub3QoZXhpc3RzKHhba2V5WV0pKSAmJiBleGlzdHMoeVtrZXlZXSkpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAcHJpdmF0ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgbykge1xuICBjb25zdCBrID0ga2V5cyhvKVxuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBrLmxlbmd0aFxuICBsZXQgciA9IE9iamVjdChpbml0KVxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHIgPSBjYihyLCBvW2tbaV1dLCBrW2ldLCBvKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnT2JqZWN0JylcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgb3duIGtleXMgb2YgYW4gb2JqZWN0IGFzIGFuIEFycmF5XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gW2JdXG4gKiBAcGFyYW0ge09iamVjdH1cbiAqIEByZXR1cm4ge0FycmF5fVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhPYmplY3QoYSkpXG59KVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHJldHVybiB7T2JqZWN0fVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4uL2VtcHR5J1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGNvbnN0IGsgPSBrZXlzKGEpXG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGsubGVuZ3RoXG4gIGNvbnN0IHIgPSBlbXB0eShhKVxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHJba1tpXV0gPSBjYihhW2tbaV1dLCBrW2ldLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gb3JcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgaWYgb25lIG9yIHRoZSBvdGhlciBpcyB0cnVlXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBvciAoeCwgeSkge1xuICByZXR1cm4geCB8fCB5XG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIHN0cmluZ0NvbmNhdFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmNhdCAoYSwgYikgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xuICByZXR1cm4gU3RyaW5nKGEpICsgU3RyaW5nKGIpXG59XG4iLCIvKipcblxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdTdHJpbmcnKVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYSBzdHJpbmcgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGxldCByID0gJydcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByICs9IGNiKGEuY2hhckF0KGkpLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdHlwZVxuICovXG5pbXBvcnQgY3VycnkxIGZyb20gJy4vX3ByaXZhdGUvY3VycnkxJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeTEoZnVuY3Rpb24gdHlwZSAoeCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpLnNsaWNlKDgsIC0xKVxufSlcbiIsImltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcbmltcG9ydCBmb2xkIGZyb20gJ2Z1bi5qcy9zcmMvZm9sZCdcbmltcG9ydCBlcXVhbHMgZnJvbSAnZnVuLmpzL3NyYy9lcXVhbHMnXG5pbXBvcnQgY29uY2F0IGZyb20gJ3V0aWwvY29uY2F0J1xuaW1wb3J0IGVtcHR5IGZyb20gJ3V0aWwvZW1wdHknXG5pbXBvcnQgZG90IGZyb20gJ3V0aWwvZG90J1xuaW1wb3J0IGlkZW50aXR5IGZyb20gJ3V0aWwvaWRlbnRpdHknXG5pbXBvcnQgdHJhbnNwb3NlIGZyb20gJ3V0aWwvdHJhbnNwb3NlJ1xuaW1wb3J0IGdlbmVyYXRlIGZyb20gJ3V0aWwvZ2VuZXJhdGUnXG5cbi8qKlxuICogQGNsYXNzIE1hdHJpeFxuICogQGNsYXNzZGVzYyBNYXRyaXggYXBwbGljYXRpdmUgcHJvdmlkaW5nIHN0YW5kYXJkIG1hdHJpeCBvcGVyYXRpb25zXG4gKiBAc3VtbWFyeSBUaGUgTWF0cml4IGNsYXNzIHNob3VsZCBub3QgYmUgaW5zdGFudGlhdGVkIHdpdGggdGhlIG5ldyBrZXl3b3JkLiBJbnN0ZWFkIHVzZSB0aGUgTWF0cml4Lm9mIHN5bnRheCB0byBjcmVhdGUgYSBuZXcgTWF0cml4LiBVbmZvcnR1bmF0bHkganNkb2NzIGRvZXMgbm90IGFsbG93IGZvciB0aGUgY29uc3RydWN0b3IgdG8gYmUgaGlkZGVuLlxuICogQGhpZGVjb250cnVjdG9yXG4gKiBAc2VlIG9mXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKlxuICovXG5sZXQgTWF0cml4ID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl9fdmFsdWUgPSB2YWxcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZVxuICogQHR5cGUge3N0cmluZ31cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0udHlwZSA9PT0gJ01hdHJpeCdcbiAqL1xuTWF0cml4LnByb3RvdHlwZS50eXBlID0gJ01hdHJpeCdcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAcHJvcGVydHkge251bWJlcn0gcHJlY2lzaW9uXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICogbS5wcmVjaXNpb24gPT09IDRcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5wcmVjaXNpb24gPSA0XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIHNldFByZWNpc2lvblxuICogQHBhcmFtIHByZWNpc2lvbiB7bnVtYmVyfSBTZXQgdGhlIG51bWJlciBvZiBkZWNpbWFscyBmb3Igcm91bmRpbmdcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0uc2V0UHJlY2lzaW9uKDEwKVxuICogbS5wcmVjaXNpb24gPT09IDEwXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc2V0UHJlY2lzaW9uID0gZnVuY3Rpb24gKHByZWNpc2lvbikge1xuICB0aGlzLnByZWNpc2lvbiA9IHByZWNpc2lvblxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBpc1N5bW1ldHJpY1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIHRydWUgPT09IEEuaXNTeW1tZXRyaWMoKVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pc1N5bW1ldHJpYyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYSA9IHRoaXMuX192YWx1ZVxuICBjb25zdCBiID0gTWF0cml4LnRyYW5zcG9zZSh0aGlzKS5fX3ZhbHVlXG4gIHJldHVybiBlcXVhbHMoYSwgYilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgaXNTcXVhcmVcbiAqIEBkZXNjIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgY29udGFpbnMgYSBzcXVhcmUgTWF0cml4XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogdHJ1ZSA9PT0gQS5pc1NxdWFyZSgpXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmlzU3F1YXJlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZXF1YWxzKHRoaXMuZ2V0Q29scygpLCB0aGlzLmdldFJvd3MoKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgaXNPcnRob2dvbmFsXG4gKiBAcGFyYW0gTSB7TWF0cml4fGFycmF5fVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IFtbLTAuMzA5MiwgLTAuOTUxMF0sIFstMC45NTEwLCAwLjMwOTJdXVxuICogY29uc3QgQSA9IE1hdHJpeC5mcm9tQXJyYXkocmVzdWx0KVxuICogdHJ1ZSAgPT09IEEuaXNPcnRob2dvbmFsKClcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pc09ydGhvZ29uYWwgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IEF4QXQgPSB0aGlzLmRvdCh0aGlzLnRyYW5zcG9zZSgpKVxuICBjb25zdCBJID0gdGhpcy5pZGVudGl0eSgpXG4gIHJldHVybiBlcXVhbHMoQXhBdCwgSSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZ2V0Q29sc1xuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogQS5nZXRDb2xzKCkgID09PSAyXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmdldENvbHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fdmFsdWVbMF0ubGVuZ3RoXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGVxdWFsc1xuICogQHBhcmFtIE0ge01hdHJpeHxhcnJheX1cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYSA9IFtbMSwgMV0sIFsxLCAxXV1cbiAqIHZhciBBID0gTWF0cml4Lm9mKGEpXG4gKiB2YXIgQiA9IE1hdHJpeC5vZihhKVxuICogdHJ1ZSAgPT09IEEuZXF1YWxzKEIpXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIGVxdWFscyh0aGlzLl9fdmFsdWUsIE0uX192YWx1ZSB8fCBNKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBnZXRSb3dzXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiBBLmdldFJvd3MoKSAgLy8gMlxuICovXG5NYXRyaXgucHJvdG90eXBlLmdldFJvd3MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fdmFsdWUubGVuZ3RoXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGdldFNoYXBlXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0U2hhcGUoKSAgLy8gWzIsIDJdXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0U2hhcGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbdGhpcy5nZXRSb3dzKCksIHRoaXMuZ2V0Q29scygpXVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBvZlxuICogQGRlc2MgQ3JlYXRlcyBhIE1hdHJpeCBvYmplY3QgYW5kIGZsYXR0ZW5zIHRoZSBNYXRyaXhcbiAqIEBwYXJhbSB2YWwge2FycmF5fGZ1bmN0aW9ufSBBbiBhcnJheSBvZiBhcnJheXNcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKlxuICovXG5NYXRyaXgub2YgPSBmdW5jdGlvbiAodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBNYXRyaXgpIHJldHVybiB2YWxcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWxcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHJldHVybiBuZXcgTWF0cml4KHZhbClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgbWFwXG4gKiBAZGVzY3JpcHRpb24gTWFwcyBvdmVyIHRoZSByb3dzIG9mIHRoZSBtYXRyaXggdXNpbmcgYSBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIG0ubWFwKHggPT4geC5tYXAoeSA9PiB5KyAxKSlcbiAqIC8vIFtbMiwgMl0sIFsyLCAyXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihtYXAoZikodGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gbWFwXG4gKiBAZGVzY3JpcHRpb24gU3RhdGljIGZ1bmN0aW9uIHRoYXQgbWFwcyBvdmVyIHRoZSByb3dzIG9mIHRoZSBtYXRyaXggdXNpbmcgYSBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSBNIHtNYXRyaXh8YXJyYXl9IE1hdHJpeCBvciBhcnJheSB0byBtYXBcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSBNYXRyaXgubWFwKHg9ID4geC5tYXAoeSA9PiB5KyAxKSwgW1sxLCAxXSwgWzEsIDFdXSlcbiAqIC8vIFtbMiwgMl0sIFsyLCAyXV1cbiAqXG4gKi9cbk1hdHJpeC5tYXAgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLm1hcChmKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZm9sZFxuICogQGRlc2NyaXB0aW9uIFJlZHVjZSB0aGUgbWF0cml4IHJvd3MgdXNpbmcgYSByZWR1Y2UgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQSByZWR1Y2UvZm9sZCBmdW5jdGlvblxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gRmxhdHRlbiBNYXRyaXhcbiAqIE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKS5mb2xkKChwcmV2LCBuZXh0KSA9PiBwcmV2LmNvbmNhdChuZXh0KSlcbiAqIC8vIFsxLCAxLCAxLCAxXVxuICovXG5NYXRyaXgucHJvdG90eXBlLmZvbGQgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gTWF0cml4Lm9mKGZvbGQoZiwgW10pKHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgZnVuY3Rpb24gdG8gcmVkdWNlIHRoZSBtYXRyaXggcm93cyB1c2luZyBhIHJlZHVjZSBmdW5jdGlvblxuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBBIHJlZHVjZS9mb2xkIGZ1bmN0aW9uXG4gKiBAcGFyYW0gTSB7TWF0cml4fSBUaGUgTWF0cml4IHRvIHJlZHVjZVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG5cbiAqIC8vIFN1bSBvZiBhbGwgbWF0cml4IHZhbHVlc1xuICogY29uc3QgcmVkdWNlciA9IChwcmV2LCBuZXh0KSA9PiBOdW1iZXIocHJldikgKyBuZXh0LnJlZHVjZSgoYWNjLCB4KSA9PiBhY2MgKyB4LCAwKVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dXG4gKiBNYXRyaXguZm9sZChyZWR1Y2VyLCBBKVxuICogLy8gNFxuICovXG5NYXRyaXguZm9sZCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkuZm9sZChmKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgYXBcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWVzIGEgTWF0cml4IHRvIGEgZnVuY3Rpb25cbiAqIEBwYXJhbSBNIHtNYXRyaXh9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBmID0geCA9PiB4LnJlZHVjZSgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMiwgM10sIFs0LCA1LCA2XSwgWzcsIDgsIDldXSlcbiAqIE1hdHJpeC5vZihmKS5hcChNKVxuICogLy8gW1s2XSwgWzE1XSwgWzI0XVxuICovXG5NYXRyaXgucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5tYXAodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBhcFxuICogQGRlc2NyaXB0aW9uIEFwcGxpZXMgYSBNYXRyaXggdG8gYSBmdW5jdGlvblxuICogQHBhcmFtIGYge2Z1bmN0aW9ufVxuICogQHBhcmFtIE0ge01hdHJpeHxhcnJheX1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGYgPSB4ID0+IHgucmVkdWNlKChwcmV2LCBuZXh0KSA9PiBwcmV2ICsgbmV4dClcbiAqIE1hdHJpeC5hcChmLCBbWzEsIDIsIDNdLCBbNCwgNSwgNl0sIFs3LCA4LCA5XV0pXG4gKiAvLyBbWzZdLCBbMTVdLCBbMjRdXG4gKi9cbk1hdHJpeC5hcCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZikuYXAoTSlcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGNvbmNhdFxuICogQGRlc2NyaXB0aW9uIENvbmNhdGVuYXRlcyAyIE1hdHJpY2VzIHVzaW5nIGEgZnVuY3Rpb24gYXMgb3BlcmF0b3JcbiAqIEBwYXJhbSBNIHtNYXRyaXh9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1swLCAxLCAxXSwgWzIsIDMsIDRdXVxuICogY29uc3QgYiA9IFtbMiwgMiwgMl0sIFszLCAzLCAzXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqIGNvbnN0IE0gPSBBLmNvbmNhdChCKVxuICogLy8gW1swLCAxLCAxLCAyLCAyLCAyXSwgWzIsIDMsIDQsIDMsIDMsIDNdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAoTSwgZiA9IGNvbmNhdCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChmKE0pKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBjb25jYXRcbiAqIEBkZXNjcmlwdGlvbiBDb25jYXRlbmF0ZXMgMiBNYXRyaWNlcyB1c2luZyBhIGZ1bmN0aW9uIGFzIG9wZXJhdG9yXG4gKiBAcGFyYW0gQSB7TWF0cml4fVxuICogQHBhcmFtIEIge01hdHJpeH1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbWzAsIDEsIDFdLCBbMiwgMywgNF1dXG4gKiBjb25zdCBiID0gW1syLCAyLCAyXSwgWzMsIDMsIDNdXVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihiKVxuICogY29uc3QgTSA9IE1hdHJpeC5jb25jYXQoQSwgQilcbiAqIC8vIFtbMCwgMSwgMSwgMiwgMiwgMl0sIFsyLCAzLCA0LCAzLCAzLCAzXV1cbiAqXG4gKi9cbk1hdHJpeC5jb25jYXQgPSBjdXJyeShmdW5jdGlvbiAoQSwgQiwgZiA9IGNvbmNhdCkge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLm1hcChmKEIpKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm4gYW4gZW1wdHkgTWF0cml4IGZyb20gYW4gZXhpc3RpbmcgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChlbXB0eSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm4gYW4gZW1wdHkgTWF0cml4IGZyb20gYW4gZXhpc3RpbmcgTWF0cml4XG4gKiBAcGFyYW0gcm93cyB7bnVtYmVyfVxuICogQHBhcmFtIGNvbHMge251bWJlcn1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5lbXB0eSA9IGN1cnJ5KGZ1bmN0aW9uIChyb3dzID0gMCwgY29scyA9IDApIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpIC8vIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4gIHJldHVybiBNYXRyaXgub2YobSkubWFwKGVtcHR5KVxufSlcblxuLy8gIyMjIyAjIyMjICMjIyMgLy9cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgaWRlbnRpdHlcbiAqIEBkZXNjIFJldHVybnMgYW4gaWRlbnRpdHkgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1sxLCAyLCAzXSwgWzQsIDUsIDZdXVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQWlkZW50aXR5ID0gQS5pZGVudGl0eSgpXG4gKiAvLyBbWzEsIDAsIDBdLCBbMCwgMSwgMF1dXG4gKlxuKi9cbk1hdHJpeC5wcm90b3R5cGUuaWRlbnRpdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YoaWRlbnRpdHkpLmFwKHRoaXMpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIGlkZW50aXR5XG4gKiBAZGVzYyBSZXR1cm5zIGFuIGlkZW50aXR5IG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5pZGVudGl0eSgzLCAyKVxuICogLy8gW1sxLCAwLCAwXSwgWzAsIDEsIDBdXVxuICpcbiAqL1xuTWF0cml4LmlkZW50aXR5ID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpIC8vIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4gIHJldHVybiBNYXRyaXgub2YoaWRlbnRpdHkpLmFwKG0pXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGNvbWJpbmVcbiAqIEBzZWUgTWF0cml4LmNvbmNhdFxuICogQHBhcmFtIE1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY29tYmluZSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuY29uY2F0KE1hdHJpeC5vZihNKSwgY29uY2F0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBjb21iaW5lXG4gKiBAc2VlIE1hdHJpeC5jb25jYXRcbiAqIEBwYXJhbSBNXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXguY29tYmluZSA9IGZ1bmN0aW9uIChBLCBCKSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkuY29uY2F0KE1hdHJpeC5vZihCKSwgY29uY2F0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBkb3RcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuIDIgbWF0cmljZXNcbiAqIEBwYXJhbSBNXG4gKiBAcGFyYW0gZlxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQ3JlYXRlIG1hdHJpeFxuICogY29uc3QgbSA9IE1hdHJpeC5vZihbWzEsIDJdLCBbMywgNF1dKVxuICpcbiAqIC8vIEdlbmVyYXRlIGlkZW50aXR5IG1hdHJpeFxuICogY29uc3QgSSAgPSBtLmlkZW50aXR5KCkgLy8gW1sxLCAwXSwgWzAsIDFdXVxuICpcbiAqIGlmKG0uZG90KEkpLmVxdWFscyhtKSkge1xuICogICAgY29uc29sZS5sb2coJ0RvdCBwcm9kdWN0IHdpdGggaWRlbnRpdHkgbWF0cml4IHJldHVybnMgdGhlIHNhbWUgbWF0cml4JylcbiAqIH1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5jb25jYXQoTWF0cml4Lm9mKE0pLCBkb3QodGhpcy5wcmVjaXNpb24pKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBkb3RcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuIDIgbWF0cmljZXNcbiAqIEBwYXJhbSBNXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGEgPSBbWzEsIDIsIDNdLCBbNCwgNSwgNl1dXG4gKiBjb25zdCBiID0gW1s3LCA4XSwgWzksIDEwXSwgWzExLCAxMl1dXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihiKVxuICpcbiAqIE1hdHJpeC5kb3QoQSwgQikgLy8gW1s1OCwgNjRdLCBbMTM5LCAxNTRdXVxuICpcbiAqL1xuTWF0cml4LmRvdCA9IGZ1bmN0aW9uIChBLCBCKSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkuZG90KE1hdHJpeC5vZihCKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZmlsbFxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCB0aGUgcHJvdmlkZWQgbWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZlxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsMiwzXSwgWzMsMiwxXSwgWzQsNSw2XV0pLmZpbGwoeCA9PiA0MilcbiAqIC8vIFtbNDIsNDIsNDJdLCBbNDIsNDIsNDJdLCBbNDIsNDIsNDJdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tYXAobWFwKHggPT4gZih4KSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIHplcm9zXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHplcm9zXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsMiwzXSwgWzMsMiwxXSwgWzQsNSw2XV0pLnplcm9zKClcbiAqIC8vIFtbMCwwLDBdLCBbMCwwLDBdLCBbMCwwLDBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS56ZXJvcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKHggPT4gMClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gemVyb3NcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggemVyb3NcbiAqIEBwYXJhbSByb3dzIHtudW1iZXJ9IERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIGNvbHMge251bWJlcn0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lnplcm9zKDMsIDMpXG4gKiAvLyBbWzAsMCwwXSwgWzAsMCwwXSwgWzAsMCwwXV1cbiAqXG4gKi9cbk1hdHJpeC56ZXJvcyA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKVxuICByZXR1cm4gTWF0cml4Lm9mKG0pLmZpbGwoeCA9PiAwKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBvbmVzXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIG9uZXNcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLDIsM10sIFszLDIsMV0sIFs0LDUsNl1dKS5vbmVzKClcbiAqIC8vIFtbMSwxLDFdLCBbMSwxLDFdLCBbMSwxLDFdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5vbmVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoeCA9PiAxKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBvbmVzXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIG9uZXNcbiAqIEBwYXJhbSByb3dzIHtudW1iZXJ9IERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIGNvbHMge251bWJlcn0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9uZXMoMSwgMSlcbiAqIC8vIFtbMSwxLDFdLCBbMSwxLDFdLCBbMSwxLDFdXVxuICpcbiAqL1xuTWF0cml4Lm9uZXMgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKHggPT4gMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgcmFuZG9tXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHJhbmRvbSB2YWx1ZXNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmID0gZSA9PiBNYXRoLnJhbmRvbSgpICogMiAtIDFdXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJhbmRvbSA9IGZ1bmN0aW9uIChmID0gZSA9PiBNYXRoLnJhbmRvbSgpICogMiAtIDEpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKGYpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIHJhbmRvbVxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCByYW5kb20gbnVtYmVyc1xuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBGdW5jdGlvbiB3aGljaCByZXR1cm5zIHJhbmRvbSB2YWx1ZXMuIERlZmF1bHQgcmFuZG9tIHZhbHVlcyBhcmUgYmV0d2VlbiAtMSBhbmQgMVxuICogQHBhcmFtIHJvd3Mge251bWJlcn0gRGVmaW5lcyB0aGUgcm93cyBvZiB0aGUgbWF0cml4XG4gKiBAcGFyYW0gY29scyB7bnVtYmVyfSBEZWZpbmVzIHRoZSBjb2x1bW5zIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5yYW5kb20gPSBmdW5jdGlvbiAoZiA9IGUgPT4gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSksIHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpXG4gIHJldHVybiBNYXRyaXgub2YobSkuZmlsbChmKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciB0b0FycmF5XG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBhcnJheSBmcm9tIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3ZhbHVlLm1hcChyb3cgPT4gcm93Lm1hcChjb2wgPT4gY29sKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgY2xvbmVcbiAqIEBkZXNjIFJldHVybnMgYSBjbG9uZSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4LmZyb21BcnJheSh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGZyb21BcnJheVxuICogQGRlc2MgUmV0dXJucyBhIE1hdHJpeCBmcm9tIGFuIGFycmF5XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbk1hdHJpeC5mcm9tQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBNYXRyaXgub2YobWFwKHJvdyA9PiBtYXAoY29sID0+IGNvbCkocm93KSkoYXJyKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgdHJhbnNwb3NlXG4gKiBAZGVzYyBSZXR1cm5zIGEgdHJhbnNwb3NlZCBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoWy0xLCAyXSwgWzMsIDRdLCBbLTgsIDJdKVxuICogY29uc3QgYiA9IEEudHJhbnNwb3NlKCkudG9BcnJheSgpXG4gKiAvLyByZXR1cm5zIFtbLTEsIDMsLThdLCBbMiwgNCwgMl1dXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudHJhbnNwb3NlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKGZvbGQodHJhbnNwb3NlLCBbXSwgdGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gdHJhbnNwb3NlXG4gKiBAZGVzYyBSZXR1cm5zIGEgdHJhbnNwb3NlZCBNYXRyaXhcbiAqIEBwYXJhbSBNIHtNYXRyaXh8YXJyYXl9IEEgTWF0cml4IG9yIGEgbWF0cml4IGFycmF5XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gWy0xLCAyXSwgWzMsIDRdLCBbLTgsIDJdXG4gKiBjb25zdCBiID0gTWF0cml4LnRyYW5zcG9zZShhKS50b0FycmF5KClcbiAqIC8vIHJldHVybnMgW1stMSwgMywtOF0sIFsyLCA0LCAyXV1cbiAqL1xuTWF0cml4LnRyYW5zcG9zZSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkudHJhbnNwb3NlKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGFkZFxuICogQGluc3RhbmNlXG4gKiBAcGFyYW0gTSB7TWF0cml4fG51bWJlcn0gQWRkIGEgTWF0cml4IG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5hZGQoMSkgLy8gW1s2LCA1XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLmFkZChCKSAvLyBbWzEwLCAxMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChNKSB7XG4gIGlmIChNIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpICE9PSBNLmdldENvbHMoKSB8fCB0aGlzLmdldFJvd3MoKSAhPT0gTS5nZXRSb3dzKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3QgYWRkJylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKChyb3csIGlkeCkgPT4gbWFwKCh2YWwsIGpkeCkgPT4gdmFsICsgTS5fX3ZhbHVlW2lkeF1bamR4XSkocm93KSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tYXAobWFwKHggPT4geCArIE0pKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQG1lbWJlciBzdWJ0cmFjdFxuICogQGluc3RhbmNlXG4gKiBAcGFyYW0gTSB7TWF0cml4fG51bWJlcn0gU3VidHJhY3QgYSBNYXRyaXggb3IgYSBudW1iZXJcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLnN1YnRyYWN0KDEpIC8vIFtbNCwgMl1dXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKFtbNSwgNV1dKVxuICogQi5zdWJ0cmFjdChCKSAvLyBbWzAsIDBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uIChNKSB7XG4gIGlmIChNIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpICE9PSBNLmdldENvbHMoKSB8fCB0aGlzLmdldFJvd3MoKSAhPT0gTS5nZXRSb3dzKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3Qgc3VidHJhY3QnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAoKHJvdywgaWR4KSA9PiBtYXAoKHZhbCwgamR4KSA9PiB2YWwgLSBNLl9fdmFsdWVbaWR4XVtqZHhdKShyb3cpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm1hcChtYXAoeCA9PiB4IC0gTSkpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIG11bHRpcGx5XG4gKiBAaW5zdGFuY2VcbiAqIEBkZXNjIE11dGxpcGx5IGEgc2NhbGFyIG9yIGEgbXRyYWl4IHdpdGggYSBtYXRyaXguIFRocm93cyBhbiBlcnJvciBpZiB0aGUgbXVsdGlwbGljYXRpb24gaXMgbm90IHBvc3NpYmxlLlxuICogQHBhcmFtIE0ge01hdHJpeHxudW1iZXJ9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5tdWx0aXBseSgyKSAvLyBbWzEwLCA4XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLm11bHRpcGx5KEIpIC8vIFtbMjUsIDI1XV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICBjb25zb2xlLmxvZygnVXNlIHN0YXRpYyBtZXRob2QgXFwnZG90XFwnIHRvIGRvIG1hdHJpeCBtdWx0aXBsaWNhdGlvbicpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IGNyZWF0ZSBoYWRhbWFyZCBwcm9kdWN0JylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKChyb3csIGlkeCkgPT4gbWFwKChjb2wsIGpkeCkgPT4gY29sICogTS5fX3ZhbHVlW2lkeF1bamR4XSkocm93KSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tYXAobWFwKHggPT4geCAqIE0pKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQG1lbWJlciBhZGRpdGl2ZWludmVyc2VcbiAqIEBpbnN0YW5jZVxuICogQGRlc2MgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtYXRyaXggb2J0YWluZWQgYnkgY2hhbmdpbmcgdGhlIHNpZ24gb2YgZXZlcnkgbWF0cml4IGVsZW1lbnQuIFRoZSBhZGRpdGl2ZSBpbnZlcnNlIG9mIG1hdHJpeCBBIGlzIHdyaXR0ZW4g4oCTQS5cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LC01XSwgWy00LCA0XV0pXG4gKiBjb25zdCBtaW51c0EgPSBBLmFkZGl0aXZlaW52ZXJzZSgpXG4gKiAvLyBbWy01LCA1XSwgWzQsIC00XV1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5hZGRpdGl2ZWludmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubXVsdGlwbHkoLTEpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQG1lbWJlciBoYWRhbWFyZFxuICogQGluc3RhbmNlXG4gKiBAc2VlIG11bHRpcGx5XG4gKiBAcGFyYW0gTVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEuaGFkYW1hcmQoMikgLy8gW1sxMCwgOF1dXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKFtbNSwgNV1dKVxuICogQi5oYWRhbWFyZChCKSAvLyBbWzI1LCAyNV1dXG5cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5oYWRhbWFyZCA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubXVsdGlwbHkoTSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgbHVcbiAqIEBkZXNjIENhbGN1bGF0ZXMgTFUgZGVjb21wb3NpdGlvbiBvZiB0aGUgY3VycmVudCBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXhbXX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gW1szLCAtNywgLTIsIDJdLCBbLTMsIDUsIDEsIDBdLCBbNiwgLTQsIDAsIC01XSwgWy05LCA1LCAtNSwgMTJdXVxuICogY29uc3QgQSA9IE1hdHJpeC5mcm9tQXJyYXkocmVzdWx0KVxuICogY29uc3QgbHUgPSBBLmx1KClcbiAqIC8vIEwuX192YWx1ZSA9IFsgWyAxLCAwLCAwLCAwIF0sIFsgLTEsIDEsIDAsIDAgXSwgWyAyLCAtNSwgMSwgMCBdLCBbIC0zLCA4LCAzLCAxIF0gXVxuICogLy8gVS5fX3ZhbHVlID0gIFsgWyAzLCAtNywgLTIsIDIgXSwgWyAwLCAtMiwgLTEsIDIgXSwgWyAwLCAwLCAtMSwgMSBdLCBbIDAsIDAsIDAsIC0xIF0gXVxuICogTWF0cml4LmRvdChsdVswXSwgbHVbMV0pIC8vIHJldHVybnMgY2xvbmUgb2YgQVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5sdSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbiA9IHRoaXMuZ2V0Um93cygpXG4gIGNvbnN0IHRvbCA9IDFlLTZcbiAgY29uc3QgQSA9IHRoaXMuY2xvbmUoKVxuICBjb25zdCBMID0gdGhpcy56ZXJvcygpXG4gIGNvbnN0IFUgPSB0aGlzLnplcm9zKClcblxuICBmb3IgKGxldCBrID0gMDsgayA8IG47ICsraykge1xuICAgIGlmIChNYXRoLmFicyhBLl9fdmFsdWVba11ba10pIDwgdG9sKSB0aHJvdyBFcnJvcignQ2Fubm90IHByb2NlZWQgd2l0aG91dCBhIHJvdyBleGNoYW5nZScpXG4gICAgTC5fX3ZhbHVlW2tdW2tdID0gMVxuICAgIGZvciAobGV0IGkgPSBrICsgMTsgaSA8IG47ICsraSkge1xuICAgICAgTC5fX3ZhbHVlW2ldW2tdID0gQS5fX3ZhbHVlW2ldW2tdIC8gQS5fX3ZhbHVlW2tdW2tdXG4gICAgICBmb3IgKGxldCBqID0gayArIDE7IGogPCBuOyArK2opIHtcbiAgICAgICAgQS5fX3ZhbHVlW2ldW2pdID0gQS5fX3ZhbHVlW2ldW2pdIC0gTC5fX3ZhbHVlW2ldW2tdICogQS5fX3ZhbHVlW2tdW2pdXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGwgPSBrOyBsIDwgbjsgKytsKSB7XG4gICAgICBVLl9fdmFsdWVba11bbF0gPSBBLl9fdmFsdWVba11bbF1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtMLCBVXVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBycmVmXG4gKiBAcmV0dXJucyB7TWF0cml4fGFycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgQSA9IE1hdHJpeC5vZihbWy0xLCAxXSwgWy0xLCAwXSwgWzAsIC0xXSwgWy0xLCAtMl1dKVxuICogQS5ycmVmKCkgLy8gIFsgWyAxLCAwIF0sIFsgLTAsIDEgXSwgWyAwLCAwIF0sIFsgMCwgMCBdIF1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5ycmVmID0gZnVuY3Rpb24gKCkge1xuICBsZXQgbGVhZCA9IDBcbiAgY29uc3QgcmVzdWx0TWF0cml4ID0gdGhpcy5jbG9uZSgpXG5cbiAgZm9yIChsZXQgciA9IDA7IHIgPCB0aGlzLmdldFJvd3MoKTsgKytyKSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpIDw9IGxlYWQpIHtcbiAgICAgIHJldHVybiByZXN1bHRNYXRyaXhcbiAgICB9XG4gICAgbGV0IGkgPSByXG4gICAgd2hpbGUgKHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2xlYWRdID09PSAwKSB7XG4gICAgICArK2lcbiAgICAgIGlmICh0aGlzLmdldFJvd3MoKSA9PT0gaSkge1xuICAgICAgICBpID0gclxuICAgICAgICArK2xlYWRcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29scygpID09PSBsZWFkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdE1hdHJpeFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRtcCA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldXG4gICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV0gPSByZXN1bHRNYXRyaXguX192YWx1ZVtyXVxuICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdID0gdG1wXG5cbiAgICBsZXQgdmFsID0gcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bbGVhZF1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0Q29scygpOyArK2opIHtcbiAgICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdW2pdIC89IHZhbFxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRSb3dzKCk7ICsraSkge1xuICAgICAgaWYgKGkgPT09IHIpIGNvbnRpbnVlXG4gICAgICB2YWwgPSByZXN1bHRNYXRyaXguX192YWx1ZVtpXVtsZWFkXVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdldENvbHMoKTsgKytqKSB7XG4gICAgICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2pdIC09IHZhbCAqIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdW2pdXG4gICAgICB9XG4gICAgfVxuICAgIGxlYWQrK1xuICB9XG4gIHJldHVybiByZXN1bHRNYXRyaXhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgc29sdmVcbiAqIEBwYXJhbSBiXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIFNvbHZlIHhBID0gYlxuICogLy8gNXggKyB5ICA9IDdcbiAqIC8vIDN4IC0gNHkgPSAxOFxuICogLy8gU29sdXRpb24gZm9yIHggYW5kIHk6XG4gKiAvLyB4ID0gMlxuICogLy8geSA9IC0zXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDFdLCBbMywgLTRdXSlcbiAqIGNvbnN0IHNvbHZlQSA9IEEuc29sdmUoWzcsIDE4XSkgLy8gWzIsIC0zXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zb2x2ZSA9IGZ1bmN0aW9uIChiKSB7XG4gIGNvbnN0IEEgPSB0aGlzLmNsb25lKClcbiAgY29uc3QgTFUgPSBBLmx1KClcbiAgY29uc3QgTCA9IExVWzBdXG4gIGNvbnN0IFUgPSBMVVsxXVxuICBjb25zdCBuID0gdGhpcy5nZXRSb3dzKClcbiAgbGV0IHMgPSAwXG4gIGNvbnN0IGMgPSBbXVxuICBjb25zdCB4ID0gW11cblxuICBmb3IgKGxldCBrID0gMDsgayA8IG47ICsraykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgazsgKytqKSB7XG4gICAgICBzID0gcyArIEwuX192YWx1ZVtrXVtqXSAqIGNbal1cbiAgICB9XG4gICAgY1trXSA9IGJba10gLSBzXG4gICAgcyA9IDBcbiAgfVxuICBmb3IgKGxldCBhID0gbiAtIDE7IGEgPiAtMTsgLS1hKSB7XG4gICAgbGV0IHQgPSAwXG4gICAgZm9yIChsZXQgYiA9IGEgKyAxOyBiIDwgbjsgKytiKSB7XG4gICAgICB0ID0gdCArIFUuX192YWx1ZVthXVtiXSAqIHhbYl1cbiAgICB9XG4gICAgeFthXSA9IChjW2FdIC0gdCkgLyBVLl9fdmFsdWVbYV1bYV1cbiAgfVxuICByZXR1cm4geFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgaW52ZXJzZVxuICogQGluc3RhbmNlXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsyLCA0XV0pLmludmVyc2UoKVxuICogLy8gWyBbIDIsIC0wLjUgXSwgWyAtMSwgMC41IF0gXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pbnZlcnNlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBID0gdGhpcy5jbG9uZSgpXG4gIGNvbnN0IEkgPSBBLmlkZW50aXR5KClcbiAgY29uc3QgSW52ID0gQS5jb25jYXQoSSkucnJlZigpXG5cbiAgY29uc3QgcmVzdWx0ID0gSW52Ll9fdmFsdWUucmVkdWNlKChyZXN1bHQsIHgsIGlkeCkgPT4ge1xuICAgIGNvbnN0IGhhbGYgPSB4Lmxlbmd0aCAvIDJcbiAgICByZXN1bHQucHVzaCh4LnNsaWNlKGhhbGYsIHgubGVuZ3RoKSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIFtdKVxuICByZXR1cm4gTWF0cml4Lm9mKHJlc3VsdClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIHJhbmtcbiAqIEBpbnN0YW5jZVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5yYW5rID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBycmVmID0gdGhpcy5ycmVmKClcbiAgbGV0IHJlc3VsdCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBycmVmLmdldENvbHMoKTsgKytpKSB7XG4gICAgcmVzdWx0ICs9IHJyZWYuX192YWx1ZVtpXVtpXVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGRpbWVuc2lvblxuICogQGluc3RhbmNlXG4gKiBAc2VlIHJhbmtcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGltZW5zaW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yYW5rKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGRpYWdcbiAqIEBpbnN0YW5jZVxuICogQGRlc2MgUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4Lm9uZXMoMywgMykuZGlhZygpXG4gKiAvLyBbMSwgMSwgMV1cbiAqXG4gKiBjb25zdCBkaWFnMCA9IE1hdHJpeC56ZXJvcyg1LCA1KS5kaWFnKClcbiAqIC8vIFswLCAwLCAwLCAwLCAwXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kaWFnID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4LCBpZHgpID0+IHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdCh4W2lkeF0pXG4gIH0pKFtdKSh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIGRpYWdcbiAqIEBkZXNjIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHBhcmFtIE0ge01hdHJpeHxBcnJheX0gTWF0cml4IGZyb20gd2hpY2ggdG8gcmV0dXJuIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5kaWFnKFtbMiwgMV0sIFsxLCA1XV0pXG4gKiAvLyBbMiwgNV1cbiAqXG4gKi9cbk1hdHJpeC5kaWFnID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5kaWFnKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGRpYWdwcm9kdWN0XG4gKiBAaW5zdGFuY2VcbiAqIEBkZXNjIFJldHVybnMgdGhlIHByb2R1Y3Qgb2YgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4Lm9uZXMoMywgMykuZGlhZ3Byb2R1Y3QoKVxuICogLy8gMVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLmRpYWdwcm9kdWN0KClcbiAqIC8vIDBcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGlhZ3Byb2R1Y3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGlkeCkgPT4ge1xuICAgIGFjYyAqPSB4W2lkeF1cbiAgICByZXR1cm4gYWNjXG4gIH0pKDEpKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gZGlhZ3Byb2R1Y3RcbiAqIEBkZXNjIFJldHVybnMgdGhlIHByb2R1Y3Qgb2YgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEBwYXJhbSBNIHtNYXRyaXh8QXJyYXl9IE1hdHJpeCBmcm9tIHdoaWNoIHRvIHJldHVybiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LmRpYWdwcm9kdWN0KFtbMiwgMV0sIFsxLCA1XV0pXG4gKiAvLyAxMFxuICpcbiAqL1xuTWF0cml4LmRpYWdwcm9kdWN0ID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5kaWFncHJvZHVjdCgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQG1lbWJlciBzdW1cbiAqIEBpbnN0YW5jZVxuICogQGRlc2MgUmV0dXJucyB0aGUgc3VtIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIE1hdHJpeFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5zdW0oKVxuICogLy8gOVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLnN1bSgpXG4gKiAvLyAwXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnN1bSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZvbGQoKGFjYywgeCkgPT4ge1xuICAgIGFjYyArPSBmb2xkKChwcmV2LCBuZXh0KSA9PiBwcmV2ICsgbmV4dCkoMCkoeClcbiAgICByZXR1cm4gYWNjXG4gIH0pKDApKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gc3VtXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIHZhbHVlcyBpbiB0aGUgTWF0cml4XG4gKiBAcGFyYW0gTSB7TWF0cml4fEFycmF5fSBNYXRyaXggZnJvbSB3aGljaCB0byByZXR1cm4gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5zdW0oW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIDlcbiAqXG4gKi9cbk1hdHJpeC5zdW0gPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLnN1bSgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQG1lbWJlciBrcm9uZWNrZXJcbiAqIEBpbnN0YW5jZVxuICogQGRlc2MgVGhlIEtyb25lY2tlciBwcm9kdWN0IGlzIGFuIG9wZXJhdGlvbiBvbiB0d28gbWF0cmljZXMgb2YgYXJiaXRyYXJ5IHNpemUgcmVzdWx0aW5nIGluIGEgYmxvY2sgbWF0cml4LlxuICogQHBhcmFtIE0ge01hdHJpeH0gVGhlIHJpZ2h0IHNpZGUgTWF0cml4IG9mIHRoZSBwcm9kdWN0ICh0aGlzIOKKlyBNKVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5rcm9uZWNrZXIgPSBmdW5jdGlvbiAoTSkge1xuICBjb25zdCBtID0gdGhpcy5nZXRSb3dzKClcbiAgY29uc3QgbiA9IHRoaXMuZ2V0Q29scygpXG4gIGNvbnN0IHAgPSBNLmdldFJvd3MoKVxuICBjb25zdCBxID0gTS5nZXRDb2xzKClcblxuICBjb25zdCBsZWZ0ID0gdGhpcy5fX3ZhbHVlXG4gIGNvbnN0IHJpZ2h0ID0gTS5fX3ZhbHVlXG5cbiAgY29uc3QgZnJhbWUgPSBnZW5lcmF0ZShtICogcCwgbiAqIHEpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBwOyBrKyspIHtcbiAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBxOyBsKyspIHtcbiAgICAgICAgICBmcmFtZVtwICogaSArIGtdW3EgKiBqICsgbF0gPSBsZWZ0W2ldW2pdICogcmlnaHRba11bbF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gTWF0cml4Lm9mKGZyYW1lKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBrcm9uZWNrZXJcbiAqIEBkZXNjIFRoZSBLcm9uZWNrZXIgcHJvZHVjdCBpcyBhbiBvcGVyYXRpb24gb24gdHdvIG1hdHJpY2VzIG9mIGFyYml0cmFyeSBzaXplIHJlc3VsdGluZyBpbiBhIGJsb2NrIG1hdHJpeC5cbiAqIEBwYXJhbSBBIHtNYXRyaXh9IFRoZSBsZWZ0IHNpZGUgTWF0cml4IG9mIHRoZSBwcm9kdWN0IChBIOKKlyBCKVxuICogQHBhcmFtIEIge01hdHJpeH0gVGhlIHJpZ2h0IHNpZGUgTWF0cml4IG9mIHRoZSBwcm9kdWN0IChBIOKKlyBCKVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4Lmtyb25lY2tlciA9IGZ1bmN0aW9uIChBLCBCKSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkua3JvbmVja2VyKEIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJpeFxuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5pbXBvcnQgY29uY2F0IGZyb20gJ2Z1bi5qcy9zcmMvY29uY2F0J1xuXG4vKipcbiAqIEBmdW5jdGlvbiBjb25jYXRcbiAqIEBwYXJhbSBNIHtNYXRyaXh9XG4gKiBAcGFyYW0gbSB7QXJyYXl9XG4gKiBAcGFyYW0gaWR4IHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIChNLCBtLCBpZHgpIHtcbiAgcmV0dXJuIGNvbmNhdChtLCBNLl9fdmFsdWVbaWR4XSlcbn0pXG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcbmltcG9ydCBmb2xkIGZyb20gJ2Z1bi5qcy9zcmMvZm9sZCdcbmltcG9ydCBtYXAgZnJvbSAnZnVuLmpzL3NyYy9tYXAnXG5pbXBvcnQgcm91bmQgZnJvbSAnLi9yb3VuZCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gZG90XG4gKiBAcGFyYW0gQiB7TWF0cml4fVxuICogQHBhcmFtIGEge0FycmF5fVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoZGVjaW1hbHMsIEIsIGEpID0+IG1hcCgoaXRlbSwgaSkgPT4ge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4LCBqKSA9PiB7XG4gICAgYWNjICs9IHJvdW5kKHggKiBCLl9fdmFsdWVbal1baV0sIGRlY2ltYWxzKVxuICAgIHJldHVybiBhY2NcbiAgfSwgMCkoYSlcbn0pKEIuX192YWx1ZVswXSkpXG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkobSA9PiBbXSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGdlbmVyYXRlXG4gKiBAZGVzYyBHZW5lcmF0b3IgZnVuY3Rpb24gZm9yIGEgbWF0cml4IGFycmF5LCB2YWx1ZXMgYXJlIHNldCB0byB1bmRlZmluZWRcbiAqIEBwYXJhbSByb3dzIHtudW1iZXJ9XG4gKiBAcGFyYW0gY29scyB7bnVtYmVyfVxuICogQHJldHVybnMge2FueVtdW119XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChyb3dzLCBjb2xzKSA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShyb3dzKSkubWFwKHggPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoY29scykpKVxuIiwiaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gaWRlbnRpdHlcbiAqIEBkZXNjIENyZWF0ZXMgYW4gaWRlbnRpeSBtYXRyaXggZnJvbSBhbiBlbXB0eSBhcnJheVxuICogQHBhcmFtIG0ge0FycmF5fVxuICogQHBhcmFtIGlkeCB7bnVtYmVyfVxuICogQHJldHVybiB7TWF0cml4fVxuICovXG5leHBvcnQgZGVmYXVsdCAobSwgaWR4KSA9PiBtYXAoKHJvd3MsIGpkeCkgPT4gKGlkeCA9PT0gamR4KSAqIDEpKG0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiByb3VuZFxuICogQHBhcmFtIHZhbHVlIHtudW1iZXJ9XG4gKiBAcGFyYW0gZGVjaW1hbHMge251bWJlcn1cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdW5kICh2YWx1ZSwgZGVjaW1hbHMpIHtcbiAgcmV0dXJuIE51bWJlcihNYXRoLnJvdW5kKHZhbHVlICsgJ2UnICsgZGVjaW1hbHMpICsgJ2UtJyArIGRlY2ltYWxzKVxufVxuIiwiaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcbmltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuXG4vKipcbiAqIEBmdW5jdGlvbiB0cmFuc3Bvc2VcbiAqIEBkZXNjIFRyYW5zcG9zZXMgYSBhcnJheSBvZiBhcnJheXMgdXNpbmcgdGhlIE1hdHJpeC5tYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBtIHtBcnJheX1cbiAqIEBwYXJhbSBpZHgge251bWJlcn1cbiAqIEByZXR1cm4ge01hdHJpeH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHByZXYsIG5leHQpID0+IG1hcCgoaXRlbSwgaSkgPT4gKHByZXZbaV0gfHwgW10pLmNvbmNhdChuZXh0W2ldKSkobmV4dCkpXG4iXSwic291cmNlUm9vdCI6IiJ9