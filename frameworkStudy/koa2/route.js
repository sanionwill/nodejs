const Koa2 = require('koa2'),
    fs = require("fs"),
    path = require('path'),
    app = new Koa2();

app.use(async ctx => {
    console.log(ctx.type);

    switch (ctx.url) {
        case '/'://浏览器访问 http://localhost:1000/
            ctx.type = 'html';
            ctx.body = fs.createReadStream(path.join(__dirname , './html/1.html'));
            break;
        case '/2'://浏览器访问 http://localhost:1000/2
            ctx.type = 'html';
            ctx.body = fs.createReadStream(path.join(__dirname , './html/2.html'));
            break;
        default:
            ctx.throw(406, '只支持json/html/text');
            break;
    }
}).listen(1000);

console.log("Now is listening 1000");