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
        '{"Code":"0","Data":{"Detail":[{"CardEndUseTime":"2999-12-31 23:59:59","CardNo":"0","CardStartUseTime":"1900-01-01 00:00:00","DptName":"深圳","FaceStartUseTime":"2000-01-01 00:00:00","FaceStopUseTime":"2099-12-31 23:59:59","FaceUpdateTime":"2020-09-10 10:02:29","Gender":2,"IDNo":"","IDType":"","InOutFlag":0,"IsKqUse":0,"IsLegal":"Y","PersonName":"王斌霞","PersonNo":"01","PersonOrigin":"0","PersonType":0,"Photo":"/9j/4QBkRXhpZgAATU0AKgAAAAgABYdpAAQQSkZJRgZeD8/6Un2Xj7/AOlFwIqUVL9m/wBv9KcLb/b/AEouhFcd6KsC3x/F+lFF0I//2Q==","Pinyin":"wangbinxia","StartTime":"2020-09-10 10:02:22","UniqueCode":"1048577","id":1,"isFree":"N"}],"Page":1,"PageCount":1,"QueryCount":25,"TotalCount":1},"Msg":"OK","TimeStamp":"2020-09-10 10:40:03"}';
    console.log(str);
    res.send(str);
});


//获取记录数据
server.post("/devapi/CollectRecords", (req, res) => {
    console.log(getTime());
    console.log(req.body);

    // var str =
    //     '{"Code":"0","Data":{"Detail":[{"AccessDoorID":0,"ActionType":0,"CardNo":"1018","DeviceType":2,"DeviceUniqueCode":"FCAD58","IDType":0,"IsAlive":2,"PassImageId":"c06964d2-d65b-4172-8908-59a3b1b22cd3","PassName":"梁小宁2","PassTime":"Jul 30, 2020 12:04:17","PersonOrigin":"0","RecordID":1,"RecordTime":"2020-07-30 12:04:17","SimilarityScore":"78.126816","SimilarityThreshold":"80","UniqueCode":"1048580","id":1,"isUpload":"Y"}],"QueryCount":30,"Page":' + req.body.Data.Page + ',"PageCount":40,"TotalCount":200},"Msg":"OK","TimeStamp":"2020-07-30 13:42:03"}';
    var str =
        '{"Code":"0","Data":{"Detail":[{"AccessDoorID":0,"ActionType":0,"CardNo":"1018","DeviceType":2,"DeviceUniqueCode":"FCAD58","IDType":0,"IsAlive":2,"PassImageId":"c06964d2-d65b-4172-8908-59a3b1b22cd3","PassName":"梁小宁2","PassTime":"Jul 30, 2020 12:04:17","PersonOrigin":"0","RecordID":1,"RecordTime":"2020-07-30 12:04:17","SimilarityScore":"78.126816","SimilarityThreshold":"80","UniqueCode":"1048580","id":1,"isUpload":"Y"}],"QueryCount":30,"Page":' + req.body.Data.Page + ',"PageCount":87,"TotalCount":200},"Msg":"OK","TimeStamp":"2020-07-30 13:42:03"}';
    console.log(str);
    res.send(str);
});

server.listen(8090);
console.log("listening port 8090");
