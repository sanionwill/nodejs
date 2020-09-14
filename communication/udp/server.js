var dgram = require("dgram");
//create udp server
var server = dgram.createSocket("udp4");
//server监听本地端口 5678
server.bind(5678);

server.on("listening", function () {
  console.log("udp is listening");
});

// server.on("connect", function (port, address) {
//   console.log("udp connected:" + port + ":" + address);
// });

server.on("error", function (err) {
  console.log("some error on udp server:" + JSON.stringify(err));
});

server.on("message", function (msg, client) {
  //本地哪个端口接收到数据，就从哪个端口发回去

  //接收消息的端口是server的监听端口 5678
  //但是client发出信息时用到的端口跟服务端口 5678 没关系
  console.log("<<==" + client.address + ":" + client.port + ":" + msg);
  var strMsg = "Copy: " + msg.toString();

  //发出消息的端口是 5678 ，跟client发出端口没关系
  server.send(
    strMsg,
    0,
    strMsg.length,
    client.port,
    client.address,
    function () {
      console.log("==>>" + strMsg);
    }
  );
});
