import restaurants from './restaurants';

class RestaurantRecommender {
    getAll(filter) {
        if (filter !== 'inside' && filter !== 'outside') {
            filter = 'list';
        }

        return restaurants[filter];
    }
    getRestaurantsConfig() {
        return restaurants;
    }
    randomGetRestaurantName(filter) {
        if (filter !== 'inside' && filter !== 'outside') {
            filter = 'list';
        }

        let rand = Math.floor(Math.random() * restaurants.sumValue(filter));
        let targetRestaurant = restaurants[filter].find(restaurantObj => {
            rand -= restaurantObj.value;
            return rand < 0;
        }) || restaurants[filter][0];
        return targetRestaurant.name;
    }
}

export default RestaurantRecommender;
