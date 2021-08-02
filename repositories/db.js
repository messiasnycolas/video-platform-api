import {connectionString} from '../config.js';
import Sequelize from 'sequelize';

const sequelize = new Sequelize(
	connectionString,
	{
		dialect: 'postgres',
		define: {
			timestamps: false,
		},
	},
);

export default sequelize;
