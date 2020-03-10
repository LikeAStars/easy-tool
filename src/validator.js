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

export default {
  isNull,
  isInteger
}
