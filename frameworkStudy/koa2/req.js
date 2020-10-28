//npm install koa2
const Koa2 = require('koa2'),
    fs = require("fs"),
    path = require('path'),
    app = new Koa2();


app.use(async ctx => {
    switch (ctx.accepts('json','html','text')) {
        case 'json':
            ctx.type = "json";
            ctx.body = '<p>json</p>';
            break;
        case 'html'://浏览器访问时
            ctx.type = "html";
            //ctx.body = '<p>html</p>';//或者使用下面一行
            ctx.body = fs.createReadStream(path.join(__dirname,'./html/1.html'));
            break;
        case 'text':
            ctx.type = "text";
            ctx.body = '<p>text</p>';
            break;
        default:
            ctx.throw(406,'只支持json/html/text');
            break;
    }
}).listen(1000);

console.log("Now is listening 1000");
