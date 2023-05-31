module.exports = {
  /**
   * 返回数字数组的平均值
   * @param {*} arr 例子：[1,2,3]
   * @returns {number} 例子：2
   */
  mathAvg: arr => {
    arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / arr.length;
  },
  /**
   * 返回一个数字数组的总和
   * @param {*} arr 例子：[1,2,3,4]
   * @returns {number} 例子：10
   */
  mathSum: arr => {
    arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  },
  /**
   * 将数字转换为数字数组
   * @param {*} number 例子：2334
   * @returns {*[]} 例子：[2, 3, 3, 4]
   */
  mathNum2Arr: number => {
    [...'' + number].map(i => parseInt(i));
  },
  /**
   * 产生两个参数之间的随机数
   * @param lowerValue
   * @param upperValue
   * @returns {number}
   */
  mathRandom: (lowerValue, upperValue) => {
    const choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
  },
  /**
   * 返回两点之间的距离
   * @param {*} x0 
   * @param {*} y0 
   * @param {*} x1 
   * @param {*} y1 
   * @returns {number}
   */
  mathDistance: (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0),

  /**
   * 返回从0开始的长度为n的斐波那契数列
   * @param {number} n 例子：5
   * @returns {*[]} 例子：[0,1,1,2,3]
   */
  mathFibonacci: n => {
    Array(n).fill(0).reduce((previousValue, currentValue, index) => {
      return previousValue.concat(index > 1 ? previousValue[index - 1] + previousValue[index - 2] : index);
    }, []);
  },

  /**
   * 计算两个数字之间最大的公约数
   * @param {*} x 例子：8
   * @param {*} y 例子：36
   * @returns {number} 例子：4
   */
  mathCD: (x, y) => !y ? x : mathCD(y, x % y),
  /**
   * 返回数组的中间,若length为奇数返回中间的数，若为偶数，返回中间两个值的平均值
   * @param {*} arr 例子：[5,6,50,1,-5]
   * @returns {number} 例子：5
   */
  mathMedian: arr => {
    const mid = Math.floor(arr.length / 2);
    const temp = arr.sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? temp[mid] : (temp[mid - 1] + temp[mid]) / 2;
  },

  /**
   * 将数字四舍五入到指定的位数
   * @param {*} n 例子：1.005
   * @param {*} decimals 例子：2
   * @returns {number} 例子：1.01
   */
  mathRound: (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`),


};
