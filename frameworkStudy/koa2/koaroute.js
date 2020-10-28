// 注意是 koa-route ，不是 koa-router !!!

//npm install koa-route
const Koa2 = require('koa2'),
    _ = require('koa-route'),
    fs = require("fs"),
    path = require('path'),
    app = new Koa2();

const route = {
    page1: ctx => {//定义目标1
        ctx.type = 'html';
        ctx.body = fs.createReadStream(path.join(__dirname, './html/1.html'));
    },
    page2: ctx => {//定义目标2
        ctx.type = 'html';
        ctx.body = fs.createReadStream(path.join(__dirname, './html/2.html'));
    },
    '403': ctx => {//定义目标2
        ctx.type = 'html';
        ctx.body = '403页面';
    },
    '404': ctx => {//定义目标2
        ctx.type = 'html';
        ctx.body = '404页面';
    },    
};

app
    .use(_.get('/', route.page1))  //访问浏览器 http://localhost:1000/ ，映射到 page1
    .use(_.get('/2', route.page1))  //访问浏览器 http://localhost:1000/2 ，映射到 page2
    .use(_.get('/3', route['403']))  //访问浏览器 http://localhost:1000/3 ，映射到 403
    .use(_.get('/4', route['404']))  //访问浏览器 http://localhost:1000/4 ，映射到 404
    .listen(1000);

console.log("Now is listening 1000");