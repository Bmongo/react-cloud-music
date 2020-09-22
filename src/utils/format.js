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