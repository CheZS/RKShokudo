import {
    Router
} from 'express';
import logger from './logger';
import RestaurantRecommender from './restaurantRecommender';
import template from './index.html';
import manifest from './manifest.json';

const rootRouter = new Router();
const recommender = new RestaurantRecommender();

rootRouter.use(logMiddleware);

rootRouter.get('/', (req, res) => {
    res.send(template);
});

rootRouter.get('/random', (req, res) => {
    res.send(recommender.randomGetRestaurantName());
});

rootRouter.get('/list', (req, res) => {
    res.send(JSON.stringify(recommender.getAll()));
});

rootRouter.get('/manifest.json', (req, res) => {
    res.send(manifest);
});

export default rootRouter;

function logMiddleware(req, res, next) {
    let msg = {
        uri: req.originalUrl,
        method: req.method,
        ip: req.ip
    };
    logger.info(msg);
    next();
}
