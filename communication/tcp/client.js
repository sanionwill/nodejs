var net = require("net");

var client = net.Socket();

client.on("data", function (data) {
  console.log("[收到服务器返回]" + data.toString("utf8"));
  client.end();
});

client.on("end", function () {
  console.log("[监听到数据传输结束]");
});

client.on("error", function (err) {
  console.log("[客户端遇到错误]" + JSON.stringify(err));
});

setInterval(() => {
  client.connect(8000, "127.0.0.1", function () {
    console.log("[服务器连接成功]");
    console.log("[客户端状态]" + client.connecting);
    var msg = JSON.stringify(new Date());
    client.write(msg, function () {
      console.log("[客户端发送数据]" + msg);
    });
  });
}, 5000);

/* 设置socket关闭时的回调函数 */
client.on("close", function (had_error) {
  console.log("[客户端关闭]had_error=" + had_error);
});
