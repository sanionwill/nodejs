const http = require("http");
const moment = require("moment");

var getTime = () => {
    return moment().format("YYYY-MM-DD HH:mm:ss");
};

var options = function (path) {
    return {
        hostname: "localhost",
        port: 56672,
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
        DeviceUniqueCode: "909090",
        TimeStamp: getTime(),
        Data: data,
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
        doRequest("DeviceHeartBeat", {
            AuthorityCount: 264,
            DevicePort: 8090,
            DeviceTime: getTime(),
            UnuploadRecordsCount: 130,
        });
        doRequest("NoticeOfDownloadAuthorityData", {
            IsReady: "Y",
        });
        doRequest("NoticeOfCardSystemInit", {
            IsCardSystemInit: "1",
        });
        doRequest("NoticeOfUpgradeApp", {
            AppVersion: "361.5.36",
        });
        doRequest("NoticeOfDeviceParamsUpdate", {
            BasicParams: {
                DeviceName: "测试设备beta2222",
                ServerIP: "172.0.0.1",
                ServerPort: 3000,
                IsAutoRestart: 0,
                DailyRestartTime: "02:00:00",
                QrCodeSwitch: 0,
                IsSupportCard: 0,
                MainUIType: 1,
                HeartBeatInterval: 10000,
            },
            RecognitionParams: {
                SimilityThreshold: "75",
                QualityThreshold: "80",
                MinFacePixel: 100,
                MaxFacePixel: 1000,
                IsAlive: 0,
                LivingThreshold: "99.999",
            },
            HardWareParams: {
                DebugModeSwitch: 0,
            },
        });
        // doRequest("UploadRecords", {
        //     DeviceUniqueCode: "909090",
        //     RecordID: 110003,
        //     RecordTime: getTime(),
        //     ActionType: 2,
        //     DeviceType: 2,
        //     UniqueCode: "1048577",
        //     CapturePhoto:
        //         "/9j/4AAQSkZJRgABAQAA6EK9cpyRLrXuk19zAAQ\nhJd6U4i7PVZAdfJCEvaYTxlFt7lX4QkvcDyQhR7Htq1BCR380ITnZQwPF5IdpqblCEreV3pEgAA7\nyonU9UIRC9EhCFnunqP/2Q\u003d\u003d\n",
        //     SimilarityScore: "75.68",
        //     SimilarityThreshold: "75.00",
        //     QualityScore: "83.59",
        //     QualityThreshold: "80.00",
        //     IsAlive: "Y",
        //     AccessDoorID: 1,
        //     AccessCode: "100",
        //     AccessResult: "开门成功",
        //     IDType: 1,
        //     IDNo: "",
        //     CardNo: "135214665",
        // });
    } catch (e) {
        console.log("exception" + JSON.stringify(e));
    }
}, 10000);

console.log("start");
