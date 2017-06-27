import express from 'express';
import bodyParser from 'body-parser';

import { webpackBridge } from './util';
import routes from './routes/routes';

const app = express();

app.use(bodyParser.json());

webpackBridge(app);

app.use('/webedia', routes);


//app.all(['/', '/api'], (req, res, next) => res.redirect('/api/docs'));


//if any route was not found send 404  code
app.use((req, res, next) => {
    const { protocol, hostname, originalUrl} = req
    res.status(404).json({
      statusCode: 404, 
      errorMessage: `The URL ( http://${hostname}${originalUrl} ) you tried does not exist.`
    })
});

export default app;