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

export default {
  uniqBy,
  convert
}
