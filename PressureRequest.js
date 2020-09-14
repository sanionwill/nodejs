const http = require("http");
const moment = require("moment");
var fs = require("fs");

var log = function (msg) {
    console.log(msg);
    fs.writeFile(
        "./log/request.txt",
        msg + "\r\n",
        { flag: "a", encoding: "utf-8", mode: "0666" },
        function (error) {
            if (error) {
                console.log("写入失败");
            } else {
                //console.log("写入成功了");
            }
        }
    );
};

var getTime = () => {
    return moment().format("YYYY-MM-DD HH:mm:ss");
};

var options = function (path) {
    return {
        hostname: "172.20.1.82",
        port: 8090,
        path: "/DevApi" + path,
        method: "post",
        headers: {
            UserHostAddress: "172.168.120.24",
            UserAgent: "nodejs",
            UserHostName: "nodejs client",
            "Content-Type": "application/json",
        },
    };
};
var data = {
    UniqueCode: "1048578",
    Photo:
        "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",
    FeatureType: "3",
    Character: null,
    IsProcessing: true,
};
var params = function (data) {
    return JSON.stringify({
        DeviceUniqueCode: "FAC8A8",
        TimeStamp: getTime(),
        Data: data,
    });
};
var recId = 0;
var doRequest = function () {
    recId++;
    var req = http.request(options("/GetCharacter"), (res) => {
        var info = "";
        res.on("data", (chunk) => {
            info += chunk;
            //console.log(chunk);
        });
        res.on("end", (chunk) => {
            var resModel = JSON.parse(info);
            log(
                "[RES][" +
                    recId +
                    "][" +
                    resModel.TimeStamp +
                    "]" +
                    resModel.Code +
                    "," +
                    resModel.Msg
            );
            doRequest();
        });
    });

    req.on("error", (e) => {
        log("[" + recId + "]" + JSON.stringify(e));
        doRequest();
    });
    var reqData = params(data);
    log("[REQ][" + recId + "][" + getTime() + "]");

    req.write(reqData);
    req.end();
};

doRequest();
