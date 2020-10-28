const http = require("http");
const moment = require("moment");

var getTime = () => {
    return moment().format("YYYY-MM-DD HH:mm:ss");
};

var options = function (path) {
    return {
        hostname: "10.16.168.244",
        port: 8095,
        path: "/basic/Employee/" + path,
        method: "post",
        headers: {
            UserHostAddress: "172.168.120.76",
            UserAgent: "nodejs",
            UserHostName: "nodejs client",
            "Content-Type": "application/json",
        },
    };
};
var params = function (data) {
    return JSON.stringify({
        Id: "zxcvbnm",
        totalEmp: 19,
    });
};
function doRequest(path, data) {
    var req = http.request(options(path), (res) => {
        var info = "";
        res.on("data", (chunk) => {
            info += chunk;
            //console.log(chunk);
        });
        res.on("end", (chunk) => {
            console.log("[RES][" + path + "][" + getTime() + "]" + info);
        });
    });

    req.on("error", (e) => {
        console.log(e);
    });
    var reqData = params(data);
    console.log("[REQ][" + path + "][" + getTime() + "]" + reqData);
    req.write(reqData);
    req.end();
}

var recyleRequest = setInterval(() => {
    console.log("new request");
    try {
        doRequest("GetDeviceEmployeeForSync", null);
    } catch (e) {
        console.log("exception" + JSON.stringify(e));
    }
}, 5000);

console.log("start");
