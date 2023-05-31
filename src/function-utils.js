module.exports = {

  /**
   * 循环遍历包含异步事件的函数数组
   * @param {*} fns 例子：[
      next => { console.log('0 seconds'); setTimeout(next, 1000); },
      next => { console.log('1 second');  setTimeout(next, 1000); },
      next => { console.log('2 seconds'); }]
   */
  functionChainAsync: fns => {
    let curr = 0;
    const next = () => {
      fns[curr++](next);
    };
    next();
  },
  /**
   * 转换异步函数的callback返回成promise
   * @param func
   * @returns {function(...[*]): Promise<unknown>}
   */
  functionPromisify: func => {
    return (...args) => {
      return new Promise((resolve, reject) => {
        func(...args, (err, result) => {
          err ? reject(err) : resolve(result);
        });
      });
    };
  },
  /**
   * 传入一个函数数组，使每一个函数运行结束后再进入下一个函数
   * @param arr 例子：[() => return new Promise, () => return new Promise]
   * @returns {*}
   */
  functionPromisesInSeries: arr => {
    return arr.reduce((previousValue, currentValue) => {
      previousValue.then(currentValue);
      return Promise.resolve();
    });
  },
};
