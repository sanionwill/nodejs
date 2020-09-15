const express = require("express"); //npm install -g express-generator
const server = express();

//中间件，日志函数
const logger = (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*"); //设置允许跨域
    console.log(
        "[LOG]IP=" +
            req.ip +
            ",url=" +
            req.url +
            ",time=" +
            new Date().getTime()
    );

    next();
};
server.use(logger);

server.get("/", (req, res) => {
    //http://localhost:10?name=tom
    res.send("express server");

    console.log(req.query); //返回 { name: 'tom' }
    console.log(req.get("host")); //返回 localhost:10
    console.log(req.ip); //返回 ::1
    console.log(req.hostname); //返回 localhost
    console.log(req.path); //返回 /
    console.log(req.protocol); //返回 http
    console.log(req.headers); //返回 {
    // 'content-type': 'application/x-www-form-urlencoded',
    // 'cache-control': 'no-cache',
    // 'postman-token': '2d634ef5-d691-493f-8bc7-7eace055f6b1',
    // 'user-agent': 'PostmanRuntime/7.1.1',
    // accept: '*/*',
    // host: 'localhost:10',
    // 'accept-encoding': 'gzip, deflate',
    // connection: 'keep-alive'
    // }
});
server.post("/", (req, res) => {
    //http://localhost:10 raw设置为json类型赋值参数{"name":"tom"}
    res.set({
        "Content-Type": "application/json",
    });
    res.send('{"Country":"China"}'); //响应体里的header会出现 Content-Type →application/json
    console.log(req.body); // 返回 { name: 'tom' }
});
server.get("/catch/:id", (req, res) => {
    res.send(req.params);

    console.log(req.params); //http://localhost:10/catch/123  返回 { id: '123' }
});
server.get("/status/:ss", (req, res) => {
    console.log(req.params); //  返回 { ss: '500' }
    res.status(req.params.ss).send("status " + req.params.ss);
    //http://localhost:10/status/200 响应体 Status 200 OK
    //http://localhost:10/status/500 响应体 Status 500 Internal Server Error
    //http://localhost:10/status/404 响应体 Status 404 Not Found
    //http://localhost:10/status/10000 响应体 Status 500 Internal Server Error //注意响应码要从http响应码取值，找不到的默认都是500
});
server.get("/transfer", (req, res) => {
    res.redirect("/new");

    console.log("from /transfer to /new"); //http://localhost:10/transfer 将自动跳转到 http://localhost:10/new
});
server.get("/new", (req, res) => {
    res.send("new");

    console.log("this is /new");
});
server.get("/getjson", (req, res) => {
    var obj = {
        name: "Tom",
        Gender: "Male",
    };
    res.json(obj);

    console.log("getjson");
});
server.listen(10);
console.log("server is listening port 10");
