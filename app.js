var koa = require('koa');
var app = koa();

app.use(function *(next) {
    var start = new Date();
    yield next;
    var ms = new Date() - start;
    this.set('X-Response-Time', ms + 'ms');
});

app.use(function *() {
    this.body = 'Hello, world!';
});

app.listen(3000);
