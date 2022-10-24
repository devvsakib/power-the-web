import path from 'path'

const GetRootDirectory = () => {
	if (process.env.NODE_ENV === 'production')
		return path.resolve(__dirname, '../')

	return path.resolve(__dirname, '../..')
}

export default GetRootDirectory
