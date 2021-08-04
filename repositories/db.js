import { pgHost, pgPort, pgUser, pgPass } from '../config.js';
import Sequelize from 'sequelize';

const sequelize = new Sequelize({
		dialect: 'postgres',
		host: pgHost,
		port: pgPort,
		database: 'db_videos',
		username: pgUser,
		password: pgPass,
		logging: false,
		define: {
			timestamps: false,
		}
	});

export default sequelize;
