const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('messageLogged', function (arg) {
    console.log('message logged', arg.id, arg.name)
});

emitter.emit('messageLogged', { id: 1, name: 'Krishna' });