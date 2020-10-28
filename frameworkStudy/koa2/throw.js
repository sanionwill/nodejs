//npm install koa-route
const Koa2 = require('koa2'),
    _ = require('koa-route'),
    fs = require("fs"),
    path = require('path'),
    app = new Koa2();

const route = {
    index: ctx => {//定义目标1
        ctx.throw(500, '人工返回500状态码结果');//throw出去的结果，能被error事件捕获到
    },
    err: ctx => {
        try { 
            fs.readFile();//制造异常
        } catch (err) { 
            ctx.status = 400;
            ctx.body = '这里的错误，error并不能捕获到';
        }
    },
    emit: ctx => {
        try { 
            fs.readFile();//制造异常
        } catch (err) { 
            ctx.status = 401;
            ctx.body = '这里的错误，后面使用了 ctx.app.emit ，能被error事件捕获到';
            ctx.app.emit('error',err,ctx);
        }
    },
};

app
    .use(_.get('/', route.index))  //访问浏览器 http://localhost:1000/ ，throw出去的错误，触发error事件
    .use(_.get('/1', route.err))   //访问浏览器 http://localhost:1000/1 ，try/catch的做了内部处理，不会触发error事件
    .use(_.get('/2', route.emit))  //访问浏览器 http://localhost:1000/1 ，try/catch里面emit出了错误，触发error事件
    .on('error', (err, ctx) => {
        console.error('error', err);
    })
    .listen(1000);

console.log("Now is listening 1000");

// 页面显示结果是 ctx.body 数据
// Internal Server Error

// console的err结果类似下面
// error InternalServerError: 人工返回500状态码结果
//     at Object.throw (G:\weislDocs\跑路计划\nodejs\node_modules\koa2\lib\context.js:91:23)
//     at Object.index (G:\weislDocs\跑路计划\nodejs\frameworkstudy\koa2\throw.js:10:18)
//     at G:\weislDocs\跑路计划\nodejs\node_modules\koa-route\index.js:39:44
//     at dispatch (G:\weislDocs\跑路计划\nodejs\node_modules\koa-compose\index.js:44:32)
//     at G:\weislDocs\跑路计划\nodejs\node_modules\koa-compose\index.js:36:12
//     at Server.<anonymous> (G:\weislDocs\跑路计划\nodejs\node_modules\koa2\lib\application.js:138:7)
//     at Server.emit (events.js:314:20)
//     at parserOnIncoming (_http_server.js:782:12)
//     at HTTPParser.parserOnHeadersComplete (_http_common.js:119:17)
// (node:19512) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated
// (Use `node --trace-deprecation ...` to show where the warning was created)