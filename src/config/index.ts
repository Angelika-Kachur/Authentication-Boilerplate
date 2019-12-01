import _ from 'lodash'

import devConfig from './devConfig'
// import testConfig from './devConfig'
// import prodConfig from './devConfig'

const baseConfig = {}

let envConfig

switch (process.env.NODE_ENV) {
	case 'development':
		envConfig = devConfig
		break

	// case 'production':
	// 	envConfig = prodConfig
	// 	break

	// case 'test':
	// 	envConfig = testConfig
	// 	break

	default:
		envConfig = devConfig
}

const config = _.merge(baseConfig, envConfig)

export default config
