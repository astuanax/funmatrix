(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fun-matrix", [], factory);
	else if(typeof exports === 'object')
		exports["fun-matrix"] = factory();
	else
		root["fun-matrix"] = factory();
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

/***/ "./node_modules/fun.js/src/util/curry.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/util/curry.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-use-before-define */
/**
 * Created by dierickx.len on 25/03/2017.
 */
/* harmony default export */ __webpack_exports__["default"] = (function (fun) {
  let argslen = fun.length;

  if (argslen === 0) {
    return fun;
  }
  return createRecurser([]);

  function recurse(acc, args) {
    let _acc = acc.concat(args);

    if (_acc.length < argslen) {
      return createRecurser(_acc);
    }
    return fun.apply(this, _acc);
  }

  function createRecurser(acc) {
    return function () {
      let args = Array.prototype.slice.call(arguments);

      return recurse(acc, args);
    };
  }
});


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

var _curry = _interopRequireDefault(__webpack_require__(/*! fun.js/src/util/curry */ "./node_modules/fun.js/src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var curry = require('fun.js').curry
// import curry from './curry'
var concatMatrix = (0, _curry.default)(function (M, m) {
  return m.map(function (rows, idx) {
    return Array.prototype.concat.call(rows, M.__value[idx]);
  });
});
var addMatrix = (0, _curry.default)(function (M, m) {
  return m.map(function (row, idx) {
    return row.map(function (col, jdx) {
      return col + M.__value[idx][jdx];
    });
  });
});
var addScalar = (0, _curry.default)(function (M, m) {
  return m.map(function (row) {
    return row.map(function (col) {
      return col + M.__value;
    });
  });
});
var dot = (0, _curry.default)(function (X, y) {
  var result = [];

  for (var i = 0; i < X.__value.length; i++) {
    for (var j = 0; j < y[0].length; j++) {
      // let val = X.__value[i][j]
      var sum = 0;

      for (var k = 0; k < X.__value[0].length; k++) {
        sum += X.__value[i][k] * y[k][j];
      }

      result[i] = result[i] || [];
      result[i][j] = sum;
    }
  }

  return result;
});
var emptyMatrix = (0, _curry.default)(function (m) {
  return m.map(function (rows) {
    return [];
  });
});
var identityMatrix = (0, _curry.default)(function (m) {
  return m.map(function (rows, idx) {
    return rows.map(function (cols, jdx) {
      return (idx === jdx) * 1;
    });
  });
});

var Matrix = function Matrix() {
  for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
    value[_key] = arguments[_key];
  }

  if (arguments.length === 1) {
    this.__value = value[0];
  } else {
    // eslint-disable-next-line no-undef
    rows = value[0];
    cols = value[1];
    var _value$ = value[2];
    this.__value = _value$ === void 0 ? [] : _value$;

    if (this.__value.length === 0) {
      // eslint-disable-next-line no-undef
      this.__value = Array.apply(null, Array(rows)).map(function (x) {
        return Array.apply(null, Array(cols));
      });
    }
  }
};

Matrix.of = function () {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (arguments.length === 1) {
    // eslint-disable-next-line no-undef
    value = args[0];
    // eslint-disable-next-line no-undef
    if (value instanceof Matrix) return value;

    if (this instanceof Matrix) {
      // eslint-disable-next-line no-undef
      this.__value = value;
    } else {
      // eslint-disable-next-line no-undef
      return new Matrix(value);
    }
  } else {
    return new (Function.prototype.bind.apply(Matrix, [null].concat(args)))();
  }
};

Matrix.prototype.fmap = function (f) {
  return Matrix.of(f(this.__value));
};

Matrix.fmap = (0, _curry.default)(function (f, M) {
  return Matrix.of(M).fmap(f); // (f(M.__value))
});
Matrix.prototype.map = Matrix.prototype.fmap;
Matrix.map = Matrix.fmap;

Matrix.prototype.ap = function (M) {
  return Matrix.of(M).fmap(this.__value);
};

Matrix.ap = (0, _curry.default)(function (f, M) {
  return Matrix.of(f).ap(M);
});

Matrix.prototype.concat = function (M) {
  var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : concatMatrix;
  return Matrix.of(this).fmap(f(M));
};

Matrix.concat = (0, _curry.default)(function (A, B) {
  var f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : concatMatrix;
  return Matrix.of(A).fmap(f(B));
});

Matrix.prototype.empty = function () {
  var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyMatrix;
  return Matrix.of(this.__value.length, this.__value[0].length).fmap(f);
};

Matrix.empty = (0, _curry.default)(function (rows, cols) {
  var f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : emptyMatrix;
  return Matrix.of(rows, cols).fmap(f);
}); // #### #### #### //

Matrix.prototype.identity = function () {
  var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : identityMatrix;
  return Matrix.of(this).empty(f);
};

Matrix.identity = function (m, n) {
  var f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identityMatrix;
  return Matrix.empty(m, n, f);
};

Matrix.prototype.combine = function (M) {
  return Matrix.of(this).concat(Matrix.of(M));
};

Matrix.combine = function (A, B) {
  return Matrix.of(A).concat(Matrix.of(B));
};

Matrix.prototype.dot = function (M) {
  var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dot;
  return Matrix.of(this).concat(Matrix.of(M), f);
};

Matrix.dot = function (A, B) {
  var f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : dot;
  return Matrix.of(A).concat(Matrix.of(B), f);
};

Matrix.prototype.fill = function (f) {
  return Matrix.of(this).fmap(function (m) {
    return m.map(function (x) {
      return x.map(function (y) {
        return f();
      });
    });
  });
};

Matrix.prototype.zeros = function () {
  return Matrix.of(this).fill(function (x) {
    return 0;
  });
};

Matrix.prototype.ones = function () {
  return Matrix.of(this).fill(function (x) {
    return 1;
  });
};

Matrix.prototype.random = function () {
  var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {
    return Math.random() * 2 - 1;
  };
  return Matrix.of(this).fill(f);
};

Matrix.prototype.toArray = function () {
  return this.__value.map(function (row) {
    return row.map(function (col) {
      return col;
    });
  });
};

Matrix.fromArray = function (arr) {
  return Matrix.of(arr.map(function (row) {
    return row.map(function (col) {
      return col;
    });
  }));
};

Matrix.prototype.transpose = function () {
  return Matrix.of(this).fmap(function (m) {
    return m.reduce(function (prev, next) {
      return next.map(function (item, i) {
        return (prev[i] || []).concat(next[i]);
      });
    }, []);
  });
};

Matrix.transpose = function (M) {
  return Matrix.of(M).transpose();
};

Matrix.prototype.add = function (M) {
  var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : addMatrix;
  return Matrix.of(this).concat(Matrix.of(M), f);
};

Matrix.prototype.addScalar = function (M) {
  var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : addScalar;
  return Matrix.of(this).concat(Matrix.of(M), f);
};

var _default = Matrix;
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4tbWF0cml4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9mdW4tbWF0cml4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Z1bi1tYXRyaXgvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy91dGlsL2N1cnJ5LmpzIiwid2VicGFjazovL2Z1bi1tYXRyaXgvLi9zcmMvbWF0cml4LmpzIl0sIm5hbWVzIjpbImNvbmNhdE1hdHJpeCIsIk0iLCJtIiwibWFwIiwicm93cyIsImlkeCIsIkFycmF5IiwicHJvdG90eXBlIiwiY29uY2F0IiwiY2FsbCIsIl9fdmFsdWUiLCJhZGRNYXRyaXgiLCJyb3ciLCJjb2wiLCJqZHgiLCJhZGRTY2FsYXIiLCJkb3QiLCJYIiwieSIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJqIiwic3VtIiwiayIsImVtcHR5TWF0cml4IiwiaWRlbnRpdHlNYXRyaXgiLCJjb2xzIiwiTWF0cml4IiwidmFsdWUiLCJhcmd1bWVudHMiLCJhcHBseSIsIngiLCJvZiIsImFyZ3MiLCJmbWFwIiwiZiIsImFwIiwiQSIsIkIiLCJlbXB0eSIsImlkZW50aXR5IiwibiIsImNvbWJpbmUiLCJmaWxsIiwiemVyb3MiLCJvbmVzIiwicmFuZG9tIiwiZSIsIk1hdGgiLCJ0b0FycmF5IiwiZnJvbUFycmF5IiwiYXJyIiwidHJhbnNwb3NlIiwicmVkdWNlIiwicHJldiIsIm5leHQiLCJpdGVtIiwiYWRkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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bWF0cml4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJmdW4tbWF0cml4XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bi1tYXRyaXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZnVuLW1hdHJpeFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYXRyaXguanNcIik7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNS8wMy8yMDE3LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZnVuKSB7XG4gIGxldCBhcmdzbGVuID0gZnVuLmxlbmd0aDtcblxuICBpZiAoYXJnc2xlbiA9PT0gMCkge1xuICAgIHJldHVybiBmdW47XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlY3Vyc2VyKFtdKTtcblxuICBmdW5jdGlvbiByZWN1cnNlKGFjYywgYXJncykge1xuICAgIGxldCBfYWNjID0gYWNjLmNvbmNhdChhcmdzKTtcblxuICAgIGlmIChfYWNjLmxlbmd0aCA8IGFyZ3NsZW4pIHtcbiAgICAgIHJldHVybiBjcmVhdGVSZWN1cnNlcihfYWNjKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bi5hcHBseSh0aGlzLCBfYWNjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlY3Vyc2VyKGFjYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgIHJldHVybiByZWN1cnNlKGFjYywgYXJncyk7XG4gICAgfTtcbiAgfVxufVxuIiwiLy8gdmFyIGN1cnJ5ID0gcmVxdWlyZSgnZnVuLmpzJykuY3Vycnlcbi8vIGltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvdXRpbC9jdXJyeSdcblxuY29uc3QgY29uY2F0TWF0cml4ID0gY3VycnkoKE0sIG0pID0+IG0ubWFwKChyb3dzLCBpZHgpID0+IEFycmF5LnByb3RvdHlwZS5jb25jYXQuY2FsbChyb3dzLCBNLl9fdmFsdWVbaWR4XSkpKVxuXG5jb25zdCBhZGRNYXRyaXggPSBjdXJyeSgoTSwgbSkgPT4gbS5tYXAoKHJvdywgaWR4KSA9PiByb3cubWFwKChjb2wsIGpkeCkgPT4gY29sICsgTS5fX3ZhbHVlW2lkeF1bamR4XSkpKVxuXG5jb25zdCBhZGRTY2FsYXIgPSBjdXJyeSgoTSwgbSkgPT4ge1xuICByZXR1cm4gbS5tYXAocm93ID0+IHJvdy5tYXAoY29sID0+IGNvbCArIE0uX192YWx1ZSkpXG59KVxuXG5jb25zdCBkb3QgPSBjdXJyeSgoWCwgeSkgPT4ge1xuICBsZXQgcmVzdWx0ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBYLl9fdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHlbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIGxldCB2YWwgPSBYLl9fdmFsdWVbaV1bal1cbiAgICAgIGxldCBzdW0gPSAwXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IFguX192YWx1ZVswXS5sZW5ndGg7IGsrKykge1xuICAgICAgICBzdW0gKz0gWC5fX3ZhbHVlW2ldW2tdICogeVtrXVtqXVxuICAgICAgfVxuICAgICAgcmVzdWx0W2ldID0gcmVzdWx0W2ldIHx8IFtdXG4gICAgICByZXN1bHRbaV1bal0gPSBzdW1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufSlcblxuY29uc3QgZW1wdHlNYXRyaXggPSBjdXJyeShtID0+IG0ubWFwKHJvd3MgPT4gW10pKVxuXG5jb25zdCBpZGVudGl0eU1hdHJpeCA9IGN1cnJ5KG0gPT4gbS5tYXAoKHJvd3MsIGlkeCkgPT4gcm93cy5tYXAoKGNvbHMsIGpkeCkgPT4gKGlkeCA9PT0gamR4KSAqIDEpKSlcblxubGV0IE1hdHJpeCA9IGZ1bmN0aW9uICguLi52YWx1ZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIFt0aGlzLl9fdmFsdWVdID0gdmFsdWVcbiAgfSBlbHNlIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBbcm93cywgY29scywgdGhpcy5fX3ZhbHVlID0gW11dID0gdmFsdWVcbiAgICBpZiAodGhpcy5fX3ZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICB0aGlzLl9fdmFsdWUgPSBBcnJheS5hcHBseShudWxsLCBBcnJheShyb3dzKSkubWFwKHggPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoY29scykpKVxuICAgIH1cbiAgfVxufVxuXG5NYXRyaXgub2YgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIFt2YWx1ZV0gPSBhcmdzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTWF0cml4KSByZXR1cm4gdmFsdWVcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIHJldHVybiBuZXcgTWF0cml4KHZhbHVlKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IE1hdHJpeCguLi5hcmdzKVxuICB9XG59XG5cbk1hdHJpeC5wcm90b3R5cGUuZm1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZih0aGlzLl9fdmFsdWUpKVxufVxuXG5NYXRyaXguZm1hcCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkuZm1hcChmKSAvLyAoZihNLl9fdmFsdWUpKVxufSlcblxuTWF0cml4LnByb3RvdHlwZS5tYXAgPSBNYXRyaXgucHJvdG90eXBlLmZtYXBcbk1hdHJpeC5tYXAgPSBNYXRyaXguZm1hcFxuXG5NYXRyaXgucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5mbWFwKHRoaXMuX192YWx1ZSlcbn1cblxuTWF0cml4LmFwID0gY3VycnkoZnVuY3Rpb24gKGYsIE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihmKS5hcChNKVxufSlcblxuTWF0cml4LnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAoTSwgZiA9IGNvbmNhdE1hdHJpeCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZtYXAoZihNKSlcbn1cblxuTWF0cml4LmNvbmNhdCA9IGN1cnJ5KGZ1bmN0aW9uIChBLCBCLCBmID0gY29uY2F0TWF0cml4KSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkuZm1hcChmKEIpKVxufSlcblxuTWF0cml4LnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uIChmID0gZW1wdHlNYXRyaXgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzLl9fdmFsdWUubGVuZ3RoLCB0aGlzLl9fdmFsdWVbMF0ubGVuZ3RoKS5mbWFwKGYpXG59XG5cbk1hdHJpeC5lbXB0eSA9IGN1cnJ5KGZ1bmN0aW9uIChyb3dzLCBjb2xzLCBmID0gZW1wdHlNYXRyaXgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihyb3dzLCBjb2xzKS5mbWFwKGYpXG59KVxuXG4vLyAjIyMjICMjIyMgIyMjIyAvL1xuXG5NYXRyaXgucHJvdG90eXBlLmlkZW50aXR5ID0gZnVuY3Rpb24gKGYgPSBpZGVudGl0eU1hdHJpeCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmVtcHR5KGYpXG59XG5cbk1hdHJpeC5pZGVudGl0eSA9IGZ1bmN0aW9uIChtLCBuLCBmID0gaWRlbnRpdHlNYXRyaXgpIHtcbiAgcmV0dXJuIE1hdHJpeC5lbXB0eShtLCBuLCBmKVxufVxuXG5NYXRyaXgucHJvdG90eXBlLmNvbWJpbmUgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmNvbmNhdChNYXRyaXgub2YoTSkpXG59XG5cbk1hdHJpeC5jb21iaW5lID0gZnVuY3Rpb24gKEEsIEIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5jb25jYXQoTWF0cml4Lm9mKEIpKVxufVxuXG5NYXRyaXgucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uIChNLCBmID0gZG90KSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuY29uY2F0KE1hdHJpeC5vZihNKSwgZilcbn1cblxuTWF0cml4LmRvdCA9IGZ1bmN0aW9uIChBLCBCLCBmID0gZG90KSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkuY29uY2F0KE1hdHJpeC5vZihCKSwgZilcbn1cblxuTWF0cml4LnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5mbWFwKG0gPT4gbS5tYXAoeCA9PiB4Lm1hcCh5ID0+IGYoKSkpKVxufVxuXG5NYXRyaXgucHJvdG90eXBlLnplcm9zID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoeCA9PiAwKVxufVxuXG5NYXRyaXgucHJvdG90eXBlLm9uZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuZmlsbCh4ID0+IDEpXG59XG5cbk1hdHJpeC5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24gKGYgPSBlID0+IE1hdGgucmFuZG9tKCkgKiAyIC0gMSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoZilcbn1cblxuTWF0cml4LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3ZhbHVlLm1hcChyb3cgPT4gcm93Lm1hcChjb2wgPT4gY29sKSlcbn1cblxuTWF0cml4LmZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihhcnIubWFwKHJvdyA9PiByb3cubWFwKGNvbCA9PiBjb2wpKSlcbn1cblxuTWF0cml4LnByb3RvdHlwZS50cmFuc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuZm1hcChtID0+IG0ucmVkdWNlKChwcmV2LCBuZXh0KSA9PiBuZXh0Lm1hcCgoaXRlbSwgaSkgPT5cbiAgICAocHJldltpXSB8fCBbXSkuY29uY2F0KG5leHRbaV0pXG4gICksIFtdKSlcbn1cblxuTWF0cml4LnRyYW5zcG9zZSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkudHJhbnNwb3NlKClcbn1cblxuTWF0cml4LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoTSwgZiA9IGFkZE1hdHJpeCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmNvbmNhdChNYXRyaXgub2YoTSksIGYpXG59XG5cbk1hdHJpeC5wcm90b3R5cGUuYWRkU2NhbGFyID0gZnVuY3Rpb24gKE0sIGYgPSBhZGRTY2FsYXIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5jb25jYXQoTWF0cml4Lm9mKE0pLCBmKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXhcbiJdLCJzb3VyY2VSb290IjoiIn0=