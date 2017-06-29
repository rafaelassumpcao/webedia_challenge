/**
 * the main entry for the server side application
 */

import App from './app';
import { connectToMongoDB } from './dbconfig';

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => 
  console.log(`============= LISTENING ON PORT ${PORT} =============\n
  PLEASE WAIT WEBPACK COMPILE 
  TO ACCESS THE LOCALHOST URL =>\x1b[34m http://localhost:3000/ \x1b[0m\n`));

connectToMongoDB();