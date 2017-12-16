import {
    Router
} from 'express';
import logger from './logger';
import RestaurantRecommender from './restaurantRecommender';

const apiRouter = new Router();
const recommender = new RestaurantRecommender();

apiRouter.use(logMiddleware);

apiRouter.get('/random', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ name: recommender.randomGetRestaurantName() }));
});

apiRouter.get('/list', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(recommender.getAll()));
});

export default apiRouter;

function logMiddleware(req, res, next) {
    let msg = {
        uri: req.originalUrl,
        method: req.method,
        ip: req.ip
    };
    logger.info(msg);
    next();
}
