const fs = require('fs');
const path = require('path');
const {move} = require('fs-extra');
const moveFile = require('./moveFile')

let src = 'C:\\Users\\Manav\\Desktop';

fs.readdir(src, (err, files) => {
	for (let i = 0; i < files.length; i++) {
		let extension = files[i].split('.');
		console.log(extension[1])
		let imageExt = ['png', 'jpg', 'jpeg']
		let programs = ['js', 'java']
		let text = ['txt'];
		if (extension[1] !== undefined) {
			let dest = path.join(src,extension[1]);
			moveFile(src,dest,files[i]);
		};
		

	};
})

//MADE BY Manav Malhotra Feel Free To Connect github:@ManavMalhotra