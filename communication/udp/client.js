var dgram = require("dgram");

//create udp client
var client = dgram.createSocket("udp4");

client.on("close", function () {
  console.log("udp is closed");
});

client.on("error", function () {
  console.log("some error on udp client");
});

client.on("message", function (msg, server) {
  //本地哪个端口发出的数据，返回的数据就从哪个端口接收

  //接收消息的端口是本地发出信息时用到的端口，跟服务端口 5678 没关系
  console.log("<<==" + server.address + ":" + server.port + ":" + msg);
});

setInterval(function () {
  var msg = "Can you copy: " + new Date();
  client.send(msg, 5678, "172.168.120.76", function () {
    console.log("==>>" + msg);
  });
  //client向 172.168.120.76:5678 发送信息，但是本地发出端口可能是随机的，并不是 5678
}, 3000);
