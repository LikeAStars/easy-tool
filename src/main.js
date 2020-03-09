/**
 * Created by wujiaming on 2020/3/9
 **/

/*
 * 时间格式化
 * @params: date: 传入的时间     format: 格式化
 */
const fmt = (date, format) => {
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
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (dates.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  if (format.includes('NaN')) {
    console.log('请输入正确的日期格式');
    return '';
  }
  return format;
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

// 验证是否为null
const isNull = (value) => {
  return value === null
};

// 验证输入数字或字符串的值是否为整数
const isInteger = (value) => {
  const regx = /^-?\d+$/;
};

export default {
  fmt,
  convert,
  isNull,
  isInteger,
};
