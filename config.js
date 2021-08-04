import * as dotenv from 'dotenv';

dotenv.config();

const {
	MONGO_URI,
	DB_URL,
	PG_USER,
	PG_PASSWORD,
	PG_HOST,
	PG_PORT
} = process.env;

export {
	MONGO_URI as mongoConnString,
	DB_URL as pgConnString,
	PG_USER as pgUser,
	PG_PASSWORD as pgPass,
	PG_HOST as pgHost,
	PG_PORT as pgPort
};
