//npm install koa-static
const Koa2 = require('koa2'),
    fs = require("fs"),
    _ = require('koa-route'),
    path = require('path'),
    server = require('koa-static')(__dirname + '/img/'),//这里将img文件夹设为静态资源目录，然后html里只需要写图片名即可
    app = new Koa2();

const route = {
    index: ctx => {
        ctx.type = 'html';
        ctx.body = fs.createReadStream(__dirname + '/html/3.html');
    }
}    

app
    .use(server)  //加载静态资源配置
    .use(_.get('/', route.index))  
    .listen(1000);

console.log("Now is listening 1000");
