// 洗牌算法
export const shuffleFun = arr => {
	if (!(arr instanceof Array)) return arr;

	let len = arr.length;
	while (--len) {
		let ran = Math.floor(Math.random() * len)
		let tmp = arr[len]
		arr[len] = arr[ran]
		arr[ran] = tmp
	}

	return arr
}