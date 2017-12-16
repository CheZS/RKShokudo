// TODO should be refactored by yaml file
var inside = [{
        name: '周三老面馆',
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
        value: 5
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
    },
    {
        name: '知味湘',
        value: 5
    },
    {
        name: '饺子',
        value: 5
    },
    {
        name: '常德津市牛肉米粉',
        value: 5
    },
    {
        name: '食堂',
        value: 5
    },
    {
        name: '小吊梨汤',
        value: 1
    },
    {
        name: '菊水亭',
        value: 1
    },
    {
        name: '蜀品香',
        value: 1
    },
    {
        name: '麻里麻里',
        value: 1
    },
    {
        name: '花家怡园',
        value: 1
    },
    {
        name: '苏浙汇',
        value: 1
    }
];

var outside = [{
        name: '711',
        value: 5
    },
    {
        name: '云南菜',
        value: 1
    },
    {
        name: '蜀道印象',
        value: 1
    },
    {
        name: '物理所',
        value: 1
    },
    {
        name: '绫罗岛',
        value: 1
    },
    {
        name: '翠清酒家',
        value: 1
    },
    {
        name: '宽板凳',
        value: 1
    },
    {
        name: '小江南',
        value: 5
    },
    {
        name: '坛肉',
        value: 5
    },
    {
        name: '山里城',
        value: 5
    },
    {
        name: '九朝一品',
        value: 5
    },
    {
        name: '小吊鸡汤',
        value: 1
    },
    {
        name: '懒',
        value: 1
    }
];

var restaurants = {
    inside: inside,
    outside: outside
};

configRestaurants();

module.exports = restaurants;

function configRestaurants() {
  restaurants.list = (inside || []).concat(outside);

  restaurants.sumValue = function(filter) {
      if (filter !== 'inside' && filter !== 'outside') {
          filter = 'list';
      }

      var sum = 0;
      for (var i = 0; i < restaurants[filter].length; i++) {
          sum += restaurants[filter][i].value;
      }
      return sum;
  };
}
