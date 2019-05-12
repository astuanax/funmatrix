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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9fcHJpdmF0ZS9jdXJyeTEuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FuZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2Jvb2xlYW4vaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY3VycnkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2RhdGUvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2V4aXN0cy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaWRlbnRpY2FsLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2l0ZXJhdG9yL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXAvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9ub3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL251bWJlci9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2lzTmFuLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3QvZXF1YWxzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3QvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb3IuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3N0cmluZy9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3N0cmluZy9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvdHlwZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL21hdHJpeC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9kb3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9nZW5lcmF0ZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL3JvdW5kLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC90cmFuc3Bvc2UuanMiXSwibmFtZXMiOlsiTWF0cml4IiwidmFsIiwiX192YWx1ZSIsInByb3RvdHlwZSIsInR5cGUiLCJwcmVjaXNpb24iLCJzZXRQcmVjaXNpb24iLCJpc1N5bW1ldHJpYyIsImEiLCJiIiwidHJhbnNwb3NlIiwiaXNPcnRob2dvbmFsIiwiQXhBdCIsImRvdCIsIkkiLCJpZGVudGl0eSIsImdldENvbHMiLCJsZW5ndGgiLCJlcXVhbHMiLCJNIiwiZ2V0Um93cyIsImdldFNoYXBlIiwib2YiLCJtYXAiLCJmIiwiZm9sZCIsImFwIiwiY29uY2F0IiwiQSIsIkIiLCJlbXB0eSIsInJvd3MiLCJjb2xzIiwibSIsImNvbWJpbmUiLCJmaWxsIiwieCIsInplcm9zIiwib25lcyIsInJhbmRvbSIsImUiLCJNYXRoIiwidG9BcnJheSIsInJvdyIsImNvbCIsImNsb25lIiwiZnJvbUFycmF5IiwiYXJyIiwiYWRkIiwiRXJyb3IiLCJpZHgiLCJqZHgiLCJzdWJ0cmFjdCIsIm11bHRpcGx5IiwiY29uc29sZSIsImxvZyIsImFkZGl0aXZlaW52ZXJzZSIsImhhZGFtYXJkIiwibHUiLCJuIiwidG9sIiwiTCIsIlUiLCJrIiwiYWJzIiwiaSIsImoiLCJsIiwicnJlZiIsImxlYWQiLCJyZXN1bHRNYXRyaXgiLCJyIiwidG1wIiwic29sdmUiLCJMVSIsInMiLCJjIiwidCIsImludmVyc2UiLCJJbnYiLCJyZXN1bHQiLCJyZWR1Y2UiLCJoYWxmIiwicHVzaCIsInNsaWNlIiwicmFuayIsImRpbWVuc2lvbiIsImRpYWciLCJhY2MiLCJkZWNpbWFscyIsIml0ZW0iLCJBcnJheSIsImFwcGx5Iiwicm91bmQiLCJ2YWx1ZSIsIk51bWJlciIsInByZXYiLCJuZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsWUFBWTtBQUNaO0FBQzJCOztBQUVaLHFIQUFLO0FBQ3BCO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDZkY7QUFBQTtB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QUFpQztBQUM5QyxTQUFPTSxNQUFNLENBQUN0RCxJQUFJLENBQUNvRCxLQUFMLENBQVdDLEtBQUssR0FBRyxHQUFSLEdBQWNMLFFBQXpCLElBQXFDLElBQXJDLEdBQTRDQSxRQUE3QyxDQUFiO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JEOztBQUNBOzs7O0FBRUE7Ozs7Ozs7ZUFPZSxvQkFBTSxVQUFDTyxJQUFELEVBQU9DLElBQVA7QUFBQSxTQUFnQixrQkFBSSxVQUFDUCxJQUFELEVBQU96QixDQUFQO0FBQUEsV0FBYSxDQUFDK0IsSUFBSSxDQUFDL0IsQ0FBRCxDQUFKLElBQVcsRUFBWixFQUFnQnRDLE1BQWhCLENBQXVCc0UsSUFBSSxDQUFDaEMsQ0FBRCxDQUEzQixDQUFiO0FBQUEsR0FBSixFQUFrRGdDLElBQWxELENBQWhCO0FBQUEsQ0FBTixDIiwiZmlsZSI6IkBhc3R1YW5heC9mdW5tYXRyaXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBhc3R1YW5heC9mdW5tYXRyaXhcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGFzdHVhbmF4L2Z1bm1hdHJpeFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAYXN0dWFuYXgvZnVubWF0cml4XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21hdHJpeC5qc1wiKTtcbiIsIi8qKlxuICogUmV0dXJucyBhIGN1cnJpZWQgZnVuY3Rpb24gd2l0aCBhcml0eSAxXG4gKiBAZnVuY3Rpb24gY3VycnkxXG4gKiBAcHJpdmF0ZVxuICogQHNpbmNlIHYxLjAuMlxuICoqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeTEgKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkIChhKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDBcbiAgICAgID8gdGhpc1xuICAgICAgOiBmbihhKVxuICB9XG59XG4iLCIvKipcbiAqIENoZWNrcyBpZiBib3RoIHByZWRpY2F0ZXMgYXJlIHRydWVcbiAqXG4gKiBAZnVuY3Rpb24gYW5kXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIGJvdGggcHJlZGljYXRlcyBhcmUgdHJ1ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoeCwgeSkgLT4gYm9vbGVhblxuICogQHBhcmFtIHsqfSB4IC0gQSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7Kn0geSAtIEEgcHJlZGljYXRlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFuZCAoeCwgeSkge1xuICByZXR1cm4geCAmJiB5XG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGFycmF5Q29uY2F0XG4gKiBAcGFyYW0gYTFcbiAqIEBwYXJhbSBhMlxuICogQHJldHVybnMge1RbXX1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQoYSwgYilcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gZXF1YWxzQXJyYXlcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiBmb3IgZGVlcCBjb21wYXJpc29uIG9mIGFycmF5c1xuICogQHBhcmFtIHthfSB4IC0gT2JqZWN0IHRvIGNvbXBhcmUgb2YgdHlwZSBhXG4gKiBAcGFyYW0ge2F9IHkgLSBPYmplY3QgeCB0byBjb21wYXJlIHdpdGggb2JqZWN0IHhcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBub3QgZnJvbSAnLi4vbm90J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFsc0FycmF5ICh4LCB5KSB7XG4gIGlmICh4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm90KGVxdWFscyh4W2ldLCB5W2ldKSkpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgbWFwcGluZyBvdmVyIHRoZSBwcm92aWRlZCBhcnJheSBhbmQgY2FsbGluZyBhbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHBhcmFtIHtjYkZ1bmN0aW9ufSBjYiAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIG1vZGlmeSB0aGUgaXRlbVxuICogQHBhcmFtIHsqfSBpbml0IC0gSW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtBcnJheX0gYSAtIEFycmF5IHdpdGggaXRlbXMgdG8gbW9kaWZ5IGJ5IHRoZSBjYiBmdW5jdGlvblxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYWxpYXMgcmVkdWNlXG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gZm9sZChhZGQsIDAsIFsxLDEsMV0pXG4gKiAvLyByZXN1bHQgPSAzXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgY2JGdW5jdGlvblxuICogQHBhcmFtIHsqfSByIC0gQWNjdW11bGF0b3Igd2hpY2ggYWNjdW11bGF0ZXMgdGhlIGNhbGxiYWNrJ3MgcmV0dXJuIHZhbHVlc1xuICogQHBhcmFtIHsqfSBpdGVtIC0gdGhlIGN1cnJlbnQgZWxlbWVudCBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIHRoZSBpbmRleSBvZiB0aGUgaXRlbSBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBUaGUgaW5pdGlhbCBhcnJheVxuICogQHJldHVybiB7Kn1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9IGluaXRcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2IociwgYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IE9iamVjdCB0byB2ZXJpZml5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzQXJyYXkoWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IHRydWVcbiAqL1xuXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdBcnJheScpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBtYXBcbiAqIEBkZXNjcmlwdGlvbiBNYXBzIG92ZXIgYW4gYXJyYXkgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICogQHNpbmNlIHYxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiAgY29uc3QgcmVzdWx0ID0gbWFwKGlkZW50aXR5LCBbMCwyLDNdKVxuICogIC8vIHJlc3VsdCA9IFswLDIsM11cbiAqICBjb25zdCBhZGQyID0gYWRkKDIpXG4gKiAgY29uc3QgcmVzdWx0ID0gbWFwKGFkZDIsIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzIsNCw1XVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobClcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByW2ldID0gY2IoYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQ3VycmllZCBmdW5jdGlvbiB0aGF0IHZlcmlmaWVzIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudCBpcyBhIGJvb2xlYW5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGlzXG4gKiBAZGVzY3JpcHRpb24gQ3VycmllZCBmdW5jdGlvbiB0aGF0IHZlcmlmaWVzIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudCBpcyBhIGJvb2xlYW5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7Kn0gSXRlbSB0byB2ZXJpZnlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdCb29sZWFuJylcbiIsIi8qKlxuICogQ29uY2F0ZW5hdGVzIDIgaXRlbXMgdG9nZXRoZXJcbiAqXG4gKiBAZnVuY3Rpb24gY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQ29uY2F0ZW5hdGVzIDIgaXRlbXMgdG9nZXRoZXJcbiAqIEBzaW5jZSB2MS4wLjRcbiAqIEBwYXJhbSB7YX0gYSAtIExlZnQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvblxuICogQHBhcmFtIHthfSBiIC0gcmlnaHQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvblxuICogQHJldHVybiB7YX0gQ29uY2F0ZW5hdGVkIGl0ZW1cbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlDb25jYXQgZnJvbSAnLi9hcnJheS9jb25jYXQnXG5pbXBvcnQgc3RyaW5nQ29uY2F0IGZyb20gJy4vc3RyaW5nL2NvbmNhdCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIGNvbnN0IHR5cGVNYXAgPSB7XG4gICAgJ1N0cmluZyc6IHN0cmluZ0NvbmNhdCxcbiAgICAnQXJyYXknOiBhcnJheUNvbmNhdFxuICB9XG4gIHJldHVybiB0eXBlTWFwW3R5cGUoYSldKGEsIGIpXG59KVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qKlxuICogQGZ1bmN0aW9uIGN1cnJ5XG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJ5IChmdW4pIHtcbiAgY29uc3QgYXJnc2xlbiA9IGZ1bi5sZW5ndGhcblxuICBpZiAoYXJnc2xlbiA9PT0gMCkge1xuICAgIHJldHVybiBmdW5cbiAgfVxuICByZXR1cm4gY3JlYXRlUmVjdXJzZXIoW10pXG5cbiAgZnVuY3Rpb24gcmVjdXJzZSAoYWNjLCBhcmdzKSB7XG4gICAgY29uc3QgX2FjYyA9IGFjYy5jb25jYXQoYXJncylcbiAgICByZXR1cm4gX2FjYy5sZW5ndGggPCBhcmdzbGVuXG4gICAgICA/IGNyZWF0ZVJlY3Vyc2VyKF9hY2MpXG4gICAgICA6IGZ1bi5hcHBseSh0aGlzLCBfYWNjKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUmVjdXJzZXIgKGFjYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjdXJzZShhY2MsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnRGF0ZScpXG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGVtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZW1wdHkgZXF1aXZhbGVudCBvZiB0aGUgZmlyc3QgYXJndW1lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbXB0eSAoeCkge1xuICByZXR1cm4gbmV3IHguY29uc3RydWN0b3IoKVxufTtcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gZXF1YWxzXG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGVxdWFsaXR5IG9mIDIgaXRlbXNcbiAqIEBwYXJhbSB7Kn0geCAtIExlZnQgc2lkZSBvZiB0aGUgZXF1YWxpdHkgY2hlY2tcbiAqIEBwYXJhbSB7Kn0geSAtIFJpZ2h0IHNpZGUgb2YgdGhlIGVxdWFsaXR5IGNoZWNrXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBuYW4gPSBOdW1iZXIuTmFOXG4gKiBlcXVhbChuYW4sIG5hbikgLy8gcmV0dXJucyB0cnVlXG4gKlxuICogY29uc3QgYXJyMSA9IFswLCAxLCAyLCAzXVxuICogY29uc3QgYXJyMiA9IFtudWxsLCAxLCAyLCAzXVxuICogZXF1YWxzKGFycjEsIGFycjIpIC8vIHJldHVybnMgZmFsc2VcbiAqXG4gKiBlcXVhbHMobmV3IE9iamVjdCh7J2EnOiAwLCAnYic6IDF9KSwgeydhJzogMCwgJ2InOiAxfSkgLy8gdHJ1ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xuaW1wb3J0IGlkZW50aWNhbCBmcm9tICcuL2lkZW50aWNhbCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcbmltcG9ydCBub3QgZnJvbSAnLi9ub3QnXG5pbXBvcnQgb3IgZnJvbSAnLi9vcidcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL29iamVjdC9pcydcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vYXJyYXkvaXMnXG5pbXBvcnQgaXNCb29sZWFuIGZyb20gJy4vYm9vbGVhbi9pcydcbmltcG9ydCBpc051bWJlciBmcm9tICcuL251bWJlci9pcydcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuL3N0cmluZy9pcydcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi9kYXRlL2lzJ1xuaW1wb3J0IGVxdWFsc0FycmF5IGZyb20gJy4vYXJyYXkvZXF1YWxzJ1xuaW1wb3J0IGVxdWFsc09iamVjdCBmcm9tICcuL29iamVjdC9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFscyAoeCwgeSkge1xuICBpZiAoaWRlbnRpY2FsKHgsIHkpKSByZXR1cm4gdHJ1ZVxuXG4gIGlmICh0eXBlKHgpICE9PSB0eXBlKHkpKSByZXR1cm4gZmFsc2VcblxuICBpZiAob3Iobm90KGV4aXN0cyh4KSksIG5vdChleGlzdHMoeSkpKSkgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKHguY29uc3RydWN0b3IgIT09IHkuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZVxuXG4gIGlmIChpc1N0cmluZyh4KSB8fCBpc0Jvb2xlYW4oeCkgfHwgaXNOdW1iZXIoeCkgfHwgaXNEYXRlKHgpKSB7XG4gICAgcmV0dXJuIGlkZW50aWNhbCh4LnZhbHVlT2YoKSwgeS52YWx1ZU9mKCkpXG4gIH1cbiAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzQXJyYXkoeCwgeSlcbiAgfSBlbHNlIGlmIChpc09iamVjdCh4KSkge1xuICAgIHJldHVybiBlcXVhbHNPYmplY3QoeCwgeSlcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBleGlzdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhpc3RzICh4KSB7XG4gIHJldHVybiAhKHggPT0gbnVsbClcbn07XG4iLCIvKipcbiAqIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlbVxuICpcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBpdGVtXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnICgoYSwgYiwgYywgYSkg4oaSIGEpIOKGkiBhIOKGkiBbYl0g4oaSIGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIHJlY2VpdmVzIDQgdmFsdWVzOiB0aGUgYWNjdW11bGF0b3IsIHRoZSBpdGVtLCB0aGUgaW5kZXgsIGFuZCB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gYSBpcyB0aGUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHsqfSBbYl0gdGhlIGFycmF5IGxpa2UgaXRlbSB0byBpdGVyYXRlIG92ZXJcbiAqIEByZXR1cm4geyp9IGEgaXMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlXG4gKiovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGFycmF5Rm9sZCBmcm9tICcuL2FycmF5L2ZvbGQnXG5pbXBvcnQgb2JqZWN0Rm9sZCBmcm9tICcuL29iamVjdC9mb2xkJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBjb25zdCB0eXBlTWFwID0ge1xuICAgICdPYmplY3QnOiBvYmplY3RGb2xkLFxuICAgICdBcnJheSc6IGFycmF5Rm9sZFxuICB9XG4gIC8vIGlmIChhLm5leHQpIHtcbiAgLy8gICByZXR1cm4gaXRlcmFibGVGb2xkKGNiLCBpbml0LCBhKVxuICAvLyB9XG4gIC8vIGlmICh0eXBlKFN5bWJvbCkgIT09ICd1bmRlZmluZWQnICYmIGFbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAvLyAgIHJldHVybiBpdGVyYWJsZUZvbGQoY2IsIGluaXQsIGFbU3ltYm9sLml0ZXJhdG9yXSgpKVxuICAvLyB9XG4gIHJldHVybiB0eXBlTWFwW3R5cGUoYSldKGNiLCBpbml0LCBhKVxufSlcblxuLy8gZnVuY3Rpb24gaXRlcmFibGVGb2xkIChjYiwgYWNjLCBnZW4pIHtcbi8vICAgbGV0IHN0ZXAgPSBnZW4ubmV4dCgpXG4vLyAgIHdoaWxlICghc3RlcC5kb25lKSB7XG4vLyAgICAgYWNjID0gY2IoYWNjLCBzdGVwLnZhbHVlKVxuLy8gICAgIHN0ZXAgPSBnZW4ubmV4dCgpXG4vLyAgIH1cbi8vICAgcmV0dXJuIGFjY1xuLy8gfVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBpZGVudGljYWxcbiAqIEBkZXNjcmlwdGlvbiBjaGVja3MgZm9yIGlkZW50aW50aWNhbCBpdGVtc1xuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBpc05hbiBmcm9tICcuL251bWJlci9pc05hbidcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaWRlbnRpY2FsICh4LCB5KSB7XG4gIGlmICh4ID09PSAwICYmIHkgPT09IDApIHtcbiAgICByZXR1cm4gMSAvIHggPT09IDEgLyB5XG4gIH1cbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAhIShpc05hbih4KSAmJiBpc05hbih5KSlcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBpc1xuICogQGRlc2NyaXB0aW9uIFZlcmlmaWVzIHRoZSB0eXBlIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudFxuICpcbiAqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaXMgKEN0b3IsIHZhbCkge1xuICByZXR1cm4gdHlwZSh2YWwpID09PSBDdG9yXG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5jb25zdCBpc0Z1bmN0aW9uID0gaXMoJ0Z1bmN0aW9uJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJdGVyIChpdGVyKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSlcbn1cbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIEl0ZXJhdG9yIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjNcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhdG9yfSBhXG4gKiBAcmV0dXJuIHtJdGVyYXRvcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYWxsYmFjaywgaXRlcmF0b3IpIHtcbiAgbGV0IHIgPSBbXVxuICBmb3IgKGxldCBuZXh0VmFsdWUgPSBpdGVyYXRvci5uZXh0KCk7IG5leHRWYWx1ZS5kb25lICE9PSB0cnVlOyBuZXh0VmFsdWUgPSBpdGVyYXRvci5uZXh0KCkpIHtcbiAgICByLnB1c2goY2FsbGJhY2soaXRlcmF0b3IudmFsdWUoKSkpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBpdGVyYWJsZSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIHdoaWNoIG1hcHMgb3ZlciBhbiBpdGVyYWJsZS5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IGIgLT4gYlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlNYXAgZnJvbSAnLi9hcnJheS9tYXAnXG5pbXBvcnQgb2JqZWN0TWFwIGZyb20gJy4vb2JqZWN0L21hcCdcbmltcG9ydCBtYXBNYXAgZnJvbSAnLi9tYXAvbWFwJ1xuaW1wb3J0IHN0cmluZ01hcCBmcm9tICcuL3N0cmluZy9tYXAnXG5pbXBvcnQgaXRlcmF0b3JNYXAgZnJvbSAnLi9pdGVyYXRvci9tYXAnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5pbXBvcnQgaXNJdGVyYXRvciBmcm9tICcuL2l0ZXJhdG9yL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIHN3aXRjaCAodHlwZShhKSkge1xuICAgIGNhc2UgJ0Z1bmN0aW9uJzpcbiAgICAgIHJldHVybiBjdXJyeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYi5jYWxsKHRoaXMsIGEuYXBwbHkodGhpcywgYXJndW1lbnRzKSlcbiAgICAgIH0pXG4gICAgY2FzZSAnT2JqZWN0JzpcbiAgICAgIHJldHVybiBvYmplY3RNYXAoY2IsIGEpXG4gICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgIHJldHVybiBzdHJpbmdNYXAoY2IsIGEpXG4gICAgY2FzZSAnTWFwJzpcbiAgICAgIHJldHVybiBtYXBNYXAoY2IsIGEpXG4gICAgY2FzZSAnQXJyYXknOlxuICAgICAgcmV0dXJuIGFycmF5TWFwKGNiLCBhKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNJdGVyYXRvcihhKVxuICAgICAgICA/IGl0ZXJhdG9yTWFwKGNiLCBhKVxuICAgICAgICA6IGFycmF5TWFwKGNiLCBhKVxuICB9XG59KVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYSBNYXAgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7TWFwfSBhXG4gKiBAcmV0dXJuIHtNYXB9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vZW1wdHknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIGEuZm9yRWFjaCgodiwgaywgbWFwKSA9PiB7XG4gICAgci5zZXQoaywgY2IodiwgaywgbWFwKSlcbiAgfSlcbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBub3RcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG5vdCAoeCkge1xuICByZXR1cm4gIXhcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ051bWJlcicpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBpc05hTlxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiBudW1iZXIgaXMgTkFOXG5cbiAqL1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXMnXG5pbXBvcnQgYW5kIGZyb20gJy4uL2FuZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOYW4gKHgpIHtcbiAgcmV0dXJuIGFuZChpc051bWJlcih4KSwgaXNOYU4oeCkpXG59O1xuIiwiLyoqXG5cbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4uL2V4aXN0cydcbmltcG9ydCBub3QgZnJvbSAnLi4vbm90J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KCh4LCB5KSA9PiB7XG4gIGZvciAobGV0IGtleVggaW4geCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3BcbiAgICBpZiAobm90KGVxdWFscyh4W2tleVhdLCB5W2tleVhdKSkpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZm9yIChsZXQga2V5WSBpbiB5KSB7XG4gICAgaWYgKG5vdChleGlzdHMoeFtrZXlZXSkpICYmIGV4aXN0cyh5W2tleVldKSkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBwcml2YXRlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBvKSB7XG4gIGNvbnN0IGsgPSBrZXlzKG8pXG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGsubGVuZ3RoXG4gIGxldCByID0gT2JqZWN0KGluaXQpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciA9IGNiKHIsIG9ba1tpXV0sIGtbaV0sIG8pXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcblxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdPYmplY3QnKVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBvd24ga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBbYl1cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQHJldHVybiB7QXJyYXl9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGtleXMgKGEpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKE9iamVjdChhKSlcbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBvYmplY3QgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vZW1wdHknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgayA9IGtleXMoYSlcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltrW2ldXSA9IGNiKGFba1tpXV0sIGtbaV0sIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBvclxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBvbmUgb3IgdGhlIG90aGVyIGlzIHRydWVcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9yICh4LCB5KSB7XG4gIHJldHVybiB4IHx8IHlcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gc3RyaW5nQ29uY2F0XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7IC8vIHVzZSBmdW5jdGlvbigpLCBhcnJvdyBmdW5jdGlvbiBkb2Vzbid0IGJpbmQgYXJndW1lbnRzXG4gIHJldHVybiBTdHJpbmcoYSkgKyBTdHJpbmcoYilcbn1cbiIsIi8qKlxuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ1N0cmluZycpXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhIHN0cmluZyBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgbGV0IHIgPSAnJ1xuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHIgKz0gY2IoYS5jaGFyQXQoaSksIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiB0eXBlXG4gKi9cbmltcG9ydCBjdXJyeTEgZnJvbSAnLi9fcHJpdmF0ZS9jdXJyeTEnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5MShmdW5jdGlvbiB0eXBlICh4KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkuc2xpY2UoOCwgLTEpXG59KVxuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5pbXBvcnQgbWFwIGZyb20gJ2Z1bi5qcy9zcmMvbWFwJ1xuaW1wb3J0IGZvbGQgZnJvbSAnZnVuLmpzL3NyYy9mb2xkJ1xuaW1wb3J0IGVxdWFscyBmcm9tICdmdW4uanMvc3JjL2VxdWFscydcbmltcG9ydCBjb25jYXQgZnJvbSAndXRpbC9jb25jYXQnXG5pbXBvcnQgZW1wdHkgZnJvbSAndXRpbC9lbXB0eSdcbmltcG9ydCBkb3QgZnJvbSAndXRpbC9kb3QnXG5pbXBvcnQgaWRlbnRpdHkgZnJvbSAndXRpbC9pZGVudGl0eSdcbmltcG9ydCB0cmFuc3Bvc2UgZnJvbSAndXRpbC90cmFuc3Bvc2UnXG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSAndXRpbC9nZW5lcmF0ZSdcblxuLyoqXG4gKiBAY2xhc3MgTWF0cml4XG4gKiBAY2xhc3NkZXNjIE1hdHJpeCBhcHBsaWNhdGl2ZSBwcm92aWRpbmcgc3RhbmRhcmQgbWF0cml4IG9wZXJhdGlvbnNcbiAqIEBzdW1tYXJ5IFRoZSBNYXRyaXggY2xhc3Mgc2hvdWxkIG5vdCBiZSBpbnN0YW50aWF0ZWQgd2l0aCB0aGUgbmV3IGtleXdvcmQuIEluc3RlYWQgdXNlIHRoZSBNYXRyaXgub2Ygc3ludGF4IHRvIGNyZWF0ZSBhIG5ldyBNYXRyaXguIFVuZm9ydHVuYXRseSBqc2RvY3MgZG9lcyBub3QgYWxsb3cgZm9yIHRoZSBjb25zdHJ1Y3RvciB0byBiZSBoaWRkZW4uXG4gKiBAaGlkZWNvbnRydWN0b3JcbiAqIEBzZWUgb2ZcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqXG4gKi9cbmxldCBNYXRyaXggPSBmdW5jdGlvbiAodmFsKSB7XG4gIHRoaXMuX192YWx1ZSA9IHZhbFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlXG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICogbS50eXBlID09PSAnTWF0cml4J1xuICovXG5NYXRyaXgucHJvdG90eXBlLnR5cGUgPSAnTWF0cml4J1xuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwcmVjaXNpb25cbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKiBtLnByZWNpc2lvbiA9PT0gNFxuICovXG5NYXRyaXgucHJvdG90eXBlLnByZWNpc2lvbiA9IDRcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgc2V0UHJlY2lzaW9uXG4gKiBAcGFyYW0gcHJlY2lzaW9uIHtudW1iZXJ9IFNldCB0aGUgbnVtYmVyIG9mIGRlY2ltYWxzIGZvciByb3VuZGluZ1xuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICogbS5zZXRQcmVjaXNpb24oMTApXG4gKiBtLnByZWNpc2lvbiA9PT0gMTBcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zZXRQcmVjaXNpb24gPSBmdW5jdGlvbiAocHJlY2lzaW9uKSB7XG4gIHRoaXMucHJlY2lzaW9uID0gcHJlY2lzaW9uXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGlzU3ltbWV0cmljXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogdHJ1ZSA9PT0gQS5pc1N5bW1ldHJpYygpXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmlzU3ltbWV0cmljID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhID0gdGhpcy5fX3ZhbHVlXG4gIGNvbnN0IGIgPSBNYXRyaXgudHJhbnNwb3NlKHRoaXMpLl9fdmFsdWVcbiAgcmV0dXJuIGVxdWFscyhhLCBiKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBpc09ydGhvZ29uYWxcbiAqIEBwYXJhbSBNIHtNYXRyaXh8YXJyYXl9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gW1stMC4zMDkyLCAtMC45NTEwXSwgWy0wLjk1MTAsIDAuMzA5Ml1dXG4gKiBjb25zdCBBID0gTWF0cml4LmZyb21BcnJheShyZXN1bHQpXG4gKiB0cnVlICA9PT0gQS5pc09ydGhvZ29uYWwoKVxuICovXG5NYXRyaXgucHJvdG90eXBlLmlzT3J0aG9nb25hbCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgQXhBdCA9IHRoaXMuZG90KHRoaXMudHJhbnNwb3NlKCkpXG4gIGNvbnN0IEkgPSB0aGlzLmlkZW50aXR5KClcbiAgcmV0dXJuIGVxdWFscyhBeEF0LCBJKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBnZXRDb2xzXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiBBLmdldENvbHMoKSAgPT09IDJcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0Q29scyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZVswXS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZXF1YWxzXG4gKiBAcGFyYW0gTSB7TWF0cml4fGFycmF5fVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhID0gW1sxLCAxXSwgWzEsIDFdXVxuICogdmFyIEEgPSBNYXRyaXgub2YoYSlcbiAqIHZhciBCID0gTWF0cml4Lm9mKGEpXG4gKiB0cnVlICA9PT0gQS5lcXVhbHMoQilcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gZXF1YWxzKHRoaXMuX192YWx1ZSwgTS5fX3ZhbHVlIHx8IE0pXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGdldFJvd3NcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0Um93cygpICAvLyAyXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0Um93cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZ2V0U2hhcGVcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogQS5nZXRTaGFwZSgpICAvLyBbMiwgMl1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5nZXRTaGFwZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFt0aGlzLmdldFJvd3MoKSwgdGhpcy5nZXRDb2xzKCldXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIG9mXG4gKiBAZGVzYyBDcmVhdGVzIGEgTWF0cml4IG9iamVjdCBhbmQgZmxhdHRlbnMgdGhlIE1hdHJpeFxuICogQHBhcmFtIHZhbCB7YXJyYXl8ZnVuY3Rpb259IEFuIGFycmF5IG9mIGFycmF5c1xuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqXG4gKi9cbk1hdHJpeC5vZiA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIE1hdHJpeCkgcmV0dXJuIHZhbFxuICBpZiAodGhpcyBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbFxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcmV0dXJuIG5ldyBNYXRyaXgodmFsKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBtYXBcbiAqIEBkZXNjcmlwdGlvbiBNYXBzIG92ZXIgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeCB1c2luZyBhIG1hcCBmdW5jdGlvblxuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBBbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogbS5tYXAoeCA9PiB4Lm1hcCh5ID0+IHkrIDEpKVxuICogLy8gW1syLCAyXSwgWzIsIDJdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gTWF0cml4Lm9mKG1hcChmKSh0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBtYXBcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgZnVuY3Rpb24gdGhhdCBtYXBzIG92ZXIgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeCB1c2luZyBhIG1hcCBmdW5jdGlvblxuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBBbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHBhcmFtIE0ge01hdHJpeHxhcnJheX0gTWF0cml4IG9yIGFycmF5IHRvIG1hcFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9IE1hdHJpeC5tYXAoeD0gPiB4Lm1hcCh5ID0+IHkrIDEpLCBbWzEsIDFdLCBbMSwgMV1dKVxuICogLy8gW1syLCAyXSwgWzIsIDJdXVxuICpcbiAqL1xuTWF0cml4Lm1hcCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkubWFwKGYpXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmVkdWNlIHRoZSBtYXRyaXggcm93cyB1c2luZyBhIHJlZHVjZSBmdW5jdGlvblxuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBBIHJlZHVjZS9mb2xkIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBGbGF0dGVuIE1hdHJpeFxuICogTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pLmZvbGQoKHByZXYsIG5leHQpID0+IHByZXYuY29uY2F0KG5leHQpKVxuICogLy8gWzEsIDEsIDEsIDFdXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZm9sZCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZm9sZChmLCBbXSkodGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBmdW5jdGlvbiB0byByZWR1Y2UgdGhlIG1hdHJpeCByb3dzIHVzaW5nIGEgcmVkdWNlIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259IEEgcmVkdWNlL2ZvbGQgZnVuY3Rpb25cbiAqIEBwYXJhbSBNIHtNYXRyaXh9IFRoZSBNYXRyaXggdG8gcmVkdWNlXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcblxuICogLy8gU3VtIG9mIGFsbCBtYXRyaXggdmFsdWVzXG4gKiBjb25zdCByZWR1Y2VyID0gKHByZXYsIG5leHQpID0+IE51bWJlcihwcmV2KSArIG5leHQucmVkdWNlKChhY2MsIHgpID0+IGFjYyArIHgsIDApXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV1cbiAqIE1hdHJpeC5mb2xkKHJlZHVjZXIsIEEpXG4gKiAvLyA0XG4gKi9cbk1hdHJpeC5mb2xkID0gY3VycnkoZnVuY3Rpb24gKGYsIE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5mb2xkKGYpXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBhcFxuICogQGRlc2NyaXB0aW9uIEFwcGxpZXMgYSBNYXRyaXggdG8gYSBmdW5jdGlvblxuICogQHBhcmFtIE0ge01hdHJpeH1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGYgPSB4ID0+IHgucmVkdWNlKChwcmV2LCBuZXh0KSA9PiBwcmV2ICsgbmV4dClcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAyLCAzXSwgWzQsIDUsIDZdLCBbNywgOCwgOV1dKVxuICogTWF0cml4Lm9mKGYpLmFwKE0pXG4gKiAvLyBbWzZdLCBbMTVdLCBbMjRdXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYXAgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLm1hcCh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIGFwXG4gKiBAZGVzY3JpcHRpb24gQXBwbGllcyBhIE1hdHJpeCB0byBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259XG4gKiBAcGFyYW0gTSB7TWF0cml4fGFycmF5fVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZiA9IHggPT4geC5yZWR1Y2UoKHByZXYsIG5leHQpID0+IHByZXYgKyBuZXh0KVxuICogTWF0cml4LmFwKGYsIFtbMSwgMiwgM10sIFs0LCA1LCA2XSwgWzcsIDgsIDldXSlcbiAqIC8vIFtbNl0sIFsxNV0sIFsyNF1cbiAqL1xuTWF0cml4LmFwID0gY3VycnkoZnVuY3Rpb24gKGYsIE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihmKS5hcChNKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQ29uY2F0ZW5hdGVzIDIgTWF0cmljZXMgdXNpbmcgYSBmdW5jdGlvbiBhcyBvcGVyYXRvclxuICogQHBhcmFtIE0ge01hdHJpeH1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbWzAsIDEsIDFdLCBbMiwgMywgNF1dXG4gKiBjb25zdCBiID0gW1syLCAyLCAyXSwgWzMsIDMsIDNdXVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihiKVxuICogY29uc3QgTSA9IEEuY29uY2F0KEIpXG4gKiAvLyBbWzAsIDEsIDEsIDIsIDIsIDJdLCBbMiwgMywgNCwgMywgMywgM11dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uIChNLCBmID0gY29uY2F0KSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubWFwKGYoTSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIGNvbmNhdFxuICogQGRlc2NyaXB0aW9uIENvbmNhdGVuYXRlcyAyIE1hdHJpY2VzIHVzaW5nIGEgZnVuY3Rpb24gYXMgb3BlcmF0b3JcbiAqIEBwYXJhbSBBIHtNYXRyaXh9XG4gKiBAcGFyYW0gQiB7TWF0cml4fVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYSA9IFtbMCwgMSwgMV0sIFsyLCAzLCA0XV1cbiAqIGNvbnN0IGIgPSBbWzIsIDIsIDJdLCBbMywgMywgM11dXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKGEpXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKGIpXG4gKiBjb25zdCBNID0gTWF0cml4LmNvbmNhdChBLCBCKVxuICogLy8gW1swLCAxLCAxLCAyLCAyLCAyXSwgWzIsIDMsIDQsIDMsIDMsIDNdXVxuICpcbiAqL1xuTWF0cml4LmNvbmNhdCA9IGN1cnJ5KGZ1bmN0aW9uIChBLCBCLCBmID0gY29uY2F0KSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkubWFwKGYoQikpXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBlbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybiBhbiBlbXB0eSBNYXRyaXggZnJvbSBhbiBleGlzdGluZyBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubWFwKGVtcHR5KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBlbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybiBhbiBlbXB0eSBNYXRyaXggZnJvbSBhbiBleGlzdGluZyBNYXRyaXhcbiAqIEBwYXJhbSByb3dzIHtudW1iZXJ9XG4gKiBAcGFyYW0gY29scyB7bnVtYmVyfVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LmVtcHR5ID0gY3VycnkoZnVuY3Rpb24gKHJvd3MgPSAwLCBjb2xzID0gMCkge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scykgLy8gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkocm93cykpLm1hcCh4ID0+IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGNvbHMpKSlcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5tYXAoZW1wdHkpXG59KVxuXG4vLyAjIyMjICMjIyMgIyMjIyAvL1xuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBpZGVudGl0eVxuICogQGRlc2MgUmV0dXJucyBhbiBpZGVudGl0eSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbWzEsIDIsIDNdLCBbNCwgNSwgNl1dXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKGEpXG4gKiBjb25zdCBBaWRlbnRpdHkgPSBBLmlkZW50aXR5KClcbiAqIC8vIFtbMSwgMCwgMF0sIFswLCAxLCAwXV1cbiAqXG4qL1xuTWF0cml4LnByb3RvdHlwZS5pZGVudGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihpZGVudGl0eSkuYXAodGhpcylcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gaWRlbnRpdHlcbiAqIEBkZXNjIFJldHVybnMgYW4gaWRlbnRpdHkgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4LmlkZW50aXR5KDMsIDIpXG4gKiAvLyBbWzEsIDAsIDBdLCBbMCwgMSwgMF1dXG4gKlxuICovXG5NYXRyaXguaWRlbnRpdHkgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scykgLy8gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkocm93cykpLm1hcCh4ID0+IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGNvbHMpKSlcbiAgcmV0dXJuIE1hdHJpeC5vZihpZGVudGl0eSkuYXAobSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgY29tYmluZVxuICogQHNlZSBNYXRyaXguY29uY2F0XG4gKiBAcGFyYW0gTVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jb21iaW5lID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5jb25jYXQoTWF0cml4Lm9mKE0pLCBjb25jYXQpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIGNvbWJpbmVcbiAqIEBzZWUgTWF0cml4LmNvbmNhdFxuICogQHBhcmFtIE1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5jb21iaW5lID0gZnVuY3Rpb24gKEEsIEIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5jb25jYXQoTWF0cml4Lm9mKEIpLCBjb25jYXQpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGRvdFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGRvdCBwcm9kdWN0IGJldHdlZW4gMiBtYXRyaWNlc1xuICogQHBhcmFtIE1cbiAqIEBwYXJhbSBmXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBDcmVhdGUgbWF0cml4XG4gKiBjb25zdCBtID0gTWF0cml4Lm9mKFtbMSwgMl0sIFszLCA0XV0pXG4gKlxuICogLy8gR2VuZXJhdGUgaWRlbnRpdHkgbWF0cml4XG4gKiBjb25zdCBJICA9IG0uaWRlbnRpdHkoKSAvLyBbWzEsIDBdLCBbMCwgMV1dXG4gKlxuICogaWYobS5kb3QoSSkuZXF1YWxzKG0pKSB7XG4gKiAgICBjb25zb2xlLmxvZygnRG90IHByb2R1Y3Qgd2l0aCBpZGVudGl0eSBtYXRyaXggcmV0dXJucyB0aGUgc2FtZSBtYXRyaXgnKVxuICogfVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kb3QgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmNvbmNhdChNYXRyaXgub2YoTSksIGRvdCh0aGlzLnByZWNpc2lvbikpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIGRvdFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGRvdCBwcm9kdWN0IGJldHdlZW4gMiBtYXRyaWNlc1xuICogQHBhcmFtIE1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICogY29uc3QgYSA9IFtbMSwgMiwgM10sIFs0LCA1LCA2XV1cbiAqIGNvbnN0IGIgPSBbWzcsIDhdLCBbOSwgMTBdLCBbMTEsIDEyXV1cbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKGEpXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKGIpXG4gKlxuICogTWF0cml4LmRvdChBLCBCKSAvLyBbWzU4LCA2NF0sIFsxMzksIDE1NF1dXG4gKlxuICovXG5NYXRyaXguZG90ID0gZnVuY3Rpb24gKEEsIEIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5kb3QoTWF0cml4Lm9mKEIpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBmaWxsXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHRoZSBwcm92aWRlZCBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBmXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwyLDNdLCBbMywyLDFdLCBbNCw1LDZdXSkuZmlsbCh4ID0+IDQyKVxuICogLy8gW1s0Miw0Miw0Ml0sIFs0Miw0Miw0Ml0sIFs0Miw0Miw0Ml1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChtYXAoeCA9PiBmKHgpKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgemVyb3NcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggemVyb3NcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwyLDNdLCBbMywyLDFdLCBbNCw1LDZdXSkuemVyb3MoKVxuICogLy8gW1swLDAsMF0sIFswLDAsMF0sIFswLDAsMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnplcm9zID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoeCA9PiAwKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiB6ZXJvc1xuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCB6ZXJvc1xuICogQHBhcmFtIHJvd3Mge251bWJlcn0gRGVmaW5lcyB0aGUgcm93cyBvZiB0aGUgbWF0cml4XG4gKiBAcGFyYW0gY29scyB7bnVtYmVyfSBEZWZpbmVzIHRoZSBjb2x1bW5zIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXguemVyb3MoMywgMylcbiAqIC8vIFtbMCwwLDBdLCBbMCwwLDBdLCBbMCwwLDBdXVxuICpcbiAqL1xuTWF0cml4Lnplcm9zID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpXG4gIHJldHVybiBNYXRyaXgub2YobSkuZmlsbCh4ID0+IDApXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIG9uZXNcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggb25lc1xuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsMiwzXSwgWzMsMiwxXSwgWzQsNSw2XV0pLm9uZXMoKVxuICogLy8gW1sxLDEsMV0sIFsxLDEsMV0sIFsxLDEsMV1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLm9uZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuZmlsbCh4ID0+IDEpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIG9uZXNcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggb25lc1xuICogQHBhcmFtIHJvd3Mge251bWJlcn0gRGVmaW5lcyB0aGUgcm93cyBvZiB0aGUgbWF0cml4XG4gKiBAcGFyYW0gY29scyB7bnVtYmVyfSBEZWZpbmVzIHRoZSBjb2x1bW5zIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub25lcygxLCAxKVxuICogLy8gW1sxLDEsMV0sIFsxLDEsMV0sIFsxLDEsMV1dXG4gKlxuICovXG5NYXRyaXgub25lcyA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKVxuICByZXR1cm4gTWF0cml4Lm9mKG0pLmZpbGwoeCA9PiAxKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciByYW5kb21cbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggcmFuZG9tIHZhbHVlc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gW2YgPSBlID0+IE1hdGgucmFuZG9tKCkgKiAyIC0gMV1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24gKGYgPSBlID0+IE1hdGgucmFuZG9tKCkgKiAyIC0gMSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoZilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gcmFuZG9tXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHJhbmRvbSBudW1iZXJzXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259IEZ1bmN0aW9uIHdoaWNoIHJldHVybnMgcmFuZG9tIHZhbHVlcy4gRGVmYXVsdCByYW5kb20gdmFsdWVzIGFyZSBiZXR3ZWVuIC0xIGFuZCAxXG4gKiBAcGFyYW0gcm93cyB7bnVtYmVyfSBEZWZpbmVzIHRoZSByb3dzIG9mIHRoZSBtYXRyaXhcbiAqIEBwYXJhbSBjb2xzIHtudW1iZXJ9IERlZmluZXMgdGhlIGNvbHVtbnMgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnJhbmRvbSA9IGZ1bmN0aW9uIChmID0gZSA9PiAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSwgcm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKGYpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIHRvQXJyYXlcbiAqIEBkZXNjIFJldHVybnMgdGhlIGFycmF5IGZyb20gdGhlIG1hdHJpeFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5NYXRyaXgucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fdmFsdWUubWFwKHJvdyA9PiByb3cubWFwKGNvbCA9PiBjb2wpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBjbG9uZVxuICogQGRlc2MgUmV0dXJucyBhIGNsb25lIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXguZnJvbUFycmF5KHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZnJvbUFycmF5XG4gKiBAZGVzYyBSZXR1cm5zIGEgTWF0cml4IGZyb20gYW4gYXJyYXlcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuTWF0cml4LmZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihtYXAocm93ID0+IG1hcChjb2wgPT4gY29sKShyb3cpKShhcnIpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciB0cmFuc3Bvc2VcbiAqIEBkZXNjIFJldHVybnMgYSB0cmFuc3Bvc2VkIE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbLTEsIDJdLCBbMywgNF0sIFstOCwgMl0pXG4gKiBjb25zdCBiID0gQS50cmFuc3Bvc2UoKS50b0FycmF5KClcbiAqIC8vIHJldHVybnMgW1stMSwgMywtOF0sIFsyLCA0LCAyXV1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS50cmFuc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZm9sZCh0cmFuc3Bvc2UsIFtdLCB0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiB0cmFuc3Bvc2VcbiAqIEBkZXNjIFJldHVybnMgYSB0cmFuc3Bvc2VkIE1hdHJpeFxuICogQHBhcmFtIE0ge01hdHJpeHxhcnJheX0gQSBNYXRyaXggb3IgYSBtYXRyaXggYXJyYXlcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbLTEsIDJdLCBbMywgNF0sIFstOCwgMl1cbiAqIGNvbnN0IGIgPSBNYXRyaXgudHJhbnNwb3NlKGEpLnRvQXJyYXkoKVxuICogLy8gcmV0dXJucyBbWy0xLCAzLC04XSwgWzIsIDQsIDJdXVxuICovXG5NYXRyaXgudHJhbnNwb3NlID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS50cmFuc3Bvc2UoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgYWRkXG4gKiBAaW5zdGFuY2VcbiAqIEBwYXJhbSBNIHtNYXRyaXh8bnVtYmVyfSBBZGQgYSBNYXRyaXggb3IgYSBudW1iZXJcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLmFkZCgxKSAvLyBbWzYsIDVdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIuYWRkKEIpIC8vIFtbMTAsIDEwXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKE0pIHtcbiAgaWYgKE0gaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgIT09IE0uZ2V0Q29scygpIHx8IHRoaXMuZ2V0Um93cygpICE9PSBNLmdldFJvd3MoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaWNlcyBkbyBub3QgbWF0Y2gsIGNhbm5vdCBhZGQnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAoKHJvdywgaWR4KSA9PiBtYXAoKHZhbCwgamR4KSA9PiB2YWwgKyBNLl9fdmFsdWVbaWR4XVtqZHhdKShyb3cpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm1hcChtYXAoeCA9PiB4ICsgTSkpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIHN1YnRyYWN0XG4gKiBAaW5zdGFuY2VcbiAqIEBwYXJhbSBNIHtNYXRyaXh8bnVtYmVyfSBTdWJ0cmFjdCBhIE1hdHJpeCBvciBhIG51bWJlclxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEuc3VidHJhY3QoMSkgLy8gW1s0LCAyXV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLnN1YnRyYWN0KEIpIC8vIFtbMCwgMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKE0pIHtcbiAgaWYgKE0gaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgIT09IE0uZ2V0Q29scygpIHx8IHRoaXMuZ2V0Um93cygpICE9PSBNLmdldFJvd3MoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaWNlcyBkbyBub3QgbWF0Y2gsIGNhbm5vdCBzdWJ0cmFjdCcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcCgocm93LCBpZHgpID0+IG1hcCgodmFsLCBqZHgpID0+IHZhbCAtIE0uX192YWx1ZVtpZHhdW2pkeF0pKHJvdykpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKG1hcCh4ID0+IHggLSBNKSlcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgbXVsdGlwbHlcbiAqIEBpbnN0YW5jZVxuICogQGRlc2MgTXV0bGlwbHkgYSBzY2FsYXIgb3IgYSBtdHJhaXggd2l0aCBhIG1hdHJpeC4gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBtdWx0aXBsaWNhdGlvbiBpcyBub3QgcG9zc2libGUuXG4gKiBAcGFyYW0gTSB7TWF0cml4fG51bWJlcn1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLm11bHRpcGx5KDIpIC8vIFtbMTAsIDhdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIubXVsdGlwbHkoQikgLy8gW1syNSwgMjVdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIChNKSB7XG4gIGlmIChNIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpICE9PSBNLmdldENvbHMoKSB8fCB0aGlzLmdldFJvd3MoKSAhPT0gTS5nZXRSb3dzKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2Ugc3RhdGljIG1ldGhvZCBcXCdkb3RcXCcgdG8gZG8gbWF0cml4IG11bHRpcGxpY2F0aW9uJylcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3QgY3JlYXRlIGhhZGFtYXJkIHByb2R1Y3QnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAoKHJvdywgaWR4KSA9PiBtYXAoKGNvbCwgamR4KSA9PiBjb2wgKiBNLl9fdmFsdWVbaWR4XVtqZHhdKShyb3cpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm1hcChtYXAoeCA9PiB4ICogTSkpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGFkZGl0aXZlaW52ZXJzZVxuICogQGluc3RhbmNlXG4gKiBAZGVzYyBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1hdHJpeCBvYnRhaW5lZCBieSBjaGFuZ2luZyB0aGUgc2lnbiBvZiBldmVyeSBtYXRyaXggZWxlbWVudC4gVGhlIGFkZGl0aXZlIGludmVyc2Ugb2YgbWF0cml4IEEgaXMgd3JpdHRlbiDigJNBLlxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsLTVdLCBbLTQsIDRdXSlcbiAqIGNvbnN0IG1pbnVzQSA9IEEuYWRkaXRpdmVpbnZlcnNlKClcbiAqIC8vIFtbLTUsIDVdLCBbNCwgLTRdXVxuICovXG5NYXRyaXgucHJvdG90eXBlLmFkZGl0aXZlaW52ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tdWx0aXBseSgtMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGhhZGFtYXJkXG4gKiBAaW5zdGFuY2VcbiAqIEBzZWUgbXVsdGlwbHlcbiAqIEBwYXJhbSBNXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5oYWRhbWFyZCgyKSAvLyBbWzEwLCA4XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLmhhZGFtYXJkKEIpIC8vIFtbMjUsIDI1XV1cblxuICovXG5NYXRyaXgucHJvdG90eXBlLmhhZGFtYXJkID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tdWx0aXBseShNKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBsdVxuICogQGRlc2MgQ2FsY3VsYXRlcyBMVSBkZWNvbXBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeFtdfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBbWzMsIC03LCAtMiwgMl0sIFstMywgNSwgMSwgMF0sIFs2LCAtNCwgMCwgLTVdLCBbLTksIDUsIC01LCAxMl1dXG4gKiBjb25zdCBBID0gTWF0cml4LmZyb21BcnJheShyZXN1bHQpXG4gKiBjb25zdCBsdSA9IEEubHUoKVxuICogLy8gTC5fX3ZhbHVlID0gWyBbIDEsIDAsIDAsIDAgXSwgWyAtMSwgMSwgMCwgMCBdLCBbIDIsIC01LCAxLCAwIF0sIFsgLTMsIDgsIDMsIDEgXSBdXG4gKiAvLyBVLl9fdmFsdWUgPSAgWyBbIDMsIC03LCAtMiwgMiBdLCBbIDAsIC0yLCAtMSwgMiBdLCBbIDAsIDAsIC0xLCAxIF0sIFsgMCwgMCwgMCwgLTEgXSBdXG4gKiBNYXRyaXguZG90KGx1WzBdLCBsdVsxXSkgLy8gcmV0dXJucyBjbG9uZSBvZiBBXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmx1ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBuID0gdGhpcy5nZXRSb3dzKClcbiAgY29uc3QgdG9sID0gMWUtNlxuICBjb25zdCBBID0gdGhpcy5jbG9uZSgpXG4gIGNvbnN0IEwgPSB0aGlzLnplcm9zKClcbiAgY29uc3QgVSA9IHRoaXMuemVyb3MoKVxuXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgKytrKSB7XG4gICAgaWYgKE1hdGguYWJzKEEuX192YWx1ZVtrXVtrXSkgPCB0b2wpIHRocm93IEVycm9yKCdDYW5ub3QgcHJvY2VlZCB3aXRob3V0IGEgcm93IGV4Y2hhbmdlJylcbiAgICBMLl9fdmFsdWVba11ba10gPSAxXG4gICAgZm9yIChsZXQgaSA9IGsgKyAxOyBpIDwgbjsgKytpKSB7XG4gICAgICBMLl9fdmFsdWVbaV1ba10gPSBBLl9fdmFsdWVbaV1ba10gLyBBLl9fdmFsdWVba11ba11cbiAgICAgIGZvciAobGV0IGogPSBrICsgMTsgaiA8IG47ICsraikge1xuICAgICAgICBBLl9fdmFsdWVbaV1bal0gPSBBLl9fdmFsdWVbaV1bal0gLSBMLl9fdmFsdWVbaV1ba10gKiBBLl9fdmFsdWVba11bal1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgbCA9IGs7IGwgPCBuOyArK2wpIHtcbiAgICAgIFUuX192YWx1ZVtrXVtsXSA9IEEuX192YWx1ZVtrXVtsXVxuICAgIH1cbiAgfVxuICByZXR1cm4gW0wsIFVdXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIHJyZWZcbiAqIEByZXR1cm5zIHtNYXRyaXh8YXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBBID0gTWF0cml4Lm9mKFtbLTEsIDFdLCBbLTEsIDBdLCBbMCwgLTFdLCBbLTEsIC0yXV0pXG4gKiBBLnJyZWYoKSAvLyAgWyBbIDEsIDAgXSwgWyAtMCwgMSBdLCBbIDAsIDAgXSwgWyAwLCAwIF0gXVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJyZWYgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBsZWFkID0gMFxuICBjb25zdCByZXN1bHRNYXRyaXggPSB0aGlzLmNsb25lKClcblxuICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuZ2V0Um93cygpOyArK3IpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgPD0gbGVhZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdE1hdHJpeFxuICAgIH1cbiAgICBsZXQgaSA9IHJcbiAgICB3aGlsZSAocmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bbGVhZF0gPT09IDApIHtcbiAgICAgICsraVxuICAgICAgaWYgKHRoaXMuZ2V0Um93cygpID09PSBpKSB7XG4gICAgICAgIGkgPSByXG4gICAgICAgICsrbGVhZFxuICAgICAgICBpZiAodGhpcy5nZXRDb2xzKCkgPT09IGxlYWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0TWF0cml4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdG1wID0gcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1cbiAgICByZXN1bHRNYXRyaXguX192YWx1ZVtpXSA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdXG4gICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl0gPSB0bXBcblxuICAgIGxldCB2YWwgPSByZXN1bHRNYXRyaXguX192YWx1ZVtyXVtsZWFkXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5nZXRDb2xzKCk7ICsraikge1xuICAgICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bal0gLz0gdmFsXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldFJvd3MoKTsgKytpKSB7XG4gICAgICBpZiAoaSA9PT0gcikgY29udGludWVcbiAgICAgIHZhbCA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2xlYWRdXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0Q29scygpOyArK2opIHtcbiAgICAgICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bal0gLT0gdmFsICogcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bal1cbiAgICAgIH1cbiAgICB9XG4gICAgbGVhZCsrXG4gIH1cbiAgcmV0dXJuIHJlc3VsdE1hdHJpeFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBzb2x2ZVxuICogQHBhcmFtIGJcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gU29sdmUgeEEgPSBiXG4gKiAvLyA1eCArIHkgID0gN1xuICogLy8gM3ggLSA0eSA9IDE4XG4gKiAvLyBTb2x1dGlvbiBmb3IgeCBhbmQgeTpcbiAqIC8vIHggPSAyXG4gKiAvLyB5ID0gLTNcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgMV0sIFszLCAtNF1dKVxuICogY29uc3Qgc29sdmVBID0gQS5zb2x2ZShbNywgMThdKSAvLyBbMiwgLTNdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnNvbHZlID0gZnVuY3Rpb24gKGIpIHtcbiAgY29uc3QgQSA9IHRoaXMuY2xvbmUoKVxuICBjb25zdCBMVSA9IEEubHUoKVxuICBjb25zdCBMID0gTFVbMF1cbiAgY29uc3QgVSA9IExVWzFdXG4gIGNvbnN0IG4gPSB0aGlzLmdldFJvd3MoKVxuICBsZXQgcyA9IDBcbiAgY29uc3QgYyA9IFtdXG4gIGNvbnN0IHggPSBbXVxuXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgKytrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyArK2opIHtcbiAgICAgIHMgPSBzICsgTC5fX3ZhbHVlW2tdW2pdICogY1tqXVxuICAgIH1cbiAgICBjW2tdID0gYltrXSAtIHNcbiAgICBzID0gMFxuICB9XG4gIGZvciAobGV0IGEgPSBuIC0gMTsgYSA+IC0xOyAtLWEpIHtcbiAgICBsZXQgdCA9IDBcbiAgICBmb3IgKGxldCBiID0gYSArIDE7IGIgPCBuOyArK2IpIHtcbiAgICAgIHQgPSB0ICsgVS5fX3ZhbHVlW2FdW2JdICogeFtiXVxuICAgIH1cbiAgICB4W2FdID0gKGNbYV0gLSB0KSAvIFUuX192YWx1ZVthXVthXVxuICB9XG4gIHJldHVybiB4XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQG1lbWJlciBpbnZlcnNlXG4gKiBAaW5zdGFuY2VcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzIsIDRdXSkuaW52ZXJzZSgpXG4gKiAvLyBbIFsgMiwgLTAuNSBdLCBbIC0xLCAwLjUgXSBdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmludmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IEEgPSB0aGlzLmNsb25lKClcbiAgY29uc3QgSSA9IEEuaWRlbnRpdHkoKVxuICBjb25zdCBJbnYgPSBBLmNvbmNhdChJKS5ycmVmKClcblxuICBjb25zdCByZXN1bHQgPSBJbnYuX192YWx1ZS5yZWR1Y2UoKHJlc3VsdCwgeCwgaWR4KSA9PiB7XG4gICAgY29uc3QgaGFsZiA9IHgubGVuZ3RoIC8gMlxuICAgIHJlc3VsdC5wdXNoKHguc2xpY2UoaGFsZiwgeC5sZW5ndGgpKVxuICAgIHJldHVybiByZXN1bHRcbiAgfSwgW10pXG4gIHJldHVybiBNYXRyaXgub2YocmVzdWx0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgcmFua1xuICogQGluc3RhbmNlXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJhbmsgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJyZWYgPSB0aGlzLnJyZWYoKVxuICBsZXQgcmVzdWx0ID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJyZWYuZ2V0Q29scygpOyArK2kpIHtcbiAgICByZXN1bHQgKz0gcnJlZi5fX3ZhbHVlW2ldW2ldXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgZGltZW5zaW9uXG4gKiBAaW5zdGFuY2VcbiAqIEBzZWUgcmFua1xuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kaW1lbnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJhbmsoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgZGlhZ1xuICogQGluc3RhbmNlXG4gKiBAZGVzYyBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5kaWFnKClcbiAqIC8vIFsxLCAxLCAxXVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLmRpYWcoKVxuICogLy8gWzAsIDAsIDAsIDAsIDBdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRpYWcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGlkeCkgPT4ge1xuICAgIHJldHVybiBhY2MuY29uY2F0KHhbaWR4XSlcbiAgfSkoW10pKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gZGlhZ1xuICogQGRlc2MgUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcGFyYW0gTSB7TWF0cml4fEFycmF5fSBNYXRyaXggZnJvbSB3aGljaCB0byByZXR1cm4gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LmRpYWcoW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIFsyLCA1XVxuICpcbiAqL1xuTWF0cml4LmRpYWcgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmRpYWcoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXhcbiIsImltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuaW1wb3J0IGNvbmNhdCBmcm9tICdmdW4uanMvc3JjL2NvbmNhdCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gY29uY2F0XG4gKiBAcGFyYW0gTSB7TWF0cml4fVxuICogQHBhcmFtIG0ge0FycmF5fVxuICogQHBhcmFtIGlkeCB7bnVtYmVyfVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiAoTSwgbSwgaWR4KSB7XG4gIHJldHVybiBjb25jYXQobSwgTS5fX3ZhbHVlW2lkeF0pXG59KVxuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5pbXBvcnQgZm9sZCBmcm9tICdmdW4uanMvc3JjL2ZvbGQnXG5pbXBvcnQgbWFwIGZyb20gJ2Z1bi5qcy9zcmMvbWFwJ1xuaW1wb3J0IHJvdW5kIGZyb20gJy4vcm91bmQnXG5cbi8qKlxuICogQGZ1bmN0aW9uIGRvdFxuICogQHBhcmFtIEIge01hdHJpeH1cbiAqIEBwYXJhbSBhIHtBcnJheX1cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoKGRlY2ltYWxzLCBCLCBhKSA9PiBtYXAoKGl0ZW0sIGkpID0+IHtcbiAgcmV0dXJuIGZvbGQoKGFjYywgeCwgaikgPT4ge1xuICAgIGFjYyArPSByb3VuZCh4ICogQi5fX3ZhbHVlW2pdW2ldLCBkZWNpbWFscylcbiAgICByZXR1cm4gYWNjXG4gIH0sIDApKGEpXG59KShCLl9fdmFsdWVbMF0pKVxuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KG0gPT4gW10pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBnZW5lcmF0ZVxuICogQGRlc2MgR2VuZXJhdG9yIGZ1bmN0aW9uIGZvciBhIG1hdHJpeCBhcnJheSwgdmFsdWVzIGFyZSBzZXQgdG8gdW5kZWZpbmVkXG4gKiBAcGFyYW0gcm93cyB7bnVtYmVyfVxuICogQHBhcmFtIGNvbHMge251bWJlcn1cbiAqIEByZXR1cm5zIHthbnlbXVtdfVxuICovXG5leHBvcnQgZGVmYXVsdCAocm93cywgY29scykgPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkocm93cykpLm1hcCh4ID0+IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGNvbHMpKSlcbiIsImltcG9ydCBtYXAgZnJvbSAnZnVuLmpzL3NyYy9tYXAnXG5cbi8qKlxuICogQGZ1bmN0aW9uIGlkZW50aXR5XG4gKiBAZGVzYyBDcmVhdGVzIGFuIGlkZW50aXkgbWF0cml4IGZyb20gYW4gZW1wdHkgYXJyYXlcbiAqIEBwYXJhbSBtIHtBcnJheX1cbiAqIEBwYXJhbSBpZHgge251bWJlcn1cbiAqIEByZXR1cm4ge01hdHJpeH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKG0sIGlkeCkgPT4gbWFwKChyb3dzLCBqZHgpID0+IChpZHggPT09IGpkeCkgKiAxKShtKVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gcm91bmRcbiAqIEBwYXJhbSB2YWx1ZSB7bnVtYmVyfVxuICogQHBhcmFtIGRlY2ltYWxzIHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3VuZCAodmFsdWUsIGRlY2ltYWxzKSB7XG4gIHJldHVybiBOdW1iZXIoTWF0aC5yb3VuZCh2YWx1ZSArICdlJyArIGRlY2ltYWxzKSArICdlLScgKyBkZWNpbWFscylcbn1cbiIsImltcG9ydCBtYXAgZnJvbSAnZnVuLmpzL3NyYy9tYXAnXG5pbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcblxuLyoqXG4gKiBAZnVuY3Rpb24gdHJhbnNwb3NlXG4gKiBAZGVzYyBUcmFuc3Bvc2VzIGEgYXJyYXkgb2YgYXJyYXlzIHVzaW5nIHRoZSBNYXRyaXgubWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0gbSB7QXJyYXl9XG4gKiBAcGFyYW0gaWR4IHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtNYXRyaXh9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChwcmV2LCBuZXh0KSA9PiBtYXAoKGl0ZW0sIGkpID0+IChwcmV2W2ldIHx8IFtdKS5jb25jYXQobmV4dFtpXSkpKG5leHQpKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==