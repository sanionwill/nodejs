//npm install koa-body
const Koa2 = require('koa2'),
    fs = require("fs"),
    _ = require('koa-route'),
    koabody = require('koa-body'),
    path = require('path'),
    app = new Koa2();

const route = {
    index: ctx => {
        ctx.type = 'html';
        ctx.body = fs.createReadStream(__dirname + '/html/4.html');
    },
    upload: ctx => {
        var body = ctx.request.body;
        ctx.type = 'text';
        ctx.body = JSON.stringify(body);
    }
}
   

app
    .use(koabody())
    .use(_.get('/', route.index))  
    .use(_.post('/upload', route.upload))  
    .listen(1000);

console.log("Now is listening 1000");
