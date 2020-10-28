"use strict"

// 引入模块
var https = require("https");
var fs = require("fs");

// 设置自己的证书路径
var options = {
  key: fs.readFileSync("./https/pem/ca-key.pem"),
  cert: fs.readFileSync("./https/pem/ca-cert.pem")
};

// 创建app
var app = https.createServer(options, function (req, res) {
  console.log(req.body);
  res.writeHead(200, {"content-Type": "text/plain"});
  res.end("Hello World!  --from https 443\n");  
  console.log('response completed')
}).listen(100, "127.0.0.1");

console.log('server is listening port 100');
