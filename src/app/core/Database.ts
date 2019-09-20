/**
 * Define Database connection
 *
 */

import * as mongoose from 'mongoose';

import * as bluebird from 'bluebird';
import { MongoError } from 'mongodb';

import Locals from './Locals';

export class Database {
	// Initialize your database pool
	public static init (): any {
		const dsn = Locals.config().mongooseUrl;
		const options = { useNewUrlParser: true, useUnifiedTopology: true };

		(<any>mongoose).Promise = bluebird;

		mongoose.connect(dsn, options, (error: MongoError) => {
			// handle the error case
			if (error) {
				console.info('Failed to connect to the Mongo server!!');
				console.log(error);
				throw error;
			}
		});
	}
}

export default mongoose;
