// 洗牌算法
export const shuffleFun = arr => {
	if (!(arr instanceof Array)) return arr;

	let len = arr.length;
	while (len > 0) {
		let ran = Math.floor(Math.random() * len--)
		let tmp = arr[len]
		arr[len] = arr[ran]
		arr[ran] = tmp
	}

	return arr
}

export const lyricParse = str => {
	if (!str || typeof str !== 'string') return []
	let strArr = str.split("\n")
	return strArr.filter(v => v).map(v => {
		let item = {}
		let time = v.match(/^\[(.*)\](.*)/)[1]
		let min = Number(time.split(":")[0])
		let r = time.split(":")[1]
		let sen = Number(r.split(".")[0])
		let sm = Number(r.split(".")[1])
		item.time = min * 60000 + sen * 1000 + sm
		item.lrc = v.match(/^\[(.*)\](.*)/)[2].trim()
		return item
	}).filter(v => v.lrc)
}

export const urlParamsParse = str => {
	if (!str) return null;
	str = str[0] === '?' ? str.substr(1,) : str
	const data = str.split("&").map(v => v.split("="));
	let obj = {}
	for (let i = 0; i < data.length; i += 2) {
		obj[data[i][0]] = data[i][1]
	}
	return obj
}
