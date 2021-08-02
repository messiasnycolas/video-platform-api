import mongoose from 'mongoose';
import {mongoConnString} from '../config.js';

function connect() {
	return mongoose.connect(
		mongoConnString,
		{useNewUrlParser: true, useUnifiedTopology: true});
}

export {connect};
