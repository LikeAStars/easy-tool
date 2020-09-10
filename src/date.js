
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

export default {
  format
}
