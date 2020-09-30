const util = require("./util/util");
const http = require("http");
const { promises } = require("dns");

var doRequest = function () {
    return new Promise((resolve, reject) => {
        var req = http.request(
            {
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
            },
            (res) => {
                var info = "";
                res.on("data", (chunk) => {
                    info += chunk;
                });
                res.on("end", (chunk) => {
                    resolve(info); //这里是正常返回的结果，通过resolve函数传递出去，正常的await能够接收到info数据
                });
            }
        );

        req.on("error", (e) => {
            reject(e); //这里是异常时返回的结果，通过reject函数传递出去，await外面的catch函数能够捕获到
        });
        req.write("bc9d0-3a39-4278-a51f-bf7");
        req.end();
    });
};

async function test() {
    try {
        //这里是正常处理resolve函数的动作
        var ss = await doRequest(); //这里的ss是resolve函数的参数
        console.log(ss);
        console.log("end"); //这里的end必须要等到上一行有结果输出后才会执行
    } catch (e) {
        //这里处理的是reject函数的动作
        console.log(e); //这里的e是reject的参数
    }
}
//test();

var w1 = function () {
    return new Promise((resolve, reject) => {
        if (1 != 1) {
            resolve("=1");
        } else {
            reject("!=1");
        }
    });
};
async function testw1() {
    try {
        await w1();
        console.log("ok");
    } catch (e) {
        console.log(e);
    }
}

testw1();
