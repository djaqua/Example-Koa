var sleep = require('./co-sleep.js');


module.exports = function *() {
    yield sleep(1000);

    return 'timer generator';
}
