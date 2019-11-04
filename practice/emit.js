const EventEmitter = require('events');
var Logger = require('./logger')

const logger = new Logger;


logger.on('messageLogged', (arg) => {
    console.log('listner called', arg)
});
logger.log('message')