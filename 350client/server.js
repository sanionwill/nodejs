const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");
const http = require("http");
const server = express();
server.use(bodyParser.text());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extends: false }));
var getTime = () => {
    return moment().format("YYYY-MM-DD HH:mm:ss");
};

const multipart = require("connect-multiparty");
var multipartMiddleware = multipart();

server.get("/", (req, res) => {
    res.send("350Client");
});

//读取设备参数
server.post("/GetDeviceConfig", (req, res) => {
    console.log(getTime());
    console.log(req.body);
    var obj = {
        Code: "0",
        Data: {
            AppParams: { AppPassword: "123456", AppVersion: "361.1.18" },
            BasicParams: {
                DailyRestartTime: "02:00",
                DeviceIP: "172.0.0.1",
                DeviceName: "达实物联",
                DevicePort: 8090,
                DeviceType: 2,
                DeviceUniqueCode: "909090",
                EnableScreenSaver: 1,
                HeartBeatInterval: 20000,
                IsAutoRestart: 2,
                IsSupportCard: 0,
                IsUploadPassImg: 2,
                MainUIType: 1,
                OpenDoorPassword: "12345678",
                QrCodeSwitch: 0,
                RelayTime: 100,
                ServerIP: "172.168.120.24",
                ServerPort: 8092,
                SystemID: "0000034900",
                TriggerActionInterval: 1000,
                WiegandIn: 0,
                WiegandOut: 2,
                WiegandType: 34,
            },
            FeatureParams: {
                FeatureSDKValue: "SDK-2.2.8",
                FeatureType: 3,
                FeatureVersion: "FW-1.7.8-03.01.03",
            },
            HardWareParams: {
                DebugModeSwitch: 2,
                SuppleLightMode: 0,
                SuppleLightOpenTime: "18:00-07:00",
            },
            RecognitionParams: {
                IsAlive: 1,
                LivingThreshold: 50.0,
                MaxFacePixel: 800,
                MinFacePixel: 90,
                SimilityThreshold: "77",
            },
            VoiceTipParams: {
                AfterJobTip: "@识别成功",
                AttendanceTime: "00:00-00:00",
                BeforeJobTip: "@识别成功",
                RecognizeErrorTip: "未授权",
                RecognizeSuccessTip: "@识别成功",
            },
        },
        Msg: "OK",
        TimeStamp: "2020-05-25 00:00:09",
    };
    var resData = JSON.stringify(obj);
    console.log(resData);
    res.send(resData);
});

server.listen(8090);
console.log("listening port 8090");
