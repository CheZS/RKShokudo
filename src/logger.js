import * as log4js from 'log4js';

log4js.configure({
    appenders: [{
            type: 'console'
        },
        {
            type: 'file',
            filename: 'RKShokudo.log',
            maxLogSize: 1024,
            backups: 3,
            category: 'normal'
        }
    ]
});
let logger = log4js.getLogger('normal');
logger.setLevel('INFO');

export default logger;
