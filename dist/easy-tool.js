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

// 数组根据某个key值去重
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

// 数组根据

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

/**
 * 获取url参数
 * @param {*} name
 * @param {*} origin
*/
const getUrlParams = (name, origin = null) => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = null;
  if (origin == null) {
    r = window.location.search.substr(1).match(reg);
  } else {
    r = origin.substr(1).match(reg);
  }
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
};

/*
 *修改url中的参数
 * @param { string } paramName
 * @param { string } replaceWith
*/
const replaceParamVal = (paramName,replaceWith) => {
  let oUrl = location.href.toString();
  let re = eval('/('+ paramName+'=)([^&]*)/gi');
  location.href = oUrl.replace(re,paramName + '=' + replaceWith);
  return location.href;
};

/**
 * 删除url中指定的参数
 * @param { string } name
 */
const funcUrlDel = (name) => {
  let local = location;
  let baseUrl = local.origin + local.pathname + "?";
  let query = local.search.substr(1);
  if (query.indexOf(name) > -1) {
    let obj = {};
    let arr = query.split("&");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("=");
      obj[arr[i][0]] = arr[i][1];
    }
    delete obj[name];
    return baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
  }
};

// 获取窗口可视范围的高度
const getClientHeight = () => {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  else {
    clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  return clientHeight;
};

// 获取窗口可视范围宽度
const getPageViewWidth = () => {
  let d = document;
  let a = d.compatMode === 'BackCompat' ? d.body : d.documentElement;
  return a.clientWidth;
};

// 获取窗口尺寸
const getViewportOffset = () => {
  if (window.innerWidth) {
    return { w: window.innerWidth, h: window.innerHeight };
  } else {
    // ie8及其以下
    if (document.compatMode === "BackCompat") {
      // 怪异模式
      return { w: document.body.clientWidth, h: document.body.clientHeight };
    } else {
      // 标准模式
      return { w: document.documentElement.clientWidth, h: document.documentElement.clientHeight };
    }
  }
};

// 获取滚动条距顶部高度
const getPageScrollTop = () => {
  let a = document;
  return a.documentElement.scrollTop || a.body.scrollTop;
};

// 返回当前滚动条位置
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

// 平滑滚动到页面顶部
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

// 金钱格式化，三位加逗号
const formatMoney = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const dataType = (target) => {
  let ret = typeof(target);
  let template = {
    '[object Array]': 'array',
    '[object Object]': 'object',
    '[object Number]': 'number',
    '[object Boolean]': 'boolean',
    '[object String]': 'string',
  };
  if (target === null) {
    return 'null';
  } else if (ret === 'object'){
    let str = Object.prototype.toString.call(target);
    return template[str];
  }else{
    return ret;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  uniqBy,
  convert,
  getUrlParams,
  replaceParamVal,
  funcUrlDel,
  getClientHeight,
  getPageViewWidth,
  getViewportOffset,
  getPageScrollTop,
  getScrollPosition,
  scrollToTop,
  formatMoney,
  dataType,
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

// 四舍五入保留n位小数
const floatNum = (num, n) => {
  const data = (`${num}`).split('.');
  const flag = data[0][0] === '0' && data[0][1] === '0';
  if (isNaN(num) || flag) {
    console.log('请输入有效数字');
  }
  return (Math.round(num * Math.pow(10,n ? n : 1)) / (Math.pow(10,n ? n : 1))).toFixed(n ? n : 1);
};

// 验证不能包含字母
const isNoWord = value => /^[^A-Za-z]*$/g.test(value);

// 验证中文和数字
const isCHNAndEN = value => /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(value);

// 验证邮政编码(中国)
const isPostcode = value => /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(value);

// 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
const isMPStrict = value => /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(value);

// 验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可
const isMPRelaxed = value => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value);

// 验证email(邮箱)
const isEmail = value => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(value);

// 验证座机电话(国内),如: 0341-86091234
const isLandlineTelephone = value => /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);

// 验证身份证号, 支持1/2代(15位/18位数字)
const isIDCard = value => /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(value);

// 验证中文/汉字
const isChineseCharacter = value => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(value);

/* harmony default export */ __webpack_exports__["default"] = ({
  isNull,
  isInteger,
  isUndefined,
  floatNum,
  isNoWord,
  isCHNAndEN,
  isPostcode,
  isMPStrict,
});


/***/ })
/******/ ])["default"];
});