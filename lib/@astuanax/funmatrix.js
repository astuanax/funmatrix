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

var _gpumap = _interopRequireDefault(__webpack_require__(/*! util/gpumap */ "./src/util/gpumap.js"));

var _gpufold = _interopRequireDefault(__webpack_require__(/*! util/gpufold */ "./src/util/gpufold.js"));

var _gpuproduct = _interopRequireDefault(__webpack_require__(/*! util/gpuproduct */ "./src/util/gpuproduct.js"));

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
  this.__value = val; // if (GPUJS) {
  //   this.gpujs = GPUJS || null
  // }
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
}; //* ***********************/
// GPU Functions
//* ***********************/

/**
 * @memberOf Matrix
 * @instance
 * @member gpuMap
 * @description Maps over the rows of the matrix using a map function using the GPU
 * @param f {function} An GPU.js enabled iterator function
 * @returns {Matrix}
 * @example
 *
 * function gpuMapper (a) { return a[this.thread.y][this.thread.x] }
 * const m = Matrix.of([[2, 2], [2, 2]], GPUJS)
 * m.gpuMap(gpuMapper)
 * // [Float32Array(2,2), Float32Array(2,2)]
 *
 *
 */


Matrix.prototype.gpuMap = function (f) {
  return Matrix.of((0, _gpumap.default)(this.gpujs, f, this.__value));
};
/**
 * @memberOf Matrix
 * @static
 * @function gpuMap
 * @description Static function that maps over the rows of the matrix using a map function using the GPU
 * @param f {function} An GPU.js enabled iterator function
 * @param M {Matrix|array} Matrix or array to map
 * @returns {Matrix}
 * @example
 *
 * function gpuMapper (a) { return a[this.thread.y][this.thread.x] }
 * const m = Matrix.gpuMap(GPUJS, gpuMapper, [[2, 2], [2, 2]])
 * // [Float32Array(2,2), Float32Array(2,2)]
 *
 */


Matrix.gpuMap = (0, _curry.default)(function (gpu, f, M) {
  return Matrix.of(M, gpu).gpuMap(f);
});
/**
 * @memberOf Matrix
 * @instance
 * @member gpuFold
 * @description Folds the rows of the matrix using a GPUS.js enqbled reduce function, using the GPU
 * @param f {function} An iterator function
 * @returns {Matrix}
 * @example
 *
 * const m = Matrix.of([[1, 1], [1, 1]])
 * m.map(x => x.map(y => y+ 1))
 * // [[2, 2], [2, 2]]
 *
 */

Matrix.prototype.gpuFold = function (f, output) {
  return Matrix.of((0, _gpufold.default)(this.gpujs, f, output, this.__value));
};
/**
 * @memberOf Matrix
 * @function Matrix#gpuProduct
 * @param f
 * @param output
 * @param M
 * @returns {Matrix}
 */


Matrix.prototype.gpuProduct = function (f, output, M) {
  // (gpu, f, output, a, b, constants = {}
  return Matrix.of((0, _gpuproduct.default)(this.gpujs, f, output, this.__value, M.__value));
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

/***/ "./src/util/gpufold.js":
/*!*****************************!*\
  !*** ./src/util/gpufold.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gpufold;

function gpufold(gpu, f, output, matrix) {
  var constants = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  return gpu.createKernel(f, {
    constants: Object.assign({}, {
      m: matrix.length,
      n: matrix[0].length
    }, constants)
  }).setOutput(output)(matrix);
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/util/gpumap.js":
/*!****************************!*\
  !*** ./src/util/gpumap.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gpumap;

// import curry from 'fun.js/src/curry'
function gpumap(gpu, f, matrix) {
  return gpu.createKernel(f).setOutput([matrix.length, matrix[0].length])(matrix);
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/util/gpuproduct.js":
/*!********************************!*\
  !*** ./src/util/gpuproduct.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gpuproduct;

function gpuproduct(gpu, f, output, a, b) {
  var constants = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  return gpu.createKernel(f, {
    constants: Object.assign({}, {
      m: b.length,
      n: a[0].length
    }, constants)
  }).setOutput(output)(a, b);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9fcHJpdmF0ZS9jdXJyeTEuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FkZEluZGV4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hZGp1c3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FkanVzdFdpdGguanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FsbC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYWxsUGFzcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYWx3YXlzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hbmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FueS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYW55UGFzcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FwZXJ0dXJlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcHBlbmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FwcGx5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvZmlsdGVyLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9mb2xkLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS90by5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvdW5pb24uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYmluZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYm9vbGVhbi9GLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9ib29sZWFuL1QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2Jvb2xlYW4vYm90aC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYm9vbGVhbi9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY2FsbC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY29tcGxlbWVudC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9jb25kLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9jdXJyeS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS9kaWZmRGF0ZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS9pc0Z1dHVyZURhdGUuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2RhdGUvaXNWYWxpZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS90b0RheS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS90b0hvdXIuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2RhdGUvdG9NaW51dGVzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9kYXRlL3RvU2Vjb25kcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGVmYXVsdFRvLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9lbXB0eS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZXF1YWxzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9leGlzdHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZmluZEluZGV4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9maXJzdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZmxhdE1hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaWRlbnRpY2FsLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pc0VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pdGVyYXRvci9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9rZXlzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9sYXN0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9saWZ0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbWFwL2tleXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21heC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbW9uYWRzL0p1c3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21vbmFkcy9NYXliZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbW9uYWRzL05vdGhpbmcuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL25vdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVsbC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2FkZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2RpdmlkZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9udW1iZXIvaXNOYW4uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL251bWJlci9tdWx0aXBseS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL3N1bS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9oYXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9oYXNJbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2tleXNJbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L21lcmdlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3Qvb21pdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L3BhdGguanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9waWNrLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3QvcHJvcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb3IuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3NldC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL2Zvcm1hdFN0cmluZy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9zdHJpbmcvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy90cnV0aHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3R5cGUuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3VuZGVmaW5lZC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvemlwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy96aXBXaXRoLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvbWF0cml4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2RvdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2dlbmVyYXRlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9ncHVmb2xkLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9ncHVtYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2dwdXByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2lkZW50aXR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9yb3VuZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvdHJhbnNwb3NlLmpzIl0sIm5hbWVzIjpbIk1hdHJpeCIsInZhbCIsIl9fdmFsdWUiLCJvZiIsInByb3RvdHlwZSIsInR5cGUiLCJwcmVjaXNpb24iLCJzZXRQcmVjaXNpb24iLCJpc1N5bW1ldHJpYyIsImEiLCJiIiwidHJhbnNwb3NlIiwiaXNTcXVhcmUiLCJnZXRDb2xzIiwiZ2V0Um93cyIsImlzT3J0aG9nb25hbCIsIkF4QXQiLCJkb3QiLCJJIiwiaWRlbnRpdHkiLCJsZW5ndGgiLCJlcXVhbHMiLCJNIiwiZ2V0U2hhcGUiLCJtYXAiLCJmIiwiZm9sZCIsImFwIiwiY29uY2F0IiwiQSIsIkIiLCJlbXB0eSIsInJvd3MiLCJjb2xzIiwibSIsImNvbWJpbmUiLCJmaWxsIiwieCIsInplcm9zIiwib25lcyIsInJhbmRvbSIsImUiLCJNYXRoIiwidG9BcnJheSIsInJvdyIsImNvbCIsImNsb25lIiwiZnJvbUFycmF5IiwiYXJyIiwiYWRkIiwiRXJyb3IiLCJpZHgiLCJqZHgiLCJzdWJ0cmFjdCIsIm11bHRpcGx5IiwiY29uc29sZSIsImxvZyIsImFkZGl0aXZlaW52ZXJzZSIsImhhZGFtYXJkIiwibHUiLCJuIiwidG9sIiwiTCIsIlUiLCJrIiwiYWJzIiwiaSIsImoiLCJsIiwicnJlZiIsImxlYWQiLCJyZXN1bHRNYXRyaXgiLCJyIiwidG1wIiwic29sdmUiLCJMVSIsInMiLCJjIiwidCIsImludmVyc2UiLCJJbnYiLCJyZXN1bHQiLCJyZWR1Y2UiLCJoYWxmIiwicHVzaCIsInNsaWNlIiwicmFuayIsImRpbWVuc2lvbiIsImRpYWciLCJhY2MiLCJkaWFncHJvZHVjdCIsInN1bSIsInByZXYiLCJuZXh0Iiwia3JvbmVja2VyIiwicCIsInEiLCJsZWZ0IiwicmlnaHQiLCJmcmFtZSIsImdwdU1hcCIsImdwdWpzIiwiZ3B1IiwiZ3B1Rm9sZCIsIm91dHB1dCIsImdwdVByb2R1Y3QiLCJkZWNpbWFscyIsIml0ZW0iLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsIl9jb2xzIiwieSIsInoiLCJBcnJheSIsImdwdWZvbGQiLCJtYXRyaXgiLCJjb25zdGFudHMiLCJjcmVhdGVLZXJuZWwiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRPdXRwdXQiLCJncHVtYXAiLCJncHVwcm9kdWN0Iiwicm91bmQiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQzJCOztBQUVaLHFIQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNuQkY7QUFBQTtB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVcsZ0JBQWdCO0FBQ3FCO0FBQ2hELFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsd0JBQXdCO0FBQ25DLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcseUJBQXlCO0FBQ3BDLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcsd0JBQXdCO0FBQ25DLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcsd0JBQXdCO0FBQ25DLFdBQVcsNEJBQTRCO0FBQ3ZDLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsd0JBQXdCO0FBQ25DLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsMkJBQTJCO0FBQ3RDLFdBQVcseUJBQXlCO0FBQ3BDLFdBQVcsNkJBQTZCO0FBQ3hDLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsMkJBQTJCO0FBQ3RDLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcsK0JBQStCO0FBQzFDLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcsZ0JBQWdCO0FBQzNCLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcsMEJBQTBCO0FBQ3JDLFdBQVcseUJBQXlCO0FBQ3BDLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcseUJBQXlCO0FBQ3BDLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsZ0JBQWdCO0FBQzNCLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsMkJBQTJCO0FBQ3RDLFdBQVcsMkJBQTJCO0FBQ3RDLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcseUJBQXlCO0FBQ3BDLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsMkJBQTJCO0FBQ3RDLFdBQVcsNEJBQTRCO0FBQ3ZDLFdBQVcsMkJBQTJCO0FBQ3RDLFdBQVcsOEJBQThCO0FBQ3pDLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcsd0JBQXdCO0FBQ25DLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcsMEJBQTBCO0FBQ3JDLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsZUFBZTtBQUMxQixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLGdCQUFnQjtBQUMzQixXQUFXLGtCQUFrQjtBQUM3QixXQUFXLHVCQUF1QjtBQUNsQyxXQUFXLGtCQUFrQjtBQUM3QixXQUFXLGtCQUFrQjtBQUM3QixXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLDBCQUEwQjtBQUNyQyxXQUFXLHVCQUF1QjtBQUNsQyxXQUFXLG9CQUFvQjtBQUMvQixXQUFXLG9CQUFvQjtBQUMvQixXQUFXLDJCQUEyQjtBQUN0QyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLG9CQUFvQjtBQUMvQixXQUFXLGtCQUFrQjtBQUM3QixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLG9CQUFvQjtBQUMvQixXQUFXLG9CQUFvQjtBQUMvQixXQUFXLG9CQUFvQjtBQUMvQixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLDJCQUEyQjtBQUN0QyxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG9CQUFvQjtBQUMvQixXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHlCQUF5QjtBQUNwQyxXQUFXLHlCQUF5QjtBQUNwQyxXQUFXLG9CQUFvQjtBQUMvQixXQUFXLG9CQUFvQjtBQUMvQixXQUFXLG9CQUFvQjtBQUMvQixXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLGtCQUFrQjtBQUM3QixXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLGtCQUFrQjtBQUM3QixXQUFXLG9CQUFvQjtBQUMvQixXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHdCQUF3QjtBQUNuQyxXQUFXLHVCQUF1QjtBQUNsQyxXQUFXLHdCQUF3QjtBQUNuQyxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLGlDQUFpQztBQUM1QyxXQUFXLHFDQUFxQztBQUNoRCxXQUFXLGtCQUFrQjtBQUM3QixXQUFXLGtCQUFrQjtBQUM3QixXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLDJCQUEyQjtBQUN0QyxXQUFXLHVCQUF1QjtBQUNsQyxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLGtCQUFrQjtBQUM3QixXQUFXLGtCQUFrQjtBQUM3QixXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHVCQUF1QjtBQUNsQyxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHVCQUF1QjtBQUNsQyxXQUFXLHVCQUF1QjtBQUNsQyxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLGtCQUFrQjtBQUM3QixXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLG9CQUFvQjtBQUMvQixXQUFXLHVCQUF1QjtBQUNsQyxXQUFXLGtCQUFrQjtBQUM3QixXQUFXLG9CQUFvQjtBQUMvQixXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLG9CQUFvQjtBQUMvQixXQUFXLG9CQUFvQjtBQUMvQixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG9CQUFvQjtBQUMvQixXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLGtCQUFrQjtBQUM3QixXQUFXLGtCQUFrQjtBQUM3QixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG9C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VCxJQUFnQixDQUEvQjtBQUFBLEdBQUosRUFBc0NsQixDQUF0QyxDQUFaO0FBQUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RmOzs7Ozs7QUFNZSxTQUFTeUYsS0FBVCxDQUFnQmQsS0FBaEIsRUFBdUJILFFBQXZCLEVBQWlDO0FBQzlDLFNBQU9rQixNQUFNLENBQUNsRixJQUFJLENBQUNpRixLQUFMLENBQVdkLEtBQUssR0FBRyxHQUFSLEdBQWNILFFBQXpCLElBQXFDLElBQXJDLEdBQTRDQSxRQUE3QyxDQUFiO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JEOztBQUVBOzs7Ozs7O2VBT2UsZ0JBQU0sVUFBQ2QsSUFBRCxFQUFPQyxJQUFQO0FBQUEsU0FBZ0IsY0FBSSxVQUFDYyxJQUFELEVBQU96QyxDQUFQO0FBQUEsV0FBYSxDQUFDMEIsSUFBSSxDQUFDMUIsQ0FBRCxDQUFKLElBQVcsRUFBWixFQUFnQnRDLE1BQWhCLENBQXVCaUUsSUFBSSxDQUFDM0IsQ0FBRCxDQUEzQixDQUFiO0FBQUEsR0FBSixFQUFrRDJCLElBQWxELENBQWhCO0FBQUEsQ0FBTixDIiwiZmlsZSI6IkBhc3R1YW5heC9mdW5tYXRyaXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBhc3R1YW5heC9mdW5tYXRyaXhcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGFzdHVhbmF4L2Z1bm1hdHJpeFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAYXN0dWFuYXgvZnVubWF0cml4XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogUmV0dXJucyBhIGN1cnJpZWQgZnVuY3Rpb24gd2l0aCBhcml0eSAxXG4gKiBAZnVuY3Rpb24gY3VycnkxXG4gKiBAcHJpdmF0ZVxuICogQHNpbmNlIHYxLjAuMlxuICoqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeTEgKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkIChhKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDBcbiAgICAgID8gdGhpc1xuICAgICAgOiBmbihhKVxuICB9XG59XG4iLCIvKipcbiAqIEBmdW5jdGlvbiBhZGRJbmRleFxuICogQHN1bW1hcnkgQWRkcyBhIHNwZWNpZmllZCBpbmRleCB0byBpdGVyYXRlIGEgY29sbGVjdGlvblxuICogQGRlc2NyaXB0aW9uIFRoZSBhZGRJbmRleCBmdW5jdGlvbiBpcyBub3RuZWNlc3NhcnkgZm9yIHRoZSBtYXAgZnVuY3Rpb25zIGluIHRoZSBmdW4uanMgbGlicmFyeSBhcyB0aGV5IGJlaGF2ZSB0aGUgc2EsZSBhcyB0aGUgbmF0aXZlIGphdmFzY3JpcHQgZnVuY3Rpb25zXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIEl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnIEZ1bmN0aW9uIHRvIHdoaWNoIHRvIGFkZCB0aGUgaW5kZXhcbiAqIEBwYXJhbSB7QXJyYXl9IGEgVGhlIGFycmF5IG9uIHdoaWNoIHRvIHdvcmtcbiAqIEBzaW5jZSAxLjAuMlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWRkSW5kZXggKGYsIGcsIGEpIHtcbiAgbGV0IGkgPSAwXG4gIHJldHVybiBmKFxuICAgIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gZyh2LCBpKyspXG4gICAgfSxcbiAgICBhXG4gIClcbn0pXG4iLCIvKipcbiAqIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIGFkanVzdFxuICogQGRlc2NyaXB0aW9uIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IGEpIC0+IG51bSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIHRvIG1vZGlmeSB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XG4gKiBAcGFyYW0ge051bWJlcn0gaSAtIFRoZSBpbmRleCBhdCB3aGljaCB0byBtb2RpZnkgdGhlIGFycmF5LCBhY2NlcHRzIHBvc3RpdGl2ZSBhbmQgbmVnYXRpdmUgaW5kZXhlc1xuICogQHBhcmFtIHtJdGVyYWJsZX0gW2FdIC0gQXJyYXkgd2l0aCBkYXRhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX0gW2FdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWRqdXN0IChmbiwgaSwgYSkge1xuICBjb25zdCByID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSlcbiAgY29uc3QgaWR4ID0gaSA8IDAgPyByLmxlbmd0aCArIGkgOiBpXG4gIGlmICghYVtpZHhdKSByZXR1cm4gclxuICByW2lkeF0gPSBmbihyW2lkeF0pXG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBNb2RpZmllcyBhbiBpdGVtIGluIGFuIGFycmF5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvbiBhZGp1c3RXaXRoXG4gKiBAZGVzY3JpcHRpb24gTW9kaWZpZXMgYW4gaXRlbSBpbiBhbiBhcnJheSB1c2luZyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGEgLT4gYSkgLT4gKChhIC0+IFthXSkgLT4gW2FdIC0+IG51bSkgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSB0byBtb2RpZnkgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZCAtIFRoZSBwcmVkaWNhdGUgdGhhdCByZXR1cm5zIHRoZSBpbmRleGVzIGlmIGZvdW5kXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBbYV1cbiAqIEByZXR1cm4ge0l0ZXJhYmxlfSBbYV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IG1hcCBmcm9tICcuL21hcCdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWRqdXN0V2l0aCAoZm4sIHByZWQsIGEpIHtcbiAgY29uc3QgX2ZuID0geCA9PiB7XG4gICAgaWYgKHByZWQoeCkpIHtcbiAgICAgIHJldHVybiBmbih4KVxuICAgIH1cbiAgICByZXR1cm4geFxuICB9XG4gIHJldHVybiBtYXAoX2ZuLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhKSlcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxuICpcbiAqIEBmdW5jdGlvbiBhbGxcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFsbCAoY2IsIGEpIHtcbiAgbGV0IHJlcyA9IHRydWVcbiAgZm9yIChsZXQgaSBpbiBhKSB7XG4gICAgaWYgKCFjYihhW2ldKSkge1xuICAgICAgcmVzID0gZmFsc2VcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn0pXG4iLCIvKipcbiAqIEFwcGxpZXMgYSBsaXN0IG9mIHByZWRpY2F0ZXMgdG8gdGhlIGRhdGEgYW5kIHJldHVybnMgdHJ1ZSBpZiBhbGwgcGFzc1xuICpcbiAqIEBmdW5jdGlvbiBhbGxQYXNzXG4gKiBAZGVzY3JpcHRpb24gQXBwbGllcyBhIGxpc3Qgb2YgcHJlZGljYXRlcyB0byB0aGUgZGF0YSBhbmQgcmV0dXJucyB0cnVlIGlmIGFsbCBwYXNzXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIFsoKi4uLiAtPiBCb29sZWFuKV0gLT4gKCouLi4gLT4gQm9vbGVhblxuICogQHBhcmFtIHtBcnJheX0gcHJlZGljYXRlcyBBbiBhcnJheSBvZiBwcmVkaWNhdGVzIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGNvbWJpbmVkIHByZWRpY2F0ZVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFsbFBhc3MgKGNicywgYSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNicy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghY2JzW2ldKGEpKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdpdGggdGhlIGluaXRpYWwgdmFsdWUgcHJvdmlkZWRcbiAqXG4gKiBAZnVuY3Rpb24gYWx3YXlzXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIGZ1bmN0aW9uIHdpdGggdGhlIGluaXRpYWwgdmFsdWUgcHJvdmlkZWRcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiAoKiAtPiBhKVxuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbHdheXMgKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHggfVxufSlcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGJvdGggcHJlZGljYXRlcyBhcmUgdHJ1ZVxuICpcbiAqIEBmdW5jdGlvbiBhbmRcbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgYm90aCBwcmVkaWNhdGVzIGFyZSB0cnVlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnICh4LCB5KSAtPiBib29sZWFuXG4gKiBAcGFyYW0geyp9IHggLSBBIHByZWRpY2F0ZVxuICogQHBhcmFtIHsqfSB5IC0gQSBwcmVkaWNhdGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYW5kICh4LCB5KSB7XG4gIHJldHVybiB4ICYmIHlcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbiBvZiB0aGUgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxuICpcbiAqIEBmdW5jdGlvbiBhbnlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb24gb2YgdGhlIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKFRPRE8pXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbnkgKGNiLCBhKSB7XG4gIGxldCByZXMgPSBmYWxzZVxuICBmb3IgKGxldCBpIGluIGEpIHtcbiAgICBpZiAoY2IoYVtpXSkpIHtcbiAgICAgIHJlcyA9IHRydWVcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn0pXG4iLCIvKipcbiAqIEFwcGxpZXMgYSBsaXN0IG9mIHByZWRpY2F0ZXMgdG8gdGhlIGRhdGEgYW5kIHJldHVybnMgdHJ1ZSBpZiBvbmUgcGFzc2VzXG4gKlxuICogQGZ1bmN0aW9uIGFueVBhc3NcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgWygqLi4uIC0+IEJvb2xlYW4pXSAtPiAoKi4uLikgLT4gQm9vbGVhblxuICogQHBhcmFtIHtBcnJheX0gcHJlZGljYXRlcyBBbiBhcnJheSBvZiBwcmVkaWNhdGVzIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGNvbWJpbmVkIHByZWRpY2F0ZVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFueVBhc3MgKGNicywgYSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNicy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjYnNbaV0oYSkpIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59KVxuIiwiLyoqXG4gKiBBcHBsaWVzIGEgbGlzdCBvZiBmdW5jdGlvbnMgdG8gYSBsaXN0IG9mIHZhbHVlcyBhbmQgcmV0dXJucyBhIGNvbWJpbmVkIHJlc3VsdCBhcnJheVxuICpcbiAqIEBmdW5jdGlvbiBhcFxuICogQGRlc2NyaXB0aW9uIEFwcGxpZXMgYSBsaXN0IG9mIGZ1bmN0aW9ucyB0byBhIGxpc3Qgb2YgdmFsdWVzIGFuZCByZXR1cm5zIGEgY29tYmluZWQgcmVzdWx0IGFycmF5XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIEBzaWcgW2EgLT4gYl0gLT4gW2FdIC0+IFtiXVxuICogQHBhcmFtIHsoRnVuY3Rpb25bXXxGdW5jdGlvbnxBcHBsaWNhdGl2ZSl9IGZucyAtIEFuIGFycmF5IG9mIGZ1bmN0aW9ucyBvciBhIGZ1bmN0aW9uIG9yIGFuIGFwcGxpY2F0aXZlXG4gKiBAcGFyYW0ge0FycmF5fSB2YWxzIC0gQW4gYXJyYXkgb2YgdmFsdWVzXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX0gW2FdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBjdXJyeTEgZnJvbSAnLi9fcHJpdmF0ZS9jdXJyeTEnXG5pbXBvcnQgaXMgZnJvbSAnLi9pcydcbmltcG9ydCBmb2xkIGZyb20gJy4vYXJyYXkvZm9sZCdcbmltcG9ydCBtYXAgZnJvbSAnLi9hcnJheS9tYXAnXG5cbmNvbnN0IGlzRnVuY3Rpb24gPSBpcygnRnVuY3Rpb24nKVxuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhcCAoZm5zLCB2YWxzKSB7XG4gIGlmIChpc0Z1bmN0aW9uKGZucy5hcCkpIHtcbiAgICByZXR1cm4gZm5zLmFwKHZhbHMpXG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24oZm5zKSkge1xuICAgIHJldHVybiB4ID0+IGZucyh4KSh2YWxzKHgpKVxuICB9XG4gIHJldHVybiBmb2xkKChhY2MsIGYpID0+IGFjYy5jb25jYXQobWFwKGN1cnJ5MShmKSwgdmFscykpLCBbXSwgZm5zKVxufSlcbiIsImltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IG1hcCBmcm9tICcuL21hcCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gYXBlcnR1cmVcbiAqIEBwYXJhbSBuXG4gKiBAcGFyYW0gYXJyXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYXBlcnR1cmUgKG4sIGEpIHtcbiAgaWYgKGEubGVuZ3RoIDwgbikge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGNvbnN0IHJlcyA9IEFycmF5KGEubGVuZ3RoIC0gbiArIDEpXG4gIHJldHVybiBtYXAoKGl0ZW0sIGlkeCkgPT4gYS5zbGljZShpZHgsIGlkeCArIG4pLCByZXMpXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gYXBwZW5kXG4gKiBAZGVzY3JpcHRpb24gQXBwZW5kIGFuIGVsbWVudCB0byBhIGxpc3RcbiAqIEBwYXJhbSB7Kn0gZWwgLSBFbGVtZW50IHRvIGFkZCB0byBhIGxpc3RcbiAqIEBwYXJhbSB7YXJyYXl9IGxpc3QgLSBMaXN0IHRvIHdoaWNoIHRvIGFkZCB0aGUgZWxlbWVudFxuICogQHJldHVybiB7YXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGwgPSBbMCwgMV1cbiAqIGFwcGVuZCgnYScsIGwpIC8vIHJldXRuciBbMCwgMSwgJ2EnXVxuICpcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGNvbmNhdCBmcm9tICcuL2NvbmNhdCdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYXBwZW5kIChlbCwgbGlzdCkge1xuICByZXR1cm4gY29uY2F0KGxpc3QsIFsgZWwgXSlcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBhcHBseVxuICogQGRlc2NyaXB0aW9uIFRoZSBhcHBseSgpIG1ldGhvZCBjYWxscyBhIGZ1bmN0aW9uIHdpdGggdGhlIGdpdmVuIGFyZ3VtZW50cyBwcm92aWRlZCBhcyBhbiBhcnJheSwgYW5kIHRoZSBmdW5jdGlvbiBhcyBjb250ZXh0LlxuICogQHBhcmFtIGZuXG4gKiBAcGFyYW0gYXJnc1xuICogQHJldHVybiB7Kn1cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGEgPSBhcHBseShmdW5jdGlvbiAoKSB7XG4gKiAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykubWFwKHggPT4geCAqIDIpXG4gKiAgIH0pXG4gKiBhKFsxLCAyLCAzXSlcbiAqIC8vIFsyLCA0LCA2XVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYXBwbHkgKGZuLCBhcmdzKSB7XG4gIHJldHVybiBmbi5hcHBseShmbiwgYXJncylcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gYXJyYXlDb25jYXRcbiAqIEBwYXJhbSBhMVxuICogQHBhcmFtIGEyXG4gKiBAcmV0dXJucyB7VFtdfVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGNvbmNhdCAoYSwgYikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdChhLCBiKVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBlcXVhbHNBcnJheVxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIGZvciBkZWVwIGNvbXBhcmlzb24gb2YgYXJyYXlzXG4gKiBAcGFyYW0ge2F9IHggLSBPYmplY3QgdG8gY29tcGFyZSBvZiB0eXBlIGFcbiAqIEBwYXJhbSB7YX0geSAtIE9iamVjdCB4IHRvIGNvbXBhcmUgd2l0aCBvYmplY3QgeFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IG5vdCBmcm9tICcuLi9ub3QnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzQXJyYXkgKHgsIHkpIHtcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub3QoZXF1YWxzKHhbaV0sIHlbaV0pKSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBhcnJheUZpbHRlclxuICogQHByaXZhdGVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYXJyYXlGaWx0ZXIgKGZuLCBhKSB7XG4gIHZhciByID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZuKGFbaV0pKSByLnB1c2goYVtpXSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IG1hcHBpbmcgb3ZlciB0aGUgcHJvdmlkZWQgYXJyYXkgYW5kIGNhbGxpbmcgYW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSB7Y2JGdW5jdGlvbn0gY2IgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBtb2RpZnkgdGhlIGl0ZW1cbiAqIEBwYXJhbSB7Kn0gaW5pdCAtIEluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBBcnJheSB3aXRoIGl0ZW1zIHRvIG1vZGlmeSBieSB0aGUgY2IgZnVuY3Rpb25cbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFsaWFzIHJlZHVjZVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvbGQoYWRkLCAwLCBbMSwxLDFdKVxuICogLy8gcmVzdWx0ID0gM1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIGNiRnVuY3Rpb25cbiAqIEBwYXJhbSB7Kn0gciAtIEFjY3VtdWxhdG9yIHdoaWNoIGFjY3VtdWxhdGVzIHRoZSBjYWxsYmFjaydzIHJldHVybiB2YWx1ZXNcbiAqIEBwYXJhbSB7Kn0gaXRlbSAtIHRoZSBjdXJyZW50IGVsZW1lbnQgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSB0aGUgaW5kZXkgb2YgdGhlIGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge0FycmF5fSBhIC0gVGhlIGluaXRpYWwgYXJyYXlcbiAqIEByZXR1cm4geyp9XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgbGV0IHIgPSBpbml0XG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciA9IGNiKHIsIGFbaV0sIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIENoZWNrcyBpZiB0aGUgcHJvdmlkZWQgb2JqZWN0IGlzIGFuIGFycmF5LCBhdXRvY3VycmllZCBmdW5jdGlvblxuICpcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gaXNBcnJheVxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiB0aGUgcHJvdmlkZWQgb2JqZWN0IGlzIGFuIGFycmF5LCBhdXRvY3VycmllZCBmdW5jdGlvblxuICogQHBhcmFtIHsqfSBPYmplY3QgdG8gdmVyaWZpeVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBpc0FycmF5KFsxLDEsMV0pXG4gKiAvLyByZXN1bHQgPSB0cnVlXG4gKi9cblxuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnQXJyYXknKVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gbWFwXG4gKiBAZGVzY3JpcHRpb24gTWFwcyBvdmVyIGFuIGFycmF5IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogIGNvbnN0IHJlc3VsdCA9IG1hcChpZGVudGl0eSwgWzAsMiwzXSlcbiAqICAvLyByZXN1bHQgPSBbMCwyLDNdXG4gKiAgY29uc3QgYWRkMiA9IGFkZCgyKVxuICogIGNvbnN0IHJlc3VsdCA9IG1hcChhZGQyLCBbMCwyLDNdKVxuICogIC8vIHJlc3VsdCA9IFsyLDQsNV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBjb25zdCByID0gbmV3IEFycmF5KGwpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltpXSA9IGNiKGFbaV0sIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiB0b0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQ29udmVydHMgdGhlIGlucHV0IHRvIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5TGlrZX0geCAtIE9iamVjdCB0byBjb252ZXJ0IHRvIGFuIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSB0b0FycmF5KFwic3RyaW5nXCIpXG4gKiAvLyByZXN1bHQgPSBbJ3MnLCd0JywncicsJ2knLCduJywnZyddXG4gKlxuICogZnVuY3Rpb24gKCkge1xuICogIGNvbnN0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cylcbiAqICBjb25zb2xlLmxvZyh0eXBlb2YgYXJncykgLy8gQXJyYXlcbiAqIH1cbiAqXG4gKiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0FycmF5ICh4KSB7XG4gIHJldHVybiB4Lmxlbmd0aCA9PT0gMSA/IFt4WzBdXSA6IEFycmF5LmFwcGx5KG51bGwsIHgpXG59O1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdW5pb25BcnJheVxuICogQGRlc2NyaXB0aW9uIE1lcmdlcyAyIGFycmF5c1xuICogQHBhcmFtIHtBcnJheX0gYUwgLSBBcnJheSB0byBtZXJnZVxuICogQHBhcmFtIHtBcnJheX0gYVIgLSBBcnJheSB0byBtZXJnZVxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gdW5pb25BcnJheShbMCwxLDJdLCBbMyw0LDVdKVxuICogLy8gcmVzdWx0ID0gWzAuMS4yLjMuNC41XVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiB1bmlvbkFycmF5IChhTCwgYVIpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhTC5jb25jYXQoYVIpKSlcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBiaW5hcnlcbiAqIEBwYXJhbSBjYlxuICogQHJldHVybnMge2Z1bmN0aW9uKCo9LCAqPSk6ICp9XG4gKi9cbmltcG9ydCBjdXJyeTEgZnJvbSAnLi9fcHJpdmF0ZS9jdXJyeTEnXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkxKGZ1bmN0aW9uIGJpbmFyeSAoY2IpIHtcbiAgcmV0dXJuIGN1cnJ5KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGNiKGEsIGIpXG4gIH0pXG59KVxuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbi8qKlxuICogQGZ1bmN0aW9uIGJpbmRcbiAqIEBkZXNjcmlwdGlvbiBCaW5kIGEgZnVuY3Rpb24gdG8gYSBjb250ZXh0XG4gKiBAcGFyYW0ge2Z1bmN0aW9uIH1mblxuICogQHBhcmFtIHsqfSBjb250ZXh0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYmluZCAoZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGZuLmJpbmQoY29udGV4dClcbn0pXG4iLCIvKipcbiAqIEFsd2F5cyByZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCBhIEZhbHNlIGJvb2xlYW5cbiAqXG4gKiBAZnVuY3Rpb24gRlxuICogQGRlc2NyaXB0aW9uIEFsd2F5cyByZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCBhIEZhbHNlIGJvb2xlYW5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiovXG5pbXBvcnQgYWx3YXlzIGZyb20gJy4uL2Fsd2F5cydcblxuZXhwb3J0IGRlZmF1bHQgYWx3YXlzKGZhbHNlKVxuIiwiLyoqXG4gKiBBbHdheXMgcmV0dXJucyBhIGZ1bmN0aW9uIHdpdGggYSBGYWxzZSBib29sZWFuXG4gKlxuICogQGZ1bmN0aW9uIFRcbiAqIEBkZXNjcmlwdGlvbiBBbHdheXMgcmV0dXJucyBhIGZ1bmN0aW9uIHdpdGggYSBGYWxzZSBib29sZWFuXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAcGFyYW0geyp9IGFcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICoqL1xuaW1wb3J0IGFsd2F5cyBmcm9tICcuLi9hbHdheXMnXG5cbmV4cG9ydCBkZWZhdWx0IGFsd2F5cyh0cnVlKVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgd2hlbiBib3RoIHByZWRpY2F0ZXMgcmV0dXJuIHRydWVcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuMSBBIHByZWRpY2F0ZSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4yIEEgcHJlZGljYXRlIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGxpZnQgZnJvbSAnLi4vbGlmdCdcbmltcG9ydCBhbmQgZnJvbSAnLi4vYW5kJ1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBib3RoIChmbjEsIGZuMikge1xuICByZXR1cm4gaXMoJ0Z1bmN0aW9uJykoZm4xKVxuICAgID8gZnVuY3Rpb24gX2JvdGggKCkgeyByZXR1cm4gZm4xLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgJiYgZm4yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfVxuICAgIDogbGlmdChhbmQpKGZuMSwgZm4yKVxufSlcbiIsIi8qKlxuICogQ3VycmllZCBmdW5jdGlvbiB0aGF0IHZlcmlmaWVzIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudCBpcyBhIGJvb2xlYW5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGlzXG4gKiBAZGVzY3JpcHRpb24gQ3VycmllZCBmdW5jdGlvbiB0aGF0IHZlcmlmaWVzIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudCBpcyBhIGJvb2xlYW5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7Kn0gSXRlbSB0byB2ZXJpZnlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdCb29sZWFuJylcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGNhbGxcbiAqIEBwYXJhbSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbi8vIGltcG9ydCBjdXJyeTEgZnJvbSAnLi9fcHJpdmF0ZS9jdXJyeTEnXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gY2FsbCAoZm4pIHtcbiAgcmV0dXJuIGZuLmFwcGx5KGZuLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gY29tcGxlbWVudFxuICogQGRlc2NyaXB0aW9uIExpZnRzIGEgcHJlZGljYXRlIGZ1bmN0aW9uIGFuZCByZXR1cm5zIHRoZSBjb21wbGVtZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBBIHByZWRpY2F0ZSBmdW5jdGlvblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAc2VlIG5vdFxuICogQHNlZSBsaWZ0XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGlzTm90RW1wdHkgPSBjb21wbGVtZW50KGlzRW1wdHkpXG4gKiBpc05vdEVtcHR5KFtdKSAvLyBmYWxzZVxuICogaXNOb3RFbXB0eSh7J2EnIDogMX0pIC8vIHRydWVcbiAqXG4gKiBjb21wbGVtZW50KE1heWJlLm9mKGZhbHNlKSkgLy8gdHJ1ZVxuICogY29tcGxlbWVudChNYXliZS5vZih0cnVlKSkgLy8gZmFsc2VcbiAqL1xuaW1wb3J0IGxpZnQgZnJvbSAnLi9saWZ0J1xuaW1wb3J0IG5vdCBmcm9tICcuL25vdCdcblxuY29uc3QgY29tcGxlbWVudCA9IGxpZnQobm90KVxuZXhwb3J0IGRlZmF1bHQgY29tcGxlbWVudFxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gY29tcG9zZVxuICogQHJldHVybnMge2Z1bmN0aW9uKCk6ICp9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvc2UgKCkge1xuICBsZXQgZm5zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuXG4gIHJldHVybiBmdW5jdGlvbiBfY29tcG9zZSAoKSB7XG4gICAgbGV0IGluaXQgPSBmbnNbZm5zLmxlbmd0aCAtIDFdXG4gICAgbGV0IHJlc3VsdCA9IFtpbml0LmFwcGx5KGluaXQsIGFyZ3VtZW50cyldXG4gICAgbGV0IGkgPSBmbnMubGVuZ3RoIC0gMlxuXG4gICAgZm9yIChpOyBpID49IDA7IC0taSkge1xuICAgICAgY29uc3QgZm4gPSBmbnNbaV1cblxuICAgICAgcmVzdWx0ID0gW2ZuLmFwcGx5KGZuLCByZXN1bHQpXVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0WzBdXG4gIH1cbn07XG4iLCIvKipcbiAqIENvbmNhdGVuYXRlcyAyIGl0ZW1zIHRvZ2V0aGVyXG4gKlxuICogQGZ1bmN0aW9uIGNvbmNhdFxuICogQGRlc2NyaXB0aW9uIENvbmNhdGVuYXRlcyAyIGl0ZW1zIHRvZ2V0aGVyXG4gKiBAc2luY2UgdjEuMC40XG4gKiBAcGFyYW0ge2F9IGEgLSBMZWZ0IHNpZGUgb2YgdGhlIGNvbmNhdGVuYXRpb25cbiAqIEBwYXJhbSB7YX0gYiAtIHJpZ2h0IHNpZGUgb2YgdGhlIGNvbmNhdGVuYXRpb25cbiAqIEByZXR1cm4ge2F9IENvbmNhdGVuYXRlZCBpdGVtXG4gKiovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGFycmF5Q29uY2F0IGZyb20gJy4vYXJyYXkvY29uY2F0J1xuaW1wb3J0IHN0cmluZ0NvbmNhdCBmcm9tICcuL3N0cmluZy9jb25jYXQnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGNvbmNhdCAoYSwgYikge1xuICBjb25zdCB0eXBlTWFwID0ge1xuICAgICdTdHJpbmcnOiBzdHJpbmdDb25jYXQsXG4gICAgJ0FycmF5JzogYXJyYXlDb25jYXRcbiAgfVxuICByZXR1cm4gdHlwZU1hcFt0eXBlKGEpXShhLCBiKVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGNvbmRcbiAqIEBwYXJhbSBjb25kc1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25kIChjb25kcykge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25kcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNvbmRzW2ldWzBdKHZhbHVlKSkgcmV0dXJuIGNvbmRzW2ldWzFdKHZhbHVlKVxuICAgIH1cbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qKlxuICogQGZ1bmN0aW9uIGN1cnJ5XG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJ5IChmdW4pIHtcbiAgY29uc3QgYXJnc2xlbiA9IGZ1bi5sZW5ndGhcblxuICBpZiAoYXJnc2xlbiA9PT0gMCkge1xuICAgIHJldHVybiBmdW5cbiAgfVxuICByZXR1cm4gY3JlYXRlUmVjdXJzZXIoW10pXG5cbiAgZnVuY3Rpb24gcmVjdXJzZSAoYWNjLCBhcmdzKSB7XG4gICAgY29uc3QgX2FjYyA9IGFjYy5jb25jYXQoYXJncylcbiAgICByZXR1cm4gX2FjYy5sZW5ndGggPCBhcmdzbGVuXG4gICAgICA/IGNyZWF0ZVJlY3Vyc2VyKF9hY2MpXG4gICAgICA6IGZ1bi5hcHBseSh0aGlzLCBfYWNjKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUmVjdXJzZXIgKGFjYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjdXJzZShhY2MsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBmdW5jdGlvbiBkaWZmRGF0ZVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiAyIGRhdGVzIGluIG1pbGxpc2Vjb25kXG4gKiBAcGFyYW0ge0RhdGV9IHN0YXJ0IC0gU3RhcnQgZGF0ZVxuICogQHBhcmFtIHtEYXRlfSBlbmQgLSBFbmQgZGF0ZVxuICogQHJldHVybiB7bnVtYmVyfSBSRXR1cm4gdGhlIGRpZmZlcmVuY2UgaW4gbWlsbGlzZWNvbmRzXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZGlmZkRhdGUgKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChuZXcgRGF0ZShzdGFydCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoZW5kKS5nZXRUaW1lKCkpXG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG4vKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0RhdGUnKVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwOS8wMy8yMDE3LlxuICovXG5pbXBvcnQgZGlmZkRhdGUgZnJvbSAnLi9kaWZmRGF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IHtcbiAgcmV0dXJuIGRpZmZEYXRlKG5ldyBEYXRlKCkpKGQpIDwgMFxufVxuIiwiLyoqXG4gKlxuICovXG5pbXBvcnQgaXNEYXRlIGZyb20gJy4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQgKHgpIHtcbiAgLy8gbm9pbnNwZWN0aW9uIEpTQ2hlY2tGdW5jdGlvblNpZ25hdHVyZXNcbiAgcmV0dXJuIGlzRGF0ZSh4KSAmJiBpc0Zpbml0ZSh4LnZhbHVlT2YoKSlcbn07XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gODY0MDAwMDAgLy8gMjQqNjAqNjAqMTAwMCA9IDg2NDAwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyAzNjAwMDAwIC8vIDYwKjYwKjEwMDAgPSAzNjAwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyA2MDAwMCAvLyA2MCoxMDAwID0gNjAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDEwMDBcclxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb24gZGVmYXVsdFRvXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gYiAtPiBhIHwgYlxuICogQHBhcmFtIHthfSBkZWZhdWx0IFRoZSBkZWZhdWx0IHZhbHVlLlxuICogQHBhcmFtIHtifSB2YWwgYHZhbGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkIG9mIGBkZWZhdWx0YCB1bmxlc3MgYHZhbGAgaXMgYG51bGxgLCBgdW5kZWZpbmVkYCBvciBgTmFOYC5cbiAqIEByZXR1cm4geyp9IFRoZSBzZWNvbmQgdmFsdWUgaWYgaXQgaXMgbm90IGBudWxsYCwgYHVuZGVmaW5lZGAgb3IgYE5hTmAsIG90aGVyd2lzZSB0aGUgZGVmYXVsdCB2YWx1ZVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGRlZmF1bHRUbyAoZCwgdikge1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICByZXR1cm4gdiA9PSBudWxsIHx8IHYgIT09IHYgPyBkIDogdlxufSlcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVtcHR5ICh4KSB7XG4gIHJldHVybiBuZXcgeC5jb25zdHJ1Y3RvcigpXG59O1xuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBlcXVhbHNcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgZXF1YWxpdHkgb2YgMiBpdGVtc1xuICogQHBhcmFtIHsqfSB4IC0gTGVmdCBzaWRlIG9mIHRoZSBlcXVhbGl0eSBjaGVja1xuICogQHBhcmFtIHsqfSB5IC0gUmlnaHQgc2lkZSBvZiB0aGUgZXF1YWxpdHkgY2hlY2tcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG5hbiA9IE51bWJlci5OYU5cbiAqIGVxdWFsKG5hbiwgbmFuKSAvLyByZXR1cm5zIHRydWVcbiAqXG4gKiBjb25zdCBhcnIxID0gWzAsIDEsIDIsIDNdXG4gKiBjb25zdCBhcnIyID0gW251bGwsIDEsIDIsIDNdXG4gKiBlcXVhbHMoYXJyMSwgYXJyMikgLy8gcmV0dXJucyBmYWxzZVxuICpcbiAqIGVxdWFscyhuZXcgT2JqZWN0KHsnYSc6IDAsICdiJzogMX0pLCB7J2EnOiAwLCAnYic6IDF9KSAvLyB0cnVlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4vaWRlbnRpY2FsJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuaW1wb3J0IG5vdCBmcm9tICcuL25vdCdcbmltcG9ydCBvciBmcm9tICcuL29yJ1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vb2JqZWN0L2lzJ1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9hcnJheS9pcydcbmltcG9ydCBpc0Jvb2xlYW4gZnJvbSAnLi9ib29sZWFuL2lzJ1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vbnVtYmVyL2lzJ1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4vc3RyaW5nL2lzJ1xuaW1wb3J0IGlzRGF0ZSBmcm9tICcuL2RhdGUvaXMnXG5pbXBvcnQgZXF1YWxzQXJyYXkgZnJvbSAnLi9hcnJheS9lcXVhbHMnXG5pbXBvcnQgZXF1YWxzT2JqZWN0IGZyb20gJy4vb2JqZWN0L2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzICh4LCB5KSB7XG4gIGlmIChpZGVudGljYWwoeCwgeSkpIHJldHVybiB0cnVlXG5cbiAgaWYgKHR5cGUoeCkgIT09IHR5cGUoeSkpIHJldHVybiBmYWxzZVxuXG4gIGlmIChvcihub3QoZXhpc3RzKHgpKSwgbm90KGV4aXN0cyh5KSkpKSByZXR1cm4gZmFsc2VcblxuICBpZiAoeC5jb25zdHJ1Y3RvciAhPT0geS5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKGlzU3RyaW5nKHgpIHx8IGlzQm9vbGVhbih4KSB8fCBpc051bWJlcih4KSB8fCBpc0RhdGUoeCkpIHtcbiAgICByZXR1cm4gaWRlbnRpY2FsKHgudmFsdWVPZigpLCB5LnZhbHVlT2YoKSlcbiAgfVxuICBpZiAoaXNBcnJheSh4KSkge1xuICAgIHJldHVybiBlcXVhbHNBcnJheSh4LCB5KVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHgpKSB7XG4gICAgcmV0dXJuIGVxdWFsc09iamVjdCh4LCB5KVxuICB9XG4gIHJldHVybiBmYWxzZVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGV4aXN0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGlzdHMgKHgpIHtcbiAgcmV0dXJuICEoeCA9PSBudWxsKVxufTtcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGZpbHRlclxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1Y250aW9uIHRoYXQgZmlsdGVycyBPYmplY3RzLCBBcnJheXMgYW5kIE1hcHNcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGFycmF5RmlsdGVyIGZyb20gJy4vYXJyYXkvZmlsdGVyJ1xuaW1wb3J0IG9iamVjdEZpbHRlciBmcm9tICcuL29iamVjdC9maWx0ZXInXG5pbXBvcnQgbWFwRmlsdGVyIGZyb20gJy4vbWFwL2ZpbHRlcidcbi8vIFRPRE9cbi8vIGltcG9ydCBzZXRGaWx0ZXIgZnJvbSAnLi4vc2V0L2ZpbHRlcidcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZmlsdGVyIChmbiwgYSkge1xuICBzd2l0Y2ggKHR5cGUoYSkpIHtcbiAgICAvLyBzd2l0Y2ggKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSkge1xuICAgIC8vIGNhc2UgJ0Z1bmN0aW9uJzpcbiAgICAvLyAgIHJldHVybiBjdXJyeShmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIHJldHVybiBjYi5jYWxsKHRoaXMsIGEuYXBwbHkodGhpcywgYXJndW1lbnRzKSlcbiAgICAvLyAgIH0pXG4gICAgY2FzZSAnT2JqZWN0JzpcbiAgICAgIHJldHVybiBvYmplY3RGaWx0ZXIoZm4sIGEpXG4gICAgLy8gY2FzZSAnU3RyaW5nJzpcbiAgICAvLyAgIHJldHVybiBzdHJpbmdNYXAoY2IsIGEpXG4gICAgY2FzZSAnTWFwJzpcbiAgICAgIHJldHVybiBtYXBGaWx0ZXIoZm4sIGEpXG4gICAgLy8gY2FzZSAnU2V0JzpcbiAgICAvLyAgIHJldHVybiBzZXRGaWx0ZXIoZm4sIGEpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBhcnJheUZpbHRlcihmbiwgYSlcbiAgfVxufSlcbiIsIi8qKlxuICogRmluZCB0aGUgaW5kZXggbWF0Y2hpbmcgYSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb24gZmluZEluZGV4XG4gKiBAZGVzY3JpcHRpb24gRmluZCB0aGUgaW5kZXggbWF0Y2hpbmcgYSBwcmVkaWNhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGEgLT4gYm9vbGVhbikgLT4gW2FdIC0+IG51bWJlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gUHJlZGljYXRlIGZ1bmN0aW9uIHJldHVybnMgYSBib29sZWFuXG4gKiBAcGFyYW0ge0FycmF5fSBBbiBhcnJheSBsaWtlIG9iamVjdFxuICogQHJldHVybiB7bnVtYmVyfVxuICoqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZmluZEluZGV4IChmbiwgYSkge1xuICBsZXQgaSA9IDBcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIHdoaWxlIChpIDwgbCkge1xuICAgIGlmIChmbihhW2ldKSkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gICAgaSArPSAxXG4gIH1cbiAgcmV0dXJuIC0xXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZmlyc3RcbiAqIEBwYXJhbSBbYV1cbiAqIEByZXR1cm4gYSB8IHVuZGVmaW5lZFxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhcnIgPSBbMSwgMiwgNF1cbiAqIGZpcnN0KFsxLCAyLCA0XSkgLy8gcmV0dXJucyAxXG4gKi9cbmltcG9ydCBjdXJyeTEgZnJvbSAnLi9fcHJpdmF0ZS9jdXJyeTEnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5MShmdW5jdGlvbiBmaXJzdCAoYSkge1xuICByZXR1cm4gYSAmJiBhLmxlbmd0aCA/IGFbMF0gOiB1bmRlZmluZWRcbn0pXG4iLCJpbXBvcnQgZm9sZCBmcm9tICcuL2ZvbGQnXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi9lbXB0eSdcbmltcG9ydCBjb25jYXQgZnJvbSAnLi9jb25jYXQnXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBpcyBmcm9tICcuL2lzJ1xuXG5jb25zdCBpc0Z1bmN0aW9uID0gaXMoJ0Z1bmN0aW9uJylcblxuLyoqXG4gKiBAZnVuY3Rpb24gZmxhdE1hcFxuICogQHBhcmFtIGZuXG4gKiBAcGFyYW0gYVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmbGF0TWFwIChmbiwgYSkge1xuICBpZiAoaXNGdW5jdGlvbihhKSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIGZuKGEoeCkpKHgpXG4gICAgfVxuICB9XG4gIGlmIChpc0Z1bmN0aW9uKGEuZmxhdE1hcCkpIHtcbiAgICByZXR1cm4gYS5mbGF0TWFwKGZuKVxuICB9XG4gIHJldHVybiBmb2xkKChhY2MsIHgpID0+IGNvbmNhdChhY2MsIGZuKHgpKSwgZW1wdHkoYSksIGEpXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgbGlrZSBvYmplY3QgYW5kIGNhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZW1cbiAqXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlbVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoKGEsIGIsIGMsIGEpIOKGkiBhKSDihpIgYSDihpIgW2JdIOKGkiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiByZWNlaXZlcyA0IHZhbHVlczogdGhlIGFjY3VtdWxhdG9yLCB0aGUgaXRlbSwgdGhlIGluZGV4LCBhbmQgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0geyp9IGEgaXMgdGhlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gW2JdIHRoZSBhcnJheSBsaWtlIGl0ZW0gdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcmV0dXJuIHsqfSBhIGlzIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZVxuICoqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBhcnJheUZvbGQgZnJvbSAnLi9hcnJheS9mb2xkJ1xuaW1wb3J0IG9iamVjdEZvbGQgZnJvbSAnLi9vYmplY3QvZm9sZCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIGEpIHtcbiAgY29uc3QgdHlwZU1hcCA9IHtcbiAgICAnT2JqZWN0Jzogb2JqZWN0Rm9sZCxcbiAgICAnQXJyYXknOiBhcnJheUZvbGRcbiAgfVxuICAvLyBpZiAoYS5uZXh0KSB7XG4gIC8vICAgcmV0dXJuIGl0ZXJhYmxlRm9sZChjYiwgaW5pdCwgYSlcbiAgLy8gfVxuICAvLyBpZiAodHlwZShTeW1ib2wpICE9PSAndW5kZWZpbmVkJyAmJiBhW1N5bWJvbC5pdGVyYXRvcl0pIHtcbiAgLy8gICByZXR1cm4gaXRlcmFibGVGb2xkKGNiLCBpbml0LCBhW1N5bWJvbC5pdGVyYXRvcl0oKSlcbiAgLy8gfVxuICByZXR1cm4gdHlwZU1hcFt0eXBlKGEpXShjYiwgaW5pdCwgYSlcbn0pXG5cbi8vIGZ1bmN0aW9uIGl0ZXJhYmxlRm9sZCAoY2IsIGFjYywgZ2VuKSB7XG4vLyAgIGxldCBzdGVwID0gZ2VuLm5leHQoKVxuLy8gICB3aGlsZSAoIXN0ZXAuZG9uZSkge1xuLy8gICAgIGFjYyA9IGNiKGFjYywgc3RlcC52YWx1ZSlcbi8vICAgICBzdGVwID0gZ2VuLm5leHQoKVxuLy8gICB9XG4vLyAgIHJldHVybiBhY2Ncbi8vIH1cbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gaWRlbnRpY2FsXG4gKiBAZGVzY3JpcHRpb24gY2hlY2tzIGZvciBpZGVudGludGljYWwgaXRlbXNcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgaXNOYW4gZnJvbSAnLi9udW1iZXIvaXNOYW4nXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlkZW50aWNhbCAoeCwgeSkge1xuICBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSB7XG4gICAgcmV0dXJuIDEgLyB4ID09PSAxIC8geVxuICB9XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gISEoaXNOYW4oeCkgJiYgaXNOYW4oeSkpXG59KVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBpZGVudGl0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHZhbHVlIHN1cHBsaWVkIHRvIHRoZSBmdW5jdGlvblxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlkZW50aXR5ICh4KSB7XG4gIHJldHVybiB4XG59O1xuIiwiLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBfXyB9IGZyb20gJy4vX18nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcGVydHVyZSB9IGZyb20gJy4vYXBlcnR1cmUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGFwcGx5U3BlYyB9IGZyb20gJy4vYXBwbHlTcGVjJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBhcHBseVRvIH0gZnJvbSAnLi9hcHBseVRvJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBhc2NlbmQgfSBmcm9tICcuL2FzY2VuZCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzb2MgfSBmcm9tICcuL2Fzc29jJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NvY1BhdGggfSBmcm9tICcuL2Fzc29jUGF0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgY2xhbXAgfSBmcm9tICcuL2NsYW1wJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBjbG9uZSB9IGZyb20gJy4vY2xvbmUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBhcmF0b3IgfSBmcm9tICcuL2NvbXBhcmF0b3InXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBvc2VLIH0gZnJvbSAnLi9jb21wb3NlSydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcG9zZVAgfSBmcm9tICcuL2NvbXBvc2VQJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wb3NlV2l0aCB9IGZyb20gJy4vY29tcG9zZVdpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGNvbnN0cnVjdCB9IGZyb20gJy4vY29uc3RydWN0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBjb25zdHJ1Y3ROIH0gZnJvbSAnLi9jb25zdHJ1Y3ROJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBjb250YWlucyB9IGZyb20gJy4vY29udGFpbnMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGNvbnZlcmdlIH0gZnJvbSAnLi9jb252ZXJnZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgY291bnRCeSB9IGZyb20gJy4vY291bnRCeSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZGVjIH0gZnJvbSAnLi9kZWMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGRlc2NlbmQgfSBmcm9tICcuL2Rlc2NlbmQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGRpZmZlcmVuY2UgfSBmcm9tICcuL2RpZmZlcmVuY2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGRpZmZlcmVuY2VXaXRoIH0gZnJvbSAnLi9kaWZmZXJlbmNlV2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZGlzc29jIH0gZnJvbSAnLi9kaXNzb2MnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGRpc3NvY1BhdGggfSBmcm9tICcuL2Rpc3NvY1BhdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGRyb3AgfSBmcm9tICcuL2Ryb3AnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGRyb3BMYXN0IH0gZnJvbSAnLi9kcm9wTGFzdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZHJvcExhc3RXaGlsZSB9IGZyb20gJy4vZHJvcExhc3RXaGlsZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZHJvcFJlcGVhdHMgfSBmcm9tICcuL2Ryb3BSZXBlYXRzJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBkcm9wUmVwZWF0c1dpdGggfSBmcm9tICcuL2Ryb3BSZXBlYXRzV2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZHJvcFdoaWxlIH0gZnJvbSAnLi9kcm9wV2hpbGUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGVpdGhlciB9IGZyb20gJy4vZWl0aGVyJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBlbmRzV2l0aCB9IGZyb20gJy4vZW5kc1dpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGVxQnkgfSBmcm9tICcuL2VxQnknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGVxUHJvcHMgfSBmcm9tICcuL2VxUHJvcHMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGV2b2x2ZSB9IGZyb20gJy4vZXZvbHZlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBmaW5kIH0gZnJvbSAnLi9maW5kJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBmaW5kTGFzdCB9IGZyb20gJy4vZmluZExhc3QnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGZpbmRMYXN0SW5kZXggfSBmcm9tICcuL2ZpbmRMYXN0SW5kZXgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGZsYXR0ZW4gfSBmcm9tICcuL2ZsYXR0ZW4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGZsaXAgfSBmcm9tICcuL2ZsaXAnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGZvckVhY2ggfSBmcm9tICcuL2ZvckVhY2gnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGZvckVhY2hPYmpJbmRleGVkIH0gZnJvbSAnLi9mb3JFYWNoT2JqSW5kZXhlZCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZnJvbVBhaXJzIH0gZnJvbSAnLi9mcm9tUGFpcnMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGdyb3VwQnkgfSBmcm9tICcuL2dyb3VwQnknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGdyb3VwV2l0aCB9IGZyb20gJy4vZ3JvdXBXaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBndCB9IGZyb20gJy4vZ3QnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGd0ZSB9IGZyb20gJy4vZ3RlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXNQYXRoIH0gZnJvbSAnLi9oYXNQYXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBoZWFkIH0gZnJvbSAnLi9oZWFkJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpZkVsc2UgfSBmcm9tICcuL2lmRWxzZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaW5jIH0gZnJvbSAnLi9pbmMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGluY2x1ZGVzIH0gZnJvbSAnLi9pbmNsdWRlcydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaW5kZXhCeSB9IGZyb20gJy4vaW5kZXhCeSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaW5kZXhPZiB9IGZyb20gJy4vaW5kZXhPZidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaW5pdCB9IGZyb20gJy4vaW5pdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaW5uZXJKb2luIH0gZnJvbSAnLi9pbm5lckpvaW4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGluc2VydCB9IGZyb20gJy4vaW5zZXJ0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnNlcnRBbGwgfSBmcm9tICcuL2luc2VydEFsbCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaW50ZXJzZWN0aW9uIH0gZnJvbSAnLi9pbnRlcnNlY3Rpb24nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGludGVyc3BlcnNlIH0gZnJvbSAnLi9pbnRlcnNwZXJzZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaW50byB9IGZyb20gJy4vaW50bydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaW52ZXJ0IH0gZnJvbSAnLi9pbnZlcnQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGludmVydE9iaiB9IGZyb20gJy4vaW52ZXJ0T2JqJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnZva2VyIH0gZnJvbSAnLi9pbnZva2VyJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBqb2luIH0gZnJvbSAnLi9qb2luJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBqdXh0IH0gZnJvbSAnLi9qdXh0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBsYXN0SW5kZXhPZiB9IGZyb20gJy4vbGFzdEluZGV4T2YnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGxlbmd0aCB9IGZyb20gJy4vbGVuZ3RoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBsZW5zIH0gZnJvbSAnLi9sZW5zJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBsZW5zSW5kZXggfSBmcm9tICcuL2xlbnNJbmRleCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbGVuc1BhdGggfSBmcm9tICcuL2xlbnNQYXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBsZW5zUHJvcCB9IGZyb20gJy4vbGVuc1Byb3AnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGxpZnROIH0gZnJvbSAnLi9saWZ0Tidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbHQgfSBmcm9tICcuL2x0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBsdGUgfSBmcm9tICcuL2x0ZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwQWNjdW0gfSBmcm9tICcuL21hcEFjY3VtJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXBBY2N1bVJpZ2h0IH0gZnJvbSAnLi9tYXBBY2N1bVJpZ2h0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXBPYmpJbmRleGVkIH0gZnJvbSAnLi9tYXBPYmpJbmRleGVkJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXRjaCB9IGZyb20gJy4vbWF0Y2gnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1hdGhNb2QgfSBmcm9tICcuL21hdGhNb2QnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1heEJ5IH0gZnJvbSAnLi9tYXhCeSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWVhbiB9IGZyb20gJy4vbWVhbidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWVkaWFuIH0gZnJvbSAnLi9tZWRpYW4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1lbW9pemVXaXRoIH0gZnJvbSAnLi9tZW1vaXplV2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VBbGwgfSBmcm9tICcuL21lcmdlQWxsJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZURlZXBMZWZ0IH0gZnJvbSAnLi9tZXJnZURlZXBMZWZ0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZURlZXBSaWdodCB9IGZyb20gJy4vbWVyZ2VEZWVwUmlnaHQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlRGVlcFdpdGggfSBmcm9tICcuL21lcmdlRGVlcFdpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlRGVlcFdpdGhLZXkgfSBmcm9tICcuL21lcmdlRGVlcFdpdGhLZXknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlTGVmdCB9IGZyb20gJy4vbWVyZ2VMZWZ0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZVJpZ2h0IH0gZnJvbSAnLi9tZXJnZVJpZ2h0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZVdpdGggfSBmcm9tICcuL21lcmdlV2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VXaXRoS2V5IH0gZnJvbSAnLi9tZXJnZVdpdGhLZXknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1pbiB9IGZyb20gJy4vbWluJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtaW5CeSB9IGZyb20gJy4vbWluQnknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1vZHVsbyB9IGZyb20gJy4vbW9kdWxvJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtb3ZlIH0gZnJvbSAnLi9tb3ZlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBuQXJ5IH0gZnJvbSAnLi9uQXJ5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBuZWdhdGUgfSBmcm9tICcuL25lZ2F0ZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbm9uZSB9IGZyb20gJy4vbm9uZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbnRoIH0gZnJvbSAnLi9udGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG50aEFyZyB9IGZyb20gJy4vbnRoQXJnJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBvIH0gZnJvbSAnLi9vJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBvYmpPZiB9IGZyb20gJy4vb2JqT2YnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG9mIH0gZnJvbSAnLi9vZidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgb25jZSB9IGZyb20gJy4vb25jZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgb3RoZXJ3aXNlIH0gZnJvbSAnLi9vdGhlcndpc2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG92ZXIgfSBmcm9tICcuL292ZXInXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHBhaXIgfSBmcm9tICcuL3BhaXInXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHBhcnRpYWwgfSBmcm9tICcuL3BhcnRpYWwnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHBhcnRpYWxSaWdodCB9IGZyb20gJy4vcGFydGlhbFJpZ2h0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJ0aXRpb24gfSBmcm9tICcuL3BhcnRpdGlvbidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aEVxIH0gZnJvbSAnLi9wYXRoRXEnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHBhdGhPciB9IGZyb20gJy4vcGF0aE9yJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoU2F0aXNmaWVzIH0gZnJvbSAnLi9wYXRoU2F0aXNmaWVzJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwaWNrQWxsIH0gZnJvbSAnLi9waWNrQWxsJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwaWNrQnkgfSBmcm9tICcuL3BpY2tCeSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcGlwZSB9IGZyb20gJy4vcGlwZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcGlwZUsgfSBmcm9tICcuL3BpcGVLJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwaXBlUCB9IGZyb20gJy4vcGlwZVAnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHBpcGVXaXRoIH0gZnJvbSAnLi9waXBlV2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcGx1Y2sgfSBmcm9tICcuL3BsdWNrJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmVwZW5kIH0gZnJvbSAnLi9wcmVwZW5kJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwcm9wRXEgfSBmcm9tICcuL3Byb3BFcSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvcElzIH0gZnJvbSAnLi9wcm9wSXMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHByb3BPciB9IGZyb20gJy4vcHJvcE9yJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwcm9wcyB9IGZyb20gJy4vcHJvcHMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHByb3BTYXRpc2ZpZXMgfSBmcm9tICcuL3Byb3BTYXRpc2ZpZXMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHJhbmdlIH0gZnJvbSAnLi9yYW5nZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcmVkdWNlIH0gZnJvbSAnLi9yZWR1Y2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHJlZHVjZUJ5IH0gZnJvbSAnLi9yZWR1Y2VCeSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcmVkdWNlZCB9IGZyb20gJy4vcmVkdWNlZCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcmVkdWNlUmlnaHQgfSBmcm9tICcuL3JlZHVjZVJpZ2h0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyByZWR1Y2VXaGlsZSB9IGZyb20gJy4vcmVkdWNlV2hpbGUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHJlamVjdCB9IGZyb20gJy4vcmVqZWN0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyByZW1vdmUgfSBmcm9tICcuL3JlbW92ZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcmVwZWF0IH0gZnJvbSAnLi9yZXBlYXQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHJlcGxhY2UgfSBmcm9tICcuL3JlcGxhY2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHJldmVyc2UgfSBmcm9tICcuL3JldmVyc2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHNjYW4gfSBmcm9tICcuL3NjYW4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHNlcXVlbmNlIH0gZnJvbSAnLi9zZXF1ZW5jZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc2V0IH0gZnJvbSAnLi9zZXQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHNsaWNlIH0gZnJvbSAnLi9zbGljZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc29ydCB9IGZyb20gJy4vc29ydCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc29ydEJ5IH0gZnJvbSAnLi9zb3J0QnknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHNvcnRXaXRoIH0gZnJvbSAnLi9zb3J0V2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc3BsaXQgfSBmcm9tICcuL3NwbGl0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzcGxpdEF0IH0gZnJvbSAnLi9zcGxpdEF0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzcGxpdEV2ZXJ5IH0gZnJvbSAnLi9zcGxpdEV2ZXJ5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzcGxpdFdoZW4gfSBmcm9tICcuL3NwbGl0V2hlbidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc3RhcnRzV2l0aCB9IGZyb20gJy4vc3RhcnRzV2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc3VidHJhY3QgfSBmcm9tICcuL3N1YnRyYWN0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzeW1tZXRyaWNEaWZmZXJlbmNlIH0gZnJvbSAnLi9zeW1tZXRyaWNEaWZmZXJlbmNlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzeW1tZXRyaWNEaWZmZXJlbmNlV2l0aCB9IGZyb20gJy4vc3ltbWV0cmljRGlmZmVyZW5jZVdpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRhaWwgfSBmcm9tICcuL3RhaWwnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRha2UgfSBmcm9tICcuL3Rha2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRha2VMYXN0IH0gZnJvbSAnLi90YWtlTGFzdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdGFrZUxhc3RXaGlsZSB9IGZyb20gJy4vdGFrZUxhc3RXaGlsZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdGFrZVdoaWxlIH0gZnJvbSAnLi90YWtlV2hpbGUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRhcCB9IGZyb20gJy4vdGFwJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0ZXN0IH0gZnJvbSAnLi90ZXN0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0aGVuIH0gZnJvbSAnLi90aGVuJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0aHVua2lmeSB9IGZyb20gJy4vdGh1bmtpZnknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRpbWVzIH0gZnJvbSAnLi90aW1lcydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdG9Mb3dlciB9IGZyb20gJy4vdG9Mb3dlcidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdG9QYWlycyB9IGZyb20gJy4vdG9QYWlycydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdG9QYWlyc0luIH0gZnJvbSAnLi90b1BhaXJzSW4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRvU3RyaW5nIH0gZnJvbSAnLi90b1N0cmluZydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdG9VcHBlciB9IGZyb20gJy4vdG9VcHBlcidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdHJhbnNkdWNlIH0gZnJvbSAnLi90cmFuc2R1Y2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRyYW5zcG9zZSB9IGZyb20gJy4vdHJhbnNwb3NlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0cmF2ZXJzZSB9IGZyb20gJy4vdHJhdmVyc2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRyaW0gfSBmcm9tICcuL3RyaW0nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRyeUNhdGNoIH0gZnJvbSAnLi90cnlDYXRjaCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdW5hcHBseSB9IGZyb20gJy4vdW5hcHBseSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdW5hcnkgfSBmcm9tICcuL3VuYXJ5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmN1cnJ5TiB9IGZyb20gJy4vdW5jdXJyeU4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHVuZm9sZCB9IGZyb20gJy4vdW5mb2xkJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmlvbldpdGggfSBmcm9tICcuL3VuaW9uV2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pcSB9IGZyb20gJy4vdW5pcSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pcUJ5IH0gZnJvbSAnLi91bmlxQnknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHVuaXFXaXRoIH0gZnJvbSAnLi91bmlxV2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdW5sZXNzIH0gZnJvbSAnLi91bmxlc3MnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHVubmVzdCB9IGZyb20gJy4vdW5uZXN0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnRpbCB9IGZyb20gJy4vdW50aWwnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHVwZGF0ZSB9IGZyb20gJy4vdXBkYXRlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VXaXRoIH0gZnJvbSAnLi91c2VXaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB2YWx1ZXNJbiB9IGZyb20gJy4vdmFsdWVzSW4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHZpZXcgfSBmcm9tICcuL3ZpZXcnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHdoZW4gfSBmcm9tICcuL3doZW4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHdoZXJlIH0gZnJvbSAnLi93aGVyZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgd2hlcmVFcSB9IGZyb20gJy4vd2hlcmVFcSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aG91dCB9IGZyb20gJy4vd2l0aG91dCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgeHByb2QgfSBmcm9tICcuL3hwcm9kJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB6aXBPYmogfSBmcm9tICcuL3ppcE9iaidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWRkIH0gZnJvbSAnLi9udW1iZXIvYWRkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGRJbmRleCB9IGZyb20gJy4vYWRkSW5kZXgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkanVzdCB9IGZyb20gJy4vYWRqdXN0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGp1c3RXaXRoIH0gZnJvbSAnLi9hZGp1c3RXaXRoJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbGwgfSBmcm9tICcuL2FsbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxsUGFzcyB9IGZyb20gJy4vYWxsUGFzcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWx3YXlzIH0gZnJvbSAnLi9hbHdheXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFuZCB9IGZyb20gJy4vYW5kJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbnkgfSBmcm9tICcuL2FueSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW55UGFzcyB9IGZyb20gJy4vYW55UGFzcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXAgfSBmcm9tICcuL2FwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcHBlbmQgfSBmcm9tICcuL2FwcGVuZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXBwbHkgfSBmcm9tICcuL2FwcGx5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBiaW5hcnkgfSBmcm9tICcuL2JpbmFyeSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmluZCB9IGZyb20gJy4vYmluZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYm90aCB9IGZyb20gJy4vYm9vbGVhbi9ib3RoJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjYWxsIH0gZnJvbSAnLi9jYWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wbGVtZW50IH0gZnJvbSAnLi9jb21wbGVtZW50J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wb3NlIH0gZnJvbSAnLi9jb21wb3NlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb25jYXQgfSBmcm9tICcuL2NvbmNhdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29uZCB9IGZyb20gJy4vY29uZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3VycnkgfSBmcm9tICcuL2N1cnJ5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0VG8gfSBmcm9tICcuL2RlZmF1bHRUbydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGlmZkRhdGUgfSBmcm9tICcuL2RhdGUvZGlmZkRhdGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRpdmlkZSB9IGZyb20gJy4vbnVtYmVyL2RpdmlkZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZW1wdHkgfSBmcm9tICcuL2VtcHR5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlcXVhbHMgfSBmcm9tICcuL2VxdWFscydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXhpc3RzIH0gZnJvbSAnLi9leGlzdHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEYgfSBmcm9tICcuL2Jvb2xlYW4vRidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlsdGVyIH0gZnJvbSAnLi9maWx0ZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbmRJbmRleCB9IGZyb20gJy4vZmluZEluZGV4J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaXJzdCB9IGZyb20gJy4vZmlyc3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZsYXRNYXAgfSBmcm9tICcuL2ZsYXRNYXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvbGQgfSBmcm9tICcuL2ZvbGQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvcm1hdFN0cmluZyB9IGZyb20gJy4vc3RyaW5nL2Zvcm1hdFN0cmluZydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzIH0gZnJvbSAnLi9vYmplY3QvaGFzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXNJbiB9IGZyb20gJy4vb2JqZWN0L2hhc0luJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpZGVudGljYWwgfSBmcm9tICcuL2lkZW50aWNhbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWRlbnRpdHkgfSBmcm9tICcuL2lkZW50aXR5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpcyB9IGZyb20gJy4vaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzQXJyYXkgfSBmcm9tICcuL2FycmF5L2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0Jvb2xlYW4gfSBmcm9tICcuL2Jvb2xlYW4vaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRGF0ZSB9IGZyb20gJy4vZGF0ZS9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNFbXB0eSB9IGZyb20gJy4vaXNFbXB0eSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNGdXR1cmVEYXRlIH0gZnJvbSAnLi9kYXRlL2lzRnV0dXJlRGF0ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNNYXAgfSBmcm9tICcuL21hcC9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOYW4gfSBmcm9tICcuL251bWJlci9pc05hbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOdWxsIH0gZnJvbSAnLi9udWxsL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc051bWJlciB9IGZyb20gJy4vbnVtYmVyL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc09iamVjdCB9IGZyb20gJy4vb2JqZWN0L2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1NldCB9IGZyb20gJy4vc2V0L2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1N0cmluZyB9IGZyb20gJy4vc3RyaW5nL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1VuZGVmaW5lZCB9IGZyb20gJy4vdW5kZWZpbmVkL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1ZhbGlkRGF0ZSB9IGZyb20gJy4vZGF0ZS9pc1ZhbGlkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBKdXN0IH0gZnJvbSAnLi9tb25hZHMvSnVzdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5cyB9IGZyb20gJy4va2V5cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5c0luIH0gZnJvbSAnLi9vYmplY3Qva2V5c0luJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsYXN0IH0gZnJvbSAnLi9sYXN0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaWZ0IH0gZnJvbSAnLi9saWZ0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXAgfSBmcm9tICcuL21hcCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWF4IH0gZnJvbSAnLi9tYXgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1heWJlIH0gZnJvbSAnLi9tb25hZHMvTWF5YmUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlIH0gZnJvbSAnLi9vYmplY3QvbWVyZ2UnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG11bHRpcGx5IH0gZnJvbSAnLi9udW1iZXIvbXVsdGlwbHknXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vdCB9IGZyb20gJy4vbm90J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOb3RoaW5nIH0gZnJvbSAnLi9tb25hZHMvTm90aGluZydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb21pdCB9IGZyb20gJy4vb2JqZWN0L29taXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG9yIH0gZnJvbSAnLi9vcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aCB9IGZyb20gJy4vb2JqZWN0L3BhdGgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBpY2sgfSBmcm9tICcuL29iamVjdC9waWNrJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcm9wIH0gZnJvbSAnLi9vYmplY3QvcHJvcCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3VtIH0gZnJvbSAnLi9udW1iZXIvc3VtJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUIH0gZnJvbSAnLi9ib29sZWFuL1QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvRGF5IH0gZnJvbSAnLi9kYXRlL3RvRGF5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0hvdXIgfSBmcm9tICcuL2RhdGUvdG9Ib3VyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b01pbnV0ZXMgfSBmcm9tICcuL2RhdGUvdG9NaW51dGVzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b1NlY29uZHMgfSBmcm9tICcuL2RhdGUvdG9TZWNvbmRzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0cnV0aHkgfSBmcm9tICcuL3RydXRoeSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHlwZSB9IGZyb20gJy4vdHlwZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pb24gfSBmcm9tICcuL2FycmF5L3VuaW9uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2YWx1ZXMgfSBmcm9tICcuL29iamVjdC92YWx1ZXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHppcCB9IGZyb20gJy4vemlwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB6aXBXaXRoIH0gZnJvbSAnLi96aXBXaXRoJ1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gaXNcbiAqIEBkZXNjcmlwdGlvbiBWZXJpZmllcyB0aGUgdHlwZSBvZiB0aGUgcHJvdmlkZWQgYXJndW1lbnRcbiAqXG4gKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlzIChDdG9yLCB2YWwpIHtcbiAgcmV0dXJuIHR5cGUodmFsKSA9PT0gQ3RvclxufSlcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxuICovXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi9lbXB0eSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4vZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtcHR5ICh4KSB7XG4gIHJldHVybiBleGlzdHMoeCkgJiYgZXF1YWxzKHgsIGVtcHR5KHgpKVxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuY29uc3QgaXNGdW5jdGlvbiA9IGlzKCdGdW5jdGlvbicpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzSXRlciAoaXRlcikge1xuICByZXR1cm4gaXNGdW5jdGlvbihpdGVyW1N5bWJvbC5pdGVyYXRvcl0pXG59XG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBJdGVyYXRvciBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4zXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYXRvcn0gYVxuICogQHJldHVybiB7SXRlcmF0b3J9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2FsbGJhY2ssIGl0ZXJhdG9yKSB7XG4gIGxldCByID0gW11cbiAgZm9yIChsZXQgbmV4dFZhbHVlID0gaXRlcmF0b3IubmV4dCgpOyBuZXh0VmFsdWUuZG9uZSAhPT0gdHJ1ZTsgbmV4dFZhbHVlID0gaXRlcmF0b3IubmV4dCgpKSB7XG4gICAgci5wdXNoKGNhbGxiYWNrKGl0ZXJhdG9yLnZhbHVlKCkpKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBrZXlzIG9mIHRoZSBwcm92aWRlZCBvYmplY3Qgb3IgaXRlcmF0b3JcbiAqXG4gKiBAZnVuY3Rpb24ga2V5c1xuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgdGhlIGtleXMgb2YgdGhlIHByb3ZpZGVkIG9iamVjdCBvciBpdGVyYXRvclxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBvYmogLT4gWypdXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gT2JqIGZyb20gemhpY2ggdG8gdGFrZSB0aGUga2V5c1xuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBvYmplY3RLZXlzIGZyb20gJy4vb2JqZWN0L2tleXMnXG5pbXBvcnQgbWFwS2V5cyBmcm9tICcuL21hcC9rZXlzJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKG9iaikge1xuICBzd2l0Y2ggKHR5cGUob2JqKSkge1xuICAgIGNhc2UgJ01hcCc6XG4gICAgICByZXR1cm4gbWFwS2V5cyhvYmopXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBvYmplY3RLZXlzKG9iailcbiAgfVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGxhc3RcbiAqIEBwYXJhbSBbYV1cbiAqIEByZXR1cm4gYSB8IHVuZGVmaW5lZFxuICovXG5pbXBvcnQgY3VycnkxIGZyb20gJy4vX3ByaXZhdGUvY3VycnkxJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeTEoZnVuY3Rpb24gbGFzdCAoYSkge1xuICByZXR1cm4gYSAmJiBhLmxlbmd0aCA/IGFbYS5sZW5ndGggLSAxXSA6IHVuZGVmaW5lZFxufSlcbiIsIi8qKlxuICogXCJsaWZ0c1wiIGEgZnVuY3Rpb24gb2YgYXJpdHkgPiAxIHNvIHRoYXQgaXQgbWF5IFwibWFwIG92ZXJcIiBhIGxpc3QsIEZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIGxpZnRcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKCouLi4gLT4gKikgLT4gKFsqXS4uLiAtPiBbKl0pXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBjdXJyeTEgZnJvbSAnLi9fcHJpdmF0ZS9jdXJyeTEnXG5pbXBvcnQgZm9sZCBmcm9tICcuL2ZvbGQnXG5pbXBvcnQgYXAgZnJvbSAnLi9hcCdcbmltcG9ydCBtYXAgZnJvbSAnLi9tYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGxpZnQgKGZuKSB7XG4gIGNvbnN0IGxpZnRlZCA9IGN1cnJ5MShjdXJyeShmbikpXG4gIHJldHVybiBjdXJyeShmdW5jdGlvbiBfbGlmdCAoKSB7XG4gICAgcmV0dXJuIGZvbGQoYXAsIG1hcChsaWZ0ZWQsIGFyZ3VtZW50c1swXSksIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpXG4gIH0pXG59KVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYW4gaXRlcmFibGUgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvbiBtYXBcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiB3aGljaCBtYXBzIG92ZXIgYW4gaXRlcmFibGUuXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBiIC0+IGJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGFycmF5TWFwIGZyb20gJy4vYXJyYXkvbWFwJ1xuaW1wb3J0IG9iamVjdE1hcCBmcm9tICcuL29iamVjdC9tYXAnXG5pbXBvcnQgbWFwTWFwIGZyb20gJy4vbWFwL21hcCdcbmltcG9ydCBzdHJpbmdNYXAgZnJvbSAnLi9zdHJpbmcvbWFwJ1xuaW1wb3J0IGl0ZXJhdG9yTWFwIGZyb20gJy4vaXRlcmF0b3IvbWFwJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuaW1wb3J0IGlzSXRlcmF0b3IgZnJvbSAnLi9pdGVyYXRvci9pcydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBzd2l0Y2ggKHR5cGUoYSkpIHtcbiAgICBjYXNlICdGdW5jdGlvbic6XG4gICAgICByZXR1cm4gY3VycnkoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2IuY2FsbCh0aGlzLCBhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpXG4gICAgICB9KVxuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICByZXR1cm4gb2JqZWN0TWFwKGNiLCBhKVxuICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICByZXR1cm4gc3RyaW5nTWFwKGNiLCBhKVxuICAgIGNhc2UgJ01hcCc6XG4gICAgICByZXR1cm4gbWFwTWFwKGNiLCBhKVxuICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgIHJldHVybiBhcnJheU1hcChjYiwgYSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlzSXRlcmF0b3IoYSlcbiAgICAgICAgPyBpdGVyYXRvck1hcChjYiwgYSlcbiAgICAgICAgOiBhcnJheU1hcChjYiwgYSlcbiAgfVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG1hcEZpbHRlclxuICogQHByaXZhdGVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwRmlsdGVyIChmbiwgbSkge1xuICBsZXQgciA9IG5ldyBNYXAoKVxuXG4gIGxldCBpdCA9IG0uZW50cmllcygpXG4gIGxldCByZXN1bHQgPSBpdC5uZXh0KClcblxuICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgY29uc3QgayA9IHJlc3VsdC52YWx1ZVswXVxuICAgIGNvbnN0IHYgPSByZXN1bHQudmFsdWVbMV1cbiAgICBpZiAoZm4oaywgdikpIHIuc2V0KGssIHYpXG4gICAgcmVzdWx0ID0gaXQubmV4dCgpXG4gIH1cblxuICAvLyBMaW1pdGVkIGJyb3dzZXIgc3VwcG9ydFxuICAvLyBtLmZvckVhY2goKHYsIGspID0+IHtcbiAgLy8gICBpZiAoZm4oaywgdikpIHIuc2V0KGssIHYpXG4gIC8vIH0pXG5cbiAgLy8gYmFiZWwgdHJhbnNwaWxlIGlzc3Vlc1xuICAvLyBmb3IgKGNvbnN0IFtrLCB2XSBvZiBtLmVudHJpZXMoKSkge1xuICAvL1xuICAvLyB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdNYXAnKVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBvd24ga2V5cyBvZiBhbiBNYXAgYXMgYW4gQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBbYl1cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQHJldHVybiB7QXJyYXl9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGtleXMgKGEpIHtcbiAgcmV0dXJuIGEua2V5cygpXG59KVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYSBNYXAgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7TWFwfSBhXG4gKiBAcmV0dXJuIHtNYXB9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vZW1wdHknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIGEuZm9yRWFjaCgodiwgaywgbWFwKSA9PiB7XG4gICAgci5zZXQoaywgY2IodiwgaywgbWFwKSlcbiAgfSlcbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIGxhcmdlc3Qgb2YgdGhlIDIgYXJndW1lbnRzIHByb3ZpZGVkXG4gKlxuICogQGZ1bmN0aW9uIG1heFxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4geyp9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWF4IChhLCBiKSB7XG4gIHJldHVybiBiID4gYSA/IGIgOiBhXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gSnVzdFxuICogQHBhcmFtIHZhbFxuICogQHJldHVybnMge0p1c3R9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xubGV0IEp1c3QgPSBmdW5jdGlvbiAodmFsKSB7XG4gIHRoaXMuX3ZhbHVlID0gdmFsXG4gIHJldHVybiB0aGlzXG59XG5cbkp1c3QucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWVcbn1cbkp1c3QucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEp1c3RcbiIsImltcG9ydCBKdXN0IGZyb20gJy4vSnVzdCdcbmltcG9ydCBOb3RoaW5nIGZyb20gJy4vTm90aGluZydcblxuLyoqXG4gKiBAZnVuY3Rpb24gTWF5YmVcbiAqIEBwYXJhbSB2YWxcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5sZXQgTWF5YmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gIHRoaXMuX192YWx1ZSA9IHZhbFxufVxuXG5NYXliZS5vZiA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIE1heWJlKSByZXR1cm4gdmFsXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgTWF5YmUpIHtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWxcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHJldHVybiBuZXcgTWF5YmUodmFsKVxufVxuXG5NYXliZS5wcm90b3R5cGUuZ2V0T3JFbHNlID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIHRoaXMuaXNOb3RoaW5nKCkgPyBuIDogdGhpcy5fX3ZhbHVlXG59XG5cbk1heWJlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZikge1xuICBpZiAodGhpcy5pc05vdGhpbmcoKSkge1xuICAgIHJldHVybiBNYXliZS5vZihudWxsKVxuICB9XG4gIHJldHVybiBNYXliZS5vZihmKHRoaXMuX192YWx1ZSkpXG59XG5cbk1heWJlLnByb3RvdHlwZS5hcCA9IGZ1bmN0aW9uIChtKSB7XG4gIHJldHVybiBtLm1hcCh0aGlzLl9fdmFsdWUpXG59XG5cbk1heWJlLnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAodGhpcy5fX3ZhbHVlID09IG51bGwpXG59XG5cbk1heWJlLnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhdGhpcy5pc05vdGhpbmcoKVxufVxuXG5NYXliZS5wcm90b3R5cGUuTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBOb3RoaW5nKClcbn1cblxuTWF5YmUucHJvdG90eXBlLkp1c3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgSnVzdCh0aGlzLl92YWx1ZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF5YmVcbiIsIi8qKlxuICogQGZ1bmN0aW9uIE5vdGhpbmdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5sZXQgTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbn1cblxuTm90aGluZy5wcm90b3R5cGUuaXNKdXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZmFsc2Vcbn1cbk5vdGhpbmcucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aGluZ1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gbm90XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBub3QgKHgpIHtcbiAgcmV0dXJuICF4XG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMy8wMi8yMDE5XG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ251bGwnKVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIDIgYXJndW1lbnRzXG4gKlxuICogQGZ1bmN0aW9uIGFkZFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgMiBhcmd1bWVudHNcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXG4gKiBAcGFyYW0ge051bWJlcn0gYlxuICogQHJldHVybiB7TnVtYmVyfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhZGQgKGEsIGIpIHtcbiAgcmV0dXJuICthICsgK2Jcbn0pXG4iLCIvKipcbiAqXG4gKlxuICogQGZ1bmN0aW9uIGRpdmlkZVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGRpdmlzaW9uIG9mIHRoZSAyIGFyZ3VtZW50c1xuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGRpdmlkZSAoYSwgYikge1xuICByZXR1cm4gK2EgLyArYlxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnTnVtYmVyJylcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGlzTmFOXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIG51bWJlciBpcyBOQU5cblxuICovXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9pcydcbmltcG9ydCBhbmQgZnJvbSAnLi4vYW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc05hbiAoeCkge1xuICByZXR1cm4gYW5kKGlzTnVtYmVyKHgpLCBpc05hTih4KSlcbn07XG4iLCIvKipcbiAqIFJldHVybnMgdGhlIHByb2R1Y3Qgb2YgdGhlIDIgYXJndW1lbnRzXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxuICogQHBhcmFtIHtOdW1iZXJ9IGJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbXVsdGlwbHkgKGEsIGIpIHtcbiAgcmV0dXJuICthICogK2Jcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgbnVtYmVycyBpbiBhbiBhcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBbTnVtYmVyXSAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7QXJyYXl9IGFcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBhZGQgZnJvbSAnLi9hZGQnXG5pbXBvcnQgZm9sZCBmcm9tICcuLi9mb2xkJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBzdW0gKGEpIHtcbiAgcmV0dXJuIGZvbGQoYWRkLCAwLCBhKVxufSlcbiIsIi8qKlxuXG4gKiBlcXVhbHNcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuLi9leGlzdHMnXG5pbXBvcnQgbm90IGZyb20gJy4uL25vdCdcbmltcG9ydCBlcXVhbHMgZnJvbSAnLi4vZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoeCwgeSkgPT4ge1xuICBmb3IgKGxldCBrZXlYIGluIHgpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXG4gICAgaWYgKG5vdChlcXVhbHMoeFtrZXlYXSwgeVtrZXlYXSkpKSByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZvciAobGV0IGtleVkgaW4geSkge1xuICAgIGlmIChub3QoZXhpc3RzKHhba2V5WV0pKSAmJiBleGlzdHMoeVtrZXlZXSkpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBvYmplY3RGaWx0ZXJcbiAqIEBwcml2YXRlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9iamVjdEZpbHRlciAoZm4sIG8pIHtcbiAgbGV0IHIgPSB7fVxuICBjb25zdCBrID0ga2V5cyhvKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZm4ob1trW2ldXSkpIHJba1tpXV0gPSBvW2tbaV1dXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAcHJpdmF0ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgbykge1xuICBjb25zdCBrID0ga2V5cyhvKVxuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBrLmxlbmd0aFxuICBsZXQgciA9IE9iamVjdChpbml0KVxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHIgPSBjYihyLCBvW2tbaV1dLCBrW2ldLCBvKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcge1N0cmluZ30gLT4ge09iamVjdH0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGhhcyAocHJvcCwgb2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LCBldmVuIGlmIGl0IGlzIGluaGVyaXRlZFxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyB7U3RyaW5nfSAtPiB7T2JqZWN0fSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcFxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaGFzSW4gKHByb3AsIG9iaikge1xuICByZXR1cm4gcHJvcCBpbiBvYmpcbn0pXG4iLCIvKipcblxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdPYmplY3QnKVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBvd24ga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBbYl1cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQHJldHVybiB7QXJyYXl9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGtleXMgKGEpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKE9iamVjdChhKSlcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgYWxsIHRoZSBrZXlzIG9mIGFuIG9iamVjdCBhcyBhbiBBcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IFtiXVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24ga2V5cyAoYSkge1xuICBjb25zdCByID0gW11cbiAgZm9yIChjb25zdCBrIGluIGEpIHtcbiAgICByLnB1c2goaylcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIG9iamVjdCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBlbXB0eSBmcm9tICcuLi9lbXB0eSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBjb25zdCBrID0ga2V5cyhhKVxuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBrLmxlbmd0aFxuICBjb25zdCByID0gZW1wdHkoYSlcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByW2tbaV1dID0gY2IoYVtrW2ldXSwga1tpXSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuXG4gKiBlcXVhbHNcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGlkZW50aWNhbCBmcm9tICcuLi9pZGVudGljYWwnXG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vb2JqZWN0L2lzJ1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vYXJyYXkvaXMnXG5pbXBvcnQgdW5pb24gZnJvbSAnLi4vYXJyYXkvdW5pb24nXG5cbmNvbnN0IG1lcmdlID0gY3VycnkoKG9iakwsIG9ialIpID0+IHtcbiAgbGV0IHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIG9iakwpXG5cbiAgaWYgKGlkZW50aWNhbChvYmpMLCBvYmpSKSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvYmpMKVxuICB9XG4gIGZvciAobGV0IGtleSBpbiBvYmpSKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqUiwga2V5KSkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgY29uc3Qgb2xkVmFsdWUgPSBvYmpSW2tleV1cbiAgICBjb25zdCBuZXdWYWx1ZSA9IG9iakxba2V5XVxuXG4gICAgaWYgKGlzT2JqZWN0KG9sZFZhbHVlKSAmJiBpc09iamVjdChuZXdWYWx1ZSkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2Uob2xkVmFsdWUsIG5ld1ZhbHVlKVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShuZXdWYWx1ZSkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdW5pb24obmV3VmFsdWUsIG9sZFZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IG9sZFZhbHVlIC8vIFRPRE86IHRoaXMgaXMgYSByZWZlcmVuY2UsIHNob3VsZCBiZSBjbG9uZVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59KVxuXG5leHBvcnQgZGVmYXVsdCBtZXJnZVxuIiwiLyoqXG5cbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChvYmosIG5hbWVzKSA9PiB7XG4gIGxldCByZXN1bHQgPSB7fVxuXG4gIE9iamVjdC5rZXlzKG9iaikuZmlsdGVyKChrZXkpID0+IHtcbiAgICByZXR1cm4gbmFtZXMuaW5kZXhPZihrZXkpID09PSAtMVxuICB9KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBwYXRoXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gcGF0aCAocGF0aCwgb2JqKSB7XG4gIGxldCB2YWwgPSBvYmpcbiAgbGV0IGlkeCA9IDBcbiAgbGV0IHBcbiAgd2hpbGUgKGlkeCA8IHBhdGgubGVuZ3RoKSB7XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcCA9IHBhdGhbaWR4XVxuICAgIHZhbCA9IE51bWJlci5pc0ludGVnZXIocClcbiAgICAgID8gcCA8IDAgPyB2YWxbdmFsLmxlbmd0aCArIHBdIDogdmFsW3BdXG4gICAgICA6IHZhbFtwXVxuICAgIGlkeCArPSAxXG4gIH1cbiAgcmV0dXJuIHZhbFxufSlcbi8vIGxldCByID0gb2JqXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbi8vICAgaWYgKHIgPT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZFxuLy8gICByID0gcltwYXRoW2ldXVxuLy8gfVxuLy8gcmV0dXJuIHJcbi8vIH0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBwaWNrXG4gKiBAZGVzY3JpcHRpb24gcmV0dXJucyBhIG5ldyBiamVjdCB3aXRoIG9ubHkgdGhlIHByb3BzIHRoYXQgYXJlIHByb3ZpZGVkXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyAtIEFycmF5IG9mIHByb3BlcnR5IG5hbWVzXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gVGhlIG9iamVjdCBmcm9tIHdoaWNoIHRvIHRha2UgdGhlIHByb3BlcnRpZXNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBwaWNrIChwcm9wcywgb2JqKSB7XG4gIGNvbnN0IHIgPSB7fVxuICBsZXQgaSA9IDBcbiAgd2hpbGUgKGkgPCBwcm9wcy5sZW5ndGgpIHtcbiAgICBpZiAocHJvcHNbaV0gaW4gb2JqKSB7XG4gICAgICByW3Byb3BzW2ldXSA9IG9ialtwcm9wc1tpXV1cbiAgICB9XG4gICAgaSArPSAxXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBwcm9wXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gcHJvcCAocCwgb2JqKSB7XG4gIHJldHVybiBvYmpbcF1cbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiB2YWx1ZXNcbiAqIEBkZXNjcmlwdGlvbiBSRXR1cm5zIGEgbGlzdCBvZiB2YWx1ZXMgdGFrZW4gZnJvbSBhbiBvYmplY3RzIG93biBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge29iamVjdH0gLSBvYmogVGhlIG9iamVjdCBmcm9tIHdoaWNoIHRvIHRha2UgdGhlIHZhbHVlc1xuICogQHJldHVybiB7YXJyYXl9XG4gKlxuICoqL1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuLi9fcHJpdmF0ZS9jdXJyeTEnXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5MShmdW5jdGlvbiB2YWx1ZXMgKG9iaikge1xuICBjb25zdCBrID0ga2V5cyhvYmopXG4gIGNvbnN0IGwgPSBrLmxlbmd0aFxuICBjb25zdCByID0gW11cbiAgbGV0IGkgPSAwXG4gIHdoaWxlIChpIDwgbCkge1xuICAgIHJbaV0gPSBvYmpba1tpXV1cbiAgICBpICs9IDFcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG9yXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIG9uZSBvciB0aGUgb3RoZXIgaXMgdHJ1ZVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gb3IgKHgsIHkpIHtcbiAgcmV0dXJuIHggfHwgeVxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnU2V0JylcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBzdHJpbmdDb25jYXRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcbiAgcmV0dXJuIFN0cmluZyhhKSArIFN0cmluZyhiKVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxuICovXG5pbXBvcnQgdG9BcnJheSBmcm9tICcuLi9hcnJheS90bydcbmltcG9ydCBub3QgZnJvbSAnLi4vbm90J1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRTdHJpbmcgKHN0cikgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xuICBsZXQgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKVxuXG4gIGFyZ3Muc2hpZnQoKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL3soXFxkKyl9L2csIChtYXRjaCwgaWR4KSA9PiB7XG4gICAgcmV0dXJuIG5vdChpcygnVW5kZWZpbmVkJywgYXJnc1tpZHhdKSkgPyBhcmdzW2lkeF0gOiBtYXRjaFxuICB9KVxufVxuIiwiLyoqXG5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnU3RyaW5nJylcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgc3RyaW5nIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9ICcnXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciArPSBjYihhLmNoYXJBdChpKSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHRydXRoeVxuICovXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cnV0aHkgKHgpIHtcbiAgcmV0dXJuICh4ICE9PSBmYWxzZSkgJiYgZXhpc3RzKHgpXG59O1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdHlwZVxuICovXG5pbXBvcnQgY3VycnkxIGZyb20gJy4vX3ByaXZhdGUvY3VycnkxJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeTEoZnVuY3Rpb24gdHlwZSAoeCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpLnNsaWNlKDgsIC0xKVxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDMvMDIvMjAxOVxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCd1bmRlZmluZWQnKVxuIiwiLyoqXG5cbiAqIHppcFxuICpcbiAqIEBmdW5jdGlvbiB6aXBcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgemlwV2l0aCBmcm9tICcuL3ppcFdpdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHppcCAoYSwgYikge1xuICByZXR1cm4gemlwV2l0aChmdW5jdGlvbiBfemlwV2l0aCAoeCwgeSkgeyByZXR1cm4gW3gsIHldIH0sIGEsIGIpXG59KVxuIiwiLyoqXG5cbiAqIHppcFdpdGhcbiAqXG4gKiAgQGZ1bmN0aW9uIHppcFdpdGhcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHppcFdpdGggKGNiLCBhLCBiKSB7XG4gIGNvbnN0IGFyciA9IFtdXG4gIGNvbnN0IGxlbiA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aClcbiAgbGV0IGkgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGFyci5wdXNoKGNiKGFbaV0sIGJbaV0pKVxuICB9XG4gIHJldHVybiBhcnJcbn0pXG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcbmltcG9ydCBtYXAgZnJvbSAnZnVuLmpzL3NyYy9tYXAnXG5pbXBvcnQgZm9sZCBmcm9tICdmdW4uanMvc3JjL2ZvbGQnXG5pbXBvcnQgZXF1YWxzIGZyb20gJ2Z1bi5qcy9zcmMvZXF1YWxzJ1xuaW1wb3J0IGNvbmNhdCBmcm9tICd1dGlsL2NvbmNhdCdcbmltcG9ydCBlbXB0eSBmcm9tICd1dGlsL2VtcHR5J1xuaW1wb3J0IGRvdCBmcm9tICd1dGlsL2RvdCdcbmltcG9ydCBpZGVudGl0eSBmcm9tICd1dGlsL2lkZW50aXR5J1xuaW1wb3J0IHRyYW5zcG9zZSBmcm9tICd1dGlsL3RyYW5zcG9zZSdcbmltcG9ydCBnZW5lcmF0ZSBmcm9tICd1dGlsL2dlbmVyYXRlJ1xuaW1wb3J0IGdwdW1hcCBmcm9tICd1dGlsL2dwdW1hcCdcbmltcG9ydCBncHVmb2xkIGZyb20gJ3V0aWwvZ3B1Zm9sZCdcbmltcG9ydCBncHVwcm9kdWN0IGZyb20gJ3V0aWwvZ3B1cHJvZHVjdCdcblxuLyoqXG4gKiBAY2xhc3MgTWF0cml4XG4gKiBAY2xhc3NkZXNjIE1hdHJpeCBhcHBsaWNhdGl2ZSBwcm92aWRpbmcgc3RhbmRhcmQgbWF0cml4IG9wZXJhdGlvbnNcbiAqIEBzdW1tYXJ5IFRoZSBNYXRyaXggY2xhc3Mgc2hvdWxkIG5vdCBiZSBpbnN0YW50aWF0ZWQgd2l0aCB0aGUgbmV3IGtleXdvcmQuIEluc3RlYWQgdXNlIHRoZSBNYXRyaXgub2Ygc3ludGF4IHRvIGNyZWF0ZSBhIG5ldyBNYXRyaXguIFVuZm9ydHVuYXRseSBqc2RvY3MgZG9lcyBub3QgYWxsb3cgZm9yIHRoZSBjb25zdHJ1Y3RvciB0byBiZSBoaWRkZW4uXG4gKiBAaGlkZWNvbnRydWN0b3JcbiAqIEBzZWUgb2ZcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqXG4gKi9cbmxldCBNYXRyaXggPSBmdW5jdGlvbiAodmFsKSB7XG4gIHRoaXMuX192YWx1ZSA9IHZhbFxuICAvLyBpZiAoR1BVSlMpIHtcbiAgLy8gICB0aGlzLmdwdWpzID0gR1BVSlMgfHwgbnVsbFxuICAvLyB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIG9mXG4gKiBAZGVzYyBDcmVhdGVzIGEgTWF0cml4IG9iamVjdCBhbmQgZmxhdHRlbnMgdGhlIE1hdHJpeFxuICogQHBhcmFtIHZhbCB7YXJyYXl8ZnVuY3Rpb259IEFuIGFycmF5IG9mIGFycmF5c1xuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqXG4gKi9cbk1hdHJpeC5vZiA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIE1hdHJpeCkgcmV0dXJuIHZhbFxuICBpZiAodGhpcyBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbFxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcmV0dXJuIG5ldyBNYXRyaXgodmFsKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlXG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICogbS50eXBlID09PSAnTWF0cml4J1xuICovXG5NYXRyaXgucHJvdG90eXBlLnR5cGUgPSAnTWF0cml4J1xuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwcmVjaXNpb25cbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKiBtLnByZWNpc2lvbiA9PT0gNFxuICovXG5NYXRyaXgucHJvdG90eXBlLnByZWNpc2lvbiA9IDRcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgc2V0UHJlY2lzaW9uXG4gKiBAcGFyYW0gcHJlY2lzaW9uIHtudW1iZXJ9IFNldCB0aGUgbnVtYmVyIG9mIGRlY2ltYWxzIGZvciByb3VuZGluZ1xuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICogbS5zZXRQcmVjaXNpb24oMTApXG4gKiBtLnByZWNpc2lvbiA9PT0gMTBcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zZXRQcmVjaXNpb24gPSBmdW5jdGlvbiAocHJlY2lzaW9uKSB7XG4gIHRoaXMucHJlY2lzaW9uID0gcHJlY2lzaW9uXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGlzU3ltbWV0cmljXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogdHJ1ZSA9PT0gQS5pc1N5bW1ldHJpYygpXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmlzU3ltbWV0cmljID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhID0gdGhpcy5fX3ZhbHVlXG4gIGNvbnN0IGIgPSBNYXRyaXgudHJhbnNwb3NlKHRoaXMpLl9fdmFsdWVcbiAgcmV0dXJuIGVxdWFscyhhLCBiKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBpc1NxdWFyZVxuICogQGRlc2MgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBjb250YWlucyBhIHNxdWFyZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiB0cnVlID09PSBBLmlzU3F1YXJlKClcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaXNTcXVhcmUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBlcXVhbHModGhpcy5nZXRDb2xzKCksIHRoaXMuZ2V0Um93cygpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBpc09ydGhvZ29uYWxcbiAqIEBwYXJhbSBNIHtNYXRyaXh8YXJyYXl9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gW1stMC4zMDkyLCAtMC45NTEwXSwgWy0wLjk1MTAsIDAuMzA5Ml1dXG4gKiBjb25zdCBBID0gTWF0cml4LmZyb21BcnJheShyZXN1bHQpXG4gKiB0cnVlICA9PT0gQS5pc09ydGhvZ29uYWwoKVxuICovXG5NYXRyaXgucHJvdG90eXBlLmlzT3J0aG9nb25hbCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgQXhBdCA9IHRoaXMuZG90KHRoaXMudHJhbnNwb3NlKCkpXG4gIGNvbnN0IEkgPSB0aGlzLmlkZW50aXR5KClcbiAgcmV0dXJuIGVxdWFscyhBeEF0LCBJKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBnZXRDb2xzXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiBBLmdldENvbHMoKSAgPT09IDJcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0Q29scyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZVswXS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZXF1YWxzXG4gKiBAcGFyYW0gTSB7TWF0cml4fGFycmF5fVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhID0gW1sxLCAxXSwgWzEsIDFdXVxuICogdmFyIEEgPSBNYXRyaXgub2YoYSlcbiAqIHZhciBCID0gTWF0cml4Lm9mKGEpXG4gKiB0cnVlICA9PT0gQS5lcXVhbHMoQilcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gZXF1YWxzKHRoaXMuX192YWx1ZSwgTS5fX3ZhbHVlIHx8IE0pXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGdldFJvd3NcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0Um93cygpICAvLyAyXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0Um93cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZ2V0U2hhcGVcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogQS5nZXRTaGFwZSgpICAvLyBbMiwgMl1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5nZXRTaGFwZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFt0aGlzLmdldFJvd3MoKSwgdGhpcy5nZXRDb2xzKCldXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIG1hcFxuICogQGRlc2NyaXB0aW9uIE1hcHMgb3ZlciB0aGUgcm93cyBvZiB0aGUgbWF0cml4IHVzaW5nIGEgbWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259IEFuIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiBtLm1hcCh4ID0+IHgubWFwKHkgPT4geSsgMSkpXG4gKiAvLyBbWzIsIDJdLCBbMiwgMl1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YobWFwKGYpKHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBmdW5jdGlvbiB0aGF0IG1hcHMgb3ZlciB0aGUgcm93cyBvZiB0aGUgbWF0cml4IHVzaW5nIGEgbWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259IEFuIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0gTSB7TWF0cml4fGFycmF5fSBNYXRyaXggb3IgYXJyYXkgdG8gbWFwXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gTWF0cml4Lm1hcCh4PSA+IHgubWFwKHkgPT4geSsgMSksIFtbMSwgMV0sIFsxLCAxXV0pXG4gKiAvLyBbWzIsIDJdLCBbMiwgMl1dXG4gKlxuICovXG5NYXRyaXgubWFwID0gY3VycnkoZnVuY3Rpb24gKGYsIE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5tYXAoZilcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZWR1Y2UgdGhlIG1hdHJpeCByb3dzIHVzaW5nIGEgcmVkdWNlIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259IEEgcmVkdWNlL2ZvbGQgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEZsYXR0ZW4gTWF0cml4XG4gKiBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSkuZm9sZCgocHJldiwgbmV4dCkgPT4gcHJldi5jb25jYXQobmV4dCkpXG4gKiAvLyBbMSwgMSwgMSwgMV1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5mb2xkID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihmb2xkKGYsIFtdKSh0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAZGVzY3JpcHRpb24gU3RhdGljIGZ1bmN0aW9uIHRvIHJlZHVjZSB0aGUgbWF0cml4IHJvd3MgdXNpbmcgYSByZWR1Y2UgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQSByZWR1Y2UvZm9sZCBmdW5jdGlvblxuICogQHBhcmFtIE0ge01hdHJpeH0gVGhlIE1hdHJpeCB0byByZWR1Y2VcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuXG4gKiAvLyBTdW0gb2YgYWxsIG1hdHJpeCB2YWx1ZXNcbiAqIGNvbnN0IHJlZHVjZXIgPSAocHJldiwgbmV4dCkgPT4gTnVtYmVyKHByZXYpICsgbmV4dC5yZWR1Y2UoKGFjYywgeCkgPT4gYWNjICsgeCwgMClcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXVxuICogTWF0cml4LmZvbGQocmVkdWNlciwgQSlcbiAqIC8vIDRcbiAqL1xuTWF0cml4LmZvbGQgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmZvbGQoZilcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGFwXG4gKiBAZGVzY3JpcHRpb24gQXBwbGllcyBhIE1hdHJpeCB0byBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0gTSB7TWF0cml4fVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZiA9IHggPT4geC5yZWR1Y2UoKHByZXYsIG5leHQpID0+IHByZXYgKyBuZXh0KVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDIsIDNdLCBbNCwgNSwgNl0sIFs3LCA4LCA5XV0pXG4gKiBNYXRyaXgub2YoZikuYXAoTSlcbiAqIC8vIFtbNl0sIFsxNV0sIFsyNF1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5hcCA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkubWFwKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gYXBcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWVzIGEgTWF0cml4IHRvIGEgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn1cbiAqIEBwYXJhbSBNIHtNYXRyaXh8YXJyYXl9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBmID0geCA9PiB4LnJlZHVjZSgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpXG4gKiBNYXRyaXguYXAoZiwgW1sxLCAyLCAzXSwgWzQsIDUsIDZdLCBbNywgOCwgOV1dKVxuICogLy8gW1s2XSwgWzE1XSwgWzI0XVxuICovXG5NYXRyaXguYXAgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKGYpLmFwKE0pXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBjb25jYXRcbiAqIEBkZXNjcmlwdGlvbiBDb25jYXRlbmF0ZXMgMiBNYXRyaWNlcyB1c2luZyBhIGZ1bmN0aW9uIGFzIG9wZXJhdG9yXG4gKiBAcGFyYW0gTSB7TWF0cml4fVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYSA9IFtbMCwgMSwgMV0sIFsyLCAzLCA0XV1cbiAqIGNvbnN0IGIgPSBbWzIsIDIsIDJdLCBbMywgMywgM11dXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKGEpXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKGIpXG4gKiBjb25zdCBNID0gQS5jb25jYXQoQilcbiAqIC8vIFtbMCwgMSwgMSwgMiwgMiwgMl0sIFsyLCAzLCA0LCAzLCAzLCAzXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKE0sIGYgPSBjb25jYXQpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tYXAoZihNKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQ29uY2F0ZW5hdGVzIDIgTWF0cmljZXMgdXNpbmcgYSBmdW5jdGlvbiBhcyBvcGVyYXRvclxuICogQHBhcmFtIEEge01hdHJpeH1cbiAqIEBwYXJhbSBCIHtNYXRyaXh9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1swLCAxLCAxXSwgWzIsIDMsIDRdXVxuICogY29uc3QgYiA9IFtbMiwgMiwgMl0sIFszLCAzLCAzXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqIGNvbnN0IE0gPSBNYXRyaXguY29uY2F0KEEsIEIpXG4gKiAvLyBbWzAsIDEsIDEsIDIsIDIsIDJdLCBbMiwgMywgNCwgMywgMywgM11dXG4gKlxuICovXG5NYXRyaXguY29uY2F0ID0gY3VycnkoZnVuY3Rpb24gKEEsIEIsIGYgPSBjb25jYXQpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5tYXAoZihCKSlcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGVtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJuIGFuIGVtcHR5IE1hdHJpeCBmcm9tIGFuIGV4aXN0aW5nIE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tYXAoZW1wdHkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIGVtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJuIGFuIGVtcHR5IE1hdHJpeCBmcm9tIGFuIGV4aXN0aW5nIE1hdHJpeFxuICogQHBhcmFtIHJvd3Mge251bWJlcn1cbiAqIEBwYXJhbSBjb2xzIHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXguZW1wdHkgPSBjdXJyeShmdW5jdGlvbiAocm93cyA9IDAsIGNvbHMgPSAwKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKSAvLyBBcnJheS5hcHBseShudWxsLCBBcnJheShyb3dzKSkubWFwKHggPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoY29scykpKVxuICByZXR1cm4gTWF0cml4Lm9mKG0pLm1hcChlbXB0eSlcbn0pXG5cbi8vICMjIyMgIyMjIyAjIyMjIC8vXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGlkZW50aXR5XG4gKiBAZGVzYyBSZXR1cm5zIGFuIGlkZW50aXR5IG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYSA9IFtbMSwgMiwgM10sIFs0LCA1LCA2XV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEFpZGVudGl0eSA9IEEuaWRlbnRpdHkoKVxuICogLy8gW1sxLCAwLCAwXSwgWzAsIDEsIDBdXVxuICpcbiovXG5NYXRyaXgucHJvdG90eXBlLmlkZW50aXR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKGlkZW50aXR5KS5hcCh0aGlzKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBpZGVudGl0eVxuICogQGRlc2MgUmV0dXJucyBhbiBpZGVudGl0eSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXguaWRlbnRpdHkoMywgMilcbiAqIC8vIFtbMSwgMCwgMF0sIFswLCAxLCAwXV1cbiAqXG4gKi9cbk1hdHJpeC5pZGVudGl0eSA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKSAvLyBBcnJheS5hcHBseShudWxsLCBBcnJheShyb3dzKSkubWFwKHggPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoY29scykpKVxuICByZXR1cm4gTWF0cml4Lm9mKGlkZW50aXR5KS5hcChtKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBjb21iaW5lXG4gKiBAc2VlIE1hdHJpeC5jb25jYXRcbiAqIEBwYXJhbSBNXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmNvbWJpbmUgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmNvbmNhdChNYXRyaXgub2YoTSksIGNvbmNhdClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gY29tYmluZVxuICogQHNlZSBNYXRyaXguY29uY2F0XG4gKiBAcGFyYW0gTVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LmNvbWJpbmUgPSBmdW5jdGlvbiAoQSwgQikge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLmNvbmNhdChNYXRyaXgub2YoQiksIGNvbmNhdClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZG90XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZG90IHByb2R1Y3QgYmV0d2VlbiAyIG1hdHJpY2VzXG4gKiBAcGFyYW0gTVxuICogQHBhcmFtIGZcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIENyZWF0ZSBtYXRyaXhcbiAqIGNvbnN0IG0gPSBNYXRyaXgub2YoW1sxLCAyXSwgWzMsIDRdXSlcbiAqXG4gKiAvLyBHZW5lcmF0ZSBpZGVudGl0eSBtYXRyaXhcbiAqIGNvbnN0IEkgID0gbS5pZGVudGl0eSgpIC8vIFtbMSwgMF0sIFswLCAxXV1cbiAqXG4gKiBpZihtLmRvdChJKS5lcXVhbHMobSkpIHtcbiAqICAgIGNvbnNvbGUubG9nKCdEb3QgcHJvZHVjdCB3aXRoIGlkZW50aXR5IG1hdHJpeCByZXR1cm5zIHRoZSBzYW1lIG1hdHJpeCcpXG4gKiB9XG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuY29uY2F0KE1hdHJpeC5vZihNKSwgZG90KHRoaXMucHJlY2lzaW9uKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gZG90XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZG90IHByb2R1Y3QgYmV0d2VlbiAyIG1hdHJpY2VzXG4gKiBAcGFyYW0gTVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKiBjb25zdCBhID0gW1sxLCAyLCAzXSwgWzQsIDUsIDZdXVxuICogY29uc3QgYiA9IFtbNywgOF0sIFs5LCAxMF0sIFsxMSwgMTJdXVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqXG4gKiBNYXRyaXguZG90KEEsIEIpIC8vIFtbNTgsIDY0XSwgWzEzOSwgMTU0XV1cbiAqXG4gKi9cbk1hdHJpeC5kb3QgPSBmdW5jdGlvbiAoQSwgQikge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLmRvdChNYXRyaXgub2YoQikpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGZpbGxcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggdGhlIHByb3ZpZGVkIG1hcCBmdW5jdGlvblxuICogQHBhcmFtIGZcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLDIsM10sIFszLDIsMV0sIFs0LDUsNl1dKS5maWxsKHggPT4gNDIpXG4gKiAvLyBbWzQyLDQyLDQyXSwgWzQyLDQyLDQyXSwgWzQyLDQyLDQyXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubWFwKG1hcCh4ID0+IGYoeCkpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciB6ZXJvc1xuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCB6ZXJvc1xuICogQHJldHVybnMge01hdHJpeH1cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLDIsM10sIFszLDIsMV0sIFs0LDUsNl1dKS56ZXJvcygpXG4gKiAvLyBbWzAsMCwwXSwgWzAsMCwwXSwgWzAsMCwwXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuemVyb3MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuZmlsbCh4ID0+IDApXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIHplcm9zXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHplcm9zXG4gKiBAcGFyYW0gcm93cyB7bnVtYmVyfSBEZWZpbmVzIHRoZSByb3dzIG9mIHRoZSBtYXRyaXhcbiAqIEBwYXJhbSBjb2xzIHtudW1iZXJ9IERlZmluZXMgdGhlIGNvbHVtbnMgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC56ZXJvcygzLCAzKVxuICogLy8gW1swLDAsMF0sIFswLDAsMF0sIFswLDAsMF1dXG4gKlxuICovXG5NYXRyaXguemVyb3MgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKHggPT4gMClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgb25lc1xuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCBvbmVzXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwyLDNdLCBbMywyLDFdLCBbNCw1LDZdXSkub25lcygpXG4gKiAvLyBbWzEsMSwxXSwgWzEsMSwxXSwgWzEsMSwxXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUub25lcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKHggPT4gMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gb25lc1xuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCBvbmVzXG4gKiBAcGFyYW0gcm93cyB7bnVtYmVyfSBEZWZpbmVzIHRoZSByb3dzIG9mIHRoZSBtYXRyaXhcbiAqIEBwYXJhbSBjb2xzIHtudW1iZXJ9IERlZmluZXMgdGhlIGNvbHVtbnMgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vbmVzKDEsIDEpXG4gKiAvLyBbWzEsMSwxXSwgWzEsMSwxXSwgWzEsMSwxXV1cbiAqXG4gKi9cbk1hdHJpeC5vbmVzID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpXG4gIHJldHVybiBNYXRyaXgub2YobSkuZmlsbCh4ID0+IDEpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIHJhbmRvbVxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCByYW5kb20gdmFsdWVzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZiA9IGUgPT4gTWF0aC5yYW5kb20oKSAqIDIgLSAxXVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbiAoZiA9IGUgPT4gTWF0aC5yYW5kb20oKSAqIDIgLSAxKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuZmlsbChmKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiByYW5kb21cbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggcmFuZG9tIG51bWJlcnNcbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gRnVuY3Rpb24gd2hpY2ggcmV0dXJucyByYW5kb20gdmFsdWVzLiBEZWZhdWx0IHJhbmRvbSB2YWx1ZXMgYXJlIGJldHdlZW4gLTEgYW5kIDFcbiAqIEBwYXJhbSByb3dzIHtudW1iZXJ9IERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIGNvbHMge251bWJlcn0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucmFuZG9tID0gZnVuY3Rpb24gKGYgPSBlID0+IChNYXRoLnJhbmRvbSgpICogMiAtIDEpLCByb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKVxuICByZXR1cm4gTWF0cml4Lm9mKG0pLmZpbGwoZilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgdG9BcnJheVxuICogQGRlc2MgUmV0dXJucyB0aGUgYXJyYXkgZnJvbSB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZS5tYXAocm93ID0+IHJvdy5tYXAoY29sID0+IGNvbCkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGNsb25lXG4gKiBAZGVzYyBSZXR1cm5zIGEgY2xvbmUgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5mcm9tQXJyYXkodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBmcm9tQXJyYXlcbiAqIEBkZXNjIFJldHVybnMgYSBNYXRyaXggZnJvbSBhbiBhcnJheVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5NYXRyaXguZnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gTWF0cml4Lm9mKG1hcChyb3cgPT4gbWFwKGNvbCA9PiBjb2wpKHJvdykpKGFycikpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIHRyYW5zcG9zZVxuICogQGRlc2MgUmV0dXJucyBhIHRyYW5zcG9zZWQgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFstMSwgMl0sIFszLCA0XSwgWy04LCAyXSlcbiAqIGNvbnN0IGIgPSBBLnRyYW5zcG9zZSgpLnRvQXJyYXkoKVxuICogLy8gcmV0dXJucyBbWy0xLCAzLC04XSwgWzIsIDQsIDJdXVxuICovXG5NYXRyaXgucHJvdG90eXBlLnRyYW5zcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihmb2xkKHRyYW5zcG9zZSwgW10sIHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIHRyYW5zcG9zZVxuICogQGRlc2MgUmV0dXJucyBhIHRyYW5zcG9zZWQgTWF0cml4XG4gKiBAcGFyYW0gTSB7TWF0cml4fGFycmF5fSBBIE1hdHJpeCBvciBhIG1hdHJpeCBhcnJheVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYSA9IFstMSwgMl0sIFszLCA0XSwgWy04LCAyXVxuICogY29uc3QgYiA9IE1hdHJpeC50cmFuc3Bvc2UoYSkudG9BcnJheSgpXG4gKiAvLyByZXR1cm5zIFtbLTEsIDMsLThdLCBbMiwgNCwgMl1dXG4gKi9cbk1hdHJpeC50cmFuc3Bvc2UgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLnRyYW5zcG9zZSgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIGFkZFxuICogQGluc3RhbmNlXG4gKiBAcGFyYW0gTSB7TWF0cml4fG51bWJlcn0gQWRkIGEgTWF0cml4IG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5hZGQoMSkgLy8gW1s2LCA1XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLmFkZChCKSAvLyBbWzEwLCAxMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChNKSB7XG4gIGlmIChNIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpICE9PSBNLmdldENvbHMoKSB8fCB0aGlzLmdldFJvd3MoKSAhPT0gTS5nZXRSb3dzKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3QgYWRkJylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKChyb3csIGlkeCkgPT4gbWFwKCh2YWwsIGpkeCkgPT4gdmFsICsgTS5fX3ZhbHVlW2lkeF1bamR4XSkocm93KSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tYXAobWFwKHggPT4geCArIE0pKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQG1lbWJlciBzdWJ0cmFjdFxuICogQGluc3RhbmNlXG4gKiBAcGFyYW0gTSB7TWF0cml4fG51bWJlcn0gU3VidHJhY3QgYSBNYXRyaXggb3IgYSBudW1iZXJcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLnN1YnRyYWN0KDEpIC8vIFtbNCwgMl1dXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKFtbNSwgNV1dKVxuICogQi5zdWJ0cmFjdChCKSAvLyBbWzAsIDBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uIChNKSB7XG4gIGlmIChNIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpICE9PSBNLmdldENvbHMoKSB8fCB0aGlzLmdldFJvd3MoKSAhPT0gTS5nZXRSb3dzKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3Qgc3VidHJhY3QnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAoKHJvdywgaWR4KSA9PiBtYXAoKHZhbCwgamR4KSA9PiB2YWwgLSBNLl9fdmFsdWVbaWR4XVtqZHhdKShyb3cpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm1hcChtYXAoeCA9PiB4IC0gTSkpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIG11bHRpcGx5XG4gKiBAaW5zdGFuY2VcbiAqIEBkZXNjIE11dGxpcGx5IGEgc2NhbGFyIG9yIGEgbXRyYWl4IHdpdGggYSBtYXRyaXguIFRocm93cyBhbiBlcnJvciBpZiB0aGUgbXVsdGlwbGljYXRpb24gaXMgbm90IHBvc3NpYmxlLlxuICogQHBhcmFtIE0ge01hdHJpeHxudW1iZXJ9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5tdWx0aXBseSgyKSAvLyBbWzEwLCA4XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLm11bHRpcGx5KEIpIC8vIFtbMjUsIDI1XV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICBjb25zb2xlLmxvZygnVXNlIHN0YXRpYyBtZXRob2QgXFwnZG90XFwnIHRvIGRvIG1hdHJpeCBtdWx0aXBsaWNhdGlvbicpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IGNyZWF0ZSBoYWRhbWFyZCBwcm9kdWN0JylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKChyb3csIGlkeCkgPT4gbWFwKChjb2wsIGpkeCkgPT4gY29sICogTS5fX3ZhbHVlW2lkeF1bamR4XSkocm93KSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tYXAobWFwKHggPT4geCAqIE0pKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQG1lbWJlciBhZGRpdGl2ZWludmVyc2VcbiAqIEBpbnN0YW5jZVxuICogQGRlc2MgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtYXRyaXggb2J0YWluZWQgYnkgY2hhbmdpbmcgdGhlIHNpZ24gb2YgZXZlcnkgbWF0cml4IGVsZW1lbnQuIFRoZSBhZGRpdGl2ZSBpbnZlcnNlIG9mIG1hdHJpeCBBIGlzIHdyaXR0ZW4g4oCTQS5cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LC01XSwgWy00LCA0XV0pXG4gKiBjb25zdCBtaW51c0EgPSBBLmFkZGl0aXZlaW52ZXJzZSgpXG4gKiAvLyBbWy01LCA1XSwgWzQsIC00XV1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5hZGRpdGl2ZWludmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubXVsdGlwbHkoLTEpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQG1lbWJlciBoYWRhbWFyZFxuICogQGluc3RhbmNlXG4gKiBAc2VlIG11bHRpcGx5XG4gKiBAcGFyYW0gTVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEuaGFkYW1hcmQoMikgLy8gW1sxMCwgOF1dXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKFtbNSwgNV1dKVxuICogQi5oYWRhbWFyZChCKSAvLyBbWzI1LCAyNV1dXG5cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5oYWRhbWFyZCA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubXVsdGlwbHkoTSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgbHVcbiAqIEBkZXNjIENhbGN1bGF0ZXMgTFUgZGVjb21wb3NpdGlvbiBvZiB0aGUgY3VycmVudCBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXhbXX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gW1szLCAtNywgLTIsIDJdLCBbLTMsIDUsIDEsIDBdLCBbNiwgLTQsIDAsIC01XSwgWy05LCA1LCAtNSwgMTJdXVxuICogY29uc3QgQSA9IE1hdHJpeC5mcm9tQXJyYXkocmVzdWx0KVxuICogY29uc3QgbHUgPSBBLmx1KClcbiAqIC8vIEwuX192YWx1ZSA9IFsgWyAxLCAwLCAwLCAwIF0sIFsgLTEsIDEsIDAsIDAgXSwgWyAyLCAtNSwgMSwgMCBdLCBbIC0zLCA4LCAzLCAxIF0gXVxuICogLy8gVS5fX3ZhbHVlID0gIFsgWyAzLCAtNywgLTIsIDIgXSwgWyAwLCAtMiwgLTEsIDIgXSwgWyAwLCAwLCAtMSwgMSBdLCBbIDAsIDAsIDAsIC0xIF0gXVxuICogTWF0cml4LmRvdChsdVswXSwgbHVbMV0pIC8vIHJldHVybnMgY2xvbmUgb2YgQVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5sdSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbiA9IHRoaXMuZ2V0Um93cygpXG4gIGNvbnN0IHRvbCA9IDFlLTZcbiAgY29uc3QgQSA9IHRoaXMuY2xvbmUoKVxuICBjb25zdCBMID0gdGhpcy56ZXJvcygpXG4gIGNvbnN0IFUgPSB0aGlzLnplcm9zKClcblxuICBmb3IgKGxldCBrID0gMDsgayA8IG47ICsraykge1xuICAgIGlmIChNYXRoLmFicyhBLl9fdmFsdWVba11ba10pIDwgdG9sKSB0aHJvdyBFcnJvcignQ2Fubm90IHByb2NlZWQgd2l0aG91dCBhIHJvdyBleGNoYW5nZScpXG4gICAgTC5fX3ZhbHVlW2tdW2tdID0gMVxuICAgIGZvciAobGV0IGkgPSBrICsgMTsgaSA8IG47ICsraSkge1xuICAgICAgTC5fX3ZhbHVlW2ldW2tdID0gQS5fX3ZhbHVlW2ldW2tdIC8gQS5fX3ZhbHVlW2tdW2tdXG4gICAgICBmb3IgKGxldCBqID0gayArIDE7IGogPCBuOyArK2opIHtcbiAgICAgICAgQS5fX3ZhbHVlW2ldW2pdID0gQS5fX3ZhbHVlW2ldW2pdIC0gTC5fX3ZhbHVlW2ldW2tdICogQS5fX3ZhbHVlW2tdW2pdXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGwgPSBrOyBsIDwgbjsgKytsKSB7XG4gICAgICBVLl9fdmFsdWVba11bbF0gPSBBLl9fdmFsdWVba11bbF1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtMLCBVXVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBycmVmXG4gKiBAcmV0dXJucyB7TWF0cml4fGFycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgQSA9IE1hdHJpeC5vZihbWy0xLCAxXSwgWy0xLCAwXSwgWzAsIC0xXSwgWy0xLCAtMl1dKVxuICogQS5ycmVmKCkgLy8gIFsgWyAxLCAwIF0sIFsgLTAsIDEgXSwgWyAwLCAwIF0sIFsgMCwgMCBdIF1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5ycmVmID0gZnVuY3Rpb24gKCkge1xuICBsZXQgbGVhZCA9IDBcbiAgY29uc3QgcmVzdWx0TWF0cml4ID0gdGhpcy5jbG9uZSgpXG5cbiAgZm9yIChsZXQgciA9IDA7IHIgPCB0aGlzLmdldFJvd3MoKTsgKytyKSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpIDw9IGxlYWQpIHtcbiAgICAgIHJldHVybiByZXN1bHRNYXRyaXhcbiAgICB9XG4gICAgbGV0IGkgPSByXG4gICAgd2hpbGUgKHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2xlYWRdID09PSAwKSB7XG4gICAgICArK2lcbiAgICAgIGlmICh0aGlzLmdldFJvd3MoKSA9PT0gaSkge1xuICAgICAgICBpID0gclxuICAgICAgICArK2xlYWRcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29scygpID09PSBsZWFkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdE1hdHJpeFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRtcCA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldXG4gICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV0gPSByZXN1bHRNYXRyaXguX192YWx1ZVtyXVxuICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdID0gdG1wXG5cbiAgICBsZXQgdmFsID0gcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bbGVhZF1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0Q29scygpOyArK2opIHtcbiAgICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdW2pdIC89IHZhbFxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRSb3dzKCk7ICsraSkge1xuICAgICAgaWYgKGkgPT09IHIpIGNvbnRpbnVlXG4gICAgICB2YWwgPSByZXN1bHRNYXRyaXguX192YWx1ZVtpXVtsZWFkXVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdldENvbHMoKTsgKytqKSB7XG4gICAgICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2pdIC09IHZhbCAqIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdW2pdXG4gICAgICB9XG4gICAgfVxuICAgIGxlYWQrK1xuICB9XG4gIHJldHVybiByZXN1bHRNYXRyaXhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgc29sdmVcbiAqIEBwYXJhbSBiXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIFNvbHZlIHhBID0gYlxuICogLy8gNXggKyB5ICA9IDdcbiAqIC8vIDN4IC0gNHkgPSAxOFxuICogLy8gU29sdXRpb24gZm9yIHggYW5kIHk6XG4gKiAvLyB4ID0gMlxuICogLy8geSA9IC0zXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDFdLCBbMywgLTRdXSlcbiAqIGNvbnN0IHNvbHZlQSA9IEEuc29sdmUoWzcsIDE4XSkgLy8gWzIsIC0zXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zb2x2ZSA9IGZ1bmN0aW9uIChiKSB7XG4gIGNvbnN0IEEgPSB0aGlzLmNsb25lKClcbiAgY29uc3QgTFUgPSBBLmx1KClcbiAgY29uc3QgTCA9IExVWzBdXG4gIGNvbnN0IFUgPSBMVVsxXVxuICBjb25zdCBuID0gdGhpcy5nZXRSb3dzKClcbiAgbGV0IHMgPSAwXG4gIGNvbnN0IGMgPSBbXVxuICBjb25zdCB4ID0gW11cblxuICBmb3IgKGxldCBrID0gMDsgayA8IG47ICsraykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgazsgKytqKSB7XG4gICAgICBzID0gcyArIEwuX192YWx1ZVtrXVtqXSAqIGNbal1cbiAgICB9XG4gICAgY1trXSA9IGJba10gLSBzXG4gICAgcyA9IDBcbiAgfVxuICBmb3IgKGxldCBhID0gbiAtIDE7IGEgPiAtMTsgLS1hKSB7XG4gICAgbGV0IHQgPSAwXG4gICAgZm9yIChsZXQgYiA9IGEgKyAxOyBiIDwgbjsgKytiKSB7XG4gICAgICB0ID0gdCArIFUuX192YWx1ZVthXVtiXSAqIHhbYl1cbiAgICB9XG4gICAgeFthXSA9IChjW2FdIC0gdCkgLyBVLl9fdmFsdWVbYV1bYV1cbiAgfVxuICByZXR1cm4geFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgaW52ZXJzZVxuICogQGluc3RhbmNlXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsyLCA0XV0pLmludmVyc2UoKVxuICogLy8gWyBbIDIsIC0wLjUgXSwgWyAtMSwgMC41IF0gXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pbnZlcnNlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBID0gdGhpcy5jbG9uZSgpXG4gIGNvbnN0IEkgPSBBLmlkZW50aXR5KClcbiAgY29uc3QgSW52ID0gQS5jb25jYXQoSSkucnJlZigpXG5cbiAgY29uc3QgcmVzdWx0ID0gSW52Ll9fdmFsdWUucmVkdWNlKChyZXN1bHQsIHgsIGlkeCkgPT4ge1xuICAgIGNvbnN0IGhhbGYgPSB4Lmxlbmd0aCAvIDJcbiAgICByZXN1bHQucHVzaCh4LnNsaWNlKGhhbGYsIHgubGVuZ3RoKSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIFtdKVxuICByZXR1cm4gTWF0cml4Lm9mKHJlc3VsdClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIHJhbmtcbiAqIEBpbnN0YW5jZVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5yYW5rID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBycmVmID0gdGhpcy5ycmVmKClcbiAgbGV0IHJlc3VsdCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBycmVmLmdldENvbHMoKTsgKytpKSB7XG4gICAgcmVzdWx0ICs9IHJyZWYuX192YWx1ZVtpXVtpXVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGRpbWVuc2lvblxuICogQGluc3RhbmNlXG4gKiBAc2VlIHJhbmtcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGltZW5zaW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yYW5rKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGRpYWdcbiAqIEBpbnN0YW5jZVxuICogQGRlc2MgUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4Lm9uZXMoMywgMykuZGlhZygpXG4gKiAvLyBbMSwgMSwgMV1cbiAqXG4gKiBjb25zdCBkaWFnMCA9IE1hdHJpeC56ZXJvcyg1LCA1KS5kaWFnKClcbiAqIC8vIFswLCAwLCAwLCAwLCAwXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kaWFnID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4LCBpZHgpID0+IHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdCh4W2lkeF0pXG4gIH0pKFtdKSh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIGRpYWdcbiAqIEBkZXNjIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHBhcmFtIE0ge01hdHJpeHxBcnJheX0gTWF0cml4IGZyb20gd2hpY2ggdG8gcmV0dXJuIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5kaWFnKFtbMiwgMV0sIFsxLCA1XV0pXG4gKiAvLyBbMiwgNV1cbiAqXG4gKi9cbk1hdHJpeC5kaWFnID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5kaWFnKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGRpYWdwcm9kdWN0XG4gKiBAaW5zdGFuY2VcbiAqIEBkZXNjIFJldHVybnMgdGhlIHByb2R1Y3Qgb2YgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4Lm9uZXMoMywgMykuZGlhZ3Byb2R1Y3QoKVxuICogLy8gMVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLmRpYWdwcm9kdWN0KClcbiAqIC8vIDBcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGlhZ3Byb2R1Y3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGlkeCkgPT4ge1xuICAgIGFjYyAqPSB4W2lkeF1cbiAgICByZXR1cm4gYWNjXG4gIH0pKDEpKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gZGlhZ3Byb2R1Y3RcbiAqIEBkZXNjIFJldHVybnMgdGhlIHByb2R1Y3Qgb2YgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEBwYXJhbSBNIHtNYXRyaXh8QXJyYXl9IE1hdHJpeCBmcm9tIHdoaWNoIHRvIHJldHVybiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LmRpYWdwcm9kdWN0KFtbMiwgMV0sIFsxLCA1XV0pXG4gKiAvLyAxMFxuICpcbiAqL1xuTWF0cml4LmRpYWdwcm9kdWN0ID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5kaWFncHJvZHVjdCgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQG1lbWJlciBzdW1cbiAqIEBpbnN0YW5jZVxuICogQGRlc2MgUmV0dXJucyB0aGUgc3VtIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIE1hdHJpeFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5zdW0oKVxuICogLy8gOVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLnN1bSgpXG4gKiAvLyAwXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnN1bSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZvbGQoKGFjYywgeCkgPT4ge1xuICAgIGFjYyArPSBmb2xkKChwcmV2LCBuZXh0KSA9PiBwcmV2ICsgbmV4dCkoMCkoeClcbiAgICByZXR1cm4gYWNjXG4gIH0pKDApKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gc3VtXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIHZhbHVlcyBpbiB0aGUgTWF0cml4XG4gKiBAcGFyYW0gTSB7TWF0cml4fEFycmF5fSBNYXRyaXggZnJvbSB3aGljaCB0byByZXR1cm4gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5zdW0oW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIDlcbiAqXG4gKi9cbk1hdHJpeC5zdW0gPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLnN1bSgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQG1lbWJlciBrcm9uZWNrZXJcbiAqIEBpbnN0YW5jZVxuICogQGRlc2MgVGhlIEtyb25lY2tlciBwcm9kdWN0IGlzIGFuIG9wZXJhdGlvbiBvbiB0d28gbWF0cmljZXMgb2YgYXJiaXRyYXJ5IHNpemUgcmVzdWx0aW5nIGluIGEgYmxvY2sgbWF0cml4LlxuICogQHBhcmFtIE0ge01hdHJpeH0gVGhlIHJpZ2h0IHNpZGUgTWF0cml4IG9mIHRoZSBwcm9kdWN0ICh0aGlzIOKKlyBNKVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5rcm9uZWNrZXIgPSBmdW5jdGlvbiAoTSkge1xuICBjb25zdCBtID0gdGhpcy5nZXRSb3dzKClcbiAgY29uc3QgbiA9IHRoaXMuZ2V0Q29scygpXG4gIGNvbnN0IHAgPSBNLmdldFJvd3MoKVxuICBjb25zdCBxID0gTS5nZXRDb2xzKClcblxuICBjb25zdCBsZWZ0ID0gdGhpcy5fX3ZhbHVlXG4gIGNvbnN0IHJpZ2h0ID0gTS5fX3ZhbHVlXG5cbiAgY29uc3QgZnJhbWUgPSBnZW5lcmF0ZShtICogcCwgbiAqIHEpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBwOyBrKyspIHtcbiAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBxOyBsKyspIHtcbiAgICAgICAgICBmcmFtZVtwICogaSArIGtdW3EgKiBqICsgbF0gPSBsZWZ0W2ldW2pdICogcmlnaHRba11bbF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNYXRyaXgub2YoZnJhbWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIGtyb25lY2tlclxuICogQGRlc2MgVGhlIEtyb25lY2tlciBwcm9kdWN0IGlzIGFuIG9wZXJhdGlvbiBvbiB0d28gbWF0cmljZXMgb2YgYXJiaXRyYXJ5IHNpemUgcmVzdWx0aW5nIGluIGEgYmxvY2sgbWF0cml4LlxuICogQHBhcmFtIEEge01hdHJpeH0gVGhlIGxlZnQgc2lkZSBNYXRyaXggb2YgdGhlIHByb2R1Y3QgKEEg4oqXIEIpXG4gKiBAcGFyYW0gQiB7TWF0cml4fSBUaGUgcmlnaHQgc2lkZSBNYXRyaXggb2YgdGhlIHByb2R1Y3QgKEEg4oqXIEIpXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgua3JvbmVja2VyID0gZnVuY3Rpb24gKEEsIEIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5rcm9uZWNrZXIoQilcbn1cblxuLy8qICoqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gR1BVIEZ1bmN0aW9uc1xuLy8qICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBncHVNYXBcbiAqIEBkZXNjcmlwdGlvbiBNYXBzIG92ZXIgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeCB1c2luZyBhIG1hcCBmdW5jdGlvbiB1c2luZyB0aGUgR1BVXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259IEFuIEdQVS5qcyBlbmFibGVkIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBncHVNYXBwZXIgKGEpIHsgcmV0dXJuIGFbdGhpcy50aHJlYWQueV1bdGhpcy50aHJlYWQueF0gfVxuICogY29uc3QgbSA9IE1hdHJpeC5vZihbWzIsIDJdLCBbMiwgMl1dLCBHUFVKUylcbiAqIG0uZ3B1TWFwKGdwdU1hcHBlcilcbiAqIC8vIFtGbG9hdDMyQXJyYXkoMiwyKSwgRmxvYXQzMkFycmF5KDIsMildXG4gKlxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5ncHVNYXAgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gTWF0cml4Lm9mKGdwdW1hcCh0aGlzLmdwdWpzLCBmLCB0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBncHVNYXBcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgZnVuY3Rpb24gdGhhdCBtYXBzIG92ZXIgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeCB1c2luZyBhIG1hcCBmdW5jdGlvbiB1c2luZyB0aGUgR1BVXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259IEFuIEdQVS5qcyBlbmFibGVkIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0gTSB7TWF0cml4fGFycmF5fSBNYXRyaXggb3IgYXJyYXkgdG8gbWFwXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBncHVNYXBwZXIgKGEpIHsgcmV0dXJuIGFbdGhpcy50aHJlYWQueV1bdGhpcy50aHJlYWQueF0gfVxuICogY29uc3QgbSA9IE1hdHJpeC5ncHVNYXAoR1BVSlMsIGdwdU1hcHBlciwgW1syLCAyXSwgWzIsIDJdXSlcbiAqIC8vIFtGbG9hdDMyQXJyYXkoMiwyKSwgRmxvYXQzMkFycmF5KDIsMildXG4gKlxuICovXG5NYXRyaXguZ3B1TWFwID0gY3VycnkoZnVuY3Rpb24gKGdwdSwgZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0sIGdwdSkuZ3B1TWFwKGYpXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBncHVGb2xkXG4gKiBAZGVzY3JpcHRpb24gRm9sZHMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeCB1c2luZyBhIEdQVVMuanMgZW5xYmxlZCByZWR1Y2UgZnVuY3Rpb24sIHVzaW5nIHRoZSBHUFVcbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIG0ubWFwKHggPT4geC5tYXAoeSA9PiB5KyAxKSlcbiAqIC8vIFtbMiwgMl0sIFsyLCAyXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ3B1Rm9sZCA9IGZ1bmN0aW9uIChmLCBvdXRwdXQpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihncHVmb2xkKHRoaXMuZ3B1anMsIGYsIG91dHB1dCwgdGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2dwdVByb2R1Y3RcbiAqIEBwYXJhbSBmXG4gKiBAcGFyYW0gb3V0cHV0XG4gKiBAcGFyYW0gTVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5ncHVQcm9kdWN0ID0gZnVuY3Rpb24gKGYsIG91dHB1dCwgTSkge1xuICAvLyAoZ3B1LCBmLCBvdXRwdXQsIGEsIGIsIGNvbnN0YW50cyA9IHt9XG4gIHJldHVybiBNYXRyaXgub2YoZ3B1cHJvZHVjdCh0aGlzLmdwdWpzLCBmLCBvdXRwdXQsIHRoaXMuX192YWx1ZSwgTS5fX3ZhbHVlKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4XG4iLCJpbXBvcnQgeyBjb25jYXQsIGN1cnJ5IH0gZnJvbSAnZnVuLmpzJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBjb25jYXRcbiAqIEBwYXJhbSBNIHtNYXRyaXh9XG4gKiBAcGFyYW0gbSB7QXJyYXl9XG4gKiBAcGFyYW0gaWR4IHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIChNLCBtLCBpZHgpIHtcbiAgcmV0dXJuIGNvbmNhdChtLCBNLl9fdmFsdWVbaWR4XSlcbn0pXG4iLCJpbXBvcnQgeyBmb2xkLCBtYXAsIGN1cnJ5IH0gZnJvbSAnZnVuLmpzJ1xuaW1wb3J0IHJvdW5kIGZyb20gJy4vcm91bmQnXG5cbi8qKlxuICogQGZ1bmN0aW9uIGRvdFxuICogQHBhcmFtIEIge01hdHJpeH1cbiAqIEBwYXJhbSBhIHtBcnJheX1cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoKGRlY2ltYWxzLCBCLCBhKSA9PiBtYXAoKGl0ZW0sIGkpID0+IHtcbiAgcmV0dXJuIGZvbGQoKGFjYywgeCwgaikgPT4ge1xuICAgIGFjYyArPSByb3VuZCh4ICogQi5fX3ZhbHVlW2pdW2ldLCBkZWNpbWFscylcbiAgICByZXR1cm4gYWNjXG4gIH0sIDApKGEpXG59KShCLl9fdmFsdWVbMF0pKVxuIiwiaW1wb3J0IHsgY3VycnkgfSBmcm9tICdmdW4uanMnXG5leHBvcnQgZGVmYXVsdCBjdXJyeShtID0+IFtdKVxuIiwiaW1wb3J0IHsgbWFwIH0gZnJvbSAnZnVuLmpzJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBnZW5lcmF0ZVxuICogQGRlc2MgR2VuZXJhdG9yIGZ1bmN0aW9uIGZvciBhIG1hdHJpeCBhcnJheSwgdmFsdWVzIGFyZSBzZXQgdG8gdW5kZWZpbmVkXG4gKiBAcGFyYW0gcm93cyB7bnVtYmVyfVxuICogQHBhcmFtIGNvbHMge251bWJlcn1cbiAqIEByZXR1cm5zIHthbnlbXVtdfVxuICovXG5leHBvcnQgZGVmYXVsdCAocm93cywgY29scyA9IHVuZGVmaW5lZCwgdmFsdWUgPSAwKSA9PiB7XG4gIGNvbnN0IF9jb2xzID0gY29scyB8fCByb3dzXG4gIGNvbnN0IHkgPSBtYXAoeiA9PiB2YWx1ZSkobmV3IEFycmF5KF9jb2xzKSlcbiAgcmV0dXJuIG1hcCh6ID0+IHkpKG5ldyBBcnJheShyb3dzKSlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdwdWZvbGQgKGdwdSwgZiwgb3V0cHV0LCBtYXRyaXgsIGNvbnN0YW50cyA9IHt9KSB7XG4gIHJldHVybiBncHVcbiAgICAuY3JlYXRlS2VybmVsKGYsIHsgY29uc3RhbnRzOiBPYmplY3QuYXNzaWduKHt9LCB7IG06IG1hdHJpeC5sZW5ndGgsIG46IG1hdHJpeFswXS5sZW5ndGggfSwgY29uc3RhbnRzKSB9KVxuICAgIC5zZXRPdXRwdXQob3V0cHV0KShtYXRyaXgpXG59XG4iLCIvLyBpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ3B1bWFwIChncHUsIGYsIG1hdHJpeCkge1xuICByZXR1cm4gZ3B1LmNyZWF0ZUtlcm5lbChmKS5zZXRPdXRwdXQoW21hdHJpeC5sZW5ndGgsIG1hdHJpeFswXS5sZW5ndGhdKShtYXRyaXgpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBncHVwcm9kdWN0IChncHUsIGYsIG91dHB1dCwgYSwgYiwgY29uc3RhbnRzID0ge30pIHtcbiAgcmV0dXJuIGdwdVxuICAgIC5jcmVhdGVLZXJuZWwoZiwgeyBjb25zdGFudHM6IE9iamVjdC5hc3NpZ24oe30sIHsgbTogYi5sZW5ndGgsIG46IGFbMF0ubGVuZ3RoIH0sIGNvbnN0YW50cykgfSlcbiAgICAuc2V0T3V0cHV0KG91dHB1dCkoYSwgYilcbn1cbiIsImltcG9ydCB7IG1hcCB9IGZyb20gJ2Z1bi5qcydcblxuLyoqXG4gKiBAZnVuY3Rpb24gaWRlbnRpdHlcbiAqIEBkZXNjIENyZWF0ZXMgYW4gaWRlbnRpeSBtYXRyaXggZnJvbSBhbiBlbXB0eSBhcnJheVxuICogQHBhcmFtIG0ge0FycmF5fVxuICogQHBhcmFtIGlkeCB7bnVtYmVyfVxuICogQHJldHVybiB7TWF0cml4fVxuICovXG5leHBvcnQgZGVmYXVsdCAobSwgaWR4KSA9PiBtYXAoKHJvd3MsIGpkeCkgPT4gKGlkeCA9PT0gamR4KSAqIDEpKG0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiByb3VuZFxuICogQHBhcmFtIHZhbHVlIHtudW1iZXJ9XG4gKiBAcGFyYW0gZGVjaW1hbHMge251bWJlcn1cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdW5kICh2YWx1ZSwgZGVjaW1hbHMpIHtcbiAgcmV0dXJuIE51bWJlcihNYXRoLnJvdW5kKHZhbHVlICsgJ2UnICsgZGVjaW1hbHMpICsgJ2UtJyArIGRlY2ltYWxzKVxufVxuIiwiaW1wb3J0IHsgbWFwLCBjdXJyeSB9IGZyb20gJ2Z1bi5qcydcblxuLyoqXG4gKiBAZnVuY3Rpb24gdHJhbnNwb3NlXG4gKiBAZGVzYyBUcmFuc3Bvc2VzIGEgYXJyYXkgb2YgYXJyYXlzIHVzaW5nIHRoZSBNYXRyaXgubWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0gbSB7QXJyYXl9XG4gKiBAcGFyYW0gaWR4IHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtNYXRyaXh9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChwcmV2LCBuZXh0KSA9PiBtYXAoKGl0ZW0sIGkpID0+IChwcmV2W2ldIHx8IFtdKS5jb25jYXQobmV4dFtpXSkpKG5leHQpKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==