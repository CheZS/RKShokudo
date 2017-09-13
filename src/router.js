import {
    Router
} from 'express';
import logger from './logger';
import RestaurantRecommender from './restaurantRecommender';

const rootRouter = new Router();
const recommender = new RestaurantRecommender();

rootRouter.use(logMiddleware);

rootRouter.get('/', (req, res) => {
    let restaurant = recommender.randomGetRestaurantName();
    const template =
        `
    <html>
    <head>
      <link rel="stylesheet" href="css/rkshokudo.css">
    </head>
    <body>
      <p id="restaurant" class="restaurant-name">
        ${restaurant}
      </p>
      <button type="button" id="randomButton" class="random-button">try again</button>
      <script src="//cdn.bootcss.com/jquery/3.1.0/jquery.min.js"></script>
      <script src="js/rkshokudo.js"></script>
    </body>
    </html>
  `;
    res.send(template);
});

rootRouter.get('/random', (req, res) => {
    res.send(recommender.randomGetRestaurantName());
});

rootRouter.get('/list', (req, res) => {
    res.send(JSON.stringify(recommender.getAll()));
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
