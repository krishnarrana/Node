const os = require('os');

var totalMemory = os.totalmem();
var freeMenory = os.freemem();

console.log(totalMemory, freeMenory)