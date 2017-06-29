/**
 * everything related to database configuration
 * ex: connection, end connections and kill finish node process
 */

import mongoose from 'mongoose';

const PORT = 27017;
const DATA_BASE_NAME = 'webedia'

const URL = "mongodb://webedia:webedia@ds139352.mlab.com:39352/webedia"

mongoose.Promise = global.Promise;

export const connectToMongoDB = () => {
    mongoose.connect(URL);
}

mongoose.connection
    .once('open', () => 
      console.log(`\x1b[32m CONNECTION TO webedia (mLab instance) WAS SUCCESSFUL! \x1b[0m`))
    .on('error', error => console.warn('Warning', error));

process.on('SIGINT', () => {  
  mongoose.connection.close(()  => {
    console.log(`
      \x1b[47m \x1b[30m CONNECTION TO MONGODB INSTANCE CLOSED\x1b[0m
    `);
    process.exit(0);
  }); 
}); 