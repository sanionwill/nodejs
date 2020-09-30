/**
 * 接收并处理360服务器发送的命令
 * 如：读取设备参数、设备重启、提取特征值等
 */
var net = require("net");

var server = new net.Server();
server.on("connection", function (socket) {
    console.log("[有新客户端接入成功]" + JSON.stringify(socket.address()));
    server.maxConnections = 100;
    server.getConnections(function (err, count) {
        console.log("[接入数量] " + count);
    });

    var address = server.address();
    console.log("服务器地址=" + JSON.stringify(address));

    socket.on("data", function (data) {
        var msg = data.toString("utf8"); //这里可能有多种编码：utf8(默认),base64,hex
        console.log("[服务器收到数据]" + msg);

        socket.write(msg, function () {
            console.log("[向客户端发送数据]" + msg);
        });
    });
});

server.listen(18000);

server.on("listening", function () {
    console.log("Creat server on http://172.168.120.76:18000/");
});

server.on("close", function () {
    console.log("[服务器关闭]");
});

server.on("error", function (err) {
    console.log("[服务器遇到错误]" + JSON.stringify(err));
});
