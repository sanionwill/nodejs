var net = require("net");
//var cmdEnum = require("cmdEnum");
//var dataAnalyser = require("dataAnalyser");
var heartBeat = require("./reqModel/heartBeat");
var devParams = require("./reqModel/devParams");
var empAuthority = require("./reqModel/empAuthority");
var recordData = require("./reqModel/recordData");
var restartDev = require("./reqModel/restartDev");
var getFeature = require("./reqModel/getFeature");
var syncTime = require("./reqModel/syncTime");

var client = net.Socket();
var isConn = false;

setInterval(() => {
    if (!isConn) {
        console.log("[尝试重连]");
        client.connect(19000, "172.168.120.76", function () {
            console.log("[服务器连接成功]");
            isConn = true;
        });
    }
}, 10000);

client.on("data", function (data) {
    var resData = data.toString("utf8");
    console.log("[收到服务器返回]" + resData);
    /*
     *服务器读取设备参数
     */
    if (resData.substr(0, 6) == "Send01") {
        console.log("[解析结果]请求读取设备参数");
        var msg = devParams.GetModel();
        sendMsg(msg);
    } else if (resData.substr(0, 6) == "Send02") {
        console.log("[解析结果]下发人员权限数据");
        var msg = empAuthority.GetModel(resData.substr(12));
        sendMsg(msg);
    } else if (resData.substr(0, 6) == "Send03") {
        console.log("[解析结果]服务端已收到记录数据");
    } else if (resData.substr(0, 6) == "Send06") {
        console.log("[解析结果]通知设备重启");
        var msg = restartDev.GetModel();
        sendMsg(msg);
    } else if (resData.substr(0, 6) == "Send08") {
        console.log("[解析结果]提取特征值");
        var msg = getFeature.GetModel(resData.substr(12));
        sendMsg(msg);
    } else if (resData.substr(0, 6) == "Send09") {
        console.log("[解析结果]同步时间");
        var msg = syncTime.GetModel(resData.substr(12));
        sendMsg(msg);
    }
});

client.on("end", function () {
    console.log("[监听到数据传输结束]");
});

client.on("error", function (err) {
    console.log("[客户端遇到错误]" + JSON.stringify(err));
});

var sendMsg = function (msg) {
    if (!isConn) {
        return;
    }
    client.write(msg, function () {
        console.log("[客户端发送数据]" + msg);
    });
};

setInterval(() => {
    var msg = heartBeat.GetModel();
    sendMsg(msg);

    // msg = recordData.GetModel()
    // sendMsg(msg)
}, 5000);

/* 设置socket关闭时的回调函数 */
client.on("close", function (had_error) {
    console.log("[客户端关闭]had_error=" + had_error);
    isConn = false;
});
