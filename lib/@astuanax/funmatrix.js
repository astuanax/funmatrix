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
var Matrix = function Matrix(val, GPUJS) {
  this.__value = val;

  if (GPUJS) {
    this.gpujs = GPUJS ? new GPUJS() : null;
  }
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
  var GPUJS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (val instanceof Matrix) return val;

  if (this instanceof Matrix) {
    this.__value = val;
    this.gpujs = GPUJS;
    return this;
  }

  return new Matrix(val, GPUJS);
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
 * @property {Object} gpu
 * @type {Object}
 */

Matrix.prototype.gpu = {};
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

Matrix.prototype.gpuProduct = function (f, output, M) {
  return Matrix.of((0, _gpuproduct.default)(this.gpujs, f, output, this.__value, M));
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
exports.default = gpudot;

function gpudot(gpu, f, output, a, b) {
  var constants = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  return gpu.createKernel(f, {
    constants: Object.assign({}, {
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9fcHJpdmF0ZS9jdXJyeTEuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FkZEluZGV4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hZGp1c3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FkanVzdFdpdGguanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FsbC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYWxsUGFzcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYWx3YXlzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hbmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FueS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYW55UGFzcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FwZXJ0dXJlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcHBlbmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FwcGx5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvZmlsdGVyLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9mb2xkLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS90by5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvdW5pb24uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYmluZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYm9vbGVhbi9GLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9ib29sZWFuL1QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2Jvb2xlYW4vYm90aC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYm9vbGVhbi9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY2FsbC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY29tcGxlbWVudC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9jb25kLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9jdXJyeS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS9kaWZmRGF0ZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS9pc0Z1dHVyZURhdGUuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2RhdGUvaXNWYWxpZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS90b0RheS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS90b0hvdXIuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2RhdGUvdG9NaW51dGVzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9kYXRlL3RvU2Vjb25kcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGVmYXVsdFRvLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9lbXB0eS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZXF1YWxzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9leGlzdHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZmluZEluZGV4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9maXJzdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZmxhdE1hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaWRlbnRpY2FsLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pc0VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pdGVyYXRvci9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9rZXlzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9sYXN0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9saWZ0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbWFwL2tleXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21heC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbW9uYWRzL0p1c3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21vbmFkcy9NYXliZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbW9uYWRzL05vdGhpbmcuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL25vdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVsbC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2FkZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2RpdmlkZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9udW1iZXIvaXNOYW4uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL251bWJlci9tdWx0aXBseS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL3N1bS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9oYXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9oYXNJbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2tleXNJbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L21lcmdlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3Qvb21pdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L3BhdGguanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9waWNrLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3QvcHJvcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb3IuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3NldC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL2Zvcm1hdFN0cmluZy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9zdHJpbmcvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy90cnV0aHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3R5cGUuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3VuZGVmaW5lZC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvemlwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy96aXBXaXRoLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvbWF0cml4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2RvdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2dlbmVyYXRlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9ncHVmb2xkLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9ncHVtYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2dwdXByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1hdHJpeC8uL3NyYy91dGlsL2lkZW50aXR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tYXRyaXgvLi9zcmMvdXRpbC9yb3VuZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWF0cml4Ly4vc3JjL3V0aWwvdHJhbnNwb3NlLmpzIl0sIm5hbWVzIjpbIk1hdHJpeCIsInZhbCIsIkdQVUpTIiwiX192YWx1ZSIsImdwdWpzIiwib2YiLCJwcm90b3R5cGUiLCJ0eXBlIiwiZ3B1IiwicHJlY2lzaW9uIiwic2V0UHJlY2lzaW9uIiwiaXNTeW1tZXRyaWMiLCJhIiwiYiIsInRyYW5zcG9zZSIsImlzU3F1YXJlIiwiZ2V0Q29scyIsImdldFJvd3MiLCJpc09ydGhvZ29uYWwiLCJBeEF0IiwiZG90IiwiSSIsImlkZW50aXR5IiwibGVuZ3RoIiwiZXF1YWxzIiwiTSIsImdldFNoYXBlIiwibWFwIiwiZiIsImZvbGQiLCJhcCIsImNvbmNhdCIsIkEiLCJCIiwiZW1wdHkiLCJyb3dzIiwiY29scyIsIm0iLCJjb21iaW5lIiwiZmlsbCIsIngiLCJ6ZXJvcyIsIm9uZXMiLCJyYW5kb20iLCJlIiwiTWF0aCIsInRvQXJyYXkiLCJyb3ciLCJjb2wiLCJjbG9uZSIsImZyb21BcnJheSIsImFyciIsImFkZCIsIkVycm9yIiwiaWR4IiwiamR4Iiwic3VidHJhY3QiLCJtdWx0aXBseSIsImNvbnNvbGUiLCJsb2ciLCJhZGRpdGl2ZWludmVyc2UiLCJoYWRhbWFyZCIsImx1IiwibiIsInRvbCIsIkwiLCJVIiwiayIsImFicyIsImkiLCJqIiwibCIsInJyZWYiLCJsZWFkIiwicmVzdWx0TWF0cml4IiwiciIsInRtcCIsInNvbHZlIiwiTFUiLCJzIiwiYyIsInQiLCJpbnZlcnNlIiwiSW52IiwicmVzdWx0IiwicmVkdWNlIiwiaGFsZiIsInB1c2giLCJzbGljZSIsInJhbmsiLCJkaW1lbnNpb24iLCJkaWFnIiwiYWNjIiwiZGlhZ3Byb2R1Y3QiLCJzdW0iLCJwcmV2IiwibmV4dCIsImtyb25lY2tlciIsInAiLCJxIiwibGVmdCIsInJpZ2h0IiwiZnJhbWUiLCJncHVNYXAiLCJncHVGb2xkIiwib3V0cHV0IiwiZ3B1UHJvZHVjdCIsImRlY2ltYWxzIiwiaXRlbSIsInVuZGVmaW5lZCIsInZhbHVlIiwiX2NvbHMiLCJ5IiwieiIsIkFycmF5IiwiZ3B1Zm9sZCIsIm1hdHJpeCIsImNvbnN0YW50cyIsImNyZWF0ZUtlcm5lbCIsIk9iamVjdCIsImFzc2lnbiIsInNldE91dHB1dCIsImdwdW1hcCIsImdwdWRvdCIsInJvdW5kIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE1BQU07QUFDakI7QUFDQTtBQUMyQjs7QUFFWixxSEFBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbkJGO0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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VyxvQkFBb0I7QUFDL0IsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyx3QkFBd0I7QUFDbkMsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyx3QkFBd0I7QUFDbkMsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxpQ0FBaUM7QUFDNUMsV0FBVyxxQ0FBcUM7QUFDaEQsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxzQkFBc0I7QUFDakMsV0FBVywyQkFBMkI7QUFDdEMsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyxpQkFBaUI7QUFDNUIsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxtQkFBbUI7QUFDOUIsV0FB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Q0FGakIsQ0FBUDtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKRDs7QUFFQTs7Ozs7OztlQU9lLGtCQUFDd0IsQ0FBRCxFQUFJaUIsR0FBSjtBQUFBLFNBQVksY0FBSSxVQUFDbkIsSUFBRCxFQUFPb0IsR0FBUDtBQUFBLFdBQWUsQ0FBQ0QsR0FBRyxLQUFLQyxHQUFULElBQWdCLENBQS9CO0FBQUEsR0FBSixFQUFzQ2xCLENBQXRDLENBQVo7QUFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVGY7Ozs7OztBQU1lLFNBQVN1RixLQUFULENBQWdCZCxLQUFoQixFQUF1QkgsUUFBdkIsRUFBaUM7QUFDOUMsU0FBT2tCLE1BQU0sQ0FBQ2hGLElBQUksQ0FBQytFLEtBQUwsQ0FBV2QsS0FBSyxHQUFHLEdBQVIsR0FBY0gsUUFBekIsSUFBcUMsSUFBckMsR0FBNENBLFFBQTdDLENBQWI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkQ7O0FBRUE7Ozs7Ozs7ZUFPZSxnQkFBTSxVQUFDWixJQUFELEVBQU9DLElBQVA7QUFBQSxTQUFnQixjQUFJLFVBQUNZLElBQUQsRUFBT3ZDLENBQVA7QUFBQSxXQUFhLENBQUMwQixJQUFJLENBQUMxQixDQUFELENBQUosSUFBVyxFQUFaLEVBQWdCdEMsTUFBaEIsQ0FBdUJpRSxJQUFJLENBQUMzQixDQUFELENBQTNCLENBQWI7QUFBQSxHQUFKLEVBQWtEMkIsSUFBbEQsQ0FBaEI7QUFBQSxDQUFOLEMiLCJmaWxlIjoiQGFzdHVhbmF4L2Z1bm1hdHJpeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGFzdHVhbmF4L2Z1bm1hdHJpeFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAYXN0dWFuYXgvZnVubWF0cml4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBhc3R1YW5heC9mdW5tYXRyaXhcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWF0cml4LmpzXCIpO1xuIiwiLyoqXG4gKiBSZXR1cm5zIGEgY3VycmllZCBmdW5jdGlvbiB3aXRoIGFyaXR5IDFcbiAqIEBmdW5jdGlvbiBjdXJyeTFcbiAqIEBwcml2YXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJ5MSAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQgKGEpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMFxuICAgICAgPyB0aGlzXG4gICAgICA6IGZuKGEpXG4gIH1cbn1cbiIsIi8qKlxuICogQGZ1bmN0aW9uIGFkZEluZGV4XG4gKiBAc3VtbWFyeSBBZGRzIGEgc3BlY2lmaWVkIGluZGV4IHRvIGl0ZXJhdGUgYSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gVGhlIGFkZEluZGV4IGZ1bmN0aW9uIGlzIG5vdG5lY2Vzc2FyeSBmb3IgdGhlIG1hcCBmdW5jdGlvbnMgaW4gdGhlIGZ1bi5qcyBsaWJyYXJ5IGFzIHRoZXkgYmVoYXZlIHRoZSBzYSxlIGFzIHRoZSBuYXRpdmUgamF2YXNjcmlwdCBmdW5jdGlvbnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGYgSXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGcgRnVuY3Rpb24gdG8gd2hpY2ggdG8gYWRkIHRoZSBpbmRleFxuICogQHBhcmFtIHtBcnJheX0gYSBUaGUgYXJyYXkgb24gd2hpY2ggdG8gd29ya1xuICogQHNpbmNlIDEuMC4yXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhZGRJbmRleCAoZiwgZywgYSkge1xuICBsZXQgaSA9IDBcbiAgcmV0dXJuIGYoXG4gICAgZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiBnKHYsIGkrKylcbiAgICB9LFxuICAgIGFcbiAgKVxufSlcbiIsIi8qKlxuICogTW9kaWZpZXMgYW4gaXRlbSBpbiBhbiBhcnJheSB1c2luZyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb24gYWRqdXN0XG4gKiBAZGVzY3JpcHRpb24gTW9kaWZpZXMgYW4gaXRlbSBpbiBhbiBhcnJheSB1c2luZyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGEgLT4gYSkgLT4gbnVtIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gdG8gbW9kaWZ5IHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBpIC0gVGhlIGluZGV4IGF0IHdoaWNoIHRvIG1vZGlmeSB0aGUgYXJyYXksIGFjY2VwdHMgcG9zdGl0aXZlIGFuZCBuZWdhdGl2ZSBpbmRleGVzXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBbYV0gLSBBcnJheSB3aXRoIGRhdGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfSBbYV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhZGp1c3QgKGZuLCBpLCBhKSB7XG4gIGNvbnN0IHIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhKVxuICBjb25zdCBpZHggPSBpIDwgMCA/IHIubGVuZ3RoICsgaSA6IGlcbiAgaWYgKCFhW2lkeF0pIHJldHVybiByXG4gIHJbaWR4XSA9IGZuKHJbaWR4XSlcbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIGFkanVzdFdpdGhcbiAqIEBkZXNjcmlwdGlvbiBNb2RpZmllcyBhbiBpdGVtIGluIGFuIGFycmF5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoYSAtPiBhKSAtPiAoKGEgLT4gW2FdKSAtPiBbYV0gLT4gbnVtKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIHRvIG1vZGlmeSB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIC0gVGhlIHByZWRpY2F0ZSB0aGF0IHJldHVybnMgdGhlIGluZGV4ZXMgaWYgZm91bmRcbiAqIEBwYXJhbSB7SXRlcmFibGV9IFthXVxuICogQHJldHVybiB7SXRlcmFibGV9IFthXVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhZGp1c3RXaXRoIChmbiwgcHJlZCwgYSkge1xuICBjb25zdCBfZm4gPSB4ID0+IHtcbiAgICBpZiAocHJlZCh4KSkge1xuICAgICAgcmV0dXJuIGZuKHgpXG4gICAgfVxuICAgIHJldHVybiB4XG4gIH1cbiAgcmV0dXJuIG1hcChfZm4sIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEpKVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKlxuICogQGZ1bmN0aW9uIGFsbFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWxsIChjYiwgYSkge1xuICBsZXQgcmVzID0gdHJ1ZVxuICBmb3IgKGxldCBpIGluIGEpIHtcbiAgICBpZiAoIWNiKGFbaV0pKSB7XG4gICAgICByZXMgPSBmYWxzZVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufSlcbiIsIi8qKlxuICogQXBwbGllcyBhIGxpc3Qgb2YgcHJlZGljYXRlcyB0byB0aGUgZGF0YSBhbmQgcmV0dXJucyB0cnVlIGlmIGFsbCBwYXNzXG4gKlxuICogQGZ1bmN0aW9uIGFsbFBhc3NcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWVzIGEgbGlzdCBvZiBwcmVkaWNhdGVzIHRvIHRoZSBkYXRhIGFuZCByZXR1cm5zIHRydWUgaWYgYWxsIHBhc3NcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgWygqLi4uIC0+IEJvb2xlYW4pXSAtPiAoKi4uLiAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0FycmF5fSBwcmVkaWNhdGVzIEFuIGFycmF5IG9mIHByZWRpY2F0ZXMgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY29tYmluZWQgcHJlZGljYXRlXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWxsUGFzcyAoY2JzLCBhKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2JzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFjYnNbaV0oYSkpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBwcm92aWRlZFxuICpcbiAqIEBmdW5jdGlvbiBhbHdheXNcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBwcm92aWRlZFxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+ICgqIC0+IGEpXG4gKiBAcGFyYW0geyp9IGFcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFsd2F5cyAoeCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4geCB9XG59KVxuIiwiLyoqXG4gKiBDaGVja3MgaWYgYm90aCBwcmVkaWNhdGVzIGFyZSB0cnVlXG4gKlxuICogQGZ1bmN0aW9uIGFuZFxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiBib3RoIHByZWRpY2F0ZXMgYXJlIHRydWVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKHgsIHkpIC0+IGJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0geCAtIEEgcHJlZGljYXRlXG4gKiBAcGFyYW0geyp9IHkgLSBBIHByZWRpY2F0ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbmQgKHgsIHkpIHtcbiAgcmV0dXJuIHggJiYgeVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uIG9mIHRoZSBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKlxuICogQGZ1bmN0aW9uIGFueVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbiBvZiB0aGUgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoVE9ETylcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFueSAoY2IsIGEpIHtcbiAgbGV0IHJlcyA9IGZhbHNlXG4gIGZvciAobGV0IGkgaW4gYSkge1xuICAgIGlmIChjYihhW2ldKSkge1xuICAgICAgcmVzID0gdHJ1ZVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufSlcbiIsIi8qKlxuICogQXBwbGllcyBhIGxpc3Qgb2YgcHJlZGljYXRlcyB0byB0aGUgZGF0YSBhbmQgcmV0dXJucyB0cnVlIGlmIG9uZSBwYXNzZXNcbiAqXG4gKiBAZnVuY3Rpb24gYW55UGFzc1xuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBbKCouLi4gLT4gQm9vbGVhbildIC0+ICgqLi4uKSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0FycmF5fSBwcmVkaWNhdGVzIEFuIGFycmF5IG9mIHByZWRpY2F0ZXMgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY29tYmluZWQgcHJlZGljYXRlXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYW55UGFzcyAoY2JzLCBhKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2JzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNic1tpXShhKSkgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn0pXG4iLCIvKipcbiAqIEFwcGxpZXMgYSBsaXN0IG9mIGZ1bmN0aW9ucyB0byBhIGxpc3Qgb2YgdmFsdWVzIGFuZCByZXR1cm5zIGEgY29tYmluZWQgcmVzdWx0IGFycmF5XG4gKlxuICogQGZ1bmN0aW9uIGFwXG4gKiBAZGVzY3JpcHRpb24gQXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIHJldHVybnMgYSBjb21iaW5lZCByZXN1bHQgYXJyYXlcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgQHNpZyBbYSAtPiBiXSAtPiBbYV0gLT4gW2JdXG4gKiBAcGFyYW0geyhGdW5jdGlvbltdfEZ1bmN0aW9ufEFwcGxpY2F0aXZlKX0gZm5zIC0gQW4gYXJyYXkgb2YgZnVuY3Rpb25zIG9yIGEgZnVuY3Rpb24gb3IgYW4gYXBwbGljYXRpdmVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHMgLSBBbiBhcnJheSBvZiB2YWx1ZXNcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfSBbYV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcbmltcG9ydCBpcyBmcm9tICcuL2lzJ1xuaW1wb3J0IGZvbGQgZnJvbSAnLi9hcnJheS9mb2xkJ1xuaW1wb3J0IG1hcCBmcm9tICcuL2FycmF5L21hcCdcblxuY29uc3QgaXNGdW5jdGlvbiA9IGlzKCdGdW5jdGlvbicpXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFwIChmbnMsIHZhbHMpIHtcbiAgaWYgKGlzRnVuY3Rpb24oZm5zLmFwKSkge1xuICAgIHJldHVybiBmbnMuYXAodmFscylcbiAgfVxuICBpZiAoaXNGdW5jdGlvbihmbnMpKSB7XG4gICAgcmV0dXJuIHggPT4gZm5zKHgpKHZhbHMoeCkpXG4gIH1cbiAgcmV0dXJuIGZvbGQoKGFjYywgZikgPT4gYWNjLmNvbmNhdChtYXAoY3VycnkxKGYpLCB2YWxzKSksIFtdLCBmbnMpXG59KVxuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBhcGVydHVyZVxuICogQHBhcmFtIG5cbiAqIEBwYXJhbSBhcnJcbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhcGVydHVyZSAobiwgYSkge1xuICBpZiAoYS5sZW5ndGggPCBuKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgY29uc3QgcmVzID0gQXJyYXkoYS5sZW5ndGggLSBuICsgMSlcbiAgcmV0dXJuIG1hcCgoaXRlbSwgaWR4KSA9PiBhLnNsaWNlKGlkeCwgaWR4ICsgbiksIHJlcylcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBhcHBlbmRcbiAqIEBkZXNjcmlwdGlvbiBBcHBlbmQgYW4gZWxtZW50IHRvIGEgbGlzdFxuICogQHBhcmFtIHsqfSBlbCAtIEVsZW1lbnQgdG8gYWRkIHRvIGEgbGlzdFxuICogQHBhcmFtIHthcnJheX0gbGlzdCAtIExpc3QgdG8gd2hpY2ggdG8gYWRkIHRoZSBlbGVtZW50XG4gKiBAcmV0dXJuIHthcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbCA9IFswLCAxXVxuICogYXBwZW5kKCdhJywgbCkgLy8gcmV1dG5yIFswLCAxLCAnYSddXG4gKlxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgY29uY2F0IGZyb20gJy4vY29uY2F0J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhcHBlbmQgKGVsLCBsaXN0KSB7XG4gIHJldHVybiBjb25jYXQobGlzdCwgWyBlbCBdKVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGFwcGx5XG4gKiBAZGVzY3JpcHRpb24gVGhlIGFwcGx5KCkgbWV0aG9kIGNhbGxzIGEgZnVuY3Rpb24gd2l0aCB0aGUgZ2l2ZW4gYXJndW1lbnRzIHByb3ZpZGVkIGFzIGFuIGFycmF5LCBhbmQgdGhlIGZ1bmN0aW9uIGFzIGNvbnRleHQuXG4gKiBAcGFyYW0gZm5cbiAqIEBwYXJhbSBhcmdzXG4gKiBAcmV0dXJuIHsqfVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYSA9IGFwcGx5KGZ1bmN0aW9uICgpIHtcbiAqICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5tYXAoeCA9PiB4ICogMilcbiAqICAgfSlcbiAqIGEoWzEsIDIsIDNdKVxuICogLy8gWzIsIDQsIDZdXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhcHBseSAoZm4sIGFyZ3MpIHtcbiAgcmV0dXJuIGZuLmFwcGx5KGZuLCBhcmdzKVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBhcnJheUNvbmNhdFxuICogQHBhcmFtIGExXG4gKiBAcGFyYW0gYTJcbiAqIEByZXR1cm5zIHtUW119XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0KGEsIGIpXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGVxdWFsc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gZm9yIGRlZXAgY29tcGFyaXNvbiBvZiBhcnJheXNcbiAqIEBwYXJhbSB7YX0geCAtIE9iamVjdCB0byBjb21wYXJlIG9mIHR5cGUgYVxuICogQHBhcmFtIHthfSB5IC0gT2JqZWN0IHggdG8gY29tcGFyZSB3aXRoIG9iamVjdCB4XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgbm90IGZyb20gJy4uL25vdCdcbmltcG9ydCBlcXVhbHMgZnJvbSAnLi4vZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHNBcnJheSAoeCwgeSkge1xuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vdChlcXVhbHMoeFtpXSwgeVtpXSkpKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGFycmF5RmlsdGVyXG4gKiBAcHJpdmF0ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhcnJheUZpbHRlciAoZm4sIGEpIHtcbiAgdmFyIHIgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZm4oYVtpXSkpIHIucHVzaChhW2ldKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgbWFwcGluZyBvdmVyIHRoZSBwcm92aWRlZCBhcnJheSBhbmQgY2FsbGluZyBhbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHBhcmFtIHtjYkZ1bmN0aW9ufSBjYiAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIG1vZGlmeSB0aGUgaXRlbVxuICogQHBhcmFtIHsqfSBpbml0IC0gSW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtBcnJheX0gYSAtIEFycmF5IHdpdGggaXRlbXMgdG8gbW9kaWZ5IGJ5IHRoZSBjYiBmdW5jdGlvblxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYWxpYXMgcmVkdWNlXG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gZm9sZChhZGQsIDAsIFsxLDEsMV0pXG4gKiAvLyByZXN1bHQgPSAzXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgY2JGdW5jdGlvblxuICogQHBhcmFtIHsqfSByIC0gQWNjdW11bGF0b3Igd2hpY2ggYWNjdW11bGF0ZXMgdGhlIGNhbGxiYWNrJ3MgcmV0dXJuIHZhbHVlc1xuICogQHBhcmFtIHsqfSBpdGVtIC0gdGhlIGN1cnJlbnQgZWxlbWVudCBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIHRoZSBpbmRleSBvZiB0aGUgaXRlbSBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBUaGUgaW5pdGlhbCBhcnJheVxuICogQHJldHVybiB7Kn1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9IGluaXRcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2IociwgYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IE9iamVjdCB0byB2ZXJpZml5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzQXJyYXkoWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IHRydWVcbiAqL1xuXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdBcnJheScpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBtYXBcbiAqIEBkZXNjcmlwdGlvbiBNYXBzIG92ZXIgYW4gYXJyYXkgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICogQHNpbmNlIHYxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiAgY29uc3QgcmVzdWx0ID0gbWFwKGlkZW50aXR5LCBbMCwyLDNdKVxuICogIC8vIHJlc3VsdCA9IFswLDIsM11cbiAqICBjb25zdCBhZGQyID0gYWRkKDIpXG4gKiAgY29uc3QgcmVzdWx0ID0gbWFwKGFkZDIsIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzIsNCw1XVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobClcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByW2ldID0gY2IoYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHRvQXJyYXlcbiAqIEBkZXNjcmlwdGlvbiBDb252ZXJ0cyB0aGUgaW5wdXQgdG8gYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXlMaWtlfSB4IC0gT2JqZWN0IHRvIGNvbnZlcnQgdG8gYW4gYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvQXJyYXkoXCJzdHJpbmdcIilcbiAqIC8vIHJlc3VsdCA9IFsncycsJ3QnLCdyJywnaScsJ24nLCdnJ11cbiAqXG4gKiBmdW5jdGlvbiAoKSB7XG4gKiAgY29uc3QgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKVxuICogIGNvbnNvbGUubG9nKHR5cGVvZiBhcmdzKSAvLyBBcnJheVxuICogfVxuICpcbiAqKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvQXJyYXkgKHgpIHtcbiAgcmV0dXJuIHgubGVuZ3RoID09PSAxID8gW3hbMF1dIDogQXJyYXkuYXBwbHkobnVsbCwgeClcbn07XG4iLCIvKipcbiAqIEBmdW5jdGlvbiB1bmlvbkFycmF5XG4gKiBAZGVzY3JpcHRpb24gTWVyZ2VzIDIgYXJyYXlzXG4gKiBAcGFyYW0ge0FycmF5fSBhTCAtIEFycmF5IHRvIG1lcmdlXG4gKiBAcGFyYW0ge0FycmF5fSBhUiAtIEFycmF5IHRvIG1lcmdlXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSB1bmlvbkFycmF5KFswLDEsMl0sIFszLDQsNV0pXG4gKiAvLyByZXN1bHQgPSBbMC4xLjIuMy40LjVdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHVuaW9uQXJyYXkgKGFMLCBhUikge1xuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFMLmNvbmNhdChhUikpKVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGJpbmFyeVxuICogQHBhcmFtIGNiXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0sICo9KTogKn1cbiAqL1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeTEoZnVuY3Rpb24gYmluYXJ5IChjYikge1xuICByZXR1cm4gY3VycnkoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gY2IoYSwgYilcbiAgfSlcbn0pXG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuLyoqXG4gKiBAZnVuY3Rpb24gYmluZFxuICogQGRlc2NyaXB0aW9uIEJpbmQgYSBmdW5jdGlvbiB0byBhIGNvbnRleHRcbiAqIEBwYXJhbSB7ZnVuY3Rpb24gfWZuXG4gKiBAcGFyYW0geyp9IGNvbnRleHRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBiaW5kIChmbiwgY29udGV4dCkge1xuICByZXR1cm4gZm4uYmluZChjb250ZXh0KVxufSlcbiIsIi8qKlxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICpcbiAqIEBmdW5jdGlvbiBGXG4gKiBAZGVzY3JpcHRpb24gQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqKi9cbmltcG9ydCBhbHdheXMgZnJvbSAnLi4vYWx3YXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBhbHdheXMoZmFsc2UpXG4iLCIvKipcbiAqIEFsd2F5cyByZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCBhIEZhbHNlIGJvb2xlYW5cbiAqXG4gKiBAZnVuY3Rpb24gVFxuICogQGRlc2NyaXB0aW9uIEFsd2F5cyByZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCBhIEZhbHNlIGJvb2xlYW5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiovXG5pbXBvcnQgYWx3YXlzIGZyb20gJy4uL2Fsd2F5cydcblxuZXhwb3J0IGRlZmF1bHQgYWx3YXlzKHRydWUpXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSB3aGVuIGJvdGggcHJlZGljYXRlcyByZXR1cm4gdHJ1ZVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4xIEEgcHJlZGljYXRlIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbjIgQSBwcmVkaWNhdGUgZnVuY3Rpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgbGlmdCBmcm9tICcuLi9saWZ0J1xuaW1wb3J0IGFuZCBmcm9tICcuLi9hbmQnXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGJvdGggKGZuMSwgZm4yKSB7XG4gIHJldHVybiBpcygnRnVuY3Rpb24nKShmbjEpXG4gICAgPyBmdW5jdGlvbiBfYm90aCAoKSB7IHJldHVybiBmbjEuYXBwbHkodGhpcywgYXJndW1lbnRzKSAmJiBmbjIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9XG4gICAgOiBsaWZ0KGFuZCkoZm4xLCBmbjIpXG59KVxuIiwiLyoqXG4gKiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxuICpcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gaXNcbiAqIEBkZXNjcmlwdGlvbiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBJdGVtIHRvIHZlcmlmeVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0Jvb2xlYW4nKVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gY2FsbFxuICogQHBhcmFtIGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuLy8gaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBjYWxsIChmbikge1xuICByZXR1cm4gZm4uYXBwbHkoZm4sIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSlcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBjb21wbGVtZW50XG4gKiBAZGVzY3JpcHRpb24gTGlmdHMgYSBwcmVkaWNhdGUgZnVuY3Rpb24gYW5kIHJldHVybnMgdGhlIGNvbXBsZW1lbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IEEgcHJlZGljYXRlIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBzZWUgbm90XG4gKiBAc2VlIGxpZnRcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgaXNOb3RFbXB0eSA9IGNvbXBsZW1lbnQoaXNFbXB0eSlcbiAqIGlzTm90RW1wdHkoW10pIC8vIGZhbHNlXG4gKiBpc05vdEVtcHR5KHsnYScgOiAxfSkgLy8gdHJ1ZVxuICpcbiAqIGNvbXBsZW1lbnQoTWF5YmUub2YoZmFsc2UpKSAvLyB0cnVlXG4gKiBjb21wbGVtZW50KE1heWJlLm9mKHRydWUpKSAvLyBmYWxzZVxuICovXG5pbXBvcnQgbGlmdCBmcm9tICcuL2xpZnQnXG5pbXBvcnQgbm90IGZyb20gJy4vbm90J1xuXG5jb25zdCBjb21wbGVtZW50ID0gbGlmdChub3QpXG5leHBvcnQgZGVmYXVsdCBjb21wbGVtZW50XG4iLCIvKipcbiAqIEBmdW5jdGlvbiBjb21wb3NlXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKTogKn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSAoKSB7XG4gIGxldCBmbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIF9jb21wb3NlICgpIHtcbiAgICBsZXQgaW5pdCA9IGZuc1tmbnMubGVuZ3RoIC0gMV1cbiAgICBsZXQgcmVzdWx0ID0gW2luaXQuYXBwbHkoaW5pdCwgYXJndW1lbnRzKV1cbiAgICBsZXQgaSA9IGZucy5sZW5ndGggLSAyXG5cbiAgICBmb3IgKGk7IGkgPj0gMDsgLS1pKSB7XG4gICAgICBjb25zdCBmbiA9IGZuc1tpXVxuXG4gICAgICByZXN1bHQgPSBbZm4uYXBwbHkoZm4sIHJlc3VsdCldXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRbMF1cbiAgfVxufTtcbiIsIi8qKlxuICogQ29uY2F0ZW5hdGVzIDIgaXRlbXMgdG9nZXRoZXJcbiAqXG4gKiBAZnVuY3Rpb24gY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQ29uY2F0ZW5hdGVzIDIgaXRlbXMgdG9nZXRoZXJcbiAqIEBzaW5jZSB2MS4wLjRcbiAqIEBwYXJhbSB7YX0gYSAtIExlZnQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvblxuICogQHBhcmFtIHthfSBiIC0gcmlnaHQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvblxuICogQHJldHVybiB7YX0gQ29uY2F0ZW5hdGVkIGl0ZW1cbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlDb25jYXQgZnJvbSAnLi9hcnJheS9jb25jYXQnXG5pbXBvcnQgc3RyaW5nQ29uY2F0IGZyb20gJy4vc3RyaW5nL2NvbmNhdCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIGNvbnN0IHR5cGVNYXAgPSB7XG4gICAgJ1N0cmluZyc6IHN0cmluZ0NvbmNhdCxcbiAgICAnQXJyYXknOiBhcnJheUNvbmNhdFxuICB9XG4gIHJldHVybiB0eXBlTWFwW3R5cGUoYSldKGEsIGIpXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gY29uZFxuICogQHBhcmFtIGNvbmRzXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmQgKGNvbmRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29uZHNbaV1bMF0odmFsdWUpKSByZXR1cm4gY29uZHNbaV1bMV0odmFsdWUpXG4gICAgfVxuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyoqXG4gKiBAZnVuY3Rpb24gY3VycnlcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkgKGZ1bikge1xuICBjb25zdCBhcmdzbGVuID0gZnVuLmxlbmd0aFxuXG4gIGlmIChhcmdzbGVuID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1blxuICB9XG4gIHJldHVybiBjcmVhdGVSZWN1cnNlcihbXSlcblxuICBmdW5jdGlvbiByZWN1cnNlIChhY2MsIGFyZ3MpIHtcbiAgICBjb25zdCBfYWNjID0gYWNjLmNvbmNhdChhcmdzKVxuICAgIHJldHVybiBfYWNjLmxlbmd0aCA8IGFyZ3NsZW5cbiAgICAgID8gY3JlYXRlUmVjdXJzZXIoX2FjYylcbiAgICAgIDogZnVuLmFwcGx5KHRoaXMsIF9hY2MpXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVSZWN1cnNlciAoYWNjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWN1cnNlKGFjYywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGZ1bmN0aW9uIGRpZmZEYXRlXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIDIgZGF0ZXMgaW4gbWlsbGlzZWNvbmRcbiAqIEBwYXJhbSB7RGF0ZX0gc3RhcnQgLSBTdGFydCBkYXRlXG4gKiBAcGFyYW0ge0RhdGV9IGVuZCAtIEVuZCBkYXRlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFJFdHVybiB0aGUgZGlmZmVyZW5jZSBpbiBtaWxsaXNlY29uZHNcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBkaWZmRGF0ZSAoc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKG5ldyBEYXRlKHN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShlbmQpLmdldFRpbWUoKSlcbn0pXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnRGF0ZScpXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDA5LzAzLzIwMTcuXG4gKi9cbmltcG9ydCBkaWZmRGF0ZSBmcm9tICcuL2RpZmZEYXRlJ1xuXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4ge1xuICByZXR1cm4gZGlmZkRhdGUobmV3IERhdGUoKSkoZCkgPCAwXG59XG4iLCIvKipcbiAqXG4gKi9cbmltcG9ydCBpc0RhdGUgZnJvbSAnLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZCAoeCkge1xuICAvLyBub2luc3BlY3Rpb24gSlNDaGVja0Z1bmN0aW9uU2lnbmF0dXJlc1xuICByZXR1cm4gaXNEYXRlKHgpICYmIGlzRmluaXRlKHgudmFsdWVPZigpKVxufTtcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyA4NjQwMDAwMCAvLyAyNCo2MCo2MCoxMDAwID0gODY0MDAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDM2MDAwMDAgLy8gNjAqNjAqMTAwMCA9IDM2MDAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDYwMDAwIC8vIDYwKjEwMDAgPSA2MDAwMFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gMTAwMFxyXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxuICpcbiAqIEBmdW5jdGlvbiBkZWZhdWx0VG9cbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBiIC0+IGEgfCBiXG4gKiBAcGFyYW0ge2F9IGRlZmF1bHQgVGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBAcGFyYW0ge2J9IHZhbCBgdmFsYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgb2YgYGRlZmF1bHRgIHVubGVzcyBgdmFsYCBpcyBgbnVsbGAsIGB1bmRlZmluZWRgIG9yIGBOYU5gLlxuICogQHJldHVybiB7Kn0gVGhlIHNlY29uZCB2YWx1ZSBpZiBpdCBpcyBub3QgYG51bGxgLCBgdW5kZWZpbmVkYCBvciBgTmFOYCwgb3RoZXJ3aXNlIHRoZSBkZWZhdWx0IHZhbHVlXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZGVmYXVsdFRvIChkLCB2KSB7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIHJldHVybiB2ID09IG51bGwgfHwgdiAhPT0gdiA/IGQgOiB2XG59KVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBlbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGVtcHR5IGVxdWl2YWxlbnQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW1wdHkgKHgpIHtcbiAgcmV0dXJuIG5ldyB4LmNvbnN0cnVjdG9yKClcbn07XG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGVxdWFsc1xuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGZvciBlcXVhbGl0eSBvZiAyIGl0ZW1zXG4gKiBAcGFyYW0geyp9IHggLSBMZWZ0IHNpZGUgb2YgdGhlIGVxdWFsaXR5IGNoZWNrXG4gKiBAcGFyYW0geyp9IHkgLSBSaWdodCBzaWRlIG9mIHRoZSBlcXVhbGl0eSBjaGVja1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbmFuID0gTnVtYmVyLk5hTlxuICogZXF1YWwobmFuLCBuYW4pIC8vIHJldHVybnMgdHJ1ZVxuICpcbiAqIGNvbnN0IGFycjEgPSBbMCwgMSwgMiwgM11cbiAqIGNvbnN0IGFycjIgPSBbbnVsbCwgMSwgMiwgM11cbiAqIGVxdWFscyhhcnIxLCBhcnIyKSAvLyByZXR1cm5zIGZhbHNlXG4gKlxuICogZXF1YWxzKG5ldyBPYmplY3QoeydhJzogMCwgJ2InOiAxfSksIHsnYSc6IDAsICdiJzogMX0pIC8vIHRydWVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuL2V4aXN0cydcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi9pZGVudGljYWwnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5pbXBvcnQgbm90IGZyb20gJy4vbm90J1xuaW1wb3J0IG9yIGZyb20gJy4vb3InXG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9vYmplY3QvaXMnXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2FycmF5L2lzJ1xuaW1wb3J0IGlzQm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4vaXMnXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9udW1iZXIvaXMnXG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnLi9zdHJpbmcvaXMnXG5pbXBvcnQgaXNEYXRlIGZyb20gJy4vZGF0ZS9pcydcbmltcG9ydCBlcXVhbHNBcnJheSBmcm9tICcuL2FycmF5L2VxdWFscydcbmltcG9ydCBlcXVhbHNPYmplY3QgZnJvbSAnLi9vYmplY3QvZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHMgKHgsIHkpIHtcbiAgaWYgKGlkZW50aWNhbCh4LCB5KSkgcmV0dXJuIHRydWVcblxuICBpZiAodHlwZSh4KSAhPT0gdHlwZSh5KSkgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKG9yKG5vdChleGlzdHMoeCkpLCBub3QoZXhpc3RzKHkpKSkpIHJldHVybiBmYWxzZVxuXG4gIGlmICh4LmNvbnN0cnVjdG9yICE9PSB5LmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2VcblxuICBpZiAoaXNTdHJpbmcoeCkgfHwgaXNCb29sZWFuKHgpIHx8IGlzTnVtYmVyKHgpIHx8IGlzRGF0ZSh4KSkge1xuICAgIHJldHVybiBpZGVudGljYWwoeC52YWx1ZU9mKCksIHkudmFsdWVPZigpKVxuICB9XG4gIGlmIChpc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuIGVxdWFsc0FycmF5KHgsIHkpXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzT2JqZWN0KHgsIHkpXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZXhpc3RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4aXN0cyAoeCkge1xuICByZXR1cm4gISh4ID09IG51bGwpXG59O1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZmlsdGVyXG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVjbnRpb24gdGhhdCBmaWx0ZXJzIE9iamVjdHMsIEFycmF5cyBhbmQgTWFwc1xuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlGaWx0ZXIgZnJvbSAnLi9hcnJheS9maWx0ZXInXG5pbXBvcnQgb2JqZWN0RmlsdGVyIGZyb20gJy4vb2JqZWN0L2ZpbHRlcidcbmltcG9ydCBtYXBGaWx0ZXIgZnJvbSAnLi9tYXAvZmlsdGVyJ1xuLy8gVE9ET1xuLy8gaW1wb3J0IHNldEZpbHRlciBmcm9tICcuLi9zZXQvZmlsdGVyJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmaWx0ZXIgKGZuLCBhKSB7XG4gIHN3aXRjaCAodHlwZShhKSkge1xuICAgIC8vIHN3aXRjaCAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpKSB7XG4gICAgLy8gY2FzZSAnRnVuY3Rpb24nOlxuICAgIC8vICAgcmV0dXJuIGN1cnJ5KGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgcmV0dXJuIGNiLmNhbGwodGhpcywgYS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKVxuICAgIC8vICAgfSlcbiAgICBjYXNlICdPYmplY3QnOlxuICAgICAgcmV0dXJuIG9iamVjdEZpbHRlcihmbiwgYSlcbiAgICAvLyBjYXNlICdTdHJpbmcnOlxuICAgIC8vICAgcmV0dXJuIHN0cmluZ01hcChjYiwgYSlcbiAgICBjYXNlICdNYXAnOlxuICAgICAgcmV0dXJuIG1hcEZpbHRlcihmbiwgYSlcbiAgICAvLyBjYXNlICdTZXQnOlxuICAgIC8vICAgcmV0dXJuIHNldEZpbHRlcihmbiwgYSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFycmF5RmlsdGVyKGZuLCBhKVxuICB9XG59KVxuIiwiLyoqXG4gKiBGaW5kIHRoZSBpbmRleCBtYXRjaGluZyBhIHByZWRpY2F0ZVxuICpcbiAqIEBmdW5jdGlvbiBmaW5kSW5kZXhcbiAqIEBkZXNjcmlwdGlvbiBGaW5kIHRoZSBpbmRleCBtYXRjaGluZyBhIHByZWRpY2F0ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoYSAtPiBib29sZWFuKSAtPiBbYV0gLT4gbnVtYmVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBQcmVkaWNhdGUgZnVuY3Rpb24gcmV0dXJucyBhIGJvb2xlYW5cbiAqIEBwYXJhbSB7QXJyYXl9IEFuIGFycmF5IGxpa2Ugb2JqZWN0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKiovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmaW5kSW5kZXggKGZuLCBhKSB7XG4gIGxldCBpID0gMFxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgd2hpbGUgKGkgPCBsKSB7XG4gICAgaWYgKGZuKGFbaV0pKSB7XG4gICAgICByZXR1cm4gaVxuICAgIH1cbiAgICBpICs9IDFcbiAgfVxuICByZXR1cm4gLTFcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBmaXJzdFxuICogQHBhcmFtIFthXVxuICogQHJldHVybiBhIHwgdW5kZWZpbmVkXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGFyciA9IFsxLCAyLCA0XVxuICogZmlyc3QoWzEsIDIsIDRdKSAvLyByZXR1cm5zIDFcbiAqL1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkxKGZ1bmN0aW9uIGZpcnN0IChhKSB7XG4gIHJldHVybiBhICYmIGEubGVuZ3RoID8gYVswXSA6IHVuZGVmaW5lZFxufSlcbiIsImltcG9ydCBmb2xkIGZyb20gJy4vZm9sZCdcbmltcG9ydCBlbXB0eSBmcm9tICcuL2VtcHR5J1xuaW1wb3J0IGNvbmNhdCBmcm9tICcuL2NvbmNhdCdcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGlzIGZyb20gJy4vaXMnXG5cbmNvbnN0IGlzRnVuY3Rpb24gPSBpcygnRnVuY3Rpb24nKVxuXG4vKipcbiAqIEBmdW5jdGlvbiBmbGF0TWFwXG4gKiBAcGFyYW0gZm5cbiAqIEBwYXJhbSBhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZsYXRNYXAgKGZuLCBhKSB7XG4gIGlmIChpc0Z1bmN0aW9uKGEpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gZm4oYSh4KSkoeClcbiAgICB9XG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24oYS5mbGF0TWFwKSkge1xuICAgIHJldHVybiBhLmZsYXRNYXAoZm4pXG4gIH1cbiAgcmV0dXJuIGZvbGQoKGFjYywgeCkgPT4gY29uY2F0KGFjYywgZm4oeCkpLCBlbXB0eShhKSwgYSlcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlbVxuICpcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBpdGVtXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnICgoYSwgYiwgYywgYSkg4oaSIGEpIOKGkiBhIOKGkiBbYl0g4oaSIGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIHJlY2VpdmVzIDQgdmFsdWVzOiB0aGUgYWNjdW11bGF0b3IsIHRoZSBpdGVtLCB0aGUgaW5kZXgsIGFuZCB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gYSBpcyB0aGUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHsqfSBbYl0gdGhlIGFycmF5IGxpa2UgaXRlbSB0byBpdGVyYXRlIG92ZXJcbiAqIEByZXR1cm4geyp9IGEgaXMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlXG4gKiovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGFycmF5Rm9sZCBmcm9tICcuL2FycmF5L2ZvbGQnXG5pbXBvcnQgb2JqZWN0Rm9sZCBmcm9tICcuL29iamVjdC9mb2xkJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBjb25zdCB0eXBlTWFwID0ge1xuICAgICdPYmplY3QnOiBvYmplY3RGb2xkLFxuICAgICdBcnJheSc6IGFycmF5Rm9sZFxuICB9XG4gIC8vIGlmIChhLm5leHQpIHtcbiAgLy8gICByZXR1cm4gaXRlcmFibGVGb2xkKGNiLCBpbml0LCBhKVxuICAvLyB9XG4gIC8vIGlmICh0eXBlKFN5bWJvbCkgIT09ICd1bmRlZmluZWQnICYmIGFbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAvLyAgIHJldHVybiBpdGVyYWJsZUZvbGQoY2IsIGluaXQsIGFbU3ltYm9sLml0ZXJhdG9yXSgpKVxuICAvLyB9XG4gIHJldHVybiB0eXBlTWFwW3R5cGUoYSldKGNiLCBpbml0LCBhKVxufSlcblxuLy8gZnVuY3Rpb24gaXRlcmFibGVGb2xkIChjYiwgYWNjLCBnZW4pIHtcbi8vICAgbGV0IHN0ZXAgPSBnZW4ubmV4dCgpXG4vLyAgIHdoaWxlICghc3RlcC5kb25lKSB7XG4vLyAgICAgYWNjID0gY2IoYWNjLCBzdGVwLnZhbHVlKVxuLy8gICAgIHN0ZXAgPSBnZW4ubmV4dCgpXG4vLyAgIH1cbi8vICAgcmV0dXJuIGFjY1xuLy8gfVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBpZGVudGljYWxcbiAqIEBkZXNjcmlwdGlvbiBjaGVja3MgZm9yIGlkZW50aW50aWNhbCBpdGVtc1xuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBpc05hbiBmcm9tICcuL251bWJlci9pc05hbidcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaWRlbnRpY2FsICh4LCB5KSB7XG4gIGlmICh4ID09PSAwICYmIHkgPT09IDApIHtcbiAgICByZXR1cm4gMSAvIHggPT09IDEgLyB5XG4gIH1cbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAhIShpc05hbih4KSAmJiBpc05hbih5KSlcbn0pXG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGlkZW50aXR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgdmFsdWUgc3VwcGxpZWQgdG8gdGhlIGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWRlbnRpdHkgKHgpIHtcbiAgcmV0dXJuIHhcbn07XG4iLCIvLyBleHBvcnQgeyBkZWZhdWx0IGFzIF9fIH0gZnJvbSAnLi9fXyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFwZXJ0dXJlIH0gZnJvbSAnLi9hcGVydHVyZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXBwbHlTcGVjIH0gZnJvbSAnLi9hcHBseVNwZWMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGFwcGx5VG8gfSBmcm9tICcuL2FwcGx5VG8nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGFzY2VuZCB9IGZyb20gJy4vYXNjZW5kJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NvYyB9IGZyb20gJy4vYXNzb2MnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc29jUGF0aCB9IGZyb20gJy4vYXNzb2NQYXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBjbGFtcCB9IGZyb20gJy4vY2xhbXAnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGNsb25lIH0gZnJvbSAnLi9jbG9uZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcGFyYXRvciB9IGZyb20gJy4vY29tcGFyYXRvcidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcG9zZUsgfSBmcm9tICcuL2NvbXBvc2VLJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wb3NlUCB9IGZyb20gJy4vY29tcG9zZVAnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBvc2VXaXRoIH0gZnJvbSAnLi9jb21wb3NlV2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgY29uc3RydWN0IH0gZnJvbSAnLi9jb25zdHJ1Y3QnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGNvbnN0cnVjdE4gfSBmcm9tICcuL2NvbnN0cnVjdE4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGNvbnRhaW5zIH0gZnJvbSAnLi9jb250YWlucydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgY29udmVyZ2UgfSBmcm9tICcuL2NvbnZlcmdlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBjb3VudEJ5IH0gZnJvbSAnLi9jb3VudEJ5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWMgfSBmcm9tICcuL2RlYydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZGVzY2VuZCB9IGZyb20gJy4vZGVzY2VuZCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZGlmZmVyZW5jZSB9IGZyb20gJy4vZGlmZmVyZW5jZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZGlmZmVyZW5jZVdpdGggfSBmcm9tICcuL2RpZmZlcmVuY2VXaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBkaXNzb2MgfSBmcm9tICcuL2Rpc3NvYydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZGlzc29jUGF0aCB9IGZyb20gJy4vZGlzc29jUGF0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZHJvcCB9IGZyb20gJy4vZHJvcCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZHJvcExhc3QgfSBmcm9tICcuL2Ryb3BMYXN0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBkcm9wTGFzdFdoaWxlIH0gZnJvbSAnLi9kcm9wTGFzdFdoaWxlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBkcm9wUmVwZWF0cyB9IGZyb20gJy4vZHJvcFJlcGVhdHMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGRyb3BSZXBlYXRzV2l0aCB9IGZyb20gJy4vZHJvcFJlcGVhdHNXaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBkcm9wV2hpbGUgfSBmcm9tICcuL2Ryb3BXaGlsZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZWl0aGVyIH0gZnJvbSAnLi9laXRoZXInXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGVuZHNXaXRoIH0gZnJvbSAnLi9lbmRzV2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZXFCeSB9IGZyb20gJy4vZXFCeSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZXFQcm9wcyB9IGZyb20gJy4vZXFQcm9wcydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZXZvbHZlIH0gZnJvbSAnLi9ldm9sdmUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGZpbmQgfSBmcm9tICcuL2ZpbmQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGZpbmRMYXN0IH0gZnJvbSAnLi9maW5kTGFzdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZmluZExhc3RJbmRleCB9IGZyb20gJy4vZmluZExhc3RJbmRleCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZmxhdHRlbiB9IGZyb20gJy4vZmxhdHRlbidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZmxpcCB9IGZyb20gJy4vZmxpcCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZm9yRWFjaCB9IGZyb20gJy4vZm9yRWFjaCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZm9yRWFjaE9iakluZGV4ZWQgfSBmcm9tICcuL2ZvckVhY2hPYmpJbmRleGVkJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBmcm9tUGFpcnMgfSBmcm9tICcuL2Zyb21QYWlycydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZ3JvdXBCeSB9IGZyb20gJy4vZ3JvdXBCeSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZ3JvdXBXaXRoIH0gZnJvbSAnLi9ncm91cFdpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGd0IH0gZnJvbSAnLi9ndCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZ3RlIH0gZnJvbSAnLi9ndGUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGhhc1BhdGggfSBmcm9tICcuL2hhc1BhdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGhlYWQgfSBmcm9tICcuL2hlYWQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGlmRWxzZSB9IGZyb20gJy4vaWZFbHNlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpbmMgfSBmcm9tICcuL2luYydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaW5jbHVkZXMgfSBmcm9tICcuL2luY2x1ZGVzJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpbmRleEJ5IH0gZnJvbSAnLi9pbmRleEJ5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpbmRleE9mIH0gZnJvbSAnLi9pbmRleE9mJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpbml0IH0gZnJvbSAnLi9pbml0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpbm5lckpvaW4gfSBmcm9tICcuL2lubmVySm9pbidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaW5zZXJ0IH0gZnJvbSAnLi9pbnNlcnQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGluc2VydEFsbCB9IGZyb20gJy4vaW5zZXJ0QWxsJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnRlcnNlY3Rpb24gfSBmcm9tICcuL2ludGVyc2VjdGlvbidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaW50ZXJzcGVyc2UgfSBmcm9tICcuL2ludGVyc3BlcnNlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnRvIH0gZnJvbSAnLi9pbnRvJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnZlcnQgfSBmcm9tICcuL2ludmVydCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgaW52ZXJ0T2JqIH0gZnJvbSAnLi9pbnZlcnRPYmonXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGludm9rZXIgfSBmcm9tICcuL2ludm9rZXInXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGpvaW4gfSBmcm9tICcuL2pvaW4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGp1eHQgfSBmcm9tICcuL2p1eHQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGxhc3RJbmRleE9mIH0gZnJvbSAnLi9sYXN0SW5kZXhPZidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbGVuZ3RoIH0gZnJvbSAnLi9sZW5ndGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGxlbnMgfSBmcm9tICcuL2xlbnMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGxlbnNJbmRleCB9IGZyb20gJy4vbGVuc0luZGV4J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBsZW5zUGF0aCB9IGZyb20gJy4vbGVuc1BhdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGxlbnNQcm9wIH0gZnJvbSAnLi9sZW5zUHJvcCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbGlmdE4gfSBmcm9tICcuL2xpZnROJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBsdCB9IGZyb20gJy4vbHQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIGx0ZSB9IGZyb20gJy4vbHRlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXBBY2N1bSB9IGZyb20gJy4vbWFwQWNjdW0nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1hcEFjY3VtUmlnaHQgfSBmcm9tICcuL21hcEFjY3VtUmlnaHQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1hcE9iakluZGV4ZWQgfSBmcm9tICcuL21hcE9iakluZGV4ZWQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1hdGNoIH0gZnJvbSAnLi9tYXRjaCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWF0aE1vZCB9IGZyb20gJy4vbWF0aE1vZCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWF4QnkgfSBmcm9tICcuL21heEJ5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtZWFuIH0gZnJvbSAnLi9tZWFuJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtZWRpYW4gfSBmcm9tICcuL21lZGlhbidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWVtb2l6ZVdpdGggfSBmcm9tICcuL21lbW9pemVXaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZUFsbCB9IGZyb20gJy4vbWVyZ2VBbGwnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlRGVlcExlZnQgfSBmcm9tICcuL21lcmdlRGVlcExlZnQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlRGVlcFJpZ2h0IH0gZnJvbSAnLi9tZXJnZURlZXBSaWdodCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VEZWVwV2l0aCB9IGZyb20gJy4vbWVyZ2VEZWVwV2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VEZWVwV2l0aEtleSB9IGZyb20gJy4vbWVyZ2VEZWVwV2l0aEtleSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VMZWZ0IH0gZnJvbSAnLi9tZXJnZUxlZnQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlUmlnaHQgfSBmcm9tICcuL21lcmdlUmlnaHQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlV2l0aCB9IGZyb20gJy4vbWVyZ2VXaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZVdpdGhLZXkgfSBmcm9tICcuL21lcmdlV2l0aEtleSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbWluIH0gZnJvbSAnLi9taW4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1pbkJ5IH0gZnJvbSAnLi9taW5CeSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbW9kdWxvIH0gZnJvbSAnLi9tb2R1bG8nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG1vdmUgfSBmcm9tICcuL21vdmUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG5BcnkgfSBmcm9tICcuL25BcnknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG5lZ2F0ZSB9IGZyb20gJy4vbmVnYXRlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBub25lIH0gZnJvbSAnLi9ub25lJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBudGggfSBmcm9tICcuL250aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgbnRoQXJnIH0gZnJvbSAnLi9udGhBcmcnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG8gfSBmcm9tICcuL28nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIG9iak9mIH0gZnJvbSAnLi9vYmpPZidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgb2YgfSBmcm9tICcuL29mJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBvbmNlIH0gZnJvbSAnLi9vbmNlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBvdGhlcndpc2UgfSBmcm9tICcuL290aGVyd2lzZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgb3ZlciB9IGZyb20gJy4vb3Zlcidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcGFpciB9IGZyb20gJy4vcGFpcidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcGFydGlhbCB9IGZyb20gJy4vcGFydGlhbCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcGFydGlhbFJpZ2h0IH0gZnJvbSAnLi9wYXJ0aWFsUmlnaHQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHBhcnRpdGlvbiB9IGZyb20gJy4vcGFydGl0aW9uJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoRXEgfSBmcm9tICcuL3BhdGhFcSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aE9yIH0gZnJvbSAnLi9wYXRoT3InXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHBhdGhTYXRpc2ZpZXMgfSBmcm9tICcuL3BhdGhTYXRpc2ZpZXMnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHBpY2tBbGwgfSBmcm9tICcuL3BpY2tBbGwnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHBpY2tCeSB9IGZyb20gJy4vcGlja0J5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwaXBlIH0gZnJvbSAnLi9waXBlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwaXBlSyB9IGZyb20gJy4vcGlwZUsnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHBpcGVQIH0gZnJvbSAnLi9waXBlUCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcGlwZVdpdGggfSBmcm9tICcuL3BpcGVXaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwbHVjayB9IGZyb20gJy4vcGx1Y2snXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHByZXBlbmQgfSBmcm9tICcuL3ByZXBlbmQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHByb3BFcSB9IGZyb20gJy4vcHJvcEVxJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBwcm9wSXMgfSBmcm9tICcuL3Byb3BJcydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvcE9yIH0gZnJvbSAnLi9wcm9wT3InXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHByb3BzIH0gZnJvbSAnLi9wcm9wcydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvcFNhdGlzZmllcyB9IGZyb20gJy4vcHJvcFNhdGlzZmllcydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcmFuZ2UgfSBmcm9tICcuL3JhbmdlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyByZWR1Y2UgfSBmcm9tICcuL3JlZHVjZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcmVkdWNlQnkgfSBmcm9tICcuL3JlZHVjZUJ5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyByZWR1Y2VkIH0gZnJvbSAnLi9yZWR1Y2VkJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyByZWR1Y2VSaWdodCB9IGZyb20gJy4vcmVkdWNlUmlnaHQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHJlZHVjZVdoaWxlIH0gZnJvbSAnLi9yZWR1Y2VXaGlsZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcmVqZWN0IH0gZnJvbSAnLi9yZWplY3QnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHJlbW92ZSB9IGZyb20gJy4vcmVtb3ZlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyByZXBlYXQgfSBmcm9tICcuL3JlcGVhdCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcmVwbGFjZSB9IGZyb20gJy4vcmVwbGFjZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgcmV2ZXJzZSB9IGZyb20gJy4vcmV2ZXJzZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc2NhbiB9IGZyb20gJy4vc2Nhbidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc2VxdWVuY2UgfSBmcm9tICcuL3NlcXVlbmNlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzZXQgfSBmcm9tICcuL3NldCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc2xpY2UgfSBmcm9tICcuL3NsaWNlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzb3J0IH0gZnJvbSAnLi9zb3J0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzb3J0QnkgfSBmcm9tICcuL3NvcnRCeSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgc29ydFdpdGggfSBmcm9tICcuL3NvcnRXaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzcGxpdCB9IGZyb20gJy4vc3BsaXQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHNwbGl0QXQgfSBmcm9tICcuL3NwbGl0QXQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHNwbGl0RXZlcnkgfSBmcm9tICcuL3NwbGl0RXZlcnknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHNwbGl0V2hlbiB9IGZyb20gJy4vc3BsaXRXaGVuJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzdGFydHNXaXRoIH0gZnJvbSAnLi9zdGFydHNXaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBzdWJ0cmFjdCB9IGZyb20gJy4vc3VidHJhY3QnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHN5bW1ldHJpY0RpZmZlcmVuY2UgfSBmcm9tICcuL3N5bW1ldHJpY0RpZmZlcmVuY2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHN5bW1ldHJpY0RpZmZlcmVuY2VXaXRoIH0gZnJvbSAnLi9zeW1tZXRyaWNEaWZmZXJlbmNlV2l0aCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdGFpbCB9IGZyb20gJy4vdGFpbCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdGFrZSB9IGZyb20gJy4vdGFrZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdGFrZUxhc3QgfSBmcm9tICcuL3Rha2VMYXN0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0YWtlTGFzdFdoaWxlIH0gZnJvbSAnLi90YWtlTGFzdFdoaWxlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0YWtlV2hpbGUgfSBmcm9tICcuL3Rha2VXaGlsZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdGFwIH0gZnJvbSAnLi90YXAnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRlc3QgfSBmcm9tICcuL3Rlc3QnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRoZW4gfSBmcm9tICcuL3RoZW4nXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRodW5raWZ5IH0gZnJvbSAnLi90aHVua2lmeSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdGltZXMgfSBmcm9tICcuL3RpbWVzJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0xvd2VyIH0gZnJvbSAnLi90b0xvd2VyJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0b1BhaXJzIH0gZnJvbSAnLi90b1BhaXJzJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0b1BhaXJzSW4gfSBmcm9tICcuL3RvUGFpcnNJbidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdG9TdHJpbmcgfSBmcm9tICcuL3RvU3RyaW5nJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0b1VwcGVyIH0gZnJvbSAnLi90b1VwcGVyJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB0cmFuc2R1Y2UgfSBmcm9tICcuL3RyYW5zZHVjZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdHJhbnNwb3NlIH0gZnJvbSAnLi90cmFuc3Bvc2UnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHRyYXZlcnNlIH0gZnJvbSAnLi90cmF2ZXJzZSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdHJpbSB9IGZyb20gJy4vdHJpbSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdHJ5Q2F0Y2ggfSBmcm9tICcuL3RyeUNhdGNoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmFwcGx5IH0gZnJvbSAnLi91bmFwcGx5J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmFyeSB9IGZyb20gJy4vdW5hcnknXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHVuY3VycnlOIH0gZnJvbSAnLi91bmN1cnJ5Tidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdW5mb2xkIH0gZnJvbSAnLi91bmZvbGQnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHVuaW9uV2l0aCB9IGZyb20gJy4vdW5pb25XaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmlxIH0gZnJvbSAnLi91bmlxJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmlxQnkgfSBmcm9tICcuL3VuaXFCeSdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pcVdpdGggfSBmcm9tICcuL3VuaXFXaXRoJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmxlc3MgfSBmcm9tICcuL3VubGVzcydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdW5uZXN0IH0gZnJvbSAnLi91bm5lc3QnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHVudGlsIH0gZnJvbSAnLi91bnRpbCdcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdXBkYXRlIH0gZnJvbSAnLi91cGRhdGUnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHVzZVdpdGggfSBmcm9tICcuL3VzZVdpdGgnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHZhbHVlc0luIH0gZnJvbSAnLi92YWx1ZXNJbidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdmlldyB9IGZyb20gJy4vdmlldydcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgd2hlbiB9IGZyb20gJy4vd2hlbidcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgd2hlcmUgfSBmcm9tICcuL3doZXJlJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB3aGVyZUVxIH0gZnJvbSAnLi93aGVyZUVxJ1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRob3V0IH0gZnJvbSAnLi93aXRob3V0J1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB4cHJvZCB9IGZyb20gJy4veHByb2QnXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIHppcE9iaiB9IGZyb20gJy4vemlwT2JqJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGQgfSBmcm9tICcuL251bWJlci9hZGQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkZEluZGV4IH0gZnJvbSAnLi9hZGRJbmRleCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWRqdXN0IH0gZnJvbSAnLi9hZGp1c3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkanVzdFdpdGggfSBmcm9tICcuL2FkanVzdFdpdGgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsbCB9IGZyb20gJy4vYWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbGxQYXNzIH0gZnJvbSAnLi9hbGxQYXNzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbHdheXMgfSBmcm9tICcuL2Fsd2F5cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW5kIH0gZnJvbSAnLi9hbmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFueSB9IGZyb20gJy4vYW55J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbnlQYXNzIH0gZnJvbSAnLi9hbnlQYXNzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcCB9IGZyb20gJy4vYXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFwcGVuZCB9IGZyb20gJy4vYXBwZW5kJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcHBseSB9IGZyb20gJy4vYXBwbHknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJpbmFyeSB9IGZyb20gJy4vYmluYXJ5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBiaW5kIH0gZnJvbSAnLi9iaW5kJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBib3RoIH0gZnJvbSAnLi9ib29sZWFuL2JvdGgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNhbGwgfSBmcm9tICcuL2NhbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBsZW1lbnQgfSBmcm9tICcuL2NvbXBsZW1lbnQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBvc2UgfSBmcm9tICcuL2NvbXBvc2UnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmNhdCB9IGZyb20gJy4vY29uY2F0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb25kIH0gZnJvbSAnLi9jb25kJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjdXJyeSB9IGZyb20gJy4vY3VycnknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZmF1bHRUbyB9IGZyb20gJy4vZGVmYXVsdFRvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaWZmRGF0ZSB9IGZyb20gJy4vZGF0ZS9kaWZmRGF0ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGl2aWRlIH0gZnJvbSAnLi9udW1iZXIvZGl2aWRlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbXB0eSB9IGZyb20gJy4vZW1wdHknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFscyB9IGZyb20gJy4vZXF1YWxzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBleGlzdHMgfSBmcm9tICcuL2V4aXN0cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRiB9IGZyb20gJy4vYm9vbGVhbi9GJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmluZEluZGV4IH0gZnJvbSAnLi9maW5kSW5kZXgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpcnN0IH0gZnJvbSAnLi9maXJzdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmxhdE1hcCB9IGZyb20gJy4vZmxhdE1hcCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9sZCB9IGZyb20gJy4vZm9sZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9ybWF0U3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcvZm9ybWF0U3RyaW5nJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXMgfSBmcm9tICcuL29iamVjdC9oYXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGhhc0luIH0gZnJvbSAnLi9vYmplY3QvaGFzSW4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlkZW50aWNhbCB9IGZyb20gJy4vaWRlbnRpY2FsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzIH0gZnJvbSAnLi9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNBcnJheSB9IGZyb20gJy4vYXJyYXkvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzQm9vbGVhbiB9IGZyb20gJy4vYm9vbGVhbi9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNEYXRlIH0gZnJvbSAnLi9kYXRlL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0VtcHR5IH0gZnJvbSAnLi9pc0VtcHR5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0Z1dHVyZURhdGUgfSBmcm9tICcuL2RhdGUvaXNGdXR1cmVEYXRlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc01hcCB9IGZyb20gJy4vbWFwL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc05hbiB9IGZyb20gJy4vbnVtYmVyL2lzTmFuJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc051bGwgfSBmcm9tICcuL251bGwvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTnVtYmVyIH0gZnJvbSAnLi9udW1iZXIvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzT2JqZWN0IH0gZnJvbSAnLi9vYmplY3QvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzU2V0IH0gZnJvbSAnLi9zZXQvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzU3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi91bmRlZmluZWQvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzVmFsaWREYXRlIH0gZnJvbSAnLi9kYXRlL2lzVmFsaWQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEp1c3QgfSBmcm9tICcuL21vbmFkcy9KdXN0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXlzIH0gZnJvbSAnLi9rZXlzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXlzSW4gfSBmcm9tICcuL29iamVjdC9rZXlzSW4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxhc3QgfSBmcm9tICcuL2xhc3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxpZnQgfSBmcm9tICcuL2xpZnQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hcCB9IGZyb20gJy4vbWFwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXggfSBmcm9tICcuL21heCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWF5YmUgfSBmcm9tICcuL21vbmFkcy9NYXliZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2UgfSBmcm9tICcuL29iamVjdC9tZXJnZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbXVsdGlwbHkgfSBmcm9tICcuL251bWJlci9tdWx0aXBseSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbm90IH0gZnJvbSAnLi9ub3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vdGhpbmcgfSBmcm9tICcuL21vbmFkcy9Ob3RoaW5nJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvbWl0IH0gZnJvbSAnLi9vYmplY3Qvb21pdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb3IgfSBmcm9tICcuL29yJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoIH0gZnJvbSAnLi9vYmplY3QvcGF0aCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGljayB9IGZyb20gJy4vb2JqZWN0L3BpY2snXG5leHBvcnQgeyBkZWZhdWx0IGFzIHByb3AgfSBmcm9tICcuL29iamVjdC9wcm9wJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdW0gfSBmcm9tICcuL251bWJlci9zdW0nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFQgfSBmcm9tICcuL2Jvb2xlYW4vVCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9EYXkgfSBmcm9tICcuL2RhdGUvdG9EYXknXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvSG91ciB9IGZyb20gJy4vZGF0ZS90b0hvdXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvTWludXRlcyB9IGZyb20gJy4vZGF0ZS90b01pbnV0ZXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvU2Vjb25kcyB9IGZyb20gJy4vZGF0ZS90b1NlY29uZHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRydXRoeSB9IGZyb20gJy4vdHJ1dGh5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0eXBlIH0gZnJvbSAnLi90eXBlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmlvbiB9IGZyb20gJy4vYXJyYXkvdW5pb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIHZhbHVlcyB9IGZyb20gJy4vb2JqZWN0L3ZhbHVlcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgemlwIH0gZnJvbSAnLi96aXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHppcFdpdGggfSBmcm9tICcuL3ppcFdpdGgnXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBpc1xuICogQGRlc2NyaXB0aW9uIFZlcmlmaWVzIHRoZSB0eXBlIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudFxuICpcbiAqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaXMgKEN0b3IsIHZhbCkge1xuICByZXR1cm4gdHlwZSh2YWwpID09PSBDdG9yXG59KVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBlbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGVtcHR5IGVxdWl2YWxlbnQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKi9cbmltcG9ydCBlbXB0eSBmcm9tICcuL2VtcHR5J1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuL2V4aXN0cydcbmltcG9ydCBlcXVhbHMgZnJvbSAnLi9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRW1wdHkgKHgpIHtcbiAgcmV0dXJuIGV4aXN0cyh4KSAmJiBlcXVhbHMoeCwgZW1wdHkoeCkpXG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5jb25zdCBpc0Z1bmN0aW9uID0gaXMoJ0Z1bmN0aW9uJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJdGVyIChpdGVyKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSlcbn1cbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIEl0ZXJhdG9yIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjNcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhdG9yfSBhXG4gKiBAcmV0dXJuIHtJdGVyYXRvcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYWxsYmFjaywgaXRlcmF0b3IpIHtcbiAgbGV0IHIgPSBbXVxuICBmb3IgKGxldCBuZXh0VmFsdWUgPSBpdGVyYXRvci5uZXh0KCk7IG5leHRWYWx1ZS5kb25lICE9PSB0cnVlOyBuZXh0VmFsdWUgPSBpdGVyYXRvci5uZXh0KCkpIHtcbiAgICByLnB1c2goY2FsbGJhY2soaXRlcmF0b3IudmFsdWUoKSkpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIGtleXMgb2YgdGhlIHByb3ZpZGVkIG9iamVjdCBvciBpdGVyYXRvclxuICpcbiAqIEBmdW5jdGlvbiBrZXlzXG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyB0aGUga2V5cyBvZiB0aGUgcHJvdmlkZWQgb2JqZWN0IG9yIGl0ZXJhdG9yXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIG9iaiAtPiBbKl1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBPYmogZnJvbSB6aGljaCB0byB0YWtlIHRoZSBrZXlzXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IG9iamVjdEtleXMgZnJvbSAnLi9vYmplY3Qva2V5cydcbmltcG9ydCBtYXBLZXlzIGZyb20gJy4vbWFwL2tleXMnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAob2JqKSB7XG4gIHN3aXRjaCAodHlwZShvYmopKSB7XG4gICAgY2FzZSAnTWFwJzpcbiAgICAgIHJldHVybiBtYXBLZXlzKG9iailcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG9iamVjdEtleXMob2JqKVxuICB9XG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gbGFzdFxuICogQHBhcmFtIFthXVxuICogQHJldHVybiBhIHwgdW5kZWZpbmVkXG4gKi9cbmltcG9ydCBjdXJyeTEgZnJvbSAnLi9fcHJpdmF0ZS9jdXJyeTEnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5MShmdW5jdGlvbiBsYXN0IChhKSB7XG4gIHJldHVybiBhICYmIGEubGVuZ3RoID8gYVthLmxlbmd0aCAtIDFdIDogdW5kZWZpbmVkXG59KVxuIiwiLyoqXG4gKiBcImxpZnRzXCIgYSBmdW5jdGlvbiBvZiBhcml0eSA+IDEgc28gdGhhdCBpdCBtYXkgXCJtYXAgb3ZlclwiIGEgbGlzdCwgRnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb24gbGlmdFxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoKi4uLiAtPiAqKSAtPiAoWypdLi4uIC0+IFsqXSlcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcbmltcG9ydCBmb2xkIGZyb20gJy4vZm9sZCdcbmltcG9ydCBhcCBmcm9tICcuL2FwJ1xuaW1wb3J0IG1hcCBmcm9tICcuL21hcCdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbGlmdCAoZm4pIHtcbiAgY29uc3QgbGlmdGVkID0gY3VycnkxKGN1cnJ5KGZuKSlcbiAgcmV0dXJuIGN1cnJ5KGZ1bmN0aW9uIF9saWZ0ICgpIHtcbiAgICByZXR1cm4gZm9sZChhcCwgbWFwKGxpZnRlZCwgYXJndW1lbnRzWzBdKSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSlcbiAgfSlcbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBpdGVyYWJsZSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIHdoaWNoIG1hcHMgb3ZlciBhbiBpdGVyYWJsZS5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IGIgLT4gYlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlNYXAgZnJvbSAnLi9hcnJheS9tYXAnXG5pbXBvcnQgb2JqZWN0TWFwIGZyb20gJy4vb2JqZWN0L21hcCdcbmltcG9ydCBtYXBNYXAgZnJvbSAnLi9tYXAvbWFwJ1xuaW1wb3J0IHN0cmluZ01hcCBmcm9tICcuL3N0cmluZy9tYXAnXG5pbXBvcnQgaXRlcmF0b3JNYXAgZnJvbSAnLi9pdGVyYXRvci9tYXAnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5pbXBvcnQgaXNJdGVyYXRvciBmcm9tICcuL2l0ZXJhdG9yL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIHN3aXRjaCAodHlwZShhKSkge1xuICAgIGNhc2UgJ0Z1bmN0aW9uJzpcbiAgICAgIHJldHVybiBjdXJyeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYi5jYWxsKHRoaXMsIGEuYXBwbHkodGhpcywgYXJndW1lbnRzKSlcbiAgICAgIH0pXG4gICAgY2FzZSAnT2JqZWN0JzpcbiAgICAgIHJldHVybiBvYmplY3RNYXAoY2IsIGEpXG4gICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgIHJldHVybiBzdHJpbmdNYXAoY2IsIGEpXG4gICAgY2FzZSAnTWFwJzpcbiAgICAgIHJldHVybiBtYXBNYXAoY2IsIGEpXG4gICAgY2FzZSAnQXJyYXknOlxuICAgICAgcmV0dXJuIGFycmF5TWFwKGNiLCBhKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNJdGVyYXRvcihhKVxuICAgICAgICA/IGl0ZXJhdG9yTWFwKGNiLCBhKVxuICAgICAgICA6IGFycmF5TWFwKGNiLCBhKVxuICB9XG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gbWFwRmlsdGVyXG4gKiBAcHJpdmF0ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXBGaWx0ZXIgKGZuLCBtKSB7XG4gIGxldCByID0gbmV3IE1hcCgpXG5cbiAgbGV0IGl0ID0gbS5lbnRyaWVzKClcbiAgbGV0IHJlc3VsdCA9IGl0Lm5leHQoKVxuXG4gIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICBjb25zdCBrID0gcmVzdWx0LnZhbHVlWzBdXG4gICAgY29uc3QgdiA9IHJlc3VsdC52YWx1ZVsxXVxuICAgIGlmIChmbihrLCB2KSkgci5zZXQoaywgdilcbiAgICByZXN1bHQgPSBpdC5uZXh0KClcbiAgfVxuXG4gIC8vIExpbWl0ZWQgYnJvd3NlciBzdXBwb3J0XG4gIC8vIG0uZm9yRWFjaCgodiwgaykgPT4ge1xuICAvLyAgIGlmIChmbihrLCB2KSkgci5zZXQoaywgdilcbiAgLy8gfSlcblxuICAvLyBiYWJlbCB0cmFuc3BpbGUgaXNzdWVzXG4gIC8vIGZvciAoY29uc3QgW2ssIHZdIG9mIG0uZW50cmllcygpKSB7XG4gIC8vXG4gIC8vIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ01hcCcpXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIG93biBrZXlzIG9mIGFuIE1hcCBhcyBhbiBBcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IFtiXVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24ga2V5cyAoYSkge1xuICByZXR1cm4gYS5rZXlzKClcbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhIE1hcCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtNYXB9IGFcbiAqIEByZXR1cm4ge01hcH1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBlbXB0eSBmcm9tICcuLi9lbXB0eSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBjb25zdCByID0gZW1wdHkoYSlcbiAgYS5mb3JFYWNoKCh2LCBrLCBtYXApID0+IHtcbiAgICByLnNldChrLCBjYih2LCBrLCBtYXApKVxuICB9KVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgbGFyZ2VzdCBvZiB0aGUgMiBhcmd1bWVudHMgcHJvdmlkZWRcbiAqXG4gKiBAZnVuY3Rpb24gbWF4XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybiB7Kn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXggKGEsIGIpIHtcbiAgcmV0dXJuIGIgPiBhID8gYiA6IGFcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBKdXN0XG4gKiBAcGFyYW0gdmFsXG4gKiBAcmV0dXJucyB7SnVzdH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5sZXQgSnVzdCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgdGhpcy5fdmFsdWUgPSB2YWxcbiAgcmV0dXJuIHRoaXNcbn1cblxuSnVzdC5wcm90b3R5cGUuaXNKdXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuSnVzdC5wcm90b3R5cGUuaXNOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgSnVzdFxuIiwiaW1wb3J0IEp1c3QgZnJvbSAnLi9KdXN0J1xuaW1wb3J0IE5vdGhpbmcgZnJvbSAnLi9Ob3RoaW5nJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBNYXliZVxuICogQHBhcmFtIHZhbFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmxldCBNYXliZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgdGhpcy5fX3ZhbHVlID0gdmFsXG59XG5cbk1heWJlLm9mID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgTWF5YmUpIHJldHVybiB2YWxcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBNYXliZSkge1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbFxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcmV0dXJuIG5ldyBNYXliZSh2YWwpXG59XG5cbk1heWJlLnByb3RvdHlwZS5nZXRPckVsc2UgPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gdGhpcy5pc05vdGhpbmcoKSA/IG4gOiB0aGlzLl9fdmFsdWVcbn1cblxuTWF5YmUucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gIGlmICh0aGlzLmlzTm90aGluZygpKSB7XG4gICAgcmV0dXJuIE1heWJlLm9mKG51bGwpXG4gIH1cbiAgcmV0dXJuIE1heWJlLm9mKGYodGhpcy5fX3ZhbHVlKSlcbn1cblxuTWF5YmUucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKG0pIHtcbiAgcmV0dXJuIG0ubWFwKHRoaXMuX192YWx1ZSlcbn1cblxuTWF5YmUucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICh0aGlzLl9fdmFsdWUgPT0gbnVsbClcbn1cblxuTWF5YmUucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICF0aGlzLmlzTm90aGluZygpXG59XG5cbk1heWJlLnByb3RvdHlwZS5Ob3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IE5vdGhpbmcoKVxufVxuXG5NYXliZS5wcm90b3R5cGUuSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBKdXN0KHRoaXMuX3ZhbHVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXliZVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gTm90aGluZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmxldCBOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xufVxuXG5Ob3RoaW5nLnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmYWxzZVxufVxuTm90aGluZy5wcm90b3R5cGUuaXNOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RoaW5nXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBub3RcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG5vdCAoeCkge1xuICByZXR1cm4gIXhcbn0pXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAzLzAyLzIwMTlcbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnbnVsbCcpXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgMiBhcmd1bWVudHNcbiAqXG4gKiBAZnVuY3Rpb24gYWRkXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgc3VtIG9mIHRoZSAyIGFyZ3VtZW50c1xuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkZCAoYSwgYikge1xuICByZXR1cm4gK2EgKyArYlxufSlcbiIsIi8qKlxuICpcbiAqXG4gKiBAZnVuY3Rpb24gZGl2aWRlXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZGl2aXNpb24gb2YgdGhlIDIgYXJndW1lbnRzXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxuICogQHBhcmFtIHtOdW1iZXJ9IGJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZGl2aWRlIChhLCBiKSB7XG4gIHJldHVybiArYSAvICtiXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdOdW1iZXInKVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gaXNOYU5cbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgbnVtYmVyIGlzIE5BTlxuXG4gKi9cbmltcG9ydCBpc051bWJlciBmcm9tICcuL2lzJ1xuaW1wb3J0IGFuZCBmcm9tICcuLi9hbmQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTmFuICh4KSB7XG4gIHJldHVybiBhbmQoaXNOdW1iZXIoeCksIGlzTmFOKHgpKVxufTtcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgcHJvZHVjdCBvZiB0aGUgMiBhcmd1bWVudHNcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXG4gKiBAcGFyYW0ge051bWJlcn0gYlxuICogQHJldHVybiB7TnVtYmVyfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtdWx0aXBseSAoYSwgYikge1xuICByZXR1cm4gK2EgKiArYlxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSBudW1iZXJzIGluIGFuIGFycmF5XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIFtOdW1iZXJdIC0+IE51bWJlclxuICogQHBhcmFtIHtBcnJheX0gYVxuICogQHJldHVybiB7TnVtYmVyfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGFkZCBmcm9tICcuL2FkZCdcbmltcG9ydCBmb2xkIGZyb20gJy4uL2ZvbGQnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHN1bSAoYSkge1xuICByZXR1cm4gZm9sZChhZGQsIDAsIGEpXG59KVxuIiwiLyoqXG5cbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4uL2V4aXN0cydcbmltcG9ydCBub3QgZnJvbSAnLi4vbm90J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KCh4LCB5KSA9PiB7XG4gIGZvciAobGV0IGtleVggaW4geCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3BcbiAgICBpZiAobm90KGVxdWFscyh4W2tleVhdLCB5W2tleVhdKSkpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZm9yIChsZXQga2V5WSBpbiB5KSB7XG4gICAgaWYgKG5vdChleGlzdHMoeFtrZXlZXSkpICYmIGV4aXN0cyh5W2tleVldKSkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG9iamVjdEZpbHRlclxuICogQHByaXZhdGVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gb2JqZWN0RmlsdGVyIChmbiwgbykge1xuICBsZXQgciA9IHt9XG4gIGNvbnN0IGsgPSBrZXlzKG8pXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykge1xuICAgIGlmIChmbihvW2tbaV1dKSkgcltrW2ldXSA9IG9ba1tpXV1cbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBwcml2YXRlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBvKSB7XG4gIGNvbnN0IGsgPSBrZXlzKG8pXG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGsubGVuZ3RoXG4gIGxldCByID0gT2JqZWN0KGluaXQpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciA9IGNiKHIsIG9ba1tpXV0sIGtbaV0sIG8pXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyB7U3RyaW5nfSAtPiB7T2JqZWN0fSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcFxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaGFzIChwcm9wLCBvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHksIGV2ZW4gaWYgaXQgaXMgaW5oZXJpdGVkXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIHtTdHJpbmd9IC0+IHtPYmplY3R9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBoYXNJbiAocHJvcCwgb2JqKSB7XG4gIHJldHVybiBwcm9wIGluIG9ialxufSlcbiIsIi8qKlxuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ09iamVjdCcpXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIG93biBrZXlzIG9mIGFuIG9iamVjdCBhcyBhbiBBcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IFtiXVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24ga2V5cyAoYSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoT2JqZWN0KGEpKVxufSlcbiIsIi8qKlxuICogUmV0dXJucyBhbGwgdGhlIGtleXMgb2YgYW4gb2JqZWN0IGFzIGFuIEFycmF5XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gW2JdXG4gKiBAcGFyYW0ge09iamVjdH1cbiAqIEByZXR1cm4ge0FycmF5fVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XG4gIGNvbnN0IHIgPSBbXVxuICBmb3IgKGNvbnN0IGsgaW4gYSkge1xuICAgIHIucHVzaChrKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHJldHVybiB7T2JqZWN0fVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4uL2VtcHR5J1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGNvbnN0IGsgPSBrZXlzKGEpXG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGsubGVuZ3RoXG4gIGNvbnN0IHIgPSBlbXB0eShhKVxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHJba1tpXV0gPSBjYihhW2tbaV1dLCBrW2ldLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG5cbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4uL2lkZW50aWNhbCdcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9vYmplY3QvaXMnXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi9hcnJheS9pcydcbmltcG9ydCB1bmlvbiBmcm9tICcuLi9hcnJheS91bmlvbidcblxuY29uc3QgbWVyZ2UgPSBjdXJyeSgob2JqTCwgb2JqUikgPT4ge1xuICBsZXQgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqTClcblxuICBpZiAoaWRlbnRpY2FsKG9iakwsIG9ialIpKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG9iakwpXG4gIH1cbiAgZm9yIChsZXQga2V5IGluIG9ialIpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpSLCBrZXkpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBjb25zdCBvbGRWYWx1ZSA9IG9ialJba2V5XVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gb2JqTFtrZXldXG5cbiAgICBpZiAoaXNPYmplY3Qob2xkVmFsdWUpICYmIGlzT2JqZWN0KG5ld1ZhbHVlKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShvbGRWYWx1ZSwgbmV3VmFsdWUpXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG5ld1ZhbHVlKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB1bmlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2xkVmFsdWUgLy8gVE9ETzogdGhpcyBpcyBhIHJlZmVyZW5jZSwgc2hvdWxkIGJlIGNsb25lXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlXG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKG9iaiwgbmFtZXMpID0+IHtcbiAgbGV0IHJlc3VsdCA9IHt9XG5cbiAgT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgIHJldHVybiBuYW1lcy5pbmRleE9mKGtleSkgPT09IC0xXG4gIH0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHBhdGhcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBwYXRoIChwYXRoLCBvYmopIHtcbiAgbGV0IHZhbCA9IG9ialxuICBsZXQgaWR4ID0gMFxuICBsZXQgcFxuICB3aGlsZSAoaWR4IDwgcGF0aC5sZW5ndGgpIHtcbiAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBwID0gcGF0aFtpZHhdXG4gICAgdmFsID0gTnVtYmVyLmlzSW50ZWdlcihwKVxuICAgICAgPyBwIDwgMCA/IHZhbFt2YWwubGVuZ3RoICsgcF0gOiB2YWxbcF1cbiAgICAgIDogdmFsW3BdXG4gICAgaWR4ICs9IDFcbiAgfVxuICByZXR1cm4gdmFsXG59KVxuLy8gbGV0IHIgPSBvYmpcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuLy8gICBpZiAociA9PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkXG4vLyAgIHIgPSByW3BhdGhbaV1dXG4vLyB9XG4vLyByZXR1cm4gclxuLy8gfSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHBpY2tcbiAqIEBkZXNjcmlwdGlvbiByZXR1cm5zIGEgbmV3IGJqZWN0IHdpdGggb25seSB0aGUgcHJvcHMgdGhhdCBhcmUgcHJvdmlkZWRcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIC0gQXJyYXkgb2YgcHJvcGVydHkgbmFtZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBUaGUgb2JqZWN0IGZyb20gd2hpY2ggdG8gdGFrZSB0aGUgcHJvcGVydGllc1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHBpY2sgKHByb3BzLCBvYmopIHtcbiAgY29uc3QgciA9IHt9XG4gIGxldCBpID0gMFxuICB3aGlsZSAoaSA8IHByb3BzLmxlbmd0aCkge1xuICAgIGlmIChwcm9wc1tpXSBpbiBvYmopIHtcbiAgICAgIHJbcHJvcHNbaV1dID0gb2JqW3Byb3BzW2ldXVxuICAgIH1cbiAgICBpICs9IDFcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHByb3BcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBwcm9wIChwLCBvYmopIHtcbiAgcmV0dXJuIG9ialtwXVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHZhbHVlc1xuICogQGRlc2NyaXB0aW9uIFJFdHVybnMgYSBsaXN0IG9mIHZhbHVlcyB0YWtlbiBmcm9tIGFuIG9iamVjdHMgb3duIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7b2JqZWN0fSAtIG9iaiBUaGUgb2JqZWN0IGZyb20gd2hpY2ggdG8gdGFrZSB0aGUgdmFsdWVzXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqXG4gKiovXG5pbXBvcnQgY3VycnkxIGZyb20gJy4uL19wcml2YXRlL2N1cnJ5MSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkxKGZ1bmN0aW9uIHZhbHVlcyAob2JqKSB7XG4gIGNvbnN0IGsgPSBrZXlzKG9iailcbiAgY29uc3QgbCA9IGsubGVuZ3RoXG4gIGNvbnN0IHIgPSBbXVxuICBsZXQgaSA9IDBcbiAgd2hpbGUgKGkgPCBsKSB7XG4gICAgcltpXSA9IG9ialtrW2ldXVxuICAgIGkgKz0gMVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gb3JcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgaWYgb25lIG9yIHRoZSBvdGhlciBpcyB0cnVlXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBvciAoeCwgeSkge1xuICByZXR1cm4geCB8fCB5XG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdTZXQnKVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIHN0cmluZ0NvbmNhdFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmNhdCAoYSwgYikgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xuICByZXR1cm4gU3RyaW5nKGEpICsgU3RyaW5nKGIpXG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXG4gKi9cbmltcG9ydCB0b0FycmF5IGZyb20gJy4uL2FycmF5L3RvJ1xuaW1wb3J0IG5vdCBmcm9tICcuLi9ub3QnXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFN0cmluZyAoc3RyKSB7IC8vIHVzZSBmdW5jdGlvbigpLCBhcnJvdyBmdW5jdGlvbiBkb2Vzbid0IGJpbmQgYXJndW1lbnRzXG4gIGxldCBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpXG5cbiAgYXJncy5zaGlmdCgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgveyhcXGQrKX0vZywgKG1hdGNoLCBpZHgpID0+IHtcbiAgICByZXR1cm4gbm90KGlzKCdVbmRlZmluZWQnLCBhcmdzW2lkeF0pKSA/IGFyZ3NbaWR4XSA6IG1hdGNoXG4gIH0pXG59XG4iLCIvKipcblxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdTdHJpbmcnKVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYSBzdHJpbmcgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGxldCByID0gJydcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByICs9IGNiKGEuY2hhckF0KGkpLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdHJ1dGh5XG4gKi9cbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRydXRoeSAoeCkge1xuICByZXR1cm4gKHggIT09IGZhbHNlKSAmJiBleGlzdHMoeClcbn07XG4iLCIvKipcbiAqIEBmdW5jdGlvbiB0eXBlXG4gKi9cbmltcG9ydCBjdXJyeTEgZnJvbSAnLi9fcHJpdmF0ZS9jdXJyeTEnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5MShmdW5jdGlvbiB0eXBlICh4KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkuc2xpY2UoOCwgLTEpXG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMy8wMi8yMDE5XG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ3VuZGVmaW5lZCcpXG4iLCIvKipcblxuICogemlwXG4gKlxuICogQGZ1bmN0aW9uIHppcFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCB6aXBXaXRoIGZyb20gJy4vemlwV2l0aCdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gemlwIChhLCBiKSB7XG4gIHJldHVybiB6aXBXaXRoKGZ1bmN0aW9uIF96aXBXaXRoICh4LCB5KSB7IHJldHVybiBbeCwgeV0gfSwgYSwgYilcbn0pXG4iLCIvKipcblxuICogemlwV2l0aFxuICpcbiAqICBAZnVuY3Rpb24gemlwV2l0aFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gemlwV2l0aCAoY2IsIGEsIGIpIHtcbiAgY29uc3QgYXJyID0gW11cbiAgY29uc3QgbGVuID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKVxuICBsZXQgaSA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyLnB1c2goY2IoYVtpXSwgYltpXSkpXG4gIH1cbiAgcmV0dXJuIGFyclxufSlcbiIsImltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcbmltcG9ydCBmb2xkIGZyb20gJ2Z1bi5qcy9zcmMvZm9sZCdcbmltcG9ydCBlcXVhbHMgZnJvbSAnZnVuLmpzL3NyYy9lcXVhbHMnXG5pbXBvcnQgY29uY2F0IGZyb20gJ3V0aWwvY29uY2F0J1xuaW1wb3J0IGVtcHR5IGZyb20gJ3V0aWwvZW1wdHknXG5pbXBvcnQgZG90IGZyb20gJ3V0aWwvZG90J1xuaW1wb3J0IGlkZW50aXR5IGZyb20gJ3V0aWwvaWRlbnRpdHknXG5pbXBvcnQgdHJhbnNwb3NlIGZyb20gJ3V0aWwvdHJhbnNwb3NlJ1xuaW1wb3J0IGdlbmVyYXRlIGZyb20gJ3V0aWwvZ2VuZXJhdGUnXG5pbXBvcnQgZ3B1bWFwIGZyb20gJ3V0aWwvZ3B1bWFwJ1xuaW1wb3J0IGdwdWZvbGQgZnJvbSAndXRpbC9ncHVmb2xkJ1xuaW1wb3J0IGdwdXByb2R1Y3QgZnJvbSAndXRpbC9ncHVwcm9kdWN0J1xuXG4vKipcbiAqIEBjbGFzcyBNYXRyaXhcbiAqIEBjbGFzc2Rlc2MgTWF0cml4IGFwcGxpY2F0aXZlIHByb3ZpZGluZyBzdGFuZGFyZCBtYXRyaXggb3BlcmF0aW9uc1xuICogQHN1bW1hcnkgVGhlIE1hdHJpeCBjbGFzcyBzaG91bGQgbm90IGJlIGluc3RhbnRpYXRlZCB3aXRoIHRoZSBuZXcga2V5d29yZC4gSW5zdGVhZCB1c2UgdGhlIE1hdHJpeC5vZiBzeW50YXggdG8gY3JlYXRlIGEgbmV3IE1hdHJpeC4gVW5mb3J0dW5hdGx5IGpzZG9jcyBkb2VzIG5vdCBhbGxvdyBmb3IgdGhlIGNvbnN0cnVjdG9yIHRvIGJlIGhpZGRlbi5cbiAqIEBoaWRlY29udHJ1Y3RvclxuICogQHNlZSBvZlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICpcbiAqL1xubGV0IE1hdHJpeCA9IGZ1bmN0aW9uICh2YWwsIEdQVUpTKSB7XG4gIHRoaXMuX192YWx1ZSA9IHZhbFxuICBpZiAoR1BVSlMpIHtcbiAgICB0aGlzLmdwdWpzID0gR1BVSlMgPyBuZXcgR1BVSlMoKSA6IG51bGxcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBvZlxuICogQGRlc2MgQ3JlYXRlcyBhIE1hdHJpeCBvYmplY3QgYW5kIGZsYXR0ZW5zIHRoZSBNYXRyaXhcbiAqIEBwYXJhbSB2YWwge2FycmF5fGZ1bmN0aW9ufSBBbiBhcnJheSBvZiBhcnJheXNcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKlxuICovXG5NYXRyaXgub2YgPSBmdW5jdGlvbiAodmFsLCBHUFVKUyA9IG51bGwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIE1hdHJpeCkgcmV0dXJuIHZhbFxuICBpZiAodGhpcyBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbFxuICAgIHRoaXMuZ3B1anMgPSBHUFVKU1xuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcmV0dXJuIG5ldyBNYXRyaXgodmFsLCBHUFVKUylcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZVxuICogQHR5cGUge3N0cmluZ31cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0udHlwZSA9PT0gJ01hdHJpeCdcbiAqL1xuTWF0cml4LnByb3RvdHlwZS50eXBlID0gJ01hdHJpeCdcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAcHJvcGVydHkge09iamVjdH0gZ3B1XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmdwdSA9IHt9XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHByZWNpc2lvblxuICogQHR5cGUge251bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0ucHJlY2lzaW9uID09PSA0XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucHJlY2lzaW9uID0gNFxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBzZXRQcmVjaXNpb25cbiAqIEBwYXJhbSBwcmVjaXNpb24ge251bWJlcn0gU2V0IHRoZSBudW1iZXIgb2YgZGVjaW1hbHMgZm9yIHJvdW5kaW5nXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKiBtLnNldFByZWNpc2lvbigxMClcbiAqIG0ucHJlY2lzaW9uID09PSAxMFxuICovXG5NYXRyaXgucHJvdG90eXBlLnNldFByZWNpc2lvbiA9IGZ1bmN0aW9uIChwcmVjaXNpb24pIHtcbiAgdGhpcy5wcmVjaXNpb24gPSBwcmVjaXNpb25cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgaXNTeW1tZXRyaWNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiB0cnVlID09PSBBLmlzU3ltbWV0cmljKClcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaXNTeW1tZXRyaWMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGEgPSB0aGlzLl9fdmFsdWVcbiAgY29uc3QgYiA9IE1hdHJpeC50cmFuc3Bvc2UodGhpcykuX192YWx1ZVxuICByZXR1cm4gZXF1YWxzKGEsIGIpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGlzU3F1YXJlXG4gKiBAZGVzYyBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGNvbnRhaW5zIGEgc3F1YXJlIE1hdHJpeFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIHRydWUgPT09IEEuaXNTcXVhcmUoKVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pc1NxdWFyZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGVxdWFscyh0aGlzLmdldENvbHMoKSwgdGhpcy5nZXRSb3dzKCkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGlzT3J0aG9nb25hbFxuICogQHBhcmFtIE0ge01hdHJpeHxhcnJheX1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBbWy0wLjMwOTIsIC0wLjk1MTBdLCBbLTAuOTUxMCwgMC4zMDkyXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXguZnJvbUFycmF5KHJlc3VsdClcbiAqIHRydWUgID09PSBBLmlzT3J0aG9nb25hbCgpXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaXNPcnRob2dvbmFsID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBeEF0ID0gdGhpcy5kb3QodGhpcy50cmFuc3Bvc2UoKSlcbiAgY29uc3QgSSA9IHRoaXMuaWRlbnRpdHkoKVxuICByZXR1cm4gZXF1YWxzKEF4QXQsIEkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGdldENvbHNcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0Q29scygpICA9PT0gMlxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5nZXRDb2xzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3ZhbHVlWzBdLmxlbmd0aFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBlcXVhbHNcbiAqIEBwYXJhbSBNIHtNYXRyaXh8YXJyYXl9XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGEgPSBbWzEsIDFdLCBbMSwgMV1dXG4gKiB2YXIgQSA9IE1hdHJpeC5vZihhKVxuICogdmFyIEIgPSBNYXRyaXgub2YoYSlcbiAqIHRydWUgID09PSBBLmVxdWFscyhCKVxuICovXG5NYXRyaXgucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBlcXVhbHModGhpcy5fX3ZhbHVlLCBNLl9fdmFsdWUgfHwgTSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZ2V0Um93c1xuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogQS5nZXRSb3dzKCkgIC8vIDJcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5nZXRSb3dzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3ZhbHVlLmxlbmd0aFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBnZXRTaGFwZVxuICogQHJldHVybnMge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiBBLmdldFNoYXBlKCkgIC8vIFsyLCAyXVxuICovXG5NYXRyaXgucHJvdG90eXBlLmdldFNoYXBlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW3RoaXMuZ2V0Um93cygpLCB0aGlzLmdldENvbHMoKV1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgbWFwXG4gKiBAZGVzY3JpcHRpb24gTWFwcyBvdmVyIHRoZSByb3dzIG9mIHRoZSBtYXRyaXggdXNpbmcgYSBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIG0ubWFwKHggPT4geC5tYXAoeSA9PiB5KyAxKSlcbiAqIC8vIFtbMiwgMl0sIFsyLCAyXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihtYXAoZikodGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gbWFwXG4gKiBAZGVzY3JpcHRpb24gU3RhdGljIGZ1bmN0aW9uIHRoYXQgbWFwcyBvdmVyIHRoZSByb3dzIG9mIHRoZSBtYXRyaXggdXNpbmcgYSBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSBNIHtNYXRyaXh8YXJyYXl9IE1hdHJpeCBvciBhcnJheSB0byBtYXBcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSBNYXRyaXgubWFwKHg9ID4geC5tYXAoeSA9PiB5KyAxKSwgW1sxLCAxXSwgWzEsIDFdXSlcbiAqIC8vIFtbMiwgMl0sIFsyLCAyXV1cbiAqXG4gKi9cbk1hdHJpeC5tYXAgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLm1hcChmKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZm9sZFxuICogQGRlc2NyaXB0aW9uIFJlZHVjZSB0aGUgbWF0cml4IHJvd3MgdXNpbmcgYSByZWR1Y2UgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQSByZWR1Y2UvZm9sZCBmdW5jdGlvblxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gRmxhdHRlbiBNYXRyaXhcbiAqIE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKS5mb2xkKChwcmV2LCBuZXh0KSA9PiBwcmV2LmNvbmNhdChuZXh0KSlcbiAqIC8vIFsxLCAxLCAxLCAxXVxuICovXG5NYXRyaXgucHJvdG90eXBlLmZvbGQgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gTWF0cml4Lm9mKGZvbGQoZiwgW10pKHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgZnVuY3Rpb24gdG8gcmVkdWNlIHRoZSBtYXRyaXggcm93cyB1c2luZyBhIHJlZHVjZSBmdW5jdGlvblxuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBBIHJlZHVjZS9mb2xkIGZ1bmN0aW9uXG4gKiBAcGFyYW0gTSB7TWF0cml4fSBUaGUgTWF0cml4IHRvIHJlZHVjZVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG5cbiAqIC8vIFN1bSBvZiBhbGwgbWF0cml4IHZhbHVlc1xuICogY29uc3QgcmVkdWNlciA9IChwcmV2LCBuZXh0KSA9PiBOdW1iZXIocHJldikgKyBuZXh0LnJlZHVjZSgoYWNjLCB4KSA9PiBhY2MgKyB4LCAwKVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dXG4gKiBNYXRyaXguZm9sZChyZWR1Y2VyLCBBKVxuICogLy8gNFxuICovXG5NYXRyaXguZm9sZCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkuZm9sZChmKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgYXBcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWVzIGEgTWF0cml4IHRvIGEgZnVuY3Rpb25cbiAqIEBwYXJhbSBNIHtNYXRyaXh9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBmID0geCA9PiB4LnJlZHVjZSgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMiwgM10sIFs0LCA1LCA2XSwgWzcsIDgsIDldXSlcbiAqIE1hdHJpeC5vZihmKS5hcChNKVxuICogLy8gW1s2XSwgWzE1XSwgWzI0XVxuICovXG5NYXRyaXgucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5tYXAodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBhcFxuICogQGRlc2NyaXB0aW9uIEFwcGxpZXMgYSBNYXRyaXggdG8gYSBmdW5jdGlvblxuICogQHBhcmFtIGYge2Z1bmN0aW9ufVxuICogQHBhcmFtIE0ge01hdHJpeHxhcnJheX1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGYgPSB4ID0+IHgucmVkdWNlKChwcmV2LCBuZXh0KSA9PiBwcmV2ICsgbmV4dClcbiAqIE1hdHJpeC5hcChmLCBbWzEsIDIsIDNdLCBbNCwgNSwgNl0sIFs3LCA4LCA5XV0pXG4gKiAvLyBbWzZdLCBbMTVdLCBbMjRdXG4gKi9cbk1hdHJpeC5hcCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZikuYXAoTSlcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGNvbmNhdFxuICogQGRlc2NyaXB0aW9uIENvbmNhdGVuYXRlcyAyIE1hdHJpY2VzIHVzaW5nIGEgZnVuY3Rpb24gYXMgb3BlcmF0b3JcbiAqIEBwYXJhbSBNIHtNYXRyaXh9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1swLCAxLCAxXSwgWzIsIDMsIDRdXVxuICogY29uc3QgYiA9IFtbMiwgMiwgMl0sIFszLCAzLCAzXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqIGNvbnN0IE0gPSBBLmNvbmNhdChCKVxuICogLy8gW1swLCAxLCAxLCAyLCAyLCAyXSwgWzIsIDMsIDQsIDMsIDMsIDNdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAoTSwgZiA9IGNvbmNhdCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChmKE0pKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBjb25jYXRcbiAqIEBkZXNjcmlwdGlvbiBDb25jYXRlbmF0ZXMgMiBNYXRyaWNlcyB1c2luZyBhIGZ1bmN0aW9uIGFzIG9wZXJhdG9yXG4gKiBAcGFyYW0gQSB7TWF0cml4fVxuICogQHBhcmFtIEIge01hdHJpeH1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbWzAsIDEsIDFdLCBbMiwgMywgNF1dXG4gKiBjb25zdCBiID0gW1syLCAyLCAyXSwgWzMsIDMsIDNdXVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihiKVxuICogY29uc3QgTSA9IE1hdHJpeC5jb25jYXQoQSwgQilcbiAqIC8vIFtbMCwgMSwgMSwgMiwgMiwgMl0sIFsyLCAzLCA0LCAzLCAzLCAzXV1cbiAqXG4gKi9cbk1hdHJpeC5jb25jYXQgPSBjdXJyeShmdW5jdGlvbiAoQSwgQiwgZiA9IGNvbmNhdCkge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLm1hcChmKEIpKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm4gYW4gZW1wdHkgTWF0cml4IGZyb20gYW4gZXhpc3RpbmcgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChlbXB0eSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm4gYW4gZW1wdHkgTWF0cml4IGZyb20gYW4gZXhpc3RpbmcgTWF0cml4XG4gKiBAcGFyYW0gcm93cyB7bnVtYmVyfVxuICogQHBhcmFtIGNvbHMge251bWJlcn1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5lbXB0eSA9IGN1cnJ5KGZ1bmN0aW9uIChyb3dzID0gMCwgY29scyA9IDApIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpIC8vIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4gIHJldHVybiBNYXRyaXgub2YobSkubWFwKGVtcHR5KVxufSlcblxuLy8gIyMjIyAjIyMjICMjIyMgLy9cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgaWRlbnRpdHlcbiAqIEBkZXNjIFJldHVybnMgYW4gaWRlbnRpdHkgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1sxLCAyLCAzXSwgWzQsIDUsIDZdXVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQWlkZW50aXR5ID0gQS5pZGVudGl0eSgpXG4gKiAvLyBbWzEsIDAsIDBdLCBbMCwgMSwgMF1dXG4gKlxuKi9cbk1hdHJpeC5wcm90b3R5cGUuaWRlbnRpdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YoaWRlbnRpdHkpLmFwKHRoaXMpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIGlkZW50aXR5XG4gKiBAZGVzYyBSZXR1cm5zIGFuIGlkZW50aXR5IG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5pZGVudGl0eSgzLCAyKVxuICogLy8gW1sxLCAwLCAwXSwgWzAsIDEsIDBdXVxuICpcbiAqL1xuTWF0cml4LmlkZW50aXR5ID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpIC8vIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4gIHJldHVybiBNYXRyaXgub2YoaWRlbnRpdHkpLmFwKG0pXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGNvbWJpbmVcbiAqIEBzZWUgTWF0cml4LmNvbmNhdFxuICogQHBhcmFtIE1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY29tYmluZSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuY29uY2F0KE1hdHJpeC5vZihNKSwgY29uY2F0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBjb21iaW5lXG4gKiBAc2VlIE1hdHJpeC5jb25jYXRcbiAqIEBwYXJhbSBNXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXguY29tYmluZSA9IGZ1bmN0aW9uIChBLCBCKSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkuY29uY2F0KE1hdHJpeC5vZihCKSwgY29uY2F0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBkb3RcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuIDIgbWF0cmljZXNcbiAqIEBwYXJhbSBNXG4gKiBAcGFyYW0gZlxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQ3JlYXRlIG1hdHJpeFxuICogY29uc3QgbSA9IE1hdHJpeC5vZihbWzEsIDJdLCBbMywgNF1dKVxuICpcbiAqIC8vIEdlbmVyYXRlIGlkZW50aXR5IG1hdHJpeFxuICogY29uc3QgSSAgPSBtLmlkZW50aXR5KCkgLy8gW1sxLCAwXSwgWzAsIDFdXVxuICpcbiAqIGlmKG0uZG90KEkpLmVxdWFscyhtKSkge1xuICogICAgY29uc29sZS5sb2coJ0RvdCBwcm9kdWN0IHdpdGggaWRlbnRpdHkgbWF0cml4IHJldHVybnMgdGhlIHNhbWUgbWF0cml4JylcbiAqIH1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5jb25jYXQoTWF0cml4Lm9mKE0pLCBkb3QodGhpcy5wcmVjaXNpb24pKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBkb3RcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuIDIgbWF0cmljZXNcbiAqIEBwYXJhbSBNXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGEgPSBbWzEsIDIsIDNdLCBbNCwgNSwgNl1dXG4gKiBjb25zdCBiID0gW1s3LCA4XSwgWzksIDEwXSwgWzExLCAxMl1dXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihiKVxuICpcbiAqIE1hdHJpeC5kb3QoQSwgQikgLy8gW1s1OCwgNjRdLCBbMTM5LCAxNTRdXVxuICpcbiAqL1xuTWF0cml4LmRvdCA9IGZ1bmN0aW9uIChBLCBCKSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkuZG90KE1hdHJpeC5vZihCKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgZmlsbFxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCB0aGUgcHJvdmlkZWQgbWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZlxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsMiwzXSwgWzMsMiwxXSwgWzQsNSw2XV0pLmZpbGwoeCA9PiA0MilcbiAqIC8vIFtbNDIsNDIsNDJdLCBbNDIsNDIsNDJdLCBbNDIsNDIsNDJdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tYXAobWFwKHggPT4gZih4KSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIHplcm9zXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHplcm9zXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsMiwzXSwgWzMsMiwxXSwgWzQsNSw2XV0pLnplcm9zKClcbiAqIC8vIFtbMCwwLDBdLCBbMCwwLDBdLCBbMCwwLDBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS56ZXJvcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKHggPT4gMClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gemVyb3NcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggemVyb3NcbiAqIEBwYXJhbSByb3dzIHtudW1iZXJ9IERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIGNvbHMge251bWJlcn0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lnplcm9zKDMsIDMpXG4gKiAvLyBbWzAsMCwwXSwgWzAsMCwwXSwgWzAsMCwwXV1cbiAqXG4gKi9cbk1hdHJpeC56ZXJvcyA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKVxuICByZXR1cm4gTWF0cml4Lm9mKG0pLmZpbGwoeCA9PiAwKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBvbmVzXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIG9uZXNcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLDIsM10sIFszLDIsMV0sIFs0LDUsNl1dKS5vbmVzKClcbiAqIC8vIFtbMSwxLDFdLCBbMSwxLDFdLCBbMSwxLDFdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5vbmVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoeCA9PiAxKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBvbmVzXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIG9uZXNcbiAqIEBwYXJhbSByb3dzIHtudW1iZXJ9IERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIGNvbHMge251bWJlcn0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9uZXMoMSwgMSlcbiAqIC8vIFtbMSwxLDFdLCBbMSwxLDFdLCBbMSwxLDFdXVxuICpcbiAqL1xuTWF0cml4Lm9uZXMgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKHggPT4gMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgcmFuZG9tXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHJhbmRvbSB2YWx1ZXNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmID0gZSA9PiBNYXRoLnJhbmRvbSgpICogMiAtIDFdXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJhbmRvbSA9IGZ1bmN0aW9uIChmID0gZSA9PiBNYXRoLnJhbmRvbSgpICogMiAtIDEpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKGYpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIHJhbmRvbVxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCByYW5kb20gbnVtYmVyc1xuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBGdW5jdGlvbiB3aGljaCByZXR1cm5zIHJhbmRvbSB2YWx1ZXMuIERlZmF1bHQgcmFuZG9tIHZhbHVlcyBhcmUgYmV0d2VlbiAtMSBhbmQgMVxuICogQHBhcmFtIHJvd3Mge251bWJlcn0gRGVmaW5lcyB0aGUgcm93cyBvZiB0aGUgbWF0cml4XG4gKiBAcGFyYW0gY29scyB7bnVtYmVyfSBEZWZpbmVzIHRoZSBjb2x1bW5zIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5yYW5kb20gPSBmdW5jdGlvbiAoZiA9IGUgPT4gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSksIHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpXG4gIHJldHVybiBNYXRyaXgub2YobSkuZmlsbChmKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciB0b0FycmF5XG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBhcnJheSBmcm9tIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3ZhbHVlLm1hcChyb3cgPT4gcm93Lm1hcChjb2wgPT4gY29sKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgY2xvbmVcbiAqIEBkZXNjIFJldHVybnMgYSBjbG9uZSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4LmZyb21BcnJheSh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGZyb21BcnJheVxuICogQGRlc2MgUmV0dXJucyBhIE1hdHJpeCBmcm9tIGFuIGFycmF5XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbk1hdHJpeC5mcm9tQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBNYXRyaXgub2YobWFwKHJvdyA9PiBtYXAoY29sID0+IGNvbCkocm93KSkoYXJyKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXIgdHJhbnNwb3NlXG4gKiBAZGVzYyBSZXR1cm5zIGEgdHJhbnNwb3NlZCBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoWy0xLCAyXSwgWzMsIDRdLCBbLTgsIDJdKVxuICogY29uc3QgYiA9IEEudHJhbnNwb3NlKCkudG9BcnJheSgpXG4gKiAvLyByZXR1cm5zIFtbLTEsIDMsLThdLCBbMiwgNCwgMl1dXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudHJhbnNwb3NlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKGZvbGQodHJhbnNwb3NlLCBbXSwgdGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gdHJhbnNwb3NlXG4gKiBAZGVzYyBSZXR1cm5zIGEgdHJhbnNwb3NlZCBNYXRyaXhcbiAqIEBwYXJhbSBNIHtNYXRyaXh8YXJyYXl9IEEgTWF0cml4IG9yIGEgbWF0cml4IGFycmF5XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gWy0xLCAyXSwgWzMsIDRdLCBbLTgsIDJdXG4gKiBjb25zdCBiID0gTWF0cml4LnRyYW5zcG9zZShhKS50b0FycmF5KClcbiAqIC8vIHJldHVybnMgW1stMSwgMywtOF0sIFsyLCA0LCAyXV1cbiAqL1xuTWF0cml4LnRyYW5zcG9zZSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkudHJhbnNwb3NlKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gYWRkXG4gKiBAaW5zdGFuY2VcbiAqIEBwYXJhbSBNIHtNYXRyaXh8bnVtYmVyfSBBZGQgYSBNYXRyaXggb3IgYSBudW1iZXJcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLmFkZCgxKSAvLyBbWzYsIDVdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIuYWRkKEIpIC8vIFtbMTAsIDEwXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKE0pIHtcbiAgaWYgKE0gaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgIT09IE0uZ2V0Q29scygpIHx8IHRoaXMuZ2V0Um93cygpICE9PSBNLmdldFJvd3MoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaWNlcyBkbyBub3QgbWF0Y2gsIGNhbm5vdCBhZGQnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAoKHJvdywgaWR4KSA9PiBtYXAoKHZhbCwgamR4KSA9PiB2YWwgKyBNLl9fdmFsdWVbaWR4XVtqZHhdKShyb3cpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm1hcChtYXAoeCA9PiB4ICsgTSkpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIHN1YnRyYWN0XG4gKiBAaW5zdGFuY2VcbiAqIEBwYXJhbSBNIHtNYXRyaXh8bnVtYmVyfSBTdWJ0cmFjdCBhIE1hdHJpeCBvciBhIG51bWJlclxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEuc3VidHJhY3QoMSkgLy8gW1s0LCAyXV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLnN1YnRyYWN0KEIpIC8vIFtbMCwgMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKE0pIHtcbiAgaWYgKE0gaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgIT09IE0uZ2V0Q29scygpIHx8IHRoaXMuZ2V0Um93cygpICE9PSBNLmdldFJvd3MoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaWNlcyBkbyBub3QgbWF0Y2gsIGNhbm5vdCBzdWJ0cmFjdCcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcCgocm93LCBpZHgpID0+IG1hcCgodmFsLCBqZHgpID0+IHZhbCAtIE0uX192YWx1ZVtpZHhdW2pkeF0pKHJvdykpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKG1hcCh4ID0+IHggLSBNKSlcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgbXVsdGlwbHlcbiAqIEBpbnN0YW5jZVxuICogQGRlc2MgTXV0bGlwbHkgYSBzY2FsYXIgb3IgYSBtdHJhaXggd2l0aCBhIG1hdHJpeC4gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBtdWx0aXBsaWNhdGlvbiBpcyBub3QgcG9zc2libGUuXG4gKiBAcGFyYW0gTSB7TWF0cml4fG51bWJlcn1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLm11bHRpcGx5KDIpIC8vIFtbMTAsIDhdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIubXVsdGlwbHkoQikgLy8gW1syNSwgMjVdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIChNKSB7XG4gIGlmIChNIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpICE9PSBNLmdldENvbHMoKSB8fCB0aGlzLmdldFJvd3MoKSAhPT0gTS5nZXRSb3dzKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2Ugc3RhdGljIG1ldGhvZCBcXCdkb3RcXCcgdG8gZG8gbWF0cml4IG11bHRpcGxpY2F0aW9uJylcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3QgY3JlYXRlIGhhZGFtYXJkIHByb2R1Y3QnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAoKHJvdywgaWR4KSA9PiBtYXAoKGNvbCwgamR4KSA9PiBjb2wgKiBNLl9fdmFsdWVbaWR4XVtqZHhdKShyb3cpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm1hcChtYXAoeCA9PiB4ICogTSkpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGFkZGl0aXZlaW52ZXJzZVxuICogQGluc3RhbmNlXG4gKiBAZGVzYyBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1hdHJpeCBvYnRhaW5lZCBieSBjaGFuZ2luZyB0aGUgc2lnbiBvZiBldmVyeSBtYXRyaXggZWxlbWVudC4gVGhlIGFkZGl0aXZlIGludmVyc2Ugb2YgbWF0cml4IEEgaXMgd3JpdHRlbiDigJNBLlxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsLTVdLCBbLTQsIDRdXSlcbiAqIGNvbnN0IG1pbnVzQSA9IEEuYWRkaXRpdmVpbnZlcnNlKClcbiAqIC8vIFtbLTUsIDVdLCBbNCwgLTRdXVxuICovXG5NYXRyaXgucHJvdG90eXBlLmFkZGl0aXZlaW52ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tdWx0aXBseSgtMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGhhZGFtYXJkXG4gKiBAaW5zdGFuY2VcbiAqIEBzZWUgbXVsdGlwbHlcbiAqIEBwYXJhbSBNXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5oYWRhbWFyZCgyKSAvLyBbWzEwLCA4XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLmhhZGFtYXJkKEIpIC8vIFtbMjUsIDI1XV1cblxuICovXG5NYXRyaXgucHJvdG90eXBlLmhhZGFtYXJkID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tdWx0aXBseShNKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBsdVxuICogQGRlc2MgQ2FsY3VsYXRlcyBMVSBkZWNvbXBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeFtdfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBbWzMsIC03LCAtMiwgMl0sIFstMywgNSwgMSwgMF0sIFs2LCAtNCwgMCwgLTVdLCBbLTksIDUsIC01LCAxMl1dXG4gKiBjb25zdCBBID0gTWF0cml4LmZyb21BcnJheShyZXN1bHQpXG4gKiBjb25zdCBsdSA9IEEubHUoKVxuICogLy8gTC5fX3ZhbHVlID0gWyBbIDEsIDAsIDAsIDAgXSwgWyAtMSwgMSwgMCwgMCBdLCBbIDIsIC01LCAxLCAwIF0sIFsgLTMsIDgsIDMsIDEgXSBdXG4gKiAvLyBVLl9fdmFsdWUgPSAgWyBbIDMsIC03LCAtMiwgMiBdLCBbIDAsIC0yLCAtMSwgMiBdLCBbIDAsIDAsIC0xLCAxIF0sIFsgMCwgMCwgMCwgLTEgXSBdXG4gKiBNYXRyaXguZG90KGx1WzBdLCBsdVsxXSkgLy8gcmV0dXJucyBjbG9uZSBvZiBBXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmx1ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBuID0gdGhpcy5nZXRSb3dzKClcbiAgY29uc3QgdG9sID0gMWUtNlxuICBjb25zdCBBID0gdGhpcy5jbG9uZSgpXG4gIGNvbnN0IEwgPSB0aGlzLnplcm9zKClcbiAgY29uc3QgVSA9IHRoaXMuemVyb3MoKVxuXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgKytrKSB7XG4gICAgaWYgKE1hdGguYWJzKEEuX192YWx1ZVtrXVtrXSkgPCB0b2wpIHRocm93IEVycm9yKCdDYW5ub3QgcHJvY2VlZCB3aXRob3V0IGEgcm93IGV4Y2hhbmdlJylcbiAgICBMLl9fdmFsdWVba11ba10gPSAxXG4gICAgZm9yIChsZXQgaSA9IGsgKyAxOyBpIDwgbjsgKytpKSB7XG4gICAgICBMLl9fdmFsdWVbaV1ba10gPSBBLl9fdmFsdWVbaV1ba10gLyBBLl9fdmFsdWVba11ba11cbiAgICAgIGZvciAobGV0IGogPSBrICsgMTsgaiA8IG47ICsraikge1xuICAgICAgICBBLl9fdmFsdWVbaV1bal0gPSBBLl9fdmFsdWVbaV1bal0gLSBMLl9fdmFsdWVbaV1ba10gKiBBLl9fdmFsdWVba11bal1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgbCA9IGs7IGwgPCBuOyArK2wpIHtcbiAgICAgIFUuX192YWx1ZVtrXVtsXSA9IEEuX192YWx1ZVtrXVtsXVxuICAgIH1cbiAgfVxuICByZXR1cm4gW0wsIFVdXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIHJyZWZcbiAqIEByZXR1cm5zIHtNYXRyaXh8YXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBBID0gTWF0cml4Lm9mKFtbLTEsIDFdLCBbLTEsIDBdLCBbMCwgLTFdLCBbLTEsIC0yXV0pXG4gKiBBLnJyZWYoKSAvLyAgWyBbIDEsIDAgXSwgWyAtMCwgMSBdLCBbIDAsIDAgXSwgWyAwLCAwIF0gXVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJyZWYgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBsZWFkID0gMFxuICBjb25zdCByZXN1bHRNYXRyaXggPSB0aGlzLmNsb25lKClcblxuICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuZ2V0Um93cygpOyArK3IpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgPD0gbGVhZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdE1hdHJpeFxuICAgIH1cbiAgICBsZXQgaSA9IHJcbiAgICB3aGlsZSAocmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bbGVhZF0gPT09IDApIHtcbiAgICAgICsraVxuICAgICAgaWYgKHRoaXMuZ2V0Um93cygpID09PSBpKSB7XG4gICAgICAgIGkgPSByXG4gICAgICAgICsrbGVhZFxuICAgICAgICBpZiAodGhpcy5nZXRDb2xzKCkgPT09IGxlYWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0TWF0cml4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdG1wID0gcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1cbiAgICByZXN1bHRNYXRyaXguX192YWx1ZVtpXSA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdXG4gICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl0gPSB0bXBcblxuICAgIGxldCB2YWwgPSByZXN1bHRNYXRyaXguX192YWx1ZVtyXVtsZWFkXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5nZXRDb2xzKCk7ICsraikge1xuICAgICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bal0gLz0gdmFsXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldFJvd3MoKTsgKytpKSB7XG4gICAgICBpZiAoaSA9PT0gcikgY29udGludWVcbiAgICAgIHZhbCA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2xlYWRdXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0Q29scygpOyArK2opIHtcbiAgICAgICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bal0gLT0gdmFsICogcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bal1cbiAgICAgIH1cbiAgICB9XG4gICAgbGVhZCsrXG4gIH1cbiAgcmV0dXJuIHJlc3VsdE1hdHJpeFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlciBzb2x2ZVxuICogQHBhcmFtIGJcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gU29sdmUgeEEgPSBiXG4gKiAvLyA1eCArIHkgID0gN1xuICogLy8gM3ggLSA0eSA9IDE4XG4gKiAvLyBTb2x1dGlvbiBmb3IgeCBhbmQgeTpcbiAqIC8vIHggPSAyXG4gKiAvLyB5ID0gLTNcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgMV0sIFszLCAtNF1dKVxuICogY29uc3Qgc29sdmVBID0gQS5zb2x2ZShbNywgMThdKSAvLyBbMiwgLTNdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnNvbHZlID0gZnVuY3Rpb24gKGIpIHtcbiAgY29uc3QgQSA9IHRoaXMuY2xvbmUoKVxuICBjb25zdCBMVSA9IEEubHUoKVxuICBjb25zdCBMID0gTFVbMF1cbiAgY29uc3QgVSA9IExVWzFdXG4gIGNvbnN0IG4gPSB0aGlzLmdldFJvd3MoKVxuICBsZXQgcyA9IDBcbiAgY29uc3QgYyA9IFtdXG4gIGNvbnN0IHggPSBbXVxuXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgKytrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyArK2opIHtcbiAgICAgIHMgPSBzICsgTC5fX3ZhbHVlW2tdW2pdICogY1tqXVxuICAgIH1cbiAgICBjW2tdID0gYltrXSAtIHNcbiAgICBzID0gMFxuICB9XG4gIGZvciAobGV0IGEgPSBuIC0gMTsgYSA+IC0xOyAtLWEpIHtcbiAgICBsZXQgdCA9IDBcbiAgICBmb3IgKGxldCBiID0gYSArIDE7IGIgPCBuOyArK2IpIHtcbiAgICAgIHQgPSB0ICsgVS5fX3ZhbHVlW2FdW2JdICogeFtiXVxuICAgIH1cbiAgICB4W2FdID0gKGNbYV0gLSB0KSAvIFUuX192YWx1ZVthXVthXVxuICB9XG4gIHJldHVybiB4XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQG1lbWJlciBpbnZlcnNlXG4gKiBAaW5zdGFuY2VcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzIsIDRdXSkuaW52ZXJzZSgpXG4gKiAvLyBbIFsgMiwgLTAuNSBdLCBbIC0xLCAwLjUgXSBdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmludmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IEEgPSB0aGlzLmNsb25lKClcbiAgY29uc3QgSSA9IEEuaWRlbnRpdHkoKVxuICBjb25zdCBJbnYgPSBBLmNvbmNhdChJKS5ycmVmKClcblxuICBjb25zdCByZXN1bHQgPSBJbnYuX192YWx1ZS5yZWR1Y2UoKHJlc3VsdCwgeCwgaWR4KSA9PiB7XG4gICAgY29uc3QgaGFsZiA9IHgubGVuZ3RoIC8gMlxuICAgIHJlc3VsdC5wdXNoKHguc2xpY2UoaGFsZiwgeC5sZW5ndGgpKVxuICAgIHJldHVybiByZXN1bHRcbiAgfSwgW10pXG4gIHJldHVybiBNYXRyaXgub2YocmVzdWx0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgcmFua1xuICogQGluc3RhbmNlXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJhbmsgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJyZWYgPSB0aGlzLnJyZWYoKVxuICBsZXQgcmVzdWx0ID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJyZWYuZ2V0Q29scygpOyArK2kpIHtcbiAgICByZXN1bHQgKz0gcnJlZi5fX3ZhbHVlW2ldW2ldXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgZGltZW5zaW9uXG4gKiBAaW5zdGFuY2VcbiAqIEBzZWUgcmFua1xuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kaW1lbnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJhbmsoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgZGlhZ1xuICogQGluc3RhbmNlXG4gKiBAZGVzYyBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5kaWFnKClcbiAqIC8vIFsxLCAxLCAxXVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLmRpYWcoKVxuICogLy8gWzAsIDAsIDAsIDAsIDBdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRpYWcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGlkeCkgPT4ge1xuICAgIHJldHVybiBhY2MuY29uY2F0KHhbaWR4XSlcbiAgfSkoW10pKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gZGlhZ1xuICogQGRlc2MgUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcGFyYW0gTSB7TWF0cml4fEFycmF5fSBNYXRyaXggZnJvbSB3aGljaCB0byByZXR1cm4gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LmRpYWcoW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIFsyLCA1XVxuICpcbiAqL1xuTWF0cml4LmRpYWcgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmRpYWcoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgZGlhZ3Byb2R1Y3RcbiAqIEBpbnN0YW5jZVxuICogQGRlc2MgUmV0dXJucyB0aGUgcHJvZHVjdCBvZiB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5kaWFncHJvZHVjdCgpXG4gKiAvLyAxXG4gKlxuICogY29uc3QgZGlhZzAgPSBNYXRyaXguemVyb3MoNSwgNSkuZGlhZ3Byb2R1Y3QoKVxuICogLy8gMFxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kaWFncHJvZHVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZvbGQoKGFjYywgeCwgaWR4KSA9PiB7XG4gICAgYWNjICo9IHhbaWR4XVxuICAgIHJldHVybiBhY2NcbiAgfSkoMSkodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBkaWFncHJvZHVjdFxuICogQGRlc2MgUmV0dXJucyB0aGUgcHJvZHVjdCBvZiB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHBhcmFtIE0ge01hdHJpeHxBcnJheX0gTWF0cml4IGZyb20gd2hpY2ggdG8gcmV0dXJuIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXguZGlhZ3Byb2R1Y3QoW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIDEwXG4gKlxuICovXG5NYXRyaXguZGlhZ3Byb2R1Y3QgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmRpYWdwcm9kdWN0KClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIHN1bVxuICogQGluc3RhbmNlXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIHZhbHVlcyBpbiB0aGUgTWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5vbmVzKDMsIDMpLnN1bSgpXG4gKiAvLyA5XG4gKlxuICogY29uc3QgZGlhZzAgPSBNYXRyaXguemVyb3MoNSwgNSkuc3VtKClcbiAqIC8vIDBcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc3VtID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4KSA9PiB7XG4gICAgYWNjICs9IGZvbGQoKHByZXYsIG5leHQpID0+IHByZXYgKyBuZXh0KSgwKSh4KVxuICAgIHJldHVybiBhY2NcbiAgfSkoMCkodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBzdW1cbiAqIEBkZXNjIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgdmFsdWVzIGluIHRoZSBNYXRyaXhcbiAqIEBwYXJhbSBNIHtNYXRyaXh8QXJyYXl9IE1hdHJpeCBmcm9tIHdoaWNoIHRvIHJldHVybiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LnN1bShbWzIsIDFdLCBbMSwgNV1dKVxuICogLy8gOVxuICpcbiAqL1xuTWF0cml4LnN1bSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkuc3VtKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGtyb25lY2tlclxuICogQGluc3RhbmNlXG4gKiBAZGVzYyBUaGUgS3JvbmVja2VyIHByb2R1Y3QgaXMgYW4gb3BlcmF0aW9uIG9uIHR3byBtYXRyaWNlcyBvZiBhcmJpdHJhcnkgc2l6ZSByZXN1bHRpbmcgaW4gYSBibG9jayBtYXRyaXguXG4gKiBAcGFyYW0gTSB7TWF0cml4fSBUaGUgcmlnaHQgc2lkZSBNYXRyaXggb2YgdGhlIHByb2R1Y3QgKHRoaXMg4oqXIE0pXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmtyb25lY2tlciA9IGZ1bmN0aW9uIChNKSB7XG4gIGNvbnN0IG0gPSB0aGlzLmdldFJvd3MoKVxuICBjb25zdCBuID0gdGhpcy5nZXRDb2xzKClcbiAgY29uc3QgcCA9IE0uZ2V0Um93cygpXG4gIGNvbnN0IHEgPSBNLmdldENvbHMoKVxuXG4gIGNvbnN0IGxlZnQgPSB0aGlzLl9fdmFsdWVcbiAgY29uc3QgcmlnaHQgPSBNLl9fdmFsdWVcblxuICBjb25zdCBmcmFtZSA9IGdlbmVyYXRlKG0gKiBwLCBuICogcSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IHA7IGsrKykge1xuICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IHE7IGwrKykge1xuICAgICAgICAgIGZyYW1lW3AgKiBpICsga11bcSAqIGogKyBsXSA9IGxlZnRbaV1bal0gKiByaWdodFtrXVtsXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE1hdHJpeC5vZihmcmFtZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24ga3JvbmVja2VyXG4gKiBAZGVzYyBUaGUgS3JvbmVja2VyIHByb2R1Y3QgaXMgYW4gb3BlcmF0aW9uIG9uIHR3byBtYXRyaWNlcyBvZiBhcmJpdHJhcnkgc2l6ZSByZXN1bHRpbmcgaW4gYSBibG9jayBtYXRyaXguXG4gKiBAcGFyYW0gQSB7TWF0cml4fSBUaGUgbGVmdCBzaWRlIE1hdHJpeCBvZiB0aGUgcHJvZHVjdCAoQSDiipcgQilcbiAqIEBwYXJhbSBCIHtNYXRyaXh9IFRoZSByaWdodCBzaWRlIE1hdHJpeCBvZiB0aGUgcHJvZHVjdCAoQSDiipcgQilcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5rcm9uZWNrZXIgPSBmdW5jdGlvbiAoQSwgQikge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLmtyb25lY2tlcihCKVxufVxuXG4vLyogKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBHUFUgRnVuY3Rpb25zXG4vLyogKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGdwdU1hcFxuICogQGRlc2NyaXB0aW9uIE1hcHMgb3ZlciB0aGUgcm93cyBvZiB0aGUgbWF0cml4IHVzaW5nIGEgbWFwIGZ1bmN0aW9uIHVzaW5nIHRoZSBHUFVcbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQW4gR1BVLmpzIGVuYWJsZWQgaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIGdwdU1hcHBlciAoYSkgeyByZXR1cm4gYVt0aGlzLnRocmVhZC55XVt0aGlzLnRocmVhZC54XSB9XG4gKiBjb25zdCBtID0gTWF0cml4Lm9mKFtbMiwgMl0sIFsyLCAyXV0sIEdQVUpTKVxuICogbS5ncHVNYXAoZ3B1TWFwcGVyKVxuICogLy8gW0Zsb2F0MzJBcnJheSgyLDIpLCBGbG9hdDMyQXJyYXkoMiwyKV1cbiAqXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmdwdU1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZ3B1bWFwKHRoaXMuZ3B1anMsIGYsIHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIGdwdU1hcFxuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBmdW5jdGlvbiB0aGF0IG1hcHMgb3ZlciB0aGUgcm93cyBvZiB0aGUgbWF0cml4IHVzaW5nIGEgbWFwIGZ1bmN0aW9uIHVzaW5nIHRoZSBHUFVcbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQW4gR1BVLmpzIGVuYWJsZWQgaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSBNIHtNYXRyaXh8YXJyYXl9IE1hdHJpeCBvciBhcnJheSB0byBtYXBcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIGdwdU1hcHBlciAoYSkgeyByZXR1cm4gYVt0aGlzLnRocmVhZC55XVt0aGlzLnRocmVhZC54XSB9XG4gKiBjb25zdCBtID0gTWF0cml4LmdwdU1hcChHUFVKUywgZ3B1TWFwcGVyLCBbWzIsIDJdLCBbMiwgMl1dKVxuICogLy8gW0Zsb2F0MzJBcnJheSgyLDIpLCBGbG9hdDMyQXJyYXkoMiwyKV1cbiAqXG4gKi9cbk1hdHJpeC5ncHVNYXAgPSBjdXJyeShmdW5jdGlvbiAoZ3B1LCBmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSwgZ3B1KS5ncHVNYXAoZilcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGluc3RhbmNlXG4gKiBAbWVtYmVyIGdwdUZvbGRcbiAqIEBkZXNjcmlwdGlvbiBGb2xkcyB0aGUgcm93cyBvZiB0aGUgbWF0cml4IHVzaW5nIGEgR1BVUy5qcyBlbnFibGVkIHJlZHVjZSBmdW5jdGlvbiwgdXNpbmcgdGhlIEdQVVxuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBBbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogbS5tYXAoeCA9PiB4Lm1hcCh5ID0+IHkrIDEpKVxuICogLy8gW1syLCAyXSwgWzIsIDJdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5ncHVGb2xkID0gZnVuY3Rpb24gKGYsIG91dHB1dCkge1xuICByZXR1cm4gTWF0cml4Lm9mKGdwdWZvbGQodGhpcy5ncHVqcywgZiwgb3V0cHV0LCB0aGlzLl9fdmFsdWUpKVxufVxuXG5NYXRyaXgucHJvdG90eXBlLmdwdVByb2R1Y3QgPSBmdW5jdGlvbiAoZiwgb3V0cHV0LCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZ3B1cHJvZHVjdCh0aGlzLmdwdWpzLCBmLCBvdXRwdXQsIHRoaXMuX192YWx1ZSwgTSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJpeFxuIiwiaW1wb3J0IHsgY29uY2F0LCBjdXJyeSB9IGZyb20gJ2Z1bi5qcydcblxuLyoqXG4gKiBAZnVuY3Rpb24gY29uY2F0XG4gKiBAcGFyYW0gTSB7TWF0cml4fVxuICogQHBhcmFtIG0ge0FycmF5fVxuICogQHBhcmFtIGlkeCB7bnVtYmVyfVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiAoTSwgbSwgaWR4KSB7XG4gIHJldHVybiBjb25jYXQobSwgTS5fX3ZhbHVlW2lkeF0pXG59KVxuIiwiaW1wb3J0IHsgZm9sZCwgbWFwLCBjdXJyeSB9IGZyb20gJ2Z1bi5qcydcbmltcG9ydCByb3VuZCBmcm9tICcuL3JvdW5kJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBkb3RcbiAqIEBwYXJhbSBCIHtNYXRyaXh9XG4gKiBAcGFyYW0gYSB7QXJyYXl9XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChkZWNpbWFscywgQiwgYSkgPT4gbWFwKChpdGVtLCBpKSA9PiB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGopID0+IHtcbiAgICBhY2MgKz0gcm91bmQoeCAqIEIuX192YWx1ZVtqXVtpXSwgZGVjaW1hbHMpXG4gICAgcmV0dXJuIGFjY1xuICB9LCAwKShhKVxufSkoQi5fX3ZhbHVlWzBdKSlcbiIsImltcG9ydCB7IGN1cnJ5IH0gZnJvbSAnZnVuLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY3VycnkobSA9PiBbXSlcbiIsImltcG9ydCB7IG1hcCB9IGZyb20gJ2Z1bi5qcydcblxuLyoqXG4gKiBAZnVuY3Rpb24gZ2VuZXJhdGVcbiAqIEBkZXNjIEdlbmVyYXRvciBmdW5jdGlvbiBmb3IgYSBtYXRyaXggYXJyYXksIHZhbHVlcyBhcmUgc2V0IHRvIHVuZGVmaW5lZFxuICogQHBhcmFtIHJvd3Mge251bWJlcn1cbiAqIEBwYXJhbSBjb2xzIHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7YW55W11bXX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKHJvd3MsIGNvbHMgPSB1bmRlZmluZWQsIHZhbHVlID0gMCkgPT4ge1xuICBjb25zdCBfY29scyA9IGNvbHMgfHwgcm93c1xuICBjb25zdCB5ID0gbWFwKHogPT4gdmFsdWUpKG5ldyBBcnJheShfY29scykpXG4gIHJldHVybiBtYXAoeiA9PiB5KShuZXcgQXJyYXkocm93cykpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBncHVmb2xkIChncHUsIGYsIG91dHB1dCwgbWF0cml4LCBjb25zdGFudHMgPSB7fSkge1xuICByZXR1cm4gZ3B1XG4gICAgLmNyZWF0ZUtlcm5lbChmLCB7IGNvbnN0YW50czogT2JqZWN0LmFzc2lnbih7fSwgeyBtOiBtYXRyaXgubGVuZ3RoLCBuOiBtYXRyaXhbMF0ubGVuZ3RoIH0sIGNvbnN0YW50cykgfSlcbiAgICAuc2V0T3V0cHV0KG91dHB1dCkobWF0cml4KVxufVxuIiwiLy8gaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdwdW1hcCAoZ3B1LCBmLCBtYXRyaXgpIHtcbiAgcmV0dXJuIGdwdS5jcmVhdGVLZXJuZWwoZikuc2V0T3V0cHV0KFttYXRyaXgubGVuZ3RoLCBtYXRyaXhbMF0ubGVuZ3RoXSkobWF0cml4KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ3B1ZG90IChncHUsIGYsIG91dHB1dCwgYSwgYiwgY29uc3RhbnRzID0ge30pIHtcbiAgcmV0dXJuIGdwdVxuICAgIC5jcmVhdGVLZXJuZWwoZiwgeyBjb25zdGFudHM6IE9iamVjdC5hc3NpZ24oe30sIHsgbjogYVswXS5sZW5ndGggfSwgY29uc3RhbnRzKSB9KVxuICAgIC5zZXRPdXRwdXQob3V0cHV0KShhLCBiKVxufVxuIiwiaW1wb3J0IHsgbWFwIH0gZnJvbSAnZnVuLmpzJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBpZGVudGl0eVxuICogQGRlc2MgQ3JlYXRlcyBhbiBpZGVudGl5IG1hdHJpeCBmcm9tIGFuIGVtcHR5IGFycmF5XG4gKiBAcGFyYW0gbSB7QXJyYXl9XG4gKiBAcGFyYW0gaWR4IHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtNYXRyaXh9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChtLCBpZHgpID0+IG1hcCgocm93cywgamR4KSA9PiAoaWR4ID09PSBqZHgpICogMSkobSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHJvdW5kXG4gKiBAcGFyYW0gdmFsdWUge251bWJlcn1cbiAqIEBwYXJhbSBkZWNpbWFscyB7bnVtYmVyfVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91bmQgKHZhbHVlLCBkZWNpbWFscykge1xuICByZXR1cm4gTnVtYmVyKE1hdGgucm91bmQodmFsdWUgKyAnZScgKyBkZWNpbWFscykgKyAnZS0nICsgZGVjaW1hbHMpXG59XG4iLCJpbXBvcnQgeyBtYXAsIGN1cnJ5IH0gZnJvbSAnZnVuLmpzJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiB0cmFuc3Bvc2VcbiAqIEBkZXNjIFRyYW5zcG9zZXMgYSBhcnJheSBvZiBhcnJheXMgdXNpbmcgdGhlIE1hdHJpeC5tYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBtIHtBcnJheX1cbiAqIEBwYXJhbSBpZHgge251bWJlcn1cbiAqIEByZXR1cm4ge01hdHJpeH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHByZXYsIG5leHQpID0+IG1hcCgoaXRlbSwgaSkgPT4gKHByZXZbaV0gfHwgW10pLmNvbmNhdChuZXh0W2ldKSkobmV4dCkpXG4iXSwic291cmNlUm9vdCI6IiJ9