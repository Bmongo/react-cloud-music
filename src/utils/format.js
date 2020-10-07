export const getCount = data => {
	if(typeof data !== 'number') return data;
	if(data < 10000) {
		return data
	} else if(data < 100000000) {
		return Math.floor(data / 10000) + "万"
	} else {
		return Math.floor(data / 100000000) + "亿"
	}
}

export const formatDate = (time, fmt) => {
	let t = new Date(time)

	if(/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, t.getFullYear()).substr(4 - RegExp.$1.length);
	}

	let map = {
		"M+": t.getMonth() + 1,
		"d+": t.getDate(),
		"h+": t.getHours(),
    'm+': t.getMinutes(),
    's+': t.getSeconds()
	}

	for(let k in map) {
		if(new RegExp(`(${k})`).test(fmt)) {
			let str = map[k] + ''
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length <= 1 ? str : padLeftZero(str))
		}
	}

	return fmt;
}

const padLeftZero = str => {
	return ('00' + str).substr(str.length)
}

export const formatMinuteSecond = time => {
	// time单位是s
	return formatDate(time || 0, "mm:ss")
}
