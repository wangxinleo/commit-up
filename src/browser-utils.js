// 浏览器

module.exports = {
  /**
   * 如果页的底部可见, 则返回true, 否则为false
   * @returns {boolean}
   */
  browserBottomVisible: () => {
    // 使用`scrollY`、`scrollHeight`和`clientHeight`来确定页面底部是否可见。
    return document.documentElement.clientHeight
      + window.scrollY >= document.documentElement.scrollHeight
      || document.documentElement.clientHeight;
  },
  /**
   * 返回当前 URL
   * @returns {string} 
   */
  browserCurrentURL: () => window.location.href,
  /**
   * 返回当前页的滚动位置
   * @param {*} el 
   * @returns {object} 
   */
  browserGetScrollPosition: (el = window) => {
    return {
      x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
      y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
    };
  },
  /**
   * 返回一个包含当前 URL 参数的对象。
   * @param string url 例子：http://url.com/page?name=Adam&surname=Smith
   * @returns {object} 例子：{name: 'Adam', surname: 'Smith'}
   */
  browserGetURLParam: url => {
    url.match(/([^?=&]+)(=([^&]*))/g).reduce((previousValue, currentValue) => {
      previousValue[currentValue.slice(0, currentValue.indexOf('='))] = currentValue.slice(currentValue.indexOf('=') + 1);
      return previousValue;
    }, {});
  },
  /**
   * 重定向到指定的 URL。
   * @param {*} url 
   * @param {*} asLink 
   */
  browserRedirect: (url, asLink = true) => {
    // true:模拟单击
    // false：HTTP重定向
    asLink ? window.location.href = url : window.location.replace(url);
  },
  /**
   * 平滑滚动到页面顶部
   */
  browserScrollToTop: () => {
    // 从顶部获取距离
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      // 对滚动进行动画处理
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  }
};

