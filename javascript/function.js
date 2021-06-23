const fs = require('fs')

const write = async (direct, source) => {
	const action = fs.writefile(direct, source)
	return action
}

module.exports = { write }
