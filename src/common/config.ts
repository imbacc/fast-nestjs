const env = process.env.NODE_ENV.trim()
const md5 = require('md5-node')

/**
 * 全局配置
 */

const jwt_config = {
	dev: md5('imbacc'),
	prod: md5('by imbacc')
}

const mysql_config = {
	dev: {
		type: 'mysql',
		host: 'localhost',
		port: 3306,
		username: 'root',
		password: 'root',
		database: 'test',
		synchronize: false,
		autoLoadEntities: true,
		retryAttempts: 1,
		retryDelay: 1000,
		entities: ['dist/**/*.entity{.ts,.js}']
	},
	prod: {
		type: 'mysql',
		host: '127.0.0.1',
		port: 3306,
		username: 'root',
		password: 'root',
		database: 'test',
		// synchronize: true,
		// autoLoadEntities: true,
		// entities: [__dirname + '/**/*.entity{.ts,.js}']
	},
}

const redis_config = {
	dev: {
		host: 'localhost',
		port: 6379,
	},
	prod: {
		host: '127.0.0.1',
		port: 6379,
	}
}

export const mysql = mysql_config[env]
export const redis = redis_config[env]
export const jwtkey = jwt_config[env]
export const apitime = Boolean(env === 'dev')