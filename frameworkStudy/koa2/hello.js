//npm install koa2
const Koa2 = require('koa2'),
    app = new Koa2();

app.use(async ctx => {
    ctx.body="Hello World!"
}).listen(1000);

console.log("Now is listening 1000");

//浏览器访问http://localhost:1000
//页面返回 Hello World!
