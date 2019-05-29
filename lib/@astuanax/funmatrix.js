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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./node_modules/fun.js/src/addIndex.js":
/*!*********************************************!*\
  !*** ./node_modules/fun.js/src/addIndex.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function addIndex
 * @summary Adds a specified index to iterate a collection
 * @description The addIndex function is notnecessary for the map functions in the fun.js library as they behave the sa,e as the native javascript functions
 * @param {Function} f Iterator function
 * @param {Function} g Function to which to add the index
 * @param {Array} a The array on which to work
 * @since 1.0.2
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function addIndex (f, g, a) {
  let i = 0
  return f(
    function (v) {
      return g(v, i++)
    },
    a
  )
}));


/***/ }),

/***/ "./node_modules/fun.js/src/adjust.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/adjust.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Modifies an item in an array using the provided function
 *
 * @function adjust
 * @description Modifies an item in an array using the provided function
 * @since v1.0.2
 * @sig (a -> a) -> num -> [a] -> [a]
 * @param {Function} fn - to modify the item at the specified index
 * @param {Number} i - The index at which to modify the array, accepts postitive and negative indexes
 * @param {Iterable} [a] - Array with data
 * @return {Iterable} [a]
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function adjust (fn, i, a) {
  const r = Array.prototype.slice.call(a)
  const idx = i < 0 ? r.length + i : i
  if (!a[idx]) return r
  r[idx] = fn(r[idx])
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/adjustWith.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/adjustWith.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./node_modules/fun.js/src/map.js");
/**
 * Modifies an item in an array using the provided function
 *
 * @function adjustWith
 * @description Modifies an item in an array using the provided function
 * @since v1.0.2
 * @sig (a -> a) -> ((a -> [a]) -> [a] -> num) -> [a] -> [a]
 * @param {Function} fn - to modify the item at the specified index
 * @param {Function} pred - The predicate that returns the indexes if found
 * @param {Iterable} [a]
 * @return {Iterable} [a]
 **/



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function adjustWith (fn, pred, a) {
  const _fn = x => {
    if (pred(x)) {
      return fn(x)
    }
    return x
  }
  return Object(_map__WEBPACK_IMPORTED_MODULE_1__["default"])(_fn, Array.prototype.slice.call(a))
}));


/***/ }),

/***/ "./node_modules/fun.js/src/all.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/all.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns true if all items in the enumerable match the predicate
 *
 * @function all
 * @description Returns true if all items in the enumerable match the predicate
 * @since v1.0.2
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Boolean}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function all (cb, a) {
  let res = true
  for (let i in a) {
    if (!cb(a[i])) {
      res = false
      break
    }
  }
  return res
}));


/***/ }),

/***/ "./node_modules/fun.js/src/allPass.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/allPass.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Applies a list of predicates to the data and returns true if all pass
 *
 * @function allPass
 * @description Applies a list of predicates to the data and returns true if all pass
 * @since v1.0.2
 * @sig [(*... -> Boolean)] -> (*... -> Boolean
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function allPass (cbs, a) {
  for (let i = 0; i < cbs.length; i++) {
    if (!cbs[i](a)) return false
  }
  return true
}));


/***/ }),

/***/ "./node_modules/fun.js/src/always.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/always.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns a function with the initial value provided
 *
 * @function always
 * @description Returns a function with the initial value provided
 * @since v1.0.2
 * @sig a -> (* -> a)
 * @param {*} a
 * @return {Function}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function always (x) {
  return function () { return x }
}));


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

/***/ "./node_modules/fun.js/src/any.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/any.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns true if at least on of the items in the enumerable match the predicate
 *
 * @function any
 * @description Returns true if at least on of the items in the enumerable match the predicate
 * @since v1.0.2
 * @sig (TODO)
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Boolean}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function any (cb, a) {
  let res = false
  for (let i in a) {
    if (cb(a[i])) {
      res = true
      break
    }
  }
  return res
}));


/***/ }),

/***/ "./node_modules/fun.js/src/anyPass.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/anyPass.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Applies a list of predicates to the data and returns true if one passes
 *
 * @function anyPass
 * @since v1.0.2
 * @sig [(*... -> Boolean)] -> (*...) -> Boolean
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function anyPass (cbs, a) {
  for (let i = 0; i < cbs.length; i++) {
    if (cbs[i](a)) return true
  }
  return false
}));


/***/ }),

/***/ "./node_modules/fun.js/src/ap.js":
/*!***************************************!*\
  !*** ./node_modules/fun.js/src/ap.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/curry1 */ "./node_modules/fun.js/src/_private/curry1.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is */ "./node_modules/fun.js/src/is.js");
/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array/fold */ "./node_modules/fun.js/src/array/fold.js");
/* harmony import */ var _array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array/map */ "./node_modules/fun.js/src/array/map.js");
/**
 * Applies a list of functions to a list of values and returns a combined result array
 *
 * @function ap
 * @description Applies a list of functions to a list of values and returns a combined result array
 * @since v1.0.2
 * @sig @sig [a -> b] -> [a] -> [b]
 * @param {(Function[]|Function|Applicative)} fns - An array of functions or a function or an applicative
 * @param {Array} vals - An array of values
 * @return {Iterable} [a]
 **/






const isFunction = Object(_is__WEBPACK_IMPORTED_MODULE_2__["default"])('Function')

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function ap (fns, vals) {
  if (isFunction(fns.ap)) {
    return fns.ap(vals)
  }
  if (isFunction(fns)) {
    return x => fns(x)(vals(x))
  }
  return Object(_array_fold__WEBPACK_IMPORTED_MODULE_3__["default"])((acc, f) => acc.concat(Object(_array_map__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_private_curry1__WEBPACK_IMPORTED_MODULE_1__["default"])(f), vals)), [], fns)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/aperture.js":
/*!*********************************************!*\
  !*** ./node_modules/fun.js/src/aperture.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./node_modules/fun.js/src/map.js");



/**
 * @function aperture
 * @param n
 * @param arr
 * @returns {*}
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function aperture (n, a) {
  if (a.length < n) {
    return []
  }
  const res = Array(a.length - n + 1)
  return Object(_map__WEBPACK_IMPORTED_MODULE_1__["default"])((item, idx) => a.slice(idx, idx + n), res)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/append.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/append.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ "./node_modules/fun.js/src/concat.js");
/**
 * @function append
 * @description Append an elment to a list
 * @param {*} el - Element to add to a list
 * @param {array} list - List to which to add the element
 * @return {array}
 * @example
 *
 * const l = [0, 1]
 * append('a', l) // reutnr [0, 1, 'a']
 *
 **/



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function append (el, list) {
  return Object(_concat__WEBPACK_IMPORTED_MODULE_1__["default"])(list, [ el ])
}));


/***/ }),

/***/ "./node_modules/fun.js/src/apply.js":
/*!******************************************!*\
  !*** ./node_modules/fun.js/src/apply.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function apply
 * @description The apply() method calls a function with the given arguments provided as an array, and the function as context.
 * @param fn
 * @param args
 * @return {*}
 * @example
 *
 * var a = apply(function () {
 *      return [].slice.call(arguments).map(x => x * 2)
 *   })
 * a([1, 2, 3])
 * // [2, 4, 6]
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function apply (fn, args) {
  return fn.apply(fn, args)
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

/***/ "./node_modules/fun.js/src/array/filter.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/array/filter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function arrayFilter
 * @private
 *
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function arrayFilter (fn, a) {
  var r = []
  for (let i = 0; i < a.length; i++) {
    if (fn(a[i])) r.push(a[i])
  }
  return r
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

/***/ "./node_modules/fun.js/src/array/to.js":
/*!*********************************************!*\
  !*** ./node_modules/fun.js/src/array/to.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toArray; });
/**
 * @function toArray
 * @description Converts the input to an array
 * @param {ArrayLike} x - Object to convert to an array
 * @return {Array}
 * @since 1.0.2
 * @example
 *
 * const result = toArray("string")
 * // result = ['s','t','r','i','n','g']
 *
 * function () {
 *  const args = toArray(arguments)
 *  console.log(typeof args) // Array
 * }
 *
 **/
function toArray (x) {
  return x.length === 1 ? [x[0]] : Array.apply(null, x)
};


/***/ }),

/***/ "./node_modules/fun.js/src/array/union.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/array/union.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function unionArray
 * @description Merges 2 arrays
 * @param {Array} aL - Array to merge
 * @param {Array} aR - Array to merge
 * @return {Array}
 * @since 1.0.2
 * @example
 *
 * const result = unionArray([0,1,2], [3,4,5])
 * // result = [0.1.2.3.4.5]
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function unionArray (aL, aR) {
  return Array.from(new Set(aL.concat(aR)))
}));


/***/ }),

/***/ "./node_modules/fun.js/src/binary.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/binary.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ "./node_modules/fun.js/src/_private/curry1.js");
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function binary
 * @param cb
 * @returns {function(*=, *=): *}
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function binary (cb) {
  return Object(_curry__WEBPACK_IMPORTED_MODULE_1__["default"])(function (a, b) {
    return cb(a, b)
  })
}));


/***/ }),

/***/ "./node_modules/fun.js/src/bind.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/bind.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");


/**
 * @function bind
 * @description Bind a function to a context
 * @param {function }fn
 * @param {*} context
 * @returns {*}
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function bind (fn, context) {
  return fn.bind(context)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/boolean/F.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/boolean/F.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../always */ "./node_modules/fun.js/src/always.js");
/**
 * Always returns a function with a False boolean
 *
 * @function F
 * @description Always returns a function with a False boolean
 * @since v1.0.2
 * @param {*} a
 * @return {Function}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_always__WEBPACK_IMPORTED_MODULE_0__["default"])(false));


/***/ }),

/***/ "./node_modules/fun.js/src/boolean/T.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/boolean/T.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../always */ "./node_modules/fun.js/src/always.js");
/**
 * Always returns a function with a False boolean
 *
 * @function T
 * @description Always returns a function with a False boolean
 * @since v1.0.2
 * @param {*} a
 * @return {Function}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_always__WEBPACK_IMPORTED_MODULE_0__["default"])(true));


/***/ }),

/***/ "./node_modules/fun.js/src/boolean/both.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/boolean/both.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lift */ "./node_modules/fun.js/src/lift.js");
/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../and */ "./node_modules/fun.js/src/and.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Returns true when both predicates return true
 *
 * @function
 * @since v1.0.2
 * @param {Function} fn1 A predicate function
 * @param {Function} fn2 A predicate function
 * @return {Boolean}
 **/





/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function both (fn1, fn2) {
  return Object(_is__WEBPACK_IMPORTED_MODULE_3__["default"])('Function')(fn1)
    ? function _both () { return fn1.apply(this, arguments) && fn2.apply(this, arguments) }
    : Object(_lift__WEBPACK_IMPORTED_MODULE_1__["default"])(_and__WEBPACK_IMPORTED_MODULE_2__["default"])(fn1, fn2)
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

/***/ "./node_modules/fun.js/src/call.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/call.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function call
 * @param fn
 * @returns {*}
 */
// import curry1 from './_private/curry1'


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function call (fn) {
  return fn.apply(fn, [].slice.call(arguments, 1))
}));


/***/ }),

/***/ "./node_modules/fun.js/src/complement.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/complement.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lift */ "./node_modules/fun.js/src/lift.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not */ "./node_modules/fun.js/src/not.js");
/**
 * @function complement
 * @description Lifts a predicate function and returns the complement
 * @param {Function} A predicate function
 * @return {Function}
 * @see not
 * @see lift
 * @since v1.0.2
 * @example
 *
 * const isNotEmpty = complement(isEmpty)
 * isNotEmpty([]) // false
 * isNotEmpty({'a' : 1}) // true
 *
 * complement(Maybe.of(false)) // true
 * complement(Maybe.of(true)) // false
 */



const complement = Object(_lift__WEBPACK_IMPORTED_MODULE_0__["default"])(_not__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony default export */ __webpack_exports__["default"] = (complement);


/***/ }),

/***/ "./node_modules/fun.js/src/compose.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/compose.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compose; });
/**
 * @function compose
 * @returns {function(): *}
 */
function compose () {
  let fns = Array.prototype.slice.call(arguments)

  return function _compose () {
    let init = fns[fns.length - 1]
    let result = [init.apply(init, arguments)]
    let i = fns.length - 2

    for (i; i >= 0; --i) {
      const fn = fns[i]

      result = [fn.apply(fn, result)]
    }
    return result[0]
  }
};


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

/***/ "./node_modules/fun.js/src/cond.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/cond.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cond; });
/**
 * @function cond
 * @param conds
 * @returns {Function}
 */
function cond (conds) {
  return function (value) {
    for (var i = 0; i < conds.length; i++) {
      if (conds[i][0](value)) return conds[i][1](value)
    }
  }
}


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

/***/ "./node_modules/fun.js/src/date/diffDate.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/date/diffDate.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function diffDate
 * @description Returns the difference between 2 dates in millisecond
 * @param {Date} start - Start date
 * @param {Date} end - End date
 * @return {number} REturn the difference in milliseconds
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function diffDate (start, end) {
  return (new Date(start).getTime() - new Date(end).getTime())
}));


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

/***/ "./node_modules/fun.js/src/date/isFutureDate.js":
/*!******************************************************!*\
  !*** ./node_modules/fun.js/src/date/isFutureDate.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diffDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diffDate */ "./node_modules/fun.js/src/date/diffDate.js");
/**
 * Created by dierickx.len on 09/03/2017.
 */


/* harmony default export */ __webpack_exports__["default"] = ((d) => {
  return Object(_diffDate__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date())(d) < 0
});


/***/ }),

/***/ "./node_modules/fun.js/src/date/isValid.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/date/isValid.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isValid; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/fun.js/src/date/is.js");
/**
 *
 */


function isValid (x) {
  // noinspection JSCheckFunctionSignatures
  return Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])(x) && isFinite(x.valueOf())
};


/***/ }),

/***/ "./node_modules/fun.js/src/date/toDay.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/date/toDay.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by dierickx.len on 26/03/2017.
 */
/* harmony default export */ __webpack_exports__["default"] = ((d) => d / 86400000); // 24*60*60*1000 = 86400000


/***/ }),

/***/ "./node_modules/fun.js/src/date/toHour.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/date/toHour.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by dierickx.len on 26/03/2017.
 */
/* harmony default export */ __webpack_exports__["default"] = ((d) => d / 3600000); // 60*60*1000 = 3600000


/***/ }),

/***/ "./node_modules/fun.js/src/date/toMinutes.js":
/*!***************************************************!*\
  !*** ./node_modules/fun.js/src/date/toMinutes.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by dierickx.len on 26/03/2017.
 */
/* harmony default export */ __webpack_exports__["default"] = ((d) => d / 60000); // 60*1000 = 60000


/***/ }),

/***/ "./node_modules/fun.js/src/date/toSeconds.js":
/*!***************************************************!*\
  !*** ./node_modules/fun.js/src/date/toSeconds.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by dierickx.len on 26/03/2017.
 */
/* harmony default export */ __webpack_exports__["default"] = ((d) => d / 1000);


/***/ }),

/***/ "./node_modules/fun.js/src/defaultTo.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/defaultTo.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns true if all items in the enumerable match the predicate
 *
 * @function defaultTo
 * @description Returns true if all items in the enumerable match the predicate
 * @since v1.0.2
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function defaultTo (d, v) {
// eslint-disable-next-line no-self-compare
  return v == null || v !== v ? d : v
}));


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

/***/ "./node_modules/fun.js/src/filter.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/filter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/filter */ "./node_modules/fun.js/src/array/filter.js");
/* harmony import */ var _object_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/filter */ "./node_modules/fun.js/src/object/filter.js");
/* harmony import */ var _map_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/filter */ "./node_modules/fun.js/src/map/filter.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/**
 * @function filter
 * @description Autocurried fucntion that filters Objects, Arrays and Maps
 *
 */




// TODO
// import setFilter from '../set/filter'


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function filter (fn, a) {
  switch (Object(_type__WEBPACK_IMPORTED_MODULE_4__["default"])(a)) {
    // switch (Object.prototype.toString.call(a)) {
    // case 'Function':
    //   return curry(function () {
    //     return cb.call(this, a.apply(this, arguments))
    //   })
    case 'Object':
      return Object(_object_filter__WEBPACK_IMPORTED_MODULE_2__["default"])(fn, a)
    // case 'String':
    //   return stringMap(cb, a)
    case 'Map':
      return Object(_map_filter__WEBPACK_IMPORTED_MODULE_3__["default"])(fn, a)
    // case 'Set':
    //   return setFilter(fn, a)
    default:
      return Object(_array_filter__WEBPACK_IMPORTED_MODULE_1__["default"])(fn, a)
  }
}));


/***/ }),

/***/ "./node_modules/fun.js/src/findIndex.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/findIndex.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Find the index matching a predicate
 *
 * @function findIndex
 * @description Find the index matching a predicate
 * @since v1.0.2
 * @sig (a -> boolean) -> [a] -> number
 * @param {Function} Predicate function returns a boolean
 * @param {Array} An array like object
 * @return {number}
 **/



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function findIndex (fn, a) {
  let i = 0
  const l = a.length
  while (i < l) {
    if (fn(a[i])) {
      return i
    }
    i += 1
  }
  return -1
}));


/***/ }),

/***/ "./node_modules/fun.js/src/first.js":
/*!******************************************!*\
  !*** ./node_modules/fun.js/src/first.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ "./node_modules/fun.js/src/_private/curry1.js");
/**
 * @function first
 * @param [a]
 * @return a | undefined
 * @example
 *
 * const arr = [1, 2, 4]
 * first([1, 2, 4]) // returns 1
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function first (a) {
  return a && a.length ? a[0] : undefined
}));


/***/ }),

/***/ "./node_modules/fun.js/src/flatMap.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/flatMap.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fold */ "./node_modules/fun.js/src/fold.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ "./node_modules/fun.js/src/empty.js");
/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concat */ "./node_modules/fun.js/src/concat.js");
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is */ "./node_modules/fun.js/src/is.js");






const isFunction = Object(_is__WEBPACK_IMPORTED_MODULE_4__["default"])('Function')

/**
 * @function flatMap
 * @param fn
 * @param a
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_3__["default"])(function flatMap (fn, a) {
  if (isFunction(a)) {
    return function (x) {
      return fn(a(x))(x)
    }
  }
  if (isFunction(a.flatMap)) {
    return a.flatMap(fn)
  }
  return Object(_fold__WEBPACK_IMPORTED_MODULE_0__["default"])((acc, x) => Object(_concat__WEBPACK_IMPORTED_MODULE_2__["default"])(acc, fn(x)), Object(_empty__WEBPACK_IMPORTED_MODULE_1__["default"])(a), a)
}));


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

/***/ "./node_modules/fun.js/src/identity.js":
/*!*********************************************!*\
  !*** ./node_modules/fun.js/src/identity.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
/**

 * @function identity
 * @description Returns the value supplied to the function
 */

function identity (x) {
  return x
};


/***/ }),

/***/ "./node_modules/fun.js/src/index.js":
/*!******************************************!*\
  !*** ./node_modules/fun.js/src/index.js ***!
  \******************************************/
/*! exports provided: aperture, add, addIndex, adjust, adjustWith, all, allPass, always, and, any, anyPass, ap, append, apply, binary, bind, both, call, complement, compose, concat, cond, curry, defaultTo, diffDate, divide, empty, equals, exists, F, filter, findIndex, first, flatMap, fold, formatString, has, hasIn, identical, identity, is, isArray, isBoolean, isDate, isEmpty, isFutureDate, isMap, isNan, isNull, isNumber, isObject, isSet, isString, isUndefined, isValidDate, Just, keys, keysIn, last, lift, map, max, Maybe, merge, multiply, not, Nothing, omit, or, path, pick, prop, sum, T, toDay, toHour, toMinutes, toSeconds, truthy, type, union, values, zip, zipWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aperture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aperture */ "./node_modules/fun.js/src/aperture.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "aperture", function() { return _aperture__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _number_add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number/add */ "./node_modules/fun.js/src/number/add.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _number_add__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _addIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addIndex */ "./node_modules/fun.js/src/addIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addIndex", function() { return _addIndex__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _adjust__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adjust */ "./node_modules/fun.js/src/adjust.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adjust", function() { return _adjust__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _adjustWith__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adjustWith */ "./node_modules/fun.js/src/adjustWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adjustWith", function() { return _adjustWith__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all */ "./node_modules/fun.js/src/all.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _all__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _allPass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allPass */ "./node_modules/fun.js/src/allPass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allPass", function() { return _allPass__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./always */ "./node_modules/fun.js/src/always.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "always", function() { return _always__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./and */ "./node_modules/fun.js/src/and.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _and__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./any */ "./node_modules/fun.js/src/any.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _any__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _anyPass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./anyPass */ "./node_modules/fun.js/src/anyPass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anyPass", function() { return _anyPass__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ap */ "./node_modules/fun.js/src/ap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ap", function() { return _ap__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./append */ "./node_modules/fun.js/src/append.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append", function() { return _append__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apply */ "./node_modules/fun.js/src/apply.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _apply__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _binary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./binary */ "./node_modules/fun.js/src/binary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "binary", function() { return _binary__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bind */ "./node_modules/fun.js/src/bind.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _bind__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _boolean_both__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./boolean/both */ "./node_modules/fun.js/src/boolean/both.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "both", function() { return _boolean_both__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./call */ "./node_modules/fun.js/src/call.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _call__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _complement__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./complement */ "./node_modules/fun.js/src/complement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "complement", function() { return _complement__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./compose */ "./node_modules/fun.js/src/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./concat */ "./node_modules/fun.js/src/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _concat__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _cond__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cond */ "./node_modules/fun.js/src/cond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cond", function() { return _cond__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return _curry__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _defaultTo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./defaultTo */ "./node_modules/fun.js/src/defaultTo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTo", function() { return _defaultTo__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _date_diffDate__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./date/diffDate */ "./node_modules/fun.js/src/date/diffDate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffDate", function() { return _date_diffDate__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _number_divide__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./number/divide */ "./node_modules/fun.js/src/number/divide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return _number_divide__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./empty */ "./node_modules/fun.js/src/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _empty__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./equals */ "./node_modules/fun.js/src/equals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _equals__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./exists */ "./node_modules/fun.js/src/exists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return _exists__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _boolean_F__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./boolean/F */ "./node_modules/fun.js/src/boolean/F.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "F", function() { return _boolean_F__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./filter */ "./node_modules/fun.js/src/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _findIndex__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./findIndex */ "./node_modules/fun.js/src/findIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _findIndex__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _first__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./first */ "./node_modules/fun.js/src/first.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _first__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _flatMap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./flatMap */ "./node_modules/fun.js/src/flatMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return _flatMap__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./fold */ "./node_modules/fun.js/src/fold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fold", function() { return _fold__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _string_formatString__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./string/formatString */ "./node_modules/fun.js/src/string/formatString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatString", function() { return _string_formatString__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _object_has__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./object/has */ "./node_modules/fun.js/src/object/has.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "has", function() { return _object_has__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _object_hasIn__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./object/hasIn */ "./node_modules/fun.js/src/object/hasIn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasIn", function() { return _object_hasIn__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./identical */ "./node_modules/fun.js/src/identical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identical", function() { return _identical__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./identity */ "./node_modules/fun.js/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _identity__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./is */ "./node_modules/fun.js/src/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is", function() { return _is__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./array/is */ "./node_modules/fun.js/src/array/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _array_is__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _boolean_is__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./boolean/is */ "./node_modules/fun.js/src/boolean/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _boolean_is__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _date_is__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./date/is */ "./node_modules/fun.js/src/date/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _date_is__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./isEmpty */ "./node_modules/fun.js/src/isEmpty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _isEmpty__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _date_isFutureDate__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./date/isFutureDate */ "./node_modules/fun.js/src/date/isFutureDate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFutureDate", function() { return _date_isFutureDate__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _map_is__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./map/is */ "./node_modules/fun.js/src/map/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return _map_is__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _number_isNan__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./number/isNan */ "./node_modules/fun.js/src/number/isNan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNan", function() { return _number_isNan__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _null_is__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./null/is */ "./node_modules/fun.js/src/null/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _null_is__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _number_is__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./number/is */ "./node_modules/fun.js/src/number/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _number_is__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./object/is */ "./node_modules/fun.js/src/object/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _object_is__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _set_is__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./set/is */ "./node_modules/fun.js/src/set/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return _set_is__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _string_is__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./string/is */ "./node_modules/fun.js/src/string/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _string_is__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _undefined_is__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./undefined/is */ "./node_modules/fun.js/src/undefined/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _undefined_is__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _date_isValid__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./date/isValid */ "./node_modules/fun.js/src/date/isValid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return _date_isValid__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _monads_Just__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./monads/Just */ "./node_modules/fun.js/src/monads/Just.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Just", function() { return _monads_Just__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./keys */ "./node_modules/fun.js/src/keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _keys__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _object_keysIn__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./object/keysIn */ "./node_modules/fun.js/src/object/keysIn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keysIn", function() { return _object_keysIn__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _last__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./last */ "./node_modules/fun.js/src/last.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _last__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./lift */ "./node_modules/fun.js/src/lift.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lift", function() { return _lift__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./map */ "./node_modules/fun.js/src/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./max */ "./node_modules/fun.js/src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _monads_Maybe__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./monads/Maybe */ "./node_modules/fun.js/src/monads/Maybe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Maybe", function() { return _monads_Maybe__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _object_merge__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./object/merge */ "./node_modules/fun.js/src/object/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _object_merge__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _number_multiply__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./number/multiply */ "./node_modules/fun.js/src/number/multiply.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return _number_multiply__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./not */ "./node_modules/fun.js/src/not.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _not__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _monads_Nothing__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./monads/Nothing */ "./node_modules/fun.js/src/monads/Nothing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nothing", function() { return _monads_Nothing__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _object_omit__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./object/omit */ "./node_modules/fun.js/src/object/omit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _object_omit__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./or */ "./node_modules/fun.js/src/or.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _or__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _object_path__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./object/path */ "./node_modules/fun.js/src/object/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _object_path__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _object_pick__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./object/pick */ "./node_modules/fun.js/src/object/pick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _object_pick__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _object_prop__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./object/prop */ "./node_modules/fun.js/src/object/prop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return _object_prop__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _number_sum__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./number/sum */ "./node_modules/fun.js/src/number/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _number_sum__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _boolean_T__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./boolean/T */ "./node_modules/fun.js/src/boolean/T.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "T", function() { return _boolean_T__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _date_toDay__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./date/toDay */ "./node_modules/fun.js/src/date/toDay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDay", function() { return _date_toDay__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _date_toHour__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./date/toHour */ "./node_modules/fun.js/src/date/toHour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toHour", function() { return _date_toHour__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _date_toMinutes__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./date/toMinutes */ "./node_modules/fun.js/src/date/toMinutes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMinutes", function() { return _date_toMinutes__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _date_toSeconds__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./date/toSeconds */ "./node_modules/fun.js/src/date/toSeconds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSeconds", function() { return _date_toSeconds__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _truthy__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./truthy */ "./node_modules/fun.js/src/truthy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "truthy", function() { return _truthy__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "type", function() { return _type__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _array_union__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./array/union */ "./node_modules/fun.js/src/array/union.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _array_union__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _object_values__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./object/values */ "./node_modules/fun.js/src/object/values.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _object_values__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./zip */ "./node_modules/fun.js/src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony import */ var _zipWith__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./zipWith */ "./node_modules/fun.js/src/zipWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zipWith", function() { return _zipWith__WEBPACK_IMPORTED_MODULE_83__["default"]; });

// export { default as __ } from './__';

// export { default as applySpec } from './applySpec'
// export { default as applyTo } from './applyTo'
// export { default as ascend } from './ascend'
// export { default as assoc } from './assoc'
// export { default as assocPath } from './assocPath'
// export { default as clamp } from './clamp'
// export { default as clone } from './clone'
// export { default as comparator } from './comparator'
// export { default as composeK } from './composeK'
// export { default as composeP } from './composeP'
// export { default as composeWith } from './composeWith'
// export { default as construct } from './construct'
// export { default as constructN } from './constructN'
// export { default as contains } from './contains'
// export { default as converge } from './converge'
// export { default as countBy } from './countBy'
// export { default as dec } from './dec'
// export { default as descend } from './descend'
// export { default as difference } from './difference'
// export { default as differenceWith } from './differenceWith'
// export { default as dissoc } from './dissoc'
// export { default as dissocPath } from './dissocPath'
// export { default as drop } from './drop'
// export { default as dropLast } from './dropLast'
// export { default as dropLastWhile } from './dropLastWhile'
// export { default as dropRepeats } from './dropRepeats'
// export { default as dropRepeatsWith } from './dropRepeatsWith'
// export { default as dropWhile } from './dropWhile'
// export { default as either } from './either'
// export { default as endsWith } from './endsWith'
// export { default as eqBy } from './eqBy'
// export { default as eqProps } from './eqProps'
// export { default as evolve } from './evolve'
// export { default as find } from './find'
// export { default as findLast } from './findLast'
// export { default as findLastIndex } from './findLastIndex'
// export { default as flatten } from './flatten'
// export { default as flip } from './flip'
// export { default as forEach } from './forEach'
// export { default as forEachObjIndexed } from './forEachObjIndexed'
// export { default as fromPairs } from './fromPairs'
// export { default as groupBy } from './groupBy'
// export { default as groupWith } from './groupWith'
// export { default as gt } from './gt'
// export { default as gte } from './gte'
// export { default as hasPath } from './hasPath'
// export { default as head } from './head'
// export { default as ifElse } from './ifElse'
// export { default as inc } from './inc'
// export { default as includes } from './includes'
// export { default as indexBy } from './indexBy'
// export { default as indexOf } from './indexOf'
// export { default as init } from './init'
// export { default as innerJoin } from './innerJoin'
// export { default as insert } from './insert'
// export { default as insertAll } from './insertAll'
// export { default as intersection } from './intersection'
// export { default as intersperse } from './intersperse'
// export { default as into } from './into'
// export { default as invert } from './invert'
// export { default as invertObj } from './invertObj'
// export { default as invoker } from './invoker'
// export { default as join } from './join'
// export { default as juxt } from './juxt'
// export { default as lastIndexOf } from './lastIndexOf'
// export { default as length } from './length'
// export { default as lens } from './lens'
// export { default as lensIndex } from './lensIndex'
// export { default as lensPath } from './lensPath'
// export { default as lensProp } from './lensProp'
// export { default as liftN } from './liftN'
// export { default as lt } from './lt'
// export { default as lte } from './lte'
// export { default as mapAccum } from './mapAccum'
// export { default as mapAccumRight } from './mapAccumRight'
// export { default as mapObjIndexed } from './mapObjIndexed'
// export { default as match } from './match'
// export { default as mathMod } from './mathMod'
// export { default as maxBy } from './maxBy'
// export { default as mean } from './mean'
// export { default as median } from './median'
// export { default as memoizeWith } from './memoizeWith'
// export { default as mergeAll } from './mergeAll'
// export { default as mergeDeepLeft } from './mergeDeepLeft'
// export { default as mergeDeepRight } from './mergeDeepRight'
// export { default as mergeDeepWith } from './mergeDeepWith'
// export { default as mergeDeepWithKey } from './mergeDeepWithKey'
// export { default as mergeLeft } from './mergeLeft'
// export { default as mergeRight } from './mergeRight'
// export { default as mergeWith } from './mergeWith'
// export { default as mergeWithKey } from './mergeWithKey'
// export { default as min } from './min'
// export { default as minBy } from './minBy'
// export { default as modulo } from './modulo'
// export { default as move } from './move'
// export { default as nAry } from './nAry'
// export { default as negate } from './negate'
// export { default as none } from './none'
// export { default as nth } from './nth'
// export { default as nthArg } from './nthArg'
// export { default as o } from './o'
// export { default as objOf } from './objOf'
// export { default as of } from './of'
// export { default as once } from './once'
// export { default as otherwise } from './otherwise'
// export { default as over } from './over'
// export { default as pair } from './pair'
// export { default as partial } from './partial'
// export { default as partialRight } from './partialRight'
// export { default as partition } from './partition'
// export { default as pathEq } from './pathEq'
// export { default as pathOr } from './pathOr'
// export { default as pathSatisfies } from './pathSatisfies'
// export { default as pickAll } from './pickAll'
// export { default as pickBy } from './pickBy'
// export { default as pipe } from './pipe'
// export { default as pipeK } from './pipeK'
// export { default as pipeP } from './pipeP'
// export { default as pipeWith } from './pipeWith'
// export { default as pluck } from './pluck'
// export { default as prepend } from './prepend'
// export { default as product } from './product'
// export { default as project } from './project'
// export { default as propEq } from './propEq'
// export { default as propIs } from './propIs'
// export { default as propOr } from './propOr'
// export { default as props } from './props'
// export { default as propSatisfies } from './propSatisfies'
// export { default as range } from './range'
// export { default as reduce } from './reduce'
// export { default as reduceBy } from './reduceBy'
// export { default as reduced } from './reduced'
// export { default as reduceRight } from './reduceRight'
// export { default as reduceWhile } from './reduceWhile'
// export { default as reject } from './reject'
// export { default as remove } from './remove'
// export { default as repeat } from './repeat'
// export { default as replace } from './replace'
// export { default as reverse } from './reverse'
// export { default as scan } from './scan'
// export { default as sequence } from './sequence'
// export { default as set } from './set'
// export { default as slice } from './slice'
// export { default as sort } from './sort'
// export { default as sortBy } from './sortBy'
// export { default as sortWith } from './sortWith'
// export { default as split } from './split'
// export { default as splitAt } from './splitAt'
// export { default as splitEvery } from './splitEvery'
// export { default as splitWhen } from './splitWhen'
// export { default as startsWith } from './startsWith'
// export { default as subtract } from './subtract'
// export { default as symmetricDifference } from './symmetricDifference'
// export { default as symmetricDifferenceWith } from './symmetricDifferenceWith'
// export { default as tail } from './tail'
// export { default as take } from './take'
// export { default as takeLast } from './takeLast'
// export { default as takeLastWhile } from './takeLastWhile'
// export { default as takeWhile } from './takeWhile'
// export { default as tap } from './tap'
// export { default as test } from './test'
// export { default as then } from './then'
// export { default as thunkify } from './thunkify'
// export { default as times } from './times'
// export { default as toLower } from './toLower'
// export { default as toPairs } from './toPairs'
// export { default as toPairsIn } from './toPairsIn'
// export { default as toString } from './toString'
// export { default as toUpper } from './toUpper'
// export { default as transduce } from './transduce'
// export { default as transpose } from './transpose'
// export { default as traverse } from './traverse'
// export { default as trim } from './trim'
// export { default as tryCatch } from './tryCatch'
// export { default as unapply } from './unapply'
// export { default as unary } from './unary'
// export { default as uncurryN } from './uncurryN'
// export { default as unfold } from './unfold'
// export { default as unionWith } from './unionWith'
// export { default as uniq } from './uniq'
// export { default as uniqBy } from './uniqBy'
// export { default as uniqWith } from './uniqWith'
// export { default as unless } from './unless'
// export { default as unnest } from './unnest'
// export { default as until } from './until'
// export { default as update } from './update'
// export { default as useWith } from './useWith'
// export { default as valuesIn } from './valuesIn'
// export { default as view } from './view'
// export { default as when } from './when'
// export { default as where } from './where'
// export { default as whereEq } from './whereEq'
// export { default as without } from './without'
// export { default as xprod } from './xprod'
// export { default as zipObj } from './zipObj'





















































































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

/***/ "./node_modules/fun.js/src/isEmpty.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/isEmpty.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmpty; });
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty */ "./node_modules/fun.js/src/empty.js");
/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exists */ "./node_modules/fun.js/src/exists.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equals */ "./node_modules/fun.js/src/equals.js");
/**

 * @function empty
 * @description Returns the empty equivalent of the first argument
 */




function isEmpty (x) {
  return Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(x) && Object(_equals__WEBPACK_IMPORTED_MODULE_2__["default"])(x, Object(_empty__WEBPACK_IMPORTED_MODULE_0__["default"])(x))
};


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

/***/ "./node_modules/fun.js/src/keys.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/keys.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object/keys */ "./node_modules/fun.js/src/object/keys.js");
/* harmony import */ var _map_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/keys */ "./node_modules/fun.js/src/map/keys.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/**
 * Returns the keys of the provided object or iterator
 *
 * @function keys
 * @description Autocurried function which returns the keys of the provided object or iterator
 * @since v1.0.2
 * @sig obj -> [*]
 * @param {Object} obj - Obj from zhich to take the keys
 * @return {Iterable}
 **/





/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map (obj) {
  switch (Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(obj)) {
    case 'Map':
      return Object(_map_keys__WEBPACK_IMPORTED_MODULE_2__["default"])(obj)
    default:
      return Object(_object_keys__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)
  }
}));


/***/ }),

/***/ "./node_modules/fun.js/src/last.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/last.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ "./node_modules/fun.js/src/_private/curry1.js");
/**
 * @function last
 * @param [a]
 * @return a | undefined
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function last (a) {
  return a && a.length ? a[a.length - 1] : undefined
}));


/***/ }),

/***/ "./node_modules/fun.js/src/lift.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/lift.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/curry1 */ "./node_modules/fun.js/src/_private/curry1.js");
/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fold */ "./node_modules/fun.js/src/fold.js");
/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ap */ "./node_modules/fun.js/src/ap.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./node_modules/fun.js/src/map.js");
/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function
 *
 * @function lift
 * @since v1.0.2
 * @sig (*... -> *) -> ([*]... -> [*])
 **/






/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function lift (fn) {
  const lifted = Object(_private_curry1__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(fn))
  return Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function _lift () {
    return Object(_fold__WEBPACK_IMPORTED_MODULE_2__["default"])(_ap__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_map__WEBPACK_IMPORTED_MODULE_4__["default"])(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1))
  })
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

/***/ "./node_modules/fun.js/src/map/filter.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/map/filter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function mapFilter
 * @private
 *
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function mapFilter (fn, m) {
  let r = new Map()

  let it = m.entries()
  let result = it.next()

  while (!result.done) {
    const k = result.value[0]
    const v = result.value[1]
    if (fn(k, v)) r.set(k, v)
    result = it.next()
  }

  // Limited browser support
  // m.forEach((v, k) => {
  //   if (fn(k, v)) r.set(k, v)
  // })

  // babel transpile issues
  // for (const [k, v] of m.entries()) {
  //
  // }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/map/is.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/map/is.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Created by dierickx.len on 01/04/2017.
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Map'));


/***/ }),

/***/ "./node_modules/fun.js/src/map/keys.js":
/*!*********************************************!*\
  !*** ./node_modules/fun.js/src/map/keys.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns the own keys of an Map as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys (a) {
  return a.keys()
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

/***/ "./node_modules/fun.js/src/monads/Just.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/monads/Just.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @function Just
 * @param val
 * @returns {Just}
 * @constructor
 */
let Just = function (val) {
  this._value = val
  return this
}

Just.prototype.isJust = function () {
  return true
}
Just.prototype.isNothing = function () {
  return false
}

/* harmony default export */ __webpack_exports__["default"] = (Just);


/***/ }),

/***/ "./node_modules/fun.js/src/monads/Maybe.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/monads/Maybe.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Just__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Just */ "./node_modules/fun.js/src/monads/Just.js");
/* harmony import */ var _Nothing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nothing */ "./node_modules/fun.js/src/monads/Nothing.js");



/**
 * @function Maybe
 * @param val
 * @constructor
 */
let Maybe = function (val) {
  this.__value = val
}

Maybe.of = function (val) {
  if (val instanceof Maybe) return val
  if (this instanceof Maybe) {
    this.__value = val
    return this
  }
  return new Maybe(val)
}

Maybe.prototype.getOrElse = function (n) {
  return this.isNothing() ? n : this.__value
}

Maybe.prototype.map = function (f) {
  if (this.isNothing()) {
    return Maybe.of(null)
  }
  return Maybe.of(f(this.__value))
}

Maybe.prototype.ap = function (m) {
  return m.map(this.__value)
}

Maybe.prototype.isNothing = function () {
  return (this.__value == null)
}

Maybe.prototype.isJust = function () {
  return !this.isNothing()
}

Maybe.prototype.Nothing = function () {
  return new _Nothing__WEBPACK_IMPORTED_MODULE_1__["default"]()
}

Maybe.prototype.Just = function () {
  return new _Just__WEBPACK_IMPORTED_MODULE_0__["default"](this._value)
}

/* harmony default export */ __webpack_exports__["default"] = (Maybe);


/***/ }),

/***/ "./node_modules/fun.js/src/monads/Nothing.js":
/*!***************************************************!*\
  !*** ./node_modules/fun.js/src/monads/Nothing.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @function Nothing
 * @constructor
 */
let Nothing = function () {
}

Nothing.prototype.isJust = function () {
  return false
}
Nothing.prototype.isNothing = function () {
  return true
}

/* harmony default export */ __webpack_exports__["default"] = (Nothing);


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

/***/ "./node_modules/fun.js/src/null/is.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/null/is.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Created by dierickx.len on 03/02/2019
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('null'));


/***/ }),

/***/ "./node_modules/fun.js/src/number/add.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/number/add.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns the sum of the 2 arguments
 *
 * @function add
 * @description Returns the sum of the 2 arguments
 * @since v1.0.2
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function add (a, b) {
  return +a + +b
}));


/***/ }),

/***/ "./node_modules/fun.js/src/number/divide.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/number/divide.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 *
 *
 * @function divide
 * @description Returns the division of the 2 arguments
 * @since v1.0.2
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function divide (a, b) {
  return +a / +b
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

/***/ "./node_modules/fun.js/src/number/multiply.js":
/*!****************************************************!*\
  !*** ./node_modules/fun.js/src/number/multiply.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns the product of the 2 arguments
 *
 * @function
 * @since v1.0.2
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function multiply (a, b) {
  return +a * +b
}));


/***/ }),

/***/ "./node_modules/fun.js/src/number/sum.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/number/sum.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add */ "./node_modules/fun.js/src/number/add.js");
/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fold */ "./node_modules/fun.js/src/fold.js");
/**
 * Returns the sum of the numbers in an array
 *
 * @function
 * @since v1.0.2
 * @sig [Number] -> Number
 * @param {Array} a
 * @return {Number}
 **/




/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function sum (a) {
  return Object(_fold__WEBPACK_IMPORTED_MODULE_2__["default"])(_add__WEBPACK_IMPORTED_MODULE_1__["default"], 0, a)
}));


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

/***/ "./node_modules/fun.js/src/object/filter.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/object/filter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./node_modules/fun.js/src/object/keys.js");
/**
 * @function objectFilter
 * @private
 *
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function objectFilter (fn, o) {
  let r = {}
  const k = Object(_keys__WEBPACK_IMPORTED_MODULE_1__["default"])(o)
  for (let i = 0; i < k.length; i++) {
    if (fn(o[k[i]])) r[k[i]] = o[k[i]]
  }
  return r
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

/***/ "./node_modules/fun.js/src/object/has.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/object/has.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns true if an object has the property
 *
 * @function
 * @since v1.0.2
 * @sig {String} -> {Object} -> Boolean
 * @param {String} prop
 * @param {Object} obj
 * @return {Boolean}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function has (prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/object/hasIn.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/object/hasIn.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns true if an object has the property, even if it is inherited
 *
 * @function
 * @since v1.0.2
 * @sig {String} -> {Object} -> Boolean
 * @param {String} prop
 * @param {Object} obj
 * @return {Boolean}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function hasIn (prop, obj) {
  return prop in obj
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

/***/ "./node_modules/fun.js/src/object/keysIn.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/object/keysIn.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns all the keys of an object as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys (a) {
  const r = []
  for (const k in a) {
    r.push(k)
  }
  return r
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

/***/ "./node_modules/fun.js/src/object/merge.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/object/merge.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../identical */ "./node_modules/fun.js/src/identical.js");
/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/is */ "./node_modules/fun.js/src/object/is.js");
/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../array/is */ "./node_modules/fun.js/src/array/is.js");
/* harmony import */ var _array_union__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../array/union */ "./node_modules/fun.js/src/array/union.js");
/**

 * equals
 * checks for equality
 */






const merge = Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])((objL, objR) => {
  let result = Object.assign({}, objL)

  if (Object(_identical__WEBPACK_IMPORTED_MODULE_1__["default"])(objL, objR)) {
    return Object.assign({}, objL)
  }
  for (let key in objR) {
    if (!Object.prototype.hasOwnProperty.call(objR, key)) {
      continue
    }
    const oldValue = objR[key]
    const newValue = objL[key]

    if (Object(_object_is__WEBPACK_IMPORTED_MODULE_2__["default"])(oldValue) && Object(_object_is__WEBPACK_IMPORTED_MODULE_2__["default"])(newValue)) {
      result[key] = merge(oldValue, newValue)
    } else if (Object(_array_is__WEBPACK_IMPORTED_MODULE_3__["default"])(newValue)) {
      result[key] = Object(_array_union__WEBPACK_IMPORTED_MODULE_4__["default"])(newValue, oldValue)
    } else {
      result[key] = oldValue // TODO: this is a reference, should be clone
    }
  }
  return result
})

/* harmony default export */ __webpack_exports__["default"] = (merge);


/***/ }),

/***/ "./node_modules/fun.js/src/object/omit.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/object/omit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**

 * equals
 * checks for equality
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])((obj, names) => {
  let result = {}

  Object.keys(obj).filter((key) => {
    return names.indexOf(key) === -1
  }).forEach((key) => {
    result[key] = obj[key]
  })
  return result
}));


/***/ }),

/***/ "./node_modules/fun.js/src/object/path.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/object/path.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function path
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function path (path, obj) {
  let val = obj
  let idx = 0
  let p
  while (idx < path.length) {
    if (val == null) {
      return
    }
    p = path[idx]
    val = Number.isInteger(p)
      ? p < 0 ? val[val.length + p] : val[p]
      : val[p]
    idx += 1
  }
  return val
}));
// let r = obj
// for (let i = 0; i < path.length; i++) {
//   if (r == null) return undefined
//   r = r[path[i]]
// }
// return r
// })


/***/ }),

/***/ "./node_modules/fun.js/src/object/pick.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/object/pick.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function pick
 * @description returns a new bject with only the props that are provided
 * @param {Array} props - Array of property names
 * @param {Object} obj - The object from which to take the properties
 * @return {Object}
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function pick (props, obj) {
  const r = {}
  let i = 0
  while (i < props.length) {
    if (props[i] in obj) {
      r[props[i]] = obj[props[i]]
    }
    i += 1
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/object/prop.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/object/prop.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function prop
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function prop (p, obj) {
  return obj[p]
}));


/***/ }),

/***/ "./node_modules/fun.js/src/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/object/values.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/curry1 */ "./node_modules/fun.js/src/_private/curry1.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./node_modules/fun.js/src/object/keys.js");
/**
 * @function values
 * @description REturns a list of values taken from an objects own properties
 * @param {object} - obj The object from which to take the values
 * @return {array}
 *
 **/



/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function values (obj) {
  const k = Object(_keys__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)
  const l = k.length
  const r = []
  let i = 0
  while (i < l) {
    r[i] = obj[k[i]]
    i += 1
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

/***/ "./node_modules/fun.js/src/set/is.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/set/is.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Created by dierickx.len on 01/04/2017.
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Set'));


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

/***/ "./node_modules/fun.js/src/string/formatString.js":
/*!********************************************************!*\
  !*** ./node_modules/fun.js/src/string/formatString.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatString; });
/* harmony import */ var _array_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/to */ "./node_modules/fun.js/src/array/to.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../not */ "./node_modules/fun.js/src/not.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Created by dierickx.len on 26/03/2017.
 */




function formatString (str) { // use function(), arrow function doesn't bind arguments
  let args = Object(_array_to__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments)

  args.shift()
  return str.replace(/{(\d+)}/g, (match, idx) => {
    return Object(_not__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_is__WEBPACK_IMPORTED_MODULE_2__["default"])('Undefined', args[idx])) ? args[idx] : match
  })
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

/***/ "./node_modules/fun.js/src/truthy.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/truthy.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return truthy; });
/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exists */ "./node_modules/fun.js/src/exists.js");
/**
 * @function truthy
 */


function truthy (x) {
  return (x !== false) && Object(_exists__WEBPACK_IMPORTED_MODULE_0__["default"])(x)
};


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

/***/ "./node_modules/fun.js/src/undefined/is.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/undefined/is.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Created by dierickx.len on 03/02/2019
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('undefined'));


/***/ }),

/***/ "./node_modules/fun.js/src/zip.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/zip.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _zipWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipWith */ "./node_modules/fun.js/src/zipWith.js");
/**

 * zip
 *
 * @function zip
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function zip (a, b) {
  return Object(_zipWith__WEBPACK_IMPORTED_MODULE_1__["default"])(function _zipWith (x, y) { return [x, y] }, a, b)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/zipWith.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/zipWith.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**

 * zipWith
 *
 *  @function zipWith
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function zipWith (cb, a, b) {
  const arr = []
  const len = Math.min(a.length, b.length)
  let i = 0
  for (i = 0; i < len; i++) {
    arr.push(cb(a[i], b[i]))
  }
  return arr
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

// import gpumap from 'util/gpumap'
// import gpufold from 'util/gpufold'
// import gpuproduct from 'util/gpuproduct'

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
 * @function add
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

var _fun = __webpack_require__(/*! fun.js */ "./node_modules/fun.js/src/index.js");

/**
 * @function concat
 * @param M {Matrix}
 * @param m {Array}
 * @param idx {number}
 * @returns {Array}
 */
var _default = (0, _fun.curry)(function (M, m, idx) {
  return (0, _fun.concat)(m, M.__value[idx]);
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

var _fun = __webpack_require__(/*! fun.js */ "./node_modules/fun.js/src/index.js");

var _round = _interopRequireDefault(__webpack_require__(/*! ./round */ "./src/util/round.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function dot
 * @param B {Matrix}
 * @param a {Array}
 * @returns {Array}
 */
var _default = (0, _fun.curry)(function (decimals, B, a) {
  return (0, _fun.map)(function (item, i) {
    return (0, _fun.fold)(function (acc, x, j) {
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

var _fun = __webpack_require__(/*! fun.js */ "./node_modules/fun.js/src/index.js");

var _default = (0, _fun.curry)(function (m) {
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

var _fun = __webpack_require__(/*! fun.js */ "./node_modules/fun.js/src/index.js");

/**
 * @function generate
 * @desc Generator function for a matrix array, values are set to undefined
 * @param rows {number}
 * @param cols {number}
 * @returns {any[][]}
 */
var _default = function _default(rows) {
  var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var _cols = cols || rows;

  var y = (0, _fun.map)(function (z) {
    return value;
  })(new Array(_cols));
  return (0, _fun.map)(function (z) {
    return y;
  })(new Array(rows));
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

var _fun = __webpack_require__(/*! fun.js */ "./node_modules/fun.js/src/index.js");

/**
 * @function identity
 * @desc Creates an identiy matrix from an empty array
 * @param m {Array}
 * @param idx {number}
 * @return {Matrix}
 */
var _default = function _default(m, idx) {
  return (0, _fun.map)(function (rows, jdx) {
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

var _fun = __webpack_require__(/*! fun.js */ "./node_modules/fun.js/src/index.js");

/**
 * @function transpose
 * @desc Transposes a array of arrays using the Matrix.map function
 * @param m {Array}
 * @param idx {number}
 * @return {Matrix}
 */
var _default = (0, _fun.curry)(function (prev, next) {
  return (0, _fun.map)(function (item, i) {
    return (prev[i] || []).concat(next[i]);
  })(next);
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/matrix.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/BigOne/github/funMatrix/src/matrix.js */"./src/matrix.js");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9fcHJpdmF0ZS9jdXJyeTEuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FkZEluZGV4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hZGp1c3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FkanVzdFdpdGguanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FsbC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYWxsUGFzcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYWx3YXlzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hbmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FueS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYW55UGFzcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FwZXJ0dXJlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcHBlbmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FwcGx5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvZmlsdGVyLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9mb2xkLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS90by5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvdW5pb24uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYmluZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYm9vbGVhbi9GLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9ib29sZWFuL1QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2Jvb2xlYW4vYm90aC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYm9vbGVhbi9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY2FsbC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY29tcGxlbWVudC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9jb25kLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9jdXJyeS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS9kaWZmRGF0ZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS9pc0Z1dHVyZURhdGUuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2RhdGUvaXNWYWxpZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS90b0RheS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS90b0hvdXIuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2RhdGUvdG9NaW51dGVzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9kYXRlL3RvU2Vjb25kcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGVmYXVsdFRvLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9lbXB0eS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZXF1YWxzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9leGlzdHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZmluZEluZGV4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9maXJzdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZmxhdE1hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaWRlbnRpY2FsLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pc0VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pdGVyYXRvci9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9rZXlzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9sYXN0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9saWZ0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbWFwL2tleXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21heC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbW9uYWRzL0p1c3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21vbmFkcy9NYXliZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbW9uYWRzL05vdGhpbmcuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL25vdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVsbC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2FkZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2RpdmlkZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9udW1iZXIvaXNOYW4uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL251bWJlci9tdWx0aXBseS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL3N1bS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9oYXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9oYXNJbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2tleXNJbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L21lcmdlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3Qvb21pdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L3BhdGguanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9waWNrLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3QvcHJvcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb3IuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3NldC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL2Zvcm1hdFN0cmluZy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9zdHJpbmcvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy90cnV0aHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3R5cGUuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3VuZGVmaW5lZC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvemlwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy96aXBXaXRoLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvbWF0cml4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2RvdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2dlbmVyYXRlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvcm91bmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL3RyYW5zcG9zZS5qcyJdLCJuYW1lcyI6WyJNYXRyaXgiLCJ2YWwiLCJfX3ZhbHVlIiwib2YiLCJwcm90b3R5cGUiLCJ0eXBlIiwicHJlY2lzaW9uIiwic2V0UHJlY2lzaW9uIiwiaXNTeW1tZXRyaWMiLCJhIiwiYiIsInRyYW5zcG9zZSIsImlzU3F1YXJlIiwiZ2V0Q29scyIsImdldFJvd3MiLCJpc09ydGhvZ29uYWwiLCJBeEF0IiwiZG90IiwiSSIsImlkZW50aXR5IiwibGVuZ3RoIiwiZXF1YWxzIiwiTSIsImdldFNoYXBlIiwibWFwIiwiZiIsImZvbGQiLCJhcCIsImNvbmNhdCIsIkEiLCJCIiwiZW1wdHkiLCJyb3dzIiwiY29scyIsIm0iLCJjb21iaW5lIiwiZmlsbCIsIngiLCJ6ZXJvcyIsIm9uZXMiLCJyYW5kb20iLCJlIiwiTWF0aCIsInRvQXJyYXkiLCJyb3ciLCJjb2wiLCJjbG9uZSIsImZyb21BcnJheSIsImFyciIsImFkZCIsIkVycm9yIiwiaWR4IiwiamR4Iiwic3VidHJhY3QiLCJtdWx0aXBseSIsImNvbnNvbGUiLCJsb2ciLCJhZGRpdGl2ZWludmVyc2UiLCJoYWRhbWFyZCIsImx1IiwibiIsInRvbCIsIkwiLCJVIiwiayIsImFicyIsImkiLCJqIiwibCIsInJyZWYiLCJsZWFkIiwicmVzdWx0TWF0cml4IiwiciIsInRtcCIsInNvbHZlIiwiTFUiLCJzIiwiYyIsInQiLCJpbnZlcnNlIiwiSW52IiwicmVzdWx0IiwicmVkdWNlIiwiaGFsZiIsInB1c2giLCJzbGljZSIsInJhbmsiLCJkaW1lbnNpb24iLCJkaWFnIiwiYWNjIiwiZGlhZ3Byb2R1Y3QiLCJzdW0iLCJwcmV2IiwibmV4dCIsImtyb25lY2tlciIsInAiLCJxIiwibGVmdCIsInJpZ2h0IiwiZnJhbWUiLCJkZWNpbWFscyIsIml0ZW0iLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsIl9jb2xzIiwieSIsInoiLCJBcnJheSIsInJvdW5kIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFXLGdCQUFnQjtBQUNxQjtBQUNoRCxXQUFXLHVCQUF1QjtBQUNsQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLG9CQUFvQjtBQUMvQixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLHVCQUF1QjtBQUNsQyxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLHdCQUF3QjtBQUNuQyxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLHlCQUF5QjtBQUNwQyxXQUFXLHVCQUF1QjtBQUNs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V0FBVywyQkFBMkI7QUFDdEMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVywyQkFBMkI7QUFDdEMsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyx5QkFBeUI7QUFDcEMsV0FBVyx5QkFBeUI7QUFDcEMsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxpQkFBaUI7QUFDNUIsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyx3QkFBd0I7QUFDbkMsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyx3QkFBd0I7QUFDbkMsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxpQ0FBaUM7QUFDNUMsV0FBVyxxQ0FBcUM7QUFDaEQsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxzQkFBc0I7QUFDakMsV0FBVywyQkFBMkI7QUFDdEMsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyxpQkFBaUI7QUFDNUIsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxvQkFBb0I7QUFDYztBQUNHO0FBQ0o7QUFDUTtBQUNkO0FBQ1E7QUFDRjtBQUNOO0FBQ0E7QUFDUTtBQUNWO0FBQ1E7QUFDRjtBQUNFO0FBQ0o7QUFDUTtBQUNSO0FBQ1k7QUFDTjtBQUNGO0FBQ0o7QUFDRTtBQUNRO0FBQ0c7QUFDRjtBQUNUO0FBQ0U7QUFDQTtBQUNGO0FBQ0U7QUFDTTtBQUNSO0FBQ0k7QUFDTjtBQUN1QjtBQUNsQjtBQUNJO0FBQ0M7QUFDRjtBQUNaO0FBQ1c7QUFDSTtBQUNOO0FBQ0M7QUFDZTtBQUNsQjtBQUNNO0FBQ0o7QUFDSTtBQUNBO0FBQ047QUFDTTtBQUNNO0FBQ0E7QUFDUjtBQUNQO0FBQ1c7QUFDWDtBQUNBO0FBQ0Y7QUFDQTtBQUNXO0FBQ0E7QUFDTTtBQUNqQjtBQUNlO0FBQ047QUFDWDtBQUNXO0FBQ0E7QUFDQTtBQUNGO0FBQ0g7QUFDSztBQUNFO0FBQ007QUFDQTtBQUNYO0FBQ0o7QUFDUTtBQUNHO0FBQ2I7QUFDUTs7Ozs7Ozs7Ozs7OztBQ3ZSOUM7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMkI7QUFDRjs7QUFFVixxSEFBSztBQUNwQixTQUFTLHFEQUFJO0FBQ2IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUMyQjtBQUNFO0FBQ0E7O0FBRWQ7QUFDZixTQUFTLHVEQUFNLE9BQU8sdURBQU0sSUFBSSxzREFBSztBQUNyQzs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNzQjtBQUN0QixtQkFBbUIsbURBQUU7O0FBRU47QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRTtBQUN2QyxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFlBQVk7QUFDWjtBQUM0Qjs7QUFFYixxSEFBSztBQUNwQjtBQUNBLHVDQUF1Qyx5QkFBeUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDMkI7QUFDVztBQUNOO0FBQ1A7O0FBRVYscUhBQUs7QUFDcEIsVUFBVSxxREFBSTtBQUNkO0FBQ0EsYUFBYSx5REFBTztBQUNwQjtBQUNBLGFBQWEsNERBQVU7QUFDdkI7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN0QkY7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0M7O0FBRXZCLDhIQUFNO0FBQ3JCO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7QUFDVztBQUNiO0FBQ0o7QUFDRTs7QUFFUixxSEFBSztBQUNwQixpQkFBaUIsK0RBQU0sQ0FBQyxzREFBSztBQUM3QixTQUFTLHNEQUFLO0FBQ2QsV0FBVyxxREFBSSxDQUFDLDJDQUFFLEVBQUUsb0RBQUc7QUFDdkIsR0FBRztBQUNILENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsWUFBWTtBQUNaO0FBQzJCO0FBQ087QUFDRTtBQUNOO0FBQ007QUFDSTtBQUNmO0FBQ2E7O0FBRXZCLHFIQUFLO0FBQ3BCLFVBQVUscURBQUk7QUFDZDtBQUNBLGFBQWEsc0RBQUs7QUFDbEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSxhQUFhLDJEQUFTO0FBQ3RCO0FBQ0EsYUFBYSwyREFBUztBQUN0QjtBQUNBLGFBQWEsd0RBQU07QUFDbkI7QUFDQSxhQUFhLDBEQUFRO0FBQ3JCO0FBQ0EsYUFBYSw0REFBVTtBQUN2QixVQUFVLDZEQUFXO0FBQ3JCLFVBQVUsMERBQVE7QUFDbEI7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2Q0Y7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEI7O0FBRWIscUhBQUs7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOUJGO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDc0I7O0FBRVAsa0hBQUUsT0FBTzs7Ozs7Ozs7Ozs7OztBQ0x4QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjtBQUM0Qjs7QUFFYixxSEFBSztBQUNwQjtBQUNBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2JGO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRTtBQUN2QyxXQUFXLFNBQVM7QUFDcEIsV0FBVyxJQUFJO0FBQ2YsWUFBWTtBQUNaO0FBQzRCO0FBQ0E7O0FBRWIscUhBQUs7QUFDcEIsWUFBWSxzREFBSztBQUNqQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbkJGO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsWUFBWTtBQUNaO0FBQzJCOztBQUVaLHFIQUFLO0FBQ3BCO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDYkY7QUFBQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSTs7Ozs7Ozs7Ozs7OztBQ2xCbkI7QUFBQTtBQUFBO0FBQXlCO0FBQ007O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxnREFBTztBQUNwQjs7QUFFQTtBQUNBLGFBQWEsNkNBQUk7QUFDakI7O0FBRWUsb0VBQUs7Ozs7Ozs7Ozs7Ozs7QUNwRHBCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxzRUFBTzs7Ozs7Ozs7Ozs7OztBQ2R0QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQzJCOztBQUVaLHFIQUFLO0FBQ3BCO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUEY7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNzQjs7QUFFUCxrSEFBRSxRQUFROzs7Ozs7Ozs7Ozs7O0FDTHpCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQzRCOztBQUViLHFIQUFLO0FBQ3BCO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDZkY7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDNEI7O0FBRWIscUhBQUs7QUFDcEI7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNmRjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ3NCOztBQUVQLGtIQUFFLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUNMM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDMkI7QUFDSDs7QUFFVDtBQUNmLFNBQVMsb0RBQUcsQ0FBQyxtREFBUTtBQUNyQjs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUM0Qjs7QUFFYixxSEFBSztBQUNwQjtBQUNBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFlBQVk7QUFDWjtBQUM0QjtBQUNMO0FBQ0c7O0FBRVgscUhBQUs7QUFDcEIsU0FBUyxxREFBSSxDQUFDLDRDQUFHO0FBQ2pCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2ZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDNEI7QUFDRTtBQUNOO0FBQ007O0FBRWYscUhBQUs7QUFDcEI7QUFDQTtBQUNBLFFBQVEsb0RBQUcsQ0FBQyx1REFBTTtBQUNsQjs7QUFFQTtBQUNBLFFBQVEsb0RBQUcsQ0FBQyx1REFBTSxjQUFjLHVEQUFNO0FBQ3RDOztBQUVBO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDckJGO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEI7QUFDSDs7QUFFVixxSEFBSztBQUNwQjtBQUNBLFlBQVkscURBQUk7QUFDaEIsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDZkY7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QjtBQUNIOztBQUVWLHFIQUFLO0FBQ3BCLFlBQVkscURBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQkY7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU8sS0FBSyxPQUFPO0FBQzVCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQzRCOztBQUViLHFIQUFLO0FBQ3BCO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDZEY7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU8sS0FBSyxPQUFPO0FBQzVCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQzRCOztBQUViLHFIQUFLO0FBQ3BCO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDZEY7QUFBQTtBQUFBOztBQUVBO0FBQ3NCOztBQUVQLGtIQUFFLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUNMM0I7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1o7QUFDNEI7O0FBRWIscUhBQUs7QUFDcEI7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNiRjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjtBQUM0Qjs7QUFFYixxSEFBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxFQUFFO0FBQ3ZDLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQzRCO0FBQ0E7QUFDSDs7QUFFVixxSEFBSztBQUNwQixZQUFZLHFEQUFJO0FBQ2hCO0FBQ0E7QUFDQSxZQUFZLHNEQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUM0QjtBQUNRO0FBQ0Q7QUFDRjtBQUNDOztBQUVsQyxjQUFjLHNEQUFLO0FBQ25CLCtCQUErQjs7QUFFL0IsTUFBTSwwREFBUztBQUNmLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLDBEQUFRLGNBQWMsMERBQVE7QUFDdEM7QUFDQSxLQUFLLFVBQVUseURBQU87QUFDdEIsb0JBQW9CLDREQUFLO0FBQ3pCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWMsb0VBQUs7Ozs7Ozs7Ozs7Ozs7QUNuQ3BCO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDNEI7O0FBRWIscUhBQUs7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2hCRjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQzRCOztBQUViLHFIQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUM7QUFDRjtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7Ozs7Ozs7Ozs7O0FDM0JKO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUM0Qjs7QUFFYixxSEFBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNuQkY7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUM0Qjs7QUFFYixxSEFBSztBQUNwQjtBQUNBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1BGO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUN1QztBQUNkOztBQUVWLDhIQUFNO0FBQ3JCLFlBQVkscURBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BCRjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7O0FBRVoscUhBQUs7QUFDcEI7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNSRjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ3NCOztBQUVQLGtIQUFFLE9BQU87Ozs7Ozs7Ozs7Ozs7QUNMeEI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHdCQUF3QjtBQUN2QztBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNpQztBQUNUO0FBQ0Y7O0FBRVAsNkJBQTZCO0FBQzVDLGFBQWEseURBQU87O0FBRXBCO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0IsV0FBVyxvREFBRyxDQUFDLG1EQUFFO0FBQ2pCLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTs7QUFFQTtBQUNzQjs7QUFFUCxrSEFBRSxVQUFVOzs7Ozs7Ozs7Ozs7O0FDTDNCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFlBQVk7QUFDWjtBQUM0Qjs7QUFFYixxSEFBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BCRjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDNkI7O0FBRWQ7QUFDZiwwQkFBMEIsdURBQU07QUFDaEM7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ3NDOztBQUV2Qiw4SEFBTTtBQUNyQjtBQUNBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1BGO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDc0I7O0FBRVAsa0hBQUUsYUFBYTs7Ozs7Ozs7Ozs7OztBQ0w5QjtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUMyQjtBQUNJOztBQUVoQixxSEFBSztBQUNwQixTQUFTLHdEQUFPLDJCQUEyQixnQkFBZ0I7QUFDM0QsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDWEY7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCOztBQUVaLHFIQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJGOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQVdBLElBQUlBLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQVVDLEdBQVYsRUFBZTtBQUMxQixPQUFLQyxPQUFMLEdBQWVELEdBQWY7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBWUFELE1BQU0sQ0FBQ0csRUFBUCxHQUFZLFVBQVVGLEdBQVYsRUFBZTtBQUN6QixNQUFJQSxHQUFHLFlBQVlELE1BQW5CLEVBQTJCLE9BQU9DLEdBQVA7O0FBQzNCLE1BQUksZ0JBQWdCRCxNQUFwQixFQUE0QjtBQUMxQixTQUFLRSxPQUFMLEdBQWVELEdBQWY7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPLElBQUlELE1BQUosQ0FBV0MsR0FBWCxDQUFQO0FBQ0QsQ0FQRDtBQVNBOzs7Ozs7Ozs7OztBQVNBRCxNQUFNLENBQUNJLFNBQVAsQ0FBaUJDLElBQWpCLEdBQXdCLFFBQXhCO0FBRUE7Ozs7Ozs7Ozs7QUFTQUwsTUFBTSxDQUFDSSxTQUFQLENBQWlCRSxTQUFqQixHQUE2QixDQUE3QjtBQUVBOzs7Ozs7Ozs7Ozs7QUFXQU4sTUFBTSxDQUFDSSxTQUFQLENBQWlCRyxZQUFqQixHQUFnQyxVQUFVRCxTQUFWLEVBQXFCO0FBQ25ELE9BQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7Ozs7Ozs7O0FBV0FOLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkksV0FBakIsR0FBK0IsWUFBWTtBQUN6QyxNQUFNQyxDQUFDLEdBQUcsS0FBS1AsT0FBZjs7QUFDQSxNQUFNUSxDQUFDLEdBQUdWLE1BQU0sQ0FBQ1csU0FBUCxDQUFpQixJQUFqQixFQUF1QlQsT0FBakM7O0FBQ0EsU0FBTyxxQkFBT08sQ0FBUCxFQUFVQyxDQUFWLENBQVA7QUFDRCxDQUpEO0FBTUE7Ozs7Ozs7Ozs7Ozs7O0FBWUFWLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQlEsUUFBakIsR0FBNEIsWUFBWTtBQUN0QyxTQUFPLHFCQUFPLEtBQUtDLE9BQUwsRUFBUCxFQUF1QixLQUFLQyxPQUFMLEVBQXZCLENBQVA7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBWUFkLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQlcsWUFBakIsR0FBZ0MsWUFBWTtBQUMxQyxNQUFNQyxJQUFJLEdBQUcsS0FBS0MsR0FBTCxDQUFTLEtBQUtOLFNBQUwsRUFBVCxDQUFiO0FBQ0EsTUFBTU8sQ0FBQyxHQUFHLEtBQUtDLFFBQUwsRUFBVjtBQUNBLFNBQU8scUJBQU9ILElBQVAsRUFBYUUsQ0FBYixDQUFQO0FBQ0QsQ0FKRDtBQU1BOzs7Ozs7Ozs7Ozs7O0FBV0FsQixNQUFNLENBQUNJLFNBQVAsQ0FBaUJTLE9BQWpCLEdBQTJCLFlBQVk7QUFDckMsU0FBTyxLQUFLWCxPQUFMLENBQWEsQ0FBYixFQUFnQmtCLE1BQXZCO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQXBCLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQmlCLE1BQWpCLEdBQTBCLFVBQVVDLENBQVYsRUFBYTtBQUNyQyxTQUFPLHFCQUFPLEtBQUtwQixPQUFaLEVBQXFCb0IsQ0FBQyxDQUFDcEIsT0FBRixJQUFhb0IsQ0FBbEMsQ0FBUDtBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7Ozs7O0FBVUF0QixNQUFNLENBQUNJLFNBQVAsQ0FBaUJVLE9BQWpCLEdBQTJCLFlBQVk7QUFDckMsU0FBTyxLQUFLWixPQUFMLENBQWFrQixNQUFwQjtBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7Ozs7O0FBVUFwQixNQUFNLENBQUNJLFNBQVAsQ0FBaUJtQixRQUFqQixHQUE0QixZQUFZO0FBQ3RDLFNBQU8sQ0FBQyxLQUFLVCxPQUFMLEVBQUQsRUFBaUIsS0FBS0QsT0FBTCxFQUFqQixDQUFQO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBY0FiLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQm9CLEdBQWpCLEdBQXVCLFVBQVVDLENBQVYsRUFBYTtBQUNsQyxTQUFPekIsTUFBTSxDQUFDRyxFQUFQLENBQVUsa0JBQUlzQixDQUFKLEVBQU8sS0FBS3ZCLE9BQVosQ0FBVixDQUFQO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBY0FGLE1BQU0sQ0FBQ3dCLEdBQVAsR0FBYSxvQkFBTSxVQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0I7QUFDakMsU0FBT3RCLE1BQU0sQ0FBQ0csRUFBUCxDQUFVbUIsQ0FBVixFQUFhRSxHQUFiLENBQWlCQyxDQUFqQixDQUFQO0FBQ0QsQ0FGWSxDQUFiO0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBYUF6QixNQUFNLENBQUNJLFNBQVAsQ0FBaUJzQixJQUFqQixHQUF3QixVQUFVRCxDQUFWLEVBQWE7QUFDbkMsU0FBT3pCLE1BQU0sQ0FBQ0csRUFBUCxDQUFVLG1CQUFLc0IsQ0FBTCxFQUFRLEVBQVIsRUFBWSxLQUFLdkIsT0FBakIsQ0FBVixDQUFQO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkFGLE1BQU0sQ0FBQzBCLElBQVAsR0FBYyxvQkFBTSxVQUFVRCxDQUFWLEVBQWFILENBQWIsRUFBZ0I7QUFDbEMsU0FBT3RCLE1BQU0sQ0FBQ0csRUFBUCxDQUFVbUIsQ0FBVixFQUFhSSxJQUFiLENBQWtCRCxDQUFsQixDQUFQO0FBQ0QsQ0FGYSxDQUFkO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQWNBekIsTUFBTSxDQUFDSSxTQUFQLENBQWlCdUIsRUFBakIsR0FBc0IsVUFBVUwsQ0FBVixFQUFhO0FBQ2pDLFNBQU90QixNQUFNLENBQUNHLEVBQVAsQ0FBVW1CLENBQVYsRUFBYUUsR0FBYixDQUFpQixLQUFLdEIsT0FBdEIsQ0FBUDtBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQWNBRixNQUFNLENBQUMyQixFQUFQLEdBQVksb0JBQU0sVUFBVUYsQ0FBVixFQUFhSCxDQUFiLEVBQWdCO0FBQ2hDLFNBQU90QixNQUFNLENBQUNHLEVBQVAsQ0FBVXNCLENBQVYsRUFBYUUsRUFBYixDQUFnQkwsQ0FBaEIsQ0FBUDtBQUNELENBRlcsQ0FBWjtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkF0QixNQUFNLENBQUNJLFNBQVAsQ0FBaUJ3QixNQUFqQixHQUEwQixVQUFVTixDQUFWLEVBQXlCO0FBQUEsTUFBWkcsQ0FBWTtBQUNqRCxTQUFPekIsTUFBTSxDQUFDRyxFQUFQLENBQVUsSUFBVixFQUFnQnFCLEdBQWhCLENBQW9CQyxDQUFDLENBQUNILENBQUQsQ0FBckIsQ0FBUDtBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkF0QixNQUFNLENBQUM0QixNQUFQLEdBQWdCLG9CQUFNLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUE0QjtBQUFBLE1BQVpMLENBQVk7QUFDaEQsU0FBT3pCLE1BQU0sQ0FBQ0csRUFBUCxDQUFVMEIsQ0FBVixFQUFhTCxHQUFiLENBQWlCQyxDQUFDLENBQUNLLENBQUQsQ0FBbEIsQ0FBUDtBQUNELENBRmUsQ0FBaEI7QUFJQTs7Ozs7Ozs7QUFPQTlCLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQjJCLEtBQWpCLEdBQXlCLFlBQVk7QUFDbkMsU0FBTy9CLE1BQU0sQ0FBQ0csRUFBUCxDQUFVLElBQVYsRUFBZ0JxQixHQUFoQixnQkFBUDtBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7Ozs7QUFTQXhCLE1BQU0sQ0FBQytCLEtBQVAsR0FBZSxvQkFBTSxZQUE4QjtBQUFBLE1BQXBCQyxJQUFvQix1RUFBYixDQUFhO0FBQUEsTUFBVkMsSUFBVSx1RUFBSCxDQUFHO0FBQ2pELE1BQU1DLENBQUMsR0FBRyx1QkFBU0YsSUFBVCxFQUFlQyxJQUFmLENBQVYsQ0FEaUQsQ0FDbEI7O0FBQy9CLFNBQU9qQyxNQUFNLENBQUNHLEVBQVAsQ0FBVStCLENBQVYsRUFBYVYsR0FBYixnQkFBUDtBQUNELENBSGMsQ0FBZixDLENBS0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQWNBeEIsTUFBTSxDQUFDSSxTQUFQLENBQWlCZSxRQUFqQixHQUE0QixZQUFZO0FBQ3RDLFNBQU9uQixNQUFNLENBQUNHLEVBQVAsb0JBQW9Cd0IsRUFBcEIsQ0FBdUIsSUFBdkIsQ0FBUDtBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUFZQTNCLE1BQU0sQ0FBQ21CLFFBQVAsR0FBa0IsVUFBVWEsSUFBVixFQUFnQkMsSUFBaEIsRUFBc0I7QUFDdEMsTUFBTUMsQ0FBQyxHQUFHLHVCQUFTRixJQUFULEVBQWVDLElBQWYsQ0FBVixDQURzQyxDQUNQOztBQUMvQixTQUFPakMsTUFBTSxDQUFDRyxFQUFQLG9CQUFvQndCLEVBQXBCLENBQXVCTyxDQUF2QixDQUFQO0FBQ0QsQ0FIRDtBQUtBOzs7Ozs7Ozs7O0FBUUFsQyxNQUFNLENBQUNJLFNBQVAsQ0FBaUIrQixPQUFqQixHQUEyQixVQUFVYixDQUFWLEVBQWE7QUFDdEMsU0FBT3RCLE1BQU0sQ0FBQ0csRUFBUCxDQUFVLElBQVYsRUFBZ0J5QixNQUFoQixDQUF1QjVCLE1BQU0sQ0FBQ0csRUFBUCxDQUFVbUIsQ0FBVixDQUF2QixrQkFBUDtBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7OztBQVFBdEIsTUFBTSxDQUFDbUMsT0FBUCxHQUFpQixVQUFVTixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDL0IsU0FBTzlCLE1BQU0sQ0FBQ0csRUFBUCxDQUFVMEIsQ0FBVixFQUFhRCxNQUFiLENBQW9CNUIsTUFBTSxDQUFDRyxFQUFQLENBQVUyQixDQUFWLENBQXBCLGtCQUFQO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTlCLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQmEsR0FBakIsR0FBdUIsVUFBVUssQ0FBVixFQUFhO0FBQ2xDLFNBQU90QixNQUFNLENBQUNHLEVBQVAsQ0FBVSxJQUFWLEVBQWdCeUIsTUFBaEIsQ0FBdUI1QixNQUFNLENBQUNHLEVBQVAsQ0FBVW1CLENBQVYsQ0FBdkIsRUFBcUMsa0JBQUksS0FBS2hCLFNBQVQsQ0FBckMsQ0FBUDtBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQU4sTUFBTSxDQUFDaUIsR0FBUCxHQUFhLFVBQVVZLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUMzQixTQUFPOUIsTUFBTSxDQUFDRyxFQUFQLENBQVUwQixDQUFWLEVBQWFaLEdBQWIsQ0FBaUJqQixNQUFNLENBQUNHLEVBQVAsQ0FBVTJCLENBQVYsQ0FBakIsQ0FBUDtBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUE5QixNQUFNLENBQUNJLFNBQVAsQ0FBaUJnQyxJQUFqQixHQUF3QixVQUFVWCxDQUFWLEVBQWE7QUFDbkMsU0FBT3pCLE1BQU0sQ0FBQ0csRUFBUCxDQUFVLElBQVYsRUFBZ0JxQixHQUFoQixDQUFvQixrQkFBSSxVQUFBYSxDQUFDO0FBQUEsV0FBSVosQ0FBQyxDQUFDWSxDQUFELENBQUw7QUFBQSxHQUFMLENBQXBCLENBQVA7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQWFBckMsTUFBTSxDQUFDSSxTQUFQLENBQWlCa0MsS0FBakIsR0FBeUIsWUFBWTtBQUNuQyxTQUFPdEMsTUFBTSxDQUFDRyxFQUFQLENBQVUsSUFBVixFQUFnQmlDLElBQWhCLENBQXFCLFVBQUFDLENBQUM7QUFBQSxXQUFJLENBQUo7QUFBQSxHQUF0QixDQUFQO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQXJDLE1BQU0sQ0FBQ3NDLEtBQVAsR0FBZSxVQUFVTixJQUFWLEVBQWdCQyxJQUFoQixFQUFzQjtBQUNuQyxNQUFNQyxDQUFDLEdBQUcsdUJBQVNGLElBQVQsRUFBZUMsSUFBZixDQUFWO0FBQ0EsU0FBT2pDLE1BQU0sQ0FBQ0csRUFBUCxDQUFVK0IsQ0FBVixFQUFhRSxJQUFiLENBQWtCLFVBQUFDLENBQUM7QUFBQSxXQUFJLENBQUo7QUFBQSxHQUFuQixDQUFQO0FBQ0QsQ0FIRDtBQUtBOzs7Ozs7Ozs7Ozs7OztBQVlBckMsTUFBTSxDQUFDSSxTQUFQLENBQWlCbUMsSUFBakIsR0FBd0IsWUFBWTtBQUNsQyxTQUFPdkMsTUFBTSxDQUFDRyxFQUFQLENBQVUsSUFBVixFQUFnQmlDLElBQWhCLENBQXFCLFVBQUFDLENBQUM7QUFBQSxXQUFJLENBQUo7QUFBQSxHQUF0QixDQUFQO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQXJDLE1BQU0sQ0FBQ3VDLElBQVAsR0FBYyxVQUFVUCxJQUFWLEVBQWdCQyxJQUFoQixFQUFzQjtBQUNsQyxNQUFNQyxDQUFDLEdBQUcsdUJBQVNGLElBQVQsRUFBZUMsSUFBZixDQUFWO0FBQ0EsU0FBT2pDLE1BQU0sQ0FBQ0csRUFBUCxDQUFVK0IsQ0FBVixFQUFhRSxJQUFiLENBQWtCLFVBQUFDLENBQUM7QUFBQSxXQUFJLENBQUo7QUFBQSxHQUFuQixDQUFQO0FBQ0QsQ0FIRDtBQUtBOzs7Ozs7Ozs7O0FBUUFyQyxNQUFNLENBQUNJLFNBQVAsQ0FBaUJvQyxNQUFqQixHQUEwQixZQUEwQztBQUFBLE1BQWhDZixDQUFnQyx1RUFBNUIsVUFBQWdCLENBQUM7QUFBQSxXQUFJQyxJQUFJLENBQUNGLE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBeEI7QUFBQSxHQUEyQjtBQUNsRSxTQUFPeEMsTUFBTSxDQUFDRyxFQUFQLENBQVUsSUFBVixFQUFnQmlDLElBQWhCLENBQXFCWCxDQUFyQixDQUFQO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7Ozs7OztBQVNBekIsTUFBTSxDQUFDd0MsTUFBUCxHQUFnQixZQUF3RDtBQUFBLE1BQTlDZixDQUE4Qyx1RUFBMUMsVUFBQWdCLENBQUM7QUFBQSxXQUFLQyxJQUFJLENBQUNGLE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBekI7QUFBQSxHQUF5QztBQUFBLE1BQVpSLElBQVk7QUFBQSxNQUFOQyxJQUFNO0FBQ3RFLE1BQU1DLENBQUMsR0FBRyx1QkFBU0YsSUFBVCxFQUFlQyxJQUFmLENBQVY7QUFDQSxTQUFPakMsTUFBTSxDQUFDRyxFQUFQLENBQVUrQixDQUFWLEVBQWFFLElBQWIsQ0FBa0JYLENBQWxCLENBQVA7QUFDRCxDQUhEO0FBS0E7Ozs7Ozs7OztBQU9BekIsTUFBTSxDQUFDSSxTQUFQLENBQWlCdUMsT0FBakIsR0FBMkIsWUFBWTtBQUNyQyxTQUFPLEtBQUt6QyxPQUFMLENBQWFzQixHQUFiLENBQWlCLFVBQUFvQixHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDcEIsR0FBSixDQUFRLFVBQUFxQixHQUFHO0FBQUEsYUFBSUEsR0FBSjtBQUFBLEtBQVgsQ0FBSjtBQUFBLEdBQXBCLENBQVA7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7OztBQU9BN0MsTUFBTSxDQUFDSSxTQUFQLENBQWlCMEMsS0FBakIsR0FBeUIsWUFBWTtBQUNuQyxTQUFPOUMsTUFBTSxDQUFDK0MsU0FBUCxDQUFpQixLQUFLN0MsT0FBdEIsQ0FBUDtBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7O0FBT0FGLE1BQU0sQ0FBQytDLFNBQVAsR0FBbUIsVUFBVUMsR0FBVixFQUFlO0FBQ2hDLFNBQU9oRCxNQUFNLENBQUNHLEVBQVAsQ0FBVSxrQkFBSSxVQUFBeUMsR0FBRztBQUFBLFdBQUksa0JBQUksVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUo7QUFBQSxLQUFQLEVBQWdCRCxHQUFoQixDQUFKO0FBQUEsR0FBUCxFQUFpQ0ksR0FBakMsQ0FBVixDQUFQO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7Ozs7Ozs7OztBQVlBaEQsTUFBTSxDQUFDSSxTQUFQLENBQWlCTyxTQUFqQixHQUE2QixZQUFZO0FBQ3ZDLFNBQU9YLE1BQU0sQ0FBQ0csRUFBUCxDQUFVLHVDQUFnQixFQUFoQixFQUFvQixLQUFLRCxPQUF6QixDQUFWLENBQVA7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBWUFGLE1BQU0sQ0FBQ1csU0FBUCxHQUFtQixVQUFVVyxDQUFWLEVBQWE7QUFDOUIsU0FBT3RCLE1BQU0sQ0FBQ0csRUFBUCxDQUFVbUIsQ0FBVixFQUFhWCxTQUFiLEVBQVA7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQVgsTUFBTSxDQUFDSSxTQUFQLENBQWlCNkMsR0FBakIsR0FBdUIsVUFBVTNCLENBQVYsRUFBYTtBQUNsQyxNQUFJQSxDQUFDLFlBQVl0QixNQUFqQixFQUF5QjtBQUN2QixRQUFJLEtBQUthLE9BQUwsT0FBbUJTLENBQUMsQ0FBQ1QsT0FBRixFQUFuQixJQUFrQyxLQUFLQyxPQUFMLE9BQW1CUSxDQUFDLENBQUNSLE9BQUYsRUFBekQsRUFBc0U7QUFDcEUsWUFBTSxJQUFJb0MsS0FBSixDQUFVLG1DQUFWLENBQU47QUFDRDs7QUFDRCxXQUFPLEtBQUsxQixHQUFMLENBQVMsVUFBQ29CLEdBQUQsRUFBTU8sR0FBTjtBQUFBLGFBQWMsa0JBQUksVUFBQ2xELEdBQUQsRUFBTW1ELEdBQU47QUFBQSxlQUFjbkQsR0FBRyxHQUFHcUIsQ0FBQyxDQUFDcEIsT0FBRixDQUFVaUQsR0FBVixFQUFlQyxHQUFmLENBQXBCO0FBQUEsT0FBSixFQUE2Q1IsR0FBN0MsQ0FBZDtBQUFBLEtBQVQsQ0FBUDtBQUNELEdBTEQsTUFLTztBQUNMLFdBQU8sS0FBS3BCLEdBQUwsQ0FBUyxrQkFBSSxVQUFBYSxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxHQUFHZixDQUFSO0FBQUEsS0FBTCxDQUFULENBQVA7QUFDRDtBQUNGLENBVEQ7QUFXQTs7Ozs7Ozs7Ozs7Ozs7OztBQWNBdEIsTUFBTSxDQUFDSSxTQUFQLENBQWlCaUQsUUFBakIsR0FBNEIsVUFBVS9CLENBQVYsRUFBYTtBQUN2QyxNQUFJQSxDQUFDLFlBQVl0QixNQUFqQixFQUF5QjtBQUN2QixRQUFJLEtBQUthLE9BQUwsT0FBbUJTLENBQUMsQ0FBQ1QsT0FBRixFQUFuQixJQUFrQyxLQUFLQyxPQUFMLE9BQW1CUSxDQUFDLENBQUNSLE9BQUYsRUFBekQsRUFBc0U7QUFDcEUsWUFBTSxJQUFJb0MsS0FBSixDQUFVLHdDQUFWLENBQU47QUFDRDs7QUFDRCxXQUFPLEtBQUsxQixHQUFMLENBQVMsVUFBQ29CLEdBQUQsRUFBTU8sR0FBTjtBQUFBLGFBQWMsa0JBQUksVUFBQ2xELEdBQUQsRUFBTW1ELEdBQU47QUFBQSxlQUFjbkQsR0FBRyxHQUFHcUIsQ0FBQyxDQUFDcEIsT0FBRixDQUFVaUQsR0FBVixFQUFlQyxHQUFmLENBQXBCO0FBQUEsT0FBSixFQUE2Q1IsR0FBN0MsQ0FBZDtBQUFBLEtBQVQsQ0FBUDtBQUNELEdBTEQsTUFLTztBQUNMLFdBQU8sS0FBS3BCLEdBQUwsQ0FBUyxrQkFBSSxVQUFBYSxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxHQUFHZixDQUFSO0FBQUEsS0FBTCxDQUFULENBQVA7QUFDRDtBQUNGLENBVEQ7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQXRCLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQmtELFFBQWpCLEdBQTRCLFVBQVVoQyxDQUFWLEVBQWE7QUFDdkMsTUFBSUEsQ0FBQyxZQUFZdEIsTUFBakIsRUFBeUI7QUFDdkIsUUFBSSxLQUFLYSxPQUFMLE9BQW1CUyxDQUFDLENBQUNULE9BQUYsRUFBbkIsSUFBa0MsS0FBS0MsT0FBTCxPQUFtQlEsQ0FBQyxDQUFDUixPQUFGLEVBQXpELEVBQXNFO0FBQ3BFeUMsYUFBTyxDQUFDQyxHQUFSLENBQVksdURBQVo7QUFDQSxZQUFNLElBQUlOLEtBQUosQ0FBVSx1REFBVixDQUFOO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFLMUIsR0FBTCxDQUFTLFVBQUNvQixHQUFELEVBQU1PLEdBQU47QUFBQSxhQUFjLGtCQUFJLFVBQUNOLEdBQUQsRUFBTU8sR0FBTjtBQUFBLGVBQWNQLEdBQUcsR0FBR3ZCLENBQUMsQ0FBQ3BCLE9BQUYsQ0FBVWlELEdBQVYsRUFBZUMsR0FBZixDQUFwQjtBQUFBLE9BQUosRUFBNkNSLEdBQTdDLENBQWQ7QUFBQSxLQUFULENBQVA7QUFDRCxHQU5ELE1BTU87QUFDTCxXQUFPLEtBQUtwQixHQUFMLENBQVMsa0JBQUksVUFBQWEsQ0FBQztBQUFBLGFBQUlBLENBQUMsR0FBR2YsQ0FBUjtBQUFBLEtBQUwsQ0FBVCxDQUFQO0FBQ0Q7QUFDRixDQVZEO0FBWUE7Ozs7Ozs7Ozs7Ozs7O0FBWUF0QixNQUFNLENBQUNJLFNBQVAsQ0FBaUJxRCxlQUFqQixHQUFtQyxZQUFZO0FBQzdDLFNBQU96RCxNQUFNLENBQUNHLEVBQVAsQ0FBVSxJQUFWLEVBQWdCbUQsUUFBaEIsQ0FBeUIsQ0FBQyxDQUExQixDQUFQO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBdEQsTUFBTSxDQUFDSSxTQUFQLENBQWlCc0QsUUFBakIsR0FBNEIsVUFBVXBDLENBQVYsRUFBYTtBQUN2QyxTQUFPdEIsTUFBTSxDQUFDRyxFQUFQLENBQVUsSUFBVixFQUFnQm1ELFFBQWhCLENBQXlCaEMsQ0FBekIsQ0FBUDtBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBdEIsTUFBTSxDQUFDSSxTQUFQLENBQWlCdUQsRUFBakIsR0FBc0IsWUFBWTtBQUNoQyxNQUFNQyxDQUFDLEdBQUcsS0FBSzlDLE9BQUwsRUFBVjtBQUNBLE1BQU0rQyxHQUFHLEdBQUcsSUFBWjtBQUNBLE1BQU1oQyxDQUFDLEdBQUcsS0FBS2lCLEtBQUwsRUFBVjtBQUNBLE1BQU1nQixDQUFDLEdBQUcsS0FBS3hCLEtBQUwsRUFBVjtBQUNBLE1BQU15QixDQUFDLEdBQUcsS0FBS3pCLEtBQUwsRUFBVjs7QUFFQSxPQUFLLElBQUkwQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixDQUFwQixFQUF1QixFQUFFSSxDQUF6QixFQUE0QjtBQUMxQixRQUFJdEIsSUFBSSxDQUFDdUIsR0FBTCxDQUFTcEMsQ0FBQyxDQUFDM0IsT0FBRixDQUFVOEQsQ0FBVixFQUFhQSxDQUFiLENBQVQsSUFBNEJILEdBQWhDLEVBQXFDLE1BQU1YLEtBQUssQ0FBQyx1Q0FBRCxDQUFYO0FBQ3JDWSxLQUFDLENBQUM1RCxPQUFGLENBQVU4RCxDQUFWLEVBQWFBLENBQWIsSUFBa0IsQ0FBbEI7O0FBQ0EsU0FBSyxJQUFJRSxDQUFDLEdBQUdGLENBQUMsR0FBRyxDQUFqQixFQUFvQkUsQ0FBQyxHQUFHTixDQUF4QixFQUEyQixFQUFFTSxDQUE3QixFQUFnQztBQUM5QkosT0FBQyxDQUFDNUQsT0FBRixDQUFVZ0UsQ0FBVixFQUFhRixDQUFiLElBQWtCbkMsQ0FBQyxDQUFDM0IsT0FBRixDQUFVZ0UsQ0FBVixFQUFhRixDQUFiLElBQWtCbkMsQ0FBQyxDQUFDM0IsT0FBRixDQUFVOEQsQ0FBVixFQUFhQSxDQUFiLENBQXBDOztBQUNBLFdBQUssSUFBSUcsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBakIsRUFBb0JHLENBQUMsR0FBR1AsQ0FBeEIsRUFBMkIsRUFBRU8sQ0FBN0IsRUFBZ0M7QUFDOUJ0QyxTQUFDLENBQUMzQixPQUFGLENBQVVnRSxDQUFWLEVBQWFDLENBQWIsSUFBa0J0QyxDQUFDLENBQUMzQixPQUFGLENBQVVnRSxDQUFWLEVBQWFDLENBQWIsSUFBa0JMLENBQUMsQ0FBQzVELE9BQUYsQ0FBVWdFLENBQVYsRUFBYUYsQ0FBYixJQUFrQm5DLENBQUMsQ0FBQzNCLE9BQUYsQ0FBVThELENBQVYsRUFBYUcsQ0FBYixDQUF0RDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBSyxJQUFJQyxDQUFDLEdBQUdKLENBQWIsRUFBZ0JJLENBQUMsR0FBR1IsQ0FBcEIsRUFBdUIsRUFBRVEsQ0FBekIsRUFBNEI7QUFDMUJMLE9BQUMsQ0FBQzdELE9BQUYsQ0FBVThELENBQVYsRUFBYUksQ0FBYixJQUFrQnZDLENBQUMsQ0FBQzNCLE9BQUYsQ0FBVThELENBQVYsRUFBYUksQ0FBYixDQUFsQjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxDQUFDTixDQUFELEVBQUlDLENBQUosQ0FBUDtBQUNELENBckJEO0FBdUJBOzs7Ozs7Ozs7Ozs7QUFVQS9ELE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQmlFLElBQWpCLEdBQXdCLFlBQVk7QUFDbEMsTUFBSUMsSUFBSSxHQUFHLENBQVg7QUFDQSxNQUFNQyxZQUFZLEdBQUcsS0FBS3pCLEtBQUwsRUFBckI7O0FBRUEsT0FBSyxJQUFJMEIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMUQsT0FBTCxFQUFwQixFQUFvQyxFQUFFMEQsQ0FBdEMsRUFBeUM7QUFDdkMsUUFBSSxLQUFLM0QsT0FBTCxNQUFrQnlELElBQXRCLEVBQTRCO0FBQzFCLGFBQU9DLFlBQVA7QUFDRDs7QUFDRCxRQUFJTCxDQUFDLEdBQUdNLENBQVI7O0FBQ0EsV0FBT0QsWUFBWSxDQUFDckUsT0FBYixDQUFxQmdFLENBQXJCLEVBQXdCSSxJQUF4QixNQUFrQyxDQUF6QyxFQUE0QztBQUMxQyxRQUFFSixDQUFGOztBQUNBLFVBQUksS0FBS3BELE9BQUwsT0FBbUJvRCxDQUF2QixFQUEwQjtBQUN4QkEsU0FBQyxHQUFHTSxDQUFKO0FBQ0EsVUFBRUYsSUFBRjs7QUFDQSxZQUFJLEtBQUt6RCxPQUFMLE9BQW1CeUQsSUFBdkIsRUFBNkI7QUFDM0IsaUJBQU9DLFlBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsUUFBSUUsR0FBRyxHQUFHRixZQUFZLENBQUNyRSxPQUFiLENBQXFCZ0UsQ0FBckIsQ0FBVjtBQUNBSyxnQkFBWSxDQUFDckUsT0FBYixDQUFxQmdFLENBQXJCLElBQTBCSyxZQUFZLENBQUNyRSxPQUFiLENBQXFCc0UsQ0FBckIsQ0FBMUI7QUFDQUQsZ0JBQVksQ0FBQ3JFLE9BQWIsQ0FBcUJzRSxDQUFyQixJQUEwQkMsR0FBMUI7QUFFQSxRQUFJeEUsR0FBRyxHQUFHc0UsWUFBWSxDQUFDckUsT0FBYixDQUFxQnNFLENBQXJCLEVBQXdCRixJQUF4QixDQUFWOztBQUNBLFNBQUssSUFBSUgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLdEQsT0FBTCxFQUFwQixFQUFvQyxFQUFFc0QsQ0FBdEMsRUFBeUM7QUFDdkNJLGtCQUFZLENBQUNyRSxPQUFiLENBQXFCc0UsQ0FBckIsRUFBd0JMLENBQXhCLEtBQThCbEUsR0FBOUI7QUFDRDs7QUFFRCxTQUFLLElBQUlpRSxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHLEtBQUtwRCxPQUFMLEVBQXBCLEVBQW9DLEVBQUVvRCxFQUF0QyxFQUF5QztBQUN2QyxVQUFJQSxFQUFDLEtBQUtNLENBQVYsRUFBYTtBQUNidkUsU0FBRyxHQUFHc0UsWUFBWSxDQUFDckUsT0FBYixDQUFxQmdFLEVBQXJCLEVBQXdCSSxJQUF4QixDQUFOOztBQUNBLFdBQUssSUFBSUgsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRyxLQUFLdEQsT0FBTCxFQUFwQixFQUFvQyxFQUFFc0QsRUFBdEMsRUFBeUM7QUFDdkNJLG9CQUFZLENBQUNyRSxPQUFiLENBQXFCZ0UsRUFBckIsRUFBd0JDLEVBQXhCLEtBQThCbEUsR0FBRyxHQUFHc0UsWUFBWSxDQUFDckUsT0FBYixDQUFxQnNFLENBQXJCLEVBQXdCTCxFQUF4QixDQUFwQztBQUNEO0FBQ0Y7O0FBQ0RHLFFBQUk7QUFDTDs7QUFDRCxTQUFPQyxZQUFQO0FBQ0QsQ0F2Q0Q7QUF5Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQXZFLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQnNFLEtBQWpCLEdBQXlCLFVBQVVoRSxDQUFWLEVBQWE7QUFDcEMsTUFBTW1CLENBQUMsR0FBRyxLQUFLaUIsS0FBTCxFQUFWO0FBQ0EsTUFBTTZCLEVBQUUsR0FBRzlDLENBQUMsQ0FBQzhCLEVBQUYsRUFBWDtBQUNBLE1BQU1HLENBQUMsR0FBR2EsRUFBRSxDQUFDLENBQUQsQ0FBWjtBQUNBLE1BQU1aLENBQUMsR0FBR1ksRUFBRSxDQUFDLENBQUQsQ0FBWjtBQUNBLE1BQU1mLENBQUMsR0FBRyxLQUFLOUMsT0FBTCxFQUFWO0FBQ0EsTUFBSThELENBQUMsR0FBRyxDQUFSO0FBQ0EsTUFBTUMsQ0FBQyxHQUFHLEVBQVY7QUFDQSxNQUFNeEMsQ0FBQyxHQUFHLEVBQVY7O0FBRUEsT0FBSyxJQUFJMkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osQ0FBcEIsRUFBdUIsRUFBRUksQ0FBekIsRUFBNEI7QUFDMUIsU0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxDQUFwQixFQUF1QixFQUFFRyxDQUF6QixFQUE0QjtBQUMxQlMsT0FBQyxHQUFHQSxDQUFDLEdBQUdkLENBQUMsQ0FBQzVELE9BQUYsQ0FBVThELENBQVYsRUFBYUcsQ0FBYixJQUFrQlUsQ0FBQyxDQUFDVixDQUFELENBQTNCO0FBQ0Q7O0FBQ0RVLEtBQUMsQ0FBQ2IsQ0FBRCxDQUFELEdBQU90RCxDQUFDLENBQUNzRCxDQUFELENBQUQsR0FBT1ksQ0FBZDtBQUNBQSxLQUFDLEdBQUcsQ0FBSjtBQUNEOztBQUNELE9BQUssSUFBSW5FLENBQUMsR0FBR21ELENBQUMsR0FBRyxDQUFqQixFQUFvQm5ELENBQUMsR0FBRyxDQUFDLENBQXpCLEVBQTRCLEVBQUVBLENBQTlCLEVBQWlDO0FBQy9CLFFBQUlxRSxDQUFDLEdBQUcsQ0FBUjs7QUFDQSxTQUFLLElBQUlwRSxFQUFDLEdBQUdELENBQUMsR0FBRyxDQUFqQixFQUFvQkMsRUFBQyxHQUFHa0QsQ0FBeEIsRUFBMkIsRUFBRWxELEVBQTdCLEVBQWdDO0FBQzlCb0UsT0FBQyxHQUFHQSxDQUFDLEdBQUdmLENBQUMsQ0FBQzdELE9BQUYsQ0FBVU8sQ0FBVixFQUFhQyxFQUFiLElBQWtCMkIsQ0FBQyxDQUFDM0IsRUFBRCxDQUEzQjtBQUNEOztBQUNEMkIsS0FBQyxDQUFDNUIsQ0FBRCxDQUFELEdBQU8sQ0FBQ29FLENBQUMsQ0FBQ3BFLENBQUQsQ0FBRCxHQUFPcUUsQ0FBUixJQUFhZixDQUFDLENBQUM3RCxPQUFGLENBQVVPLENBQVYsRUFBYUEsQ0FBYixDQUFwQjtBQUNEOztBQUNELFNBQU80QixDQUFQO0FBQ0QsQ0F6QkQ7QUEyQkE7Ozs7Ozs7Ozs7Ozs7QUFXQXJDLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQjJFLE9BQWpCLEdBQTJCLFlBQVk7QUFDckMsTUFBTWxELENBQUMsR0FBRyxLQUFLaUIsS0FBTCxFQUFWO0FBQ0EsTUFBTTVCLENBQUMsR0FBR1csQ0FBQyxDQUFDVixRQUFGLEVBQVY7QUFDQSxNQUFNNkQsR0FBRyxHQUFHbkQsQ0FBQyxDQUFDRCxNQUFGLENBQVNWLENBQVQsRUFBWW1ELElBQVosRUFBWjs7QUFFQSxNQUFNWSxNQUFNLEdBQUdELEdBQUcsQ0FBQzlFLE9BQUosQ0FBWWdGLE1BQVosQ0FBbUIsVUFBQ0QsTUFBRCxFQUFTNUMsQ0FBVCxFQUFZYyxHQUFaLEVBQW9CO0FBQ3BELFFBQU1nQyxJQUFJLEdBQUc5QyxDQUFDLENBQUNqQixNQUFGLEdBQVcsQ0FBeEI7QUFDQTZELFVBQU0sQ0FBQ0csSUFBUCxDQUFZL0MsQ0FBQyxDQUFDZ0QsS0FBRixDQUFRRixJQUFSLEVBQWM5QyxDQUFDLENBQUNqQixNQUFoQixDQUFaO0FBQ0EsV0FBTzZELE1BQVA7QUFDRCxHQUpjLEVBSVosRUFKWSxDQUFmOztBQUtBLFNBQU9qRixNQUFNLENBQUNHLEVBQVAsQ0FBVThFLE1BQVYsQ0FBUDtBQUNELENBWEQ7QUFhQTs7Ozs7Ozs7QUFNQWpGLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQmtGLElBQWpCLEdBQXdCLFlBQVk7QUFDbEMsTUFBTWpCLElBQUksR0FBRyxLQUFLQSxJQUFMLEVBQWI7QUFDQSxNQUFJWSxNQUFNLEdBQUcsQ0FBYjs7QUFDQSxPQUFLLElBQUlmLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdHLElBQUksQ0FBQ3hELE9BQUwsRUFBcEIsRUFBb0MsRUFBRXFELENBQXRDLEVBQXlDO0FBQ3ZDZSxVQUFNLElBQUlaLElBQUksQ0FBQ25FLE9BQUwsQ0FBYWdFLENBQWIsRUFBZ0JBLENBQWhCLENBQVY7QUFDRDs7QUFDRCxTQUFPZSxNQUFQO0FBQ0QsQ0FQRDtBQVNBOzs7Ozs7Ozs7QUFPQWpGLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQm1GLFNBQWpCLEdBQTZCLFlBQVk7QUFDdkMsU0FBTyxLQUFLRCxJQUFMLEVBQVA7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUF0RixNQUFNLENBQUNJLFNBQVAsQ0FBaUJvRixJQUFqQixHQUF3QixZQUFZO0FBQ2xDLFNBQU8sbUJBQUssVUFBQ0MsR0FBRCxFQUFNcEQsQ0FBTixFQUFTYyxHQUFULEVBQWlCO0FBQzNCLFdBQU9zQyxHQUFHLENBQUM3RCxNQUFKLENBQVdTLENBQUMsQ0FBQ2MsR0FBRCxDQUFaLENBQVA7QUFDRCxHQUZNLEVBRUosRUFGSSxFQUVBLEtBQUtqRCxPQUZMLENBQVA7QUFHRCxDQUpEO0FBTUE7Ozs7Ozs7Ozs7Ozs7O0FBWUFGLE1BQU0sQ0FBQ3dGLElBQVAsR0FBYyxVQUFVbEUsQ0FBVixFQUFhO0FBQ3pCLFNBQU90QixNQUFNLENBQUNHLEVBQVAsQ0FBVW1CLENBQVYsRUFBYWtFLElBQWIsRUFBUDtBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQXhGLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQnNGLFdBQWpCLEdBQStCLFlBQVk7QUFDekMsU0FBTyxtQkFBSyxVQUFDRCxHQUFELEVBQU1wRCxDQUFOLEVBQVNjLEdBQVQsRUFBaUI7QUFDM0JzQyxPQUFHLElBQUlwRCxDQUFDLENBQUNjLEdBQUQsQ0FBUjtBQUNBLFdBQU9zQyxHQUFQO0FBQ0QsR0FITSxFQUdKLENBSEksRUFHRCxLQUFLdkYsT0FISixDQUFQO0FBSUQsQ0FMRDtBQU9BOzs7Ozs7Ozs7Ozs7OztBQVlBRixNQUFNLENBQUMwRixXQUFQLEdBQXFCLFVBQVVwRSxDQUFWLEVBQWE7QUFDaEMsU0FBT3RCLE1BQU0sQ0FBQ0csRUFBUCxDQUFVbUIsQ0FBVixFQUFhb0UsV0FBYixFQUFQO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBMUYsTUFBTSxDQUFDSSxTQUFQLENBQWlCdUYsR0FBakIsR0FBdUIsWUFBWTtBQUNqQyxTQUFPLG1CQUFLLFVBQUNGLEdBQUQsRUFBTXBELENBQU4sRUFBWTtBQUN0Qm9ELE9BQUcsSUFBSSxtQkFBSyxVQUFDRyxJQUFELEVBQU9DLElBQVA7QUFBQSxhQUFnQkQsSUFBSSxHQUFHQyxJQUF2QjtBQUFBLEtBQUwsRUFBa0MsQ0FBbEMsRUFBcUN4RCxDQUFyQyxDQUFQO0FBQ0EsV0FBT29ELEdBQVA7QUFDRCxHQUhNLEVBR0osQ0FISSxFQUdELEtBQUt2RixPQUhKLENBQVA7QUFJRCxDQUxEO0FBT0E7Ozs7Ozs7Ozs7Ozs7O0FBWUFGLE1BQU0sQ0FBQzJGLEdBQVAsR0FBYSxVQUFVckUsQ0FBVixFQUFhO0FBQ3hCLFNBQU90QixNQUFNLENBQUNHLEVBQVAsQ0FBVW1CLENBQVYsRUFBYXFFLEdBQWIsRUFBUDtBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7OztBQVFBM0YsTUFBTSxDQUFDSSxTQUFQLENBQWlCMEYsU0FBakIsR0FBNkIsVUFBVXhFLENBQVYsRUFBYTtBQUN4QyxNQUFNWSxDQUFDLEdBQUcsS0FBS3BCLE9BQUwsRUFBVjtBQUNBLE1BQU04QyxDQUFDLEdBQUcsS0FBSy9DLE9BQUwsRUFBVjtBQUNBLE1BQU1rRixDQUFDLEdBQUd6RSxDQUFDLENBQUNSLE9BQUYsRUFBVjtBQUNBLE1BQU1rRixDQUFDLEdBQUcxRSxDQUFDLENBQUNULE9BQUYsRUFBVjtBQUVBLE1BQU1vRixJQUFJLEdBQUcsS0FBSy9GLE9BQWxCO0FBQ0EsTUFBTWdHLEtBQUssR0FBRzVFLENBQUMsQ0FBQ3BCLE9BQWhCO0FBRUEsTUFBTWlHLEtBQUssR0FBRyx1QkFBU2pFLENBQUMsR0FBRzZELENBQWIsRUFBZ0JuQyxDQUFDLEdBQUdvQyxDQUFwQixDQUFkOztBQUVBLE9BQUssSUFBSTlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdoQyxDQUFwQixFQUF1QmdDLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUCxDQUFwQixFQUF1Qk8sQ0FBQyxFQUF4QixFQUE0QjtBQUMxQixXQUFLLElBQUlILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcrQixDQUFwQixFQUF1Qi9CLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIsYUFBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNEIsQ0FBcEIsRUFBdUI1QixDQUFDLEVBQXhCLEVBQTRCO0FBQzFCK0IsZUFBSyxDQUFDSixDQUFDLEdBQUc3QixDQUFKLEdBQVFGLENBQVQsQ0FBTCxDQUFpQmdDLENBQUMsR0FBRzdCLENBQUosR0FBUUMsQ0FBekIsSUFBOEI2QixJQUFJLENBQUMvQixDQUFELENBQUosQ0FBUUMsQ0FBUixJQUFhK0IsS0FBSyxDQUFDbEMsQ0FBRCxDQUFMLENBQVNJLENBQVQsQ0FBM0M7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPcEUsTUFBTSxDQUFDRyxFQUFQLENBQVVnRyxLQUFWLENBQVA7QUFDRCxDQXRCRDtBQXdCQTs7Ozs7Ozs7OztBQVFBbkcsTUFBTSxDQUFDOEYsU0FBUCxHQUFtQixVQUFVakUsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ2pDLFNBQU85QixNQUFNLENBQUNHLEVBQVAsQ0FBVTBCLENBQVYsRUFBYWlFLFNBQWIsQ0FBdUJoRSxDQUF2QixDQUFQO0FBQ0QsQ0FGRDs7ZUFJZTlCLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFsQ2Y7O0FBRUE7Ozs7Ozs7ZUFPZSxnQkFBTSxVQUFVc0IsQ0FBVixFQUFhWSxDQUFiLEVBQWdCaUIsR0FBaEIsRUFBcUI7QUFDeEMsU0FBTyxpQkFBT2pCLENBQVAsRUFBVVosQ0FBQyxDQUFDcEIsT0FBRixDQUFVaUQsR0FBVixDQUFWLENBQVA7QUFDRCxDQUZjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZjs7QUFDQTs7OztBQUVBOzs7Ozs7ZUFNZSxnQkFBTSxVQUFDaUQsUUFBRCxFQUFXdEUsQ0FBWCxFQUFjckIsQ0FBZDtBQUFBLFNBQW9CLGNBQUksVUFBQzRGLElBQUQsRUFBT25DLENBQVAsRUFBYTtBQUN4RCxXQUFPLGVBQUssVUFBQ3VCLEdBQUQsRUFBTXBELENBQU4sRUFBUzhCLENBQVQsRUFBZTtBQUN6QnNCLFNBQUcsSUFBSSxvQkFBTXBELENBQUMsR0FBR1AsQ0FBQyxDQUFDNUIsT0FBRixDQUFVaUUsQ0FBVixFQUFhRCxDQUFiLENBQVYsRUFBMkJrQyxRQUEzQixDQUFQO0FBQ0EsYUFBT1gsR0FBUDtBQUNELEtBSE0sRUFHSixDQUhJLEVBR0RoRixDQUhDLENBQVA7QUFJRCxHQUx3QyxFQUt0Q3FCLENBQUMsQ0FBQzVCLE9BQUYsQ0FBVSxDQUFWLENBTHNDLENBQXBCO0FBQUEsQ0FBTixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVGY7O2VBQ2UsZ0JBQU0sVUFBQWdDLENBQUM7QUFBQSxTQUFJLEVBQUo7QUFBQSxDQUFQLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEZjs7QUFFQTs7Ozs7OztlQU9lLGtCQUFDRixJQUFELEVBQXVDO0FBQUEsTUFBaENDLElBQWdDLHVFQUF6QnFFLFNBQXlCO0FBQUEsTUFBZEMsS0FBYyx1RUFBTixDQUFNOztBQUNwRCxNQUFNQyxLQUFLLEdBQUd2RSxJQUFJLElBQUlELElBQXRCOztBQUNBLE1BQU15RSxDQUFDLEdBQUcsY0FBSSxVQUFBQyxDQUFDO0FBQUEsV0FBSUgsS0FBSjtBQUFBLEdBQUwsRUFBZ0IsSUFBSUksS0FBSixDQUFVSCxLQUFWLENBQWhCLENBQVY7QUFDQSxTQUFPLGNBQUksVUFBQUUsQ0FBQztBQUFBLFdBQUlELENBQUo7QUFBQSxHQUFMLEVBQVksSUFBSUUsS0FBSixDQUFVM0UsSUFBVixDQUFaLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7O0FBRUE7Ozs7Ozs7ZUFPZSxrQkFBQ0UsQ0FBRCxFQUFJaUIsR0FBSjtBQUFBLFNBQVksY0FBSSxVQUFDbkIsSUFBRCxFQUFPb0IsR0FBUDtBQUFBLFdBQWUsQ0FBQ0QsR0FBRyxLQUFLQyxHQUFULElBQWdCLENBQS9CO0FBQUEsR0FBSixFQUFzQ2xCLENBQXRDLENBQVo7QUFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVGY7Ozs7OztBQU1lLFNBQVMwRSxLQUFULENBQWdCTCxLQUFoQixFQUF1QkgsUUFBdkIsRUFBaUM7QUFDOUMsU0FBT1MsTUFBTSxDQUFDbkUsSUFBSSxDQUFDa0UsS0FBTCxDQUFXTCxLQUFLLEdBQUcsR0FBUixHQUFjSCxRQUF6QixJQUFxQyxJQUFyQyxHQUE0Q0EsUUFBN0MsQ0FBYjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRDs7QUFFQTs7Ozs7OztlQU9lLGdCQUFNLFVBQUNSLElBQUQsRUFBT0MsSUFBUDtBQUFBLFNBQWdCLGNBQUksVUFBQ1EsSUFBRCxFQUFPbkMsQ0FBUDtBQUFBLFdBQWEsQ0FBQzBCLElBQUksQ0FBQzFCLENBQUQsQ0FBSixJQUFXLEVBQVosRUFBZ0J0QyxNQUFoQixDQUF1QmlFLElBQUksQ0FBQzNCLENBQUQsQ0FBM0IsQ0FBYjtBQUFBLEdBQUosRUFBa0QyQixJQUFsRCxDQUFoQjtBQUFBLENBQU4sQyIsImZpbGUiOiJAYXN0dWFuYXgvZnVubWF0cml4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAYXN0dWFuYXgvZnVubWF0cml4XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBhc3R1YW5heC9mdW5tYXRyaXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGFzdHVhbmF4L2Z1bm1hdHJpeFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqIFJldHVybnMgYSBjdXJyaWVkIGZ1bmN0aW9uIHdpdGggYXJpdHkgMVxuICogQGZ1bmN0aW9uIGN1cnJ5MVxuICogQHByaXZhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkxIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY3VycmllZCAoYSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAwXG4gICAgICA/IHRoaXNcbiAgICAgIDogZm4oYSlcbiAgfVxufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gYWRkSW5kZXhcbiAqIEBzdW1tYXJ5IEFkZHMgYSBzcGVjaWZpZWQgaW5kZXggdG8gaXRlcmF0ZSBhIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBUaGUgYWRkSW5kZXggZnVuY3Rpb24gaXMgbm90bmVjZXNzYXJ5IGZvciB0aGUgbWFwIGZ1bmN0aW9ucyBpbiB0aGUgZnVuLmpzIGxpYnJhcnkgYXMgdGhleSBiZWhhdmUgdGhlIHNhLGUgYXMgdGhlIG5hdGl2ZSBqYXZhc2NyaXB0IGZ1bmN0aW9uc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZiBJdGVyYXRvciBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZyBGdW5jdGlvbiB0byB3aGljaCB0byBhZGQgdGhlIGluZGV4XG4gKiBAcGFyYW0ge0FycmF5fSBhIFRoZSBhcnJheSBvbiB3aGljaCB0byB3b3JrXG4gKiBAc2luY2UgMS4wLjJcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkZEluZGV4IChmLCBnLCBhKSB7XG4gIGxldCBpID0gMFxuICByZXR1cm4gZihcbiAgICBmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIGcodiwgaSsrKVxuICAgIH0sXG4gICAgYVxuICApXG59KVxuIiwiLyoqXG4gKiBNb2RpZmllcyBhbiBpdGVtIGluIGFuIGFycmF5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvbiBhZGp1c3RcbiAqIEBkZXNjcmlwdGlvbiBNb2RpZmllcyBhbiBpdGVtIGluIGFuIGFycmF5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoYSAtPiBhKSAtPiBudW0gLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSB0byBtb2RpZnkgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICogQHBhcmFtIHtOdW1iZXJ9IGkgLSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gbW9kaWZ5IHRoZSBhcnJheSwgYWNjZXB0cyBwb3N0aXRpdmUgYW5kIG5lZ2F0aXZlIGluZGV4ZXNcbiAqIEBwYXJhbSB7SXRlcmFibGV9IFthXSAtIEFycmF5IHdpdGggZGF0YVxuICogQHJldHVybiB7SXRlcmFibGV9IFthXVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkanVzdCAoZm4sIGksIGEpIHtcbiAgY29uc3QgciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEpXG4gIGNvbnN0IGlkeCA9IGkgPCAwID8gci5sZW5ndGggKyBpIDogaVxuICBpZiAoIWFbaWR4XSkgcmV0dXJuIHJcbiAgcltpZHhdID0gZm4ocltpZHhdKVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogTW9kaWZpZXMgYW4gaXRlbSBpbiBhbiBhcnJheSB1c2luZyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb24gYWRqdXN0V2l0aFxuICogQGRlc2NyaXB0aW9uIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IGEpIC0+ICgoYSAtPiBbYV0pIC0+IFthXSAtPiBudW0pIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gdG8gbW9kaWZ5IHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgLSBUaGUgcHJlZGljYXRlIHRoYXQgcmV0dXJucyB0aGUgaW5kZXhlcyBpZiBmb3VuZFxuICogQHBhcmFtIHtJdGVyYWJsZX0gW2FdXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX0gW2FdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBtYXAgZnJvbSAnLi9tYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkanVzdFdpdGggKGZuLCBwcmVkLCBhKSB7XG4gIGNvbnN0IF9mbiA9IHggPT4ge1xuICAgIGlmIChwcmVkKHgpKSB7XG4gICAgICByZXR1cm4gZm4oeClcbiAgICB9XG4gICAgcmV0dXJuIHhcbiAgfVxuICByZXR1cm4gbWFwKF9mbiwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSkpXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb24gYWxsXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IFthXSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbGwgKGNiLCBhKSB7XG4gIGxldCByZXMgPSB0cnVlXG4gIGZvciAobGV0IGkgaW4gYSkge1xuICAgIGlmICghY2IoYVtpXSkpIHtcbiAgICAgIHJlcyA9IGZhbHNlXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59KVxuIiwiLyoqXG4gKiBBcHBsaWVzIGEgbGlzdCBvZiBwcmVkaWNhdGVzIHRvIHRoZSBkYXRhIGFuZCByZXR1cm5zIHRydWUgaWYgYWxsIHBhc3NcbiAqXG4gKiBAZnVuY3Rpb24gYWxsUGFzc1xuICogQGRlc2NyaXB0aW9uIEFwcGxpZXMgYSBsaXN0IG9mIHByZWRpY2F0ZXMgdG8gdGhlIGRhdGEgYW5kIHJldHVybnMgdHJ1ZSBpZiBhbGwgcGFzc1xuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBbKCouLi4gLT4gQm9vbGVhbildIC0+ICgqLi4uIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7QXJyYXl9IHByZWRpY2F0ZXMgQW4gYXJyYXkgb2YgcHJlZGljYXRlcyB0byBjaGVja1xuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjb21iaW5lZCBwcmVkaWNhdGVcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbGxQYXNzIChjYnMsIGEpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWNic1tpXShhKSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIHByb3ZpZGVkXG4gKlxuICogQGZ1bmN0aW9uIGFsd2F5c1xuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBmdW5jdGlvbiB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIHByb3ZpZGVkXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gKCogLT4gYSlcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWx3YXlzICh4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB4IH1cbn0pXG4iLCIvKipcbiAqIENoZWNrcyBpZiBib3RoIHByZWRpY2F0ZXMgYXJlIHRydWVcbiAqXG4gKiBAZnVuY3Rpb24gYW5kXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIGJvdGggcHJlZGljYXRlcyBhcmUgdHJ1ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoeCwgeSkgLT4gYm9vbGVhblxuICogQHBhcmFtIHsqfSB4IC0gQSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7Kn0geSAtIEEgcHJlZGljYXRlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFuZCAoeCwgeSkge1xuICByZXR1cm4geCAmJiB5XG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb24gb2YgdGhlIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb24gYW55XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uIG9mIHRoZSBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChUT0RPKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYW55IChjYiwgYSkge1xuICBsZXQgcmVzID0gZmFsc2VcbiAgZm9yIChsZXQgaSBpbiBhKSB7XG4gICAgaWYgKGNiKGFbaV0pKSB7XG4gICAgICByZXMgPSB0cnVlXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59KVxuIiwiLyoqXG4gKiBBcHBsaWVzIGEgbGlzdCBvZiBwcmVkaWNhdGVzIHRvIHRoZSBkYXRhIGFuZCByZXR1cm5zIHRydWUgaWYgb25lIHBhc3Nlc1xuICpcbiAqIEBmdW5jdGlvbiBhbnlQYXNzXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIFsoKi4uLiAtPiBCb29sZWFuKV0gLT4gKCouLi4pIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7QXJyYXl9IHByZWRpY2F0ZXMgQW4gYXJyYXkgb2YgcHJlZGljYXRlcyB0byBjaGVja1xuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjb21iaW5lZCBwcmVkaWNhdGVcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbnlQYXNzIChjYnMsIGEpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2JzW2ldKGEpKSByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufSlcbiIsIi8qKlxuICogQXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIHJldHVybnMgYSBjb21iaW5lZCByZXN1bHQgYXJyYXlcbiAqXG4gKiBAZnVuY3Rpb24gYXBcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWVzIGEgbGlzdCBvZiBmdW5jdGlvbnMgdG8gYSBsaXN0IG9mIHZhbHVlcyBhbmQgcmV0dXJucyBhIGNvbWJpbmVkIHJlc3VsdCBhcnJheVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBAc2lnIFthIC0+IGJdIC0+IFthXSAtPiBbYl1cbiAqIEBwYXJhbSB7KEZ1bmN0aW9uW118RnVuY3Rpb258QXBwbGljYXRpdmUpfSBmbnMgLSBBbiBhcnJheSBvZiBmdW5jdGlvbnMgb3IgYSBmdW5jdGlvbiBvciBhbiBhcHBsaWNhdGl2ZVxuICogQHBhcmFtIHtBcnJheX0gdmFscyAtIEFuIGFycmF5IG9mIHZhbHVlc1xuICogQHJldHVybiB7SXRlcmFibGV9IFthXVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgY3VycnkxIGZyb20gJy4vX3ByaXZhdGUvY3VycnkxJ1xuaW1wb3J0IGlzIGZyb20gJy4vaXMnXG5pbXBvcnQgZm9sZCBmcm9tICcuL2FycmF5L2ZvbGQnXG5pbXBvcnQgbWFwIGZyb20gJy4vYXJyYXkvbWFwJ1xuXG5jb25zdCBpc0Z1bmN0aW9uID0gaXMoJ0Z1bmN0aW9uJylcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYXAgKGZucywgdmFscykge1xuICBpZiAoaXNGdW5jdGlvbihmbnMuYXApKSB7XG4gICAgcmV0dXJuIGZucy5hcCh2YWxzKVxuICB9XG4gIGlmIChpc0Z1bmN0aW9uKGZucykpIHtcbiAgICByZXR1cm4geCA9PiBmbnMoeCkodmFscyh4KSlcbiAgfVxuICByZXR1cm4gZm9sZCgoYWNjLCBmKSA9PiBhY2MuY29uY2F0KG1hcChjdXJyeTEoZiksIHZhbHMpKSwgW10sIGZucylcbn0pXG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBtYXAgZnJvbSAnLi9tYXAnXG5cbi8qKlxuICogQGZ1bmN0aW9uIGFwZXJ0dXJlXG4gKiBAcGFyYW0gblxuICogQHBhcmFtIGFyclxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFwZXJ0dXJlIChuLCBhKSB7XG4gIGlmIChhLmxlbmd0aCA8IG4pIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBjb25zdCByZXMgPSBBcnJheShhLmxlbmd0aCAtIG4gKyAxKVxuICByZXR1cm4gbWFwKChpdGVtLCBpZHgpID0+IGEuc2xpY2UoaWR4LCBpZHggKyBuKSwgcmVzKVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGFwcGVuZFxuICogQGRlc2NyaXB0aW9uIEFwcGVuZCBhbiBlbG1lbnQgdG8gYSBsaXN0XG4gKiBAcGFyYW0geyp9IGVsIC0gRWxlbWVudCB0byBhZGQgdG8gYSBsaXN0XG4gKiBAcGFyYW0ge2FycmF5fSBsaXN0IC0gTGlzdCB0byB3aGljaCB0byBhZGQgdGhlIGVsZW1lbnRcbiAqIEByZXR1cm4ge2FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBsID0gWzAsIDFdXG4gKiBhcHBlbmQoJ2EnLCBsKSAvLyByZXV0bnIgWzAsIDEsICdhJ11cbiAqXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBjb25jYXQgZnJvbSAnLi9jb25jYXQnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFwcGVuZCAoZWwsIGxpc3QpIHtcbiAgcmV0dXJuIGNvbmNhdChsaXN0LCBbIGVsIF0pXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gYXBwbHlcbiAqIEBkZXNjcmlwdGlvbiBUaGUgYXBwbHkoKSBtZXRob2QgY2FsbHMgYSBmdW5jdGlvbiB3aXRoIHRoZSBnaXZlbiBhcmd1bWVudHMgcHJvdmlkZWQgYXMgYW4gYXJyYXksIGFuZCB0aGUgZnVuY3Rpb24gYXMgY29udGV4dC5cbiAqIEBwYXJhbSBmblxuICogQHBhcmFtIGFyZ3NcbiAqIEByZXR1cm4geyp9XG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhID0gYXBwbHkoZnVuY3Rpb24gKCkge1xuICogICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLm1hcCh4ID0+IHggKiAyKVxuICogICB9KVxuICogYShbMSwgMiwgM10pXG4gKiAvLyBbMiwgNCwgNl1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFwcGx5IChmbiwgYXJncykge1xuICByZXR1cm4gZm4uYXBwbHkoZm4sIGFyZ3MpXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGFycmF5Q29uY2F0XG4gKiBAcGFyYW0gYTFcbiAqIEBwYXJhbSBhMlxuICogQHJldHVybnMge1RbXX1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQoYSwgYilcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gZXF1YWxzQXJyYXlcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiBmb3IgZGVlcCBjb21wYXJpc29uIG9mIGFycmF5c1xuICogQHBhcmFtIHthfSB4IC0gT2JqZWN0IHRvIGNvbXBhcmUgb2YgdHlwZSBhXG4gKiBAcGFyYW0ge2F9IHkgLSBPYmplY3QgeCB0byBjb21wYXJlIHdpdGggb2JqZWN0IHhcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBub3QgZnJvbSAnLi4vbm90J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFsc0FycmF5ICh4LCB5KSB7XG4gIGlmICh4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm90KGVxdWFscyh4W2ldLCB5W2ldKSkpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gYXJyYXlGaWx0ZXJcbiAqIEBwcml2YXRlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFycmF5RmlsdGVyIChmbiwgYSkge1xuICB2YXIgciA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChmbihhW2ldKSkgci5wdXNoKGFbaV0pXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBtYXBwaW5nIG92ZXIgdGhlIHByb3ZpZGVkIGFycmF5IGFuZCBjYWxsaW5nIGFuIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2NiRnVuY3Rpb259IGNiIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gbW9kaWZ5IHRoZSBpdGVtXG4gKiBAcGFyYW0geyp9IGluaXQgLSBJbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBhIC0gQXJyYXkgd2l0aCBpdGVtcyB0byBtb2RpZnkgYnkgdGhlIGNiIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhbGlhcyByZWR1Y2VcbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBmb2xkKGFkZCwgMCwgWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IDNcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBjYkZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IHIgLSBBY2N1bXVsYXRvciB3aGljaCBhY2N1bXVsYXRlcyB0aGUgY2FsbGJhY2sncyByZXR1cm4gdmFsdWVzXG4gKiBAcGFyYW0geyp9IGl0ZW0gLSB0aGUgY3VycmVudCBlbGVtZW50IGJlaW5nIHByb2Nlc3NlZFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gdGhlIGluZGV5IG9mIHRoZSBpdGVtIGJlaW5nIHByb2Nlc3NlZFxuICogQHBhcmFtIHtBcnJheX0gYSAtIFRoZSBpbml0aWFsIGFycmF5XG4gKiBAcmV0dXJuIHsqfVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGxldCByID0gaW5pdFxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHIgPSBjYihyLCBhW2ldLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIG9iamVjdCBpcyBhbiBhcnJheSwgYXV0b2N1cnJpZWQgZnVuY3Rpb25cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGlzQXJyYXlcbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIG9iamVjdCBpcyBhbiBhcnJheSwgYXV0b2N1cnJpZWQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7Kn0gT2JqZWN0IHRvIHZlcmlmaXlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gaXNBcnJheShbMSwxLDFdKVxuICogLy8gcmVzdWx0ID0gdHJ1ZVxuICovXG5cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0FycmF5JylcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIE1hcHMgb3ZlciBhbiBhcnJheSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoaWRlbnRpdHksIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzAsMiwzXVxuICogIGNvbnN0IGFkZDIgPSBhZGQoMilcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoYWRkMiwgWzAsMiwzXSlcbiAqICAvLyByZXN1bHQgPSBbMiw0LDVdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgY29uc3QgciA9IG5ldyBBcnJheShsKVxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHJbaV0gPSBjYihhW2ldLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdG9BcnJheVxuICogQGRlc2NyaXB0aW9uIENvbnZlcnRzIHRoZSBpbnB1dCB0byBhbiBhcnJheVxuICogQHBhcmFtIHtBcnJheUxpa2V9IHggLSBPYmplY3QgdG8gY29udmVydCB0byBhbiBhcnJheVxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gdG9BcnJheShcInN0cmluZ1wiKVxuICogLy8gcmVzdWx0ID0gWydzJywndCcsJ3InLCdpJywnbicsJ2cnXVxuICpcbiAqIGZ1bmN0aW9uICgpIHtcbiAqICBjb25zdCBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpXG4gKiAgY29uc29sZS5sb2codHlwZW9mIGFyZ3MpIC8vIEFycmF5XG4gKiB9XG4gKlxuICoqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9BcnJheSAoeCkge1xuICByZXR1cm4geC5sZW5ndGggPT09IDEgPyBbeFswXV0gOiBBcnJheS5hcHBseShudWxsLCB4KVxufTtcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHVuaW9uQXJyYXlcbiAqIEBkZXNjcmlwdGlvbiBNZXJnZXMgMiBhcnJheXNcbiAqIEBwYXJhbSB7QXJyYXl9IGFMIC0gQXJyYXkgdG8gbWVyZ2VcbiAqIEBwYXJhbSB7QXJyYXl9IGFSIC0gQXJyYXkgdG8gbWVyZ2VcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IHVuaW9uQXJyYXkoWzAsMSwyXSwgWzMsNCw1XSlcbiAqIC8vIHJlc3VsdCA9IFswLjEuMi4zLjQuNV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gdW5pb25BcnJheSAoYUwsIGFSKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYUwuY29uY2F0KGFSKSkpXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gYmluYXJ5XG4gKiBAcGFyYW0gY2JcbiAqIEByZXR1cm5zIHtmdW5jdGlvbigqPSwgKj0pOiAqfVxuICovXG5pbXBvcnQgY3VycnkxIGZyb20gJy4vX3ByaXZhdGUvY3VycnkxJ1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5MShmdW5jdGlvbiBiaW5hcnkgKGNiKSB7XG4gIHJldHVybiBjdXJyeShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBjYihhLCBiKVxuICB9KVxufSlcbiIsImltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG4vKipcbiAqIEBmdW5jdGlvbiBiaW5kXG4gKiBAZGVzY3JpcHRpb24gQmluZCBhIGZ1bmN0aW9uIHRvIGEgY29udGV4dFxuICogQHBhcmFtIHtmdW5jdGlvbiB9Zm5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dFxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGJpbmQgKGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBmbi5iaW5kKGNvbnRleHQpXG59KVxuIiwiLyoqXG4gKiBBbHdheXMgcmV0dXJucyBhIGZ1bmN0aW9uIHdpdGggYSBGYWxzZSBib29sZWFuXG4gKlxuICogQGZ1bmN0aW9uIEZcbiAqIEBkZXNjcmlwdGlvbiBBbHdheXMgcmV0dXJucyBhIGZ1bmN0aW9uIHdpdGggYSBGYWxzZSBib29sZWFuXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAcGFyYW0geyp9IGFcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICoqL1xuaW1wb3J0IGFsd2F5cyBmcm9tICcuLi9hbHdheXMnXG5cbmV4cG9ydCBkZWZhdWx0IGFsd2F5cyhmYWxzZSlcbiIsIi8qKlxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICpcbiAqIEBmdW5jdGlvbiBUXG4gKiBAZGVzY3JpcHRpb24gQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqKi9cbmltcG9ydCBhbHdheXMgZnJvbSAnLi4vYWx3YXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBhbHdheXModHJ1ZSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIHdoZW4gYm90aCBwcmVkaWNhdGVzIHJldHVybiB0cnVlXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbjEgQSBwcmVkaWNhdGUgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuMiBBIHByZWRpY2F0ZSBmdW5jdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBsaWZ0IGZyb20gJy4uL2xpZnQnXG5pbXBvcnQgYW5kIGZyb20gJy4uL2FuZCdcbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYm90aCAoZm4xLCBmbjIpIHtcbiAgcmV0dXJuIGlzKCdGdW5jdGlvbicpKGZuMSlcbiAgICA/IGZ1bmN0aW9uIF9ib3RoICgpIHsgcmV0dXJuIGZuMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpICYmIGZuMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH1cbiAgICA6IGxpZnQoYW5kKShmbjEsIGZuMilcbn0pXG4iLCIvKipcbiAqIEN1cnJpZWQgZnVuY3Rpb24gdGhhdCB2ZXJpZmllcyBvZiB0aGUgcHJvdmlkZWQgYXJndW1lbnQgaXMgYSBib29sZWFuXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBpc1xuICogQGRlc2NyaXB0aW9uIEN1cnJpZWQgZnVuY3Rpb24gdGhhdCB2ZXJpZmllcyBvZiB0aGUgcHJvdmlkZWQgYXJndW1lbnQgaXMgYSBib29sZWFuXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAcGFyYW0geyp9IEl0ZW0gdG8gdmVyaWZ5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICoqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnQm9vbGVhbicpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBjYWxsXG4gKiBAcGFyYW0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG4vLyBpbXBvcnQgY3VycnkxIGZyb20gJy4vX3ByaXZhdGUvY3VycnkxJ1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGNhbGwgKGZuKSB7XG4gIHJldHVybiBmbi5hcHBseShmbiwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGNvbXBsZW1lbnRcbiAqIEBkZXNjcmlwdGlvbiBMaWZ0cyBhIHByZWRpY2F0ZSBmdW5jdGlvbiBhbmQgcmV0dXJucyB0aGUgY29tcGxlbWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gQSBwcmVkaWNhdGUgZnVuY3Rpb25cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSBub3RcbiAqIEBzZWUgbGlmdFxuICogQHNpbmNlIHYxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBpc05vdEVtcHR5ID0gY29tcGxlbWVudChpc0VtcHR5KVxuICogaXNOb3RFbXB0eShbXSkgLy8gZmFsc2VcbiAqIGlzTm90RW1wdHkoeydhJyA6IDF9KSAvLyB0cnVlXG4gKlxuICogY29tcGxlbWVudChNYXliZS5vZihmYWxzZSkpIC8vIHRydWVcbiAqIGNvbXBsZW1lbnQoTWF5YmUub2YodHJ1ZSkpIC8vIGZhbHNlXG4gKi9cbmltcG9ydCBsaWZ0IGZyb20gJy4vbGlmdCdcbmltcG9ydCBub3QgZnJvbSAnLi9ub3QnXG5cbmNvbnN0IGNvbXBsZW1lbnQgPSBsaWZ0KG5vdClcbmV4cG9ydCBkZWZhdWx0IGNvbXBsZW1lbnRcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGNvbXBvc2VcbiAqIEByZXR1cm5zIHtmdW5jdGlvbigpOiAqfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlICgpIHtcbiAgbGV0IGZucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcblxuICByZXR1cm4gZnVuY3Rpb24gX2NvbXBvc2UgKCkge1xuICAgIGxldCBpbml0ID0gZm5zW2Zucy5sZW5ndGggLSAxXVxuICAgIGxldCByZXN1bHQgPSBbaW5pdC5hcHBseShpbml0LCBhcmd1bWVudHMpXVxuICAgIGxldCBpID0gZm5zLmxlbmd0aCAtIDJcblxuICAgIGZvciAoaTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIGNvbnN0IGZuID0gZm5zW2ldXG5cbiAgICAgIHJlc3VsdCA9IFtmbi5hcHBseShmbiwgcmVzdWx0KV1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFswXVxuICB9XG59O1xuIiwiLyoqXG4gKiBDb25jYXRlbmF0ZXMgMiBpdGVtcyB0b2dldGhlclxuICpcbiAqIEBmdW5jdGlvbiBjb25jYXRcbiAqIEBkZXNjcmlwdGlvbiBDb25jYXRlbmF0ZXMgMiBpdGVtcyB0b2dldGhlclxuICogQHNpbmNlIHYxLjAuNFxuICogQHBhcmFtIHthfSBhIC0gTGVmdCBzaWRlIG9mIHRoZSBjb25jYXRlbmF0aW9uXG4gKiBAcGFyYW0ge2F9IGIgLSByaWdodCBzaWRlIG9mIHRoZSBjb25jYXRlbmF0aW9uXG4gKiBAcmV0dXJuIHthfSBDb25jYXRlbmF0ZWQgaXRlbVxuICoqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBhcnJheUNvbmNhdCBmcm9tICcuL2FycmF5L2NvbmNhdCdcbmltcG9ydCBzdHJpbmdDb25jYXQgZnJvbSAnLi9zdHJpbmcvY29uY2F0J1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgY29uc3QgdHlwZU1hcCA9IHtcbiAgICAnU3RyaW5nJzogc3RyaW5nQ29uY2F0LFxuICAgICdBcnJheSc6IGFycmF5Q29uY2F0XG4gIH1cbiAgcmV0dXJuIHR5cGVNYXBbdHlwZShhKV0oYSwgYilcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBjb25kXG4gKiBAcGFyYW0gY29uZHNcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZCAoY29uZHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjb25kc1tpXVswXSh2YWx1ZSkpIHJldHVybiBjb25kc1tpXVsxXSh2YWx1ZSlcbiAgICB9XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKipcbiAqIEBmdW5jdGlvbiBjdXJyeVxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVzIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeSAoZnVuKSB7XG4gIGNvbnN0IGFyZ3NsZW4gPSBmdW4ubGVuZ3RoXG5cbiAgaWYgKGFyZ3NsZW4gPT09IDApIHtcbiAgICByZXR1cm4gZnVuXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlY3Vyc2VyKFtdKVxuXG4gIGZ1bmN0aW9uIHJlY3Vyc2UgKGFjYywgYXJncykge1xuICAgIGNvbnN0IF9hY2MgPSBhY2MuY29uY2F0KGFyZ3MpXG4gICAgcmV0dXJuIF9hY2MubGVuZ3RoIDwgYXJnc2xlblxuICAgICAgPyBjcmVhdGVSZWN1cnNlcihfYWNjKVxuICAgICAgOiBmdW4uYXBwbHkodGhpcywgX2FjYylcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlY3Vyc2VyIChhY2MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlY3Vyc2UoYWNjLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZGlmZkRhdGVcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gMiBkYXRlcyBpbiBtaWxsaXNlY29uZFxuICogQHBhcmFtIHtEYXRlfSBzdGFydCAtIFN0YXJ0IGRhdGVcbiAqIEBwYXJhbSB7RGF0ZX0gZW5kIC0gRW5kIGRhdGVcbiAqIEByZXR1cm4ge251bWJlcn0gUkV0dXJuIHRoZSBkaWZmZXJlbmNlIGluIG1pbGxpc2Vjb25kc1xuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGRpZmZEYXRlIChzdGFydCwgZW5kKSB7XG4gIHJldHVybiAobmV3IERhdGUoc3RhcnQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGVuZCkuZ2V0VGltZSgpKVxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdEYXRlJylcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDkvMDMvMjAxNy5cbiAqL1xuaW1wb3J0IGRpZmZEYXRlIGZyb20gJy4vZGlmZkRhdGUnXG5cbmV4cG9ydCBkZWZhdWx0IChkKSA9PiB7XG4gIHJldHVybiBkaWZmRGF0ZShuZXcgRGF0ZSgpKShkKSA8IDBcbn1cbiIsIi8qKlxuICpcbiAqL1xuaW1wb3J0IGlzRGF0ZSBmcm9tICcuL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkICh4KSB7XG4gIC8vIG5vaW5zcGVjdGlvbiBKU0NoZWNrRnVuY3Rpb25TaWduYXR1cmVzXG4gIHJldHVybiBpc0RhdGUoeCkgJiYgaXNGaW5pdGUoeC52YWx1ZU9mKCkpXG59O1xuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDg2NDAwMDAwIC8vIDI0KjYwKjYwKjEwMDAgPSA4NjQwMDAwMFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gMzYwMDAwMCAvLyA2MCo2MCoxMDAwID0gMzYwMDAwMFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gNjAwMDAgLy8gNjAqMTAwMCA9IDYwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyAxMDAwXHJcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKlxuICogQGZ1bmN0aW9uIGRlZmF1bHRUb1xuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IGIgLT4gYSB8IGJcbiAqIEBwYXJhbSB7YX0gZGVmYXVsdCBUaGUgZGVmYXVsdCB2YWx1ZS5cbiAqIEBwYXJhbSB7Yn0gdmFsIGB2YWxgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZCBvZiBgZGVmYXVsdGAgdW5sZXNzIGB2YWxgIGlzIGBudWxsYCwgYHVuZGVmaW5lZGAgb3IgYE5hTmAuXG4gKiBAcmV0dXJuIHsqfSBUaGUgc2Vjb25kIHZhbHVlIGlmIGl0IGlzIG5vdCBgbnVsbGAsIGB1bmRlZmluZWRgIG9yIGBOYU5gLCBvdGhlcndpc2UgdGhlIGRlZmF1bHQgdmFsdWVcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBkZWZhdWx0VG8gKGQsIHYpIHtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgcmV0dXJuIHYgPT0gbnVsbCB8fCB2ICE9PSB2ID8gZCA6IHZcbn0pXG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGVtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZW1wdHkgZXF1aXZhbGVudCBvZiB0aGUgZmlyc3QgYXJndW1lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbXB0eSAoeCkge1xuICByZXR1cm4gbmV3IHguY29uc3RydWN0b3IoKVxufTtcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gZXF1YWxzXG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGVxdWFsaXR5IG9mIDIgaXRlbXNcbiAqIEBwYXJhbSB7Kn0geCAtIExlZnQgc2lkZSBvZiB0aGUgZXF1YWxpdHkgY2hlY2tcbiAqIEBwYXJhbSB7Kn0geSAtIFJpZ2h0IHNpZGUgb2YgdGhlIGVxdWFsaXR5IGNoZWNrXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBuYW4gPSBOdW1iZXIuTmFOXG4gKiBlcXVhbChuYW4sIG5hbikgLy8gcmV0dXJucyB0cnVlXG4gKlxuICogY29uc3QgYXJyMSA9IFswLCAxLCAyLCAzXVxuICogY29uc3QgYXJyMiA9IFtudWxsLCAxLCAyLCAzXVxuICogZXF1YWxzKGFycjEsIGFycjIpIC8vIHJldHVybnMgZmFsc2VcbiAqXG4gKiBlcXVhbHMobmV3IE9iamVjdCh7J2EnOiAwLCAnYic6IDF9KSwgeydhJzogMCwgJ2InOiAxfSkgLy8gdHJ1ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xuaW1wb3J0IGlkZW50aWNhbCBmcm9tICcuL2lkZW50aWNhbCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcbmltcG9ydCBub3QgZnJvbSAnLi9ub3QnXG5pbXBvcnQgb3IgZnJvbSAnLi9vcidcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL29iamVjdC9pcydcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vYXJyYXkvaXMnXG5pbXBvcnQgaXNCb29sZWFuIGZyb20gJy4vYm9vbGVhbi9pcydcbmltcG9ydCBpc051bWJlciBmcm9tICcuL251bWJlci9pcydcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuL3N0cmluZy9pcydcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi9kYXRlL2lzJ1xuaW1wb3J0IGVxdWFsc0FycmF5IGZyb20gJy4vYXJyYXkvZXF1YWxzJ1xuaW1wb3J0IGVxdWFsc09iamVjdCBmcm9tICcuL29iamVjdC9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFscyAoeCwgeSkge1xuICBpZiAoaWRlbnRpY2FsKHgsIHkpKSByZXR1cm4gdHJ1ZVxuXG4gIGlmICh0eXBlKHgpICE9PSB0eXBlKHkpKSByZXR1cm4gZmFsc2VcblxuICBpZiAob3Iobm90KGV4aXN0cyh4KSksIG5vdChleGlzdHMoeSkpKSkgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKHguY29uc3RydWN0b3IgIT09IHkuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZVxuXG4gIGlmIChpc1N0cmluZyh4KSB8fCBpc0Jvb2xlYW4oeCkgfHwgaXNOdW1iZXIoeCkgfHwgaXNEYXRlKHgpKSB7XG4gICAgcmV0dXJuIGlkZW50aWNhbCh4LnZhbHVlT2YoKSwgeS52YWx1ZU9mKCkpXG4gIH1cbiAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzQXJyYXkoeCwgeSlcbiAgfSBlbHNlIGlmIChpc09iamVjdCh4KSkge1xuICAgIHJldHVybiBlcXVhbHNPYmplY3QoeCwgeSlcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBleGlzdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhpc3RzICh4KSB7XG4gIHJldHVybiAhKHggPT0gbnVsbClcbn07XG4iLCIvKipcbiAqIEBmdW5jdGlvbiBmaWx0ZXJcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdWNudGlvbiB0aGF0IGZpbHRlcnMgT2JqZWN0cywgQXJyYXlzIGFuZCBNYXBzXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBhcnJheUZpbHRlciBmcm9tICcuL2FycmF5L2ZpbHRlcidcbmltcG9ydCBvYmplY3RGaWx0ZXIgZnJvbSAnLi9vYmplY3QvZmlsdGVyJ1xuaW1wb3J0IG1hcEZpbHRlciBmcm9tICcuL21hcC9maWx0ZXInXG4vLyBUT0RPXG4vLyBpbXBvcnQgc2V0RmlsdGVyIGZyb20gJy4uL3NldC9maWx0ZXInXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZpbHRlciAoZm4sIGEpIHtcbiAgc3dpdGNoICh0eXBlKGEpKSB7XG4gICAgLy8gc3dpdGNoIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkpIHtcbiAgICAvLyBjYXNlICdGdW5jdGlvbic6XG4gICAgLy8gICByZXR1cm4gY3VycnkoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICByZXR1cm4gY2IuY2FsbCh0aGlzLCBhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpXG4gICAgLy8gICB9KVxuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICByZXR1cm4gb2JqZWN0RmlsdGVyKGZuLCBhKVxuICAgIC8vIGNhc2UgJ1N0cmluZyc6XG4gICAgLy8gICByZXR1cm4gc3RyaW5nTWFwKGNiLCBhKVxuICAgIGNhc2UgJ01hcCc6XG4gICAgICByZXR1cm4gbWFwRmlsdGVyKGZuLCBhKVxuICAgIC8vIGNhc2UgJ1NldCc6XG4gICAgLy8gICByZXR1cm4gc2V0RmlsdGVyKGZuLCBhKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYXJyYXlGaWx0ZXIoZm4sIGEpXG4gIH1cbn0pXG4iLCIvKipcbiAqIEZpbmQgdGhlIGluZGV4IG1hdGNoaW5nIGEgcHJlZGljYXRlXG4gKlxuICogQGZ1bmN0aW9uIGZpbmRJbmRleFxuICogQGRlc2NyaXB0aW9uIEZpbmQgdGhlIGluZGV4IG1hdGNoaW5nIGEgcHJlZGljYXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IGJvb2xlYW4pIC0+IFthXSAtPiBudW1iZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFByZWRpY2F0ZSBmdW5jdGlvbiByZXR1cm5zIGEgYm9vbGVhblxuICogQHBhcmFtIHtBcnJheX0gQW4gYXJyYXkgbGlrZSBvYmplY3RcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZpbmRJbmRleCAoZm4sIGEpIHtcbiAgbGV0IGkgPSAwXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICB3aGlsZSAoaSA8IGwpIHtcbiAgICBpZiAoZm4oYVtpXSkpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICAgIGkgKz0gMVxuICB9XG4gIHJldHVybiAtMVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGZpcnN0XG4gKiBAcGFyYW0gW2FdXG4gKiBAcmV0dXJuIGEgfCB1bmRlZmluZWRcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYXJyID0gWzEsIDIsIDRdXG4gKiBmaXJzdChbMSwgMiwgNF0pIC8vIHJldHVybnMgMVxuICovXG5pbXBvcnQgY3VycnkxIGZyb20gJy4vX3ByaXZhdGUvY3VycnkxJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeTEoZnVuY3Rpb24gZmlyc3QgKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5sZW5ndGggPyBhWzBdIDogdW5kZWZpbmVkXG59KVxuIiwiaW1wb3J0IGZvbGQgZnJvbSAnLi9mb2xkJ1xuaW1wb3J0IGVtcHR5IGZyb20gJy4vZW1wdHknXG5pbXBvcnQgY29uY2F0IGZyb20gJy4vY29uY2F0J1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgaXMgZnJvbSAnLi9pcydcblxuY29uc3QgaXNGdW5jdGlvbiA9IGlzKCdGdW5jdGlvbicpXG5cbi8qKlxuICogQGZ1bmN0aW9uIGZsYXRNYXBcbiAqIEBwYXJhbSBmblxuICogQHBhcmFtIGFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZmxhdE1hcCAoZm4sIGEpIHtcbiAgaWYgKGlzRnVuY3Rpb24oYSkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBmbihhKHgpKSh4KVxuICAgIH1cbiAgfVxuICBpZiAoaXNGdW5jdGlvbihhLmZsYXRNYXApKSB7XG4gICAgcmV0dXJuIGEuZmxhdE1hcChmbilcbiAgfVxuICByZXR1cm4gZm9sZCgoYWNjLCB4KSA9PiBjb25jYXQoYWNjLCBmbih4KSksIGVtcHR5KGEpLCBhKVxufSlcbiIsIi8qKlxuICogUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBpdGVtXG4gKlxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgbGlrZSBvYmplY3QgYW5kIGNhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZW1cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKChhLCBiLCBjLCBhKSDihpIgYSkg4oaSIGEg4oaSIFtiXSDihpIgYVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgcmVjZWl2ZXMgNCB2YWx1ZXM6IHRoZSBhY2N1bXVsYXRvciwgdGhlIGl0ZW0sIHRoZSBpbmRleCwgYW5kIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHsqfSBhIGlzIHRoZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0geyp9IFtiXSB0aGUgYXJyYXkgbGlrZSBpdGVtIHRvIGl0ZXJhdGUgb3ZlclxuICogQHJldHVybiB7Kn0gYSBpcyB0aGUgYWNjdW11bGF0ZWQgdmFsdWVcbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlGb2xkIGZyb20gJy4vYXJyYXkvZm9sZCdcbmltcG9ydCBvYmplY3RGb2xkIGZyb20gJy4vb2JqZWN0L2ZvbGQnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBhKSB7XG4gIGNvbnN0IHR5cGVNYXAgPSB7XG4gICAgJ09iamVjdCc6IG9iamVjdEZvbGQsXG4gICAgJ0FycmF5JzogYXJyYXlGb2xkXG4gIH1cbiAgLy8gaWYgKGEubmV4dCkge1xuICAvLyAgIHJldHVybiBpdGVyYWJsZUZvbGQoY2IsIGluaXQsIGEpXG4gIC8vIH1cbiAgLy8gaWYgKHR5cGUoU3ltYm9sKSAhPT0gJ3VuZGVmaW5lZCcgJiYgYVtTeW1ib2wuaXRlcmF0b3JdKSB7XG4gIC8vICAgcmV0dXJuIGl0ZXJhYmxlRm9sZChjYiwgaW5pdCwgYVtTeW1ib2wuaXRlcmF0b3JdKCkpXG4gIC8vIH1cbiAgcmV0dXJuIHR5cGVNYXBbdHlwZShhKV0oY2IsIGluaXQsIGEpXG59KVxuXG4vLyBmdW5jdGlvbiBpdGVyYWJsZUZvbGQgKGNiLCBhY2MsIGdlbikge1xuLy8gICBsZXQgc3RlcCA9IGdlbi5uZXh0KClcbi8vICAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcbi8vICAgICBhY2MgPSBjYihhY2MsIHN0ZXAudmFsdWUpXG4vLyAgICAgc3RlcCA9IGdlbi5uZXh0KClcbi8vICAgfVxuLy8gICByZXR1cm4gYWNjXG4vLyB9XG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGlkZW50aWNhbFxuICogQGRlc2NyaXB0aW9uIGNoZWNrcyBmb3IgaWRlbnRpbnRpY2FsIGl0ZW1zXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGlzTmFuIGZyb20gJy4vbnVtYmVyL2lzTmFuJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBpZGVudGljYWwgKHgsIHkpIHtcbiAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkge1xuICAgIHJldHVybiAxIC8geCA9PT0gMSAvIHlcbiAgfVxuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuICEhKGlzTmFuKHgpICYmIGlzTmFuKHkpKVxufSlcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gaWRlbnRpdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSB2YWx1ZSBzdXBwbGllZCB0byB0aGUgZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZGVudGl0eSAoeCkge1xuICByZXR1cm4geFxufTtcbiIsIi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgX18gfSBmcm9tICcuL19fJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXBlcnR1cmUgfSBmcm9tICcuL2FwZXJ0dXJlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBhcHBseVNwZWMgfSBmcm9tICcuL2FwcGx5U3BlYydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXBwbHlUbyB9IGZyb20gJy4vYXBwbHlUbydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNjZW5kIH0gZnJvbSAnLi9hc2NlbmQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc29jIH0gZnJvbSAnLi9hc3NvYydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzb2NQYXRoIH0gZnJvbSAnLi9hc3NvY1BhdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGNsYW1wIH0gZnJvbSAnLi9jbGFtcCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgY2xvbmUgfSBmcm9tICcuL2Nsb25lJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wYXJhdG9yIH0gZnJvbSAnLi9jb21wYXJhdG9yJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wb3NlSyB9IGZyb20gJy4vY29tcG9zZUsnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBvc2VQIH0gZnJvbSAnLi9jb21wb3NlUCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcG9zZVdpdGggfSBmcm9tICcuL2NvbXBvc2VXaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBjb25zdHJ1Y3QgfSBmcm9tICcuL2NvbnN0cnVjdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgY29uc3RydWN0TiB9IGZyb20gJy4vY29uc3RydWN0Tidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgY29udGFpbnMgfSBmcm9tICcuL2NvbnRhaW5zJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBjb252ZXJnZSB9IGZyb20gJy4vY29udmVyZ2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGNvdW50QnkgfSBmcm9tICcuL2NvdW50QnknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGRlYyB9IGZyb20gJy4vZGVjJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBkZXNjZW5kIH0gZnJvbSAnLi9kZXNjZW5kJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBkaWZmZXJlbmNlIH0gZnJvbSAnLi9kaWZmZXJlbmNlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBkaWZmZXJlbmNlV2l0aCB9IGZyb20gJy4vZGlmZmVyZW5jZVdpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGRpc3NvYyB9IGZyb20gJy4vZGlzc29jJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBkaXNzb2NQYXRoIH0gZnJvbSAnLi9kaXNzb2NQYXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBkcm9wIH0gZnJvbSAnLi9kcm9wJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBkcm9wTGFzdCB9IGZyb20gJy4vZHJvcExhc3QnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGRyb3BMYXN0V2hpbGUgfSBmcm9tICcuL2Ryb3BMYXN0V2hpbGUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGRyb3BSZXBlYXRzIH0gZnJvbSAnLi9kcm9wUmVwZWF0cydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZHJvcFJlcGVhdHNXaXRoIH0gZnJvbSAnLi9kcm9wUmVwZWF0c1dpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGRyb3BXaGlsZSB9IGZyb20gJy4vZHJvcFdoaWxlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBlaXRoZXIgfSBmcm9tICcuL2VpdGhlcidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZW5kc1dpdGggfSBmcm9tICcuL2VuZHNXaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBlcUJ5IH0gZnJvbSAnLi9lcUJ5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBlcVByb3BzIH0gZnJvbSAnLi9lcVByb3BzJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBldm9sdmUgfSBmcm9tICcuL2V2b2x2ZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZmluZCB9IGZyb20gJy4vZmluZCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZmluZExhc3QgfSBmcm9tICcuL2ZpbmRMYXN0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBmaW5kTGFzdEluZGV4IH0gZnJvbSAnLi9maW5kTGFzdEluZGV4J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBmbGF0dGVuIH0gZnJvbSAnLi9mbGF0dGVuJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBmbGlwIH0gZnJvbSAnLi9mbGlwJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBmb3JFYWNoIH0gZnJvbSAnLi9mb3JFYWNoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBmb3JFYWNoT2JqSW5kZXhlZCB9IGZyb20gJy4vZm9yRWFjaE9iakluZGV4ZWQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGZyb21QYWlycyB9IGZyb20gJy4vZnJvbVBhaXJzJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBncm91cEJ5IH0gZnJvbSAnLi9ncm91cEJ5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBncm91cFdpdGggfSBmcm9tICcuL2dyb3VwV2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZ3QgfSBmcm9tICcuL2d0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBndGUgfSBmcm9tICcuL2d0ZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzUGF0aCB9IGZyb20gJy4vaGFzUGF0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaGVhZCB9IGZyb20gJy4vaGVhZCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaWZFbHNlIH0gZnJvbSAnLi9pZkVsc2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGluYyB9IGZyb20gJy4vaW5jJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpbmNsdWRlcyB9IGZyb20gJy4vaW5jbHVkZXMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGluZGV4QnkgfSBmcm9tICcuL2luZGV4QnknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGluZGV4T2YgfSBmcm9tICcuL2luZGV4T2YnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGluaXQgfSBmcm9tICcuL2luaXQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGlubmVySm9pbiB9IGZyb20gJy4vaW5uZXJKb2luJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnNlcnQgfSBmcm9tICcuL2luc2VydCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaW5zZXJ0QWxsIH0gZnJvbSAnLi9pbnNlcnRBbGwnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGludGVyc2VjdGlvbiB9IGZyb20gJy4vaW50ZXJzZWN0aW9uJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnRlcnNwZXJzZSB9IGZyb20gJy4vaW50ZXJzcGVyc2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGludG8gfSBmcm9tICcuL2ludG8nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGludmVydCB9IGZyb20gJy4vaW52ZXJ0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnZlcnRPYmogfSBmcm9tICcuL2ludmVydE9iaidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaW52b2tlciB9IGZyb20gJy4vaW52b2tlcidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgam9pbiB9IGZyb20gJy4vam9pbidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMganV4dCB9IGZyb20gJy4vanV4dCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbGFzdEluZGV4T2YgfSBmcm9tICcuL2xhc3RJbmRleE9mJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBsZW5ndGggfSBmcm9tICcuL2xlbmd0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbGVucyB9IGZyb20gJy4vbGVucydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbGVuc0luZGV4IH0gZnJvbSAnLi9sZW5zSW5kZXgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGxlbnNQYXRoIH0gZnJvbSAnLi9sZW5zUGF0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbGVuc1Byb3AgfSBmcm9tICcuL2xlbnNQcm9wJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBsaWZ0TiB9IGZyb20gJy4vbGlmdE4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGx0IH0gZnJvbSAnLi9sdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbHRlIH0gZnJvbSAnLi9sdGUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1hcEFjY3VtIH0gZnJvbSAnLi9tYXBBY2N1bSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwQWNjdW1SaWdodCB9IGZyb20gJy4vbWFwQWNjdW1SaWdodCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwT2JqSW5kZXhlZCB9IGZyb20gJy4vbWFwT2JqSW5kZXhlZCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWF0Y2ggfSBmcm9tICcuL21hdGNoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXRoTW9kIH0gZnJvbSAnLi9tYXRoTW9kJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXhCeSB9IGZyb20gJy4vbWF4QnknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1lYW4gfSBmcm9tICcuL21lYW4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1lZGlhbiB9IGZyb20gJy4vbWVkaWFuJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtZW1vaXplV2l0aCB9IGZyb20gJy4vbWVtb2l6ZVdpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlQWxsIH0gZnJvbSAnLi9tZXJnZUFsbCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VEZWVwTGVmdCB9IGZyb20gJy4vbWVyZ2VEZWVwTGVmdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VEZWVwUmlnaHQgfSBmcm9tICcuL21lcmdlRGVlcFJpZ2h0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZURlZXBXaXRoIH0gZnJvbSAnLi9tZXJnZURlZXBXaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZURlZXBXaXRoS2V5IH0gZnJvbSAnLi9tZXJnZURlZXBXaXRoS2V5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZUxlZnQgfSBmcm9tICcuL21lcmdlTGVmdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VSaWdodCB9IGZyb20gJy4vbWVyZ2VSaWdodCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VXaXRoIH0gZnJvbSAnLi9tZXJnZVdpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlV2l0aEtleSB9IGZyb20gJy4vbWVyZ2VXaXRoS2V5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtaW4gfSBmcm9tICcuL21pbidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWluQnkgfSBmcm9tICcuL21pbkJ5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtb2R1bG8gfSBmcm9tICcuL21vZHVsbydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbW92ZSB9IGZyb20gJy4vbW92ZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbkFyeSB9IGZyb20gJy4vbkFyeSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbmVnYXRlIH0gZnJvbSAnLi9uZWdhdGUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG5vbmUgfSBmcm9tICcuL25vbmUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG50aCB9IGZyb20gJy4vbnRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBudGhBcmcgfSBmcm9tICcuL250aEFyZydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbyB9IGZyb20gJy4vbydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgb2JqT2YgfSBmcm9tICcuL29iak9mJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBvZiB9IGZyb20gJy4vb2YnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG9uY2UgfSBmcm9tICcuL29uY2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG90aGVyd2lzZSB9IGZyb20gJy4vb3RoZXJ3aXNlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBvdmVyIH0gZnJvbSAnLi9vdmVyJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwYWlyIH0gZnJvbSAnLi9wYWlyJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJ0aWFsIH0gZnJvbSAnLi9wYXJ0aWFsJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJ0aWFsUmlnaHQgfSBmcm9tICcuL3BhcnRpYWxSaWdodCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcGFydGl0aW9uIH0gZnJvbSAnLi9wYXJ0aXRpb24nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHBhdGhFcSB9IGZyb20gJy4vcGF0aEVxJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoT3IgfSBmcm9tICcuL3BhdGhPcidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aFNhdGlzZmllcyB9IGZyb20gJy4vcGF0aFNhdGlzZmllcydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcGlja0FsbCB9IGZyb20gJy4vcGlja0FsbCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcGlja0J5IH0gZnJvbSAnLi9waWNrQnknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHBpcGUgfSBmcm9tICcuL3BpcGUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHBpcGVLIH0gZnJvbSAnLi9waXBlSydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcGlwZVAgfSBmcm9tICcuL3BpcGVQJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwaXBlV2l0aCB9IGZyb20gJy4vcGlwZVdpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHBsdWNrIH0gZnJvbSAnLi9wbHVjaydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcHJlcGVuZCB9IGZyb20gJy4vcHJlcGVuZCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvcEVxIH0gZnJvbSAnLi9wcm9wRXEnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHByb3BJcyB9IGZyb20gJy4vcHJvcElzJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwcm9wT3IgfSBmcm9tICcuL3Byb3BPcidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvcHMgfSBmcm9tICcuL3Byb3BzJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwcm9wU2F0aXNmaWVzIH0gZnJvbSAnLi9wcm9wU2F0aXNmaWVzJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyByYW5nZSB9IGZyb20gJy4vcmFuZ2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHJlZHVjZSB9IGZyb20gJy4vcmVkdWNlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyByZWR1Y2VCeSB9IGZyb20gJy4vcmVkdWNlQnknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHJlZHVjZWQgfSBmcm9tICcuL3JlZHVjZWQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHJlZHVjZVJpZ2h0IH0gZnJvbSAnLi9yZWR1Y2VSaWdodCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcmVkdWNlV2hpbGUgfSBmcm9tICcuL3JlZHVjZVdoaWxlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyByZWplY3QgfSBmcm9tICcuL3JlamVjdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcmVtb3ZlIH0gZnJvbSAnLi9yZW1vdmUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHJlcGVhdCB9IGZyb20gJy4vcmVwZWF0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyByZXBsYWNlIH0gZnJvbSAnLi9yZXBsYWNlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyByZXZlcnNlIH0gZnJvbSAnLi9yZXZlcnNlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzY2FuIH0gZnJvbSAnLi9zY2FuJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzZXF1ZW5jZSB9IGZyb20gJy4vc2VxdWVuY2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHNldCB9IGZyb20gJy4vc2V0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzbGljZSB9IGZyb20gJy4vc2xpY2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHNvcnQgfSBmcm9tICcuL3NvcnQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHNvcnRCeSB9IGZyb20gJy4vc29ydEJ5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzb3J0V2l0aCB9IGZyb20gJy4vc29ydFdpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHNwbGl0IH0gZnJvbSAnLi9zcGxpdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc3BsaXRBdCB9IGZyb20gJy4vc3BsaXRBdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc3BsaXRFdmVyeSB9IGZyb20gJy4vc3BsaXRFdmVyeSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc3BsaXRXaGVuIH0gZnJvbSAnLi9zcGxpdFdoZW4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHN0YXJ0c1dpdGggfSBmcm9tICcuL3N0YXJ0c1dpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHN1YnRyYWN0IH0gZnJvbSAnLi9zdWJ0cmFjdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc3ltbWV0cmljRGlmZmVyZW5jZSB9IGZyb20gJy4vc3ltbWV0cmljRGlmZmVyZW5jZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc3ltbWV0cmljRGlmZmVyZW5jZVdpdGggfSBmcm9tICcuL3N5bW1ldHJpY0RpZmZlcmVuY2VXaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0YWlsIH0gZnJvbSAnLi90YWlsJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0YWtlIH0gZnJvbSAnLi90YWtlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0YWtlTGFzdCB9IGZyb20gJy4vdGFrZUxhc3QnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRha2VMYXN0V2hpbGUgfSBmcm9tICcuL3Rha2VMYXN0V2hpbGUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRha2VXaGlsZSB9IGZyb20gJy4vdGFrZVdoaWxlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0YXAgfSBmcm9tICcuL3RhcCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdGVzdCB9IGZyb20gJy4vdGVzdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdGhlbiB9IGZyb20gJy4vdGhlbidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdGh1bmtpZnkgfSBmcm9tICcuL3RodW5raWZ5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0aW1lcyB9IGZyb20gJy4vdGltZXMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRvTG93ZXIgfSBmcm9tICcuL3RvTG93ZXInXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRvUGFpcnMgfSBmcm9tICcuL3RvUGFpcnMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRvUGFpcnNJbiB9IGZyb20gJy4vdG9QYWlyc0luJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0b1N0cmluZyB9IGZyb20gJy4vdG9TdHJpbmcnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRvVXBwZXIgfSBmcm9tICcuL3RvVXBwZXInXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRyYW5zZHVjZSB9IGZyb20gJy4vdHJhbnNkdWNlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0cmFuc3Bvc2UgfSBmcm9tICcuL3RyYW5zcG9zZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdHJhdmVyc2UgfSBmcm9tICcuL3RyYXZlcnNlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0cmltIH0gZnJvbSAnLi90cmltJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0cnlDYXRjaCB9IGZyb20gJy4vdHJ5Q2F0Y2gnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHVuYXBwbHkgfSBmcm9tICcuL3VuYXBwbHknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHVuYXJ5IH0gZnJvbSAnLi91bmFyeSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdW5jdXJyeU4gfSBmcm9tICcuL3VuY3VycnlOJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmZvbGQgfSBmcm9tICcuL3VuZm9sZCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pb25XaXRoIH0gZnJvbSAnLi91bmlvbldpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHVuaXEgfSBmcm9tICcuL3VuaXEnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHVuaXFCeSB9IGZyb20gJy4vdW5pcUJ5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmlxV2l0aCB9IGZyb20gJy4vdW5pcVdpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHVubGVzcyB9IGZyb20gJy4vdW5sZXNzJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB1bm5lc3QgfSBmcm9tICcuL3VubmVzdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdW50aWwgfSBmcm9tICcuL3VudGlsJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB1cGRhdGUgfSBmcm9tICcuL3VwZGF0ZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlV2l0aCB9IGZyb20gJy4vdXNlV2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdmFsdWVzSW4gfSBmcm9tICcuL3ZhbHVlc0luJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB2aWV3IH0gZnJvbSAnLi92aWV3J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB3aGVuIH0gZnJvbSAnLi93aGVuJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB3aGVyZSB9IGZyb20gJy4vd2hlcmUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHdoZXJlRXEgfSBmcm9tICcuL3doZXJlRXEnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhvdXQgfSBmcm9tICcuL3dpdGhvdXQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHhwcm9kIH0gZnJvbSAnLi94cHJvZCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgemlwT2JqIH0gZnJvbSAnLi96aXBPYmonXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkZCB9IGZyb20gJy4vbnVtYmVyL2FkZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWRkSW5kZXggfSBmcm9tICcuL2FkZEluZGV4J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGp1c3QgfSBmcm9tICcuL2FkanVzdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWRqdXN0V2l0aCB9IGZyb20gJy4vYWRqdXN0V2l0aCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxsIH0gZnJvbSAnLi9hbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsbFBhc3MgfSBmcm9tICcuL2FsbFBhc3MnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsd2F5cyB9IGZyb20gJy4vYWx3YXlzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbmQgfSBmcm9tICcuL2FuZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW55IH0gZnJvbSAnLi9hbnknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFueVBhc3MgfSBmcm9tICcuL2FueVBhc3MnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFwIH0gZnJvbSAnLi9hcCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXBwZW5kIH0gZnJvbSAnLi9hcHBlbmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFwcGx5IH0gZnJvbSAnLi9hcHBseSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmluYXJ5IH0gZnJvbSAnLi9iaW5hcnknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJpbmQgfSBmcm9tICcuL2JpbmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvdGggfSBmcm9tICcuL2Jvb2xlYW4vYm90aCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2FsbCB9IGZyb20gJy4vY2FsbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcGxlbWVudCB9IGZyb20gJy4vY29tcGxlbWVudCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcG9zZSB9IGZyb20gJy4vY29tcG9zZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29uY2F0IH0gZnJvbSAnLi9jb25jYXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmQgfSBmcm9tICcuL2NvbmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGN1cnJ5IH0gZnJvbSAnLi9jdXJyeSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdFRvIH0gZnJvbSAnLi9kZWZhdWx0VG8nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRpZmZEYXRlIH0gZnJvbSAnLi9kYXRlL2RpZmZEYXRlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaXZpZGUgfSBmcm9tICcuL251bWJlci9kaXZpZGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVtcHR5IH0gZnJvbSAnLi9lbXB0eSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzIH0gZnJvbSAnLi9lcXVhbHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGV4aXN0cyB9IGZyb20gJy4vZXhpc3RzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGIH0gZnJvbSAnLi9ib29sZWFuL0YnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbHRlciB9IGZyb20gJy4vZmlsdGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaW5kSW5kZXggfSBmcm9tICcuL2ZpbmRJbmRleCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlyc3QgfSBmcm9tICcuL2ZpcnN0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmbGF0TWFwIH0gZnJvbSAnLi9mbGF0TWFwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb2xkIH0gZnJvbSAnLi9mb2xkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb3JtYXRTdHJpbmcgfSBmcm9tICcuL3N0cmluZy9mb3JtYXRTdHJpbmcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGhhcyB9IGZyb20gJy4vb2JqZWN0L2hhcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzSW4gfSBmcm9tICcuL29iamVjdC9oYXNJbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWRlbnRpY2FsIH0gZnJvbSAnLi9pZGVudGljYWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlkZW50aXR5IH0gZnJvbSAnLi9pZGVudGl0eSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXMgfSBmcm9tICcuL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0FycmF5IH0gZnJvbSAnLi9hcnJheS9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNCb29sZWFuIH0gZnJvbSAnLi9ib29sZWFuL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0RhdGUgfSBmcm9tICcuL2RhdGUvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1wdHkgfSBmcm9tICcuL2lzRW1wdHknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRnV0dXJlRGF0ZSB9IGZyb20gJy4vZGF0ZS9pc0Z1dHVyZURhdGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTWFwIH0gZnJvbSAnLi9tYXAvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTmFuIH0gZnJvbSAnLi9udW1iZXIvaXNOYW4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTnVsbCB9IGZyb20gJy4vbnVsbC9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOdW1iZXIgfSBmcm9tICcuL251bWJlci9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNPYmplY3QgfSBmcm9tICcuL29iamVjdC9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNTZXQgfSBmcm9tICcuL3NldC9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNTdHJpbmcgfSBmcm9tICcuL3N0cmluZy9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNVbmRlZmluZWQgfSBmcm9tICcuL3VuZGVmaW5lZC9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNWYWxpZERhdGUgfSBmcm9tICcuL2RhdGUvaXNWYWxpZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSnVzdCB9IGZyb20gJy4vbW9uYWRzL0p1c3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleXMgfSBmcm9tICcuL2tleXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleXNJbiB9IGZyb20gJy4vb2JqZWN0L2tleXNJbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGFzdCB9IGZyb20gJy4vbGFzdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGlmdCB9IGZyb20gJy4vbGlmdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwIH0gZnJvbSAnLi9tYXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1heCB9IGZyb20gJy4vbWF4J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXliZSB9IGZyb20gJy4vbW9uYWRzL01heWJlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZSB9IGZyb20gJy4vb2JqZWN0L21lcmdlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtdWx0aXBseSB9IGZyb20gJy4vbnVtYmVyL211bHRpcGx5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBub3QgfSBmcm9tICcuL25vdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm90aGluZyB9IGZyb20gJy4vbW9uYWRzL05vdGhpbmcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG9taXQgfSBmcm9tICcuL29iamVjdC9vbWl0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvciB9IGZyb20gJy4vb3InXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhdGggfSBmcm9tICcuL29iamVjdC9wYXRoJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwaWNrIH0gZnJvbSAnLi9vYmplY3QvcGljaydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvcCB9IGZyb20gJy4vb2JqZWN0L3Byb3AnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN1bSB9IGZyb20gJy4vbnVtYmVyL3N1bSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVCB9IGZyb20gJy4vYm9vbGVhbi9UJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0RheSB9IGZyb20gJy4vZGF0ZS90b0RheSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9Ib3VyIH0gZnJvbSAnLi9kYXRlL3RvSG91cidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9NaW51dGVzIH0gZnJvbSAnLi9kYXRlL3RvTWludXRlcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9TZWNvbmRzIH0gZnJvbSAnLi9kYXRlL3RvU2Vjb25kcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHJ1dGh5IH0gZnJvbSAnLi90cnV0aHknXG5leHBvcnQgeyBkZWZhdWx0IGFzIHR5cGUgfSBmcm9tICcuL3R5cGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuaW9uIH0gZnJvbSAnLi9hcnJheS91bmlvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmFsdWVzIH0gZnJvbSAnLi9vYmplY3QvdmFsdWVzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB6aXAgfSBmcm9tICcuL3ppcCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgemlwV2l0aCB9IGZyb20gJy4vemlwV2l0aCdcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGlzXG4gKiBAZGVzY3JpcHRpb24gVmVyaWZpZXMgdGhlIHR5cGUgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50XG4gKlxuICovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBpcyAoQ3RvciwgdmFsKSB7XG4gIHJldHVybiB0eXBlKHZhbCkgPT09IEN0b3Jcbn0pXG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGVtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZW1wdHkgZXF1aXZhbGVudCBvZiB0aGUgZmlyc3QgYXJndW1lbnRcbiAqL1xuaW1wb3J0IGVtcHR5IGZyb20gJy4vZW1wdHknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xuaW1wb3J0IGVxdWFscyBmcm9tICcuL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbXB0eSAoeCkge1xuICByZXR1cm4gZXhpc3RzKHgpICYmIGVxdWFscyh4LCBlbXB0eSh4KSlcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcbmNvbnN0IGlzRnVuY3Rpb24gPSBpcygnRnVuY3Rpb24nKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0l0ZXIgKGl0ZXIpIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oaXRlcltTeW1ib2wuaXRlcmF0b3JdKVxufVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYW4gSXRlcmF0b3IgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuM1xuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmF0b3J9IGFcbiAqIEByZXR1cm4ge0l0ZXJhdG9yfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNhbGxiYWNrLCBpdGVyYXRvcikge1xuICBsZXQgciA9IFtdXG4gIGZvciAobGV0IG5leHRWYWx1ZSA9IGl0ZXJhdG9yLm5leHQoKTsgbmV4dFZhbHVlLmRvbmUgIT09IHRydWU7IG5leHRWYWx1ZSA9IGl0ZXJhdG9yLm5leHQoKSkge1xuICAgIHIucHVzaChjYWxsYmFjayhpdGVyYXRvci52YWx1ZSgpKSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0aGUga2V5cyBvZiB0aGUgcHJvdmlkZWQgb2JqZWN0IG9yIGl0ZXJhdG9yXG4gKlxuICogQGZ1bmN0aW9uIGtleXNcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIHRoZSBrZXlzIG9mIHRoZSBwcm92aWRlZCBvYmplY3Qgb3IgaXRlcmF0b3JcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgb2JqIC0+IFsqXVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIE9iaiBmcm9tIHpoaWNoIHRvIHRha2UgdGhlIGtleXNcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgb2JqZWN0S2V5cyBmcm9tICcuL29iamVjdC9rZXlzJ1xuaW1wb3J0IG1hcEtleXMgZnJvbSAnLi9tYXAva2V5cydcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChvYmopIHtcbiAgc3dpdGNoICh0eXBlKG9iaikpIHtcbiAgICBjYXNlICdNYXAnOlxuICAgICAgcmV0dXJuIG1hcEtleXMob2JqKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gb2JqZWN0S2V5cyhvYmopXG4gIH1cbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBsYXN0XG4gKiBAcGFyYW0gW2FdXG4gKiBAcmV0dXJuIGEgfCB1bmRlZmluZWRcbiAqL1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkxKGZ1bmN0aW9uIGxhc3QgKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5sZW5ndGggPyBhW2EubGVuZ3RoIC0gMV0gOiB1bmRlZmluZWRcbn0pXG4iLCIvKipcbiAqIFwibGlmdHNcIiBhIGZ1bmN0aW9uIG9mIGFyaXR5ID4gMSBzbyB0aGF0IGl0IG1heSBcIm1hcCBvdmVyXCIgYSBsaXN0LCBGdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvbiBsaWZ0XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnICgqLi4uIC0+ICopIC0+IChbKl0uLi4gLT4gWypdKVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgY3VycnkxIGZyb20gJy4vX3ByaXZhdGUvY3VycnkxJ1xuaW1wb3J0IGZvbGQgZnJvbSAnLi9mb2xkJ1xuaW1wb3J0IGFwIGZyb20gJy4vYXAnXG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBsaWZ0IChmbikge1xuICBjb25zdCBsaWZ0ZWQgPSBjdXJyeTEoY3VycnkoZm4pKVxuICByZXR1cm4gY3VycnkoZnVuY3Rpb24gX2xpZnQgKCkge1xuICAgIHJldHVybiBmb2xkKGFwLCBtYXAobGlmdGVkLCBhcmd1bWVudHNbMF0pLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxuICB9KVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIGl0ZXJhYmxlIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb24gbWFwXG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gd2hpY2ggbWFwcyBvdmVyIGFuIGl0ZXJhYmxlLlxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gYiAtPiBiXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBhcnJheU1hcCBmcm9tICcuL2FycmF5L21hcCdcbmltcG9ydCBvYmplY3RNYXAgZnJvbSAnLi9vYmplY3QvbWFwJ1xuaW1wb3J0IG1hcE1hcCBmcm9tICcuL21hcC9tYXAnXG5pbXBvcnQgc3RyaW5nTWFwIGZyb20gJy4vc3RyaW5nL21hcCdcbmltcG9ydCBpdGVyYXRvck1hcCBmcm9tICcuL2l0ZXJhdG9yL21hcCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcbmltcG9ydCBpc0l0ZXJhdG9yIGZyb20gJy4vaXRlcmF0b3IvaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgc3dpdGNoICh0eXBlKGEpKSB7XG4gICAgY2FzZSAnRnVuY3Rpb24nOlxuICAgICAgcmV0dXJuIGN1cnJ5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNiLmNhbGwodGhpcywgYS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKVxuICAgICAgfSlcbiAgICBjYXNlICdPYmplY3QnOlxuICAgICAgcmV0dXJuIG9iamVjdE1hcChjYiwgYSlcbiAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgcmV0dXJuIHN0cmluZ01hcChjYiwgYSlcbiAgICBjYXNlICdNYXAnOlxuICAgICAgcmV0dXJuIG1hcE1hcChjYiwgYSlcbiAgICBjYXNlICdBcnJheSc6XG4gICAgICByZXR1cm4gYXJyYXlNYXAoY2IsIGEpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0l0ZXJhdG9yKGEpXG4gICAgICAgID8gaXRlcmF0b3JNYXAoY2IsIGEpXG4gICAgICAgIDogYXJyYXlNYXAoY2IsIGEpXG4gIH1cbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBtYXBGaWx0ZXJcbiAqIEBwcml2YXRlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcEZpbHRlciAoZm4sIG0pIHtcbiAgbGV0IHIgPSBuZXcgTWFwKClcblxuICBsZXQgaXQgPSBtLmVudHJpZXMoKVxuICBsZXQgcmVzdWx0ID0gaXQubmV4dCgpXG5cbiAgd2hpbGUgKCFyZXN1bHQuZG9uZSkge1xuICAgIGNvbnN0IGsgPSByZXN1bHQudmFsdWVbMF1cbiAgICBjb25zdCB2ID0gcmVzdWx0LnZhbHVlWzFdXG4gICAgaWYgKGZuKGssIHYpKSByLnNldChrLCB2KVxuICAgIHJlc3VsdCA9IGl0Lm5leHQoKVxuICB9XG5cbiAgLy8gTGltaXRlZCBicm93c2VyIHN1cHBvcnRcbiAgLy8gbS5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gIC8vICAgaWYgKGZuKGssIHYpKSByLnNldChrLCB2KVxuICAvLyB9KVxuXG4gIC8vIGJhYmVsIHRyYW5zcGlsZSBpc3N1ZXNcbiAgLy8gZm9yIChjb25zdCBbaywgdl0gb2YgbS5lbnRyaWVzKCkpIHtcbiAgLy9cbiAgLy8gfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnTWFwJylcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgb3duIGtleXMgb2YgYW4gTWFwIGFzIGFuIEFycmF5XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gW2JdXG4gKiBAcGFyYW0ge09iamVjdH1cbiAqIEByZXR1cm4ge0FycmF5fVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XG4gIHJldHVybiBhLmtleXMoKVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgTWFwIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge01hcH0gYVxuICogQHJldHVybiB7TWFwfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4uL2VtcHR5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGNvbnN0IHIgPSBlbXB0eShhKVxuICBhLmZvckVhY2goKHYsIGssIG1hcCkgPT4ge1xuICAgIHIuc2V0KGssIGNiKHYsIGssIG1hcCkpXG4gIH0pXG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXJnZXN0IG9mIHRoZSAyIGFyZ3VtZW50cyBwcm92aWRlZFxuICpcbiAqIEBmdW5jdGlvbiBtYXhcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHsqfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1heCAoYSwgYikge1xuICByZXR1cm4gYiA+IGEgPyBiIDogYVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIEp1c3RcbiAqIEBwYXJhbSB2YWxcbiAqIEByZXR1cm5zIHtKdXN0fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmxldCBKdXN0ID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl92YWx1ZSA9IHZhbFxuICByZXR1cm4gdGhpc1xufVxuXG5KdXN0LnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5KdXN0LnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBKdXN0XG4iLCJpbXBvcnQgSnVzdCBmcm9tICcuL0p1c3QnXG5pbXBvcnQgTm90aGluZyBmcm9tICcuL05vdGhpbmcnXG5cbi8qKlxuICogQGZ1bmN0aW9uIE1heWJlXG4gKiBAcGFyYW0gdmFsXG4gKiBAY29uc3RydWN0b3JcbiAqL1xubGV0IE1heWJlID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl9fdmFsdWUgPSB2YWxcbn1cblxuTWF5YmUub2YgPSBmdW5jdGlvbiAodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBNYXliZSkgcmV0dXJuIHZhbFxuICBpZiAodGhpcyBpbnN0YW5jZW9mIE1heWJlKSB7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICByZXR1cm4gbmV3IE1heWJlKHZhbClcbn1cblxuTWF5YmUucHJvdG90eXBlLmdldE9yRWxzZSA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiB0aGlzLmlzTm90aGluZygpID8gbiA6IHRoaXMuX192YWx1ZVxufVxuXG5NYXliZS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGYpIHtcbiAgaWYgKHRoaXMuaXNOb3RoaW5nKCkpIHtcbiAgICByZXR1cm4gTWF5YmUub2YobnVsbClcbiAgfVxuICByZXR1cm4gTWF5YmUub2YoZih0aGlzLl9fdmFsdWUpKVxufVxuXG5NYXliZS5wcm90b3R5cGUuYXAgPSBmdW5jdGlvbiAobSkge1xuICByZXR1cm4gbS5tYXAodGhpcy5fX3ZhbHVlKVxufVxuXG5NYXliZS5wcm90b3R5cGUuaXNOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKHRoaXMuX192YWx1ZSA9PSBudWxsKVxufVxuXG5NYXliZS5wcm90b3R5cGUuaXNKdXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gIXRoaXMuaXNOb3RoaW5nKClcbn1cblxuTWF5YmUucHJvdG90eXBlLk5vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgTm90aGluZygpXG59XG5cbk1heWJlLnByb3RvdHlwZS5KdXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IEp1c3QodGhpcy5fdmFsdWUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1heWJlXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBOb3RoaW5nXG4gKiBAY29uc3RydWN0b3JcbiAqL1xubGV0IE5vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG59XG5cbk5vdGhpbmcucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZhbHNlXG59XG5Ob3RoaW5nLnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGhpbmdcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG5vdFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbm90ICh4KSB7XG4gIHJldHVybiAheFxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDMvMDIvMjAxOVxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdudWxsJylcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSAyIGFyZ3VtZW50c1xuICpcbiAqIEBmdW5jdGlvbiBhZGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIDIgYXJndW1lbnRzXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxuICogQHBhcmFtIHtOdW1iZXJ9IGJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWRkIChhLCBiKSB7XG4gIHJldHVybiArYSArICtiXG59KVxuIiwiLyoqXG4gKlxuICpcbiAqIEBmdW5jdGlvbiBkaXZpZGVcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkaXZpc2lvbiBvZiB0aGUgMiBhcmd1bWVudHNcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXG4gKiBAcGFyYW0ge051bWJlcn0gYlxuICogQHJldHVybiB7TnVtYmVyfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBkaXZpZGUgKGEsIGIpIHtcbiAgcmV0dXJuICthIC8gK2Jcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ051bWJlcicpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBpc05hTlxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiBudW1iZXIgaXMgTkFOXG5cbiAqL1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXMnXG5pbXBvcnQgYW5kIGZyb20gJy4uL2FuZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOYW4gKHgpIHtcbiAgcmV0dXJuIGFuZChpc051bWJlcih4KSwgaXNOYU4oeCkpXG59O1xuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBwcm9kdWN0IG9mIHRoZSAyIGFyZ3VtZW50c1xuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG11bHRpcGx5IChhLCBiKSB7XG4gIHJldHVybiArYSAqICtiXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIG51bWJlcnMgaW4gYW4gYXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgW051bWJlcl0gLT4gTnVtYmVyXG4gKiBAcGFyYW0ge0FycmF5fSBhXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgYWRkIGZyb20gJy4vYWRkJ1xuaW1wb3J0IGZvbGQgZnJvbSAnLi4vZm9sZCdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gc3VtIChhKSB7XG4gIHJldHVybiBmb2xkKGFkZCwgMCwgYSlcbn0pXG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi4vZXhpc3RzJ1xuaW1wb3J0IG5vdCBmcm9tICcuLi9ub3QnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHgsIHkpID0+IHtcbiAgZm9yIChsZXQga2V5WCBpbiB4KSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxuICAgIGlmIChub3QoZXF1YWxzKHhba2V5WF0sIHlba2V5WF0pKSkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmb3IgKGxldCBrZXlZIGluIHkpIHtcbiAgICBpZiAobm90KGV4aXN0cyh4W2tleVldKSkgJiYgZXhpc3RzKHlba2V5WV0pKSByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gb2JqZWN0RmlsdGVyXG4gKiBAcHJpdmF0ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBvYmplY3RGaWx0ZXIgKGZuLCBvKSB7XG4gIGxldCByID0ge31cbiAgY29uc3QgayA9IGtleXMobylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZuKG9ba1tpXV0pKSByW2tbaV1dID0gb1trW2ldXVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQHByaXZhdGVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIG8pIHtcbiAgY29uc3QgayA9IGtleXMobylcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgbGV0IHIgPSBPYmplY3QoaW5pdClcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2Iociwgb1trW2ldXSwga1tpXSwgbylcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIHtTdHJpbmd9IC0+IHtPYmplY3R9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBoYXMgKHByb3AsIG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eSwgZXZlbiBpZiBpdCBpcyBpbmhlcml0ZWRcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcge1N0cmluZ30gLT4ge09iamVjdH0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGhhc0luIChwcm9wLCBvYmopIHtcbiAgcmV0dXJuIHByb3AgaW4gb2JqXG59KVxuIiwiLyoqXG5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnT2JqZWN0JylcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgb3duIGtleXMgb2YgYW4gb2JqZWN0IGFzIGFuIEFycmF5XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gW2JdXG4gKiBAcGFyYW0ge09iamVjdH1cbiAqIEByZXR1cm4ge0FycmF5fVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhPYmplY3QoYSkpXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIGFsbCB0aGUga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBbYl1cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQHJldHVybiB7QXJyYXl9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGtleXMgKGEpIHtcbiAgY29uc3QgciA9IFtdXG4gIGZvciAoY29uc3QgayBpbiBhKSB7XG4gICAgci5wdXNoKGspXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBvYmplY3QgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vZW1wdHknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgayA9IGtleXMoYSlcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltrW2ldXSA9IGNiKGFba1tpXV0sIGtbaV0sIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi4vaWRlbnRpY2FsJ1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL29iamVjdC9pcydcbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzJ1xuaW1wb3J0IHVuaW9uIGZyb20gJy4uL2FycmF5L3VuaW9uJ1xuXG5jb25zdCBtZXJnZSA9IGN1cnJ5KChvYmpMLCBvYmpSKSA9PiB7XG4gIGxldCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpMKVxuXG4gIGlmIChpZGVudGljYWwob2JqTCwgb2JqUikpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb2JqTClcbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gb2JqUikge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9ialIsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGNvbnN0IG9sZFZhbHVlID0gb2JqUltrZXldXG4gICAgY29uc3QgbmV3VmFsdWUgPSBvYmpMW2tleV1cblxuICAgIGlmIChpc09iamVjdChvbGRWYWx1ZSkgJiYgaXNPYmplY3QobmV3VmFsdWUpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKG9sZFZhbHVlLCBuZXdWYWx1ZSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkobmV3VmFsdWUpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHVuaW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSBvbGRWYWx1ZSAvLyBUT0RPOiB0aGlzIGlzIGEgcmVmZXJlbmNlLCBzaG91bGQgYmUgY2xvbmVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufSlcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VcbiIsIi8qKlxuXG4gKiBlcXVhbHNcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgob2JqLCBuYW1lcykgPT4ge1xuICBsZXQgcmVzdWx0ID0ge31cblxuICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgcmV0dXJuIG5hbWVzLmluZGV4T2Yoa2V5KSA9PT0gLTFcbiAgfSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gcGF0aFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHBhdGggKHBhdGgsIG9iaikge1xuICBsZXQgdmFsID0gb2JqXG4gIGxldCBpZHggPSAwXG4gIGxldCBwXG4gIHdoaWxlIChpZHggPCBwYXRoLmxlbmd0aCkge1xuICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHAgPSBwYXRoW2lkeF1cbiAgICB2YWwgPSBOdW1iZXIuaXNJbnRlZ2VyKHApXG4gICAgICA/IHAgPCAwID8gdmFsW3ZhbC5sZW5ndGggKyBwXSA6IHZhbFtwXVxuICAgICAgOiB2YWxbcF1cbiAgICBpZHggKz0gMVxuICB9XG4gIHJldHVybiB2YWxcbn0pXG4vLyBsZXQgciA9IG9ialxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4vLyAgIGlmIChyID09IG51bGwpIHJldHVybiB1bmRlZmluZWRcbi8vICAgciA9IHJbcGF0aFtpXV1cbi8vIH1cbi8vIHJldHVybiByXG4vLyB9KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gcGlja1xuICogQGRlc2NyaXB0aW9uIHJldHVybnMgYSBuZXcgYmplY3Qgd2l0aCBvbmx5IHRoZSBwcm9wcyB0aGF0IGFyZSBwcm92aWRlZFxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgLSBBcnJheSBvZiBwcm9wZXJ0eSBuYW1lc1xuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIFRoZSBvYmplY3QgZnJvbSB3aGljaCB0byB0YWtlIHRoZSBwcm9wZXJ0aWVzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gcGljayAocHJvcHMsIG9iaikge1xuICBjb25zdCByID0ge31cbiAgbGV0IGkgPSAwXG4gIHdoaWxlIChpIDwgcHJvcHMubGVuZ3RoKSB7XG4gICAgaWYgKHByb3BzW2ldIGluIG9iaikge1xuICAgICAgcltwcm9wc1tpXV0gPSBvYmpbcHJvcHNbaV1dXG4gICAgfVxuICAgIGkgKz0gMVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gcHJvcFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHByb3AgKHAsIG9iaikge1xuICByZXR1cm4gb2JqW3BdXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdmFsdWVzXG4gKiBAZGVzY3JpcHRpb24gUkV0dXJucyBhIGxpc3Qgb2YgdmFsdWVzIHRha2VuIGZyb20gYW4gb2JqZWN0cyBvd24gcHJvcGVydGllc1xuICogQHBhcmFtIHtvYmplY3R9IC0gb2JqIFRoZSBvYmplY3QgZnJvbSB3aGljaCB0byB0YWtlIHRoZSB2YWx1ZXNcbiAqIEByZXR1cm4ge2FycmF5fVxuICpcbiAqKi9cbmltcG9ydCBjdXJyeTEgZnJvbSAnLi4vX3ByaXZhdGUvY3VycnkxJ1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeTEoZnVuY3Rpb24gdmFsdWVzIChvYmopIHtcbiAgY29uc3QgayA9IGtleXMob2JqKVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgY29uc3QgciA9IFtdXG4gIGxldCBpID0gMFxuICB3aGlsZSAoaSA8IGwpIHtcbiAgICByW2ldID0gb2JqW2tbaV1dXG4gICAgaSArPSAxXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBvclxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBvbmUgb3IgdGhlIG90aGVyIGlzIHRydWVcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9yICh4LCB5KSB7XG4gIHJldHVybiB4IHx8IHlcbn0pXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ1NldCcpXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gc3RyaW5nQ29uY2F0XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7IC8vIHVzZSBmdW5jdGlvbigpLCBhcnJvdyBmdW5jdGlvbiBkb2Vzbid0IGJpbmQgYXJndW1lbnRzXG4gIHJldHVybiBTdHJpbmcoYSkgKyBTdHJpbmcoYilcbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cbiAqL1xuaW1wb3J0IHRvQXJyYXkgZnJvbSAnLi4vYXJyYXkvdG8nXG5pbXBvcnQgbm90IGZyb20gJy4uL25vdCdcbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0U3RyaW5nIChzdHIpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcbiAgbGV0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cylcblxuICBhcmdzLnNoaWZ0KClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC97KFxcZCspfS9nLCAobWF0Y2gsIGlkeCkgPT4ge1xuICAgIHJldHVybiBub3QoaXMoJ1VuZGVmaW5lZCcsIGFyZ3NbaWR4XSkpID8gYXJnc1tpZHhdIDogbWF0Y2hcbiAgfSlcbn1cbiIsIi8qKlxuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ1N0cmluZycpXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhIHN0cmluZyBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgbGV0IHIgPSAnJ1xuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHIgKz0gY2IoYS5jaGFyQXQoaSksIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiB0cnV0aHlcbiAqL1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuL2V4aXN0cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJ1dGh5ICh4KSB7XG4gIHJldHVybiAoeCAhPT0gZmFsc2UpICYmIGV4aXN0cyh4KVxufTtcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHR5cGVcbiAqL1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkxKGZ1bmN0aW9uIHR5cGUgKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KS5zbGljZSg4LCAtMSlcbn0pXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAzLzAyLzIwMTlcbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygndW5kZWZpbmVkJylcbiIsIi8qKlxuXG4gKiB6aXBcbiAqXG4gKiBAZnVuY3Rpb24gemlwXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IHppcFdpdGggZnJvbSAnLi96aXBXaXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiB6aXAgKGEsIGIpIHtcbiAgcmV0dXJuIHppcFdpdGgoZnVuY3Rpb24gX3ppcFdpdGggKHgsIHkpIHsgcmV0dXJuIFt4LCB5XSB9LCBhLCBiKVxufSlcbiIsIi8qKlxuXG4gKiB6aXBXaXRoXG4gKlxuICogIEBmdW5jdGlvbiB6aXBXaXRoXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiB6aXBXaXRoIChjYiwgYSwgYikge1xuICBjb25zdCBhcnIgPSBbXVxuICBjb25zdCBsZW4gPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpXG4gIGxldCBpID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIucHVzaChjYihhW2ldLCBiW2ldKSlcbiAgfVxuICByZXR1cm4gYXJyXG59KVxuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5pbXBvcnQgbWFwIGZyb20gJ2Z1bi5qcy9zcmMvbWFwJ1xuaW1wb3J0IGZvbGQgZnJvbSAnZnVuLmpzL3NyYy9mb2xkJ1xuaW1wb3J0IGVxdWFscyBmcm9tICdmdW4uanMvc3JjL2VxdWFscydcbmltcG9ydCBjb25jYXQgZnJvbSAndXRpbC9jb25jYXQnXG5pbXBvcnQgZW1wdHkgZnJvbSAndXRpbC9lbXB0eSdcbmltcG9ydCBkb3QgZnJvbSAndXRpbC9kb3QnXG5pbXBvcnQgaWRlbnRpdHkgZnJvbSAndXRpbC9pZGVudGl0eSdcbmltcG9ydCB0cmFuc3Bvc2UgZnJvbSAndXRpbC90cmFuc3Bvc2UnXG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSAndXRpbC9nZW5lcmF0ZSdcbi8vIGltcG9ydCBncHVtYXAgZnJvbSAndXRpbC9ncHVtYXAnXG4vLyBpbXBvcnQgZ3B1Zm9sZCBmcm9tICd1dGlsL2dwdWZvbGQnXG4vLyBpbXBvcnQgZ3B1cHJvZHVjdCBmcm9tICd1dGlsL2dwdXByb2R1Y3QnXG5cbi8qKlxuICogQGNsYXNzIE1hdHJpeFxuICogQGNsYXNzZGVzYyBNYXRyaXggYXBwbGljYXRpdmUgcHJvdmlkaW5nIHN0YW5kYXJkIG1hdHJpeCBvcGVyYXRpb25zXG4gKiBAc3VtbWFyeSBUaGUgTWF0cml4IGNsYXNzIHNob3VsZCBub3QgYmUgaW5zdGFudGlhdGVkIHdpdGggdGhlIG5ldyBrZXl3b3JkLiBJbnN0ZWFkIHVzZSB0aGUgTWF0cml4Lm9mIHN5bnRheCB0byBjcmVhdGUgYSBuZXcgTWF0cml4LiBVbmZvcnR1bmF0bHkganNkb2NzIGRvZXMgbm90IGFsbG93IGZvciB0aGUgY29uc3RydWN0b3IgdG8gYmUgaGlkZGVuLlxuICogQGhpZGVjb250cnVjdG9yXG4gKiBAc2VlIG9mXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKlxuICovXG5sZXQgTWF0cml4ID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl9fdmFsdWUgPSB2YWxcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gb2ZcbiAqIEBkZXNjIENyZWF0ZXMgYSBNYXRyaXggb2JqZWN0IGFuZCBmbGF0dGVucyB0aGUgTWF0cml4XG4gKiBAcGFyYW0gdmFsIHthcnJheXxmdW5jdGlvbn0gQW4gYXJyYXkgb2YgYXJyYXlzXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICpcbiAqL1xuTWF0cml4Lm9mID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgTWF0cml4KSByZXR1cm4gdmFsXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICByZXR1cm4gbmV3IE1hdHJpeCh2YWwpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGVcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKiBtLnR5cGUgPT09ICdNYXRyaXgnXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudHlwZSA9ICdNYXRyaXgnXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHByZWNpc2lvblxuICogQHR5cGUge251bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0ucHJlY2lzaW9uID09PSA0XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucHJlY2lzaW9uID0gNFxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBzZXRQcmVjaXNpb25cbiAqIEBwYXJhbSBwcmVjaXNpb24ge251bWJlcn0gU2V0IHRoZSBudW1iZXIgb2YgZGVjaW1hbHMgZm9yIHJvdW5kaW5nXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKiBtLnNldFByZWNpc2lvbigxMClcbiAqIG0ucHJlY2lzaW9uID09PSAxMFxuICovXG5NYXRyaXgucHJvdG90eXBlLnNldFByZWNpc2lvbiA9IGZ1bmN0aW9uIChwcmVjaXNpb24pIHtcbiAgdGhpcy5wcmVjaXNpb24gPSBwcmVjaXNpb25cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgaXNTeW1tZXRyaWNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiB0cnVlID09PSBBLmlzU3ltbWV0cmljKClcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaXNTeW1tZXRyaWMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGEgPSB0aGlzLl9fdmFsdWVcbiAgY29uc3QgYiA9IE1hdHJpeC50cmFuc3Bvc2UodGhpcykuX192YWx1ZVxuICByZXR1cm4gZXF1YWxzKGEsIGIpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGlzU3F1YXJlXG4gKiBAZGVzYyBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGNvbnRhaW5zIGEgc3F1YXJlIE1hdHJpeFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIHRydWUgPT09IEEuaXNTcXVhcmUoKVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pc1NxdWFyZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGVxdWFscyh0aGlzLmdldENvbHMoKSwgdGhpcy5nZXRSb3dzKCkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGlzT3J0aG9nb25hbFxuICogQHBhcmFtIE0ge01hdHJpeHxhcnJheX1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBbWy0wLjMwOTIsIC0wLjk1MTBdLCBbLTAuOTUxMCwgMC4zMDkyXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXguZnJvbUFycmF5KHJlc3VsdClcbiAqIHRydWUgID09PSBBLmlzT3J0aG9nb25hbCgpXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaXNPcnRob2dvbmFsID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBeEF0ID0gdGhpcy5kb3QodGhpcy50cmFuc3Bvc2UoKSlcbiAgY29uc3QgSSA9IHRoaXMuaWRlbnRpdHkoKVxuICByZXR1cm4gZXF1YWxzKEF4QXQsIEkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGdldENvbHNcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0Q29scygpICA9PT0gMlxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5nZXRDb2xzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3ZhbHVlWzBdLmxlbmd0aFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBlcXVhbHNcbiAqIEBwYXJhbSBNIHtNYXRyaXh8YXJyYXl9XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGEgPSBbWzEsIDFdLCBbMSwgMV1dXG4gKiB2YXIgQSA9IE1hdHJpeC5vZihhKVxuICogdmFyIEIgPSBNYXRyaXgub2YoYSlcbiAqIHRydWUgID09PSBBLmVxdWFscyhCKVxuICovXG5NYXRyaXgucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBlcXVhbHModGhpcy5fX3ZhbHVlLCBNLl9fdmFsdWUgfHwgTSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZ2V0Um93c1xuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogQS5nZXRSb3dzKCkgIC8vIDJcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5nZXRSb3dzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3ZhbHVlLmxlbmd0aFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBnZXRTaGFwZVxuICogQHJldHVybnMge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiBBLmdldFNoYXBlKCkgIC8vIFsyLCAyXVxuICovXG5NYXRyaXgucHJvdG90eXBlLmdldFNoYXBlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW3RoaXMuZ2V0Um93cygpLCB0aGlzLmdldENvbHMoKV1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgbWFwXG4gKiBAZGVzY3JpcHRpb24gTWFwcyBvdmVyIHRoZSByb3dzIG9mIHRoZSBtYXRyaXggdXNpbmcgYSBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIG0ubWFwKHggPT4geC5tYXAoeSA9PiB5KyAxKSlcbiAqIC8vIFtbMiwgMl0sIFsyLCAyXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihtYXAoZikodGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gbWFwXG4gKiBAZGVzY3JpcHRpb24gU3RhdGljIGZ1bmN0aW9uIHRoYXQgbWFwcyBvdmVyIHRoZSByb3dzIG9mIHRoZSBtYXRyaXggdXNpbmcgYSBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSBNIHtNYXRyaXh8YXJyYXl9IE1hdHJpeCBvciBhcnJheSB0byBtYXBcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSBNYXRyaXgubWFwKHg9ID4geC5tYXAoeSA9PiB5KyAxKSwgW1sxLCAxXSwgWzEsIDFdXSlcbiAqIC8vIFtbMiwgMl0sIFsyLCAyXV1cbiAqXG4gKi9cbk1hdHJpeC5tYXAgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLm1hcChmKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZm9sZFxuICogQGRlc2NyaXB0aW9uIFJlZHVjZSB0aGUgbWF0cml4IHJvd3MgdXNpbmcgYSByZWR1Y2UgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQSByZWR1Y2UvZm9sZCBmdW5jdGlvblxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gRmxhdHRlbiBNYXRyaXhcbiAqIE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKS5mb2xkKChwcmV2LCBuZXh0KSA9PiBwcmV2LmNvbmNhdChuZXh0KSlcbiAqIC8vIFsxLCAxLCAxLCAxXVxuICovXG5NYXRyaXgucHJvdG90eXBlLmZvbGQgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gTWF0cml4Lm9mKGZvbGQoZiwgW10pKHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgZnVuY3Rpb24gdG8gcmVkdWNlIHRoZSBtYXRyaXggcm93cyB1c2luZyBhIHJlZHVjZSBmdW5jdGlvblxuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBBIHJlZHVjZS9mb2xkIGZ1bmN0aW9uXG4gKiBAcGFyYW0gTSB7TWF0cml4fSBUaGUgTWF0cml4IHRvIHJlZHVjZVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG5cbiAqIC8vIFN1bSBvZiBhbGwgbWF0cml4IHZhbHVlc1xuICogY29uc3QgcmVkdWNlciA9IChwcmV2LCBuZXh0KSA9PiBOdW1iZXIocHJldikgKyBuZXh0LnJlZHVjZSgoYWNjLCB4KSA9PiBhY2MgKyB4LCAwKVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dXG4gKiBNYXRyaXguZm9sZChyZWR1Y2VyLCBBKVxuICogLy8gNFxuICovXG5NYXRyaXguZm9sZCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkuZm9sZChmKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgYXBcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWVzIGEgTWF0cml4IHRvIGEgZnVuY3Rpb25cbiAqIEBwYXJhbSBNIHtNYXRyaXh9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBmID0geCA9PiB4LnJlZHVjZSgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMiwgM10sIFs0LCA1LCA2XSwgWzcsIDgsIDldXSlcbiAqIE1hdHJpeC5vZihmKS5hcChNKVxuICogLy8gW1s2XSwgWzE1XSwgWzI0XVxuICovXG5NYXRyaXgucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5tYXAodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBhcFxuICogQGRlc2NyaXB0aW9uIEFwcGxpZXMgYSBNYXRyaXggdG8gYSBmdW5jdGlvblxuICogQHBhcmFtIGYge2Z1bmN0aW9ufVxuICogQHBhcmFtIE0ge01hdHJpeHxhcnJheX1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGYgPSB4ID0+IHgucmVkdWNlKChwcmV2LCBuZXh0KSA9PiBwcmV2ICsgbmV4dClcbiAqIE1hdHJpeC5hcChmLCBbWzEsIDIsIDNdLCBbNCwgNSwgNl0sIFs3LCA4LCA5XV0pXG4gKiAvLyBbWzZdLCBbMTVdLCBbMjRdXG4gKi9cbk1hdHJpeC5hcCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZikuYXAoTSlcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGNvbmNhdFxuICogQGRlc2NyaXB0aW9uIENvbmNhdGVuYXRlcyAyIE1hdHJpY2VzIHVzaW5nIGEgZnVuY3Rpb24gYXMgb3BlcmF0b3JcbiAqIEBwYXJhbSBNIHtNYXRyaXh9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1swLCAxLCAxXSwgWzIsIDMsIDRdXVxuICogY29uc3QgYiA9IFtbMiwgMiwgMl0sIFszLCAzLCAzXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqIGNvbnN0IE0gPSBBLmNvbmNhdChCKVxuICogLy8gW1swLCAxLCAxLCAyLCAyLCAyXSwgWzIsIDMsIDQsIDMsIDMsIDNdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAoTSwgZiA9IGNvbmNhdCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChmKE0pKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBjb25jYXRcbiAqIEBkZXNjcmlwdGlvbiBDb25jYXRlbmF0ZXMgMiBNYXRyaWNlcyB1c2luZyBhIGZ1bmN0aW9uIGFzIG9wZXJhdG9yXG4gKiBAcGFyYW0gQSB7TWF0cml4fVxuICogQHBhcmFtIEIge01hdHJpeH1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbWzAsIDEsIDFdLCBbMiwgMywgNF1dXG4gKiBjb25zdCBiID0gW1syLCAyLCAyXSwgWzMsIDMsIDNdXVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihiKVxuICogY29uc3QgTSA9IE1hdHJpeC5jb25jYXQoQSwgQilcbiAqIC8vIFtbMCwgMSwgMSwgMiwgMiwgMl0sIFsyLCAzLCA0LCAzLCAzLCAzXV1cbiAqXG4gKi9cbk1hdHJpeC5jb25jYXQgPSBjdXJyeShmdW5jdGlvbiAoQSwgQiwgZiA9IGNvbmNhdCkge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLm1hcChmKEIpKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm4gYW4gZW1wdHkgTWF0cml4IGZyb20gYW4gZXhpc3RpbmcgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChlbXB0eSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm4gYW4gZW1wdHkgTWF0cml4IGZyb20gYW4gZXhpc3RpbmcgTWF0cml4XG4gKiBAcGFyYW0gcm93cyB7bnVtYmVyfVxuICogQHBhcmFtIGNvbHMge251bWJlcn1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5lbXB0eSA9IGN1cnJ5KGZ1bmN0aW9uIChyb3dzID0gMCwgY29scyA9IDApIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpIC8vIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4gIHJldHVybiBNYXRyaXgub2YobSkubWFwKGVtcHR5KVxufSlcblxuLy8gIyMjIyAjIyMjICMjIyMgLy9cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgaWRlbnRpdHlcbiAqIEBkZXNjIFJldHVybnMgYW4gaWRlbnRpdHkgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1sxLCAyLCAzXSwgWzQsIDUsIDZdXVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQWlkZW50aXR5ID0gQS5pZGVudGl0eSgpXG4gKiAvLyBbWzEsIDAsIDBdLCBbMCwgMSwgMF1dXG4gKlxuKi9cbk1hdHJpeC5wcm90b3R5cGUuaWRlbnRpdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YoaWRlbnRpdHkpLmFwKHRoaXMpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIGlkZW50aXR5XG4gKiBAZGVzYyBSZXR1cm5zIGFuIGlkZW50aXR5IG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5pZGVudGl0eSgzLCAyKVxuICogLy8gW1sxLCAwLCAwXSwgWzAsIDEsIDBdXVxuICpcbiAqL1xuTWF0cml4LmlkZW50aXR5ID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpIC8vIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4gIHJldHVybiBNYXRyaXgub2YoaWRlbnRpdHkpLmFwKG0pXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGNvbWJpbmVcbiAqIEBzZWUgTWF0cml4LmNvbmNhdFxuICogQHBhcmFtIE1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY29tYmluZSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuY29uY2F0KE1hdHJpeC5vZihNKSwgY29uY2F0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBjb21iaW5lXG4gKiBAc2VlIE1hdHJpeC5jb25jYXRcbiAqIEBwYXJhbSBNXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXguY29tYmluZSA9IGZ1bmN0aW9uIChBLCBCKSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkuY29uY2F0KE1hdHJpeC5vZihCKSwgY29uY2F0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBkb3RcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuIDIgbWF0cmljZXNcbiAqIEBwYXJhbSBNXG4gKiBAcGFyYW0gZlxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQ3JlYXRlIG1hdHJpeFxuICogY29uc3QgbSA9IE1hdHJpeC5vZihbWzEsIDJdLCBbMywgNF1dKVxuICpcbiAqIC8vIEdlbmVyYXRlIGlkZW50aXR5IG1hdHJpeFxuICogY29uc3QgSSAgPSBtLmlkZW50aXR5KCkgLy8gW1sxLCAwXSwgWzAsIDFdXVxuICpcbiAqIGlmKG0uZG90KEkpLmVxdWFscyhtKSkge1xuICogICAgY29uc29sZS5sb2coJ0RvdCBwcm9kdWN0IHdpdGggaWRlbnRpdHkgbWF0cml4IHJldHVybnMgdGhlIHNhbWUgbWF0cml4JylcbiAqIH1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5jb25jYXQoTWF0cml4Lm9mKE0pLCBkb3QodGhpcy5wcmVjaXNpb24pKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBkb3RcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuIDIgbWF0cmljZXNcbiAqIEBwYXJhbSBNXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGEgPSBbWzEsIDIsIDNdLCBbNCwgNSwgNl1dXG4gKiBjb25zdCBiID0gW1s3LCA4XSwgWzksIDEwXSwgWzExLCAxMl1dXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihiKVxuICpcbiAqIE1hdHJpeC5kb3QoQSwgQikgLy8gW1s1OCwgNjRdLCBbMTM5LCAxNTRdXVxuICpcbiAqL1xuTWF0cml4LmRvdCA9IGZ1bmN0aW9uIChBLCBCKSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkuZG90KE1hdHJpeC5vZihCKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZmlsbFxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCB0aGUgcHJvdmlkZWQgbWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZlxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsMiwzXSwgWzMsMiwxXSwgWzQsNSw2XV0pLmZpbGwoeCA9PiA0MilcbiAqIC8vIFtbNDIsNDIsNDJdLCBbNDIsNDIsNDJdLCBbNDIsNDIsNDJdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tYXAobWFwKHggPT4gZih4KSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIHplcm9zXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHplcm9zXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsMiwzXSwgWzMsMiwxXSwgWzQsNSw2XV0pLnplcm9zKClcbiAqIC8vIFtbMCwwLDBdLCBbMCwwLDBdLCBbMCwwLDBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS56ZXJvcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKHggPT4gMClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gemVyb3NcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggemVyb3NcbiAqIEBwYXJhbSByb3dzIHtudW1iZXJ9IERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIGNvbHMge251bWJlcn0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lnplcm9zKDMsIDMpXG4gKiAvLyBbWzAsMCwwXSwgWzAsMCwwXSwgWzAsMCwwXV1cbiAqXG4gKi9cbk1hdHJpeC56ZXJvcyA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKVxuICByZXR1cm4gTWF0cml4Lm9mKG0pLmZpbGwoeCA9PiAwKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBvbmVzXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIG9uZXNcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLDIsM10sIFszLDIsMV0sIFs0LDUsNl1dKS5vbmVzKClcbiAqIC8vIFtbMSwxLDFdLCBbMSwxLDFdLCBbMSwxLDFdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5vbmVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoeCA9PiAxKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBvbmVzXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIG9uZXNcbiAqIEBwYXJhbSByb3dzIHtudW1iZXJ9IERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIGNvbHMge251bWJlcn0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9uZXMoMSwgMSlcbiAqIC8vIFtbMSwxLDFdLCBbMSwxLDFdLCBbMSwxLDFdXVxuICpcbiAqL1xuTWF0cml4Lm9uZXMgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKHggPT4gMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgcmFuZG9tXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHJhbmRvbSB2YWx1ZXNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmID0gZSA9PiBNYXRoLnJhbmRvbSgpICogMiAtIDFdXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJhbmRvbSA9IGZ1bmN0aW9uIChmID0gZSA9PiBNYXRoLnJhbmRvbSgpICogMiAtIDEpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKGYpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIHJhbmRvbVxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCByYW5kb20gbnVtYmVyc1xuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBGdW5jdGlvbiB3aGljaCByZXR1cm5zIHJhbmRvbSB2YWx1ZXMuIERlZmF1bHQgcmFuZG9tIHZhbHVlcyBhcmUgYmV0d2VlbiAtMSBhbmQgMVxuICogQHBhcmFtIHJvd3Mge251bWJlcn0gRGVmaW5lcyB0aGUgcm93cyBvZiB0aGUgbWF0cml4XG4gKiBAcGFyYW0gY29scyB7bnVtYmVyfSBEZWZpbmVzIHRoZSBjb2x1bW5zIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5yYW5kb20gPSBmdW5jdGlvbiAoZiA9IGUgPT4gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSksIHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpXG4gIHJldHVybiBNYXRyaXgub2YobSkuZmlsbChmKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciB0b0FycmF5XG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBhcnJheSBmcm9tIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3ZhbHVlLm1hcChyb3cgPT4gcm93Lm1hcChjb2wgPT4gY29sKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgY2xvbmVcbiAqIEBkZXNjIFJldHVybnMgYSBjbG9uZSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4LmZyb21BcnJheSh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGZyb21BcnJheVxuICogQGRlc2MgUmV0dXJucyBhIE1hdHJpeCBmcm9tIGFuIGFycmF5XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbk1hdHJpeC5mcm9tQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBNYXRyaXgub2YobWFwKHJvdyA9PiBtYXAoY29sID0+IGNvbCkocm93KSkoYXJyKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgdHJhbnNwb3NlXG4gKiBAZGVzYyBSZXR1cm5zIGEgdHJhbnNwb3NlZCBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoWy0xLCAyXSwgWzMsIDRdLCBbLTgsIDJdKVxuICogY29uc3QgYiA9IEEudHJhbnNwb3NlKCkudG9BcnJheSgpXG4gKiAvLyByZXR1cm5zIFtbLTEsIDMsLThdLCBbMiwgNCwgMl1dXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudHJhbnNwb3NlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKGZvbGQodHJhbnNwb3NlLCBbXSwgdGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gdHJhbnNwb3NlXG4gKiBAZGVzYyBSZXR1cm5zIGEgdHJhbnNwb3NlZCBNYXRyaXhcbiAqIEBwYXJhbSBNIHtNYXRyaXh8YXJyYXl9IEEgTWF0cml4IG9yIGEgbWF0cml4IGFycmF5XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gWy0xLCAyXSwgWzMsIDRdLCBbLTgsIDJdXG4gKiBjb25zdCBiID0gTWF0cml4LnRyYW5zcG9zZShhKS50b0FycmF5KClcbiAqIC8vIHJldHVybnMgW1stMSwgMywtOF0sIFsyLCA0LCAyXV1cbiAqL1xuTWF0cml4LnRyYW5zcG9zZSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkudHJhbnNwb3NlKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gYWRkXG4gKiBAaW5zdGFuY2VcbiAqIEBwYXJhbSBNIHtNYXRyaXh8bnVtYmVyfSBBZGQgYSBNYXRyaXggb3IgYSBudW1iZXJcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLmFkZCgxKSAvLyBbWzYsIDVdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIuYWRkKEIpIC8vIFtbMTAsIDEwXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKE0pIHtcbiAgaWYgKE0gaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgIT09IE0uZ2V0Q29scygpIHx8IHRoaXMuZ2V0Um93cygpICE9PSBNLmdldFJvd3MoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaWNlcyBkbyBub3QgbWF0Y2gsIGNhbm5vdCBhZGQnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAoKHJvdywgaWR4KSA9PiBtYXAoKHZhbCwgamR4KSA9PiB2YWwgKyBNLl9fdmFsdWVbaWR4XVtqZHhdKShyb3cpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm1hcChtYXAoeCA9PiB4ICsgTSkpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIHN1YnRyYWN0XG4gKiBAaW5zdGFuY2VcbiAqIEBwYXJhbSBNIHtNYXRyaXh8bnVtYmVyfSBTdWJ0cmFjdCBhIE1hdHJpeCBvciBhIG51bWJlclxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEuc3VidHJhY3QoMSkgLy8gW1s0LCAyXV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLnN1YnRyYWN0KEIpIC8vIFtbMCwgMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKE0pIHtcbiAgaWYgKE0gaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgIT09IE0uZ2V0Q29scygpIHx8IHRoaXMuZ2V0Um93cygpICE9PSBNLmdldFJvd3MoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaWNlcyBkbyBub3QgbWF0Y2gsIGNhbm5vdCBzdWJ0cmFjdCcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcCgocm93LCBpZHgpID0+IG1hcCgodmFsLCBqZHgpID0+IHZhbCAtIE0uX192YWx1ZVtpZHhdW2pkeF0pKHJvdykpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKG1hcCh4ID0+IHggLSBNKSlcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgbXVsdGlwbHlcbiAqIEBpbnN0YW5jZVxuICogQGRlc2MgTXV0bGlwbHkgYSBzY2FsYXIgb3IgYSBtdHJhaXggd2l0aCBhIG1hdHJpeC4gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBtdWx0aXBsaWNhdGlvbiBpcyBub3QgcG9zc2libGUuXG4gKiBAcGFyYW0gTSB7TWF0cml4fG51bWJlcn1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLm11bHRpcGx5KDIpIC8vIFtbMTAsIDhdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIubXVsdGlwbHkoQikgLy8gW1syNSwgMjVdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIChNKSB7XG4gIGlmIChNIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpICE9PSBNLmdldENvbHMoKSB8fCB0aGlzLmdldFJvd3MoKSAhPT0gTS5nZXRSb3dzKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2Ugc3RhdGljIG1ldGhvZCBcXCdkb3RcXCcgdG8gZG8gbWF0cml4IG11bHRpcGxpY2F0aW9uJylcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3QgY3JlYXRlIGhhZGFtYXJkIHByb2R1Y3QnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAoKHJvdywgaWR4KSA9PiBtYXAoKGNvbCwgamR4KSA9PiBjb2wgKiBNLl9fdmFsdWVbaWR4XVtqZHhdKShyb3cpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm1hcChtYXAoeCA9PiB4ICogTSkpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGFkZGl0aXZlaW52ZXJzZVxuICogQGluc3RhbmNlXG4gKiBAZGVzYyBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1hdHJpeCBvYnRhaW5lZCBieSBjaGFuZ2luZyB0aGUgc2lnbiBvZiBldmVyeSBtYXRyaXggZWxlbWVudC4gVGhlIGFkZGl0aXZlIGludmVyc2Ugb2YgbWF0cml4IEEgaXMgd3JpdHRlbiDigJNBLlxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsLTVdLCBbLTQsIDRdXSlcbiAqIGNvbnN0IG1pbnVzQSA9IEEuYWRkaXRpdmVpbnZlcnNlKClcbiAqIC8vIFtbLTUsIDVdLCBbNCwgLTRdXVxuICovXG5NYXRyaXgucHJvdG90eXBlLmFkZGl0aXZlaW52ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tdWx0aXBseSgtMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGhhZGFtYXJkXG4gKiBAaW5zdGFuY2VcbiAqIEBzZWUgbXVsdGlwbHlcbiAqIEBwYXJhbSBNXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5oYWRhbWFyZCgyKSAvLyBbWzEwLCA4XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLmhhZGFtYXJkKEIpIC8vIFtbMjUsIDI1XV1cblxuICovXG5NYXRyaXgucHJvdG90eXBlLmhhZGFtYXJkID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tdWx0aXBseShNKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBsdVxuICogQGRlc2MgQ2FsY3VsYXRlcyBMVSBkZWNvbXBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeFtdfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBbWzMsIC03LCAtMiwgMl0sIFstMywgNSwgMSwgMF0sIFs2LCAtNCwgMCwgLTVdLCBbLTksIDUsIC01LCAxMl1dXG4gKiBjb25zdCBBID0gTWF0cml4LmZyb21BcnJheShyZXN1bHQpXG4gKiBjb25zdCBsdSA9IEEubHUoKVxuICogLy8gTC5fX3ZhbHVlID0gWyBbIDEsIDAsIDAsIDAgXSwgWyAtMSwgMSwgMCwgMCBdLCBbIDIsIC01LCAxLCAwIF0sIFsgLTMsIDgsIDMsIDEgXSBdXG4gKiAvLyBVLl9fdmFsdWUgPSAgWyBbIDMsIC03LCAtMiwgMiBdLCBbIDAsIC0yLCAtMSwgMiBdLCBbIDAsIDAsIC0xLCAxIF0sIFsgMCwgMCwgMCwgLTEgXSBdXG4gKiBNYXRyaXguZG90KGx1WzBdLCBsdVsxXSkgLy8gcmV0dXJucyBjbG9uZSBvZiBBXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmx1ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBuID0gdGhpcy5nZXRSb3dzKClcbiAgY29uc3QgdG9sID0gMWUtNlxuICBjb25zdCBBID0gdGhpcy5jbG9uZSgpXG4gIGNvbnN0IEwgPSB0aGlzLnplcm9zKClcbiAgY29uc3QgVSA9IHRoaXMuemVyb3MoKVxuXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgKytrKSB7XG4gICAgaWYgKE1hdGguYWJzKEEuX192YWx1ZVtrXVtrXSkgPCB0b2wpIHRocm93IEVycm9yKCdDYW5ub3QgcHJvY2VlZCB3aXRob3V0IGEgcm93IGV4Y2hhbmdlJylcbiAgICBMLl9fdmFsdWVba11ba10gPSAxXG4gICAgZm9yIChsZXQgaSA9IGsgKyAxOyBpIDwgbjsgKytpKSB7XG4gICAgICBMLl9fdmFsdWVbaV1ba10gPSBBLl9fdmFsdWVbaV1ba10gLyBBLl9fdmFsdWVba11ba11cbiAgICAgIGZvciAobGV0IGogPSBrICsgMTsgaiA8IG47ICsraikge1xuICAgICAgICBBLl9fdmFsdWVbaV1bal0gPSBBLl9fdmFsdWVbaV1bal0gLSBMLl9fdmFsdWVbaV1ba10gKiBBLl9fdmFsdWVba11bal1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgbCA9IGs7IGwgPCBuOyArK2wpIHtcbiAgICAgIFUuX192YWx1ZVtrXVtsXSA9IEEuX192YWx1ZVtrXVtsXVxuICAgIH1cbiAgfVxuICByZXR1cm4gW0wsIFVdXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIHJyZWZcbiAqIEByZXR1cm5zIHtNYXRyaXh8YXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBBID0gTWF0cml4Lm9mKFtbLTEsIDFdLCBbLTEsIDBdLCBbMCwgLTFdLCBbLTEsIC0yXV0pXG4gKiBBLnJyZWYoKSAvLyAgWyBbIDEsIDAgXSwgWyAtMCwgMSBdLCBbIDAsIDAgXSwgWyAwLCAwIF0gXVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJyZWYgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBsZWFkID0gMFxuICBjb25zdCByZXN1bHRNYXRyaXggPSB0aGlzLmNsb25lKClcblxuICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuZ2V0Um93cygpOyArK3IpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgPD0gbGVhZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdE1hdHJpeFxuICAgIH1cbiAgICBsZXQgaSA9IHJcbiAgICB3aGlsZSAocmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bbGVhZF0gPT09IDApIHtcbiAgICAgICsraVxuICAgICAgaWYgKHRoaXMuZ2V0Um93cygpID09PSBpKSB7XG4gICAgICAgIGkgPSByXG4gICAgICAgICsrbGVhZFxuICAgICAgICBpZiAodGhpcy5nZXRDb2xzKCkgPT09IGxlYWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0TWF0cml4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdG1wID0gcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1cbiAgICByZXN1bHRNYXRyaXguX192YWx1ZVtpXSA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdXG4gICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl0gPSB0bXBcblxuICAgIGxldCB2YWwgPSByZXN1bHRNYXRyaXguX192YWx1ZVtyXVtsZWFkXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5nZXRDb2xzKCk7ICsraikge1xuICAgICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bal0gLz0gdmFsXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldFJvd3MoKTsgKytpKSB7XG4gICAgICBpZiAoaSA9PT0gcikgY29udGludWVcbiAgICAgIHZhbCA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2xlYWRdXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0Q29scygpOyArK2opIHtcbiAgICAgICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bal0gLT0gdmFsICogcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bal1cbiAgICAgIH1cbiAgICB9XG4gICAgbGVhZCsrXG4gIH1cbiAgcmV0dXJuIHJlc3VsdE1hdHJpeFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBzb2x2ZVxuICogQHBhcmFtIGJcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gU29sdmUgeEEgPSBiXG4gKiAvLyA1eCArIHkgID0gN1xuICogLy8gM3ggLSA0eSA9IDE4XG4gKiAvLyBTb2x1dGlvbiBmb3IgeCBhbmQgeTpcbiAqIC8vIHggPSAyXG4gKiAvLyB5ID0gLTNcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgMV0sIFszLCAtNF1dKVxuICogY29uc3Qgc29sdmVBID0gQS5zb2x2ZShbNywgMThdKSAvLyBbMiwgLTNdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnNvbHZlID0gZnVuY3Rpb24gKGIpIHtcbiAgY29uc3QgQSA9IHRoaXMuY2xvbmUoKVxuICBjb25zdCBMVSA9IEEubHUoKVxuICBjb25zdCBMID0gTFVbMF1cbiAgY29uc3QgVSA9IExVWzFdXG4gIGNvbnN0IG4gPSB0aGlzLmdldFJvd3MoKVxuICBsZXQgcyA9IDBcbiAgY29uc3QgYyA9IFtdXG4gIGNvbnN0IHggPSBbXVxuXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgKytrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyArK2opIHtcbiAgICAgIHMgPSBzICsgTC5fX3ZhbHVlW2tdW2pdICogY1tqXVxuICAgIH1cbiAgICBjW2tdID0gYltrXSAtIHNcbiAgICBzID0gMFxuICB9XG4gIGZvciAobGV0IGEgPSBuIC0gMTsgYSA+IC0xOyAtLWEpIHtcbiAgICBsZXQgdCA9IDBcbiAgICBmb3IgKGxldCBiID0gYSArIDE7IGIgPCBuOyArK2IpIHtcbiAgICAgIHQgPSB0ICsgVS5fX3ZhbHVlW2FdW2JdICogeFtiXVxuICAgIH1cbiAgICB4W2FdID0gKGNbYV0gLSB0KSAvIFUuX192YWx1ZVthXVthXVxuICB9XG4gIHJldHVybiB4XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQG1lbWJlciBpbnZlcnNlXG4gKiBAaW5zdGFuY2VcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzIsIDRdXSkuaW52ZXJzZSgpXG4gKiAvLyBbIFsgMiwgLTAuNSBdLCBbIC0xLCAwLjUgXSBdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmludmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IEEgPSB0aGlzLmNsb25lKClcbiAgY29uc3QgSSA9IEEuaWRlbnRpdHkoKVxuICBjb25zdCBJbnYgPSBBLmNvbmNhdChJKS5ycmVmKClcblxuICBjb25zdCByZXN1bHQgPSBJbnYuX192YWx1ZS5yZWR1Y2UoKHJlc3VsdCwgeCwgaWR4KSA9PiB7XG4gICAgY29uc3QgaGFsZiA9IHgubGVuZ3RoIC8gMlxuICAgIHJlc3VsdC5wdXNoKHguc2xpY2UoaGFsZiwgeC5sZW5ndGgpKVxuICAgIHJldHVybiByZXN1bHRcbiAgfSwgW10pXG4gIHJldHVybiBNYXRyaXgub2YocmVzdWx0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgcmFua1xuICogQGluc3RhbmNlXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJhbmsgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJyZWYgPSB0aGlzLnJyZWYoKVxuICBsZXQgcmVzdWx0ID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJyZWYuZ2V0Q29scygpOyArK2kpIHtcbiAgICByZXN1bHQgKz0gcnJlZi5fX3ZhbHVlW2ldW2ldXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgZGltZW5zaW9uXG4gKiBAaW5zdGFuY2VcbiAqIEBzZWUgcmFua1xuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kaW1lbnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJhbmsoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgZGlhZ1xuICogQGluc3RhbmNlXG4gKiBAZGVzYyBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5kaWFnKClcbiAqIC8vIFsxLCAxLCAxXVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLmRpYWcoKVxuICogLy8gWzAsIDAsIDAsIDAsIDBdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRpYWcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGlkeCkgPT4ge1xuICAgIHJldHVybiBhY2MuY29uY2F0KHhbaWR4XSlcbiAgfSkoW10pKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gZGlhZ1xuICogQGRlc2MgUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcGFyYW0gTSB7TWF0cml4fEFycmF5fSBNYXRyaXggZnJvbSB3aGljaCB0byByZXR1cm4gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LmRpYWcoW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIFsyLCA1XVxuICpcbiAqL1xuTWF0cml4LmRpYWcgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmRpYWcoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgZGlhZ3Byb2R1Y3RcbiAqIEBpbnN0YW5jZVxuICogQGRlc2MgUmV0dXJucyB0aGUgcHJvZHVjdCBvZiB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5kaWFncHJvZHVjdCgpXG4gKiAvLyAxXG4gKlxuICogY29uc3QgZGlhZzAgPSBNYXRyaXguemVyb3MoNSwgNSkuZGlhZ3Byb2R1Y3QoKVxuICogLy8gMFxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kaWFncHJvZHVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZvbGQoKGFjYywgeCwgaWR4KSA9PiB7XG4gICAgYWNjICo9IHhbaWR4XVxuICAgIHJldHVybiBhY2NcbiAgfSkoMSkodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBkaWFncHJvZHVjdFxuICogQGRlc2MgUmV0dXJucyB0aGUgcHJvZHVjdCBvZiB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHBhcmFtIE0ge01hdHJpeHxBcnJheX0gTWF0cml4IGZyb20gd2hpY2ggdG8gcmV0dXJuIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXguZGlhZ3Byb2R1Y3QoW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIDEwXG4gKlxuICovXG5NYXRyaXguZGlhZ3Byb2R1Y3QgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmRpYWdwcm9kdWN0KClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIHN1bVxuICogQGluc3RhbmNlXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIHZhbHVlcyBpbiB0aGUgTWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5vbmVzKDMsIDMpLnN1bSgpXG4gKiAvLyA5XG4gKlxuICogY29uc3QgZGlhZzAgPSBNYXRyaXguemVyb3MoNSwgNSkuc3VtKClcbiAqIC8vIDBcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc3VtID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4KSA9PiB7XG4gICAgYWNjICs9IGZvbGQoKHByZXYsIG5leHQpID0+IHByZXYgKyBuZXh0KSgwKSh4KVxuICAgIHJldHVybiBhY2NcbiAgfSkoMCkodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBzdW1cbiAqIEBkZXNjIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgdmFsdWVzIGluIHRoZSBNYXRyaXhcbiAqIEBwYXJhbSBNIHtNYXRyaXh8QXJyYXl9IE1hdHJpeCBmcm9tIHdoaWNoIHRvIHJldHVybiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LnN1bShbWzIsIDFdLCBbMSwgNV1dKVxuICogLy8gOVxuICpcbiAqL1xuTWF0cml4LnN1bSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkuc3VtKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGtyb25lY2tlclxuICogQGluc3RhbmNlXG4gKiBAZGVzYyBUaGUgS3JvbmVja2VyIHByb2R1Y3QgaXMgYW4gb3BlcmF0aW9uIG9uIHR3byBtYXRyaWNlcyBvZiBhcmJpdHJhcnkgc2l6ZSByZXN1bHRpbmcgaW4gYSBibG9jayBtYXRyaXguXG4gKiBAcGFyYW0gTSB7TWF0cml4fSBUaGUgcmlnaHQgc2lkZSBNYXRyaXggb2YgdGhlIHByb2R1Y3QgKHRoaXMg4oqXIE0pXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmtyb25lY2tlciA9IGZ1bmN0aW9uIChNKSB7XG4gIGNvbnN0IG0gPSB0aGlzLmdldFJvd3MoKVxuICBjb25zdCBuID0gdGhpcy5nZXRDb2xzKClcbiAgY29uc3QgcCA9IE0uZ2V0Um93cygpXG4gIGNvbnN0IHEgPSBNLmdldENvbHMoKVxuXG4gIGNvbnN0IGxlZnQgPSB0aGlzLl9fdmFsdWVcbiAgY29uc3QgcmlnaHQgPSBNLl9fdmFsdWVcblxuICBjb25zdCBmcmFtZSA9IGdlbmVyYXRlKG0gKiBwLCBuICogcSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IHA7IGsrKykge1xuICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IHE7IGwrKykge1xuICAgICAgICAgIGZyYW1lW3AgKiBpICsga11bcSAqIGogKyBsXSA9IGxlZnRbaV1bal0gKiByaWdodFtrXVtsXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE1hdHJpeC5vZihmcmFtZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24ga3JvbmVja2VyXG4gKiBAZGVzYyBUaGUgS3JvbmVja2VyIHByb2R1Y3QgaXMgYW4gb3BlcmF0aW9uIG9uIHR3byBtYXRyaWNlcyBvZiBhcmJpdHJhcnkgc2l6ZSByZXN1bHRpbmcgaW4gYSBibG9jayBtYXRyaXguXG4gKiBAcGFyYW0gQSB7TWF0cml4fSBUaGUgbGVmdCBzaWRlIE1hdHJpeCBvZiB0aGUgcHJvZHVjdCAoQSDiipcgQilcbiAqIEBwYXJhbSBCIHtNYXRyaXh9IFRoZSByaWdodCBzaWRlIE1hdHJpeCBvZiB0aGUgcHJvZHVjdCAoQSDiipcgQilcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5rcm9uZWNrZXIgPSBmdW5jdGlvbiAoQSwgQikge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLmtyb25lY2tlcihCKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXhcbiIsImltcG9ydCB7IGNvbmNhdCwgY3VycnkgfSBmcm9tICdmdW4uanMnXG5cbi8qKlxuICogQGZ1bmN0aW9uIGNvbmNhdFxuICogQHBhcmFtIE0ge01hdHJpeH1cbiAqIEBwYXJhbSBtIHtBcnJheX1cbiAqIEBwYXJhbSBpZHgge251bWJlcn1cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gKE0sIG0sIGlkeCkge1xuICByZXR1cm4gY29uY2F0KG0sIE0uX192YWx1ZVtpZHhdKVxufSlcbiIsImltcG9ydCB7IGZvbGQsIG1hcCwgY3VycnkgfSBmcm9tICdmdW4uanMnXG5pbXBvcnQgcm91bmQgZnJvbSAnLi9yb3VuZCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gZG90XG4gKiBAcGFyYW0gQiB7TWF0cml4fVxuICogQHBhcmFtIGEge0FycmF5fVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoZGVjaW1hbHMsIEIsIGEpID0+IG1hcCgoaXRlbSwgaSkgPT4ge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4LCBqKSA9PiB7XG4gICAgYWNjICs9IHJvdW5kKHggKiBCLl9fdmFsdWVbal1baV0sIGRlY2ltYWxzKVxuICAgIHJldHVybiBhY2NcbiAgfSwgMCkoYSlcbn0pKEIuX192YWx1ZVswXSkpXG4iLCJpbXBvcnQgeyBjdXJyeSB9IGZyb20gJ2Z1bi5qcydcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KG0gPT4gW10pXG4iLCJpbXBvcnQgeyBtYXAgfSBmcm9tICdmdW4uanMnXG5cbi8qKlxuICogQGZ1bmN0aW9uIGdlbmVyYXRlXG4gKiBAZGVzYyBHZW5lcmF0b3IgZnVuY3Rpb24gZm9yIGEgbWF0cml4IGFycmF5LCB2YWx1ZXMgYXJlIHNldCB0byB1bmRlZmluZWRcbiAqIEBwYXJhbSByb3dzIHtudW1iZXJ9XG4gKiBAcGFyYW0gY29scyB7bnVtYmVyfVxuICogQHJldHVybnMge2FueVtdW119XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChyb3dzLCBjb2xzID0gdW5kZWZpbmVkLCB2YWx1ZSA9IDApID0+IHtcbiAgY29uc3QgX2NvbHMgPSBjb2xzIHx8IHJvd3NcbiAgY29uc3QgeSA9IG1hcCh6ID0+IHZhbHVlKShuZXcgQXJyYXkoX2NvbHMpKVxuICByZXR1cm4gbWFwKHogPT4geSkobmV3IEFycmF5KHJvd3MpKVxufVxuIiwiaW1wb3J0IHsgbWFwIH0gZnJvbSAnZnVuLmpzJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBpZGVudGl0eVxuICogQGRlc2MgQ3JlYXRlcyBhbiBpZGVudGl5IG1hdHJpeCBmcm9tIGFuIGVtcHR5IGFycmF5XG4gKiBAcGFyYW0gbSB7QXJyYXl9XG4gKiBAcGFyYW0gaWR4IHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtNYXRyaXh9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChtLCBpZHgpID0+IG1hcCgocm93cywgamR4KSA9PiAoaWR4ID09PSBqZHgpICogMSkobSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHJvdW5kXG4gKiBAcGFyYW0gdmFsdWUge251bWJlcn1cbiAqIEBwYXJhbSBkZWNpbWFscyB7bnVtYmVyfVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91bmQgKHZhbHVlLCBkZWNpbWFscykge1xuICByZXR1cm4gTnVtYmVyKE1hdGgucm91bmQodmFsdWUgKyAnZScgKyBkZWNpbWFscykgKyAnZS0nICsgZGVjaW1hbHMpXG59XG4iLCJpbXBvcnQgeyBtYXAsIGN1cnJ5IH0gZnJvbSAnZnVuLmpzJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiB0cmFuc3Bvc2VcbiAqIEBkZXNjIFRyYW5zcG9zZXMgYSBhcnJheSBvZiBhcnJheXMgdXNpbmcgdGhlIE1hdHJpeC5tYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBtIHtBcnJheX1cbiAqIEBwYXJhbSBpZHgge251bWJlcn1cbiAqIEByZXR1cm4ge01hdHJpeH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHByZXYsIG5leHQpID0+IG1hcCgoaXRlbSwgaSkgPT4gKHByZXZbaV0gfHwgW10pLmNvbmNhdChuZXh0W2ldKSkobmV4dCkpXG4iXSwic291cmNlUm9vdCI6IiJ9