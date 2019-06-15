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
 * @param {Function} cb receives 4 values: the accumulator, the item, the index, and the initial value.
 * @param {*} init - the the initial value
 * @param {Array|Object} a the array like item to iterate over
 * @return {*} The accumulated value
 **/





/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function fold (cb, init, a) {
  const typeMap = {
    'Object': _object_fold__WEBPACK_IMPORTED_MODULE_2__["default"],
    'Array': _array_fold__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
  return typeMap[Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(a)](cb, init, a)
}));


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

/***/ "./node_modules/fun.js/src/max.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/max.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns the largest of the 2 arguments provided
 *
 * @function max
 * @since v1.0.2
 * @param {*} a
 * @param {*} b
 * @return {*}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function max (a, b) {
  return b > a ? b : a
}));


/***/ }),

/***/ "./node_modules/fun.js/src/min.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/min.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns the smallest of the 2 arguments provided
 *
 * @function min
 * @desc Returns the smallest of the 2 arguments provided
 * @since v1.0.4
 * @param {*} a
 * @param {*} b
 * @return {*}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function min (a, b) {
  return b < a ? b : a
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

/***/ "./node_modules/fun.js/src/reduce.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/reduce.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/fold */ "./node_modules/fun.js/src/array/fold.js");
/**
 * Returns a single item by iterating over an array like object and call a function on each item, starting from the first item in the iterator
 * The initial value is taken from the iterator.
 * Reduce works only on Arrays and returns a valueof the type of the first element in the Array
 *
 * @function reduce
 * @desc Returns a single item by iterating over an array like object and call a function on each item, starting from the first item in the iterator
 * @since v1.0.4
 * @param {Function} cb - receives 4 values: the accumulator, the item, the index, and the initial value.
 * @param {Array} a - The iterator to apply the function
 * @return {*}
 **/



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function reduce (cb, a) {
  const arr = a.slice()
  const init = arr.shift()
  return Object(_array_fold__WEBPACK_IMPORTED_MODULE_1__["default"])(cb, init, arr)
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

var _max = _interopRequireDefault(__webpack_require__(/*! fun.js/src/max */ "./node_modules/fun.js/src/max.js"));

var _min = _interopRequireDefault(__webpack_require__(/*! fun.js/src/min */ "./node_modules/fun.js/src/min.js"));

var _reduce = _interopRequireDefault(__webpack_require__(/*! fun.js/src/reduce */ "./node_modules/fun.js/src/reduce.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! fun.js/src/equals */ "./node_modules/fun.js/src/equals.js"));

var _concat = _interopRequireDefault(__webpack_require__(/*! ./util/concat */ "./src/util/concat.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ./util/empty */ "./src/util/empty.js"));

var _dot = _interopRequireDefault(__webpack_require__(/*! ./util/dot */ "./src/util/dot.js"));

var _identity = _interopRequireDefault(__webpack_require__(/*! ./util/identity */ "./src/util/identity.js"));

var _transpose = _interopRequireDefault(__webpack_require__(/*! ./util/transpose */ "./src/util/transpose.js"));

var _generate = _interopRequireDefault(__webpack_require__(/*! ./util/generate */ "./src/util/generate.js"));

var _solve = _interopRequireDefault(__webpack_require__(/*! ./util/solve */ "./src/util/solve.js"));

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
 * @static
 * @function Matrix.of
 * @desc Creates a Matrix object and flattens the Matrix
 * @param {Array|Function} val - An array of arrays
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
 * @property {String} type - Returns the string 'Matrix' for all Matrix objects
 * @type {String}
 * @example
 *
 * const m =  Matrix.of([[1,2],[2,3],[4,5]])
 * m.type === 'Matrix'
 */


Matrix.prototype.type = 'Matrix';
/**
 * @memberOf Matrix
 * @property {Number} precision - Floating point precision is set to 4 by default
 * @type {Number}
 * @example
 *
 * const m =  Matrix.of([[1,2],[2,3],[4,5]])
 * m.precision === 4
 */

Matrix.prototype.precision = 4;
/**
 * @memberOf Matrix
 * @function Matrix#setPrecision
 * @desc The precision is used in floating point calculations for the dot product
 * @param {Number} [precision=4] - Set the number of decimals for rounding
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
 * @function Matrix#isSymmetric
 * @desc Boolean indicating whether the Matrix is symmetric by testing for equality of the transposed Matrix.
 * @returns {Boolean}
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
 * @function Matrix#isSquare
 * @desc Boolean indicating whether the Matrix object is square.
 * @returns {Boolean}
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
 * @function Matrix#isOrthogonal
 * @desc Boolean indicating whether the Matrix is orthogonal by testing for equality between Identity Matrix and the dot product of the Matrix and its transpose.
 * @returns {Boolean}
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
 * @function Matrix#getCols
 * @desc Number indicating the number of columns in the Matrix
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
 * @function Matrix#equals
 * @desc Function returning a boolean testing for equality of the values of a Matrix or Array
 * @param {Matrix|Array} M - Matrix or Array to compare for equality
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
 * @function Matrix#getRows
 * @desc Number indicating the number of rows in the Matrix
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
 * @function Matrix#getShape
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
 * @function Matrix#map
 * @description Maps over the rows of the matrix using a map function
 * @param {Function} f - An iterator function
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
 * @function Matrix.map
 * @description Curried function that maps over the rows of the matrix using a map function
 * @param {Function} f - An iterator function
 * @param {Matrix|Array} M - Matrix or array to map
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
 * @function Matrix#fold
 * @description Reduce the matrix rows using a reduce function
 * @param {Function} f - A reduce/fold function
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
 * @function Matrix.fold
 * @description Static function to reduce the matrix rows using a reduce function
 * @param {Function} f - A reduce/fold function
 * @param {Matrix|Array} M - The Matrix to reduce
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
 * @function Matrix#ap
 * @description Function that applies a function to a Matrix
 * @param {Matrix|Array} M - Matrix or Array to apply a function
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
 * @function Matrix.ap
 * @description Curried function that applies a function to a Matrix
 * @param {Function} f - Function that accepts a Matrix as input
 * @param {Matrix|Array} M - Matrix or Array to apply a function
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
 * @function Matrix#concat
 * @description Concatenates 2 Matrices using a function as operator
 * @param {Matrix} M - The right side of the concatenation/product
 * @param {Function} [f=concat] - A curried function accepting 2 matrices as input
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
 * @function Matrix.concat
 * @description A curried function that concatenates 2 Matrices using a function as operator
 * @param {Matrix} A - Left side Matrix of the concatenation
 * @param {Matrix} B - Right side Matrix of the concatenation
 * @param {Function} [f=concat] - A curried function accepting 2 matrices as input
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
 * @function Matrix#empty
 * @description Returns an empty Matrix from an existing Matrix
 * @returns {Matrix}
 */

Matrix.prototype.empty = function () {
  return Matrix.of(this).map(_empty.default);
};
/**
 * @memberOf Matrix
 * @static
 * @function Matrix.empty
 * @description Returns an empty Matrix from an existing Matrix
 * @param {Number} [rows=0] - Rows to generate
 * @param {Number} [cols=0] - Cols to generate
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
 * @function Matrix#identity
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
 * @function Matrix.identity
 * @desc curried fucntion that returns an identity matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.identity(3, 2)
 * // [[1, 0, 0], [0, 1, 0]]
 *
 */


Matrix.identity = (0, _curry.default)(function (rows, cols) {
  var m = (0, _generate.default)(rows, cols); // Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)))

  return Matrix.of(_identity.default).ap(m);
});
/**
 * @memberOf Matrix
 * @function Matrix#combine
 * @desc Concatenates 2 Matrices together.
 * @see Matrix.concat
 * @param {Matrix } M - Right side Matrix of the combine operation
 * @returns {Matrix}
 */

Matrix.prototype.combine = function (M) {
  return Matrix.of(this).concat(Matrix.of(M), _concat.default);
};
/**
 * @memberOf Matrix
 * @static
 * @function Matrix.combine
 * @desc Curried fucntion that combines 2 Matrices
 * @see Matrix.concat
 * @param {Matrix} A - Left side of the combine operator
 * @param {Matrix} A - Right side of the combine operator
 * @returns {Matrix}
 */


Matrix.combine = (0, _curry.default)(function (A, B) {
  return Matrix.of(A).concat(Matrix.of(B), _concat.default);
});
/**
 * @memberOf Matrix
 * @function Matrix#dot
 * @description Returns the dot product between 2 matrices
 * @param {Matrix|Array} M - Right side of the dot product
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
 * @function Matrix.dot
 * @description Curried fucntion that returns the dot product of 2 matrices
 * @param {Matrix|Array} A - Left side of the dot product
 * @param {Matrix|Array} B - Right side of the dot product
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


Matrix.dot = (0, _curry.default)(function (A, B) {
  return Matrix.of(A).dot(Matrix.of(B));
});
/**
 * @memberOf Matrix
 * @function Matrix#fill
 * @desc Fill up an empty matrix with the provided map function
 * @param {Function} f - Function that generates a value
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
 * @function Matrix#zeros
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
 * @function Matrix.zeros
 * @desc Fill up an empty matrix with zeros
 * @param {Number} rows - Defines the rows of the matrix
 * @param {Number} cols - Defines the columns of the matrix
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

 * @function Matrix#ones
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
 * @function Matrix.ones
 * @desc Fill up an empty matrix with ones
 * @param {Number} rows - Defines the rows of the matrix
 * @param {Number} cols - Defines the columns of the matrix
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
 * @function Matrix#random
 * @desc Fill up an empty matrix with random values
 * @param {Function} [f = e => Math.random() * 2 - 1] - Function producing random values, can be any type of value
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
 * @function Matrix.random
 * @desc Fill up an empty matrix with random numbers
 * @param {Function} f - Function which returns random values. Default random values are between -1 and 1
 * @param {Number} rows - Defines the rows of the matrix
 * @param {Number} cols - Defines the columns of the matrix
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
 * @function Matrix#toArray
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
 * @function Matrix#clone
 * @desc Returns a clone of the matrix
 * @returns {Matrix}
 */


Matrix.prototype.clone = function () {
  var M = Matrix.fromArray(this.__value);
  M.setPrecision(this.precision);
  return M;
};
/**
 * @memberOf Matrix
 * @function Matrix#fromArray
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
 * @function Matrix#transpose
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
 * @function Matrix.transpose
 * @desc Returns a transposed Matrix
 * @param {Matrix|Array} M - A Matrix or a matrix array
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
 * @function Matrix#add
 * @desc Adds a number or a Matrix to this
 * @param {Matrix|Number} M - Add a Matrix or a number
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
 * @function Matrix#subtract
 * @desc Subtracts a number or a Matrix from this
 * @param {Matrix|Number} M - Subtract a Matrix or a number
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
 * @function Matrix#multiply
 * @desc Mutliply a scalar or a matrix with a matrix. Throws an error if the multiplication is not possible.
 * @param {Matrix|Number} M - A Matrix M or a Number to multiply a Matrix
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
 * @function Matrix#additiveinverse
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
 * @function Matrix#hadamard
 * @desc Hadamar is an alias of the multiply function
 * @see multiply
 * @param {Matrix|Number} M - A Matrix M or a Number to multiply a Matrix
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
 * @function Matrix#lu
 * @desc Calculates LU decomposition of the Matrix
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
 * @function Matrix#rref
 * @desc Returns a Matrix containing the row reduced echelon form
 * @returns {Matrix}
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
 * @function Matrix#solve
 * @desc Returns the solution for a system of linear equations
 * @param {Array} b - The numbers for which to solve the system of linear equations
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
  var LU = this.lu();
  var L = LU[0];
  var U = LU[1];
  var n = this.getRows(); // let s = 0
  // const c = []
  // const x = []

  return (0, _solve.default)(n, L, U, b); // for (let k = 0; k < n; ++k) {
  //   for (let j = 0; j < k; ++j) {
  //     s = s + L.__value[k][j] * c[j]
  //   }
  //   c[k] = b[k] - s
  //   s = 0
  // }
  // for (let a = n - 1; a > -1; --a) {
  //   let t = 0
  //   for (let b = a + 1; b < n; ++b) {
  //     t = t + U.__value[a][b] * x[b]
  //   }
  //   x[a] = (c[a] - t) / U.__value[a][a]
  // }
  // return x
};
/**
 * @memberOf Matrix
 * @function Matrix#inverse
 * @desc Returns the inverse of a Matrix
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
 * @function Matrix#rank
 * @desc Number indicating the maximum number of linearly independent columns.
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
 * @function Matrix#dimension
 * @desc Number indicating the maximum number of linearly independent columns.
 * @see rank
 * @returns {Number}
 */


Matrix.prototype.dimension = function () {
  return this.rank();
};
/**
 * @memberOf Matrix
 * @function Matrix#diag
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
 * @function Matrix.diag
 * @desc Returns an array containing the values on the diagonal
 * @param {Matrix|Array} M - Matrix from which to return the diagonal
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
 * @function Matrix#diagproduct
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
 * @function Matrix.diagproduct
 * @desc Returns the product of the values on the diagonal
 * @param {Matrix|Array} M - Matrix from which to return the diagonal
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
 * @function Matrix#sum
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
 * @function Matrix.sum
 * @desc Returns the sum of the values in the Matrix
 * @param {Matrix|Array} M - Matrix from which to return the diagonal
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
 * @function Matrix#kronecker
 * @desc The Kronecker product is an operation on two matrices of arbitrary size resulting in a block matrix.
 * @param {Matrix} M - The right side Matrix of the product (this ⊗ M)
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
 * @function Matrix.kronecker
 * @desc The Kronecker product is an operation on two matrices of arbitrary size resulting in a block matrix.
 * @param {Matrix} A - The left side Matrix of the product (A ⊗ B)
 * @param {Matrix} B - The right side Matrix of the product (A ⊗ B)
 * @returns {Matrix}
 */


Matrix.kronecker = function (A, B) {
  return Matrix.of(A).kronecker(B);
};
/**
 * @memberOf Matrix
 * @function Matrix#determinant
 * @desc Calculates the determinant of a square Matrix using Sarrus' rule or LU decomposition
 * @returns {Number}
 */


Matrix.prototype.determinant = function () {
  if (this.isSquare()) {
    if (this.getCols() === 2) {
      var a = this.__value[0][0];
      var b = this.__value[0][1];
      var c = this.__value[1][0];
      var d = this.__value[1][1];
      return a * d - b * c;
    }

    var lu = this.lu();
    var detA = Number(lu[0].diagproduct());
    var detB = Number(lu[1].diagproduct());
    return detA * detB;
  } else {
    throw Error('The Matrix needs to be a square Matrix to calculate the determinant');
  }
};
/**
 * @memberOf Matrix
 * @function Matrix.determinant
 * @desc Calculates the determinant of a square Matrix using Sarrus' rule or LU decomposition
 * @param {Matrix|Array} A - Matrix as input to calculate the determinant
 * @returns {Number}
 */


Matrix.determinant = function (A) {
  return Matrix.of(A).determinant();
};
/**
 * @memberOf Matrix
 * @function Matrix#max
 * @desc Returns the largest number in the Matrix
 * @returns {*}
 */


Matrix.prototype.max = function () {
  return (0, _reduce.default)(_max.default, [].concat.apply([], this.__value));
};
/**
 * @memberOf Matrix
 * @function Matrix#min
 * @desc Returns the smallest number in the Matrix
 * @returns {*}
 */


Matrix.prototype.min = function () {
  return (0, _reduce.default)(_min.default, [].concat.apply([], this.__value));
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
 * @desc Helper function concatenating/combining 2 Matrices
 * @param {Matrix} M - Left side of the concat operatior
 * @param {Array} m - right side of the contac operator
 * @param {Number} idx - Index of the row
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
 * @desc Helper function to generate the dotproduct of 2 Matrices
 * @param {Matrix} B - Right side of hte dot product
 * @param {Array} a - Array representing theleft side of the dot product
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

/**
 * @function empty
 * @desc Helper function to generate an empty Matrix
 */
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
 * @param {Number} rows
 * @param {Number} cols
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
 * @param idx {Number}
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
 * @param value {Number}
 * @param decimals {Number}
 * @returns {Number}
 */
function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/util/solve.js":
/*!***************************!*\
  !*** ./src/util/solve.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = solve;

/**
 * @function solveL
 * @desc solve the xA = b equation for lower triangular
 * @param n
 * @param L
 * @param b
 * @returns {Array}
 */
function solveL(n, L, b) {
  var s = 0;
  var c = [];

  for (var k = 0; k < n; ++k) {
    for (var j = 0; j < k; ++j) {
      s = s + L.__value[k][j] * c[j];
    }

    c[k] = b[k] - s;
    s = 0;
  }

  return c;
}
/**
 * @function solveU
 * @desc solve the xA = b equation for upper triangular
 * @param n
 * @param U
 * @param c
 * @param b
 */


function solveU(n, U, c, b) {
  var x = [];

  for (var a = n - 1; a > -1; --a) {
    var t = 0;

    for (var _b = a + 1; _b < n; ++_b) {
      t = t + U.__value[a][_b] * x[_b];
    }

    x[a] = (c[a] - t) / U.__value[a][a];
  }

  return x;
}
/**
 * @function solve
 * @desc Helper function for xA = b solver
 * @param n
 * @param L
 * @param U
 * @param b
 */


function solve(n, L, U, b) {
  var c = solveL(n, L, b);
  return solveU(n, U, c, b);
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
 * @param idx {Number}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9fcHJpdmF0ZS9jdXJyeTEuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FuZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2Jvb2xlYW4vaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY3VycnkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2RhdGUvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2V4aXN0cy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaWRlbnRpY2FsLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2l0ZXJhdG9yL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXAvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXguanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21pbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbm90LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9udW1iZXIvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL251bWJlci9pc05hbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29yLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3N0cmluZy9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3N0cmluZy9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvdHlwZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL21hdHJpeC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9kb3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9nZW5lcmF0ZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL3JvdW5kLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9zb2x2ZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvdHJhbnNwb3NlLmpzIl0sIm5hbWVzIjpbIk1hdHJpeCIsInZhbCIsIl9fdmFsdWUiLCJvZiIsInByb3RvdHlwZSIsInR5cGUiLCJwcmVjaXNpb24iLCJzZXRQcmVjaXNpb24iLCJpc1N5bW1ldHJpYyIsImEiLCJiIiwidHJhbnNwb3NlIiwiaXNTcXVhcmUiLCJnZXRDb2xzIiwiZ2V0Um93cyIsImlzT3J0aG9nb25hbCIsIkF4QXQiLCJkb3QiLCJJIiwiaWRlbnRpdHkiLCJsZW5ndGgiLCJlcXVhbHMiLCJNIiwiZ2V0U2hhcGUiLCJtYXAiLCJmIiwiZm9sZCIsImFwIiwiY29uY2F0IiwiQSIsIkIiLCJlbXB0eSIsInJvd3MiLCJjb2xzIiwibSIsImNvbWJpbmUiLCJmaWxsIiwieCIsInplcm9zIiwib25lcyIsInJhbmRvbSIsImUiLCJNYXRoIiwidG9BcnJheSIsInJvdyIsImNvbCIsImNsb25lIiwiZnJvbUFycmF5IiwiYXJyIiwiYWRkIiwiRXJyb3IiLCJpZHgiLCJqZHgiLCJzdWJ0cmFjdCIsIm11bHRpcGx5IiwiY29uc29sZSIsImxvZyIsImFkZGl0aXZlaW52ZXJzZSIsImhhZGFtYXJkIiwibHUiLCJuIiwidG9sIiwiTCIsIlUiLCJrIiwiYWJzIiwiaSIsImoiLCJsIiwicnJlZiIsImxlYWQiLCJyZXN1bHRNYXRyaXgiLCJyIiwidG1wIiwic29sdmUiLCJMVSIsImludmVyc2UiLCJJbnYiLCJyZXN1bHQiLCJyZWR1Y2UiLCJoYWxmIiwicHVzaCIsInNsaWNlIiwicmFuayIsImRpbWVuc2lvbiIsImRpYWciLCJhY2MiLCJkaWFncHJvZHVjdCIsInN1bSIsInByZXYiLCJuZXh0Iiwia3JvbmVja2VyIiwicCIsInEiLCJsZWZ0IiwicmlnaHQiLCJmcmFtZSIsImRldGVybWluYW50IiwiYyIsImQiLCJkZXRBIiwiTnVtYmVyIiwiZGV0QiIsIm1heCIsImFwcGx5IiwibWluIiwiZGVjaW1hbHMiLCJpdGVtIiwiQXJyYXkiLCJyb3VuZCIsInZhbHVlIiwic29sdmVMIiwicyIsInNvbHZlVSIsInQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtB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Q0FBYixDQUFwQjtBQUNEOztBQUNELFNBQU80QixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQVFlLFNBQVNxQyxLQUFULENBQWdCZCxDQUFoQixFQUFtQkUsQ0FBbkIsRUFBc0JDLENBQXRCLEVBQXlCckQsQ0FBekIsRUFBNEI7QUFDekMsTUFBTXdGLENBQUMsR0FBR2EsTUFBTSxDQUFDbkQsQ0FBRCxFQUFJRSxDQUFKLEVBQU9wRCxDQUFQLENBQWhCO0FBQ0EsU0FBT3VHLE1BQU0sQ0FBQ3JELENBQUQsRUFBSUcsQ0FBSixFQUFPbUMsQ0FBUCxFQUFVeEYsQ0FBVixDQUFiO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JERDs7QUFDQTs7OztBQUVBOzs7Ozs7O2VBT2Usb0JBQU0sVUFBQytFLElBQUQsRUFBT0MsSUFBUDtBQUFBLFNBQWdCLGtCQUFJLFVBQUNpQixJQUFELEVBQU96QyxDQUFQO0FBQUEsV0FBYSxDQUFDdUIsSUFBSSxDQUFDdkIsQ0FBRCxDQUFKLElBQVcsRUFBWixFQUFnQnRDLE1BQWhCLENBQXVCOEQsSUFBSSxDQUFDeEIsQ0FBRCxDQUEzQixDQUFiO0FBQUEsR0FBSixFQUFrRHdCLElBQWxELENBQWhCO0FBQUEsQ0FBTixDIiwiZmlsZSI6IkBhc3R1YW5heC9mdW5tYXRyaXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBhc3R1YW5heC9mdW5tYXRyaXhcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGFzdHVhbmF4L2Z1bm1hdHJpeFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAYXN0dWFuYXgvZnVubWF0cml4XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21hdHJpeC5qc1wiKTtcbiIsIi8qKlxuICogUmV0dXJucyBhIGN1cnJpZWQgZnVuY3Rpb24gd2l0aCBhcml0eSAxXG4gKiBAZnVuY3Rpb24gY3VycnkxXG4gKiBAcHJpdmF0ZVxuICogQHNpbmNlIHYxLjAuMlxuICoqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeTEgKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkIChhKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDBcbiAgICAgID8gdGhpc1xuICAgICAgOiBmbihhKVxuICB9XG59XG4iLCIvKipcbiAqIENoZWNrcyBpZiBib3RoIHByZWRpY2F0ZXMgYXJlIHRydWVcbiAqXG4gKiBAZnVuY3Rpb24gYW5kXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIGJvdGggcHJlZGljYXRlcyBhcmUgdHJ1ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoeCwgeSkgLT4gYm9vbGVhblxuICogQHBhcmFtIHsqfSB4IC0gQSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7Kn0geSAtIEEgcHJlZGljYXRlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFuZCAoeCwgeSkge1xuICByZXR1cm4geCAmJiB5XG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGFycmF5Q29uY2F0XG4gKiBAcGFyYW0gYTFcbiAqIEBwYXJhbSBhMlxuICogQHJldHVybnMge1RbXX1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQoYSwgYilcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gZXF1YWxzQXJyYXlcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiBmb3IgZGVlcCBjb21wYXJpc29uIG9mIGFycmF5c1xuICogQHBhcmFtIHthfSB4IC0gT2JqZWN0IHRvIGNvbXBhcmUgb2YgdHlwZSBhXG4gKiBAcGFyYW0ge2F9IHkgLSBPYmplY3QgeCB0byBjb21wYXJlIHdpdGggb2JqZWN0IHhcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBub3QgZnJvbSAnLi4vbm90J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFsc0FycmF5ICh4LCB5KSB7XG4gIGlmICh4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm90KGVxdWFscyh4W2ldLCB5W2ldKSkpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgbWFwcGluZyBvdmVyIHRoZSBwcm92aWRlZCBhcnJheSBhbmQgY2FsbGluZyBhbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHBhcmFtIHtjYkZ1bmN0aW9ufSBjYiAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIG1vZGlmeSB0aGUgaXRlbVxuICogQHBhcmFtIHsqfSBpbml0IC0gSW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtBcnJheX0gYSAtIEFycmF5IHdpdGggaXRlbXMgdG8gbW9kaWZ5IGJ5IHRoZSBjYiBmdW5jdGlvblxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYWxpYXMgcmVkdWNlXG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gZm9sZChhZGQsIDAsIFsxLDEsMV0pXG4gKiAvLyByZXN1bHQgPSAzXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgY2JGdW5jdGlvblxuICogQHBhcmFtIHsqfSByIC0gQWNjdW11bGF0b3Igd2hpY2ggYWNjdW11bGF0ZXMgdGhlIGNhbGxiYWNrJ3MgcmV0dXJuIHZhbHVlc1xuICogQHBhcmFtIHsqfSBpdGVtIC0gdGhlIGN1cnJlbnQgZWxlbWVudCBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIHRoZSBpbmRleSBvZiB0aGUgaXRlbSBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBUaGUgaW5pdGlhbCBhcnJheVxuICogQHJldHVybiB7Kn1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9IGluaXRcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2IociwgYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IE9iamVjdCB0byB2ZXJpZml5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzQXJyYXkoWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IHRydWVcbiAqL1xuXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdBcnJheScpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBtYXBcbiAqIEBkZXNjcmlwdGlvbiBNYXBzIG92ZXIgYW4gYXJyYXkgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICogQHNpbmNlIHYxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiAgY29uc3QgcmVzdWx0ID0gbWFwKGlkZW50aXR5LCBbMCwyLDNdKVxuICogIC8vIHJlc3VsdCA9IFswLDIsM11cbiAqICBjb25zdCBhZGQyID0gYWRkKDIpXG4gKiAgY29uc3QgcmVzdWx0ID0gbWFwKGFkZDIsIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzIsNCw1XVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobClcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByW2ldID0gY2IoYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQ3VycmllZCBmdW5jdGlvbiB0aGF0IHZlcmlmaWVzIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudCBpcyBhIGJvb2xlYW5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGlzXG4gKiBAZGVzY3JpcHRpb24gQ3VycmllZCBmdW5jdGlvbiB0aGF0IHZlcmlmaWVzIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudCBpcyBhIGJvb2xlYW5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7Kn0gSXRlbSB0byB2ZXJpZnlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdCb29sZWFuJylcbiIsIi8qKlxuICogQ29uY2F0ZW5hdGVzIDIgaXRlbXMgdG9nZXRoZXJcbiAqXG4gKiBAZnVuY3Rpb24gY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQ29uY2F0ZW5hdGVzIDIgaXRlbXMgdG9nZXRoZXJcbiAqIEBzaW5jZSB2MS4wLjRcbiAqIEBwYXJhbSB7YX0gYSAtIExlZnQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvblxuICogQHBhcmFtIHthfSBiIC0gcmlnaHQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvblxuICogQHJldHVybiB7YX0gQ29uY2F0ZW5hdGVkIGl0ZW1cbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlDb25jYXQgZnJvbSAnLi9hcnJheS9jb25jYXQnXG5pbXBvcnQgc3RyaW5nQ29uY2F0IGZyb20gJy4vc3RyaW5nL2NvbmNhdCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIGNvbnN0IHR5cGVNYXAgPSB7XG4gICAgJ1N0cmluZyc6IHN0cmluZ0NvbmNhdCxcbiAgICAnQXJyYXknOiBhcnJheUNvbmNhdFxuICB9XG4gIHJldHVybiB0eXBlTWFwW3R5cGUoYSldKGEsIGIpXG59KVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qKlxuICogQGZ1bmN0aW9uIGN1cnJ5XG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJ5IChmdW4pIHtcbiAgY29uc3QgYXJnc2xlbiA9IGZ1bi5sZW5ndGhcblxuICBpZiAoYXJnc2xlbiA9PT0gMCkge1xuICAgIHJldHVybiBmdW5cbiAgfVxuICByZXR1cm4gY3JlYXRlUmVjdXJzZXIoW10pXG5cbiAgZnVuY3Rpb24gcmVjdXJzZSAoYWNjLCBhcmdzKSB7XG4gICAgY29uc3QgX2FjYyA9IGFjYy5jb25jYXQoYXJncylcbiAgICByZXR1cm4gX2FjYy5sZW5ndGggPCBhcmdzbGVuXG4gICAgICA/IGNyZWF0ZVJlY3Vyc2VyKF9hY2MpXG4gICAgICA6IGZ1bi5hcHBseSh0aGlzLCBfYWNjKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUmVjdXJzZXIgKGFjYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjdXJzZShhY2MsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnRGF0ZScpXG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGVtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZW1wdHkgZXF1aXZhbGVudCBvZiB0aGUgZmlyc3QgYXJndW1lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbXB0eSAoeCkge1xuICByZXR1cm4gbmV3IHguY29uc3RydWN0b3IoKVxufTtcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gZXF1YWxzXG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGVxdWFsaXR5IG9mIDIgaXRlbXNcbiAqIEBwYXJhbSB7Kn0geCAtIExlZnQgc2lkZSBvZiB0aGUgZXF1YWxpdHkgY2hlY2tcbiAqIEBwYXJhbSB7Kn0geSAtIFJpZ2h0IHNpZGUgb2YgdGhlIGVxdWFsaXR5IGNoZWNrXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBuYW4gPSBOdW1iZXIuTmFOXG4gKiBlcXVhbChuYW4sIG5hbikgLy8gcmV0dXJucyB0cnVlXG4gKlxuICogY29uc3QgYXJyMSA9IFswLCAxLCAyLCAzXVxuICogY29uc3QgYXJyMiA9IFtudWxsLCAxLCAyLCAzXVxuICogZXF1YWxzKGFycjEsIGFycjIpIC8vIHJldHVybnMgZmFsc2VcbiAqXG4gKiBlcXVhbHMobmV3IE9iamVjdCh7J2EnOiAwLCAnYic6IDF9KSwgeydhJzogMCwgJ2InOiAxfSkgLy8gdHJ1ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xuaW1wb3J0IGlkZW50aWNhbCBmcm9tICcuL2lkZW50aWNhbCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcbmltcG9ydCBub3QgZnJvbSAnLi9ub3QnXG5pbXBvcnQgb3IgZnJvbSAnLi9vcidcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL29iamVjdC9pcydcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vYXJyYXkvaXMnXG5pbXBvcnQgaXNCb29sZWFuIGZyb20gJy4vYm9vbGVhbi9pcydcbmltcG9ydCBpc051bWJlciBmcm9tICcuL251bWJlci9pcydcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuL3N0cmluZy9pcydcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi9kYXRlL2lzJ1xuaW1wb3J0IGVxdWFsc0FycmF5IGZyb20gJy4vYXJyYXkvZXF1YWxzJ1xuaW1wb3J0IGVxdWFsc09iamVjdCBmcm9tICcuL29iamVjdC9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFscyAoeCwgeSkge1xuICBpZiAoaWRlbnRpY2FsKHgsIHkpKSByZXR1cm4gdHJ1ZVxuXG4gIGlmICh0eXBlKHgpICE9PSB0eXBlKHkpKSByZXR1cm4gZmFsc2VcblxuICBpZiAob3Iobm90KGV4aXN0cyh4KSksIG5vdChleGlzdHMoeSkpKSkgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKHguY29uc3RydWN0b3IgIT09IHkuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZVxuXG4gIGlmIChpc1N0cmluZyh4KSB8fCBpc0Jvb2xlYW4oeCkgfHwgaXNOdW1iZXIoeCkgfHwgaXNEYXRlKHgpKSB7XG4gICAgcmV0dXJuIGlkZW50aWNhbCh4LnZhbHVlT2YoKSwgeS52YWx1ZU9mKCkpXG4gIH1cbiAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzQXJyYXkoeCwgeSlcbiAgfSBlbHNlIGlmIChpc09iamVjdCh4KSkge1xuICAgIHJldHVybiBlcXVhbHNPYmplY3QoeCwgeSlcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBleGlzdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhpc3RzICh4KSB7XG4gIHJldHVybiAhKHggPT0gbnVsbClcbn07XG4iLCIvKipcbiAqIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlbVxuICpcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBpdGVtXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiByZWNlaXZlcyA0IHZhbHVlczogdGhlIGFjY3VtdWxhdG9yLCB0aGUgaXRlbSwgdGhlIGluZGV4LCBhbmQgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0geyp9IGluaXQgLSB0aGUgdGhlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBhIHRoZSBhcnJheSBsaWtlIGl0ZW0gdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcmV0dXJuIHsqfSBUaGUgYWNjdW11bGF0ZWQgdmFsdWVcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGFycmF5Rm9sZCBmcm9tICcuL2FycmF5L2ZvbGQnXG5pbXBvcnQgb2JqZWN0Rm9sZCBmcm9tICcuL29iamVjdC9mb2xkJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBjb25zdCB0eXBlTWFwID0ge1xuICAgICdPYmplY3QnOiBvYmplY3RGb2xkLFxuICAgICdBcnJheSc6IGFycmF5Rm9sZFxuICB9XG4gIHJldHVybiB0eXBlTWFwW3R5cGUoYSldKGNiLCBpbml0LCBhKVxufSlcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gaWRlbnRpY2FsXG4gKiBAZGVzY3JpcHRpb24gY2hlY2tzIGZvciBpZGVudGludGljYWwgaXRlbXNcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgaXNOYW4gZnJvbSAnLi9udW1iZXIvaXNOYW4nXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlkZW50aWNhbCAoeCwgeSkge1xuICBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSB7XG4gICAgcmV0dXJuIDEgLyB4ID09PSAxIC8geVxuICB9XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gISEoaXNOYW4oeCkgJiYgaXNOYW4oeSkpXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gaXNcbiAqIEBkZXNjcmlwdGlvbiBWZXJpZmllcyB0aGUgdHlwZSBvZiB0aGUgcHJvdmlkZWQgYXJndW1lbnRcbiAqXG4gKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlzIChDdG9yLCB2YWwpIHtcbiAgcmV0dXJuIHR5cGUodmFsKSA9PT0gQ3RvclxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuY29uc3QgaXNGdW5jdGlvbiA9IGlzKCdGdW5jdGlvbicpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzSXRlciAoaXRlcikge1xuICByZXR1cm4gaXNGdW5jdGlvbihpdGVyW1N5bWJvbC5pdGVyYXRvcl0pXG59XG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBJdGVyYXRvciBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4zXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYXRvcn0gYVxuICogQHJldHVybiB7SXRlcmF0b3J9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2FsbGJhY2ssIGl0ZXJhdG9yKSB7XG4gIGxldCByID0gW11cbiAgZm9yIChsZXQgbmV4dFZhbHVlID0gaXRlcmF0b3IubmV4dCgpOyBuZXh0VmFsdWUuZG9uZSAhPT0gdHJ1ZTsgbmV4dFZhbHVlID0gaXRlcmF0b3IubmV4dCgpKSB7XG4gICAgci5wdXNoKGNhbGxiYWNrKGl0ZXJhdG9yLnZhbHVlKCkpKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYW4gaXRlcmFibGUgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvbiBtYXBcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiB3aGljaCBtYXBzIG92ZXIgYW4gaXRlcmFibGUuXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBiIC0+IGJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGFycmF5TWFwIGZyb20gJy4vYXJyYXkvbWFwJ1xuaW1wb3J0IG9iamVjdE1hcCBmcm9tICcuL29iamVjdC9tYXAnXG5pbXBvcnQgbWFwTWFwIGZyb20gJy4vbWFwL21hcCdcbmltcG9ydCBzdHJpbmdNYXAgZnJvbSAnLi9zdHJpbmcvbWFwJ1xuaW1wb3J0IGl0ZXJhdG9yTWFwIGZyb20gJy4vaXRlcmF0b3IvbWFwJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuaW1wb3J0IGlzSXRlcmF0b3IgZnJvbSAnLi9pdGVyYXRvci9pcydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBzd2l0Y2ggKHR5cGUoYSkpIHtcbiAgICBjYXNlICdGdW5jdGlvbic6XG4gICAgICByZXR1cm4gY3VycnkoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2IuY2FsbCh0aGlzLCBhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpXG4gICAgICB9KVxuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICByZXR1cm4gb2JqZWN0TWFwKGNiLCBhKVxuICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICByZXR1cm4gc3RyaW5nTWFwKGNiLCBhKVxuICAgIGNhc2UgJ01hcCc6XG4gICAgICByZXR1cm4gbWFwTWFwKGNiLCBhKVxuICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgIHJldHVybiBhcnJheU1hcChjYiwgYSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlzSXRlcmF0b3IoYSlcbiAgICAgICAgPyBpdGVyYXRvck1hcChjYiwgYSlcbiAgICAgICAgOiBhcnJheU1hcChjYiwgYSlcbiAgfVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgTWFwIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge01hcH0gYVxuICogQHJldHVybiB7TWFwfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4uL2VtcHR5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGNvbnN0IHIgPSBlbXB0eShhKVxuICBhLmZvckVhY2goKHYsIGssIG1hcCkgPT4ge1xuICAgIHIuc2V0KGssIGNiKHYsIGssIG1hcCkpXG4gIH0pXG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXJnZXN0IG9mIHRoZSAyIGFyZ3VtZW50cyBwcm92aWRlZFxuICpcbiAqIEBmdW5jdGlvbiBtYXhcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHsqfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1heCAoYSwgYikge1xuICByZXR1cm4gYiA+IGEgPyBiIDogYVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgc21hbGxlc3Qgb2YgdGhlIDIgYXJndW1lbnRzIHByb3ZpZGVkXG4gKlxuICogQGZ1bmN0aW9uIG1pblxuICogQGRlc2MgUmV0dXJucyB0aGUgc21hbGxlc3Qgb2YgdGhlIDIgYXJndW1lbnRzIHByb3ZpZGVkXG4gKiBAc2luY2UgdjEuMC40XG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybiB7Kn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtaW4gKGEsIGIpIHtcbiAgcmV0dXJuIGIgPCBhID8gYiA6IGFcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBub3RcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG5vdCAoeCkge1xuICByZXR1cm4gIXhcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ051bWJlcicpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBpc05hTlxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiBudW1iZXIgaXMgTkFOXG5cbiAqL1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXMnXG5pbXBvcnQgYW5kIGZyb20gJy4uL2FuZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOYW4gKHgpIHtcbiAgcmV0dXJuIGFuZChpc051bWJlcih4KSwgaXNOYU4oeCkpXG59O1xuIiwiLyoqXG5cbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4uL2V4aXN0cydcbmltcG9ydCBub3QgZnJvbSAnLi4vbm90J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KCh4LCB5KSA9PiB7XG4gIGZvciAobGV0IGtleVggaW4geCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3BcbiAgICBpZiAobm90KGVxdWFscyh4W2tleVhdLCB5W2tleVhdKSkpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZm9yIChsZXQga2V5WSBpbiB5KSB7XG4gICAgaWYgKG5vdChleGlzdHMoeFtrZXlZXSkpICYmIGV4aXN0cyh5W2tleVldKSkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBwcml2YXRlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBvKSB7XG4gIGNvbnN0IGsgPSBrZXlzKG8pXG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGsubGVuZ3RoXG4gIGxldCByID0gT2JqZWN0KGluaXQpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciA9IGNiKHIsIG9ba1tpXV0sIGtbaV0sIG8pXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcblxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdPYmplY3QnKVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBvd24ga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBbYl1cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQHJldHVybiB7QXJyYXl9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGtleXMgKGEpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKE9iamVjdChhKSlcbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBvYmplY3QgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vZW1wdHknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgayA9IGtleXMoYSlcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltrW2ldXSA9IGNiKGFba1tpXV0sIGtbaV0sIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBvclxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBvbmUgb3IgdGhlIG90aGVyIGlzIHRydWVcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9yICh4LCB5KSB7XG4gIHJldHVybiB4IHx8IHlcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlbSwgc3RhcnRpbmcgZnJvbSB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgaXRlcmF0b3JcbiAqIFRoZSBpbml0aWFsIHZhbHVlIGlzIHRha2VuIGZyb20gdGhlIGl0ZXJhdG9yLlxuICogUmVkdWNlIHdvcmtzIG9ubHkgb24gQXJyYXlzIGFuZCByZXR1cm5zIGEgdmFsdWVvZiB0aGUgdHlwZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb24gcmVkdWNlXG4gKiBAZGVzYyBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgbGlrZSBvYmplY3QgYW5kIGNhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZW0sIHN0YXJ0aW5nIGZyb20gdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGl0ZXJhdG9yXG4gKiBAc2luY2UgdjEuMC40XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiAtIHJlY2VpdmVzIDQgdmFsdWVzOiB0aGUgYWNjdW11bGF0b3IsIHRoZSBpdGVtLCB0aGUgaW5kZXgsIGFuZCB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBUaGUgaXRlcmF0b3IgdG8gYXBwbHkgdGhlIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHsqfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgZm9sZCBmcm9tICcuL2FycmF5L2ZvbGQnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHJlZHVjZSAoY2IsIGEpIHtcbiAgY29uc3QgYXJyID0gYS5zbGljZSgpXG4gIGNvbnN0IGluaXQgPSBhcnIuc2hpZnQoKVxuICByZXR1cm4gZm9sZChjYiwgaW5pdCwgYXJyKVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBzdHJpbmdDb25jYXRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcbiAgcmV0dXJuIFN0cmluZyhhKSArIFN0cmluZyhiKVxufVxuIiwiLyoqXG5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnU3RyaW5nJylcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgc3RyaW5nIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9ICcnXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciArPSBjYihhLmNoYXJBdChpKSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHR5cGVcbiAqL1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkxKGZ1bmN0aW9uIHR5cGUgKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KS5zbGljZSg4LCAtMSlcbn0pXG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcbmltcG9ydCBtYXAgZnJvbSAnZnVuLmpzL3NyYy9tYXAnXG5pbXBvcnQgZm9sZCBmcm9tICdmdW4uanMvc3JjL2ZvbGQnXG5pbXBvcnQgbWF4IGZyb20gJ2Z1bi5qcy9zcmMvbWF4J1xuaW1wb3J0IG1pbiBmcm9tICdmdW4uanMvc3JjL21pbidcbmltcG9ydCByZWR1Y2UgZnJvbSAnZnVuLmpzL3NyYy9yZWR1Y2UnXG5pbXBvcnQgZXF1YWxzIGZyb20gJ2Z1bi5qcy9zcmMvZXF1YWxzJ1xuaW1wb3J0IGNvbmNhdCBmcm9tICcuL3V0aWwvY29uY2F0J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4vdXRpbC9lbXB0eSdcbmltcG9ydCBkb3QgZnJvbSAnLi91dGlsL2RvdCdcbmltcG9ydCBpZGVudGl0eSBmcm9tICcuL3V0aWwvaWRlbnRpdHknXG5pbXBvcnQgdHJhbnNwb3NlIGZyb20gJy4vdXRpbC90cmFuc3Bvc2UnXG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSAnLi91dGlsL2dlbmVyYXRlJ1xuaW1wb3J0IHNvbHZlIGZyb20gJy4vdXRpbC9zb2x2ZSdcblxuLyoqXG4gKiBAY2xhc3MgTWF0cml4XG4gKiBAY2xhc3NkZXNjIE1hdHJpeCBhcHBsaWNhdGl2ZSBwcm92aWRpbmcgc3RhbmRhcmQgbWF0cml4IG9wZXJhdGlvbnNcbiAqIEBzdW1tYXJ5IFRoZSBNYXRyaXggY2xhc3Mgc2hvdWxkIG5vdCBiZSBpbnN0YW50aWF0ZWQgd2l0aCB0aGUgbmV3IGtleXdvcmQuIEluc3RlYWQgdXNlIHRoZSBNYXRyaXgub2Ygc3ludGF4IHRvIGNyZWF0ZSBhIG5ldyBNYXRyaXguIFVuZm9ydHVuYXRseSBqc2RvY3MgZG9lcyBub3QgYWxsb3cgZm9yIHRoZSBjb25zdHJ1Y3RvciB0byBiZSBoaWRkZW4uXG4gKiBAaGlkZWNvbnRydWN0b3JcbiAqIEBzZWUgb2ZcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqXG4gKi9cbmxldCBNYXRyaXggPSBmdW5jdGlvbiAodmFsKSB7XG4gIHRoaXMuX192YWx1ZSA9IHZhbFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXgub2ZcbiAqIEBkZXNjIENyZWF0ZXMgYSBNYXRyaXggb2JqZWN0IGFuZCBmbGF0dGVucyB0aGUgTWF0cml4XG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSB2YWwgLSBBbiBhcnJheSBvZiBhcnJheXNcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKlxuICovXG5NYXRyaXgub2YgPSBmdW5jdGlvbiAodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBNYXRyaXgpIHJldHVybiB2YWxcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWxcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHJldHVybiBuZXcgTWF0cml4KHZhbClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZSAtIFJldHVybnMgdGhlIHN0cmluZyAnTWF0cml4JyBmb3IgYWxsIE1hdHJpeCBvYmplY3RzXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICogbS50eXBlID09PSAnTWF0cml4J1xuICovXG5NYXRyaXgucHJvdG90eXBlLnR5cGUgPSAnTWF0cml4J1xuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBwcmVjaXNpb24gLSBGbG9hdGluZyBwb2ludCBwcmVjaXNpb24gaXMgc2V0IHRvIDQgYnkgZGVmYXVsdFxuICogQHR5cGUge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0ucHJlY2lzaW9uID09PSA0XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucHJlY2lzaW9uID0gNFxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjc2V0UHJlY2lzaW9uXG4gKiBAZGVzYyBUaGUgcHJlY2lzaW9uIGlzIHVzZWQgaW4gZmxvYXRpbmcgcG9pbnQgY2FsY3VsYXRpb25zIGZvciB0aGUgZG90IHByb2R1Y3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBbcHJlY2lzaW9uPTRdIC0gU2V0IHRoZSBudW1iZXIgb2YgZGVjaW1hbHMgZm9yIHJvdW5kaW5nXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKiBtLnNldFByZWNpc2lvbigxMClcbiAqIG0ucHJlY2lzaW9uID09PSAxMFxuICovXG5NYXRyaXgucHJvdG90eXBlLnNldFByZWNpc2lvbiA9IGZ1bmN0aW9uIChwcmVjaXNpb24pIHtcbiAgdGhpcy5wcmVjaXNpb24gPSBwcmVjaXNpb25cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2lzU3ltbWV0cmljXG4gKiBAZGVzYyBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgTWF0cml4IGlzIHN5bW1ldHJpYyBieSB0ZXN0aW5nIGZvciBlcXVhbGl0eSBvZiB0aGUgdHJhbnNwb3NlZCBNYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogdHJ1ZSA9PT0gQS5pc1N5bW1ldHJpYygpXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmlzU3ltbWV0cmljID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhID0gdGhpcy5fX3ZhbHVlXG4gIGNvbnN0IGIgPSBNYXRyaXgudHJhbnNwb3NlKHRoaXMpLl9fdmFsdWVcbiAgcmV0dXJuIGVxdWFscyhhLCBiKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjaXNTcXVhcmVcbiAqIEBkZXNjIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBNYXRyaXggb2JqZWN0IGlzIHNxdWFyZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiB0cnVlID09PSBBLmlzU3F1YXJlKClcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaXNTcXVhcmUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBlcXVhbHModGhpcy5nZXRDb2xzKCksIHRoaXMuZ2V0Um93cygpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjaXNPcnRob2dvbmFsXG4gKiBAZGVzYyBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgTWF0cml4IGlzIG9ydGhvZ29uYWwgYnkgdGVzdGluZyBmb3IgZXF1YWxpdHkgYmV0d2VlbiBJZGVudGl0eSBNYXRyaXggYW5kIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGUgTWF0cml4IGFuZCBpdHMgdHJhbnNwb3NlLlxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IFtbLTAuMzA5MiwgLTAuOTUxMF0sIFstMC45NTEwLCAwLjMwOTJdXVxuICogY29uc3QgQSA9IE1hdHJpeC5mcm9tQXJyYXkocmVzdWx0KVxuICogdHJ1ZSAgPT09IEEuaXNPcnRob2dvbmFsKClcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pc09ydGhvZ29uYWwgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IEF4QXQgPSB0aGlzLmRvdCh0aGlzLnRyYW5zcG9zZSgpKVxuICBjb25zdCBJID0gdGhpcy5pZGVudGl0eSgpXG4gIHJldHVybiBlcXVhbHMoQXhBdCwgSSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2dldENvbHNcbiAqIEBkZXNjIE51bWJlciBpbmRpY2F0aW5nIHRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgTWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiBBLmdldENvbHMoKSAgPT09IDJcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0Q29scyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZVswXS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2VxdWFsc1xuICogQGRlc2MgRnVuY3Rpb24gcmV0dXJuaW5nIGEgYm9vbGVhbiB0ZXN0aW5nIGZvciBlcXVhbGl0eSBvZiB0aGUgdmFsdWVzIG9mIGEgTWF0cml4IG9yIEFycmF5XG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIE1hdHJpeCBvciBBcnJheSB0byBjb21wYXJlIGZvciBlcXVhbGl0eVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhID0gW1sxLCAxXSwgWzEsIDFdXVxuICogdmFyIEEgPSBNYXRyaXgub2YoYSlcbiAqIHZhciBCID0gTWF0cml4Lm9mKGEpXG4gKiB0cnVlICA9PT0gQS5lcXVhbHMoQilcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gZXF1YWxzKHRoaXMuX192YWx1ZSwgTS5fX3ZhbHVlIHx8IE0pXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNnZXRSb3dzXG4gKiBAZGVzYyBOdW1iZXIgaW5kaWNhdGluZyB0aGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIE1hdHJpeFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogQS5nZXRSb3dzKCkgIC8vIDJcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5nZXRSb3dzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3ZhbHVlLmxlbmd0aFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZ2V0U2hhcGVcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogQS5nZXRTaGFwZSgpICAvLyBbMiwgMl1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5nZXRTaGFwZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFt0aGlzLmdldFJvd3MoKSwgdGhpcy5nZXRDb2xzKCldXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNtYXBcbiAqIEBkZXNjcmlwdGlvbiBNYXBzIG92ZXIgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeCB1c2luZyBhIG1hcCBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZiAtIEFuIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiBtLm1hcCh4ID0+IHgubWFwKHkgPT4geSsgMSkpXG4gKiAvLyBbWzIsIDJdLCBbMiwgMl1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YobWFwKGYpKHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5tYXBcbiAqIEBkZXNjcmlwdGlvbiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgbWFwcyBvdmVyIHRoZSByb3dzIG9mIHRoZSBtYXRyaXggdXNpbmcgYSBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGYgLSBBbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IE0gLSBNYXRyaXggb3IgYXJyYXkgdG8gbWFwXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gTWF0cml4Lm1hcCh4PSA+IHgubWFwKHkgPT4geSsgMSksIFtbMSwgMV0sIFsxLCAxXV0pXG4gKiAvLyBbWzIsIDJdLCBbMiwgMl1dXG4gKlxuICovXG5NYXRyaXgubWFwID0gY3VycnkoZnVuY3Rpb24gKGYsIE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5tYXAoZilcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmVkdWNlIHRoZSBtYXRyaXggcm93cyB1c2luZyBhIHJlZHVjZSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZiAtIEEgcmVkdWNlL2ZvbGQgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEZsYXR0ZW4gTWF0cml4XG4gKiBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSkuZm9sZCgocHJldiwgbmV4dCkgPT4gcHJldi5jb25jYXQobmV4dCkpXG4gKiAvLyBbMSwgMSwgMSwgMV1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5mb2xkID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihmb2xkKGYsIFtdKSh0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguZm9sZFxuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBmdW5jdGlvbiB0byByZWR1Y2UgdGhlIG1hdHJpeCByb3dzIHVzaW5nIGEgcmVkdWNlIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIC0gQSByZWR1Y2UvZm9sZCBmdW5jdGlvblxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IE0gLSBUaGUgTWF0cml4IHRvIHJlZHVjZVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG5cbiAqIC8vIFN1bSBvZiBhbGwgbWF0cml4IHZhbHVlc1xuICogY29uc3QgcmVkdWNlciA9IChwcmV2LCBuZXh0KSA9PiBOdW1iZXIocHJldikgKyBuZXh0LnJlZHVjZSgoYWNjLCB4KSA9PiBhY2MgKyB4LCAwKVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dXG4gKiBNYXRyaXguZm9sZChyZWR1Y2VyLCBBKVxuICogLy8gNFxuICovXG5NYXRyaXguZm9sZCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkuZm9sZChmKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2FwXG4gKiBAZGVzY3JpcHRpb24gRnVuY3Rpb24gdGhhdCBhcHBsaWVzIGEgZnVuY3Rpb24gdG8gYSBNYXRyaXhcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gTWF0cml4IG9yIEFycmF5IHRvIGFwcGx5IGEgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGYgPSB4ID0+IHgucmVkdWNlKChwcmV2LCBuZXh0KSA9PiBwcmV2ICsgbmV4dClcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAyLCAzXSwgWzQsIDUsIDZdLCBbNywgOCwgOV1dKVxuICogTWF0cml4Lm9mKGYpLmFwKE0pXG4gKiAvLyBbWzZdLCBbMTVdLCBbMjRdXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYXAgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLm1hcCh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5hcFxuICogQGRlc2NyaXB0aW9uIEN1cnJpZWQgZnVuY3Rpb24gdGhhdCBhcHBsaWVzIGEgZnVuY3Rpb24gdG8gYSBNYXRyaXhcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGYgLSBGdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSBNYXRyaXggYXMgaW5wdXRcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gTWF0cml4IG9yIEFycmF5IHRvIGFwcGx5IGEgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGYgPSB4ID0+IHgucmVkdWNlKChwcmV2LCBuZXh0KSA9PiBwcmV2ICsgbmV4dClcbiAqIE1hdHJpeC5hcChmLCBbWzEsIDIsIDNdLCBbNCwgNSwgNl0sIFs3LCA4LCA5XV0pXG4gKiAvLyBbWzZdLCBbMTVdLCBbMjRdXG4gKi9cbk1hdHJpeC5hcCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZikuYXAoTSlcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNjb25jYXRcbiAqIEBkZXNjcmlwdGlvbiBDb25jYXRlbmF0ZXMgMiBNYXRyaWNlcyB1c2luZyBhIGZ1bmN0aW9uIGFzIG9wZXJhdG9yXG4gKiBAcGFyYW0ge01hdHJpeH0gTSAtIFRoZSByaWdodCBzaWRlIG9mIHRoZSBjb25jYXRlbmF0aW9uL3Byb2R1Y3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmPWNvbmNhdF0gLSBBIGN1cnJpZWQgZnVuY3Rpb24gYWNjZXB0aW5nIDIgbWF0cmljZXMgYXMgaW5wdXRcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbWzAsIDEsIDFdLCBbMiwgMywgNF1dXG4gKiBjb25zdCBiID0gW1syLCAyLCAyXSwgWzMsIDMsIDNdXVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihiKVxuICogY29uc3QgTSA9IEEuY29uY2F0KEIpXG4gKiAvLyBbWzAsIDEsIDEsIDIsIDIsIDJdLCBbMiwgMywgNCwgMywgMywgM11dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uIChNLCBmID0gY29uY2F0KSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubWFwKGYoTSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5jb25jYXRcbiAqIEBkZXNjcmlwdGlvbiBBIGN1cnJpZWQgZnVuY3Rpb24gdGhhdCBjb25jYXRlbmF0ZXMgMiBNYXRyaWNlcyB1c2luZyBhIGZ1bmN0aW9uIGFzIG9wZXJhdG9yXG4gKiBAcGFyYW0ge01hdHJpeH0gQSAtIExlZnQgc2lkZSBNYXRyaXggb2YgdGhlIGNvbmNhdGVuYXRpb25cbiAqIEBwYXJhbSB7TWF0cml4fSBCIC0gUmlnaHQgc2lkZSBNYXRyaXggb2YgdGhlIGNvbmNhdGVuYXRpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmPWNvbmNhdF0gLSBBIGN1cnJpZWQgZnVuY3Rpb24gYWNjZXB0aW5nIDIgbWF0cmljZXMgYXMgaW5wdXRcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbWzAsIDEsIDFdLCBbMiwgMywgNF1dXG4gKiBjb25zdCBiID0gW1syLCAyLCAyXSwgWzMsIDMsIDNdXVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihiKVxuICogY29uc3QgTSA9IE1hdHJpeC5jb25jYXQoQSwgQilcbiAqIC8vIFtbMCwgMSwgMSwgMiwgMiwgMl0sIFsyLCAzLCA0LCAzLCAzLCAzXV1cbiAqXG4gKi9cbk1hdHJpeC5jb25jYXQgPSBjdXJyeShmdW5jdGlvbiAoQSwgQiwgZiA9IGNvbmNhdCkge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLm1hcChmKEIpKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2VtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhbiBlbXB0eSBNYXRyaXggZnJvbSBhbiBleGlzdGluZyBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubWFwKGVtcHR5KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGFuIGVtcHR5IE1hdHJpeCBmcm9tIGFuIGV4aXN0aW5nIE1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IFtyb3dzPTBdIC0gUm93cyB0byBnZW5lcmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtjb2xzPTBdIC0gQ29scyB0byBnZW5lcmF0ZVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LmVtcHR5ID0gY3VycnkoZnVuY3Rpb24gKHJvd3MgPSAwLCBjb2xzID0gMCkge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scykgLy8gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkocm93cykpLm1hcCh4ID0+IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGNvbHMpKSlcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5tYXAoZW1wdHkpXG59KVxuXG4vLyAjIyMjICMjIyMgIyMjIyAvL1xuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjaWRlbnRpdHlcbiAqIEBkZXNjIFJldHVybnMgYW4gaWRlbnRpdHkgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1sxLCAyLCAzXSwgWzQsIDUsIDZdXVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQWlkZW50aXR5ID0gQS5pZGVudGl0eSgpXG4gKiAvLyBbWzEsIDAsIDBdLCBbMCwgMSwgMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmlkZW50aXR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKGlkZW50aXR5KS5hcCh0aGlzKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguaWRlbnRpdHlcbiAqIEBkZXNjIGN1cnJpZWQgZnVjbnRpb24gdGhhdCByZXR1cm5zIGFuIGlkZW50aXR5IG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5pZGVudGl0eSgzLCAyKVxuICogLy8gW1sxLCAwLCAwXSwgWzAsIDEsIDBdXVxuICpcbiAqL1xuTWF0cml4LmlkZW50aXR5ID0gY3VycnkoZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpIC8vIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4gIHJldHVybiBNYXRyaXgub2YoaWRlbnRpdHkpLmFwKG0pXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjY29tYmluZVxuICogQGRlc2MgQ29uY2F0ZW5hdGVzIDIgTWF0cmljZXMgdG9nZXRoZXIuXG4gKiBAc2VlIE1hdHJpeC5jb25jYXRcbiAqIEBwYXJhbSB7TWF0cml4IH0gTSAtIFJpZ2h0IHNpZGUgTWF0cml4IG9mIHRoZSBjb21iaW5lIG9wZXJhdGlvblxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jb21iaW5lID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5jb25jYXQoTWF0cml4Lm9mKE0pLCBjb25jYXQpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5jb21iaW5lXG4gKiBAZGVzYyBDdXJyaWVkIGZ1Y250aW9uIHRoYXQgY29tYmluZXMgMiBNYXRyaWNlc1xuICogQHNlZSBNYXRyaXguY29uY2F0XG4gKiBAcGFyYW0ge01hdHJpeH0gQSAtIExlZnQgc2lkZSBvZiB0aGUgY29tYmluZSBvcGVyYXRvclxuICogQHBhcmFtIHtNYXRyaXh9IEEgLSBSaWdodCBzaWRlIG9mIHRoZSBjb21iaW5lIG9wZXJhdG9yXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXguY29tYmluZSA9IGN1cnJ5KGZ1bmN0aW9uIChBLCBCKSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkuY29uY2F0KE1hdHJpeC5vZihCKSwgY29uY2F0KVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2RvdFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGRvdCBwcm9kdWN0IGJldHdlZW4gMiBtYXRyaWNlc1xuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IE0gLSBSaWdodCBzaWRlIG9mIHRoZSBkb3QgcHJvZHVjdFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQ3JlYXRlIG1hdHJpeFxuICogY29uc3QgbSA9IE1hdHJpeC5vZihbWzEsIDJdLCBbMywgNF1dKVxuICpcbiAqIC8vIEdlbmVyYXRlIGlkZW50aXR5IG1hdHJpeFxuICogY29uc3QgSSAgPSBtLmlkZW50aXR5KCkgLy8gW1sxLCAwXSwgWzAsIDFdXVxuICpcbiAqIGlmKG0uZG90KEkpLmVxdWFscyhtKSkge1xuICogICAgY29uc29sZS5sb2coJ0RvdCBwcm9kdWN0IHdpdGggaWRlbnRpdHkgbWF0cml4IHJldHVybnMgdGhlIHNhbWUgbWF0cml4JylcbiAqIH1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5jb25jYXQoTWF0cml4Lm9mKE0pLCBkb3QodGhpcy5wcmVjaXNpb24pKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguZG90XG4gKiBAZGVzY3JpcHRpb24gQ3VycmllZCBmdWNudGlvbiB0aGF0IHJldHVybnMgdGhlIGRvdCBwcm9kdWN0IG9mIDIgbWF0cmljZXNcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBBIC0gTGVmdCBzaWRlIG9mIHRoZSBkb3QgcHJvZHVjdFxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IEIgLSBSaWdodCBzaWRlIG9mIHRoZSBkb3QgcHJvZHVjdFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKiBjb25zdCBhID0gW1sxLCAyLCAzXSwgWzQsIDUsIDZdXVxuICogY29uc3QgYiA9IFtbNywgOF0sIFs5LCAxMF0sIFsxMSwgMTJdXVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqXG4gKiBNYXRyaXguZG90KEEsIEIpIC8vIFtbNTgsIDY0XSwgWzEzOSwgMTU0XV1cbiAqXG4gKi9cbk1hdHJpeC5kb3QgPSBjdXJyeShmdW5jdGlvbiAoQSwgQikge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLmRvdChNYXRyaXgub2YoQikpXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZmlsbFxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCB0aGUgcHJvdmlkZWQgbWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIC0gRnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXMgYSB2YWx1ZVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsMiwzXSwgWzMsMiwxXSwgWzQsNSw2XV0pLmZpbGwoeCA9PiA0MilcbiAqIC8vIFtbNDIsNDIsNDJdLCBbNDIsNDIsNDJdLCBbNDIsNDIsNDJdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tYXAobWFwKHggPT4gZih4KSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCN6ZXJvc1xuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCB6ZXJvc1xuICogQHJldHVybnMge01hdHJpeH1cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLDIsM10sIFszLDIsMV0sIFs0LDUsNl1dKS56ZXJvcygpXG4gKiAvLyBbWzAsMCwwXSwgWzAsMCwwXSwgWzAsMCwwXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuemVyb3MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuZmlsbCh4ID0+IDApXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC56ZXJvc1xuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCB6ZXJvc1xuICogQHBhcmFtIHtOdW1iZXJ9IHJvd3MgLSBEZWZpbmVzIHRoZSByb3dzIG9mIHRoZSBtYXRyaXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2xzIC0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lnplcm9zKDMsIDMpXG4gKiAvLyBbWzAsMCwwXSwgWzAsMCwwXSwgWzAsMCwwXV1cbiAqXG4gKi9cbk1hdHJpeC56ZXJvcyA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKVxuICByZXR1cm4gTWF0cml4Lm9mKG0pLmZpbGwoeCA9PiAwKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNvbmVzXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIG9uZXNcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLDIsM10sIFszLDIsMV0sIFs0LDUsNl1dKS5vbmVzKClcbiAqIC8vIFtbMSwxLDFdLCBbMSwxLDFdLCBbMSwxLDFdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5vbmVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoeCA9PiAxKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgub25lc1xuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCBvbmVzXG4gKiBAcGFyYW0ge051bWJlcn0gcm93cyAtIERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IGNvbHMgLSBEZWZpbmVzIHRoZSBjb2x1bW5zIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub25lcygxLCAxKVxuICogLy8gW1sxLDEsMV0sIFsxLDEsMV0sIFsxLDEsMV1dXG4gKlxuICovXG5NYXRyaXgub25lcyA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKVxuICByZXR1cm4gTWF0cml4Lm9mKG0pLmZpbGwoeCA9PiAxKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjcmFuZG9tXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHJhbmRvbSB2YWx1ZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmID0gZSA9PiBNYXRoLnJhbmRvbSgpICogMiAtIDFdIC0gRnVuY3Rpb24gcHJvZHVjaW5nIHJhbmRvbSB2YWx1ZXMsIGNhbiBiZSBhbnkgdHlwZSBvZiB2YWx1ZVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbiAoZiA9IGUgPT4gTWF0aC5yYW5kb20oKSAqIDIgLSAxKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuZmlsbChmKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgucmFuZG9tXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHJhbmRvbSBudW1iZXJzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIC0gRnVuY3Rpb24gd2hpY2ggcmV0dXJucyByYW5kb20gdmFsdWVzLiBEZWZhdWx0IHJhbmRvbSB2YWx1ZXMgYXJlIGJldHdlZW4gLTEgYW5kIDFcbiAqIEBwYXJhbSB7TnVtYmVyfSByb3dzIC0gRGVmaW5lcyB0aGUgcm93cyBvZiB0aGUgbWF0cml4XG4gKiBAcGFyYW0ge051bWJlcn0gY29scyAtIERlZmluZXMgdGhlIGNvbHVtbnMgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnJhbmRvbSA9IGZ1bmN0aW9uIChmID0gZSA9PiAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSwgcm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKGYpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCN0b0FycmF5XG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBhcnJheSBmcm9tIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3ZhbHVlLm1hcChyb3cgPT4gcm93Lm1hcChjb2wgPT4gY29sKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2Nsb25lXG4gKiBAZGVzYyBSZXR1cm5zIGEgY2xvbmUgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgTSA9IE1hdHJpeC5mcm9tQXJyYXkodGhpcy5fX3ZhbHVlKVxuICBNLnNldFByZWNpc2lvbih0aGlzLnByZWNpc2lvbilcbiAgcmV0dXJuIE1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2Zyb21BcnJheVxuICogQGRlc2MgUmV0dXJucyBhIE1hdHJpeCBmcm9tIGFuIGFycmF5XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbk1hdHJpeC5mcm9tQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBNYXRyaXgub2YobWFwKHJvdyA9PiBtYXAoY29sID0+IGNvbCkocm93KSkoYXJyKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3RyYW5zcG9zZVxuICogQGRlc2MgUmV0dXJucyBhIHRyYW5zcG9zZWQgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFstMSwgMl0sIFszLCA0XSwgWy04LCAyXSlcbiAqIGNvbnN0IGIgPSBBLnRyYW5zcG9zZSgpLnRvQXJyYXkoKVxuICogLy8gcmV0dXJucyBbWy0xLCAzLC04XSwgWzIsIDQsIDJdXVxuICovXG5NYXRyaXgucHJvdG90eXBlLnRyYW5zcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihmb2xkKHRyYW5zcG9zZSwgW10sIHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC50cmFuc3Bvc2VcbiAqIEBkZXNjIFJldHVybnMgYSB0cmFuc3Bvc2VkIE1hdHJpeFxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IE0gLSBBIE1hdHJpeCBvciBhIG1hdHJpeCBhcnJheVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYSA9IFstMSwgMl0sIFszLCA0XSwgWy04LCAyXVxuICogY29uc3QgYiA9IE1hdHJpeC50cmFuc3Bvc2UoYSkudG9BcnJheSgpXG4gKiAvLyByZXR1cm5zIFtbLTEsIDMsLThdLCBbMiwgNCwgMl1dXG4gKi9cbk1hdHJpeC50cmFuc3Bvc2UgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLnRyYW5zcG9zZSgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNhZGRcbiAqIEBkZXNjIEFkZHMgYSBudW1iZXIgb3IgYSBNYXRyaXggdG8gdGhpc1xuICogQHBhcmFtIHtNYXRyaXh8TnVtYmVyfSBNIC0gQWRkIGEgTWF0cml4IG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5hZGQoMSkgLy8gW1s2LCA1XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLmFkZChCKSAvLyBbWzEwLCAxMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChNKSB7XG4gIGlmIChNIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpICE9PSBNLmdldENvbHMoKSB8fCB0aGlzLmdldFJvd3MoKSAhPT0gTS5nZXRSb3dzKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3QgYWRkJylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKChyb3csIGlkeCkgPT4gbWFwKCh2YWwsIGpkeCkgPT4gdmFsICsgTS5fX3ZhbHVlW2lkeF1bamR4XSkocm93KSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tYXAobWFwKHggPT4geCArIE0pKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNzdWJ0cmFjdFxuICogQGRlc2MgU3VidHJhY3RzIGEgbnVtYmVyIG9yIGEgTWF0cml4IGZyb20gdGhpc1xuICogQHBhcmFtIHtNYXRyaXh8TnVtYmVyfSBNIC0gU3VidHJhY3QgYSBNYXRyaXggb3IgYSBudW1iZXJcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLnN1YnRyYWN0KDEpIC8vIFtbNCwgMl1dXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKFtbNSwgNV1dKVxuICogQi5zdWJ0cmFjdChCKSAvLyBbWzAsIDBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uIChNKSB7XG4gIGlmIChNIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpICE9PSBNLmdldENvbHMoKSB8fCB0aGlzLmdldFJvd3MoKSAhPT0gTS5nZXRSb3dzKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3Qgc3VidHJhY3QnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAoKHJvdywgaWR4KSA9PiBtYXAoKHZhbCwgamR4KSA9PiB2YWwgLSBNLl9fdmFsdWVbaWR4XVtqZHhdKShyb3cpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm1hcChtYXAoeCA9PiB4IC0gTSkpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I211bHRpcGx5XG4gKiBAZGVzYyBNdXRsaXBseSBhIHNjYWxhciBvciBhIG1hdHJpeCB3aXRoIGEgbWF0cml4LiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIG11bHRpcGxpY2F0aW9uIGlzIG5vdCBwb3NzaWJsZS5cbiAqIEBwYXJhbSB7TWF0cml4fE51bWJlcn0gTSAtIEEgTWF0cml4IE0gb3IgYSBOdW1iZXIgdG8gbXVsdGlwbHkgYSBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLm11bHRpcGx5KDIpIC8vIFtbMTAsIDhdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIubXVsdGlwbHkoQikgLy8gW1syNSwgMjVdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIChNKSB7XG4gIGlmIChNIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpICE9PSBNLmdldENvbHMoKSB8fCB0aGlzLmdldFJvd3MoKSAhPT0gTS5nZXRSb3dzKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2Ugc3RhdGljIG1ldGhvZCBcXCdkb3RcXCcgdG8gZG8gbWF0cml4IG11bHRpcGxpY2F0aW9uJylcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3QgY3JlYXRlIGhhZGFtYXJkIHByb2R1Y3QnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAoKHJvdywgaWR4KSA9PiBtYXAoKGNvbCwgamR4KSA9PiBjb2wgKiBNLl9fdmFsdWVbaWR4XVtqZHhdKShyb3cpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm1hcChtYXAoeCA9PiB4ICogTSkpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2FkZGl0aXZlaW52ZXJzZVxuICogQGRlc2MgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtYXRyaXggb2J0YWluZWQgYnkgY2hhbmdpbmcgdGhlIHNpZ24gb2YgZXZlcnkgbWF0cml4IGVsZW1lbnQuIFRoZSBhZGRpdGl2ZSBpbnZlcnNlIG9mIG1hdHJpeCBBIGlzIHdyaXR0ZW4g4oCTQS5cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LC01XSwgWy00LCA0XV0pXG4gKiBjb25zdCBtaW51c0EgPSBBLmFkZGl0aXZlaW52ZXJzZSgpXG4gKiAvLyBbWy01LCA1XSwgWzQsIC00XV1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5hZGRpdGl2ZWludmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubXVsdGlwbHkoLTEpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNoYWRhbWFyZFxuICogQGRlc2MgSGFkYW1hciBpcyBhbiBhbGlhcyBvZiB0aGUgbXVsdGlwbHkgZnVuY3Rpb25cbiAqIEBzZWUgbXVsdGlwbHlcbiAqIEBwYXJhbSB7TWF0cml4fE51bWJlcn0gTSAtIEEgTWF0cml4IE0gb3IgYSBOdW1iZXIgdG8gbXVsdGlwbHkgYSBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLmhhZGFtYXJkKDIpIC8vIFtbMTAsIDhdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIuaGFkYW1hcmQoQikgLy8gW1syNSwgMjVdXVxuXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaGFkYW1hcmQgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm11bHRpcGx5KE0pXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNsdVxuICogQGRlc2MgQ2FsY3VsYXRlcyBMVSBkZWNvbXBvc2l0aW9uIG9mIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXhbXX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gW1szLCAtNywgLTIsIDJdLCBbLTMsIDUsIDEsIDBdLCBbNiwgLTQsIDAsIC01XSwgWy05LCA1LCAtNSwgMTJdXVxuICogY29uc3QgQSA9IE1hdHJpeC5mcm9tQXJyYXkocmVzdWx0KVxuICogY29uc3QgbHUgPSBBLmx1KClcbiAqIC8vIEwuX192YWx1ZSA9IFsgWyAxLCAwLCAwLCAwIF0sIFsgLTEsIDEsIDAsIDAgXSwgWyAyLCAtNSwgMSwgMCBdLCBbIC0zLCA4LCAzLCAxIF0gXVxuICogLy8gVS5fX3ZhbHVlID0gIFsgWyAzLCAtNywgLTIsIDIgXSwgWyAwLCAtMiwgLTEsIDIgXSwgWyAwLCAwLCAtMSwgMSBdLCBbIDAsIDAsIDAsIC0xIF0gXVxuICogTWF0cml4LmRvdChsdVswXSwgbHVbMV0pIC8vIHJldHVybnMgY2xvbmUgb2YgQVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5sdSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbiA9IHRoaXMuZ2V0Um93cygpXG4gIGNvbnN0IHRvbCA9IDFlLTZcbiAgY29uc3QgQSA9IHRoaXMuY2xvbmUoKVxuICBjb25zdCBMID0gdGhpcy56ZXJvcygpXG4gIGNvbnN0IFUgPSB0aGlzLnplcm9zKClcblxuICBmb3IgKGxldCBrID0gMDsgayA8IG47ICsraykge1xuICAgIGlmIChNYXRoLmFicyhBLl9fdmFsdWVba11ba10pIDwgdG9sKSB0aHJvdyBFcnJvcignQ2Fubm90IHByb2NlZWQgd2l0aG91dCBhIHJvdyBleGNoYW5nZScpXG4gICAgTC5fX3ZhbHVlW2tdW2tdID0gMVxuICAgIGZvciAobGV0IGkgPSBrICsgMTsgaSA8IG47ICsraSkge1xuICAgICAgTC5fX3ZhbHVlW2ldW2tdID0gQS5fX3ZhbHVlW2ldW2tdIC8gQS5fX3ZhbHVlW2tdW2tdXG4gICAgICBmb3IgKGxldCBqID0gayArIDE7IGogPCBuOyArK2opIHtcbiAgICAgICAgQS5fX3ZhbHVlW2ldW2pdID0gQS5fX3ZhbHVlW2ldW2pdIC0gTC5fX3ZhbHVlW2ldW2tdICogQS5fX3ZhbHVlW2tdW2pdXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGwgPSBrOyBsIDwgbjsgKytsKSB7XG4gICAgICBVLl9fdmFsdWVba11bbF0gPSBBLl9fdmFsdWVba11bbF1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtMLCBVXVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjcnJlZlxuICogQGRlc2MgUmV0dXJucyBhIE1hdHJpeCBjb250YWluaW5nIHRoZSByb3cgcmVkdWNlZCBlY2hlbG9uIGZvcm1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBBID0gTWF0cml4Lm9mKFtbLTEsIDFdLCBbLTEsIDBdLCBbMCwgLTFdLCBbLTEsIC0yXV0pXG4gKiBBLnJyZWYoKSAvLyAgWyBbIDEsIDAgXSwgWyAtMCwgMSBdLCBbIDAsIDAgXSwgWyAwLCAwIF0gXVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJyZWYgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBsZWFkID0gMFxuICBjb25zdCByZXN1bHRNYXRyaXggPSB0aGlzLmNsb25lKClcblxuICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuZ2V0Um93cygpOyArK3IpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgPD0gbGVhZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdE1hdHJpeFxuICAgIH1cbiAgICBsZXQgaSA9IHJcbiAgICB3aGlsZSAocmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bbGVhZF0gPT09IDApIHtcbiAgICAgICsraVxuICAgICAgaWYgKHRoaXMuZ2V0Um93cygpID09PSBpKSB7XG4gICAgICAgIGkgPSByXG4gICAgICAgICsrbGVhZFxuICAgICAgICBpZiAodGhpcy5nZXRDb2xzKCkgPT09IGxlYWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0TWF0cml4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdG1wID0gcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1cbiAgICByZXN1bHRNYXRyaXguX192YWx1ZVtpXSA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdXG4gICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl0gPSB0bXBcblxuICAgIGxldCB2YWwgPSByZXN1bHRNYXRyaXguX192YWx1ZVtyXVtsZWFkXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5nZXRDb2xzKCk7ICsraikge1xuICAgICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bal0gLz0gdmFsXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldFJvd3MoKTsgKytpKSB7XG4gICAgICBpZiAoaSA9PT0gcikgY29udGludWVcbiAgICAgIHZhbCA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2xlYWRdXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0Q29scygpOyArK2opIHtcbiAgICAgICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bal0gLT0gdmFsICogcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bal1cbiAgICAgIH1cbiAgICB9XG4gICAgbGVhZCsrXG4gIH1cbiAgcmV0dXJuIHJlc3VsdE1hdHJpeFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjc29sdmVcbiAqIEBkZXNjIFJldHVybnMgdGhlIHNvbHV0aW9uIGZvciBhIHN5c3RlbSBvZiBsaW5lYXIgZXF1YXRpb25zXG4gKiBAcGFyYW0ge0FycmF5fSBiIC0gVGhlIG51bWJlcnMgZm9yIHdoaWNoIHRvIHNvbHZlIHRoZSBzeXN0ZW0gb2YgbGluZWFyIGVxdWF0aW9uc1xuICogQHJldHVybnMge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBTb2x2ZSB4QSA9IGJcbiAqIC8vIDV4ICsgeSAgPSA3XG4gKiAvLyAzeCAtIDR5ID0gMThcbiAqIC8vIFNvbHV0aW9uIGZvciB4IGFuZCB5OlxuICogLy8geCA9IDJcbiAqIC8vIHkgPSAtM1xuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCAxXSwgWzMsIC00XV0pXG4gKiBjb25zdCBzb2x2ZUEgPSBBLnNvbHZlKFs3LCAxOF0pIC8vIFsyLCAtM11cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc29sdmUgPSBmdW5jdGlvbiAoYikge1xuICBjb25zdCBMVSA9IHRoaXMubHUoKVxuICBjb25zdCBMID0gTFVbMF1cbiAgY29uc3QgVSA9IExVWzFdXG4gIGNvbnN0IG4gPSB0aGlzLmdldFJvd3MoKVxuICAvLyBsZXQgcyA9IDBcbiAgLy8gY29uc3QgYyA9IFtdXG4gIC8vIGNvbnN0IHggPSBbXVxuXG4gIHJldHVybiBzb2x2ZShuLCBMLCBVLCBiKVxuXG4gIC8vIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgKytrKSB7XG4gIC8vICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyArK2opIHtcbiAgLy8gICAgIHMgPSBzICsgTC5fX3ZhbHVlW2tdW2pdICogY1tqXVxuICAvLyAgIH1cbiAgLy8gICBjW2tdID0gYltrXSAtIHNcbiAgLy8gICBzID0gMFxuICAvLyB9XG4gIC8vIGZvciAobGV0IGEgPSBuIC0gMTsgYSA+IC0xOyAtLWEpIHtcbiAgLy8gICBsZXQgdCA9IDBcbiAgLy8gICBmb3IgKGxldCBiID0gYSArIDE7IGIgPCBuOyArK2IpIHtcbiAgLy8gICAgIHQgPSB0ICsgVS5fX3ZhbHVlW2FdW2JdICogeFtiXVxuICAvLyAgIH1cbiAgLy8gICB4W2FdID0gKGNbYV0gLSB0KSAvIFUuX192YWx1ZVthXVthXVxuICAvLyB9XG4gIC8vIHJldHVybiB4XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNpbnZlcnNlXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIGEgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsyLCA0XV0pLmludmVyc2UoKVxuICogLy8gWyBbIDIsIC0wLjUgXSwgWyAtMSwgMC41IF0gXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pbnZlcnNlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBID0gdGhpcy5jbG9uZSgpXG4gIGNvbnN0IEkgPSBBLmlkZW50aXR5KClcbiAgY29uc3QgSW52ID0gQS5jb25jYXQoSSkucnJlZigpXG5cbiAgY29uc3QgcmVzdWx0ID0gSW52Ll9fdmFsdWUucmVkdWNlKChyZXN1bHQsIHgsIGlkeCkgPT4ge1xuICAgIGNvbnN0IGhhbGYgPSB4Lmxlbmd0aCAvIDJcbiAgICByZXN1bHQucHVzaCh4LnNsaWNlKGhhbGYsIHgubGVuZ3RoKSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIFtdKVxuICByZXR1cm4gTWF0cml4Lm9mKHJlc3VsdClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3JhbmtcbiAqIEBkZXNjIE51bWJlciBpbmRpY2F0aW5nIHRoZSBtYXhpbXVtIG51bWJlciBvZiBsaW5lYXJseSBpbmRlcGVuZGVudCBjb2x1bW5zLlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5yYW5rID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBycmVmID0gdGhpcy5ycmVmKClcbiAgbGV0IHJlc3VsdCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBycmVmLmdldENvbHMoKTsgKytpKSB7XG4gICAgcmVzdWx0ICs9IHJyZWYuX192YWx1ZVtpXVtpXVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2RpbWVuc2lvblxuICogQGRlc2MgTnVtYmVyIGluZGljYXRpbmcgdGhlIG1heGltdW0gbnVtYmVyIG9mIGxpbmVhcmx5IGluZGVwZW5kZW50IGNvbHVtbnMuXG4gKiBAc2VlIHJhbmtcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGltZW5zaW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yYW5rKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2RpYWdcbiAqIEBkZXNjIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5vbmVzKDMsIDMpLmRpYWcoKVxuICogLy8gWzEsIDEsIDFdXG4gKlxuICogY29uc3QgZGlhZzAgPSBNYXRyaXguemVyb3MoNSwgNSkuZGlhZygpXG4gKiAvLyBbMCwgMCwgMCwgMCwgMF1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGlhZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZvbGQoKGFjYywgeCwgaWR4KSA9PiB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoeFtpZHhdKVxuICB9KShbXSkodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXguZGlhZ1xuICogQGRlc2MgUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIE1hdHJpeCBmcm9tIHdoaWNoIHRvIHJldHVybiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXguZGlhZyhbWzIsIDFdLCBbMSwgNV1dKVxuICogLy8gWzIsIDVdXG4gKlxuICovXG5NYXRyaXguZGlhZyA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkuZGlhZygpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNkaWFncHJvZHVjdFxuICogQGRlc2MgUmV0dXJucyB0aGUgcHJvZHVjdCBvZiB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5kaWFncHJvZHVjdCgpXG4gKiAvLyAxXG4gKlxuICogY29uc3QgZGlhZzAgPSBNYXRyaXguemVyb3MoNSwgNSkuZGlhZ3Byb2R1Y3QoKVxuICogLy8gMFxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kaWFncHJvZHVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZvbGQoKGFjYywgeCwgaWR4KSA9PiB7XG4gICAgYWNjICo9IHhbaWR4XVxuICAgIHJldHVybiBhY2NcbiAgfSkoMSkodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXguZGlhZ3Byb2R1Y3RcbiAqIEBkZXNjIFJldHVybnMgdGhlIHByb2R1Y3Qgb2YgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gTWF0cml4IGZyb20gd2hpY2ggdG8gcmV0dXJuIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXguZGlhZ3Byb2R1Y3QoW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIDEwXG4gKlxuICovXG5NYXRyaXguZGlhZ3Byb2R1Y3QgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmRpYWdwcm9kdWN0KClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3N1bVxuICogQGRlc2MgUmV0dXJucyB0aGUgc3VtIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIE1hdHJpeFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5zdW0oKVxuICogLy8gOVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLnN1bSgpXG4gKiAvLyAwXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnN1bSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZvbGQoKGFjYywgeCkgPT4ge1xuICAgIGFjYyArPSBmb2xkKChwcmV2LCBuZXh0KSA9PiBwcmV2ICsgbmV4dCkoMCkoeClcbiAgICByZXR1cm4gYWNjXG4gIH0pKDApKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LnN1bVxuICogQGRlc2MgUmV0dXJucyB0aGUgc3VtIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIE1hdHJpeFxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IE0gLSBNYXRyaXggZnJvbSB3aGljaCB0byByZXR1cm4gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5zdW0oW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIDlcbiAqXG4gKi9cbk1hdHJpeC5zdW0gPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLnN1bSgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNrcm9uZWNrZXJcbiAqIEBkZXNjIFRoZSBLcm9uZWNrZXIgcHJvZHVjdCBpcyBhbiBvcGVyYXRpb24gb24gdHdvIG1hdHJpY2VzIG9mIGFyYml0cmFyeSBzaXplIHJlc3VsdGluZyBpbiBhIGJsb2NrIG1hdHJpeC5cbiAqIEBwYXJhbSB7TWF0cml4fSBNIC0gVGhlIHJpZ2h0IHNpZGUgTWF0cml4IG9mIHRoZSBwcm9kdWN0ICh0aGlzIOKKlyBNKVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5rcm9uZWNrZXIgPSBmdW5jdGlvbiAoTSkge1xuICBjb25zdCBtID0gdGhpcy5nZXRSb3dzKClcbiAgY29uc3QgbiA9IHRoaXMuZ2V0Q29scygpXG4gIGNvbnN0IHAgPSBNLmdldFJvd3MoKVxuICBjb25zdCBxID0gTS5nZXRDb2xzKClcblxuICBjb25zdCBsZWZ0ID0gdGhpcy5fX3ZhbHVlXG4gIGNvbnN0IHJpZ2h0ID0gTS5fX3ZhbHVlXG5cbiAgY29uc3QgZnJhbWUgPSBnZW5lcmF0ZShtICogcCwgbiAqIHEpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBwOyBrKyspIHtcbiAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBxOyBsKyspIHtcbiAgICAgICAgICBmcmFtZVtwICogaSArIGtdW3EgKiBqICsgbF0gPSBsZWZ0W2ldW2pdICogcmlnaHRba11bbF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNYXRyaXgub2YoZnJhbWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5rcm9uZWNrZXJcbiAqIEBkZXNjIFRoZSBLcm9uZWNrZXIgcHJvZHVjdCBpcyBhbiBvcGVyYXRpb24gb24gdHdvIG1hdHJpY2VzIG9mIGFyYml0cmFyeSBzaXplIHJlc3VsdGluZyBpbiBhIGJsb2NrIG1hdHJpeC5cbiAqIEBwYXJhbSB7TWF0cml4fSBBIC0gVGhlIGxlZnQgc2lkZSBNYXRyaXggb2YgdGhlIHByb2R1Y3QgKEEg4oqXIEIpXG4gKiBAcGFyYW0ge01hdHJpeH0gQiAtIFRoZSByaWdodCBzaWRlIE1hdHJpeCBvZiB0aGUgcHJvZHVjdCAoQSDiipcgQilcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5rcm9uZWNrZXIgPSBmdW5jdGlvbiAoQSwgQikge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLmtyb25lY2tlcihCKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZGV0ZXJtaW5hbnRcbiAqIEBkZXNjIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgc3F1YXJlIE1hdHJpeCB1c2luZyBTYXJydXMnIHJ1bGUgb3IgTFUgZGVjb21wb3NpdGlvblxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kZXRlcm1pbmFudCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaXNTcXVhcmUoKSkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSA9PT0gMikge1xuICAgICAgY29uc3QgYSA9IHRoaXMuX192YWx1ZVswXVswXVxuICAgICAgY29uc3QgYiA9IHRoaXMuX192YWx1ZVswXVsxXVxuICAgICAgY29uc3QgYyA9IHRoaXMuX192YWx1ZVsxXVswXVxuICAgICAgY29uc3QgZCA9IHRoaXMuX192YWx1ZVsxXVsxXVxuXG4gICAgICByZXR1cm4gYSAqIGQgLSBiICogY1xuICAgIH1cbiAgICBjb25zdCBsdSA9IHRoaXMubHUoKVxuICAgIGNvbnN0IGRldEEgPSBOdW1iZXIobHVbMF0uZGlhZ3Byb2R1Y3QoKSlcbiAgICBjb25zdCBkZXRCID0gTnVtYmVyKGx1WzFdLmRpYWdwcm9kdWN0KCkpXG4gICAgcmV0dXJuIGRldEEgKiBkZXRCXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoJ1RoZSBNYXRyaXggbmVlZHMgdG8gYmUgYSBzcXVhcmUgTWF0cml4IHRvIGNhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnQnKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5kZXRlcm1pbmFudFxuICogQGRlc2MgQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBzcXVhcmUgTWF0cml4IHVzaW5nIFNhcnJ1cycgcnVsZSBvciBMVSBkZWNvbXBvc2l0aW9uXG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gQSAtIE1hdHJpeCBhcyBpbnB1dCB0byBjYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5NYXRyaXguZGV0ZXJtaW5hbnQgPSBmdW5jdGlvbiAoQSkge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLmRldGVybWluYW50KClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I21heFxuICogQGRlc2MgUmV0dXJucyB0aGUgbGFyZ2VzdCBudW1iZXIgaW4gdGhlIE1hdHJpeFxuICogQHJldHVybnMgeyp9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubWF4ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gcmVkdWNlKG1heCwgW10uY29uY2F0LmFwcGx5KFtdLCB0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjbWluXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBzbWFsbGVzdCBudW1iZXIgaW4gdGhlIE1hdHJpeFxuICogQHJldHVybnMgeyp9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubWluID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gcmVkdWNlKG1pbiwgW10uY29uY2F0LmFwcGx5KFtdLCB0aGlzLl9fdmFsdWUpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXhcbiIsImltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuaW1wb3J0IGNvbmNhdCBmcm9tICdmdW4uanMvc3JjL2NvbmNhdCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gY29uY2F0XG4gKiBAZGVzYyBIZWxwZXIgZnVuY3Rpb24gY29uY2F0ZW5hdGluZy9jb21iaW5pbmcgMiBNYXRyaWNlc1xuICogQHBhcmFtIHtNYXRyaXh9IE0gLSBMZWZ0IHNpZGUgb2YgdGhlIGNvbmNhdCBvcGVyYXRpb3JcbiAqIEBwYXJhbSB7QXJyYXl9IG0gLSByaWdodCBzaWRlIG9mIHRoZSBjb250YWMgb3BlcmF0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZHggLSBJbmRleCBvZiB0aGUgcm93XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIChNLCBtLCBpZHgpIHtcbiAgcmV0dXJuIGNvbmNhdChtLCBNLl9fdmFsdWVbaWR4XSlcbn0pXG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcbmltcG9ydCBmb2xkIGZyb20gJ2Z1bi5qcy9zcmMvZm9sZCdcbmltcG9ydCBtYXAgZnJvbSAnZnVuLmpzL3NyYy9tYXAnXG5pbXBvcnQgcm91bmQgZnJvbSAnLi9yb3VuZCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gZG90XG4gKiBAZGVzYyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIGRvdHByb2R1Y3Qgb2YgMiBNYXRyaWNlc1xuICogQHBhcmFtIHtNYXRyaXh9IEIgLSBSaWdodCBzaWRlIG9mIGh0ZSBkb3QgcHJvZHVjdFxuICogQHBhcmFtIHtBcnJheX0gYSAtIEFycmF5IHJlcHJlc2VudGluZyB0aGVsZWZ0IHNpZGUgb2YgdGhlIGRvdCBwcm9kdWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChkZWNpbWFscywgQiwgYSkgPT4gbWFwKChpdGVtLCBpKSA9PiB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGopID0+IHtcbiAgICBhY2MgKz0gcm91bmQoeCAqIEIuX192YWx1ZVtqXVtpXSwgZGVjaW1hbHMpXG4gICAgcmV0dXJuIGFjY1xuICB9LCAwKShhKVxufSkoQi5fX3ZhbHVlWzBdKSlcbiIsImltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuXG4vKipcbiAqIEBmdW5jdGlvbiBlbXB0eVxuICogQGRlc2MgSGVscGVyIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGFuIGVtcHR5IE1hdHJpeFxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShtID0+IFtdKVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZ2VuZXJhdGVcbiAqIEBkZXNjIEdlbmVyYXRvciBmdW5jdGlvbiBmb3IgYSBtYXRyaXggYXJyYXksIHZhbHVlcyBhcmUgc2V0IHRvIHVuZGVmaW5lZFxuICogQHBhcmFtIHtOdW1iZXJ9IHJvd3NcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2xzXG4gKiBAcmV0dXJucyB7YW55W11bXX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKHJvd3MsIGNvbHMpID0+IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4iLCJpbXBvcnQgbWFwIGZyb20gJ2Z1bi5qcy9zcmMvbWFwJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBpZGVudGl0eVxuICogQGRlc2MgQ3JlYXRlcyBhbiBpZGVudGl5IG1hdHJpeCBmcm9tIGFuIGVtcHR5IGFycmF5XG4gKiBAcGFyYW0gbSB7QXJyYXl9XG4gKiBAcGFyYW0gaWR4IHtOdW1iZXJ9XG4gKiBAcmV0dXJuIHtNYXRyaXh9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChtLCBpZHgpID0+IG1hcCgocm93cywgamR4KSA9PiAoaWR4ID09PSBqZHgpICogMSkobSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHJvdW5kXG4gKiBAcGFyYW0gdmFsdWUge051bWJlcn1cbiAqIEBwYXJhbSBkZWNpbWFscyB7TnVtYmVyfVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91bmQgKHZhbHVlLCBkZWNpbWFscykge1xuICByZXR1cm4gTnVtYmVyKE1hdGgucm91bmQodmFsdWUgKyAnZScgKyBkZWNpbWFscykgKyAnZS0nICsgZGVjaW1hbHMpXG59XG4iLCIvKipcbiAqIEBmdW5jdGlvbiBzb2x2ZUxcbiAqIEBkZXNjIHNvbHZlIHRoZSB4QSA9IGIgZXF1YXRpb24gZm9yIGxvd2VyIHRyaWFuZ3VsYXJcbiAqIEBwYXJhbSBuXG4gKiBAcGFyYW0gTFxuICogQHBhcmFtIGJcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gc29sdmVMIChuLCBMLCBiKSB7XG4gIGxldCBzID0gMFxuICBjb25zdCBjID0gW11cblxuICBmb3IgKGxldCBrID0gMDsgayA8IG47ICsraykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgazsgKytqKSB7XG4gICAgICBzID0gcyArIEwuX192YWx1ZVtrXVtqXSAqIGNbal1cbiAgICB9XG4gICAgY1trXSA9IGJba10gLSBzXG4gICAgcyA9IDBcbiAgfVxuICByZXR1cm4gY1xufVxuXG4vKipcbiAqIEBmdW5jdGlvbiBzb2x2ZVVcbiAqIEBkZXNjIHNvbHZlIHRoZSB4QSA9IGIgZXF1YXRpb24gZm9yIHVwcGVyIHRyaWFuZ3VsYXJcbiAqIEBwYXJhbSBuXG4gKiBAcGFyYW0gVVxuICogQHBhcmFtIGNcbiAqIEBwYXJhbSBiXG4gKi9cbmZ1bmN0aW9uIHNvbHZlVSAobiwgVSwgYywgYikge1xuICBjb25zdCB4ID0gW11cbiAgZm9yIChsZXQgYSA9IG4gLSAxOyBhID4gLTE7IC0tYSkge1xuICAgIGxldCB0ID0gMFxuICAgIGZvciAobGV0IGIgPSBhICsgMTsgYiA8IG47ICsrYikge1xuICAgICAgdCA9IHQgKyBVLl9fdmFsdWVbYV1bYl0gKiB4W2JdXG4gICAgfVxuICAgIHhbYV0gPSAoY1thXSAtIHQpIC8gVS5fX3ZhbHVlW2FdW2FdXG4gIH1cbiAgcmV0dXJuIHhcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb24gc29sdmVcbiAqIEBkZXNjIEhlbHBlciBmdW5jdGlvbiBmb3IgeEEgPSBiIHNvbHZlclxuICogQHBhcmFtIG5cbiAqIEBwYXJhbSBMXG4gKiBAcGFyYW0gVVxuICogQHBhcmFtIGJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29sdmUgKG4sIEwsIFUsIGIpIHtcbiAgY29uc3QgYyA9IHNvbHZlTChuLCBMLCBiKVxuICByZXR1cm4gc29sdmVVKG4sIFUsIGMsIGIpXG59XG4iLCJpbXBvcnQgbWFwIGZyb20gJ2Z1bi5qcy9zcmMvbWFwJ1xuaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5cbi8qKlxuICogQGZ1bmN0aW9uIHRyYW5zcG9zZVxuICogQGRlc2MgVHJhbnNwb3NlcyBhIGFycmF5IG9mIGFycmF5cyB1c2luZyB0aGUgTWF0cml4Lm1hcCBmdW5jdGlvblxuICogQHBhcmFtIG0ge0FycmF5fVxuICogQHBhcmFtIGlkeCB7TnVtYmVyfVxuICogQHJldHVybiB7TWF0cml4fVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgocHJldiwgbmV4dCkgPT4gbWFwKChpdGVtLCBpKSA9PiAocHJldltpXSB8fCBbXSkuY29uY2F0KG5leHRbaV0pKShuZXh0KSlcbiJdLCJzb3VyY2VSb290IjoiIn0=