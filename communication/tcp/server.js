/**
 * 通过net.Server类来创建一个TCP服务器
 */

/* 引入net模块 */
var net = require("net");

/* 实例化一个服务器对象 */
var server = new net.Server();

/* 监听 connection 事件 */
server.on("connection", function (socket) {
  console.log("[客户端连接成功]" + JSON.stringify(socket.address()));
  server.maxConnections = 100;
  server.getConnections(function (err, count) {
    console.log("[客户端连接数量] " + count);
  });

  /* 获取地址信息 */
  var address = server.address();
  var message = "服务器地址=" + JSON.stringify(address);

  /* 监听data事件 */
  socket.on("data", function (data) {
    var readSize = socket.bytesRead; //已经接收到的所有的字节长度
    var msg = data.toString("utf8"); //这里可能有多种编码：utf8(默认),base64,hex
    console.log("[服务器收到数据]" + msg);
    //console.log("the size of data is" + readSize);
    socket.write(msg, function () {
      console.log("[向客户端发送数据]" + msg);
    });
  });
});

/* 设置监听端口 */
server.listen(8000);

/* 设置监听时的回调函数 */
server.on("listening", function () {
  console.log("Creat server on http://127.0.0.1:8000/");

  /* 获取地址信息，得到的是一个json { address: '::', family: 'IPv6', port: 8000 } */
  var address = server.address();
  /* TCP服务器监听的地址 */
  console.log("[服务器地址]" + address.address);
  /* TCP服务器监听的端口号 */
  console.log("[服务器端口]" + address.port);
  /* 说明TCP服务器监听的地址是 IPv6 还是 IPv4 */
  console.log("[服务器网络类型]" + address.family);
});

/* 设置关闭时的回调函数 */
server.on("close", function () {
  console.log("[服务器关闭]");
});

/* 设置错误时的回调函数 */
server.on("error", function (err) {
  console.log("[服务器遇到错误]" + JSON.stringify(err));
});
