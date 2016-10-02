// apparently this is an actual node package but this is roughly what it contains

module.exports = sleep;

function sleep(ms) {
    return function(cb) {
        setTimeout(cb, ms);
    };
}
