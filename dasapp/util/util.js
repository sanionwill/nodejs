//--------------------------------------------
var moment = require("moment");
var uuid = require("uuid");
var md5 = require("md5");
var fs = require("fs");
var crypto = require("crypto"); //npm install crypto --save
var http = require("http");
var rsa = require("node-rsa"); //npm install node-rsa --save
const NodeRSA = require("node-rsa");
const { resolve } = require("path");
const { reject } = require("async");
//--------------------------------------------
var log = function (o) {
    console.log("\r\n");
    console.log(o);
};
var getTimeStamp = function () {
    return parseInt(new Date().getTime() / 1000).toString();
};
var getDateTime = function () {
    return moment().format("YYYY-MM-DD HH:mm:ss");
};

var signedObj = function (obj, token) {
    if (obj == null) return null;

    obj.TimeStamp = getTimeStamp(); //计算时再赋值时间戳
    var arr = Object.entries(obj);
    arr = arr.sort();
    var tmp = [];
    for (i = 0; i < arr.length; i++) {
        //不参与签名
        if (arr[i][0].toUpperCase() == "SignString".toUpperCase()) {
            continue;
        }
        tmp.push(arr[i][0] + "=" + arr[i][1]);
    }
    tmp.push("key" + "=" + token);
    var lastStr = tmp.join("&");
    // log(lastStr);
    obj.SignString = md5(lastStr).toUpperCase();

    return obj;
};

var tokenOption = function () {
    return {
        hostname: "localhost",
        port: 19001,
        path: "/dasapp/api/Data/CreateToken",
        method: "post",
        headers: {
            UserHostAddress: "172.168.120.76",
            UserAgent: "nodejs",
            UserHostName: "nodejs client",
            "Content-Type": "application/json",
        },
    };
};

var appOption = function (methodName) {
    return {
        hostname: "localhost",
        port: 39119,
        path: "/SvrCardInfo.ashx?MethodName=" + methodName,
        method: "post",
        headers: {
            UserHostAddress: "172.168.120.76",
            UserAgent: "nodejs",
            UserHostName: "nodejs client",
            "Content-Type": "application/json",
        },
    };
};

var doRequest = function (data, opt) {
    return new Promise((resolve, reject) => {
        var reqData = JSON.stringify(data);
        var logREQ = {
            Time: new Date(),
            Data: data,
        };
        var option;
        if (!opt) {
            option = appOption(data.MethodName);
        } else {
            option = opt;
        }
        var req = http.request(option, (res) => {
            log("-----------------[ " + data.MethodName + " ]---------------");
            var info = "";
            res.on("data", (chunk) => {
                info += chunk;
            });
            res.on("end", (chunk) => {
                var now = new Date();
                log({
                    Time: new Date(),
                    URL:
                        "http://" +
                        option.hostname +
                        "/" +
                        option.port +
                        option.path,
                    CostMS: now - logREQ.Time,
                    REQ: logREQ,
                    RES: {
                        Time: now,
                        Data: info,
                    },
                });
                resolve(info);
            });
        });

        req.on("error", (e) => {
            log({
                MethodName: data.MethodName,
                REQ: logREQ,
                ERR: e,
            });
            reject(e);
        });
        req.write(reqData);
        req.end();
    });
};

module.exports = {
    getDateTime,
    signedObj,
    tokenOption,
    appOption,
    doRequest,
};
