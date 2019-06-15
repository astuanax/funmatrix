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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9fcHJpdmF0ZS9jdXJyeTEuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FuZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2Jvb2xlYW4vaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY3VycnkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2RhdGUvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2V4aXN0cy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaWRlbnRpY2FsLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2l0ZXJhdG9yL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXAvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXguanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21pbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbm90LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9udW1iZXIvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL251bWJlci9pc05hbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29yLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3N0cmluZy9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3N0cmluZy9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvdHlwZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL21hdHJpeC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9kb3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9nZW5lcmF0ZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL3JvdW5kLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC90cmFuc3Bvc2UuanMiXSwibmFtZXMiOlsiTWF0cml4IiwidmFsIiwiX192YWx1ZSIsIm9mIiwicHJvdG90eXBlIiwidHlwZSIsInByZWNpc2lvbiIsInNldFByZWNpc2lvbiIsImlzU3ltbWV0cmljIiwiYSIsImIiLCJ0cmFuc3Bvc2UiLCJpc1NxdWFyZSIsImdldENvbHMiLCJnZXRSb3dzIiwiaXNPcnRob2dvbmFsIiwiQXhBdCIsImRvdCIsIkkiLCJpZGVudGl0eSIsImxlbmd0aCIsImVxdWFscyIsIk0iLCJnZXRTaGFwZSIsIm1hcCIsImYiLCJmb2xkIiwiYXAiLCJjb25jYXQiLCJBIiwiQiIsImVtcHR5Iiwicm93cyIsImNvbHMiLCJtIiwiY29tYmluZSIsImZpbGwiLCJ4IiwiemVyb3MiLCJvbmVzIiwicmFuZG9tIiwiZSIsIk1hdGgiLCJ0b0FycmF5Iiwicm93IiwiY29sIiwiY2xvbmUiLCJmcm9tQXJyYXkiLCJhcnIiLCJhZGQiLCJFcnJvciIsImlkeCIsImpkeCIsInN1YnRyYWN0IiwibXVsdGlwbHkiLCJjb25zb2xlIiwibG9nIiwiYWRkaXRpdmVpbnZlcnNlIiwiaGFkYW1hcmQiLCJsdSIsIm4iLCJ0b2wiLCJMIiwiVSIsImsiLCJhYnMiLCJpIiwiaiIsImwiLCJycmVmIiwibGVhZCIsInJlc3VsdE1hdHJpeCIsInIiLCJ0bXAiLCJzb2x2ZSIsIkxVIiwicyIsImMiLCJ0IiwiaW52ZXJzZSIsIkludiIsInJlc3VsdCIsInJlZHVjZSIsImhhbGYiLCJwdXNoIiwic2xpY2UiLCJyYW5rIiwiZGltZW5zaW9uIiwiZGlhZyIsImFjYyIsImRpYWdwcm9kdWN0Iiwic3VtIiwicHJldiIsIm5leHQiLCJrcm9uZWNrZXIiLCJwIiwicSIsImxlZnQiLCJyaWdodCIsImZyYW1lIiwiZGV0ZXJtaW5hbnQiLCJkIiwiZGV0QSIsIk51bWJlciIsImRldEIiLCJtYXgiLCJhcHBseSIsIm1pbiIsImRlY2ltYWxzIiwiaXRlbSIsIkFycmF5Iiwicm91bmQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FB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QUFBLFdBQUl5RSxLQUFLLENBQUNKLEtBQU4sQ0FBWSxJQUFaLEVBQWtCSSxLQUFLLENBQUM3RSxJQUFELENBQXZCLENBQUo7QUFBQSxHQUFwQyxDQUFoQjtBQUFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQZjs7OztBQUVBOzs7Ozs7O2VBT2Usa0JBQUNDLENBQUQsRUFBSWlCLEdBQUo7QUFBQSxTQUFZLGtCQUFJLFVBQUNuQixJQUFELEVBQU9vQixHQUFQO0FBQUEsV0FBZSxDQUFDRCxHQUFHLEtBQUtDLEdBQVQsSUFBZ0IsQ0FBL0I7QUFBQSxHQUFKLEVBQXNDbEIsQ0FBdEMsQ0FBWjtBQUFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZjs7Ozs7O0FBTWUsU0FBUzZFLEtBQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCSixRQUF2QixFQUFpQztBQUM5QyxTQUFPTCxNQUFNLENBQUM3RCxJQUFJLENBQUNxRSxLQUFMLENBQVdDLEtBQUssR0FBRyxHQUFSLEdBQWNKLFFBQXpCLElBQXFDLElBQXJDLEdBQTRDQSxRQUE3QyxDQUFiO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JEOztBQUNBOzs7O0FBRUE7Ozs7Ozs7ZUFPZSxvQkFBTSxVQUFDaEIsSUFBRCxFQUFPQyxJQUFQO0FBQUEsU0FBZ0Isa0JBQUksVUFBQ2dCLElBQUQsRUFBTzNDLENBQVA7QUFBQSxXQUFhLENBQUMwQixJQUFJLENBQUMxQixDQUFELENBQUosSUFBVyxFQUFaLEVBQWdCdEMsTUFBaEIsQ0FBdUJpRSxJQUFJLENBQUMzQixDQUFELENBQTNCLENBQWI7QUFBQSxHQUFKLEVBQWtEMkIsSUFBbEQsQ0FBaEI7QUFBQSxDQUFOLEMiLCJmaWxlIjoiQGFzdHVhbmF4L2Z1bm1hdHJpeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGFzdHVhbmF4L2Z1bm1hdHJpeFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAYXN0dWFuYXgvZnVubWF0cml4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBhc3R1YW5heC9mdW5tYXRyaXhcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWF0cml4LmpzXCIpO1xuIiwiLyoqXG4gKiBSZXR1cm5zIGEgY3VycmllZCBmdW5jdGlvbiB3aXRoIGFyaXR5IDFcbiAqIEBmdW5jdGlvbiBjdXJyeTFcbiAqIEBwcml2YXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJ5MSAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQgKGEpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMFxuICAgICAgPyB0aGlzXG4gICAgICA6IGZuKGEpXG4gIH1cbn1cbiIsIi8qKlxuICogQ2hlY2tzIGlmIGJvdGggcHJlZGljYXRlcyBhcmUgdHJ1ZVxuICpcbiAqIEBmdW5jdGlvbiBhbmRcbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgYm90aCBwcmVkaWNhdGVzIGFyZSB0cnVlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnICh4LCB5KSAtPiBib29sZWFuXG4gKiBAcGFyYW0geyp9IHggLSBBIHByZWRpY2F0ZVxuICogQHBhcmFtIHsqfSB5IC0gQSBwcmVkaWNhdGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYW5kICh4LCB5KSB7XG4gIHJldHVybiB4ICYmIHlcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gYXJyYXlDb25jYXRcbiAqIEBwYXJhbSBhMVxuICogQHBhcmFtIGEyXG4gKiBAcmV0dXJucyB7VFtdfVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGNvbmNhdCAoYSwgYikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdChhLCBiKVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBlcXVhbHNBcnJheVxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIGZvciBkZWVwIGNvbXBhcmlzb24gb2YgYXJyYXlzXG4gKiBAcGFyYW0ge2F9IHggLSBPYmplY3QgdG8gY29tcGFyZSBvZiB0eXBlIGFcbiAqIEBwYXJhbSB7YX0geSAtIE9iamVjdCB4IHRvIGNvbXBhcmUgd2l0aCBvYmplY3QgeFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IG5vdCBmcm9tICcuLi9ub3QnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzQXJyYXkgKHgsIHkpIHtcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub3QoZXF1YWxzKHhbaV0sIHlbaV0pKSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBtYXBwaW5nIG92ZXIgdGhlIHByb3ZpZGVkIGFycmF5IGFuZCBjYWxsaW5nIGFuIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2NiRnVuY3Rpb259IGNiIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gbW9kaWZ5IHRoZSBpdGVtXG4gKiBAcGFyYW0geyp9IGluaXQgLSBJbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBhIC0gQXJyYXkgd2l0aCBpdGVtcyB0byBtb2RpZnkgYnkgdGhlIGNiIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhbGlhcyByZWR1Y2VcbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBmb2xkKGFkZCwgMCwgWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IDNcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBjYkZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IHIgLSBBY2N1bXVsYXRvciB3aGljaCBhY2N1bXVsYXRlcyB0aGUgY2FsbGJhY2sncyByZXR1cm4gdmFsdWVzXG4gKiBAcGFyYW0geyp9IGl0ZW0gLSB0aGUgY3VycmVudCBlbGVtZW50IGJlaW5nIHByb2Nlc3NlZFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gdGhlIGluZGV5IG9mIHRoZSBpdGVtIGJlaW5nIHByb2Nlc3NlZFxuICogQHBhcmFtIHtBcnJheX0gYSAtIFRoZSBpbml0aWFsIGFycmF5XG4gKiBAcmV0dXJuIHsqfVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGxldCByID0gaW5pdFxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHIgPSBjYihyLCBhW2ldLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIG9iamVjdCBpcyBhbiBhcnJheSwgYXV0b2N1cnJpZWQgZnVuY3Rpb25cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGlzQXJyYXlcbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIG9iamVjdCBpcyBhbiBhcnJheSwgYXV0b2N1cnJpZWQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7Kn0gT2JqZWN0IHRvIHZlcmlmaXlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gaXNBcnJheShbMSwxLDFdKVxuICogLy8gcmVzdWx0ID0gdHJ1ZVxuICovXG5cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0FycmF5JylcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIE1hcHMgb3ZlciBhbiBhcnJheSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoaWRlbnRpdHksIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzAsMiwzXVxuICogIGNvbnN0IGFkZDIgPSBhZGQoMilcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoYWRkMiwgWzAsMiwzXSlcbiAqICAvLyByZXN1bHQgPSBbMiw0LDVdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgY29uc3QgciA9IG5ldyBBcnJheShsKVxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHJbaV0gPSBjYihhW2ldLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxuICpcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gaXNcbiAqIEBkZXNjcmlwdGlvbiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBJdGVtIHRvIHZlcmlmeVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0Jvb2xlYW4nKVxuIiwiLyoqXG4gKiBDb25jYXRlbmF0ZXMgMiBpdGVtcyB0b2dldGhlclxuICpcbiAqIEBmdW5jdGlvbiBjb25jYXRcbiAqIEBkZXNjcmlwdGlvbiBDb25jYXRlbmF0ZXMgMiBpdGVtcyB0b2dldGhlclxuICogQHNpbmNlIHYxLjAuNFxuICogQHBhcmFtIHthfSBhIC0gTGVmdCBzaWRlIG9mIHRoZSBjb25jYXRlbmF0aW9uXG4gKiBAcGFyYW0ge2F9IGIgLSByaWdodCBzaWRlIG9mIHRoZSBjb25jYXRlbmF0aW9uXG4gKiBAcmV0dXJuIHthfSBDb25jYXRlbmF0ZWQgaXRlbVxuICoqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBhcnJheUNvbmNhdCBmcm9tICcuL2FycmF5L2NvbmNhdCdcbmltcG9ydCBzdHJpbmdDb25jYXQgZnJvbSAnLi9zdHJpbmcvY29uY2F0J1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgY29uc3QgdHlwZU1hcCA9IHtcbiAgICAnU3RyaW5nJzogc3RyaW5nQ29uY2F0LFxuICAgICdBcnJheSc6IGFycmF5Q29uY2F0XG4gIH1cbiAgcmV0dXJuIHR5cGVNYXBbdHlwZShhKV0oYSwgYilcbn0pXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyoqXG4gKiBAZnVuY3Rpb24gY3VycnlcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkgKGZ1bikge1xuICBjb25zdCBhcmdzbGVuID0gZnVuLmxlbmd0aFxuXG4gIGlmIChhcmdzbGVuID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1blxuICB9XG4gIHJldHVybiBjcmVhdGVSZWN1cnNlcihbXSlcblxuICBmdW5jdGlvbiByZWN1cnNlIChhY2MsIGFyZ3MpIHtcbiAgICBjb25zdCBfYWNjID0gYWNjLmNvbmNhdChhcmdzKVxuICAgIHJldHVybiBfYWNjLmxlbmd0aCA8IGFyZ3NsZW5cbiAgICAgID8gY3JlYXRlUmVjdXJzZXIoX2FjYylcbiAgICAgIDogZnVuLmFwcGx5KHRoaXMsIF9hY2MpXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVSZWN1cnNlciAoYWNjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWN1cnNlKGFjYywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdEYXRlJylcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVtcHR5ICh4KSB7XG4gIHJldHVybiBuZXcgeC5jb25zdHJ1Y3RvcigpXG59O1xuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBlcXVhbHNcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgZXF1YWxpdHkgb2YgMiBpdGVtc1xuICogQHBhcmFtIHsqfSB4IC0gTGVmdCBzaWRlIG9mIHRoZSBlcXVhbGl0eSBjaGVja1xuICogQHBhcmFtIHsqfSB5IC0gUmlnaHQgc2lkZSBvZiB0aGUgZXF1YWxpdHkgY2hlY2tcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG5hbiA9IE51bWJlci5OYU5cbiAqIGVxdWFsKG5hbiwgbmFuKSAvLyByZXR1cm5zIHRydWVcbiAqXG4gKiBjb25zdCBhcnIxID0gWzAsIDEsIDIsIDNdXG4gKiBjb25zdCBhcnIyID0gW251bGwsIDEsIDIsIDNdXG4gKiBlcXVhbHMoYXJyMSwgYXJyMikgLy8gcmV0dXJucyBmYWxzZVxuICpcbiAqIGVxdWFscyhuZXcgT2JqZWN0KHsnYSc6IDAsICdiJzogMX0pLCB7J2EnOiAwLCAnYic6IDF9KSAvLyB0cnVlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4vaWRlbnRpY2FsJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuaW1wb3J0IG5vdCBmcm9tICcuL25vdCdcbmltcG9ydCBvciBmcm9tICcuL29yJ1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vb2JqZWN0L2lzJ1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9hcnJheS9pcydcbmltcG9ydCBpc0Jvb2xlYW4gZnJvbSAnLi9ib29sZWFuL2lzJ1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vbnVtYmVyL2lzJ1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4vc3RyaW5nL2lzJ1xuaW1wb3J0IGlzRGF0ZSBmcm9tICcuL2RhdGUvaXMnXG5pbXBvcnQgZXF1YWxzQXJyYXkgZnJvbSAnLi9hcnJheS9lcXVhbHMnXG5pbXBvcnQgZXF1YWxzT2JqZWN0IGZyb20gJy4vb2JqZWN0L2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzICh4LCB5KSB7XG4gIGlmIChpZGVudGljYWwoeCwgeSkpIHJldHVybiB0cnVlXG5cbiAgaWYgKHR5cGUoeCkgIT09IHR5cGUoeSkpIHJldHVybiBmYWxzZVxuXG4gIGlmIChvcihub3QoZXhpc3RzKHgpKSwgbm90KGV4aXN0cyh5KSkpKSByZXR1cm4gZmFsc2VcblxuICBpZiAoeC5jb25zdHJ1Y3RvciAhPT0geS5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKGlzU3RyaW5nKHgpIHx8IGlzQm9vbGVhbih4KSB8fCBpc051bWJlcih4KSB8fCBpc0RhdGUoeCkpIHtcbiAgICByZXR1cm4gaWRlbnRpY2FsKHgudmFsdWVPZigpLCB5LnZhbHVlT2YoKSlcbiAgfVxuICBpZiAoaXNBcnJheSh4KSkge1xuICAgIHJldHVybiBlcXVhbHNBcnJheSh4LCB5KVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHgpKSB7XG4gICAgcmV0dXJuIGVxdWFsc09iamVjdCh4LCB5KVxuICB9XG4gIHJldHVybiBmYWxzZVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGV4aXN0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGlzdHMgKHgpIHtcbiAgcmV0dXJuICEoeCA9PSBudWxsKVxufTtcbiIsIi8qKlxuICogUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBpdGVtXG4gKlxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgbGlrZSBvYmplY3QgYW5kIGNhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZW1cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIHJlY2VpdmVzIDQgdmFsdWVzOiB0aGUgYWNjdW11bGF0b3IsIHRoZSBpdGVtLCB0aGUgaW5kZXgsIGFuZCB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gaW5pdCAtIHRoZSB0aGUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGEgdGhlIGFycmF5IGxpa2UgaXRlbSB0byBpdGVyYXRlIG92ZXJcbiAqIEByZXR1cm4geyp9IFRoZSBhY2N1bXVsYXRlZCB2YWx1ZVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlGb2xkIGZyb20gJy4vYXJyYXkvZm9sZCdcbmltcG9ydCBvYmplY3RGb2xkIGZyb20gJy4vb2JqZWN0L2ZvbGQnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBhKSB7XG4gIGNvbnN0IHR5cGVNYXAgPSB7XG4gICAgJ09iamVjdCc6IG9iamVjdEZvbGQsXG4gICAgJ0FycmF5JzogYXJyYXlGb2xkXG4gIH1cbiAgcmV0dXJuIHR5cGVNYXBbdHlwZShhKV0oY2IsIGluaXQsIGEpXG59KVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBpZGVudGljYWxcbiAqIEBkZXNjcmlwdGlvbiBjaGVja3MgZm9yIGlkZW50aW50aWNhbCBpdGVtc1xuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBpc05hbiBmcm9tICcuL251bWJlci9pc05hbidcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaWRlbnRpY2FsICh4LCB5KSB7XG4gIGlmICh4ID09PSAwICYmIHkgPT09IDApIHtcbiAgICByZXR1cm4gMSAvIHggPT09IDEgLyB5XG4gIH1cbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAhIShpc05hbih4KSAmJiBpc05hbih5KSlcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBpc1xuICogQGRlc2NyaXB0aW9uIFZlcmlmaWVzIHRoZSB0eXBlIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudFxuICpcbiAqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaXMgKEN0b3IsIHZhbCkge1xuICByZXR1cm4gdHlwZSh2YWwpID09PSBDdG9yXG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5jb25zdCBpc0Z1bmN0aW9uID0gaXMoJ0Z1bmN0aW9uJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJdGVyIChpdGVyKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSlcbn1cbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIEl0ZXJhdG9yIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjNcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhdG9yfSBhXG4gKiBAcmV0dXJuIHtJdGVyYXRvcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYWxsYmFjaywgaXRlcmF0b3IpIHtcbiAgbGV0IHIgPSBbXVxuICBmb3IgKGxldCBuZXh0VmFsdWUgPSBpdGVyYXRvci5uZXh0KCk7IG5leHRWYWx1ZS5kb25lICE9PSB0cnVlOyBuZXh0VmFsdWUgPSBpdGVyYXRvci5uZXh0KCkpIHtcbiAgICByLnB1c2goY2FsbGJhY2soaXRlcmF0b3IudmFsdWUoKSkpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBpdGVyYWJsZSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIHdoaWNoIG1hcHMgb3ZlciBhbiBpdGVyYWJsZS5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IGIgLT4gYlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlNYXAgZnJvbSAnLi9hcnJheS9tYXAnXG5pbXBvcnQgb2JqZWN0TWFwIGZyb20gJy4vb2JqZWN0L21hcCdcbmltcG9ydCBtYXBNYXAgZnJvbSAnLi9tYXAvbWFwJ1xuaW1wb3J0IHN0cmluZ01hcCBmcm9tICcuL3N0cmluZy9tYXAnXG5pbXBvcnQgaXRlcmF0b3JNYXAgZnJvbSAnLi9pdGVyYXRvci9tYXAnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5pbXBvcnQgaXNJdGVyYXRvciBmcm9tICcuL2l0ZXJhdG9yL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIHN3aXRjaCAodHlwZShhKSkge1xuICAgIGNhc2UgJ0Z1bmN0aW9uJzpcbiAgICAgIHJldHVybiBjdXJyeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYi5jYWxsKHRoaXMsIGEuYXBwbHkodGhpcywgYXJndW1lbnRzKSlcbiAgICAgIH0pXG4gICAgY2FzZSAnT2JqZWN0JzpcbiAgICAgIHJldHVybiBvYmplY3RNYXAoY2IsIGEpXG4gICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgIHJldHVybiBzdHJpbmdNYXAoY2IsIGEpXG4gICAgY2FzZSAnTWFwJzpcbiAgICAgIHJldHVybiBtYXBNYXAoY2IsIGEpXG4gICAgY2FzZSAnQXJyYXknOlxuICAgICAgcmV0dXJuIGFycmF5TWFwKGNiLCBhKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNJdGVyYXRvcihhKVxuICAgICAgICA/IGl0ZXJhdG9yTWFwKGNiLCBhKVxuICAgICAgICA6IGFycmF5TWFwKGNiLCBhKVxuICB9XG59KVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYSBNYXAgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7TWFwfSBhXG4gKiBAcmV0dXJuIHtNYXB9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vZW1wdHknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIGEuZm9yRWFjaCgodiwgaywgbWFwKSA9PiB7XG4gICAgci5zZXQoaywgY2IodiwgaywgbWFwKSlcbiAgfSlcbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIGxhcmdlc3Qgb2YgdGhlIDIgYXJndW1lbnRzIHByb3ZpZGVkXG4gKlxuICogQGZ1bmN0aW9uIG1heFxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4geyp9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWF4IChhLCBiKSB7XG4gIHJldHVybiBiID4gYSA/IGIgOiBhXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBzbWFsbGVzdCBvZiB0aGUgMiBhcmd1bWVudHMgcHJvdmlkZWRcbiAqXG4gKiBAZnVuY3Rpb24gbWluXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBzbWFsbGVzdCBvZiB0aGUgMiBhcmd1bWVudHMgcHJvdmlkZWRcbiAqIEBzaW5jZSB2MS4wLjRcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHsqfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1pbiAoYSwgYikge1xuICByZXR1cm4gYiA8IGEgPyBiIDogYVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG5vdFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbm90ICh4KSB7XG4gIHJldHVybiAheFxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnTnVtYmVyJylcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGlzTmFOXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIG51bWJlciBpcyBOQU5cblxuICovXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9pcydcbmltcG9ydCBhbmQgZnJvbSAnLi4vYW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc05hbiAoeCkge1xuICByZXR1cm4gYW5kKGlzTnVtYmVyKHgpLCBpc05hTih4KSlcbn07XG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi4vZXhpc3RzJ1xuaW1wb3J0IG5vdCBmcm9tICcuLi9ub3QnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHgsIHkpID0+IHtcbiAgZm9yIChsZXQga2V5WCBpbiB4KSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxuICAgIGlmIChub3QoZXF1YWxzKHhba2V5WF0sIHlba2V5WF0pKSkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmb3IgKGxldCBrZXlZIGluIHkpIHtcbiAgICBpZiAobm90KGV4aXN0cyh4W2tleVldKSkgJiYgZXhpc3RzKHlba2V5WV0pKSByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQHByaXZhdGVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIG8pIHtcbiAgY29uc3QgayA9IGtleXMobylcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgbGV0IHIgPSBPYmplY3QoaW5pdClcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2Iociwgb1trW2ldXSwga1tpXSwgbylcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ09iamVjdCcpXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIG93biBrZXlzIG9mIGFuIG9iamVjdCBhcyBhbiBBcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IFtiXVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24ga2V5cyAoYSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoT2JqZWN0KGEpKVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIG9iamVjdCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBlbXB0eSBmcm9tICcuLi9lbXB0eSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBjb25zdCBrID0ga2V5cyhhKVxuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBrLmxlbmd0aFxuICBjb25zdCByID0gZW1wdHkoYSlcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByW2tbaV1dID0gY2IoYVtrW2ldXSwga1tpXSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG9yXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIG9uZSBvciB0aGUgb3RoZXIgaXMgdHJ1ZVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gb3IgKHgsIHkpIHtcbiAgcmV0dXJuIHggfHwgeVxufSlcbiIsIi8qKlxuICogUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBpdGVtLCBzdGFydGluZyBmcm9tIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBpdGVyYXRvclxuICogVGhlIGluaXRpYWwgdmFsdWUgaXMgdGFrZW4gZnJvbSB0aGUgaXRlcmF0b3IuXG4gKiBSZWR1Y2Ugd29ya3Mgb25seSBvbiBBcnJheXMgYW5kIHJldHVybnMgYSB2YWx1ZW9mIHRoZSB0eXBlIG9mIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBBcnJheVxuICpcbiAqIEBmdW5jdGlvbiByZWR1Y2VcbiAqIEBkZXNjIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlbSwgc3RhcnRpbmcgZnJvbSB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgaXRlcmF0b3JcbiAqIEBzaW5jZSB2MS4wLjRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIC0gcmVjZWl2ZXMgNCB2YWx1ZXM6IHRoZSBhY2N1bXVsYXRvciwgdGhlIGl0ZW0sIHRoZSBpbmRleCwgYW5kIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtBcnJheX0gYSAtIFRoZSBpdGVyYXRvciB0byBhcHBseSB0aGUgZnVuY3Rpb25cbiAqIEByZXR1cm4geyp9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBmb2xkIGZyb20gJy4vYXJyYXkvZm9sZCdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gcmVkdWNlIChjYiwgYSkge1xuICBjb25zdCBhcnIgPSBhLnNsaWNlKClcbiAgY29uc3QgaW5pdCA9IGFyci5zaGlmdCgpXG4gIHJldHVybiBmb2xkKGNiLCBpbml0LCBhcnIpXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIHN0cmluZ0NvbmNhdFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmNhdCAoYSwgYikgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xuICByZXR1cm4gU3RyaW5nKGEpICsgU3RyaW5nKGIpXG59XG4iLCIvKipcblxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdTdHJpbmcnKVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYSBzdHJpbmcgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGxldCByID0gJydcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByICs9IGNiKGEuY2hhckF0KGkpLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdHlwZVxuICovXG5pbXBvcnQgY3VycnkxIGZyb20gJy4vX3ByaXZhdGUvY3VycnkxJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeTEoZnVuY3Rpb24gdHlwZSAoeCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpLnNsaWNlKDgsIC0xKVxufSlcbiIsImltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcbmltcG9ydCBmb2xkIGZyb20gJ2Z1bi5qcy9zcmMvZm9sZCdcbmltcG9ydCBtYXggZnJvbSAnZnVuLmpzL3NyYy9tYXgnXG5pbXBvcnQgbWluIGZyb20gJ2Z1bi5qcy9zcmMvbWluJ1xuaW1wb3J0IHJlZHVjZSBmcm9tICdmdW4uanMvc3JjL3JlZHVjZSdcbmltcG9ydCBlcXVhbHMgZnJvbSAnZnVuLmpzL3NyYy9lcXVhbHMnXG5pbXBvcnQgY29uY2F0IGZyb20gJy4vdXRpbC9jb25jYXQnXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi91dGlsL2VtcHR5J1xuaW1wb3J0IGRvdCBmcm9tICcuL3V0aWwvZG90J1xuaW1wb3J0IGlkZW50aXR5IGZyb20gJy4vdXRpbC9pZGVudGl0eSdcbmltcG9ydCB0cmFuc3Bvc2UgZnJvbSAnLi91dGlsL3RyYW5zcG9zZSdcbmltcG9ydCBnZW5lcmF0ZSBmcm9tICcuL3V0aWwvZ2VuZXJhdGUnXG5cbi8qKlxuICogQGNsYXNzIE1hdHJpeFxuICogQGNsYXNzZGVzYyBNYXRyaXggYXBwbGljYXRpdmUgcHJvdmlkaW5nIHN0YW5kYXJkIG1hdHJpeCBvcGVyYXRpb25zXG4gKiBAc3VtbWFyeSBUaGUgTWF0cml4IGNsYXNzIHNob3VsZCBub3QgYmUgaW5zdGFudGlhdGVkIHdpdGggdGhlIG5ldyBrZXl3b3JkLiBJbnN0ZWFkIHVzZSB0aGUgTWF0cml4Lm9mIHN5bnRheCB0byBjcmVhdGUgYSBuZXcgTWF0cml4LiBVbmZvcnR1bmF0bHkganNkb2NzIGRvZXMgbm90IGFsbG93IGZvciB0aGUgY29uc3RydWN0b3IgdG8gYmUgaGlkZGVuLlxuICogQGhpZGVjb250cnVjdG9yXG4gKiBAc2VlIG9mXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKlxuICovXG5sZXQgTWF0cml4ID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl9fdmFsdWUgPSB2YWxcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4Lm9mXG4gKiBAZGVzYyBDcmVhdGVzIGEgTWF0cml4IG9iamVjdCBhbmQgZmxhdHRlbnMgdGhlIE1hdHJpeFxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gdmFsIC0gQW4gYXJyYXkgb2YgYXJyYXlzXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICpcbiAqL1xuTWF0cml4Lm9mID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgTWF0cml4KSByZXR1cm4gdmFsXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICByZXR1cm4gbmV3IE1hdHJpeCh2YWwpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgLSBSZXR1cm5zIHRoZSBzdHJpbmcgJ01hdHJpeCcgZm9yIGFsbCBNYXRyaXggb2JqZWN0c1xuICogQHR5cGUge1N0cmluZ31cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0udHlwZSA9PT0gJ01hdHJpeCdcbiAqL1xuTWF0cml4LnByb3RvdHlwZS50eXBlID0gJ01hdHJpeCdcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAcHJvcGVydHkge051bWJlcn0gcHJlY2lzaW9uIC0gRmxvYXRpbmcgcG9pbnQgcHJlY2lzaW9uIGlzIHNldCB0byA0IGJ5IGRlZmF1bHRcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKiBtLnByZWNpc2lvbiA9PT0gNFxuICovXG5NYXRyaXgucHJvdG90eXBlLnByZWNpc2lvbiA9IDRcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3NldFByZWNpc2lvblxuICogQGRlc2MgVGhlIHByZWNpc2lvbiBpcyB1c2VkIGluIGZsb2F0aW5nIHBvaW50IGNhbGN1bGF0aW9ucyBmb3IgdGhlIGRvdCBwcm9kdWN0XG4gKiBAcGFyYW0ge051bWJlcn0gW3ByZWNpc2lvbj00XSAtIFNldCB0aGUgbnVtYmVyIG9mIGRlY2ltYWxzIGZvciByb3VuZGluZ1xuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICogbS5zZXRQcmVjaXNpb24oMTApXG4gKiBtLnByZWNpc2lvbiA9PT0gMTBcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zZXRQcmVjaXNpb24gPSBmdW5jdGlvbiAocHJlY2lzaW9uKSB7XG4gIHRoaXMucHJlY2lzaW9uID0gcHJlY2lzaW9uXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNpc1N5bW1ldHJpY1xuICogQGRlc2MgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIE1hdHJpeCBpcyBzeW1tZXRyaWMgYnkgdGVzdGluZyBmb3IgZXF1YWxpdHkgb2YgdGhlIHRyYW5zcG9zZWQgTWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIHRydWUgPT09IEEuaXNTeW1tZXRyaWMoKVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pc1N5bW1ldHJpYyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYSA9IHRoaXMuX192YWx1ZVxuICBjb25zdCBiID0gTWF0cml4LnRyYW5zcG9zZSh0aGlzKS5fX3ZhbHVlXG4gIHJldHVybiBlcXVhbHMoYSwgYilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2lzU3F1YXJlXG4gKiBAZGVzYyBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgTWF0cml4IG9iamVjdCBpcyBzcXVhcmUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogdHJ1ZSA9PT0gQS5pc1NxdWFyZSgpXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmlzU3F1YXJlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZXF1YWxzKHRoaXMuZ2V0Q29scygpLCB0aGlzLmdldFJvd3MoKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2lzT3J0aG9nb25hbFxuICogQGRlc2MgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIE1hdHJpeCBpcyBvcnRob2dvbmFsIGJ5IHRlc3RpbmcgZm9yIGVxdWFsaXR5IGJldHdlZW4gSWRlbnRpdHkgTWF0cml4IGFuZCB0aGUgZG90IHByb2R1Y3Qgb2YgdGhlIE1hdHJpeCBhbmQgaXRzIHRyYW5zcG9zZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBbWy0wLjMwOTIsIC0wLjk1MTBdLCBbLTAuOTUxMCwgMC4zMDkyXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXguZnJvbUFycmF5KHJlc3VsdClcbiAqIHRydWUgID09PSBBLmlzT3J0aG9nb25hbCgpXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaXNPcnRob2dvbmFsID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBeEF0ID0gdGhpcy5kb3QodGhpcy50cmFuc3Bvc2UoKSlcbiAgY29uc3QgSSA9IHRoaXMuaWRlbnRpdHkoKVxuICByZXR1cm4gZXF1YWxzKEF4QXQsIEkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNnZXRDb2xzXG4gKiBAZGVzYyBOdW1iZXIgaW5kaWNhdGluZyB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIE1hdHJpeFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogQS5nZXRDb2xzKCkgID09PSAyXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmdldENvbHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fdmFsdWVbMF0ubGVuZ3RoXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNlcXVhbHNcbiAqIEBkZXNjIEZ1bmN0aW9uIHJldHVybmluZyBhIGJvb2xlYW4gdGVzdGluZyBmb3IgZXF1YWxpdHkgb2YgdGhlIHZhbHVlcyBvZiBhIE1hdHJpeCBvciBBcnJheVxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IE0gLSBNYXRyaXggb3IgQXJyYXkgdG8gY29tcGFyZSBmb3IgZXF1YWxpdHlcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYSA9IFtbMSwgMV0sIFsxLCAxXV1cbiAqIHZhciBBID0gTWF0cml4Lm9mKGEpXG4gKiB2YXIgQiA9IE1hdHJpeC5vZihhKVxuICogdHJ1ZSAgPT09IEEuZXF1YWxzKEIpXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIGVxdWFscyh0aGlzLl9fdmFsdWUsIE0uX192YWx1ZSB8fCBNKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZ2V0Um93c1xuICogQGRlc2MgTnVtYmVyIGluZGljYXRpbmcgdGhlIG51bWJlciBvZiByb3dzIGluIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0Um93cygpICAvLyAyXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0Um93cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2dldFNoYXBlXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0U2hhcGUoKSAgLy8gWzIsIDJdXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0U2hhcGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbdGhpcy5nZXRSb3dzKCksIHRoaXMuZ2V0Q29scygpXVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjbWFwXG4gKiBAZGVzY3JpcHRpb24gTWFwcyBvdmVyIHRoZSByb3dzIG9mIHRoZSBtYXRyaXggdXNpbmcgYSBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGYgLSBBbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogbS5tYXAoeCA9PiB4Lm1hcCh5ID0+IHkrIDEpKVxuICogLy8gW1syLCAyXSwgWzIsIDJdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gTWF0cml4Lm9mKG1hcChmKSh0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXgubWFwXG4gKiBAZGVzY3JpcHRpb24gQ3VycmllZCBmdW5jdGlvbiB0aGF0IG1hcHMgb3ZlciB0aGUgcm93cyBvZiB0aGUgbWF0cml4IHVzaW5nIGEgbWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIC0gQW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gTWF0cml4IG9yIGFycmF5IHRvIG1hcFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9IE1hdHJpeC5tYXAoeD0gPiB4Lm1hcCh5ID0+IHkrIDEpLCBbWzEsIDFdLCBbMSwgMV1dKVxuICogLy8gW1syLCAyXSwgWzIsIDJdXVxuICpcbiAqL1xuTWF0cml4Lm1hcCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkubWFwKGYpXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZm9sZFxuICogQGRlc2NyaXB0aW9uIFJlZHVjZSB0aGUgbWF0cml4IHJvd3MgdXNpbmcgYSByZWR1Y2UgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGYgLSBBIHJlZHVjZS9mb2xkIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBGbGF0dGVuIE1hdHJpeFxuICogTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pLmZvbGQoKHByZXYsIG5leHQpID0+IHByZXYuY29uY2F0KG5leHQpKVxuICogLy8gWzEsIDEsIDEsIDFdXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZm9sZCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZm9sZChmLCBbXSkodGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmZvbGRcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgZnVuY3Rpb24gdG8gcmVkdWNlIHRoZSBtYXRyaXggcm93cyB1c2luZyBhIHJlZHVjZSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZiAtIEEgcmVkdWNlL2ZvbGQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gVGhlIE1hdHJpeCB0byByZWR1Y2VcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuXG4gKiAvLyBTdW0gb2YgYWxsIG1hdHJpeCB2YWx1ZXNcbiAqIGNvbnN0IHJlZHVjZXIgPSAocHJldiwgbmV4dCkgPT4gTnVtYmVyKHByZXYpICsgbmV4dC5yZWR1Y2UoKGFjYywgeCkgPT4gYWNjICsgeCwgMClcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXVxuICogTWF0cml4LmZvbGQocmVkdWNlciwgQSlcbiAqIC8vIDRcbiAqL1xuTWF0cml4LmZvbGQgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmZvbGQoZilcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNhcFxuICogQGRlc2NyaXB0aW9uIEZ1bmN0aW9uIHRoYXQgYXBwbGllcyBhIGZ1bmN0aW9uIHRvIGEgTWF0cml4XG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIE1hdHJpeCBvciBBcnJheSB0byBhcHBseSBhIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBmID0geCA9PiB4LnJlZHVjZSgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMiwgM10sIFs0LCA1LCA2XSwgWzcsIDgsIDldXSlcbiAqIE1hdHJpeC5vZihmKS5hcChNKVxuICogLy8gW1s2XSwgWzE1XSwgWzI0XVxuICovXG5NYXRyaXgucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5tYXAodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguYXBcbiAqIEBkZXNjcmlwdGlvbiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgYXBwbGllcyBhIGZ1bmN0aW9uIHRvIGEgTWF0cml4XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIC0gRnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgTWF0cml4IGFzIGlucHV0XG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIE1hdHJpeCBvciBBcnJheSB0byBhcHBseSBhIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBmID0geCA9PiB4LnJlZHVjZSgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpXG4gKiBNYXRyaXguYXAoZiwgW1sxLCAyLCAzXSwgWzQsIDUsIDZdLCBbNywgOCwgOV1dKVxuICogLy8gW1s2XSwgWzE1XSwgWzI0XVxuICovXG5NYXRyaXguYXAgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKGYpLmFwKE0pXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQ29uY2F0ZW5hdGVzIDIgTWF0cmljZXMgdXNpbmcgYSBmdW5jdGlvbiBhcyBvcGVyYXRvclxuICogQHBhcmFtIHtNYXRyaXh9IE0gLSBUaGUgcmlnaHQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvbi9wcm9kdWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZj1jb25jYXRdIC0gQSBjdXJyaWVkIGZ1bmN0aW9uIGFjY2VwdGluZyAyIG1hdHJpY2VzIGFzIGlucHV0XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1swLCAxLCAxXSwgWzIsIDMsIDRdXVxuICogY29uc3QgYiA9IFtbMiwgMiwgMl0sIFszLCAzLCAzXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqIGNvbnN0IE0gPSBBLmNvbmNhdChCKVxuICogLy8gW1swLCAxLCAxLCAyLCAyLCAyXSwgWzIsIDMsIDQsIDMsIDMsIDNdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAoTSwgZiA9IGNvbmNhdCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChmKE0pKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQSBjdXJyaWVkIGZ1bmN0aW9uIHRoYXQgY29uY2F0ZW5hdGVzIDIgTWF0cmljZXMgdXNpbmcgYSBmdW5jdGlvbiBhcyBvcGVyYXRvclxuICogQHBhcmFtIHtNYXRyaXh9IEEgLSBMZWZ0IHNpZGUgTWF0cml4IG9mIHRoZSBjb25jYXRlbmF0aW9uXG4gKiBAcGFyYW0ge01hdHJpeH0gQiAtIFJpZ2h0IHNpZGUgTWF0cml4IG9mIHRoZSBjb25jYXRlbmF0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZj1jb25jYXRdIC0gQSBjdXJyaWVkIGZ1bmN0aW9uIGFjY2VwdGluZyAyIG1hdHJpY2VzIGFzIGlucHV0XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1swLCAxLCAxXSwgWzIsIDMsIDRdXVxuICogY29uc3QgYiA9IFtbMiwgMiwgMl0sIFszLCAzLCAzXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqIGNvbnN0IE0gPSBNYXRyaXguY29uY2F0KEEsIEIpXG4gKiAvLyBbWzAsIDEsIDEsIDIsIDIsIDJdLCBbMiwgMywgNCwgMywgMywgM11dXG4gKlxuICovXG5NYXRyaXguY29uY2F0ID0gY3VycnkoZnVuY3Rpb24gKEEsIEIsIGYgPSBjb25jYXQpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5tYXAoZihCKSlcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNlbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYW4gZW1wdHkgTWF0cml4IGZyb20gYW4gZXhpc3RpbmcgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChlbXB0eSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmVtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhbiBlbXB0eSBNYXRyaXggZnJvbSBhbiBleGlzdGluZyBNYXRyaXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBbcm93cz0wXSAtIFJvd3MgdG8gZ2VuZXJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbY29scz0wXSAtIENvbHMgdG8gZ2VuZXJhdGVcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5lbXB0eSA9IGN1cnJ5KGZ1bmN0aW9uIChyb3dzID0gMCwgY29scyA9IDApIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpIC8vIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4gIHJldHVybiBNYXRyaXgub2YobSkubWFwKGVtcHR5KVxufSlcblxuLy8gIyMjIyAjIyMjICMjIyMgLy9cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2lkZW50aXR5XG4gKiBAZGVzYyBSZXR1cm5zIGFuIGlkZW50aXR5IG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYSA9IFtbMSwgMiwgM10sIFs0LCA1LCA2XV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEFpZGVudGl0eSA9IEEuaWRlbnRpdHkoKVxuICogLy8gW1sxLCAwLCAwXSwgWzAsIDEsIDBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pZGVudGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihpZGVudGl0eSkuYXAodGhpcylcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmlkZW50aXR5XG4gKiBAZGVzYyBjdXJyaWVkIGZ1Y250aW9uIHRoYXQgcmV0dXJucyBhbiBpZGVudGl0eSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXguaWRlbnRpdHkoMywgMilcbiAqIC8vIFtbMSwgMCwgMF0sIFswLCAxLCAwXV1cbiAqXG4gKi9cbk1hdHJpeC5pZGVudGl0eSA9IGN1cnJ5KGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKSAvLyBBcnJheS5hcHBseShudWxsLCBBcnJheShyb3dzKSkubWFwKHggPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoY29scykpKVxuICByZXR1cm4gTWF0cml4Lm9mKGlkZW50aXR5KS5hcChtKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2NvbWJpbmVcbiAqIEBkZXNjIENvbmNhdGVuYXRlcyAyIE1hdHJpY2VzIHRvZ2V0aGVyLlxuICogQHNlZSBNYXRyaXguY29uY2F0XG4gKiBAcGFyYW0ge01hdHJpeCB9IE0gLSBSaWdodCBzaWRlIE1hdHJpeCBvZiB0aGUgY29tYmluZSBvcGVyYXRpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY29tYmluZSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuY29uY2F0KE1hdHJpeC5vZihNKSwgY29uY2F0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguY29tYmluZVxuICogQGRlc2MgQ3VycmllZCBmdWNudGlvbiB0aGF0IGNvbWJpbmVzIDIgTWF0cmljZXNcbiAqIEBzZWUgTWF0cml4LmNvbmNhdFxuICogQHBhcmFtIHtNYXRyaXh9IEEgLSBMZWZ0IHNpZGUgb2YgdGhlIGNvbWJpbmUgb3BlcmF0b3JcbiAqIEBwYXJhbSB7TWF0cml4fSBBIC0gUmlnaHQgc2lkZSBvZiB0aGUgY29tYmluZSBvcGVyYXRvclxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LmNvbWJpbmUgPSBjdXJyeShmdW5jdGlvbiAoQSwgQikge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLmNvbmNhdChNYXRyaXgub2YoQiksIGNvbmNhdClcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNkb3RcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuIDIgbWF0cmljZXNcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gUmlnaHQgc2lkZSBvZiB0aGUgZG90IHByb2R1Y3RcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIENyZWF0ZSBtYXRyaXhcbiAqIGNvbnN0IG0gPSBNYXRyaXgub2YoW1sxLCAyXSwgWzMsIDRdXSlcbiAqXG4gKiAvLyBHZW5lcmF0ZSBpZGVudGl0eSBtYXRyaXhcbiAqIGNvbnN0IEkgID0gbS5pZGVudGl0eSgpIC8vIFtbMSwgMF0sIFswLCAxXV1cbiAqXG4gKiBpZihtLmRvdChJKS5lcXVhbHMobSkpIHtcbiAqICAgIGNvbnNvbGUubG9nKCdEb3QgcHJvZHVjdCB3aXRoIGlkZW50aXR5IG1hdHJpeCByZXR1cm5zIHRoZSBzYW1lIG1hdHJpeCcpXG4gKiB9XG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuY29uY2F0KE1hdHJpeC5vZihNKSwgZG90KHRoaXMucHJlY2lzaW9uKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmRvdFxuICogQGRlc2NyaXB0aW9uIEN1cnJpZWQgZnVjbnRpb24gdGhhdCByZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBvZiAyIG1hdHJpY2VzXG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gQSAtIExlZnQgc2lkZSBvZiB0aGUgZG90IHByb2R1Y3RcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBCIC0gUmlnaHQgc2lkZSBvZiB0aGUgZG90IHByb2R1Y3RcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICogY29uc3QgYSA9IFtbMSwgMiwgM10sIFs0LCA1LCA2XV1cbiAqIGNvbnN0IGIgPSBbWzcsIDhdLCBbOSwgMTBdLCBbMTEsIDEyXV1cbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKGEpXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKGIpXG4gKlxuICogTWF0cml4LmRvdChBLCBCKSAvLyBbWzU4LCA2NF0sIFsxMzksIDE1NF1dXG4gKlxuICovXG5NYXRyaXguZG90ID0gY3VycnkoZnVuY3Rpb24gKEEsIEIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5kb3QoTWF0cml4Lm9mKEIpKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2ZpbGxcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggdGhlIHByb3ZpZGVkIG1hcCBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZiAtIEZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzIGEgdmFsdWVcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLDIsM10sIFszLDIsMV0sIFs0LDUsNl1dKS5maWxsKHggPT4gNDIpXG4gKiAvLyBbWzQyLDQyLDQyXSwgWzQyLDQyLDQyXSwgWzQyLDQyLDQyXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubWFwKG1hcCh4ID0+IGYoeCkpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjemVyb3NcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggemVyb3NcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwyLDNdLCBbMywyLDFdLCBbNCw1LDZdXSkuemVyb3MoKVxuICogLy8gW1swLDAsMF0sIFswLDAsMF0sIFswLDAsMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnplcm9zID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoeCA9PiAwKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXguemVyb3NcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggemVyb3NcbiAqIEBwYXJhbSB7TnVtYmVyfSByb3dzIC0gRGVmaW5lcyB0aGUgcm93cyBvZiB0aGUgbWF0cml4XG4gKiBAcGFyYW0ge051bWJlcn0gY29scyAtIERlZmluZXMgdGhlIGNvbHVtbnMgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC56ZXJvcygzLCAzKVxuICogLy8gW1swLDAsMF0sIFswLDAsMF0sIFswLDAsMF1dXG4gKlxuICovXG5NYXRyaXguemVyb3MgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKHggPT4gMClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjb25lc1xuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCBvbmVzXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwyLDNdLCBbMywyLDFdLCBbNCw1LDZdXSkub25lcygpXG4gKiAvLyBbWzEsMSwxXSwgWzEsMSwxXSwgWzEsMSwxXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUub25lcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKHggPT4gMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4Lm9uZXNcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggb25lc1xuICogQHBhcmFtIHtOdW1iZXJ9IHJvd3MgLSBEZWZpbmVzIHRoZSByb3dzIG9mIHRoZSBtYXRyaXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2xzIC0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9uZXMoMSwgMSlcbiAqIC8vIFtbMSwxLDFdLCBbMSwxLDFdLCBbMSwxLDFdXVxuICpcbiAqL1xuTWF0cml4Lm9uZXMgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKHggPT4gMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3JhbmRvbVxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCByYW5kb20gdmFsdWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZiA9IGUgPT4gTWF0aC5yYW5kb20oKSAqIDIgLSAxXSAtIEZ1bmN0aW9uIHByb2R1Y2luZyByYW5kb20gdmFsdWVzLCBjYW4gYmUgYW55IHR5cGUgb2YgdmFsdWVcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24gKGYgPSBlID0+IE1hdGgucmFuZG9tKCkgKiAyIC0gMSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoZilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LnJhbmRvbVxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCByYW5kb20gbnVtYmVyc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZiAtIEZ1bmN0aW9uIHdoaWNoIHJldHVybnMgcmFuZG9tIHZhbHVlcy4gRGVmYXVsdCByYW5kb20gdmFsdWVzIGFyZSBiZXR3ZWVuIC0xIGFuZCAxXG4gKiBAcGFyYW0ge051bWJlcn0gcm93cyAtIERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IGNvbHMgLSBEZWZpbmVzIHRoZSBjb2x1bW5zIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5yYW5kb20gPSBmdW5jdGlvbiAoZiA9IGUgPT4gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSksIHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpXG4gIHJldHVybiBNYXRyaXgub2YobSkuZmlsbChmKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjdG9BcnJheVxuICogQGRlc2MgUmV0dXJucyB0aGUgYXJyYXkgZnJvbSB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZS5tYXAocm93ID0+IHJvdy5tYXAoY29sID0+IGNvbCkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNjbG9uZVxuICogQGRlc2MgUmV0dXJucyBhIGNsb25lIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IE0gPSBNYXRyaXguZnJvbUFycmF5KHRoaXMuX192YWx1ZSlcbiAgTS5zZXRQcmVjaXNpb24odGhpcy5wcmVjaXNpb24pXG4gIHJldHVybiBNXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNmcm9tQXJyYXlcbiAqIEBkZXNjIFJldHVybnMgYSBNYXRyaXggZnJvbSBhbiBhcnJheVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5NYXRyaXguZnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gTWF0cml4Lm9mKG1hcChyb3cgPT4gbWFwKGNvbCA9PiBjb2wpKHJvdykpKGFycikpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCN0cmFuc3Bvc2VcbiAqIEBkZXNjIFJldHVybnMgYSB0cmFuc3Bvc2VkIE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbLTEsIDJdLCBbMywgNF0sIFstOCwgMl0pXG4gKiBjb25zdCBiID0gQS50cmFuc3Bvc2UoKS50b0FycmF5KClcbiAqIC8vIHJldHVybnMgW1stMSwgMywtOF0sIFsyLCA0LCAyXV1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS50cmFuc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZm9sZCh0cmFuc3Bvc2UsIFtdLCB0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgudHJhbnNwb3NlXG4gKiBAZGVzYyBSZXR1cm5zIGEgdHJhbnNwb3NlZCBNYXRyaXhcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gQSBNYXRyaXggb3IgYSBtYXRyaXggYXJyYXlcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbLTEsIDJdLCBbMywgNF0sIFstOCwgMl1cbiAqIGNvbnN0IGIgPSBNYXRyaXgudHJhbnNwb3NlKGEpLnRvQXJyYXkoKVxuICogLy8gcmV0dXJucyBbWy0xLCAzLC04XSwgWzIsIDQsIDJdXVxuICovXG5NYXRyaXgudHJhbnNwb3NlID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS50cmFuc3Bvc2UoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjYWRkXG4gKiBAZGVzYyBBZGRzIGEgbnVtYmVyIG9yIGEgTWF0cml4IHRvIHRoaXNcbiAqIEBwYXJhbSB7TWF0cml4fE51bWJlcn0gTSAtIEFkZCBhIE1hdHJpeCBvciBhIG51bWJlclxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEuYWRkKDEpIC8vIFtbNiwgNV1dXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKFtbNSwgNV1dKVxuICogQi5hZGQoQikgLy8gW1sxMCwgMTBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IGFkZCcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcCgocm93LCBpZHgpID0+IG1hcCgodmFsLCBqZHgpID0+IHZhbCArIE0uX192YWx1ZVtpZHhdW2pkeF0pKHJvdykpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKG1hcCh4ID0+IHggKyBNKSlcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjc3VidHJhY3RcbiAqIEBkZXNjIFN1YnRyYWN0cyBhIG51bWJlciBvciBhIE1hdHJpeCBmcm9tIHRoaXNcbiAqIEBwYXJhbSB7TWF0cml4fE51bWJlcn0gTSAtIFN1YnRyYWN0IGEgTWF0cml4IG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5zdWJ0cmFjdCgxKSAvLyBbWzQsIDJdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIuc3VidHJhY3QoQikgLy8gW1swLCAwXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IHN1YnRyYWN0JylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKChyb3csIGlkeCkgPT4gbWFwKCh2YWwsIGpkeCkgPT4gdmFsIC0gTS5fX3ZhbHVlW2lkeF1bamR4XSkocm93KSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tYXAobWFwKHggPT4geCAtIE0pKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNtdWx0aXBseVxuICogQGRlc2MgTXV0bGlwbHkgYSBzY2FsYXIgb3IgYSBtYXRyaXggd2l0aCBhIG1hdHJpeC4gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBtdWx0aXBsaWNhdGlvbiBpcyBub3QgcG9zc2libGUuXG4gKiBAcGFyYW0ge01hdHJpeHxOdW1iZXJ9IE0gLSBBIE1hdHJpeCBNIG9yIGEgTnVtYmVyIHRvIG11bHRpcGx5IGEgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5tdWx0aXBseSgyKSAvLyBbWzEwLCA4XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLm11bHRpcGx5KEIpIC8vIFtbMjUsIDI1XV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICBjb25zb2xlLmxvZygnVXNlIHN0YXRpYyBtZXRob2QgXFwnZG90XFwnIHRvIGRvIG1hdHJpeCBtdWx0aXBsaWNhdGlvbicpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IGNyZWF0ZSBoYWRhbWFyZCBwcm9kdWN0JylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKChyb3csIGlkeCkgPT4gbWFwKChjb2wsIGpkeCkgPT4gY29sICogTS5fX3ZhbHVlW2lkeF1bamR4XSkocm93KSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tYXAobWFwKHggPT4geCAqIE0pKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNhZGRpdGl2ZWludmVyc2VcbiAqIEBkZXNjIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbWF0cml4IG9idGFpbmVkIGJ5IGNoYW5naW5nIHRoZSBzaWduIG9mIGV2ZXJ5IG1hdHJpeCBlbGVtZW50LiBUaGUgYWRkaXRpdmUgaW52ZXJzZSBvZiBtYXRyaXggQSBpcyB3cml0dGVuIOKAk0EuXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwtNV0sIFstNCwgNF1dKVxuICogY29uc3QgbWludXNBID0gQS5hZGRpdGl2ZWludmVyc2UoKVxuICogLy8gW1stNSwgNV0sIFs0LCAtNF1dXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYWRkaXRpdmVpbnZlcnNlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm11bHRpcGx5KC0xKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjaGFkYW1hcmRcbiAqIEBkZXNjIEhhZGFtYXIgaXMgYW4gYWxpYXMgb2YgdGhlIG11bHRpcGx5IGZ1bmN0aW9uXG4gKiBAc2VlIG11bHRpcGx5XG4gKiBAcGFyYW0ge01hdHJpeHxOdW1iZXJ9IE0gLSBBIE1hdHJpeCBNIG9yIGEgTnVtYmVyIHRvIG11bHRpcGx5IGEgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5oYWRhbWFyZCgyKSAvLyBbWzEwLCA4XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLmhhZGFtYXJkKEIpIC8vIFtbMjUsIDI1XV1cblxuICovXG5NYXRyaXgucHJvdG90eXBlLmhhZGFtYXJkID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tdWx0aXBseShNKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjbHVcbiAqIEBkZXNjIENhbGN1bGF0ZXMgTFUgZGVjb21wb3NpdGlvbiBvZiB0aGUgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4W119XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IFtbMywgLTcsIC0yLCAyXSwgWy0zLCA1LCAxLCAwXSwgWzYsIC00LCAwLCAtNV0sIFstOSwgNSwgLTUsIDEyXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXguZnJvbUFycmF5KHJlc3VsdClcbiAqIGNvbnN0IGx1ID0gQS5sdSgpXG4gKiAvLyBMLl9fdmFsdWUgPSBbIFsgMSwgMCwgMCwgMCBdLCBbIC0xLCAxLCAwLCAwIF0sIFsgMiwgLTUsIDEsIDAgXSwgWyAtMywgOCwgMywgMSBdIF1cbiAqIC8vIFUuX192YWx1ZSA9ICBbIFsgMywgLTcsIC0yLCAyIF0sIFsgMCwgLTIsIC0xLCAyIF0sIFsgMCwgMCwgLTEsIDEgXSwgWyAwLCAwLCAwLCAtMSBdIF1cbiAqIE1hdHJpeC5kb3QobHVbMF0sIGx1WzFdKSAvLyByZXR1cm5zIGNsb25lIG9mIEFcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubHUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG4gPSB0aGlzLmdldFJvd3MoKVxuICBjb25zdCB0b2wgPSAxZS02XG4gIGNvbnN0IEEgPSB0aGlzLmNsb25lKClcbiAgY29uc3QgTCA9IHRoaXMuemVyb3MoKVxuICBjb25zdCBVID0gdGhpcy56ZXJvcygpXG5cbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyArK2spIHtcbiAgICBpZiAoTWF0aC5hYnMoQS5fX3ZhbHVlW2tdW2tdKSA8IHRvbCkgdGhyb3cgRXJyb3IoJ0Nhbm5vdCBwcm9jZWVkIHdpdGhvdXQgYSByb3cgZXhjaGFuZ2UnKVxuICAgIEwuX192YWx1ZVtrXVtrXSA9IDFcbiAgICBmb3IgKGxldCBpID0gayArIDE7IGkgPCBuOyArK2kpIHtcbiAgICAgIEwuX192YWx1ZVtpXVtrXSA9IEEuX192YWx1ZVtpXVtrXSAvIEEuX192YWx1ZVtrXVtrXVxuICAgICAgZm9yIChsZXQgaiA9IGsgKyAxOyBqIDwgbjsgKytqKSB7XG4gICAgICAgIEEuX192YWx1ZVtpXVtqXSA9IEEuX192YWx1ZVtpXVtqXSAtIEwuX192YWx1ZVtpXVtrXSAqIEEuX192YWx1ZVtrXVtqXVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBsID0gazsgbCA8IG47ICsrbCkge1xuICAgICAgVS5fX3ZhbHVlW2tdW2xdID0gQS5fX3ZhbHVlW2tdW2xdXG4gICAgfVxuICB9XG4gIHJldHVybiBbTCwgVV1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3JyZWZcbiAqIEBkZXNjIFJldHVybnMgYSBNYXRyaXggY29udGFpbmluZyB0aGUgcm93IHJlZHVjZWQgZWNoZWxvbiBmb3JtXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgQSA9IE1hdHJpeC5vZihbWy0xLCAxXSwgWy0xLCAwXSwgWzAsIC0xXSwgWy0xLCAtMl1dKVxuICogQS5ycmVmKCkgLy8gIFsgWyAxLCAwIF0sIFsgLTAsIDEgXSwgWyAwLCAwIF0sIFsgMCwgMCBdIF1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5ycmVmID0gZnVuY3Rpb24gKCkge1xuICBsZXQgbGVhZCA9IDBcbiAgY29uc3QgcmVzdWx0TWF0cml4ID0gdGhpcy5jbG9uZSgpXG5cbiAgZm9yIChsZXQgciA9IDA7IHIgPCB0aGlzLmdldFJvd3MoKTsgKytyKSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpIDw9IGxlYWQpIHtcbiAgICAgIHJldHVybiByZXN1bHRNYXRyaXhcbiAgICB9XG4gICAgbGV0IGkgPSByXG4gICAgd2hpbGUgKHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2xlYWRdID09PSAwKSB7XG4gICAgICArK2lcbiAgICAgIGlmICh0aGlzLmdldFJvd3MoKSA9PT0gaSkge1xuICAgICAgICBpID0gclxuICAgICAgICArK2xlYWRcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29scygpID09PSBsZWFkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdE1hdHJpeFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRtcCA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldXG4gICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV0gPSByZXN1bHRNYXRyaXguX192YWx1ZVtyXVxuICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdID0gdG1wXG5cbiAgICBsZXQgdmFsID0gcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bbGVhZF1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0Q29scygpOyArK2opIHtcbiAgICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdW2pdIC89IHZhbFxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRSb3dzKCk7ICsraSkge1xuICAgICAgaWYgKGkgPT09IHIpIGNvbnRpbnVlXG4gICAgICB2YWwgPSByZXN1bHRNYXRyaXguX192YWx1ZVtpXVtsZWFkXVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdldENvbHMoKTsgKytqKSB7XG4gICAgICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2pdIC09IHZhbCAqIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdW2pdXG4gICAgICB9XG4gICAgfVxuICAgIGxlYWQrK1xuICB9XG4gIHJldHVybiByZXN1bHRNYXRyaXhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3NvbHZlXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBzb2x1dGlvbiBmb3IgYSBzeXN0ZW0gb2YgbGluZWFyIGVxdWF0aW9uc1xuICogQHBhcmFtIHtBcnJheX0gYiAtIFRoZSBudW1iZXJzIGZvciB3aGljaCB0byBzb2x2ZSB0aGUgc3lzdGVtIG9mIGxpbmVhciBlcXVhdGlvbnNcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gU29sdmUgeEEgPSBiXG4gKiAvLyA1eCArIHkgID0gN1xuICogLy8gM3ggLSA0eSA9IDE4XG4gKiAvLyBTb2x1dGlvbiBmb3IgeCBhbmQgeTpcbiAqIC8vIHggPSAyXG4gKiAvLyB5ID0gLTNcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgMV0sIFszLCAtNF1dKVxuICogY29uc3Qgc29sdmVBID0gQS5zb2x2ZShbNywgMThdKSAvLyBbMiwgLTNdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnNvbHZlID0gZnVuY3Rpb24gKGIpIHtcbiAgY29uc3QgTFUgPSB0aGlzLmx1KClcbiAgY29uc3QgTCA9IExVWzBdXG4gIGNvbnN0IFUgPSBMVVsxXVxuICBjb25zdCBuID0gdGhpcy5nZXRSb3dzKClcbiAgbGV0IHMgPSAwXG4gIGNvbnN0IGMgPSBbXVxuICBjb25zdCB4ID0gW11cblxuICBmb3IgKGxldCBrID0gMDsgayA8IG47ICsraykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgazsgKytqKSB7XG4gICAgICBzID0gcyArIEwuX192YWx1ZVtrXVtqXSAqIGNbal1cbiAgICB9XG4gICAgY1trXSA9IGJba10gLSBzXG4gICAgcyA9IDBcbiAgfVxuICBmb3IgKGxldCBhID0gbiAtIDE7IGEgPiAtMTsgLS1hKSB7XG4gICAgbGV0IHQgPSAwXG4gICAgZm9yIChsZXQgYiA9IGEgKyAxOyBiIDwgbjsgKytiKSB7XG4gICAgICB0ID0gdCArIFUuX192YWx1ZVthXVtiXSAqIHhbYl1cbiAgICB9XG4gICAgeFthXSA9IChjW2FdIC0gdCkgLyBVLl9fdmFsdWVbYV1bYV1cbiAgfVxuICByZXR1cm4geFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjaW52ZXJzZVxuICogQGRlc2MgUmV0dXJucyB0aGUgaW52ZXJzZSBvZiBhIE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMiwgNF1dKS5pbnZlcnNlKClcbiAqIC8vIFsgWyAyLCAtMC41IF0sIFsgLTEsIDAuNSBdIF1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaW52ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgQSA9IHRoaXMuY2xvbmUoKVxuICBjb25zdCBJID0gQS5pZGVudGl0eSgpXG4gIGNvbnN0IEludiA9IEEuY29uY2F0KEkpLnJyZWYoKVxuXG4gIGNvbnN0IHJlc3VsdCA9IEludi5fX3ZhbHVlLnJlZHVjZSgocmVzdWx0LCB4LCBpZHgpID0+IHtcbiAgICBjb25zdCBoYWxmID0geC5sZW5ndGggLyAyXG4gICAgcmVzdWx0LnB1c2goeC5zbGljZShoYWxmLCB4Lmxlbmd0aCkpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCBbXSlcbiAgcmV0dXJuIE1hdHJpeC5vZihyZXN1bHQpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNyYW5rXG4gKiBAZGVzYyBOdW1iZXIgaW5kaWNhdGluZyB0aGUgbWF4aW11bSBudW1iZXIgb2YgbGluZWFybHkgaW5kZXBlbmRlbnQgY29sdW1ucy5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucmFuayA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcnJlZiA9IHRoaXMucnJlZigpXG4gIGxldCByZXN1bHQgPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcnJlZi5nZXRDb2xzKCk7ICsraSkge1xuICAgIHJlc3VsdCArPSBycmVmLl9fdmFsdWVbaV1baV1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNkaW1lbnNpb25cbiAqIEBkZXNjIE51bWJlciBpbmRpY2F0aW5nIHRoZSBtYXhpbXVtIG51bWJlciBvZiBsaW5lYXJseSBpbmRlcGVuZGVudCBjb2x1bW5zLlxuICogQHNlZSByYW5rXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5NYXRyaXgucHJvdG90eXBlLmRpbWVuc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmFuaygpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNkaWFnXG4gKiBAZGVzYyBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5kaWFnKClcbiAqIC8vIFsxLCAxLCAxXVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLmRpYWcoKVxuICogLy8gWzAsIDAsIDAsIDAsIDBdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRpYWcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGlkeCkgPT4ge1xuICAgIHJldHVybiBhY2MuY29uY2F0KHhbaWR4XSlcbiAgfSkoW10pKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LmRpYWdcbiAqIEBkZXNjIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IE0gLSBNYXRyaXggZnJvbSB3aGljaCB0byByZXR1cm4gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LmRpYWcoW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIFsyLCA1XVxuICpcbiAqL1xuTWF0cml4LmRpYWcgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmRpYWcoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZGlhZ3Byb2R1Y3RcbiAqIEBkZXNjIFJldHVybnMgdGhlIHByb2R1Y3Qgb2YgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4Lm9uZXMoMywgMykuZGlhZ3Byb2R1Y3QoKVxuICogLy8gMVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLmRpYWdwcm9kdWN0KClcbiAqIC8vIDBcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGlhZ3Byb2R1Y3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGlkeCkgPT4ge1xuICAgIGFjYyAqPSB4W2lkeF1cbiAgICByZXR1cm4gYWNjXG4gIH0pKDEpKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LmRpYWdwcm9kdWN0XG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBwcm9kdWN0IG9mIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIE1hdHJpeCBmcm9tIHdoaWNoIHRvIHJldHVybiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LmRpYWdwcm9kdWN0KFtbMiwgMV0sIFsxLCA1XV0pXG4gKiAvLyAxMFxuICpcbiAqL1xuTWF0cml4LmRpYWdwcm9kdWN0ID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5kaWFncHJvZHVjdCgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNzdW1cbiAqIEBkZXNjIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgdmFsdWVzIGluIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4Lm9uZXMoMywgMykuc3VtKClcbiAqIC8vIDlcbiAqXG4gKiBjb25zdCBkaWFnMCA9IE1hdHJpeC56ZXJvcyg1LCA1KS5zdW0oKVxuICogLy8gMFxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zdW0gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgpID0+IHtcbiAgICBhY2MgKz0gZm9sZCgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpKDApKHgpXG4gICAgcmV0dXJuIGFjY1xuICB9KSgwKSh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5zdW1cbiAqIEBkZXNjIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgdmFsdWVzIGluIHRoZSBNYXRyaXhcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gTWF0cml4IGZyb20gd2hpY2ggdG8gcmV0dXJuIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXguc3VtKFtbMiwgMV0sIFsxLCA1XV0pXG4gKiAvLyA5XG4gKlxuICovXG5NYXRyaXguc3VtID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5zdW0oKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgja3JvbmVja2VyXG4gKiBAZGVzYyBUaGUgS3JvbmVja2VyIHByb2R1Y3QgaXMgYW4gb3BlcmF0aW9uIG9uIHR3byBtYXRyaWNlcyBvZiBhcmJpdHJhcnkgc2l6ZSByZXN1bHRpbmcgaW4gYSBibG9jayBtYXRyaXguXG4gKiBAcGFyYW0ge01hdHJpeH0gTSAtIFRoZSByaWdodCBzaWRlIE1hdHJpeCBvZiB0aGUgcHJvZHVjdCAodGhpcyDiipcgTSlcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUua3JvbmVja2VyID0gZnVuY3Rpb24gKE0pIHtcbiAgY29uc3QgbSA9IHRoaXMuZ2V0Um93cygpXG4gIGNvbnN0IG4gPSB0aGlzLmdldENvbHMoKVxuICBjb25zdCBwID0gTS5nZXRSb3dzKClcbiAgY29uc3QgcSA9IE0uZ2V0Q29scygpXG5cbiAgY29uc3QgbGVmdCA9IHRoaXMuX192YWx1ZVxuICBjb25zdCByaWdodCA9IE0uX192YWx1ZVxuXG4gIGNvbnN0IGZyYW1lID0gZ2VuZXJhdGUobSAqIHAsIG4gKiBxKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcDsgaysrKSB7XG4gICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgcTsgbCsrKSB7XG4gICAgICAgICAgZnJhbWVbcCAqIGkgKyBrXVtxICogaiArIGxdID0gbGVmdFtpXVtqXSAqIHJpZ2h0W2tdW2xdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gTWF0cml4Lm9mKGZyYW1lKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgua3JvbmVja2VyXG4gKiBAZGVzYyBUaGUgS3JvbmVja2VyIHByb2R1Y3QgaXMgYW4gb3BlcmF0aW9uIG9uIHR3byBtYXRyaWNlcyBvZiBhcmJpdHJhcnkgc2l6ZSByZXN1bHRpbmcgaW4gYSBibG9jayBtYXRyaXguXG4gKiBAcGFyYW0ge01hdHJpeH0gQSAtIFRoZSBsZWZ0IHNpZGUgTWF0cml4IG9mIHRoZSBwcm9kdWN0IChBIOKKlyBCKVxuICogQHBhcmFtIHtNYXRyaXh9IEIgLSBUaGUgcmlnaHQgc2lkZSBNYXRyaXggb2YgdGhlIHByb2R1Y3QgKEEg4oqXIEIpXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgua3JvbmVja2VyID0gZnVuY3Rpb24gKEEsIEIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5rcm9uZWNrZXIoQilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2RldGVybWluYW50XG4gKiBAZGVzYyBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIHNxdWFyZSBNYXRyaXggdXNpbmcgU2FycnVzJyBydWxlIG9yIExVIGRlY29tcG9zaXRpb25cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGV0ZXJtaW5hbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmlzU3F1YXJlKCkpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgPT09IDIpIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLl9fdmFsdWVbMF1bMF1cbiAgICAgIGNvbnN0IGIgPSB0aGlzLl9fdmFsdWVbMF1bMV1cbiAgICAgIGNvbnN0IGMgPSB0aGlzLl9fdmFsdWVbMV1bMF1cbiAgICAgIGNvbnN0IGQgPSB0aGlzLl9fdmFsdWVbMV1bMV1cblxuICAgICAgcmV0dXJuIGEgKiBkIC0gYiAqIGNcbiAgICB9XG4gICAgY29uc3QgbHUgPSB0aGlzLmx1KClcbiAgICBjb25zdCBkZXRBID0gTnVtYmVyKGx1WzBdLmRpYWdwcm9kdWN0KCkpXG4gICAgY29uc3QgZGV0QiA9IE51bWJlcihsdVsxXS5kaWFncHJvZHVjdCgpKVxuICAgIHJldHVybiBkZXRBICogZGV0QlxuICB9IGVsc2Uge1xuICAgIHRocm93IEVycm9yKCdUaGUgTWF0cml4IG5lZWRzIHRvIGJlIGEgc3F1YXJlIE1hdHJpeCB0byBjYWxjdWxhdGUgdGhlIGRldGVybWluYW50JylcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXguZGV0ZXJtaW5hbnRcbiAqIEBkZXNjIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgc3F1YXJlIE1hdHJpeCB1c2luZyBTYXJydXMnIHJ1bGUgb3IgTFUgZGVjb21wb3NpdGlvblxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IEEgLSBNYXRyaXggYXMgaW5wdXQgdG8gY2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LmRldGVybWluYW50ID0gZnVuY3Rpb24gKEEpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5kZXRlcm1pbmFudCgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNtYXhcbiAqIEBkZXNjIFJldHVybnMgdGhlIGxhcmdlc3QgbnVtYmVyIGluIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHsqfVxuICovXG5NYXRyaXgucHJvdG90eXBlLm1heCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHJlZHVjZShtYXgsIFtdLmNvbmNhdC5hcHBseShbXSwgdGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I21pblxuICogQGRlc2MgUmV0dXJucyB0aGUgc21hbGxlc3QgbnVtYmVyIGluIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHsqfVxuICovXG5NYXRyaXgucHJvdG90eXBlLm1pbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHJlZHVjZShtaW4sIFtdLmNvbmNhdC5hcHBseShbXSwgdGhpcy5fX3ZhbHVlKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4XG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcbmltcG9ydCBjb25jYXQgZnJvbSAnZnVuLmpzL3NyYy9jb25jYXQnXG5cbi8qKlxuICogQGZ1bmN0aW9uIGNvbmNhdFxuICogQGRlc2MgSGVscGVyIGZ1bmN0aW9uIGNvbmNhdGVuYXRpbmcvY29tYmluaW5nIDIgTWF0cmljZXNcbiAqIEBwYXJhbSB7TWF0cml4fSBNIC0gTGVmdCBzaWRlIG9mIHRoZSBjb25jYXQgb3BlcmF0aW9yXG4gKiBAcGFyYW0ge0FycmF5fSBtIC0gcmlnaHQgc2lkZSBvZiB0aGUgY29udGFjIG9wZXJhdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IC0gSW5kZXggb2YgdGhlIHJvd1xuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiAoTSwgbSwgaWR4KSB7XG4gIHJldHVybiBjb25jYXQobSwgTS5fX3ZhbHVlW2lkeF0pXG59KVxuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5pbXBvcnQgZm9sZCBmcm9tICdmdW4uanMvc3JjL2ZvbGQnXG5pbXBvcnQgbWFwIGZyb20gJ2Z1bi5qcy9zcmMvbWFwJ1xuaW1wb3J0IHJvdW5kIGZyb20gJy4vcm91bmQnXG5cbi8qKlxuICogQGZ1bmN0aW9uIGRvdFxuICogQGRlc2MgSGVscGVyIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBkb3Rwcm9kdWN0IG9mIDIgTWF0cmljZXNcbiAqIEBwYXJhbSB7TWF0cml4fSBCIC0gUmlnaHQgc2lkZSBvZiBodGUgZG90IHByb2R1Y3RcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBBcnJheSByZXByZXNlbnRpbmcgdGhlbGVmdCBzaWRlIG9mIHRoZSBkb3QgcHJvZHVjdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoZGVjaW1hbHMsIEIsIGEpID0+IG1hcCgoaXRlbSwgaSkgPT4ge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4LCBqKSA9PiB7XG4gICAgYWNjICs9IHJvdW5kKHggKiBCLl9fdmFsdWVbal1baV0sIGRlY2ltYWxzKVxuICAgIHJldHVybiBhY2NcbiAgfSwgMCkoYSlcbn0pKEIuX192YWx1ZVswXSkpXG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcblxuLyoqXG4gKiBAZnVuY3Rpb24gZW1wdHlcbiAqIEBkZXNjIEhlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSBhbiBlbXB0eSBNYXRyaXhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkobSA9PiBbXSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGdlbmVyYXRlXG4gKiBAZGVzYyBHZW5lcmF0b3IgZnVuY3Rpb24gZm9yIGEgbWF0cml4IGFycmF5LCB2YWx1ZXMgYXJlIHNldCB0byB1bmRlZmluZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSByb3dzXG4gKiBAcGFyYW0ge051bWJlcn0gY29sc1xuICogQHJldHVybnMge2FueVtdW119XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChyb3dzLCBjb2xzKSA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShyb3dzKSkubWFwKHggPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoY29scykpKVxuIiwiaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gaWRlbnRpdHlcbiAqIEBkZXNjIENyZWF0ZXMgYW4gaWRlbnRpeSBtYXRyaXggZnJvbSBhbiBlbXB0eSBhcnJheVxuICogQHBhcmFtIG0ge0FycmF5fVxuICogQHBhcmFtIGlkeCB7TnVtYmVyfVxuICogQHJldHVybiB7TWF0cml4fVxuICovXG5leHBvcnQgZGVmYXVsdCAobSwgaWR4KSA9PiBtYXAoKHJvd3MsIGpkeCkgPT4gKGlkeCA9PT0gamR4KSAqIDEpKG0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiByb3VuZFxuICogQHBhcmFtIHZhbHVlIHtOdW1iZXJ9XG4gKiBAcGFyYW0gZGVjaW1hbHMge051bWJlcn1cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdW5kICh2YWx1ZSwgZGVjaW1hbHMpIHtcbiAgcmV0dXJuIE51bWJlcihNYXRoLnJvdW5kKHZhbHVlICsgJ2UnICsgZGVjaW1hbHMpICsgJ2UtJyArIGRlY2ltYWxzKVxufVxuIiwiaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcbmltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuXG4vKipcbiAqIEBmdW5jdGlvbiB0cmFuc3Bvc2VcbiAqIEBkZXNjIFRyYW5zcG9zZXMgYSBhcnJheSBvZiBhcnJheXMgdXNpbmcgdGhlIE1hdHJpeC5tYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBtIHtBcnJheX1cbiAqIEBwYXJhbSBpZHgge051bWJlcn1cbiAqIEByZXR1cm4ge01hdHJpeH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHByZXYsIG5leHQpID0+IG1hcCgoaXRlbSwgaSkgPT4gKHByZXZbaV0gfHwgW10pLmNvbmNhdChuZXh0W2ldKSkobmV4dCkpXG4iXSwic291cmNlUm9vdCI6IiJ9