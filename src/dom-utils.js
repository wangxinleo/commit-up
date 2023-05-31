module.exports = {
	// 判断某个节点是否有某个class
	domHasClass: function (node, className) {
		if (node.className) {
			return node.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
		}
		else {
			return false;
		}
	},
	// JSONToFile: 将 JSON 对象写入文件
	// 使用fs.writeFile()、模板文本和JSON.stringify()将json对象写入.json文件
	domJsonToFile: (obj, filename) => {
		const fs = require("fs");
		var o = obj, f = filename;
		const _JSONToFile = (_obj, _filename) => fs.writeFile(`${_filename}.json`, JSON.stringify(_obj, null, 2));
		return _JSONToFile(o, f);
	},
}