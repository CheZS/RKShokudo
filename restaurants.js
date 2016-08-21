
var inside = [
	{
		name: "重庆小面",
		value: 10
	},
	{
		name: "真功夫",
		value: 5
	},
	{
		name: "合利屋",
		value: 5
	},
	{
		name: "Subway",
		value: 10
	},
	{
		name: "罗森",
		value: 10
	},
	{
		name: "顺口溜",
		value: 5
	},
	{
		name: "权味",
		value: 5
	}
];

var outside = [
	{
		name: "711",
		value: 10
	},
	{
		name: "云南菜",
		value: 1
	},
	{
		name: "京味张",
		value: 1
	},
	{
		name: "物理所",
		value: 1
	},
	{
		name: "绫罗岛",
		value: 1
	},
	{
		name: "小吊梨汤",
		value: 1
	},
	// {
	// 	name: "翠清酒家",
	// 	value: 1
	// },
	{
		name: "食堂",
		value: 10
	}
];

var restaurants = {
	list: inside.concat(outside)
};

restaurants.sumValue = (function() {
	var sum = 0;
	for (var i = 0; i < restaurants.list.length; i++) {
		sum += restaurants.list[i].value;
	}
	return sum;
})();

module.exports = restaurants;