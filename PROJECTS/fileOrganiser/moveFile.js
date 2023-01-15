const fs = require('fs');
const path = require('path');

const {move} = require('fs-extra');

function moveFile(src, dest,files) {

	if (fs.existsSync(dest)) {
		move(`${src}//${files}`, path.join(dest,files), (err) => {
			if (err) console.log(err)
		})

	} else {
		fs.mkdir(dest, (err, res) => {
			move(`${src}//${files}`, path.join(dest,files), (err) => {
				if (err) console.log(err)
			})
	
		})
	}
	console.log('Successfully Moved' + files)

}

module.exports = moveFile;