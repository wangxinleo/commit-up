// 数组
const ArrayUtils = {
  /**
   * 返回数组中的最大值
   * 将Math.max()与扩展运算符 (...) 结合使用以获取数组中的最大值。
   * @param arr 例子：[10, 1, 5]
   * @returns {number} 例子：10
   */
  arrayMax: arr => Math.max(...arr),

  /**
   * 返回数组中的最小值
   * 将Math.min()与扩展运算符 (...) 结合使用以获取数组中的最小值。
   * @param arr 例子：[10, 1, 5]
   * @returns {number} 例子：1
   */
  arrayMin: arr => Math.min(...arr),

  /**
   * 返回数组中的随机元素
   * @param arr 例子：[10, 1, 5]
   * @returns {number} 例子：10/1/5
   */
  arrayRandom: arr => arr[Math.floor(Math.random() * arr.length)],

  /**
   * 返回数组中的最后一个元素
   * @param arr 例子：[10, 1, 5]
   * @returns {number} 例子：5
   */
  arrayLast: arr => arr[arr.length - 1],

  /**
   * 返回数组的第 n 个元素
   * 使用Array.slice()可获取包含第 n 个元素的数组。如果索引超出界限, 则返回[]。省略第二个参数n, 以获取数组的第一个元素
   * @param arr 例子：[10, 1, 5]
   * @param n 例子：1
   * @returns {number} 例子：1
   */
  arrayNth: (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0],

  /**
   * 计算数组中某个指定值的出现次数
   * 使用Array.reduce()在每次遇到数组中的特定值时递增计数器
   * @param arr 例子：[10, 1, 5]
   * @param value 例子：10
   * @returns {number} 例子：1
   */
  arrayCount: (arr, value) => {
    return arr.reduce((accumulator, currentValue) => {
      return currentValue === value ? accumulator + 1 : accumulator + 0;
    }, 0);
  },

  /**
   * 从数组中移除 false (false、null、0、""、undefined和NaN) 的值
   * 使用Array.filter()筛选出 false.
   * @param arr 例子：[false, 1, null, 0]
   * @returns {*[]} 例子：[1]
   */
  arrayFilterFalse: arr => arr.filter(Boolean),

  /**
   * 过滤数组中重复元素，使元素仅唯一
   * 使用 ES6 Set和...rest运算符放弃所有重复的值。
   * @param arr 例子：[10,10,1,1,1,2]
   * @returns {*[]} 例子：[10,1,2]
   */
  arrayUnique: arr => [...new Set(arr)],

  /**
   * 过滤数组中的唯一元素，仅留下不唯一元素
   * @param arr 例子：[10,10,1,1,1,2]
   * @returns {*[]} 例子：[2]
   */
  arrayOnlyUnique: arr => arr.filter(value => arr.indexOf(value) === arr.lastIndexOf(value)),

  /**
   * 过滤数组中的指定元素，仅留下包含未过滤元素的数组
   * @param arr 例子：[10,10,1,1,1,2]
   * @param args 例子：10,1 
   * @returns {*[]} 例子：[2]
   */
  arrayWithout: (arr, ...args) => arr.filter((value) => !args.includes(value)),

  /**
   * 返回两个数组之间的非交集
   * 从arr2创建Set, 然后使用Array.filter(), 只保留两个数组中不包含的值.
   * @param arr1 例子：[10,1,2]
   * @param arr2 例子：[10,1,3]
   * @returns {*[]} 例子：[2,3]
   */
  arrayDifference: (arr1, arr2) => {
    const s1 = new Set(arr1);
    const s2 = new Set(arr2);
    return [...arr1.filter(value => !s2.has(value)), ...arr2.filter(value => !s1.has(value))];
  },

  /**
   * 返回两个数组之间的交集
   * 从arr2创建Set, 然后使用Array.filter(), 只保留两个数组中都包含的值.
   * @param arr1 例子：[10,1,2]
   * @param arr2 例子：[10,1,3]
   * @returns {*[]} 例子：[10,1]
   */
  arraySame: (arr1, arr2) => {
    const s = new Set(arr2);
    return arr1.filter(value => s.has(value));
  },

  /**
   * 返回两个数组之间的并集
   * 从arr2创建Set, 然后使用Array.filter(), 只保留两个数组中包含的值.
   * @param arr1 例子：[10,1,2]
   * @param arr2 例子：[10,1,3]
   * @returns {*[]} 例子：[10,1,2,3]
   */
  arrayUnion: (arr1, arr2) => Array.from(new Set([...arr1, ...arr2])),

  /**
   * 不断移除数组中的首个元素, 直到传递的函数返回true，返回其余元素
   * 在数组中循环, 使用Array.shift()将数组的第一个元素除去,
   * 直到函数的返回值为true。返回其余元素。
   * @param arr 例子：[0,1,2]
   * @param callback 例子：(firstValue)=>firstValue
   * @returns {*[]} 例子：[1,2]
   */
  arrayDropFirst: (arr, callback) => {
    while (arr.length > 0 && !callback(arr[0]))
      arr.shift();
    return arr;
  },

  /**
   * 返回数组的除最后一个元素外的所有元素
   * @param arr 例子：[10,2,1]
   * @returns {*[]} 例子：[10,2]
   */
  arrayRemoveLast: arr => arr.slice(0, -1),

  /**
   * 返回数组中除第一个 的所有元素
   * @param arr 例子：[10,2,1]
   * @returns {*[]} 例子：[2,1]
   */
  arrayRemoveFist: arr => arr.length > 1 ? arr.slice(1) : arr,

  /**
   * 返回数组中的每 n 个元素
   * 使用Array.filter()创建一个包含给定数组的每 n 个元素的新数组。
   * @param arr 例子：[1,2,3,4,5]
   * @param nth 例子：2
   * @returns {*[]} 例子：[2,4]
   */
  arrayEveryNth: (arr, nth) => arr.filter((value, i) => i % nth === 0),

  /**
   * 返回一个从 位置 0 到 n 的数组
   * 使用Array.slice()创建数组的切片, 其中包含从位置 0 到 n 的元素
   * @param arr 例子：[1,2,3,4,5]
   * @param n 例子：2
   * @returns {*[]} 例子：[1,2]
   */
  arrayTakeLeft: (arr, n = 1) => arr.slice(0, n),

  /**
   * 返回一个从 位置 N 到 末尾 的数组
   * 使用Array.slice()创建数组的切片, 其中包含从位置 0 到 n 的元素
   * @param arr 例子：[1,2,3,4,5]
   * @param  例子：2
   * @returns {*[]} 例子：[4,5]
   */
  arrayTakeRight: (arr, n = 1) => arr.slice(arr.length - n, arr.length),

  /**
   * 拆解多维数组为一维数组，返回新数组
   * 使用递归。使用Array.concat()与空数组 ([]) 和跨页运算符 (...) 来拼合数组。递归拼合作为数组的每个元素。
   * @param arr 例子：[[1,2],[3,4],[5,6]]
   * @returns {*[]} 例子：[1,2,3,4,5,6]
   */
  arrayDisassemble: arr => {
    return [].concat(...arr.map(value => {
      return Array.isArray(value) ? ArrayUtils.arrayDisassemble(value) : value;
    }));
  },

  /**
   * 将原二维数组展平为一维数组
   * @param arr 例子：[[1,2],[3,4],[5,6]]
   * @returns {*[]} 例子：[1,2,3,4,5,6]
   */
  arrayFlatten: arr => arr.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []),

  /**
   * 初始化并填充具有指定值的数组
   * @param length 例子：4
   * @param value 例子：10
   * @returns {*[]} 例子：[10,10,10,10]
   */
  arrayInitWithValues: (length, value = 0) => Array(length).fill(value),


  /**
   * 将数组块划分为指定大小的较小数组。
   * 使用Array.from()创建新的数组, 这符合将生成的区块数。
   * 使用Array.slice()将新数组的每个元素映射到size长度的区块。
   * 如果原始数组不能均匀拆分, 则最终的块将包含剩余的元素。
   * @param arr 例子：[1,2,3,4,5]
   * @param size 例子：2
   * @returns {*[][]} 例子：[[1,2],[3,4],[5]]
   */
  arrayChunk: (arr, size) => {
    return Array.from(
      { length: Math.ceil(arr.length / size) },
      (value, i) => {
        return arr.slice(i * size, i * size + size);
      }
    );
  },

  /**
   * 创建基于原始数组中的位置分组的元素数组
   * 使用Math.max.apply()获取参数中最长的数组。
   * 创建一个以该长度为返回值的数组,
   * 并使用 map 函数创建一个分组元素的数组Array.from()如果参数数组的长度不同,
   * 则在未找到任何值的情况下使用undefined。
   * @param arrays 例子：['a'], [1, 2], [true, false]
   * @returns {*[][]} 例子：[['a', 1, true], [undefined, 2, false]]
   */
  arrayZip: (...arrays) => {
    const maxLength = Math.max(...arrays.map(value => value.length));
    return Array.from({ length: maxLength }).map((_, i) => {
      return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
    });
  },

  /**
   * 使用函数将数组的值映射到对象, 其中键值对由原始值作为键和映射值组成
   * @param arr 例子：[1,2,3]
   * @param fn 例子：value => value*value
   * @returns {object} 例子：{ 1: 1, 2: 4, 3: 9 }
   */
  array2Object: (arr, fn) => {
    const temp = [arr, arr.map(fn)];
    return temp[0].reduce((previousValue, currentValue, index) => {
      previousValue[currentValue] = temp[1][index];
      return previousValue;
    }, {});
  },

  /**
   * 从对象中选取与数组匹配的键，给定键的键值对
   * 使用Array.reduce()将筛选/选取的元素转换回具有相应键值对的对象 (如果在 obj 中存在该键)。
   * @param obj 例子：{ 'a': 1, 'b': '2', 'c': 3 }
   * @param arr 例子：['a', 'c']
   * @returns {object} 例子：{ 'a': 1, 'c': 3 }
   */
  arrayPickObject: (obj, arr) => {
    return arr.reduce((previousValue, currentValue) => {
      currentValue in obj && (previousValue[currentValue] = obj[currentValue]);
      return previousValue;
    }, {});
  },


};

module.exports = ArrayUtils;
