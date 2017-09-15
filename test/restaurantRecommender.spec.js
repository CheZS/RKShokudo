import RestaurantRecommender from '../src/restaurantRecommender';

describe('RestaurantRecommender', () => {
  it('test getAll', () => {
    console.log('test getAll');
    var expected = inside.concat(outside);
    var real = new RestaurantRecommender().getAll();
    expect(expected).toEqual(real);
  });
});

let inside = [{
        name: '重庆小面',
        value: 5
    },
    {
        name: '真功夫',
        value: 5
    },
    {
        name: '合利屋',
        value: 5
    },
    {
        name: 'Subway',
        value: 7
    },
    {
        name: '罗森',
        value: 5
    },
    {
        name: '顺口溜',
        value: 5
    },
    {
        name: '权味',
        value: 5
    }
];

let outside = [{
        name: '711',
        value: 10
    },
    {
        name: '云南菜',
        value: 1
    },
    {
        name: '京味张',
        value: 1
    },
    {
        name: '物理所',
        value: 5
    },
    {
        name: '绫罗岛',
        value: 1
    },
    {
        name: '小吊梨汤',
        value: 1
    },
    {
        name: '翠清酒家',
        value: 1
    },
    {
        name: '食堂',
        value: 5
    },
    {
        name: '小江南',
        value: 5
    },
    {
        name: '山里城',
        value: 5
    },
    {
        name: '九朝一品',
        value: 5
    }
];
