module.exports = {

	/**
	 * 清除字符串左侧或右侧的任意空格
	 * @param {*} str 
	 * @returns 
	 */
	trim: function (str) {
		return str.replace(/^\s+|\s+$/g, "");
	},

	/**
	 * 清除左空格
	 * @param {*} str 
	 * @returns 
	 */
	ltrim: function (str) {
		return str.replace(/^\s+/, "");
	},

	/**
	 * 清除右空格
	 * @param {*} val 
	 * @returns 
	 */
	rtrim: function (val) {
		return val.replace(/\s+$/, "");
	},

	/**
	 * 只返回字符串a-z字符
	 * @param {*} str 
	 * @returns 
	 */
	onlyLetters: function (str) {
		return str.toLowerCase().replace(/[^a-z]/g, "");
	},

	/**
	 * 只返回字符串中a-z和数字
	 * @param {*} str 
	 * @returns 
	 */
	onlyLettersNums: function (str) {
		return str.toLowerCase().replace(/[^a-z,0-9]/g, "");
	},

	/**
	 * 将字符串的第一个字母大写
	 * @param {*} param 例子：myName
	 * @param {*} lowerRest 例子：false
	 * @returns {string} 例子：MyName
	 */
	stringCapitalize: ([first, ...rest], lowerRest = false) => {
		// true:其余字母转换为小写
		// false：其余字母保持原格式
		return first.toUpperCase() + (lowerRest ? rest.join("").toLowerCase() : rest.join(""));
	},

	/**
	 * 将字符串中每个单词的首字母大写
	 * @param {*} str 例子："hello world"
	 * @returns {string} 例子："Hello World"
	 */
	stringCapitalizeEveryWord: str => str.replace(/\b[a-z]/g, char => char.toUpperCase()),

	/**
	 * 从驼峰表示法转换为字符串形式
	 * @param {*} str 例子："someDatabaseFieldName"
	 * @param {*} separator 例子:" "
	 * @returns {string} 例子："some database field name"
	 */
	stringFromCamelCase: (str, separator = "_") => str.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2').toLowerCase(),

	/**
	 * 反转字符串
	 * @param {*} str 例子："foobar"
	 * @returns {string} 例子："raboof"
	 */
	stringReverse: str => [...str].reverse().join(""),

	/**
	 * 按字母顺序对字符串中的字符进行排序
	 * @param {*} str 例子："cabbage"
	 * @returns {string} 例子："aabbceg" 
	 */
	stringSortChar: str => str.split("").sort((a, b) => a.localeCompare(b)).join(""),

	/**
	 * 字符串转换为驼峰模式
	 * @param {*} str 例子："some-javascript-property"
	 * @returns {string} 例子："someJavascriptProperty"
	 */
	stringToCamelCase: str => str.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2, offset) => p2 ? p2.toUpperCase() : p1.toLowerCase()),

	/**
	 * 将字符串截断为指定长度
	 * @param {*} str 例子："abcdefghizklmn"
	 * @param {*} num 例子：7
	 * @returns {string} 例子："abcd..."
	 */
	stringTruncate: (str, num) => str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + "..." : str,

	/**
	 * 生成 UUID, 符合RFC4122版本4
	 * @returns 
	 */
	stringUUID: () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)),

}