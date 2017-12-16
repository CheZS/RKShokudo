import RestaurantRecommender from '../src/restaurantRecommender';
import restaurants from '../src/restaurants';

describe('RestaurantRecommender', () => {
  it('test getAll', () => {
    var expected = restaurants.inside.concat(restaurants.outside);
    var real = new RestaurantRecommender().getAll();
    expect(expected).toEqual(real);
  });
});
