const http = require("http");
var reqModel_RegisterSystem = require("./reqModel/RegisterSystem");
var reqModel_GetPersonalInfo = require("./reqModel/GetPersonalInfo");
var reqModel_EmpExistsPhoto = require("./reqModel/EmpExistsPhoto");
var reqModel_AddOrUpdateMeetingRoom = require("./reqModel/AddOrUpdateMeetingRoom");
var reqModel_ReserveMeeting = require("./reqModel/ReserveMeeting");
var reqModel_AddMeetingPerson = require("./reqModel/AddMeetingPerson");
var reqModel_CancelMeeting = require("./reqModel/CancelMeeting");
var reqModel_ProlongMeeting = require("./reqModel/ProlongMeeting");
const util = require("./util/util");
const fs = require("fs");
const { json } = require("body-parser");
const { promises } = require("dns");
const { resolve } = require("path");
const { reject } = require("async");
const { timeStamp } = require("console");
const { syncBuiltinESMExports } = require("module");
//---------------------------------

var saveCacheData = function (d) {
    fs.writeFileSync("./dasapp/cacheData.txt", JSON.stringify(d));
};

var getCacheData = function () {
    var d = fs.readFileSync("./dasapp/cacheData.txt");
    if (d == null || d == "") {
        d = JSON.stringify({
            time: new Date("1900-01-01"),
            token: "",
            rsaToken: "",
        });
    }
    return d;
};

var getToken = async function () {
    var d = getCacheData();
    d = JSON.parse(d);
    if (
        d == null ||
        new Date(d.time).getTime() + 1000 * 3600 * 2 < new Date().getTime()
    ) {
        //需要重新调用api获取token
        try {
            var info = await util.doRequest(
                { MethoName: "CreateToken" },
                util.tokenOption()
            );
            var obj = JSON.parse(info);
            var o = new Object();
            o.time = new Date();
            o.token = obj.Data.Token;
            o.rsaToken = obj.Data.RSAToken;
            saveCacheData(o);

            return o;
        } catch (e) {
            return e;
        }
    } else {
        //使用本地存储的token
        return d;
    }
};

var apiRequest = async function (reqModel) {
    try {
        var resData = await util.doRequest(reqModel);

        var o = JSON.parse(resData);
        if (o.RtnCode == 0) {
            console.log("成功");
        } else {
            console.log(o.RtnInfo);
        }
        return new Promise((resolve, reject) => {
            resolve(o);
        });
    } catch (e) {
        console.log(e);

        return new Promise((resolve, reject) => {
            reject(e);
        });
    }
};

async function start() {
    try {
        var t = await getToken();

        await apiRequest(reqModel_RegisterSystem.model(t));
        // await apiRequest(reqModel_GetPersonalInfo.model(t));
        // await apiRequest(reqModel_EmpExistsPhoto.model(t));
        await apiRequest(reqModel_AddOrUpdateMeetingRoom.model(t));
        // await apiRequest(reqModel_ReserveMeeting.model(t));
        // await apiRequest(reqModel_AddMeetingPerson.model(t));
        // await apiRequest(reqModel_CancelMeeting.model(t));
        // await apiRequest(reqModel_ProlongMeeting.model(t));
    } catch (e) {
        console.log(e);
    }
}

console.log("app client starts");
start();
