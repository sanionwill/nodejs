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

var requestHelper = {
    doRequest: function (path, data) {
        var getTime = function () {
            return moment().format("YYYY-MM-DD HH:mm:ss");
        };

        var options = function (path) {
            return {
                hostname: "localhost",
                port: 8092,
                path: "/ServerApi/" + path,
                method: "post",
                headers: {
                    UserHostAddress: "172.168.120.24",
                    UserAgent: "nodejs",
                    UserHostName: "nodejs client",
                    "Content-Type": "application/json",
                },
            };
        };
        var params = function (data) {
            return JSON.stringify({
                Code: 0,
                Msg: "testOK",
                TimeStamp: getTime(),
                Data: data,
            });
        };
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
    },
};

server.get("/", (req, res) => {
    res.send("361Client");
});

//读取设备参数
server.post("/devapi/GetDeviceParams", (req, res) => {
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

//设置设备参数
server.post("/devapi/SetDeviceParams", (req, res) => {
    console.log(getTime());
    console.log(req.body);

    var str =
        '{"Code":"0","Msg":"OK","TimeStamp":"2020-04-07 09:48:03","Data":null}';
    console.log(str);
    res.send(str);
});

//获取照片特征值
server.post("/devapi/GetCharacter", (req, res) => {
    console.log(getTime() + " ==>> /devapi/GetCharacter");
    console.log(req.body);
    var resModel = {
        Code: 0,
        Msg: "OK",
        Data: {
            UniqueCode: req.body.Data.UniqueCode,
            Character:
                "SDUGFDKGJSDFKLVGWVBFVKSDCBXZNFDGTUFWEKJFGNEBGHSDFBDSAGFBBJGHJCZXVCXJGFWAFGEWFGTEWKJGBRASDPAOIUSGPKNWAETRHFWTGFDLKDSNGJAHDLKGVNZKJHGXDGDS",
        },
    };
    var str = JSON.stringify(resModel);
    console.log(str);
    res.send(str);
});

//下载人员身份数据
server.post("/devapi/DownloadAuthorityData", (req, res) => {
    console.log(getTime() + " ==>> /devapi/DownloadAuthorityData");
    console.log(req.body);

    var str =
        '{"Code":"0","Msg":"OK","TimeStamp":"2020-04-07 09:48:03","Data":null}';
    console.log(str);
    res.send(str);

    req.body.Data.forEach((au) => {
        var upData = {
            UniqueCode: au.UniqueCode,
            CardNo: au.CardNo,
            StartTime: au.StartTime,
            IsLegal: au.IsLegal,
        };
        console.log(upData);
        requestHelper.doRequest("UploadAuthorityDealResult", upData);
    });
});

//设备程序升级
server.post("/devapi/UpgradeApp", (req, res) => {
    console.log(getTime());
    console.log(req.body);

    var str =
        '{"Code":"0","Msg":"OK","TimeStamp":"2020-04-07 09:48:03","Data":null}';
    console.log(str);
    res.send(str);
});

//重启设备
server.post("/devapi/RestartDevice", multipartMiddleware, (req, res) => {
    console.log(getTime());
    console.log(req.body);

    var str =
        '{"Code":"0","Msg":"OK","TimeStamp":"2020-04-07 09:48:03","Data":null}';
    console.log(str);
    res.send(str);
});

//远程开门
server.post("/devapi/RemoteOpenDoor", (req, res) => {
    console.log(req.query);
    console.log(getTime());
    console.log(req.body);

    var str =
        '{"Code":"0","Msg":"OK","TimeStamp":"2020-04-07 09:48:03","Data":null}';
    console.log(str);
    res.send(str);
});

//读取屏保文字和图片
server.post("/devapi/GetScreenSaver", (req, res) => {
    console.log(getTime());
    console.log(req.body);

    var str =
        '{"Code":"0","Msg":"OK","TimeStamp":"2020-04-07 09:48:03","Data":{"DeviceHelloWord":"欢度五一","ImageList":[{"Image":"/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAAaABoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAQACBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABxVINAvB6AVk//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQIQITAx/9oACAEBAAEFArFQRjf/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAYEAACAwAAAAAAAAAAAAAAAAAAIQEQMP/aAAgBAQAGPwLRIi//xAAaEAADAAMBAAAAAAAAAAAAAAAAAREQIEFx/9oACAEBAAE/IcQmkLo7XT8YT4Vn/9oADAMBAAIAAwAAABAoyTz/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAEAAgICAwAAAAAAAAAAAAABABEhYRAxQZGh/9oACAEBAAE/EFvE+xCZJTcrEqVwLGETSM78cVB8henUIolqZjppibH3P//Z"}]}}';
    console.log(str);
    res.send(str);
});

//设置屏保文字和图片
server.post("/devapi/SetScreenSaver", (req, res) => {
    console.log(getTime());
    console.log(req.body);

    var str =
        '{"Code":"0","Msg":"OK","TimeStamp":"2020-04-07 09:48:03","Data":null}';
    console.log(str);
    res.send(str);
});

//获取记录数据
server.post("/devapi/GetRecords", (req, res) => {
    console.log(getTime());
    console.log(req.body);

    // var str =
    //     '{"Code":"0","Msg":"OK","TimeStamp":"2020-04-07 09:48:03","Data":[{"DeviceUniqueCode":"909090","RecordID":10001,"RecordTime":"2020-04-07 14:13:03","ActionType":2,"DeviceType":2,"UniqueCode":"92350231","CapturePhoto":"data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAAaABoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAQACBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABxVINAvB6AVk//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQIQITAx/9oACAEBAAEFArFQRjf/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAYEAACAwAAAAAAAAAAAAAAAAAAIQEQMP/aAAgBAQAGPwLRIi//xAAaEAADAAMBAAAAAAAAAAAAAAAAAREQIEFx/9oACAEBAAE/IcQmkLo7XT8YT4Vn/9oADAMBAAIAAwAAABAoyTz/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAEAAgICAwAAAAAAAAAAAAABABEhYRAxQZGh/9oACAEBAAE/EFvE+xCZJTcrEqVwLGETSM78cVB8henUIolqZjppibH3P//Z","SimilarityScore":"75.68","SimilarityThreshold":"75.00","QualityScore":"83.59","QualityThreshold":"80.00","IsAlive":"Y","AccessDoorID":1,"AccessCode":"100","AccessResult":"开门成功","IDType":1,"IDNo":"132465132456132645","CardNo":"135214665"}]}';
    var str =
        '{"Code":"0","Data":[{"AccessDoorID":0,"ActionType":0,"CardNo":"1018","DeviceType":2,"DeviceUniqueCode":"FCAD58","IDType":0,"IsAlive":2,"PassImageId":"c06964d2-d65b-4172-8908-59a3b1b22cd3","PassName":"梁小宁2","PassTime":"Jul 30, 2020 12:04:17","PersonOrigin":"0","RecordID":1,"RecordTime":"2020-07-30 12:04:17","SimilarityScore":"78.126816","SimilarityThreshold":"80","UniqueCode":"1048580","id":1,"isUpload":"Y"},{"AccessDoorID":0,"ActionType":0,"CardNo":"1018","DeviceType":2,"DeviceUniqueCode":"FCAD58","IDType":0,"IsAlive":2,"PassImageId":"7c76225a-a161-4f7a-843c-5332413fcab4","PassName":"梁小宁2","PassTime":"Jul 30, 2020 12:04:22","PersonOrigin":"0","RecordID":2,"RecordTime":"2020-07-30 12:04:22","SimilarityScore":"77.78691","SimilarityThreshold":"80","UniqueCode":"1048580","id":2,"isUpload":"Y"},{"AccessDoorID":0,"ActionType":0,"CardNo":"1018","DeviceType":2,"DeviceUniqueCode":"FCAD58","IDType":0,"IsAlive":2,"PassImageId":"d83bded9-d4d8-4f28-9ddd-52ea60e19507","PassName":"梁小宁2","PassTime":"Jul 30, 2020 12:05:19","PersonOrigin":"0","RecordID":3,"RecordTime":"2020-07-30 12:05:19","SimilarityScore":"77.08671","SimilarityThreshold":"80","UniqueCode":"1048580","id":3,"isUpload":"Y"},{"AccessDoorID":0,"ActionType":0,"CardNo":"1018","DeviceType":2,"DeviceUniqueCode":"FCAD58","IDType":0,"IsAlive":2,"PassImageId":"0fac73c5-e37c-45f7-abc3-4a7381482e03","PassName":"梁小宁2","PassTime":"Jul 30, 2020 13:11:01","PersonOrigin":"0","RecordID":4,"RecordTime":"2020-07-30 13:11:01","SimilarityScore":"78.05122","SimilarityThreshold":"80","UniqueCode":"1048580","id":4,"isUpload":"Y"},{"AccessDoorID":0,"ActionType":0,"CardNo":"1018","DeviceType":2,"DeviceUniqueCode":"FCAD58","IDType":0,"IsAlive":2,"PassImageId":"9acd37ee-d589-4af2-a8c2-2558428d4daa","PassName":"梁小宁2","PassTime":"Jul 30, 2020 13:11:05","PersonOrigin":"0","RecordID":5,"RecordTime":"2020-07-30 13:11:05","SimilarityScore":"78.59801","SimilarityThreshold":"80","UniqueCode":"1048580","id":5,"isUpload":"Y"},{"AccessDoorID":0,"ActionType":0,"CardNo":"1018","DeviceType":2,"DeviceUniqueCode":"FCAD58","IDType":0,"IsAlive":2,"PassImageId":"cf914e38-6398-455c-aa37-09676d94340a","PassName":"梁小宁2","PassTime":"Jul 30, 2020 13:18:15","PersonOrigin":"0","RecordID":6,"RecordTime":"2020-07-30 13:18:15","SimilarityScore":"77.856895","SimilarityThreshold":"80","UniqueCode":"1048580","id":6,"isUpload":"Y"},{"AccessDoorID":0,"ActionType":0,"CardNo":"1018","DeviceType":2,"DeviceUniqueCode":"FCAD58","IDType":0,"IsAlive":2,"PassImageId":"d3c3fcef-ad31-4568-bd43-64601ba1c531","PassName":"梁小宁2","PassTime":"Jul 30, 2020 13:18:44","PersonOrigin":"0","RecordID":7,"RecordTime":"2020-07-30 13:18:44","SimilarityScore":"77.32975","SimilarityThreshold":"80","UniqueCode":"1048580","id":7,"isUpload":"Y"},{"AccessDoorID":0,"ActionType":0,"CardNo":"1018","DeviceType":2,"DeviceUniqueCode":"FCAD58","IDType":0,"IsAlive":2,"PassImageId":"1e1ca27a-759f-4e49-9ce2-fb9abc6d95da","PassName":"梁小宁2","PassTime":"Jul 30, 2020 13:21:53","PersonOrigin":"0","RecordID":8,"RecordTime":"2020-07-30 13:21:53","SimilarityScore":"77.44951","SimilarityThreshold":"80","UniqueCode":"1048580","id":8,"isUpload":"Y"},{"AccessDoorID":0,"ActionType":0,"CardNo":"1018","DeviceType":2,"DeviceUniqueCode":"FCAD58","IDType":0,"IsAlive":2,"PassImageId":"17576533-8ff6-420d-9275-f59fc9b9cbfd","PassName":"梁小宁2","PassTime":"Jul 30, 2020 13:25:28","PersonOrigin":"0","RecordID":9,"RecordTime":"2020-07-30 13:25:28","SimilarityScore":"79.48166","SimilarityThreshold":"80","UniqueCode":"1048580","id":9,"isUpload":"Y"}],"Msg":"OK","TimeStamp":"2020-07-30 13:42:03"}';
    console.log(str);
    res.send(str);
});

//设置Logo
server.post("/devapi/SetLogo", (req, res) => {
    console.log(getTime());
    console.log(req.body);

    var str =
        '{"Code":"0","Msg":"OK","TimeStamp":"2020-04-07 09:48:03","Data":null}';
    console.log(str);
    res.send(str);
});

//清空设备数据
server.post("/devapi/ClearDeviceData", (req, res) => {
    console.log(getTime());
    console.log(req.body);

    var str =
        '{"Code":"0","Msg":"OK","TimeStamp":"2020-04-07 09:48:03","Data":null}';
    console.log(str);
    res.send(str);
});

//查询设备内部权限数据
server.post("/devapi/GetAuthorityData", (req, res) => {
    console.log(getTime());
    console.log(req.body);

    var str =
        '{"Code":"0","Data":{"Detail":[{"CardEndUseTime":"2999-12-31 23:59:59","CardNo":"0","CardStartUseTime":"1900-01-01 00:00:00","DptName":"深圳","FaceStartUseTime":"2000-01-01 00:00:00","FaceStopUseTime":"2099-12-31 23:59:59","FaceUpdateTime":"2020-09-10 10:02:29","Gender":2,"IDNo":"","IDType":"","InOutFlag":0,"IsKqUse":0,"IsLegal":"Y","PersonName":"王斌霞","PersonNo":"01","PersonOrigin":"0","PersonType":0,"Photo":"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","Pinyin":"wangbinxia","StartTime":"2020-09-10 10:02:22","UniqueCode":"1048577","id":1,"isFree":"N"}],"Page":1,"PageCount":1,"QueryCount":25,"TotalCount":1},"Msg":"OK","TimeStamp":"2020-09-10 10:40:03"}';
    console.log(str);
    res.send(str);
});

server.listen(8090);
console.log("listening port 8090");
