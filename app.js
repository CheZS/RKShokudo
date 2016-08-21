var express = require('express');
var app = express();
var log4js = require('log4js');

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

////////////////////////////
// router
////////////////////////////
app.get('/random', (req, res) => {
	res.send(restaurants[Math.floor(Math.random() * restaurants.length)]);
});

app.listen(app.get('port'), () => {
	console.log('express listening on port ' + app.get('port') + '.');
});
