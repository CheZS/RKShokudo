import express from 'express';
import log4js from 'log4js';
import path from 'path';
import logger from './logger';
import rootRouter from './router';

const app = express();

configServer(app);
launchServer(app);

function configServer(app) {
    app.set('port', 10080);
    app.use(log4js.connectLogger(logger));
    app.use(express.static(path.join(__dirname, '../static')));
    app.use('/', rootRouter);
}

function launchServer(app) {
    let port = app.get('port');
    app.listen(port, () => {
        logger.info(`** Server is listening on localhost:${port}, open your browser on http://localhost:${port} **`);
    });
}
