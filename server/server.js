import App from './app';
import { connectToMongoDB } from './dbconfig';

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => console.log(`listening on port ${PORT}`));

connectToMongoDB();