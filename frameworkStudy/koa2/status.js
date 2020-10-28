const { throw } = require('koa2/lib/context');

const Koa2 = require('koa2'),
    fs = require("fs"),
    path = require('path'),
    app = new Koa2();


app.use(async ctx => {
    ctx.throw(406, '这是指定返回状态码406');//浏览器监控能看到 status=406 ，浏览器页面显示 这是指定返回状态码406
}).listen(1000);

console.log("Now is listening 1000");