import restaurants from './restaurants';

class RestaurantRecommender {
    getAll() {
        return restaurants.list;
    }
    getRestaurantsConfig() {
        return restaurants;
    }
    randomGetRestaurantName() {
        let rand = Math.floor(Math.random() * restaurants.sumValue);
        let targetRestaurant = restaurants.list.find(restaurantObj => {
            rand -= restaurantObj.value;
            return rand < 0;
        }) || restaurants.list[0];
        return targetRestaurant.name;
    }
}

export default RestaurantRecommender;
