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
const replaceParamVal = (paramName, replaceWith) => {
  let oUrl = location.href.toString();
  let re = eval('/('+ paramName + '=)([^&]*)/gi');
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
  } else {
    return ret;
  }
};

export default {
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
}
