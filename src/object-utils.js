module.exports = {
	/**
	 * 移除从 JSON 对象指定的属性之外的任何特性
	 * @param {*} obj 例子：{a: 1, b: 2, children: {a: 1, b: 2}}
	 * @param {*} keysToKeep 例子：["a"]
	 * @param {*} childIndicator 例子："children"
	 * @returns {object} 例子：{ a: 1, children : { a: 1}}
	 */
	objectClean: (obj, keysToKeep = [], childIndicator) => {
		let o = obj, k = keysToKeep, c = childIndicator;
		_cleanObj = (_obj, _keysToKeep = [], _childIndicator) => {
			Object.keys(_obj).forEach(key => {
				if (key === _childIndicator) {
					_cleanObj(_obj[key], _keysToKeep, _childIndicator);
				}
				else if (!_keysToKeep.includes(key)) {
					delete _obj[key];
				}
			});
		};
		return _cleanObj(o, k, c);
	},

	/**
	 * 从给定的键值对创建对象
	 * @param {*} arr 例子：[['a',1],['b',2]]
	 * @returns {object} 例子：{a: 1, b: 2}
	 */
	objectFromPairs: arr => arr.reduce((a, v) => (a[v[0]] = v[1], a), {}),

	/**
	 * 从对象创建键值对数组
	 * @param {*} obj 例子：{a: 1, b: 2}
	 * @returns {object} 例子：[['a',1],['b',2]]
	 */
	objectToPairs: obj => Object.keys(obj).map(k => [k, obj[k]]),
}