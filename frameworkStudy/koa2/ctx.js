//npm install koa2
const Koa2 = require('koa2'),
    app = new Koa2();

app.use(async ctx => {
    ctx.body = JSON.stringify(ctx) ;
}).listen(1000);

console.log("Now is listening 1000");

//浏览器访问http://localhost:1000
//页面返回 
// {
//     "request":{
//         "method":"GET",
//         "url":"/",
//         "header":{
//             "host":"localhost:1000",
//             "connection":"keep-alive",
//             "cache-control":"max-age=0",
//             "upgrade-insecure-requests":"1",
//             "user-agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.81 Safari/537.36 SE 2.X MetaSr 1.0",
//             "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
//             "accept-encoding":"gzip, deflate, br",
//             "accept-language":"zh-CN,zh;q=0.9"
//         }
//     },
//     "response":{
//         "status":404,
//         "message":"Not Found",
//         "header":{

//         }
//     },
//     "app":{
//         "subdomainOffset":2,
//         "proxy":false,
//         "env":"development"
//     },
//     "originalUrl":"/",
//     "req":"<original node req>",
//     "res":"<original node res>",
//     "socket":"<original node socket>"
// }