import mongoose from 'mongoose';

const PORT = 27017;
const DATA_BASE_NAME = 'webedia'

const URL = "mongodb://webedia:webedia@ds139352.mlab.com:39352/webedia"

mongoose.Promise = global.Promise;

export const connectToMongoDB = () => {
    mongoose.connect(URL);
}

mongoose.connection
    .once('open', () => console.log("Connected to localhost"))
    .on('error', error => console.warn('Warning', error));

process.on('SIGINT', () => {  
  mongoose.connection.close(()  => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  }); 
}); 