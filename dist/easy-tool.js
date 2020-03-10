(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/**
 * Created by wujiaming on 2020/3/10
 **/





/* harmony default export */ __webpack_exports__["default"] = ({
  ..._data__WEBPACK_IMPORTED_MODULE_0__["default"],
  ..._date__WEBPACK_IMPORTED_MODULE_1__["default"],
  ..._validator__WEBPACK_IMPORTED_MODULE_2__["default"]
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by wujiaming on 2020/3/10
 **/

// 数组去重
const uniqBy = (arr, comparator) => {
  let obj = {};
  return arr && arr.length ? arr.reduce((item, next) => {
    if (!obj[next[comparator]]) {
      item.push(next);
      obj[next[comparator]] = true;
    }
    return item;
  }, []) : [];
};

/*
 * 特殊数组转化为树
 * @params: arr: 传入的数组   key: 数组的唯一标识，如id    parentKey: 父级的唯一标识字段     firstParentKey: 最外层父级的值
 */
const convert = (arr, key, parentKey, firstParentKey) => {
  if (arr && arr.length) {
    const res = [];
    const map = arr.reduce((res, v) => (res[v[key]] = v, res), {});
    for (const item of arr) {
      if (item[parentKey] === firstParentKey || !item[parentKey]) {
        res.push(item);
        continue;
      }
      if (item[parentKey] in map) {
        const parent = map[item[parentKey]];
        parent.children = parent.children || [];
        parent.children.push(item);
      }
    }
    return res;
  }
  return [];
};

/* harmony default export */ __webpack_exports__["default"] = ({
  uniqBy,
  convert
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by wujiaming on 2020/3/10
 **/
/*
 * 时间格式化
 * @params: date: 传入的时间     fmt: 格式化后的样子
 */
const format = (date, fmt) => {
  const dates = new Date(date);
  let o = {
    "M+": dates.getMonth() + 1, //月份
    "d+": dates.getDate(), //日
    "h+": dates.getHours(), //小时
    "m+": dates.getMinutes(), //分
    "s+": dates.getSeconds(), //秒
    "q+": Math.floor((dates.getMonth() + 3) / 3), //季度
    "S": dates.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (dates.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  if (fmt.includes('NaN')) {
    console.log('请输入正确的日期格式');
    return '';
  }
  return fmt;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  format
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by wujiaming on 2020/3/10
 **/

// 验证是否为null
const isNull = (value) => {
  return value === null;
};

// 验证是否是undefined
const isUndefined = (value) => {
  return value === undefined;
};

// 验证输入数字或字符串的值是否为整数
const isInteger = (value) => {
  const reg = /^-?\d+$/;
  const num = typeof value === 'string' ? value : value + '';
  if (num.length > 1 && num[0] === '0') {
    return false;
  }
  return reg.test(value);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  isNull,
  isInteger
});


/***/ })
/******/ ])["default"];
});