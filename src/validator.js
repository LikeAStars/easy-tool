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
const isTelephone = value => /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);

// 验证身份证号, 支持1/2代(15位/18位数字)
const isIDCard = value => /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(value);

// 验证中文/汉字
const isChineseCharacter = value => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(value);

export default {
  isNull,
  isInteger,
  isUndefined,
  floatNum,
  isNoWord,
  isCHNAndEN,
  isPostcode,
  isMPStrict,
  isMPRelaxed,
  isEmail,
  isTelephone,
  isIDCard,
  isChineseCharacter,
}
