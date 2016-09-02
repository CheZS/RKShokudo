var express = require('express');
var app = express();
var log4js = require('log4js');
var path = require('path');

var restaurants = require('./restaurants');
////////////////////////////
// config server
////////////////////////////
log4js.configure({
	appenders: [
		{ type: 'console' },
		{
			type: 'file',
			filename: 'RKShokudo.log',
			maxLogSize: 1024,
			backups: 3,
			category: 'normal'
		}
	]
});
var logger = log4js.getLogger('normal');
logger.setLevel('INFO');

app.set('port', 10080);
app.use(log4js.connectLogger(logger, {level: log4js.levels.INFO}));
app.use(express.static(path.join(__dirname, './static')));

////////////////////////////
// router
////////////////////////////
app.get('/', (req, res) => {
	var rand = Math.floor(Math.random() * restaurants.sumValue);
	var restaurant = restaurants.list[0].name;
	for (var i = 0; i < restaurants.list.length; i++) {
		rand -= restaurants.list[i].value;
		if (rand < 0) {
			restaurant = restaurants.list[i].name;
			break;
		}
	}
	var head = '<head></head>';
	var script = '<script src="//cdn.bootcss.com/jquery/3.1.0/jquery.min.js"></script>';
	script += '<script src="rkshokudo.js"></script>'
	var body = '<body><p id="restaurant" style="font-size:200">' + restaurant + '</p><button type="button" id="randomButton" style="font-size:80">try again</button>' + script + '</body>';
	res.send('<html>' + head + body + '</html>');
});

app.get('/random', (req, res) => {
	var rand = Math.floor(Math.random() * restaurants.sumValue);
	var restaurant = restaurants.list[0].name;
	for (var i = 0; i < restaurants.list.length; i++) {
		rand -= restaurants.list[i].value;
		if (rand < 0) {
			restaurant = restaurants.list[i].name;
			break;
		}
	}
	res.send(restaurant);
});

app.get('/list', (req, res) => {
	res.send(JSON.stringify(restaurants));
});

app.listen(app.get('port'), () => {
	console.log('express listening on port ' + app.get('port') + '.');
});
