module.exports = {

	/**
	 * 匹配正整数
	 * @param {*} val 
	 * @returns 
	 */
	isPositiveNum: function (val) {
		return /^[1-9]d*$/.test(val);
	},

	/**
	 * 匹配负整数
	 * @param {*} val 
	 * @returns 
	 */
	isNegativeNum: function (val) {
		return /^-[1-9]d*$/.test(val);
	},

	/**
	 * 匹配整数
	 * @param {*} val 
	 * @returns 
	 */
	isInteger (val) {
		return /^(-|\+)?\d+$/.test(val);
	},

	/**
	 * 匹配非负浮点数
	 * @param {*} val 
	 * @returns 
	 */
	isNotNegativeFloatNum: function (val) {
		return /^\d+(\.\d+)?$/.test(val);
	},

	/**
	 * 匹配由 A-Z a-z 英文字母组成的字符串
	 * @param {*} val 
	 * @returns 
	 */
	isAZaz: function (val) {
		return /^[A-Za-z]+$/.test(val);
	},

	/**
	 * 匹配由 26 个英文字母的大写组成的字符串
	 * @param {*} val 
	 * @returns 
	 */
	isAZ: function (val) {
		return /^[A-Z]+$/.test(val);
	},
	/**
	 * 匹配由 26 个英文字母的小写组成的字符串
	 * @param {*} val 
	 * @returns 
	 */
	isaz: function (val) {
		return /^[a-z]+$/.test(val);
	},

	/**
	 * 匹配电子邮件地址
	 * @param {*} val 
	 * @returns 
	 */
	isEmailAddress (val) {
		return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
	}


};
