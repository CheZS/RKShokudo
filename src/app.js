import express from 'express';
import log4js from 'log4js';
import path from 'path';
import logger from './logger';
import apiRouter from './router';

const app = express();

configServer(app);
launchServer(app);

function configServer(app) {
    app.set('port', process.env.PORT || 80);
    app.use(log4js.connectLogger(logger));
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.use('/api', apiRouter);
}

function launchServer(app) {
    let port = app.get('port');
    app.listen(port, () => {
        logger.info(`** Server is listening on localhost:${port}, open your browser on http://localhost:${port} **`);
    });
}
