const EventEmitter = require('events');
class Logger extends EventEmitter {
    log(message) {
        console.log('message....', message)
        this.emit('messageLogged', { name: 'Krishna' })
    }
}

module.exports = Logger;