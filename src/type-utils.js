module.exports = {
	/**
	 * 判断是否为一个数字
	 * @param {*} value 
	 * @returns 
	 */
	isNumber: function (value) {
		return !isNaN(parseFloat(value)) && isFinite(value);
	},

	/**
	 * 判断是否为数组
	 * @param {*} value 
	 * @returns 
	 */
	isArray: function (value) {
		return Object.prototype.toString.call(value) == "[object Array]";
	},


	/**
	 * 判断是否为函数
	 * @param {*} value 
	 * @returns 
	 */
	isFunction: function (value) {
		return Object.prototype.toString.call(value) == "[object Function]";
	},

	/**
	 * 判断是否为正则表达式
	 * @param {*} value 
	 * @returns 
	 */
	isRegExp: function (value) {
		return Object.prototype.toString.call(value) == "[object RegExp]";
	},

	/**
	 * 判断是否字符串
	 * @param {*} str 
	 * @returns 
	 */
	isString: str => Object.prototype.toString.call(str) == "[object String]",


	/**
	 * 判断布尔值
	 * @param {*} val 
	 * @returns 
	 */
	isBoolean: val => Object.prototype.toString.call(val) == "[object Boolean]",


	/**
	 * 判断是否为Symbol
	 * @param {*} val 
	 * @returns 
	 */
	isSymbol: val => Object.prototype.toString.call(val) == "[object Symbol]",



}