const https = require("https");
const moment = require("moment");
var fs = require("fs");


var getTime = () => {
    return moment().format("YYYY-MM-DD HH:mm:ss");
};

var options = function () {
    return {
        rejectUnauthorized: false,  // 忽略安全警告，否则报错“self signed certificate.code:DEPTH_ZERO_SELF_SIGNED_CERT”
        hostname: "localhost",
        port: 100,
        path: "/",
        method: "post",
        headers: {
            UserHostAddress: "172.168.120.24",
            UserAgent: "nodejs",
            UserHostName: "nodejs client",
            "Content-Type": "application/json",
        },
    };
};
var params = function () {
    return JSON.stringify({
        Name: "Mark"
    });
};
function doRequest() {
    var req = https.request(options(), (res) => {
        var info = "";
        res.on("data", (chunk) => {
            info += chunk;
            //console.log(chunk);
        });
        res.on("end", (chunk) => {
            console.log("[RES][" + getTime() + "]" + info);
        });
    });

    req.on("error", (e) => {
        console.log(e);
    });
    var reqData = params();
    console.log("[REQ][" + getTime() + "]" + reqData);
    req.write(reqData);
    req.end();
}

doRequest();