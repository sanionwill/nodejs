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
        doRequest("UploadRecords", {
            DeviceUniqueCode: "909090",
            RecordID: 110003,
            RecordTime: getTime(),
            ActionType: 2,
            DeviceType: 2,
            UniqueCode: "1048577",
            CapturePhoto:
                "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\nyonU9UIRC9EhCFnunqP/2Q\u003d\u003d\n",
            SimilarityScore: "75.68",
            SimilarityThreshold: "75.00",
            QualityScore: "83.59",
            QualityThreshold: "80.00",
            IsAlive: "Y",
            AccessDoorID: 1,
            AccessCode: "100",
            AccessResult: "开门成功",
            IDType: 1,
            IDNo: "",
            CardNo: "135214665",
        });
    } catch (e) {
        console.log("exception" + JSON.stringify(e));
    }
}, 10000);

console.log("start");
