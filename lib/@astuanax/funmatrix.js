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

var _not = _interopRequireDefault(__webpack_require__(/*! fun.js/src/not */ "./node_modules/fun.js/src/not.js"));

var _concat = _interopRequireDefault(__webpack_require__(/*! ./util/concat */ "./src/util/concat.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ./util/empty */ "./src/util/empty.js"));

var _dot = _interopRequireDefault(__webpack_require__(/*! ./util/dot */ "./src/util/dot.js"));

var _identity = _interopRequireDefault(__webpack_require__(/*! ./util/identity */ "./src/util/identity.js"));

var _transpose = _interopRequireDefault(__webpack_require__(/*! ./util/transpose */ "./src/util/transpose.js"));

var _generate = _interopRequireDefault(__webpack_require__(/*! ./util/generate */ "./src/util/generate.js"));

var _solve = _interopRequireDefault(__webpack_require__(/*! ./util/solve */ "./src/util/solve.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { min, max, map, fold, curry } from 'fun.js'

/**
 * @class Matrix
 * @classdesc Matrix applicative providing standard matrix operations
 * @summary The Matrix class should not be instantiated with the new keyword. Instead use the Matrix.of syntax to create a new Matrix. Unfortunatly jsdocs does not allow for the constructor to be hidden.
 * @hidecontructor
 * @see Matrix.of
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
 * @see Matrix.multiply
 * @param {Matrix|Number} M - A Matrix M or a Number to multiply a Matrix
 * @returns {Matrix}
 * @see Matrix.hadamard
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
 * @see Matrix.rank
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
/**
 * @memberOf Matrix
 * @function Matrix#divide
 * @desc Divide a scalar or a matrix by a matrix. Throws an error if the division is not possible.
 * @param {Matrix|Number} M - A Matrix M or a Number to multiply a Matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[5, 4]])
 * A.divide(2) // [[10, 8]]
 * const B = Matrix.of([[5, 5]])
 * B.multiply(B) // [[25, 25]]
 *
 */


Matrix.prototype.divide = function (M) {
  if (M instanceof Matrix) {
    if (this.getCols() !== M.getCols() || this.getRows() !== M.getRows()) {
      throw new Error('Matrices do not match, cannot create division');
    }

    if ((0, _not.default)(M.isSquare())) {
      throw new Error('Matrix is not square, cannot create inverse');
    }

    var mInv = M.inverse();
    return this.dot(mInv);
  } else {
    return this.multiply(1 / M);
  }
}; // Matrix.prototype.divide = function (M) {
//   if (M instanceof Matrix) {
// if (this.getCols() !== M.getCols() || this.getRows() !== M.getRows()) {
//   throw new Error('Matrices do not match, cannot create division')
// } else {
//   if (M.isSquare()) {
//     const mInv = M.inverse()
//     console.log(mInv.__value)
//     return this.multiply(mInv)
//   } else {
//     throw new Error('Matrix is not square, cannot create inverse')
//   }
// }
//   } else {
//     const nr = M === 0 ? 1 : 1 / M
//     this.multiply(nr)
//   }
// }


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
function round(value) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return Number(Number.parseFloat(value).toPrecision(decimals));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9fcHJpdmF0ZS9jdXJyeTEuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FuZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2Jvb2xlYW4vaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY3VycnkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2RhdGUvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2V4aXN0cy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaWRlbnRpY2FsLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2l0ZXJhdG9yL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXAvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXguanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21pbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbm90LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9udW1iZXIvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL251bWJlci9pc05hbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29yLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3N0cmluZy9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3N0cmluZy9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvdHlwZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL21hdHJpeC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9kb3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9nZW5lcmF0ZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL3JvdW5kLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9zb2x2ZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvdHJhbnNwb3NlLmpzIl0sIm5hbWVzIjpbIk1hdHJpeCIsInZhbCIsIl9fdmFsdWUiLCJvZiIsInByb3RvdHlwZSIsInR5cGUiLCJwcmVjaXNpb24iLCJzZXRQcmVjaXNpb24iLCJpc1N5bW1ldHJpYyIsImEiLCJiIiwidHJhbnNwb3NlIiwiaXNTcXVhcmUiLCJnZXRDb2xzIiwiZ2V0Um93cyIsImlzT3J0aG9nb25hbCIsIkF4QXQiLCJkb3QiLCJJIiwiaWRlbnRpdHkiLCJsZW5ndGgiLCJlcXVhbHMiLCJNIiwiZ2V0U2hhcGUiLCJtYXAiLCJmIiwiZm9sZCIsImFwIiwiY29uY2F0IiwiQSIsIkIiLCJlbXB0eSIsInJvd3MiLCJjb2xzIiwibSIsImNvbWJpbmUiLCJmaWxsIiwieCIsInplcm9zIiwib25lcyIsInJhbmRvbSIsImUiLCJNYXRoIiwidG9BcnJheSIsInJvdyIsImNvbCIsImNsb25lIiwiZnJvbUFycmF5IiwiYXJyIiwiYWRkIiwiRXJyb3IiLCJpZHgiLCJqZHgiLCJzdWJ0cmFjdCIsIm11bHRpcGx5IiwiY29uc29sZSIsImxvZyIsImFkZGl0aXZlaW52ZXJzZSIsImhhZGFtYXJkIiwibHUiLCJuIiwidG9sIiwiTCIsIlUiLCJrIiwiYWJzIiwiaSIsImoiLCJsIiwicnJlZiIsImxlYWQiLCJyZXN1bHRNYXRyaXgiLCJyIiwidG1wIiwic29sdmUiLCJMVSIsImludmVyc2UiLCJJbnYiLCJyZXN1bHQiLCJyZWR1Y2UiLCJoYWxmIiwicHVzaCIsInNsaWNlIiwicmFuayIsImRpbWVuc2lvbiIsImRpYWciLCJhY2MiLCJkaWFncHJvZHVjdCIsInN1bSIsInByZXYiLCJuZXh0Iiwia3JvbmVja2VyIiwicCIsInEiLCJsZWZ0IiwicmlnaHQiLCJmcmFtZSIsImRldGVybWluYW50IiwiYyIsImQiLCJkZXRBIiwiTnVtYmVyIiwiZGV0QiIsIm1heCIsImFwcGx5IiwibWluIiwiZGl2aWRlIiwibUludiIsImRlY2ltYWxzIiwiaXRlbSIsIkFycmF5Iiwicm91bmQiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJ0b1ByZWNpc2lvbiIsInNvbHZlTCIsInMiLCJzb2x2ZVUiLCJ0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RUFBSUcsQ0FBSixFQUFPbUMsQ0FBUCxFQUFVeEYsQ0FBVixDQUFiO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JERDs7QUFDQTs7OztBQUVBOzs7Ozs7O2VBT2Usb0JBQU0sVUFBQytFLElBQUQsRUFBT0MsSUFBUDtBQUFBLFNBQWdCLGtCQUFJLFVBQUNtQixJQUFELEVBQU8zQyxDQUFQO0FBQUEsV0FBYSxDQUFDdUIsSUFBSSxDQUFDdkIsQ0FBRCxDQUFKLElBQVcsRUFBWixFQUFnQnRDLE1BQWhCLENBQXVCOEQsSUFBSSxDQUFDeEIsQ0FBRCxDQUEzQixDQUFiO0FBQUEsR0FBSixFQUFrRHdCLElBQWxELENBQWhCO0FBQUEsQ0FBTixDIiwiZmlsZSI6IkBhc3R1YW5heC9mdW5tYXRyaXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBhc3R1YW5heC9mdW5tYXRyaXhcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGFzdHVhbmF4L2Z1bm1hdHJpeFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAYXN0dWFuYXgvZnVubWF0cml4XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21hdHJpeC5qc1wiKTtcbiIsIi8qKlxuICogUmV0dXJucyBhIGN1cnJpZWQgZnVuY3Rpb24gd2l0aCBhcml0eSAxXG4gKiBAZnVuY3Rpb24gY3VycnkxXG4gKiBAcHJpdmF0ZVxuICogQHNpbmNlIHYxLjAuMlxuICoqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeTEgKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkIChhKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDBcbiAgICAgID8gdGhpc1xuICAgICAgOiBmbihhKVxuICB9XG59XG4iLCIvKipcbiAqIENoZWNrcyBpZiBib3RoIHByZWRpY2F0ZXMgYXJlIHRydWVcbiAqXG4gKiBAZnVuY3Rpb24gYW5kXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIGJvdGggcHJlZGljYXRlcyBhcmUgdHJ1ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoeCwgeSkgLT4gYm9vbGVhblxuICogQHBhcmFtIHsqfSB4IC0gQSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7Kn0geSAtIEEgcHJlZGljYXRlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFuZCAoeCwgeSkge1xuICByZXR1cm4geCAmJiB5XG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGFycmF5Q29uY2F0XG4gKiBAcGFyYW0gYTFcbiAqIEBwYXJhbSBhMlxuICogQHJldHVybnMge1RbXX1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQoYSwgYilcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gZXF1YWxzQXJyYXlcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiBmb3IgZGVlcCBjb21wYXJpc29uIG9mIGFycmF5c1xuICogQHBhcmFtIHthfSB4IC0gT2JqZWN0IHRvIGNvbXBhcmUgb2YgdHlwZSBhXG4gKiBAcGFyYW0ge2F9IHkgLSBPYmplY3QgeCB0byBjb21wYXJlIHdpdGggb2JqZWN0IHhcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBub3QgZnJvbSAnLi4vbm90J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFsc0FycmF5ICh4LCB5KSB7XG4gIGlmICh4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm90KGVxdWFscyh4W2ldLCB5W2ldKSkpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgbWFwcGluZyBvdmVyIHRoZSBwcm92aWRlZCBhcnJheSBhbmQgY2FsbGluZyBhbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHBhcmFtIHtjYkZ1bmN0aW9ufSBjYiAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIG1vZGlmeSB0aGUgaXRlbVxuICogQHBhcmFtIHsqfSBpbml0IC0gSW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtBcnJheX0gYSAtIEFycmF5IHdpdGggaXRlbXMgdG8gbW9kaWZ5IGJ5IHRoZSBjYiBmdW5jdGlvblxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYWxpYXMgcmVkdWNlXG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gZm9sZChhZGQsIDAsIFsxLDEsMV0pXG4gKiAvLyByZXN1bHQgPSAzXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgY2JGdW5jdGlvblxuICogQHBhcmFtIHsqfSByIC0gQWNjdW11bGF0b3Igd2hpY2ggYWNjdW11bGF0ZXMgdGhlIGNhbGxiYWNrJ3MgcmV0dXJuIHZhbHVlc1xuICogQHBhcmFtIHsqfSBpdGVtIC0gdGhlIGN1cnJlbnQgZWxlbWVudCBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIHRoZSBpbmRleSBvZiB0aGUgaXRlbSBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBUaGUgaW5pdGlhbCBhcnJheVxuICogQHJldHVybiB7Kn1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9IGluaXRcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2IociwgYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IE9iamVjdCB0byB2ZXJpZml5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzQXJyYXkoWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IHRydWVcbiAqL1xuXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdBcnJheScpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBtYXBcbiAqIEBkZXNjcmlwdGlvbiBNYXBzIG92ZXIgYW4gYXJyYXkgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICogQHNpbmNlIHYxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiAgY29uc3QgcmVzdWx0ID0gbWFwKGlkZW50aXR5LCBbMCwyLDNdKVxuICogIC8vIHJlc3VsdCA9IFswLDIsM11cbiAqICBjb25zdCBhZGQyID0gYWRkKDIpXG4gKiAgY29uc3QgcmVzdWx0ID0gbWFwKGFkZDIsIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzIsNCw1XVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobClcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByW2ldID0gY2IoYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQ3VycmllZCBmdW5jdGlvbiB0aGF0IHZlcmlmaWVzIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudCBpcyBhIGJvb2xlYW5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGlzXG4gKiBAZGVzY3JpcHRpb24gQ3VycmllZCBmdW5jdGlvbiB0aGF0IHZlcmlmaWVzIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudCBpcyBhIGJvb2xlYW5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7Kn0gSXRlbSB0byB2ZXJpZnlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdCb29sZWFuJylcbiIsIi8qKlxuICogQ29uY2F0ZW5hdGVzIDIgaXRlbXMgdG9nZXRoZXJcbiAqXG4gKiBAZnVuY3Rpb24gY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQ29uY2F0ZW5hdGVzIDIgaXRlbXMgdG9nZXRoZXJcbiAqIEBzaW5jZSB2MS4wLjRcbiAqIEBwYXJhbSB7YX0gYSAtIExlZnQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvblxuICogQHBhcmFtIHthfSBiIC0gcmlnaHQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvblxuICogQHJldHVybiB7YX0gQ29uY2F0ZW5hdGVkIGl0ZW1cbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlDb25jYXQgZnJvbSAnLi9hcnJheS9jb25jYXQnXG5pbXBvcnQgc3RyaW5nQ29uY2F0IGZyb20gJy4vc3RyaW5nL2NvbmNhdCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIGNvbnN0IHR5cGVNYXAgPSB7XG4gICAgJ1N0cmluZyc6IHN0cmluZ0NvbmNhdCxcbiAgICAnQXJyYXknOiBhcnJheUNvbmNhdFxuICB9XG4gIHJldHVybiB0eXBlTWFwW3R5cGUoYSldKGEsIGIpXG59KVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qKlxuICogQGZ1bmN0aW9uIGN1cnJ5XG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJ5IChmdW4pIHtcbiAgY29uc3QgYXJnc2xlbiA9IGZ1bi5sZW5ndGhcblxuICBpZiAoYXJnc2xlbiA9PT0gMCkge1xuICAgIHJldHVybiBmdW5cbiAgfVxuICByZXR1cm4gY3JlYXRlUmVjdXJzZXIoW10pXG5cbiAgZnVuY3Rpb24gcmVjdXJzZSAoYWNjLCBhcmdzKSB7XG4gICAgY29uc3QgX2FjYyA9IGFjYy5jb25jYXQoYXJncylcbiAgICByZXR1cm4gX2FjYy5sZW5ndGggPCBhcmdzbGVuXG4gICAgICA/IGNyZWF0ZVJlY3Vyc2VyKF9hY2MpXG4gICAgICA6IGZ1bi5hcHBseSh0aGlzLCBfYWNjKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUmVjdXJzZXIgKGFjYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjdXJzZShhY2MsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnRGF0ZScpXG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGVtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZW1wdHkgZXF1aXZhbGVudCBvZiB0aGUgZmlyc3QgYXJndW1lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbXB0eSAoeCkge1xuICByZXR1cm4gbmV3IHguY29uc3RydWN0b3IoKVxufTtcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gZXF1YWxzXG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGVxdWFsaXR5IG9mIDIgaXRlbXNcbiAqIEBwYXJhbSB7Kn0geCAtIExlZnQgc2lkZSBvZiB0aGUgZXF1YWxpdHkgY2hlY2tcbiAqIEBwYXJhbSB7Kn0geSAtIFJpZ2h0IHNpZGUgb2YgdGhlIGVxdWFsaXR5IGNoZWNrXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBuYW4gPSBOdW1iZXIuTmFOXG4gKiBlcXVhbChuYW4sIG5hbikgLy8gcmV0dXJucyB0cnVlXG4gKlxuICogY29uc3QgYXJyMSA9IFswLCAxLCAyLCAzXVxuICogY29uc3QgYXJyMiA9IFtudWxsLCAxLCAyLCAzXVxuICogZXF1YWxzKGFycjEsIGFycjIpIC8vIHJldHVybnMgZmFsc2VcbiAqXG4gKiBlcXVhbHMobmV3IE9iamVjdCh7J2EnOiAwLCAnYic6IDF9KSwgeydhJzogMCwgJ2InOiAxfSkgLy8gdHJ1ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xuaW1wb3J0IGlkZW50aWNhbCBmcm9tICcuL2lkZW50aWNhbCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcbmltcG9ydCBub3QgZnJvbSAnLi9ub3QnXG5pbXBvcnQgb3IgZnJvbSAnLi9vcidcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL29iamVjdC9pcydcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vYXJyYXkvaXMnXG5pbXBvcnQgaXNCb29sZWFuIGZyb20gJy4vYm9vbGVhbi9pcydcbmltcG9ydCBpc051bWJlciBmcm9tICcuL251bWJlci9pcydcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuL3N0cmluZy9pcydcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi9kYXRlL2lzJ1xuaW1wb3J0IGVxdWFsc0FycmF5IGZyb20gJy4vYXJyYXkvZXF1YWxzJ1xuaW1wb3J0IGVxdWFsc09iamVjdCBmcm9tICcuL29iamVjdC9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFscyAoeCwgeSkge1xuICBpZiAoaWRlbnRpY2FsKHgsIHkpKSByZXR1cm4gdHJ1ZVxuXG4gIGlmICh0eXBlKHgpICE9PSB0eXBlKHkpKSByZXR1cm4gZmFsc2VcblxuICBpZiAob3Iobm90KGV4aXN0cyh4KSksIG5vdChleGlzdHMoeSkpKSkgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKHguY29uc3RydWN0b3IgIT09IHkuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZVxuXG4gIGlmIChpc1N0cmluZyh4KSB8fCBpc0Jvb2xlYW4oeCkgfHwgaXNOdW1iZXIoeCkgfHwgaXNEYXRlKHgpKSB7XG4gICAgcmV0dXJuIGlkZW50aWNhbCh4LnZhbHVlT2YoKSwgeS52YWx1ZU9mKCkpXG4gIH1cbiAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzQXJyYXkoeCwgeSlcbiAgfSBlbHNlIGlmIChpc09iamVjdCh4KSkge1xuICAgIHJldHVybiBlcXVhbHNPYmplY3QoeCwgeSlcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBleGlzdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhpc3RzICh4KSB7XG4gIHJldHVybiAhKHggPT0gbnVsbClcbn07XG4iLCIvKipcbiAqIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlbVxuICpcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBpdGVtXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiByZWNlaXZlcyA0IHZhbHVlczogdGhlIGFjY3VtdWxhdG9yLCB0aGUgaXRlbSwgdGhlIGluZGV4LCBhbmQgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0geyp9IGluaXQgLSB0aGUgdGhlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBhIHRoZSBhcnJheSBsaWtlIGl0ZW0gdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcmV0dXJuIHsqfSBUaGUgYWNjdW11bGF0ZWQgdmFsdWVcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGFycmF5Rm9sZCBmcm9tICcuL2FycmF5L2ZvbGQnXG5pbXBvcnQgb2JqZWN0Rm9sZCBmcm9tICcuL29iamVjdC9mb2xkJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBjb25zdCB0eXBlTWFwID0ge1xuICAgICdPYmplY3QnOiBvYmplY3RGb2xkLFxuICAgICdBcnJheSc6IGFycmF5Rm9sZFxuICB9XG4gIHJldHVybiB0eXBlTWFwW3R5cGUoYSldKGNiLCBpbml0LCBhKVxufSlcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gaWRlbnRpY2FsXG4gKiBAZGVzY3JpcHRpb24gY2hlY2tzIGZvciBpZGVudGludGljYWwgaXRlbXNcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgaXNOYW4gZnJvbSAnLi9udW1iZXIvaXNOYW4nXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlkZW50aWNhbCAoeCwgeSkge1xuICBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSB7XG4gICAgcmV0dXJuIDEgLyB4ID09PSAxIC8geVxuICB9XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gISEoaXNOYW4oeCkgJiYgaXNOYW4oeSkpXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gaXNcbiAqIEBkZXNjcmlwdGlvbiBWZXJpZmllcyB0aGUgdHlwZSBvZiB0aGUgcHJvdmlkZWQgYXJndW1lbnRcbiAqXG4gKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlzIChDdG9yLCB2YWwpIHtcbiAgcmV0dXJuIHR5cGUodmFsKSA9PT0gQ3RvclxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuY29uc3QgaXNGdW5jdGlvbiA9IGlzKCdGdW5jdGlvbicpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzSXRlciAoaXRlcikge1xuICByZXR1cm4gaXNGdW5jdGlvbihpdGVyW1N5bWJvbC5pdGVyYXRvcl0pXG59XG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBJdGVyYXRvciBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4zXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYXRvcn0gYVxuICogQHJldHVybiB7SXRlcmF0b3J9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2FsbGJhY2ssIGl0ZXJhdG9yKSB7XG4gIGxldCByID0gW11cbiAgZm9yIChsZXQgbmV4dFZhbHVlID0gaXRlcmF0b3IubmV4dCgpOyBuZXh0VmFsdWUuZG9uZSAhPT0gdHJ1ZTsgbmV4dFZhbHVlID0gaXRlcmF0b3IubmV4dCgpKSB7XG4gICAgci5wdXNoKGNhbGxiYWNrKGl0ZXJhdG9yLnZhbHVlKCkpKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYW4gaXRlcmFibGUgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvbiBtYXBcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiB3aGljaCBtYXBzIG92ZXIgYW4gaXRlcmFibGUuXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBiIC0+IGJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGFycmF5TWFwIGZyb20gJy4vYXJyYXkvbWFwJ1xuaW1wb3J0IG9iamVjdE1hcCBmcm9tICcuL29iamVjdC9tYXAnXG5pbXBvcnQgbWFwTWFwIGZyb20gJy4vbWFwL21hcCdcbmltcG9ydCBzdHJpbmdNYXAgZnJvbSAnLi9zdHJpbmcvbWFwJ1xuaW1wb3J0IGl0ZXJhdG9yTWFwIGZyb20gJy4vaXRlcmF0b3IvbWFwJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuaW1wb3J0IGlzSXRlcmF0b3IgZnJvbSAnLi9pdGVyYXRvci9pcydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBzd2l0Y2ggKHR5cGUoYSkpIHtcbiAgICBjYXNlICdGdW5jdGlvbic6XG4gICAgICByZXR1cm4gY3VycnkoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2IuY2FsbCh0aGlzLCBhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpXG4gICAgICB9KVxuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICByZXR1cm4gb2JqZWN0TWFwKGNiLCBhKVxuICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICByZXR1cm4gc3RyaW5nTWFwKGNiLCBhKVxuICAgIGNhc2UgJ01hcCc6XG4gICAgICByZXR1cm4gbWFwTWFwKGNiLCBhKVxuICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgIHJldHVybiBhcnJheU1hcChjYiwgYSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlzSXRlcmF0b3IoYSlcbiAgICAgICAgPyBpdGVyYXRvck1hcChjYiwgYSlcbiAgICAgICAgOiBhcnJheU1hcChjYiwgYSlcbiAgfVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgTWFwIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge01hcH0gYVxuICogQHJldHVybiB7TWFwfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4uL2VtcHR5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGNvbnN0IHIgPSBlbXB0eShhKVxuICBhLmZvckVhY2goKHYsIGssIG1hcCkgPT4ge1xuICAgIHIuc2V0KGssIGNiKHYsIGssIG1hcCkpXG4gIH0pXG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXJnZXN0IG9mIHRoZSAyIGFyZ3VtZW50cyBwcm92aWRlZFxuICpcbiAqIEBmdW5jdGlvbiBtYXhcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHsqfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1heCAoYSwgYikge1xuICByZXR1cm4gYiA+IGEgPyBiIDogYVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgc21hbGxlc3Qgb2YgdGhlIDIgYXJndW1lbnRzIHByb3ZpZGVkXG4gKlxuICogQGZ1bmN0aW9uIG1pblxuICogQGRlc2MgUmV0dXJucyB0aGUgc21hbGxlc3Qgb2YgdGhlIDIgYXJndW1lbnRzIHByb3ZpZGVkXG4gKiBAc2luY2UgdjEuMC40XG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybiB7Kn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtaW4gKGEsIGIpIHtcbiAgcmV0dXJuIGIgPCBhID8gYiA6IGFcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBub3RcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG5vdCAoeCkge1xuICByZXR1cm4gIXhcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ051bWJlcicpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBpc05hTlxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiBudW1iZXIgaXMgTkFOXG5cbiAqL1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXMnXG5pbXBvcnQgYW5kIGZyb20gJy4uL2FuZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOYW4gKHgpIHtcbiAgcmV0dXJuIGFuZChpc051bWJlcih4KSwgaXNOYU4oeCkpXG59O1xuIiwiLyoqXG5cbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4uL2V4aXN0cydcbmltcG9ydCBub3QgZnJvbSAnLi4vbm90J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KCh4LCB5KSA9PiB7XG4gIGZvciAobGV0IGtleVggaW4geCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3BcbiAgICBpZiAobm90KGVxdWFscyh4W2tleVhdLCB5W2tleVhdKSkpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZm9yIChsZXQga2V5WSBpbiB5KSB7XG4gICAgaWYgKG5vdChleGlzdHMoeFtrZXlZXSkpICYmIGV4aXN0cyh5W2tleVldKSkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBwcml2YXRlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBvKSB7XG4gIGNvbnN0IGsgPSBrZXlzKG8pXG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGsubGVuZ3RoXG4gIGxldCByID0gT2JqZWN0KGluaXQpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciA9IGNiKHIsIG9ba1tpXV0sIGtbaV0sIG8pXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcblxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdPYmplY3QnKVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBvd24ga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBbYl1cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQHJldHVybiB7QXJyYXl9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGtleXMgKGEpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKE9iamVjdChhKSlcbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBvYmplY3QgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vZW1wdHknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgayA9IGtleXMoYSlcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltrW2ldXSA9IGNiKGFba1tpXV0sIGtbaV0sIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBvclxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBvbmUgb3IgdGhlIG90aGVyIGlzIHRydWVcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9yICh4LCB5KSB7XG4gIHJldHVybiB4IHx8IHlcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlbSwgc3RhcnRpbmcgZnJvbSB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgaXRlcmF0b3JcbiAqIFRoZSBpbml0aWFsIHZhbHVlIGlzIHRha2VuIGZyb20gdGhlIGl0ZXJhdG9yLlxuICogUmVkdWNlIHdvcmtzIG9ubHkgb24gQXJyYXlzIGFuZCByZXR1cm5zIGEgdmFsdWVvZiB0aGUgdHlwZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb24gcmVkdWNlXG4gKiBAZGVzYyBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgbGlrZSBvYmplY3QgYW5kIGNhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZW0sIHN0YXJ0aW5nIGZyb20gdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGl0ZXJhdG9yXG4gKiBAc2luY2UgdjEuMC40XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiAtIHJlY2VpdmVzIDQgdmFsdWVzOiB0aGUgYWNjdW11bGF0b3IsIHRoZSBpdGVtLCB0aGUgaW5kZXgsIGFuZCB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBUaGUgaXRlcmF0b3IgdG8gYXBwbHkgdGhlIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHsqfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgZm9sZCBmcm9tICcuL2FycmF5L2ZvbGQnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHJlZHVjZSAoY2IsIGEpIHtcbiAgY29uc3QgYXJyID0gYS5zbGljZSgpXG4gIGNvbnN0IGluaXQgPSBhcnIuc2hpZnQoKVxuICByZXR1cm4gZm9sZChjYiwgaW5pdCwgYXJyKVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBzdHJpbmdDb25jYXRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcbiAgcmV0dXJuIFN0cmluZyhhKSArIFN0cmluZyhiKVxufVxuIiwiLyoqXG5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnU3RyaW5nJylcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgc3RyaW5nIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9ICcnXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciArPSBjYihhLmNoYXJBdChpKSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHR5cGVcbiAqL1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkxKGZ1bmN0aW9uIHR5cGUgKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KS5zbGljZSg4LCAtMSlcbn0pXG4iLCIvLyBpbXBvcnQgeyBtaW4sIG1heCwgbWFwLCBmb2xkLCBjdXJyeSB9IGZyb20gJ2Z1bi5qcydcbmltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcbmltcG9ydCBmb2xkIGZyb20gJ2Z1bi5qcy9zcmMvZm9sZCdcbmltcG9ydCBtYXggZnJvbSAnZnVuLmpzL3NyYy9tYXgnXG5pbXBvcnQgbWluIGZyb20gJ2Z1bi5qcy9zcmMvbWluJ1xuaW1wb3J0IHJlZHVjZSBmcm9tICdmdW4uanMvc3JjL3JlZHVjZSdcbmltcG9ydCBlcXVhbHMgZnJvbSAnZnVuLmpzL3NyYy9lcXVhbHMnXG5pbXBvcnQgbm90IGZyb20gJ2Z1bi5qcy9zcmMvbm90J1xuaW1wb3J0IGNvbmNhdCBmcm9tICcuL3V0aWwvY29uY2F0J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4vdXRpbC9lbXB0eSdcbmltcG9ydCBkb3QgZnJvbSAnLi91dGlsL2RvdCdcbmltcG9ydCBpZGVudGl0eSBmcm9tICcuL3V0aWwvaWRlbnRpdHknXG5pbXBvcnQgdHJhbnNwb3NlIGZyb20gJy4vdXRpbC90cmFuc3Bvc2UnXG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSAnLi91dGlsL2dlbmVyYXRlJ1xuaW1wb3J0IHNvbHZlIGZyb20gJy4vdXRpbC9zb2x2ZSdcblxuLyoqXG4gKiBAY2xhc3MgTWF0cml4XG4gKiBAY2xhc3NkZXNjIE1hdHJpeCBhcHBsaWNhdGl2ZSBwcm92aWRpbmcgc3RhbmRhcmQgbWF0cml4IG9wZXJhdGlvbnNcbiAqIEBzdW1tYXJ5IFRoZSBNYXRyaXggY2xhc3Mgc2hvdWxkIG5vdCBiZSBpbnN0YW50aWF0ZWQgd2l0aCB0aGUgbmV3IGtleXdvcmQuIEluc3RlYWQgdXNlIHRoZSBNYXRyaXgub2Ygc3ludGF4IHRvIGNyZWF0ZSBhIG5ldyBNYXRyaXguIFVuZm9ydHVuYXRseSBqc2RvY3MgZG9lcyBub3QgYWxsb3cgZm9yIHRoZSBjb25zdHJ1Y3RvciB0byBiZSBoaWRkZW4uXG4gKiBAaGlkZWNvbnRydWN0b3JcbiAqIEBzZWUgTWF0cml4Lm9mXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKlxuICovXG5sZXQgTWF0cml4ID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl9fdmFsdWUgPSB2YWxcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4Lm9mXG4gKiBAZGVzYyBDcmVhdGVzIGEgTWF0cml4IG9iamVjdCBhbmQgZmxhdHRlbnMgdGhlIE1hdHJpeFxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gdmFsIC0gQW4gYXJyYXkgb2YgYXJyYXlzXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICpcbiAqL1xuTWF0cml4Lm9mID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgTWF0cml4KSByZXR1cm4gdmFsXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICByZXR1cm4gbmV3IE1hdHJpeCh2YWwpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgLSBSZXR1cm5zIHRoZSBzdHJpbmcgJ01hdHJpeCcgZm9yIGFsbCBNYXRyaXggb2JqZWN0c1xuICogQHR5cGUge1N0cmluZ31cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0udHlwZSA9PT0gJ01hdHJpeCdcbiAqL1xuTWF0cml4LnByb3RvdHlwZS50eXBlID0gJ01hdHJpeCdcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAcHJvcGVydHkge051bWJlcn0gcHJlY2lzaW9uIC0gRmxvYXRpbmcgcG9pbnQgcHJlY2lzaW9uIGlzIHNldCB0byA0IGJ5IGRlZmF1bHRcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKiBtLnByZWNpc2lvbiA9PT0gNFxuICovXG5NYXRyaXgucHJvdG90eXBlLnByZWNpc2lvbiA9IDRcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3NldFByZWNpc2lvblxuICogQGRlc2MgVGhlIHByZWNpc2lvbiBpcyB1c2VkIGluIGZsb2F0aW5nIHBvaW50IGNhbGN1bGF0aW9ucyBmb3IgdGhlIGRvdCBwcm9kdWN0XG4gKiBAcGFyYW0ge051bWJlcn0gW3ByZWNpc2lvbj00XSAtIFNldCB0aGUgbnVtYmVyIG9mIGRlY2ltYWxzIGZvciByb3VuZGluZ1xuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICogbS5zZXRQcmVjaXNpb24oMTApXG4gKiBtLnByZWNpc2lvbiA9PT0gMTBcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zZXRQcmVjaXNpb24gPSBmdW5jdGlvbiAocHJlY2lzaW9uKSB7XG4gIHRoaXMucHJlY2lzaW9uID0gcHJlY2lzaW9uXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNpc1N5bW1ldHJpY1xuICogQGRlc2MgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIE1hdHJpeCBpcyBzeW1tZXRyaWMgYnkgdGVzdGluZyBmb3IgZXF1YWxpdHkgb2YgdGhlIHRyYW5zcG9zZWQgTWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIHRydWUgPT09IEEuaXNTeW1tZXRyaWMoKVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pc1N5bW1ldHJpYyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYSA9IHRoaXMuX192YWx1ZVxuICBjb25zdCBiID0gTWF0cml4LnRyYW5zcG9zZSh0aGlzKS5fX3ZhbHVlXG4gIHJldHVybiBlcXVhbHMoYSwgYilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2lzU3F1YXJlXG4gKiBAZGVzYyBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgTWF0cml4IG9iamVjdCBpcyBzcXVhcmUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogdHJ1ZSA9PT0gQS5pc1NxdWFyZSgpXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmlzU3F1YXJlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZXF1YWxzKHRoaXMuZ2V0Q29scygpLCB0aGlzLmdldFJvd3MoKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2lzT3J0aG9nb25hbFxuICogQGRlc2MgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIE1hdHJpeCBpcyBvcnRob2dvbmFsIGJ5IHRlc3RpbmcgZm9yIGVxdWFsaXR5IGJldHdlZW4gSWRlbnRpdHkgTWF0cml4IGFuZCB0aGUgZG90IHByb2R1Y3Qgb2YgdGhlIE1hdHJpeCBhbmQgaXRzIHRyYW5zcG9zZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBbWy0wLjMwOTIsIC0wLjk1MTBdLCBbLTAuOTUxMCwgMC4zMDkyXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXguZnJvbUFycmF5KHJlc3VsdClcbiAqIHRydWUgID09PSBBLmlzT3J0aG9nb25hbCgpXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaXNPcnRob2dvbmFsID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBeEF0ID0gdGhpcy5kb3QodGhpcy50cmFuc3Bvc2UoKSlcbiAgY29uc3QgSSA9IHRoaXMuaWRlbnRpdHkoKVxuICByZXR1cm4gZXF1YWxzKEF4QXQsIEkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNnZXRDb2xzXG4gKiBAZGVzYyBOdW1iZXIgaW5kaWNhdGluZyB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIE1hdHJpeFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogQS5nZXRDb2xzKCkgID09PSAyXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmdldENvbHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fdmFsdWVbMF0ubGVuZ3RoXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNlcXVhbHNcbiAqIEBkZXNjIEZ1bmN0aW9uIHJldHVybmluZyBhIGJvb2xlYW4gdGVzdGluZyBmb3IgZXF1YWxpdHkgb2YgdGhlIHZhbHVlcyBvZiBhIE1hdHJpeCBvciBBcnJheVxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IE0gLSBNYXRyaXggb3IgQXJyYXkgdG8gY29tcGFyZSBmb3IgZXF1YWxpdHlcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYSA9IFtbMSwgMV0sIFsxLCAxXV1cbiAqIHZhciBBID0gTWF0cml4Lm9mKGEpXG4gKiB2YXIgQiA9IE1hdHJpeC5vZihhKVxuICogdHJ1ZSAgPT09IEEuZXF1YWxzKEIpXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIGVxdWFscyh0aGlzLl9fdmFsdWUsIE0uX192YWx1ZSB8fCBNKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZ2V0Um93c1xuICogQGRlc2MgTnVtYmVyIGluZGljYXRpbmcgdGhlIG51bWJlciBvZiByb3dzIGluIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0Um93cygpICAvLyAyXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0Um93cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2dldFNoYXBlXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0U2hhcGUoKSAgLy8gWzIsIDJdXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0U2hhcGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbdGhpcy5nZXRSb3dzKCksIHRoaXMuZ2V0Q29scygpXVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjbWFwXG4gKiBAZGVzY3JpcHRpb24gTWFwcyBvdmVyIHRoZSByb3dzIG9mIHRoZSBtYXRyaXggdXNpbmcgYSBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGYgLSBBbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogbS5tYXAoeCA9PiB4Lm1hcCh5ID0+IHkrIDEpKVxuICogLy8gW1syLCAyXSwgWzIsIDJdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gTWF0cml4Lm9mKG1hcChmKSh0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXgubWFwXG4gKiBAZGVzY3JpcHRpb24gQ3VycmllZCBmdW5jdGlvbiB0aGF0IG1hcHMgb3ZlciB0aGUgcm93cyBvZiB0aGUgbWF0cml4IHVzaW5nIGEgbWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIC0gQW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gTWF0cml4IG9yIGFycmF5IHRvIG1hcFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9IE1hdHJpeC5tYXAoeD0gPiB4Lm1hcCh5ID0+IHkrIDEpLCBbWzEsIDFdLCBbMSwgMV1dKVxuICogLy8gW1syLCAyXSwgWzIsIDJdXVxuICpcbiAqL1xuTWF0cml4Lm1hcCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkubWFwKGYpXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZm9sZFxuICogQGRlc2NyaXB0aW9uIFJlZHVjZSB0aGUgbWF0cml4IHJvd3MgdXNpbmcgYSByZWR1Y2UgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGYgLSBBIHJlZHVjZS9mb2xkIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBGbGF0dGVuIE1hdHJpeFxuICogTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pLmZvbGQoKHByZXYsIG5leHQpID0+IHByZXYuY29uY2F0KG5leHQpKVxuICogLy8gWzEsIDEsIDEsIDFdXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZm9sZCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZm9sZChmLCBbXSkodGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmZvbGRcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgZnVuY3Rpb24gdG8gcmVkdWNlIHRoZSBtYXRyaXggcm93cyB1c2luZyBhIHJlZHVjZSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZiAtIEEgcmVkdWNlL2ZvbGQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gVGhlIE1hdHJpeCB0byByZWR1Y2VcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuXG4gKiAvLyBTdW0gb2YgYWxsIG1hdHJpeCB2YWx1ZXNcbiAqIGNvbnN0IHJlZHVjZXIgPSAocHJldiwgbmV4dCkgPT4gTnVtYmVyKHByZXYpICsgbmV4dC5yZWR1Y2UoKGFjYywgeCkgPT4gYWNjICsgeCwgMClcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXVxuICogTWF0cml4LmZvbGQocmVkdWNlciwgQSlcbiAqIC8vIDRcbiAqL1xuTWF0cml4LmZvbGQgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmZvbGQoZilcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNhcFxuICogQGRlc2NyaXB0aW9uIEZ1bmN0aW9uIHRoYXQgYXBwbGllcyBhIGZ1bmN0aW9uIHRvIGEgTWF0cml4XG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIE1hdHJpeCBvciBBcnJheSB0byBhcHBseSBhIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBmID0geCA9PiB4LnJlZHVjZSgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMiwgM10sIFs0LCA1LCA2XSwgWzcsIDgsIDldXSlcbiAqIE1hdHJpeC5vZihmKS5hcChNKVxuICogLy8gW1s2XSwgWzE1XSwgWzI0XVxuICovXG5NYXRyaXgucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5tYXAodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguYXBcbiAqIEBkZXNjcmlwdGlvbiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgYXBwbGllcyBhIGZ1bmN0aW9uIHRvIGEgTWF0cml4XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIC0gRnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgTWF0cml4IGFzIGlucHV0XG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIE1hdHJpeCBvciBBcnJheSB0byBhcHBseSBhIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBmID0geCA9PiB4LnJlZHVjZSgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpXG4gKiBNYXRyaXguYXAoZiwgW1sxLCAyLCAzXSwgWzQsIDUsIDZdLCBbNywgOCwgOV1dKVxuICogLy8gW1s2XSwgWzE1XSwgWzI0XVxuICovXG5NYXRyaXguYXAgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKGYpLmFwKE0pXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQ29uY2F0ZW5hdGVzIDIgTWF0cmljZXMgdXNpbmcgYSBmdW5jdGlvbiBhcyBvcGVyYXRvclxuICogQHBhcmFtIHtNYXRyaXh9IE0gLSBUaGUgcmlnaHQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvbi9wcm9kdWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZj1jb25jYXRdIC0gQSBjdXJyaWVkIGZ1bmN0aW9uIGFjY2VwdGluZyAyIG1hdHJpY2VzIGFzIGlucHV0XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1swLCAxLCAxXSwgWzIsIDMsIDRdXVxuICogY29uc3QgYiA9IFtbMiwgMiwgMl0sIFszLCAzLCAzXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqIGNvbnN0IE0gPSBBLmNvbmNhdChCKVxuICogLy8gW1swLCAxLCAxLCAyLCAyLCAyXSwgWzIsIDMsIDQsIDMsIDMsIDNdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAoTSwgZiA9IGNvbmNhdCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChmKE0pKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQSBjdXJyaWVkIGZ1bmN0aW9uIHRoYXQgY29uY2F0ZW5hdGVzIDIgTWF0cmljZXMgdXNpbmcgYSBmdW5jdGlvbiBhcyBvcGVyYXRvclxuICogQHBhcmFtIHtNYXRyaXh9IEEgLSBMZWZ0IHNpZGUgTWF0cml4IG9mIHRoZSBjb25jYXRlbmF0aW9uXG4gKiBAcGFyYW0ge01hdHJpeH0gQiAtIFJpZ2h0IHNpZGUgTWF0cml4IG9mIHRoZSBjb25jYXRlbmF0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZj1jb25jYXRdIC0gQSBjdXJyaWVkIGZ1bmN0aW9uIGFjY2VwdGluZyAyIG1hdHJpY2VzIGFzIGlucHV0XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1swLCAxLCAxXSwgWzIsIDMsIDRdXVxuICogY29uc3QgYiA9IFtbMiwgMiwgMl0sIFszLCAzLCAzXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqIGNvbnN0IE0gPSBNYXRyaXguY29uY2F0KEEsIEIpXG4gKiAvLyBbWzAsIDEsIDEsIDIsIDIsIDJdLCBbMiwgMywgNCwgMywgMywgM11dXG4gKlxuICovXG5NYXRyaXguY29uY2F0ID0gY3VycnkoZnVuY3Rpb24gKEEsIEIsIGYgPSBjb25jYXQpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5tYXAoZihCKSlcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNlbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYW4gZW1wdHkgTWF0cml4IGZyb20gYW4gZXhpc3RpbmcgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChlbXB0eSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmVtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhbiBlbXB0eSBNYXRyaXggZnJvbSBhbiBleGlzdGluZyBNYXRyaXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBbcm93cz0wXSAtIFJvd3MgdG8gZ2VuZXJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbY29scz0wXSAtIENvbHMgdG8gZ2VuZXJhdGVcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5lbXB0eSA9IGN1cnJ5KGZ1bmN0aW9uIChyb3dzID0gMCwgY29scyA9IDApIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpIC8vIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4gIHJldHVybiBNYXRyaXgub2YobSkubWFwKGVtcHR5KVxufSlcblxuLy8gIyMjIyAjIyMjICMjIyMgLy9cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2lkZW50aXR5XG4gKiBAZGVzYyBSZXR1cm5zIGFuIGlkZW50aXR5IG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYSA9IFtbMSwgMiwgM10sIFs0LCA1LCA2XV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEFpZGVudGl0eSA9IEEuaWRlbnRpdHkoKVxuICogLy8gW1sxLCAwLCAwXSwgWzAsIDEsIDBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pZGVudGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihpZGVudGl0eSkuYXAodGhpcylcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmlkZW50aXR5XG4gKiBAZGVzYyBjdXJyaWVkIGZ1Y250aW9uIHRoYXQgcmV0dXJucyBhbiBpZGVudGl0eSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXguaWRlbnRpdHkoMywgMilcbiAqIC8vIFtbMSwgMCwgMF0sIFswLCAxLCAwXV1cbiAqXG4gKi9cbk1hdHJpeC5pZGVudGl0eSA9IGN1cnJ5KGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKSAvLyBBcnJheS5hcHBseShudWxsLCBBcnJheShyb3dzKSkubWFwKHggPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoY29scykpKVxuICByZXR1cm4gTWF0cml4Lm9mKGlkZW50aXR5KS5hcChtKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2NvbWJpbmVcbiAqIEBkZXNjIENvbmNhdGVuYXRlcyAyIE1hdHJpY2VzIHRvZ2V0aGVyLlxuICogQHNlZSBNYXRyaXguY29uY2F0XG4gKiBAcGFyYW0ge01hdHJpeCB9IE0gLSBSaWdodCBzaWRlIE1hdHJpeCBvZiB0aGUgY29tYmluZSBvcGVyYXRpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY29tYmluZSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuY29uY2F0KE1hdHJpeC5vZihNKSwgY29uY2F0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguY29tYmluZVxuICogQGRlc2MgQ3VycmllZCBmdWNudGlvbiB0aGF0IGNvbWJpbmVzIDIgTWF0cmljZXNcbiAqIEBzZWUgTWF0cml4LmNvbmNhdFxuICogQHBhcmFtIHtNYXRyaXh9IEEgLSBMZWZ0IHNpZGUgb2YgdGhlIGNvbWJpbmUgb3BlcmF0b3JcbiAqIEBwYXJhbSB7TWF0cml4fSBBIC0gUmlnaHQgc2lkZSBvZiB0aGUgY29tYmluZSBvcGVyYXRvclxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LmNvbWJpbmUgPSBjdXJyeShmdW5jdGlvbiAoQSwgQikge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLmNvbmNhdChNYXRyaXgub2YoQiksIGNvbmNhdClcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNkb3RcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuIDIgbWF0cmljZXNcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gUmlnaHQgc2lkZSBvZiB0aGUgZG90IHByb2R1Y3RcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIENyZWF0ZSBtYXRyaXhcbiAqIGNvbnN0IG0gPSBNYXRyaXgub2YoW1sxLCAyXSwgWzMsIDRdXSlcbiAqXG4gKiAvLyBHZW5lcmF0ZSBpZGVudGl0eSBtYXRyaXhcbiAqIGNvbnN0IEkgID0gbS5pZGVudGl0eSgpIC8vIFtbMSwgMF0sIFswLCAxXV1cbiAqXG4gKiBpZihtLmRvdChJKS5lcXVhbHMobSkpIHtcbiAqICAgIGNvbnNvbGUubG9nKCdEb3QgcHJvZHVjdCB3aXRoIGlkZW50aXR5IG1hdHJpeCByZXR1cm5zIHRoZSBzYW1lIG1hdHJpeCcpXG4gKiB9XG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuY29uY2F0KE1hdHJpeC5vZihNKSwgZG90KHRoaXMucHJlY2lzaW9uKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmRvdFxuICogQGRlc2NyaXB0aW9uIEN1cnJpZWQgZnVjbnRpb24gdGhhdCByZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBvZiAyIG1hdHJpY2VzXG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gQSAtIExlZnQgc2lkZSBvZiB0aGUgZG90IHByb2R1Y3RcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBCIC0gUmlnaHQgc2lkZSBvZiB0aGUgZG90IHByb2R1Y3RcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICogY29uc3QgYSA9IFtbMSwgMiwgM10sIFs0LCA1LCA2XV1cbiAqIGNvbnN0IGIgPSBbWzcsIDhdLCBbOSwgMTBdLCBbMTEsIDEyXV1cbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKGEpXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKGIpXG4gKlxuICogTWF0cml4LmRvdChBLCBCKSAvLyBbWzU4LCA2NF0sIFsxMzksIDE1NF1dXG4gKlxuICovXG5NYXRyaXguZG90ID0gY3VycnkoZnVuY3Rpb24gKEEsIEIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5kb3QoTWF0cml4Lm9mKEIpKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2ZpbGxcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggdGhlIHByb3ZpZGVkIG1hcCBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZiAtIEZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzIGEgdmFsdWVcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLDIsM10sIFszLDIsMV0sIFs0LDUsNl1dKS5maWxsKHggPT4gNDIpXG4gKiAvLyBbWzQyLDQyLDQyXSwgWzQyLDQyLDQyXSwgWzQyLDQyLDQyXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubWFwKG1hcCh4ID0+IGYoeCkpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjemVyb3NcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggemVyb3NcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwyLDNdLCBbMywyLDFdLCBbNCw1LDZdXSkuemVyb3MoKVxuICogLy8gW1swLDAsMF0sIFswLDAsMF0sIFswLDAsMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnplcm9zID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoeCA9PiAwKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXguemVyb3NcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggemVyb3NcbiAqIEBwYXJhbSB7TnVtYmVyfSByb3dzIC0gRGVmaW5lcyB0aGUgcm93cyBvZiB0aGUgbWF0cml4XG4gKiBAcGFyYW0ge051bWJlcn0gY29scyAtIERlZmluZXMgdGhlIGNvbHVtbnMgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC56ZXJvcygzLCAzKVxuICogLy8gW1swLDAsMF0sIFswLDAsMF0sIFswLDAsMF1dXG4gKlxuICovXG5NYXRyaXguemVyb3MgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKHggPT4gMClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjb25lc1xuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCBvbmVzXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwyLDNdLCBbMywyLDFdLCBbNCw1LDZdXSkub25lcygpXG4gKiAvLyBbWzEsMSwxXSwgWzEsMSwxXSwgWzEsMSwxXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUub25lcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKHggPT4gMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4Lm9uZXNcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggb25lc1xuICogQHBhcmFtIHtOdW1iZXJ9IHJvd3MgLSBEZWZpbmVzIHRoZSByb3dzIG9mIHRoZSBtYXRyaXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2xzIC0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9uZXMoMSwgMSlcbiAqIC8vIFtbMSwxLDFdLCBbMSwxLDFdLCBbMSwxLDFdXVxuICpcbiAqL1xuTWF0cml4Lm9uZXMgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKHggPT4gMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3JhbmRvbVxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCByYW5kb20gdmFsdWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZiA9IGUgPT4gTWF0aC5yYW5kb20oKSAqIDIgLSAxXSAtIEZ1bmN0aW9uIHByb2R1Y2luZyByYW5kb20gdmFsdWVzLCBjYW4gYmUgYW55IHR5cGUgb2YgdmFsdWVcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24gKGYgPSBlID0+IE1hdGgucmFuZG9tKCkgKiAyIC0gMSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoZilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LnJhbmRvbVxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCByYW5kb20gbnVtYmVyc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZiAtIEZ1bmN0aW9uIHdoaWNoIHJldHVybnMgcmFuZG9tIHZhbHVlcy4gRGVmYXVsdCByYW5kb20gdmFsdWVzIGFyZSBiZXR3ZWVuIC0xIGFuZCAxXG4gKiBAcGFyYW0ge051bWJlcn0gcm93cyAtIERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IGNvbHMgLSBEZWZpbmVzIHRoZSBjb2x1bW5zIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5yYW5kb20gPSBmdW5jdGlvbiAoZiA9IGUgPT4gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSksIHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpXG4gIHJldHVybiBNYXRyaXgub2YobSkuZmlsbChmKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjdG9BcnJheVxuICogQGRlc2MgUmV0dXJucyB0aGUgYXJyYXkgZnJvbSB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZS5tYXAocm93ID0+IHJvdy5tYXAoY29sID0+IGNvbCkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNjbG9uZVxuICogQGRlc2MgUmV0dXJucyBhIGNsb25lIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IE0gPSBNYXRyaXguZnJvbUFycmF5KHRoaXMuX192YWx1ZSlcbiAgTS5zZXRQcmVjaXNpb24odGhpcy5wcmVjaXNpb24pXG4gIHJldHVybiBNXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNmcm9tQXJyYXlcbiAqIEBkZXNjIFJldHVybnMgYSBNYXRyaXggZnJvbSBhbiBhcnJheVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5NYXRyaXguZnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gTWF0cml4Lm9mKG1hcChyb3cgPT4gbWFwKGNvbCA9PiBjb2wpKHJvdykpKGFycikpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCN0cmFuc3Bvc2VcbiAqIEBkZXNjIFJldHVybnMgYSB0cmFuc3Bvc2VkIE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbLTEsIDJdLCBbMywgNF0sIFstOCwgMl0pXG4gKiBjb25zdCBiID0gQS50cmFuc3Bvc2UoKS50b0FycmF5KClcbiAqIC8vIHJldHVybnMgW1stMSwgMywtOF0sIFsyLCA0LCAyXV1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS50cmFuc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZm9sZCh0cmFuc3Bvc2UsIFtdLCB0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgudHJhbnNwb3NlXG4gKiBAZGVzYyBSZXR1cm5zIGEgdHJhbnNwb3NlZCBNYXRyaXhcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gQSBNYXRyaXggb3IgYSBtYXRyaXggYXJyYXlcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbLTEsIDJdLCBbMywgNF0sIFstOCwgMl1cbiAqIGNvbnN0IGIgPSBNYXRyaXgudHJhbnNwb3NlKGEpLnRvQXJyYXkoKVxuICogLy8gcmV0dXJucyBbWy0xLCAzLC04XSwgWzIsIDQsIDJdXVxuICovXG5NYXRyaXgudHJhbnNwb3NlID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS50cmFuc3Bvc2UoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjYWRkXG4gKiBAZGVzYyBBZGRzIGEgbnVtYmVyIG9yIGEgTWF0cml4IHRvIHRoaXNcbiAqIEBwYXJhbSB7TWF0cml4fE51bWJlcn0gTSAtIEFkZCBhIE1hdHJpeCBvciBhIG51bWJlclxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEuYWRkKDEpIC8vIFtbNiwgNV1dXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKFtbNSwgNV1dKVxuICogQi5hZGQoQikgLy8gW1sxMCwgMTBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IGFkZCcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcCgocm93LCBpZHgpID0+IG1hcCgodmFsLCBqZHgpID0+IHZhbCArIE0uX192YWx1ZVtpZHhdW2pkeF0pKHJvdykpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKG1hcCh4ID0+IHggKyBNKSlcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjc3VidHJhY3RcbiAqIEBkZXNjIFN1YnRyYWN0cyBhIG51bWJlciBvciBhIE1hdHJpeCBmcm9tIHRoaXNcbiAqIEBwYXJhbSB7TWF0cml4fE51bWJlcn0gTSAtIFN1YnRyYWN0IGEgTWF0cml4IG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5zdWJ0cmFjdCgxKSAvLyBbWzQsIDJdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIuc3VidHJhY3QoQikgLy8gW1swLCAwXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IHN1YnRyYWN0JylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKChyb3csIGlkeCkgPT4gbWFwKCh2YWwsIGpkeCkgPT4gdmFsIC0gTS5fX3ZhbHVlW2lkeF1bamR4XSkocm93KSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tYXAobWFwKHggPT4geCAtIE0pKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNtdWx0aXBseVxuICogQGRlc2MgTXV0bGlwbHkgYSBzY2FsYXIgb3IgYSBtYXRyaXggd2l0aCBhIG1hdHJpeC4gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBtdWx0aXBsaWNhdGlvbiBpcyBub3QgcG9zc2libGUuXG4gKiBAcGFyYW0ge01hdHJpeHxOdW1iZXJ9IE0gLSBBIE1hdHJpeCBNIG9yIGEgTnVtYmVyIHRvIG11bHRpcGx5IGEgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5tdWx0aXBseSgyKSAvLyBbWzEwLCA4XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLm11bHRpcGx5KEIpIC8vIFtbMjUsIDI1XV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICBjb25zb2xlLmxvZygnVXNlIHN0YXRpYyBtZXRob2QgXFwnZG90XFwnIHRvIGRvIG1hdHJpeCBtdWx0aXBsaWNhdGlvbicpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IGNyZWF0ZSBoYWRhbWFyZCBwcm9kdWN0JylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKChyb3csIGlkeCkgPT4gbWFwKChjb2wsIGpkeCkgPT4gY29sICogTS5fX3ZhbHVlW2lkeF1bamR4XSkocm93KSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tYXAobWFwKHggPT4geCAqIE0pKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNhZGRpdGl2ZWludmVyc2VcbiAqIEBkZXNjIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbWF0cml4IG9idGFpbmVkIGJ5IGNoYW5naW5nIHRoZSBzaWduIG9mIGV2ZXJ5IG1hdHJpeCBlbGVtZW50LiBUaGUgYWRkaXRpdmUgaW52ZXJzZSBvZiBtYXRyaXggQSBpcyB3cml0dGVuIOKAk0EuXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwtNV0sIFstNCwgNF1dKVxuICogY29uc3QgbWludXNBID0gQS5hZGRpdGl2ZWludmVyc2UoKVxuICogLy8gW1stNSwgNV0sIFs0LCAtNF1dXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYWRkaXRpdmVpbnZlcnNlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm11bHRpcGx5KC0xKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjaGFkYW1hcmRcbiAqIEBkZXNjIEhhZGFtYXIgaXMgYW4gYWxpYXMgb2YgdGhlIG11bHRpcGx5IGZ1bmN0aW9uXG4gKiBAc2VlIE1hdHJpeC5tdWx0aXBseVxuICogQHBhcmFtIHtNYXRyaXh8TnVtYmVyfSBNIC0gQSBNYXRyaXggTSBvciBhIE51bWJlciB0byBtdWx0aXBseSBhIE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBzZWUgTWF0cml4LmhhZGFtYXJkXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLmhhZGFtYXJkKDIpIC8vIFtbMTAsIDhdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIuaGFkYW1hcmQoQikgLy8gW1syNSwgMjVdXVxuXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaGFkYW1hcmQgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm11bHRpcGx5KE0pXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNsdVxuICogQGRlc2MgQ2FsY3VsYXRlcyBMVSBkZWNvbXBvc2l0aW9uIG9mIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXhbXX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gW1szLCAtNywgLTIsIDJdLCBbLTMsIDUsIDEsIDBdLCBbNiwgLTQsIDAsIC01XSwgWy05LCA1LCAtNSwgMTJdXVxuICogY29uc3QgQSA9IE1hdHJpeC5mcm9tQXJyYXkocmVzdWx0KVxuICogY29uc3QgbHUgPSBBLmx1KClcbiAqIC8vIEwuX192YWx1ZSA9IFsgWyAxLCAwLCAwLCAwIF0sIFsgLTEsIDEsIDAsIDAgXSwgWyAyLCAtNSwgMSwgMCBdLCBbIC0zLCA4LCAzLCAxIF0gXVxuICogLy8gVS5fX3ZhbHVlID0gIFsgWyAzLCAtNywgLTIsIDIgXSwgWyAwLCAtMiwgLTEsIDIgXSwgWyAwLCAwLCAtMSwgMSBdLCBbIDAsIDAsIDAsIC0xIF0gXVxuICogTWF0cml4LmRvdChsdVswXSwgbHVbMV0pIC8vIHJldHVybnMgY2xvbmUgb2YgQVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5sdSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbiA9IHRoaXMuZ2V0Um93cygpXG4gIGNvbnN0IHRvbCA9IDFlLTZcbiAgY29uc3QgQSA9IHRoaXMuY2xvbmUoKVxuICBjb25zdCBMID0gdGhpcy56ZXJvcygpXG4gIGNvbnN0IFUgPSB0aGlzLnplcm9zKClcblxuICBmb3IgKGxldCBrID0gMDsgayA8IG47ICsraykge1xuICAgIGlmIChNYXRoLmFicyhBLl9fdmFsdWVba11ba10pIDwgdG9sKSB0aHJvdyBFcnJvcignQ2Fubm90IHByb2NlZWQgd2l0aG91dCBhIHJvdyBleGNoYW5nZScpXG4gICAgTC5fX3ZhbHVlW2tdW2tdID0gMVxuICAgIGZvciAobGV0IGkgPSBrICsgMTsgaSA8IG47ICsraSkge1xuICAgICAgTC5fX3ZhbHVlW2ldW2tdID0gQS5fX3ZhbHVlW2ldW2tdIC8gQS5fX3ZhbHVlW2tdW2tdXG4gICAgICBmb3IgKGxldCBqID0gayArIDE7IGogPCBuOyArK2opIHtcbiAgICAgICAgQS5fX3ZhbHVlW2ldW2pdID0gQS5fX3ZhbHVlW2ldW2pdIC0gTC5fX3ZhbHVlW2ldW2tdICogQS5fX3ZhbHVlW2tdW2pdXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGwgPSBrOyBsIDwgbjsgKytsKSB7XG4gICAgICBVLl9fdmFsdWVba11bbF0gPSBBLl9fdmFsdWVba11bbF1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtMLCBVXVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjcnJlZlxuICogQGRlc2MgUmV0dXJucyBhIE1hdHJpeCBjb250YWluaW5nIHRoZSByb3cgcmVkdWNlZCBlY2hlbG9uIGZvcm1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBBID0gTWF0cml4Lm9mKFtbLTEsIDFdLCBbLTEsIDBdLCBbMCwgLTFdLCBbLTEsIC0yXV0pXG4gKiBBLnJyZWYoKSAvLyAgWyBbIDEsIDAgXSwgWyAtMCwgMSBdLCBbIDAsIDAgXSwgWyAwLCAwIF0gXVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJyZWYgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBsZWFkID0gMFxuICBjb25zdCByZXN1bHRNYXRyaXggPSB0aGlzLmNsb25lKClcblxuICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuZ2V0Um93cygpOyArK3IpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgPD0gbGVhZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdE1hdHJpeFxuICAgIH1cbiAgICBsZXQgaSA9IHJcbiAgICB3aGlsZSAocmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bbGVhZF0gPT09IDApIHtcbiAgICAgICsraVxuICAgICAgaWYgKHRoaXMuZ2V0Um93cygpID09PSBpKSB7XG4gICAgICAgIGkgPSByXG4gICAgICAgICsrbGVhZFxuICAgICAgICBpZiAodGhpcy5nZXRDb2xzKCkgPT09IGxlYWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0TWF0cml4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdG1wID0gcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1cbiAgICByZXN1bHRNYXRyaXguX192YWx1ZVtpXSA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdXG4gICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl0gPSB0bXBcblxuICAgIGxldCB2YWwgPSByZXN1bHRNYXRyaXguX192YWx1ZVtyXVtsZWFkXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5nZXRDb2xzKCk7ICsraikge1xuICAgICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bal0gLz0gdmFsXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldFJvd3MoKTsgKytpKSB7XG4gICAgICBpZiAoaSA9PT0gcikgY29udGludWVcbiAgICAgIHZhbCA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2xlYWRdXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0Q29scygpOyArK2opIHtcbiAgICAgICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bal0gLT0gdmFsICogcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bal1cbiAgICAgIH1cbiAgICB9XG4gICAgbGVhZCsrXG4gIH1cbiAgcmV0dXJuIHJlc3VsdE1hdHJpeFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjc29sdmVcbiAqIEBkZXNjIFJldHVybnMgdGhlIHNvbHV0aW9uIGZvciBhIHN5c3RlbSBvZiBsaW5lYXIgZXF1YXRpb25zXG4gKiBAcGFyYW0ge0FycmF5fSBiIC0gVGhlIG51bWJlcnMgZm9yIHdoaWNoIHRvIHNvbHZlIHRoZSBzeXN0ZW0gb2YgbGluZWFyIGVxdWF0aW9uc1xuICogQHJldHVybnMge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBTb2x2ZSB4QSA9IGJcbiAqIC8vIDV4ICsgeSAgPSA3XG4gKiAvLyAzeCAtIDR5ID0gMThcbiAqIC8vIFNvbHV0aW9uIGZvciB4IGFuZCB5OlxuICogLy8geCA9IDJcbiAqIC8vIHkgPSAtM1xuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCAxXSwgWzMsIC00XV0pXG4gKiBjb25zdCBzb2x2ZUEgPSBBLnNvbHZlKFs3LCAxOF0pIC8vIFsyLCAtM11cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc29sdmUgPSBmdW5jdGlvbiAoYikge1xuICBjb25zdCBMVSA9IHRoaXMubHUoKVxuICBjb25zdCBMID0gTFVbMF1cbiAgY29uc3QgVSA9IExVWzFdXG4gIGNvbnN0IG4gPSB0aGlzLmdldFJvd3MoKVxuICAvLyBsZXQgcyA9IDBcbiAgLy8gY29uc3QgYyA9IFtdXG4gIC8vIGNvbnN0IHggPSBbXVxuXG4gIHJldHVybiBzb2x2ZShuLCBMLCBVLCBiKVxuXG4gIC8vIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgKytrKSB7XG4gIC8vICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyArK2opIHtcbiAgLy8gICAgIHMgPSBzICsgTC5fX3ZhbHVlW2tdW2pdICogY1tqXVxuICAvLyAgIH1cbiAgLy8gICBjW2tdID0gYltrXSAtIHNcbiAgLy8gICBzID0gMFxuICAvLyB9XG4gIC8vIGZvciAobGV0IGEgPSBuIC0gMTsgYSA+IC0xOyAtLWEpIHtcbiAgLy8gICBsZXQgdCA9IDBcbiAgLy8gICBmb3IgKGxldCBiID0gYSArIDE7IGIgPCBuOyArK2IpIHtcbiAgLy8gICAgIHQgPSB0ICsgVS5fX3ZhbHVlW2FdW2JdICogeFtiXVxuICAvLyAgIH1cbiAgLy8gICB4W2FdID0gKGNbYV0gLSB0KSAvIFUuX192YWx1ZVthXVthXVxuICAvLyB9XG4gIC8vIHJldHVybiB4XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNpbnZlcnNlXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIGEgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsyLCA0XV0pLmludmVyc2UoKVxuICogLy8gWyBbIDIsIC0wLjUgXSwgWyAtMSwgMC41IF0gXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pbnZlcnNlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBID0gdGhpcy5jbG9uZSgpXG4gIGNvbnN0IEkgPSBBLmlkZW50aXR5KClcbiAgY29uc3QgSW52ID0gQS5jb25jYXQoSSkucnJlZigpXG5cbiAgY29uc3QgcmVzdWx0ID0gSW52Ll9fdmFsdWUucmVkdWNlKChyZXN1bHQsIHgsIGlkeCkgPT4ge1xuICAgIGNvbnN0IGhhbGYgPSB4Lmxlbmd0aCAvIDJcbiAgICByZXN1bHQucHVzaCh4LnNsaWNlKGhhbGYsIHgubGVuZ3RoKSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIFtdKVxuICByZXR1cm4gTWF0cml4Lm9mKHJlc3VsdClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3JhbmtcbiAqIEBkZXNjIE51bWJlciBpbmRpY2F0aW5nIHRoZSBtYXhpbXVtIG51bWJlciBvZiBsaW5lYXJseSBpbmRlcGVuZGVudCBjb2x1bW5zLlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5yYW5rID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBycmVmID0gdGhpcy5ycmVmKClcbiAgbGV0IHJlc3VsdCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBycmVmLmdldENvbHMoKTsgKytpKSB7XG4gICAgcmVzdWx0ICs9IHJyZWYuX192YWx1ZVtpXVtpXVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2RpbWVuc2lvblxuICogQGRlc2MgTnVtYmVyIGluZGljYXRpbmcgdGhlIG1heGltdW0gbnVtYmVyIG9mIGxpbmVhcmx5IGluZGVwZW5kZW50IGNvbHVtbnMuXG4gKiBAc2VlIE1hdHJpeC5yYW5rXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5NYXRyaXgucHJvdG90eXBlLmRpbWVuc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmFuaygpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNkaWFnXG4gKiBAZGVzYyBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5kaWFnKClcbiAqIC8vIFsxLCAxLCAxXVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLmRpYWcoKVxuICogLy8gWzAsIDAsIDAsIDAsIDBdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRpYWcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGlkeCkgPT4ge1xuICAgIHJldHVybiBhY2MuY29uY2F0KHhbaWR4XSlcbiAgfSkoW10pKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LmRpYWdcbiAqIEBkZXNjIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IE0gLSBNYXRyaXggZnJvbSB3aGljaCB0byByZXR1cm4gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LmRpYWcoW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIFsyLCA1XVxuICpcbiAqL1xuTWF0cml4LmRpYWcgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmRpYWcoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZGlhZ3Byb2R1Y3RcbiAqIEBkZXNjIFJldHVybnMgdGhlIHByb2R1Y3Qgb2YgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4Lm9uZXMoMywgMykuZGlhZ3Byb2R1Y3QoKVxuICogLy8gMVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLmRpYWdwcm9kdWN0KClcbiAqIC8vIDBcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGlhZ3Byb2R1Y3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGlkeCkgPT4ge1xuICAgIGFjYyAqPSB4W2lkeF1cbiAgICByZXR1cm4gYWNjXG4gIH0pKDEpKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LmRpYWdwcm9kdWN0XG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBwcm9kdWN0IG9mIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIE1hdHJpeCBmcm9tIHdoaWNoIHRvIHJldHVybiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LmRpYWdwcm9kdWN0KFtbMiwgMV0sIFsxLCA1XV0pXG4gKiAvLyAxMFxuICpcbiAqL1xuTWF0cml4LmRpYWdwcm9kdWN0ID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5kaWFncHJvZHVjdCgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNzdW1cbiAqIEBkZXNjIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgdmFsdWVzIGluIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4Lm9uZXMoMywgMykuc3VtKClcbiAqIC8vIDlcbiAqXG4gKiBjb25zdCBkaWFnMCA9IE1hdHJpeC56ZXJvcyg1LCA1KS5zdW0oKVxuICogLy8gMFxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zdW0gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgpID0+IHtcbiAgICBhY2MgKz0gZm9sZCgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpKDApKHgpXG4gICAgcmV0dXJuIGFjY1xuICB9KSgwKSh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5zdW1cbiAqIEBkZXNjIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgdmFsdWVzIGluIHRoZSBNYXRyaXhcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gTWF0cml4IGZyb20gd2hpY2ggdG8gcmV0dXJuIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXguc3VtKFtbMiwgMV0sIFsxLCA1XV0pXG4gKiAvLyA5XG4gKlxuICovXG5NYXRyaXguc3VtID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5zdW0oKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgja3JvbmVja2VyXG4gKiBAZGVzYyBUaGUgS3JvbmVja2VyIHByb2R1Y3QgaXMgYW4gb3BlcmF0aW9uIG9uIHR3byBtYXRyaWNlcyBvZiBhcmJpdHJhcnkgc2l6ZSByZXN1bHRpbmcgaW4gYSBibG9jayBtYXRyaXguXG4gKiBAcGFyYW0ge01hdHJpeH0gTSAtIFRoZSByaWdodCBzaWRlIE1hdHJpeCBvZiB0aGUgcHJvZHVjdCAodGhpcyDiipcgTSlcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUua3JvbmVja2VyID0gZnVuY3Rpb24gKE0pIHtcbiAgY29uc3QgbSA9IHRoaXMuZ2V0Um93cygpXG4gIGNvbnN0IG4gPSB0aGlzLmdldENvbHMoKVxuICBjb25zdCBwID0gTS5nZXRSb3dzKClcbiAgY29uc3QgcSA9IE0uZ2V0Q29scygpXG5cbiAgY29uc3QgbGVmdCA9IHRoaXMuX192YWx1ZVxuICBjb25zdCByaWdodCA9IE0uX192YWx1ZVxuXG4gIGNvbnN0IGZyYW1lID0gZ2VuZXJhdGUobSAqIHAsIG4gKiBxKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcDsgaysrKSB7XG4gICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgcTsgbCsrKSB7XG4gICAgICAgICAgZnJhbWVbcCAqIGkgKyBrXVtxICogaiArIGxdID0gbGVmdFtpXVtqXSAqIHJpZ2h0W2tdW2xdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gTWF0cml4Lm9mKGZyYW1lKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgua3JvbmVja2VyXG4gKiBAZGVzYyBUaGUgS3JvbmVja2VyIHByb2R1Y3QgaXMgYW4gb3BlcmF0aW9uIG9uIHR3byBtYXRyaWNlcyBvZiBhcmJpdHJhcnkgc2l6ZSByZXN1bHRpbmcgaW4gYSBibG9jayBtYXRyaXguXG4gKiBAcGFyYW0ge01hdHJpeH0gQSAtIFRoZSBsZWZ0IHNpZGUgTWF0cml4IG9mIHRoZSBwcm9kdWN0IChBIOKKlyBCKVxuICogQHBhcmFtIHtNYXRyaXh9IEIgLSBUaGUgcmlnaHQgc2lkZSBNYXRyaXggb2YgdGhlIHByb2R1Y3QgKEEg4oqXIEIpXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgua3JvbmVja2VyID0gZnVuY3Rpb24gKEEsIEIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5rcm9uZWNrZXIoQilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2RldGVybWluYW50XG4gKiBAZGVzYyBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIHNxdWFyZSBNYXRyaXggdXNpbmcgU2FycnVzJyBydWxlIG9yIExVIGRlY29tcG9zaXRpb25cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGV0ZXJtaW5hbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmlzU3F1YXJlKCkpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgPT09IDIpIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLl9fdmFsdWVbMF1bMF1cbiAgICAgIGNvbnN0IGIgPSB0aGlzLl9fdmFsdWVbMF1bMV1cbiAgICAgIGNvbnN0IGMgPSB0aGlzLl9fdmFsdWVbMV1bMF1cbiAgICAgIGNvbnN0IGQgPSB0aGlzLl9fdmFsdWVbMV1bMV1cblxuICAgICAgcmV0dXJuIGEgKiBkIC0gYiAqIGNcbiAgICB9XG4gICAgY29uc3QgbHUgPSB0aGlzLmx1KClcbiAgICBjb25zdCBkZXRBID0gTnVtYmVyKGx1WzBdLmRpYWdwcm9kdWN0KCkpXG4gICAgY29uc3QgZGV0QiA9IE51bWJlcihsdVsxXS5kaWFncHJvZHVjdCgpKVxuICAgIHJldHVybiBkZXRBICogZGV0QlxuICB9IGVsc2Uge1xuICAgIHRocm93IEVycm9yKCdUaGUgTWF0cml4IG5lZWRzIHRvIGJlIGEgc3F1YXJlIE1hdHJpeCB0byBjYWxjdWxhdGUgdGhlIGRldGVybWluYW50JylcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXguZGV0ZXJtaW5hbnRcbiAqIEBkZXNjIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgc3F1YXJlIE1hdHJpeCB1c2luZyBTYXJydXMnIHJ1bGUgb3IgTFUgZGVjb21wb3NpdGlvblxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IEEgLSBNYXRyaXggYXMgaW5wdXQgdG8gY2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LmRldGVybWluYW50ID0gZnVuY3Rpb24gKEEpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5kZXRlcm1pbmFudCgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNtYXhcbiAqIEBkZXNjIFJldHVybnMgdGhlIGxhcmdlc3QgbnVtYmVyIGluIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHsqfVxuICovXG5NYXRyaXgucHJvdG90eXBlLm1heCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHJlZHVjZShtYXgsIFtdLmNvbmNhdC5hcHBseShbXSwgdGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I21pblxuICogQGRlc2MgUmV0dXJucyB0aGUgc21hbGxlc3QgbnVtYmVyIGluIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHsqfVxuICovXG5NYXRyaXgucHJvdG90eXBlLm1pbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHJlZHVjZShtaW4sIFtdLmNvbmNhdC5hcHBseShbXSwgdGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2RpdmlkZVxuICogQGRlc2MgRGl2aWRlIGEgc2NhbGFyIG9yIGEgbWF0cml4IGJ5IGEgbWF0cml4LiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIGRpdmlzaW9uIGlzIG5vdCBwb3NzaWJsZS5cbiAqIEBwYXJhbSB7TWF0cml4fE51bWJlcn0gTSAtIEEgTWF0cml4IE0gb3IgYSBOdW1iZXIgdG8gbXVsdGlwbHkgYSBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLmRpdmlkZSgyKSAvLyBbWzEwLCA4XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLm11bHRpcGx5KEIpIC8vIFtbMjUsIDI1XV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGl2aWRlID0gZnVuY3Rpb24gKE0pIHtcbiAgaWYgKE0gaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgIT09IE0uZ2V0Q29scygpIHx8IHRoaXMuZ2V0Um93cygpICE9PSBNLmdldFJvd3MoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaWNlcyBkbyBub3QgbWF0Y2gsIGNhbm5vdCBjcmVhdGUgZGl2aXNpb24nKVxuICAgIH1cbiAgICBpZiAobm90KE0uaXNTcXVhcmUoKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IGlzIG5vdCBzcXVhcmUsIGNhbm5vdCBjcmVhdGUgaW52ZXJzZScpXG4gICAgfVxuICAgIGNvbnN0IG1JbnYgPSBNLmludmVyc2UoKVxuICAgIHJldHVybiB0aGlzLmRvdChtSW52KVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGx5KDEgLyBNKVxuICB9XG59XG5cbi8vIE1hdHJpeC5wcm90b3R5cGUuZGl2aWRlID0gZnVuY3Rpb24gKE0pIHtcbi8vICAgaWYgKE0gaW5zdGFuY2VvZiBNYXRyaXgpIHtcbi8vIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4vLyAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3QgY3JlYXRlIGRpdmlzaW9uJylcbi8vIH0gZWxzZSB7XG4vLyAgIGlmIChNLmlzU3F1YXJlKCkpIHtcbi8vICAgICBjb25zdCBtSW52ID0gTS5pbnZlcnNlKClcbi8vICAgICBjb25zb2xlLmxvZyhtSW52Ll9fdmFsdWUpXG4vLyAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHkobUludilcbi8vICAgfSBlbHNlIHtcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBpcyBub3Qgc3F1YXJlLCBjYW5ub3QgY3JlYXRlIGludmVyc2UnKVxuLy8gICB9XG4vLyB9XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY29uc3QgbnIgPSBNID09PSAwID8gMSA6IDEgLyBNXG4vLyAgICAgdGhpcy5tdWx0aXBseShucilcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXhcbiIsImltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuaW1wb3J0IGNvbmNhdCBmcm9tICdmdW4uanMvc3JjL2NvbmNhdCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gY29uY2F0XG4gKiBAZGVzYyBIZWxwZXIgZnVuY3Rpb24gY29uY2F0ZW5hdGluZy9jb21iaW5pbmcgMiBNYXRyaWNlc1xuICogQHBhcmFtIHtNYXRyaXh9IE0gLSBMZWZ0IHNpZGUgb2YgdGhlIGNvbmNhdCBvcGVyYXRpb3JcbiAqIEBwYXJhbSB7QXJyYXl9IG0gLSByaWdodCBzaWRlIG9mIHRoZSBjb250YWMgb3BlcmF0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZHggLSBJbmRleCBvZiB0aGUgcm93XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIChNLCBtLCBpZHgpIHtcbiAgcmV0dXJuIGNvbmNhdChtLCBNLl9fdmFsdWVbaWR4XSlcbn0pXG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcbmltcG9ydCBmb2xkIGZyb20gJ2Z1bi5qcy9zcmMvZm9sZCdcbmltcG9ydCBtYXAgZnJvbSAnZnVuLmpzL3NyYy9tYXAnXG5pbXBvcnQgcm91bmQgZnJvbSAnLi9yb3VuZCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gZG90XG4gKiBAZGVzYyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIGRvdHByb2R1Y3Qgb2YgMiBNYXRyaWNlc1xuICogQHBhcmFtIHtNYXRyaXh9IEIgLSBSaWdodCBzaWRlIG9mIGh0ZSBkb3QgcHJvZHVjdFxuICogQHBhcmFtIHtBcnJheX0gYSAtIEFycmF5IHJlcHJlc2VudGluZyB0aGVsZWZ0IHNpZGUgb2YgdGhlIGRvdCBwcm9kdWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChkZWNpbWFscywgQiwgYSkgPT4gbWFwKChpdGVtLCBpKSA9PiB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGopID0+IHtcbiAgICBhY2MgKz0gcm91bmQoeCAqIEIuX192YWx1ZVtqXVtpXSwgZGVjaW1hbHMpXG4gICAgcmV0dXJuIGFjY1xuICB9LCAwKShhKVxufSkoQi5fX3ZhbHVlWzBdKSlcbiIsImltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuXG4vKipcbiAqIEBmdW5jdGlvbiBlbXB0eVxuICogQGRlc2MgSGVscGVyIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGFuIGVtcHR5IE1hdHJpeFxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShtID0+IFtdKVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZ2VuZXJhdGVcbiAqIEBkZXNjIEdlbmVyYXRvciBmdW5jdGlvbiBmb3IgYSBtYXRyaXggYXJyYXksIHZhbHVlcyBhcmUgc2V0IHRvIHVuZGVmaW5lZFxuICogQHBhcmFtIHtOdW1iZXJ9IHJvd3NcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2xzXG4gKiBAcmV0dXJucyB7YW55W11bXX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKHJvd3MsIGNvbHMpID0+IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4iLCJpbXBvcnQgbWFwIGZyb20gJ2Z1bi5qcy9zcmMvbWFwJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBpZGVudGl0eVxuICogQGRlc2MgQ3JlYXRlcyBhbiBpZGVudGl5IG1hdHJpeCBmcm9tIGFuIGVtcHR5IGFycmF5XG4gKiBAcGFyYW0gbSB7QXJyYXl9XG4gKiBAcGFyYW0gaWR4IHtOdW1iZXJ9XG4gKiBAcmV0dXJuIHtNYXRyaXh9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChtLCBpZHgpID0+IG1hcCgocm93cywgamR4KSA9PiAoaWR4ID09PSBqZHgpICogMSkobSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHJvdW5kXG4gKiBAcGFyYW0gdmFsdWUge051bWJlcn1cbiAqIEBwYXJhbSBkZWNpbWFscyB7TnVtYmVyfVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91bmQgKHZhbHVlLCBkZWNpbWFscyA9IDQpIHtcbiAgcmV0dXJuIE51bWJlcihOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSkudG9QcmVjaXNpb24oZGVjaW1hbHMpKVxufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gc29sdmVMXG4gKiBAZGVzYyBzb2x2ZSB0aGUgeEEgPSBiIGVxdWF0aW9uIGZvciBsb3dlciB0cmlhbmd1bGFyXG4gKiBAcGFyYW0gblxuICogQHBhcmFtIExcbiAqIEBwYXJhbSBiXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNvbHZlTCAobiwgTCwgYikge1xuICBsZXQgcyA9IDBcbiAgY29uc3QgYyA9IFtdXG5cbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyArK2spIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGs7ICsraikge1xuICAgICAgcyA9IHMgKyBMLl9fdmFsdWVba11bal0gKiBjW2pdXG4gICAgfVxuICAgIGNba10gPSBiW2tdIC0gc1xuICAgIHMgPSAwXG4gIH1cbiAgcmV0dXJuIGNcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb24gc29sdmVVXG4gKiBAZGVzYyBzb2x2ZSB0aGUgeEEgPSBiIGVxdWF0aW9uIGZvciB1cHBlciB0cmlhbmd1bGFyXG4gKiBAcGFyYW0gblxuICogQHBhcmFtIFVcbiAqIEBwYXJhbSBjXG4gKiBAcGFyYW0gYlxuICovXG5mdW5jdGlvbiBzb2x2ZVUgKG4sIFUsIGMsIGIpIHtcbiAgY29uc3QgeCA9IFtdXG4gIGZvciAobGV0IGEgPSBuIC0gMTsgYSA+IC0xOyAtLWEpIHtcbiAgICBsZXQgdCA9IDBcbiAgICBmb3IgKGxldCBiID0gYSArIDE7IGIgPCBuOyArK2IpIHtcbiAgICAgIHQgPSB0ICsgVS5fX3ZhbHVlW2FdW2JdICogeFtiXVxuICAgIH1cbiAgICB4W2FdID0gKGNbYV0gLSB0KSAvIFUuX192YWx1ZVthXVthXVxuICB9XG4gIHJldHVybiB4XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uIHNvbHZlXG4gKiBAZGVzYyBIZWxwZXIgZnVuY3Rpb24gZm9yIHhBID0gYiBzb2x2ZXJcbiAqIEBwYXJhbSBuXG4gKiBAcGFyYW0gTFxuICogQHBhcmFtIFVcbiAqIEBwYXJhbSBiXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvbHZlIChuLCBMLCBVLCBiKSB7XG4gIGNvbnN0IGMgPSBzb2x2ZUwobiwgTCwgYilcbiAgcmV0dXJuIHNvbHZlVShuLCBVLCBjLCBiKVxufVxuIiwiaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcbmltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuXG4vKipcbiAqIEBmdW5jdGlvbiB0cmFuc3Bvc2VcbiAqIEBkZXNjIFRyYW5zcG9zZXMgYSBhcnJheSBvZiBhcnJheXMgdXNpbmcgdGhlIE1hdHJpeC5tYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBtIHtBcnJheX1cbiAqIEBwYXJhbSBpZHgge051bWJlcn1cbiAqIEByZXR1cm4ge01hdHJpeH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHByZXYsIG5leHQpID0+IG1hcCgoaXRlbSwgaSkgPT4gKHByZXZbaV0gfHwgW10pLmNvbmNhdChuZXh0W2ldKSkobmV4dCkpXG4iXSwic291cmNlUm9vdCI6IiJ9