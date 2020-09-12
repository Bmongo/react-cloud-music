const path = require("path")
const resolve = src => path.resolve(__dirname, src)

module.exports = {
	webpack: {
		alias: {
			"@": resolve("src")
		}
	}
}