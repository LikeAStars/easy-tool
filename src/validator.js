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

export default {
  isNull,
  isInteger,
  isUndefined,
  floatNum,
}
