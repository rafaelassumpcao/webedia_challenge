import express from 'express';
import bodyParser from 'body-parser';

import { webpackBridge } from './util';
import routes from './routes/routes';

const app = express();

app.use(bodyParser.json());

webpackBridge(app);

app.get('/', (req,res) => res.redirect('/webedia') );

app.use('/webedia', routes);


//app.all(['/', '/api'], (req, res, next) => res.redirect('/api/docs'));


//if any route was not found send 404 status code
app.use((req, res, next) => res.statusCode(404));

export default app;